import { createServer } from "node:http";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("./public/", import.meta.url));
const dataRoot = fileURLToPath(new URL("./.data/", import.meta.url));
const port = Number(process.env.PORT || 4173);
const fourYiBaseUrl = (process.env.FOURYI_BASE_URL || "https://app.4yi.ai/api/v1").replace(/\/$/, "");
const bootedAt = new Date().toISOString();
const serverBuild = "2026-09-14-ai-draft-friendly-errors";

function textProviderConfig() {
  return {
    apiKey: process.env.FOURYI_API_KEY || process.env.AI_API_KEY,
    baseUrl: (process.env.AI_BASE_URL || fourYiBaseUrl).replace(/\/$/, ""),
    model: process.env.AI_MODEL || "claude-opus-5"
  };
}

function imageProviderConfig() {
  return {
    apiKey: process.env.FOURYI_API_KEY || process.env.AI_IMAGE_API_KEY || process.env.AI_API_KEY,
    baseUrl: (process.env.AI_IMAGE_BASE_URL || process.env.AI_BASE_URL || fourYiBaseUrl).replace(/\/$/, ""),
    model: process.env.AI_IMAGE_MODEL || "gpt-5-image"
  };
}

const mime = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".webp": "image/webp"
};

function json(res, status, body) {
  res.writeHead(status, { "Content-Type": "application/json; charset=utf-8" });
  res.end(JSON.stringify(body));
}

function friendlyError(error) {
  const message = error?.message || "服务器错误";
  if (message === "fetch failed" || /fetch failed/i.test(message)) {
    return "4YI网关连接失败：本地后端 Node 进程没有成功访问 app.4yi.ai。请确认服务器是在正常网络环境启动，或检查系统代理、防火墙、DNS、证书和热点网络限制。";
  }
  return message;
}

async function readBody(req) {
  let body = "";
  for await (const chunk of req) {
    body += chunk;
    if (body.length > 2_000_000) throw new Error("请求内容过大");
  }
  return JSON.parse(body || "{}");
}

async function generateWithProvider(payload) {
  const { apiKey, baseUrl, model } = textProviderConfig();
  if (!apiKey) return null;

  const body = {
    model,
    messages: [
      {
        role: "system",
        content:
          "你是专业中文网文创作助手。严格遵守用户给出的世界观、人物设定、固定事实、动态记忆、章节任务和输出格式；不擅自改变角色身份、能力限制、关系、时间线和已埋伏笔。没有设定的部分可以自由发挥，但必须保持因果连贯、人物动机合理、情绪细节自然。输出直接可用的正文或指定结构化内容，不解释过程。"
      },
      { role: "user", content: payload.prompt }
    ]
  };

  body.temperature = payload.temperature ?? 0.8;

  const response = await fetch(`${baseUrl}/chat/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`
    },
    body: JSON.stringify(body)
  });

  if (!response.ok) {
    throw new Error(`AI 服务返回 ${response.status}: ${await response.text()}`);
  }

  const data = await response.json();
  return data.choices?.[0]?.message?.content?.trim() || "";
}

async function generateImage(payload) {
  const { apiKey, baseUrl, model } = imageProviderConfig();
  if (!apiKey) return null;
  const body = {
    model,
    prompt: payload.prompt,
    size: payload.size || "1536x1024",
    quality: payload.quality || "medium",
    n: 1,
    response_format: "b64_json"
  };
  if (Array.isArray(payload.referenceImages) && payload.referenceImages.length) {
    body.reference_images = payload.referenceImages;
  }
  const response = await fetch(`${baseUrl}/images/generations`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${apiKey}` },
    body: JSON.stringify(body)
  });
  if (!response.ok) throw new Error(`图像服务返回 ${response.status}: ${await response.text()}`);
  const data = await response.json();
  const item = data.data?.[0];
  return item?.b64_json ? `data:image/png;base64,${item.b64_json}` : item?.url || null;
}

async function saveProjectBackup(project) {
  await mkdir(dataRoot, { recursive: true });
  const safeId = String(project.id || "unknown").replace(/[^a-zA-Z0-9_-]/g, "_");
  await writeFile(join(dataRoot, `${safeId}.json`), JSON.stringify(project, null, 2), "utf8");
  return new Date().toISOString();
}

const server = createServer(async (req, res) => {
  try {
    const url = new URL(req.url, `http://${req.headers.host}`);

    if (req.method === "GET" && url.pathname === "/api/status") {
      const textConfig = textProviderConfig();
      const imageConfig = imageProviderConfig();
      return json(res, 200, {
        provider: "4yi",
        connected: Boolean(textConfig.apiKey),
        model: textConfig.apiKey ? textConfig.model : "演示模式",
        imageConnected: Boolean(imageConfig.apiKey),
        imageModel: imageConfig.apiKey ? imageConfig.model : "待配置",
        bootedAt,
        serverBuild
      });
    }

    if (req.method === "GET" && url.pathname === "/api/models") {
      const { apiKey, baseUrl } = textProviderConfig();
      if (!apiKey) return json(res, 200, { configured: false, models: [] });
      const response = await fetch(`${baseUrl}/models`, {
        headers: { Authorization: `Bearer ${apiKey}` }
      });
      if (!response.ok) throw new Error(`4yi 模型列表返回 ${response.status}: ${await response.text()}`);
      const data = await response.json();
      return json(res, 200, { configured: true, models: data.data || data.models || [] });
    }

    if (req.method === "POST" && url.pathname === "/api/generate") {
      const payload = await readBody(req);
      const content = await generateWithProvider(payload);
      if (!content) {
        return json(res, 200, { demo: true, content: "" });
      }
      return json(res, 200, { demo: false, content });
    }

    if (req.method === "POST" && url.pathname === "/api/image") {
      const payload = await readBody(req);
      const imageUrl = await generateImage(payload);
      if (!imageUrl) return json(res, 200, { configured: false, imageUrl: null });
      return json(res, 200, { configured: true, imageUrl });
    }

    if (req.method === "POST" && url.pathname === "/api/projects/sync") {
      const payload = await readBody(req);
      if (!payload.project?.id) return json(res, 400, { error: "缺少项目数据" });
      const syncedAt = await saveProjectBackup(payload.project);
      return json(res, 200, { syncedAt, storage: "server" });
    }

    if (req.method === "GET" && url.pathname.startsWith("/api/projects/")) {
      const id = url.pathname.split("/").pop().replace(/[^a-zA-Z0-9_-]/g, "_");
      const projectData = JSON.parse(await readFile(join(dataRoot, `${id}.json`), "utf8"));
      return json(res, 200, { project: projectData });
    }

    if (req.method !== "GET") return json(res, 405, { error: "Method not allowed" });

    const relative = url.pathname === "/" ? "index.html" : decodeURIComponent(url.pathname.slice(1));
    const safePath = normalize(relative).replace(/^(\.\.(\/|\\|$))+/, "");
    const target = join(root, safePath);
    if (!target.startsWith(root)) return json(res, 403, { error: "Forbidden" });

    const file = await readFile(target);
    res.writeHead(200, {
      "Content-Type": mime[extname(target)] || "application/octet-stream",
      "Cache-Control": "no-cache"
    });
    res.end(file);
  } catch (error) {
    if (error.code === "ENOENT") {
      try {
        const file = await readFile(join(root, "index.html"));
        res.writeHead(200, { "Content-Type": mime[".html"] });
        return res.end(file);
      } catch {}
    }
    json(res, 500, { error: friendlyError(error) });
  }
});

server.listen(port, "127.0.0.1", () => {
  console.log(`4YI小说创作平台已启动：http://127.0.0.1:${port}`);
});
