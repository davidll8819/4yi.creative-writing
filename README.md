# 4YI · AI 小说创作台

首版聚焦三个模块：

1. 小说项目管理：项目、题材、章节、故事圣经与视觉资产。
2. AI 小说写作：续写、润色、扩写、改写、逻辑检查和章节摘要。
3. AI 漫画/分镜：章节资产预检、镜头拆分、画面提示词与运动提示词。

## 本地运行

需要 Node.js 20 或更高版本，不需要安装第三方依赖。

```powershell
npm run dev
```

浏览器打开 `http://127.0.0.1:4173`。

## 接入 AI

默认使用演示模式。设置以下环境变量后，服务端会调用兼容 OpenAI
`/chat/completions` 协议的模型服务：

```powershell
$env:AI_API_KEY="你的密钥"
$env:AI_BASE_URL="https://api.openai.com/v1"
$env:AI_MODEL="gpt-4.1-mini"
npm run dev
```

密钥只保存在服务端环境变量中，不会发送到浏览器或写入项目文件。

### 接入真实图像生成

图像接口使用兼容 OpenAI `/images/generations` 的服务：

```powershell
$env:AI_IMAGE_API_KEY="你的图像模型密钥"
$env:AI_IMAGE_BASE_URL="https://api.openai.com/v1"
$env:AI_IMAGE_MODEL="gpt-image-1"
npm run dev
```

配置后可生成资产定妆图、单镜画面或批量故事板；未配置时界面会明确显示“图像API待配置”，不会用占位图冒充真实结果。

## 数据、备份与版本

项目会自动保存在浏览器 `localStorage`。顶部“云端备份”会把项目 JSON 同步到当前
Node 服务的 `.data` 目录，并在本机保留最近 20 个历史版本；还支持 JSON 导入、导出和
历史版本恢复。把此 Node 服务部署到云服务器并挂载持久化磁盘后，该接口即可作为基础
云备份。正式商业版仍建议替换为账号体系、云数据库、对象存储和异步生成任务队列。

项目中的《剧本创作规则.md》作为后续 AI 提示词模板和分镜输出规范的依据。
# 4yi API 接入

项目默认使用 4yi 的 OpenAI 兼容接口：

- 写作模型：`claude-opus-5`
- 图片模型：`gpt-5-image`
- 接口地址：`https://app.4yi.ai/api/v1`

在 PowerShell 中启动前设置密钥（不要把完整密钥写进前端代码）：

```powershell
$env:FOURYI_API_KEY="你的完整4yi密钥"
npm start
```

也可以覆盖默认模型：

```powershell
$env:AI_MODEL="claude-opus-5"
$env:AI_IMAGE_MODEL="gpt-5-image"
```
