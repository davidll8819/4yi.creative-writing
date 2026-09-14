const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const uid = () => crypto.randomUUID?.() || `${Date.now()}-${Math.random()}`;
const countText = (text = "") => text.replace(/\s/g, "").length;
const escapeHtml = (value = "") =>
  value.replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" })[char]);

const demoChapter = `铜锣声砸进雨夜时，沈砚正被人按在朱雀街的泥水里。

“一个连灵根都没有的废物，也敢冒充镇妖司的人？”

刀锋贴上后颈。沈砚没有挣扎，只盯着眼前那行只有他能看见的淡金色小字——

【万物账簿已开启。】
【当前可交换：三年寿命。】
【可获得：凶手下一步动作。】

他笑了：“换。”

下一瞬，他猛地偏头。刀锋擦着耳侧落空，持刀人的手腕却像主动送来一般，被沈砚反手扣住。围观的人群还没反应过来，街角那盏熄灭的灯笼突然亮了。

灯下站着一个本该死了七天的人。`;

const initialProject = {
  id: "demo-project",
  title: "长安异闻账",
  logline: "现代审计师穿越妖气长安，用寿命交换线索，在七天内查清自己的死亡。",
  genre: ["穿越", "悬疑", "系统流"],
  era: "架空古代",
  tone: "轻松悬疑",
  pov: "第三人称",
  targetWords: 200000,
  visualStyle: "东方志怪漫画",
  storyboardStyle: "手绘电影风",
  progress: 12,
  updatedAt: Date.now(),
  bible: {
    rules: "万物账簿可以交换信息，但每次必须付出明确代价；交换结果不会说谎。",
    locked: ["沈砚没有灵根", "故事主线发生在七天内", "账簿无法直接指出幕后主使"]
  },
  chapters: [
    { id: "c1", title: "第一集 雨夜索命", content: demoChapter, status: "初稿", summary: "沈砚遭伏击，首次用寿命换取行动预判，并看到已死之人。", updatedAt: Date.now() },
    { id: "c2", title: "第二集 死人来信", content: "", status: "待写", summary: "", updatedAt: Date.now() }
  ],
  assets: [
    { id: "a1", type: "character", name: "沈砚", desc: "24岁，黑发高束，深青色破损官服，克制冷静，左眉尾小痣", version: "常服 v1" },
    { id: "a2", type: "character", name: "陆离", desc: "28岁，镇妖司校尉，玄色窄袖劲装，右眼有旧伤", version: "夜巡 v1" },
    { id: "a3", type: "scene", name: "朱雀街", desc: "架空长安雨夜，青石街、红灯笼、坊门与积水倒影", version: "雨夜 v1" },
    { id: "a4", type: "prop", name: "万物账簿", desc: "暗金色半透明古籍界面，边缘有篆文流光", version: "开启态 v1" }
  ],
  outline: {
    locked: true,
    premise: "现代审计师沈砚穿越妖气长安，以寿命为代价交换真相，在七天倒计时中追查自己的死亡。",
    acts: [
      { title: "第一章 · 死局开张", summary: "沈砚遭伏击并发现死者复生，被迫接下镇妖司不可能完成的案子。", chapters: ["第一集 雨夜索命", "第二集 死人来信", "第三集 账簿的代价"] },
      { title: "第二章 · 长安皆谜", summary: "线索指向朝堂与妖市，伙伴关系破裂，沈砚发现自己的穿越早被人设计。", chapters: ["第四集 妖市黑账", "第五集 故人反目", "第六集 第二个沈砚"] },
      { title: "第三章 · 七日归零", summary: "所有交易汇入终局，沈砚必须在真相、寿命与长安之间做出最后选择。", chapters: ["第七集 长安封城", "第八集 以命换命", "第九集 账簿合上之时"] }
    ]
  },
  storyboards: {},
  storyboardAssets: {}
};

const STYLE_PACKS = [
  { id: "longform", name: "长篇网文稳态包", desc: "强钩子、快节奏、稳定升级、章末追读", tone: "热血爽感" },
  { id: "suspense", name: "悬疑递进控制包", desc: "信息差、证据链、真假线索、限时压力", tone: "悬疑压迫" },
  { id: "romance", name: "关系拉扯情绪包", desc: "人物动机、关系升降、误会回收、情绪峰值", tone: "甜宠拉扯" },
  { id: "shortdrama", name: "短剧高密反转包", desc: "三秒冲突、十五秒反转、强视觉动作", tone: "热血爽感" }
];
const STYLE_MODULE_GROUPS = [
  { id: "voice", name: "语言与AI痕迹", desc: "控制叙述口吻、套话与重复", modules: [
    ["human-voice","去AI味与真人质感"],["filter-words","高频词与句式过滤"],["sensory","感官细节与在场感"],["sentence-rhythm","长短句节奏"]
  ] },
  { id: "dialogue", name: "对白与人物口吻", desc: "区分人物声音并让对话承担信息", modules: [
    ["dialogue-progress","对话情绪五级递进"],["subtext","潜台词与信息控制"],["voice-print","人物专属语言指纹"]
  ] },
  { id: "structure", name: "剧情结构与套路", desc: "控制冲突、反转、钩子和爽点密度", modules: [
    ["scene-four-step","小场四步法"],["tension","张力节奏三铁律"],["conflict","矛盾与结构设计"],["reversal","反转设计套路"],["chapter-hook","章末追读钩子"]
  ] },
  { id: "character", name: "任务与世界约束", desc: "锁定任务、人设、关系和设定边界", modules: [
    ["character-arc","人物生成与关系网"],["power-limit","金手指与世界限制"],["foreshadow","伏笔与期待链"]
  ] },
  { id: "quality", name: "质量检查", desc: "成稿后的自动审阅规则", modules: [
    ["task-audit","章节任务完成度"],["logic-audit","逻辑与时间线检查"],["repeat-audit","重复啰嗦检测"]
  ] }
];

const STYLE_RULE_TEMPLATES = {
  "human-voice": "用具体动作和可观察的细节呈现情绪，删去替读者总结感受的句子；保留人物自身的语气与犹豫。",
  "filter-words": "检查重复的抽象形容词、套话和相同句式；优先改成符合场景的动作、对白或物件细节。",
  sensory: "每个重要场景选择一两种与情节有关的感官线索，让环境参与冲突，避免堆砌形容。",
  "sentence-rhythm": "动作紧迫时用短句推进，思考与余波时允许长句；同一段中避免机械地重复一种句长。",
  "dialogue-progress": "对白每轮都应改变信息、关系或行动；人物情绪随对话逐层变化，不让角色轮流解释设定。",
  subtext: "重要对白保留言外之意；人物可以回避问题、改变话题或用行动暴露真实意图。",
  "voice-print": "给主要人物保持稳定的用词、语速和关注点，使读者不用看称谓也能辨认说话者。",
  "scene-four-step": "每个关键场景明确目标、阻力、行动和结果；结果要改变下一场的处境。",
  tension: "冲突逐步加码，胜利也要带来新代价；不要让连续场景都停留在同一种压力水平。",
  conflict: "让人物目标互相抵触，反转应由既有选择和信息推动，而非凭空增加新规则。",
  reversal: "反转前埋下可回看的证据，反转后改变人物行动，避免只揭示信息而不产生后果。",
  "chapter-hook": "章末留下具体未解决的危险、证据或选择，并与下一章开场形成因果连接。",
  "character-arc": "主要人物有可追踪的欲望、弱点与关系变化；行为应符合已确认的人设和当前处境。",
  "power-limit": "能力必须遵守已写明的触发条件、代价和上限；升级要同时产生新的限制或冲突。",
  foreshadow: "记录本章新增与回收的伏笔，兑现时尊重前文信息，不用临时设定替代回收。",
  "task-audit": "成稿后逐项核对本章任务卡中的目标、必须事件和禁区，指出缺漏及对应段落。",
  "logic-audit": "核对人物位置、时间顺序、已知信息和能力边界；有冲突时明确指出依据。",
  "repeat-audit": "检查重复解释、重复情绪描写和同义反复，保留推进剧情所需的信息。"
};

const STORYBOARD_STYLE_GUIDES = {
  "手绘电影风": { temp: "暖/冷", family: "通用", prompt: "hand drawn cinematic storyboard, pencil line art, rough director thumbnails, clear action arrows, camera notes, strong film composition, readable blocking" },
  "国风水墨": { temp: "冷/暗", family: "国风", prompt: "Chinese ink wash illustration, xuan paper texture, flowing brush strokes, restrained dark cool palette, poetic negative space, oriental cinematic composition" },
  "日系动画": { temp: "暖/烈", family: "日系", prompt: "Japanese anime key visual style, clean line art, cel shading, warm intense colors, expressive faces, dynamic animation framing" },
  "写实电影": { temp: "冷/暗", family: "欧美", prompt: "realistic cinematic film still, cool dark practical lighting, natural skin texture, detailed environment, believable lens perspective, western movie tone" },
  "水彩绘本风": { temp: "暖", family: "通用", prompt: "warm watercolor picture book style, soft paper grain, gentle hand painted edges, bright readable silhouettes, emotional storybook composition" },
  "厚涂油画风": { temp: "烈/暗", family: "欧美", prompt: "thick impasto oil painting style, dramatic brush texture, intense dark palette, strong chiaroscuro, western fantasy illustration finish" },
  "美式漫画风": { temp: "烈", family: "欧美", prompt: "American comic book style, bold ink outlines, intense saturated colors, halftone accents, heroic dynamic panel composition" },
  "哥特暗黑风": { temp: "暗", family: "欧美", prompt: "gothic dark fantasy style, shadowy cathedral mood, pale highlights, ornate silhouettes, dramatic horror-adjacent atmosphere without gore" },
  "赛博朋克风": { temp: "冷/烈", family: "通用", prompt: "cyberpunk neon style, cold blue shadows and intense magenta highlights, rain reflections, futuristic city lighting, high contrast cinematic frame" },
  "工笔重彩风": { temp: "暖/烈", family: "国风", prompt: "Chinese meticulous gongbi heavy color painting, precise fine lines, mineral pigments, ornate clothing patterns, warm intense traditional palette" },
  "极简扁平风": { temp: "暖/冷", family: "通用", prompt: "minimal flat illustration style, clean geometric shapes, controlled warm or cool palette, simplified forms, crisp readable composition" },
  "素描风格": { temp: "冷/暗", family: "通用", prompt: "charcoal and graphite sketch style, cool dark monochrome values, visible hatching, rough construction lines, strong light and shadow blocking" }
};

const STORYBOARD_NEGATIVE_PROMPT = "do not change character identity, no mismatched costume, no different face, no unrelated characters, no extra limbs, no blurry image, no watermark, no random text, no inconsistent scene layout";

const QUICK_OPTIONS = {
  mode: ["模板创作", "自定义标签"],
  language: ["中文", "英文"],
  audience: ["男频", "女频", "儿童", "全龄"],
  platform: ["晋江文学城", "番茄", "七猫", "起点", "知乎", "潇湘书院", "云起书院", "豆瓣阅读", "刺猬猫", "Wattpad", "Radish", "Dreame"],
  length: ["短篇 3-10万字", "中篇 10-30万字", "长篇 50-100万字", "超长篇 100万字以上"],
  pov: ["第一人称", "第三人称", "双视角", "多视角"],
  styleMode: ["强爽点", "经典作品", "简洁直白", "强悬疑", "知乎短文", "幽默搞笑", "儿童故事", "总裁文", "穿越文", "纯爱", "虐恋文", "甜宠文", "种田文", "女强文", "宫斗文", "娱乐圈文", "年代文", "无CP", "替身文", "脑洞文", "团宠文", "医妃文", "军恋文", "读心流", "攻略文", "真假千金文", "先婚后爱流", "耽美文", "随身文", "进化文", "异能文", "属性文", "港综文", "综漫文", "地府文", "家庭伦理", "犯罪", "古墓文", "侦探文", "心理", "婆媳文", "校园文", "重生文", "宅斗文", "萌宝文", "快穿文", "星际文", "系统文", "大女主文", "空间文", "马甲文", "女尊文", "女配文", "契约流", "商战流", "前妻流", "退婚流", "恶搞流", "闪婚流", "摆烂流", "躺赢流", "师徒流", "高干文", "考研文", "奶爸文", "美食文", "日常文", "轻小说", "科幻言情", "机甲文", "异兽文", "祖宗文", "皇帝文", "天庭文", "巫师文", "至尊文", "气运文", "蒸汽朋克流", "天灾文", "吸血鬼文", "狼人文", "abo文", "东方玄幻文", "西方魔幻文", "现代奇幻文", "重男轻女流", "boss文"],
  era: ["古代", "现代", "未来", "架空"],
  genre: ["随机", "都市", "言情", "宫斗", "宅斗", "末世", "修仙", "玄幻", "系统流", "重生", "穿越", "经营", "悬疑", "儿童冒险", "科幻", "奇幻", "武侠", "仙侠", "年代", "校园", "商战", "娱乐圈", "电竞", "无限流", "快穿", "种田", "美食", "军旅"],
  goldfinger: ["是", "否"],
  fixedTemplate: ["先婚后爱甜宠", "霸总甜宠日常", "穿书女配逆袭", "真假千金逆袭", "重生复仇女王", "追妻火葬场", "豪门虐恋情深", "古装大女主", "重生复仇", "龙王归来", "职场逆袭", "赘婿逆袭", "神豪系统", "玄幻修仙", "重生商业帝王", "医圣下山", "穿越架空甜爽", "快穿虐渣系统", "强强联手", "双面人生", "替身逆袭", "古装探案CP", "娱乐圈顶流", "民国谍战情深"],
  plotType: ["男频脑洞", "女频脑洞", "悬疑惊悚", "玄幻仙侠", "青春虐恋", "古言虐恋", "历史古代", "都市日常", "宫斗宅斗", "现言甜宠"],
  rhythmTemplate: ["极速爆款 1000字", "快节奏 1600字", "精品微小说 2300字", "长篇小说 3500字"],
  chapterCount: ["10章", "20章", "30章", "50章", "80章", "100章", "150章", "200章"],
  piecesPerChapter: ["1篇", "3篇", "5篇", "10篇", "20篇", "30篇"],
  worldviewTemplate: ["现代都市", "古代宫廷", "玄幻修仙", "科幻未来", "民国传奇", "武侠江湖"],
  goldfingerType: ["系统流", "血脉觉醒", "外挂神器", "知识型", "能力型", "不劳而获系统", "势力/店铺系统", "职业类系统", "任务类系统", "选择类系统", "幕后系统", "学霸系统", "提示类系统", "推演模拟器", "声望信仰类", "反派类系统", "合成类系统", "复制类系统", "功德类系统", "抽奖商城类", "吞噬类系统", "面板类", "重生信息差", "体质类金手指", "能力类金手指", "特殊类金手指", "快穿系统"],
  titleStructure: ["情绪事件 + 反差", "身份标签 + 身份反差/高爆钩子", "世界观 + 反差/高爆福利", "时间标签 + 爽点", "原著IP + 颠覆性脑洞"],
  femaleLead: ["随机", "呆萌", "傲娇", "高冷", "耽美女主", "灰姑娘", "大小姐", "泼辣", "御姐", "萝莉", "女尊", "吃货", "财迷", "花痴", "古灵精怪", "天才", "直球", "控制狂", "神医", "特工", "学霸", "毒舌", "逗比", "海后", "绿茶", "白莲花", "白月光", "圣母", "家族弃女", "温婉", "废柴", "咸鱼", "摆烂", "自律", "扮猪吃虎", "聪慧", "神秘", "天真", "话痨", "腹黑", "热血", "恋爱脑", "独立", "贤妻良母", "多面人格", "外星人", "女汉子", "开心果", "小恶魔", "文静", "凉薄", "清纯", "妖媚", "小仙女", "佛系", "乖巧", "坚强", "慵懒晚期", "反套路", "女武神", "社交达人", "女强人", "女巫", "系统携带者"],
  maleLead: ["随机", "阴郁", "腹黑", "阳光", "骚气", "逗比", "热血", "面瘫", "自闭", "装纯", "谨慎", "潇洒", "暴戾", "校霸", "学霸", "学渣", "斯文败类", "白切黑", "狼狗", "奶狗", "弟弟型", "毒蛇", "残疾", "二代", "帝王", "天才", "恶魔", "铁血", "兵王", "魔尊", "仙帝", "神秘", "慵懒", "冰山", "精英", "游戏高手", "杀手", "狂野不羁", "幽默风趣", "侠客", "才子", "外星人", "沉默寡言", "风流倜傥", "野心家", "公子哥", "少年郎", "谦谦君子", "锦衣卫", "情圣", "忠犬", "话痨", "忍辱负重", "单纯", "小混混", "阴柔", "风流", "沉稳", "心机深", "干练", "多情", "多病", "重情重义", "美食大师", "吐槽达人", "运动健将", "战略大师", "流浪者", "总裁", "暖男", "美强惨", "痞帅", "疯批", "高岭之花", "渣男", "运筹帷幄", "改革者", "纯真", "偏爱女主", "占有欲强", "病娇", "狼人", "无男主", "吸血鬼", "不按常理出牌", "异能觉醒者"],
  villain: ["随机", "伪善型", "嫉妒型", "绿茶型", "病娇型", "黑化型", "智谋型", "复仇型", "小三", "恶霸男配", "恶毒继母", "恶毒继父", "竞争对手", "前男友", "前女友", "负心汉", "出轨渣男", "迷糊反派", "权臣", "天灾", "地痞流氓", "异能组织", "校园恶霸", "前世情敌", "邪恶保姆", "家族压力", "家仆内奸", "妖魔鬼怪", "伪君子", "汉奸", "军阀", "特务", "江湖骗子", "门派叛徒", "作弊者", "黑粉", "凶手", "帮凶", "白眼狼", "幕后黑手", "旧情人", "前朝余孽", "妈宝男", "黑道人物", "秘密情人", "笨贼", "自我镜像", "恶毒女配型", "阴险狡诈型", "权力欲望型", "自私自利型", "心理扭曲型", "理念冲突型", "立场对立型", "复杂矛盾型", "反派重生者", "虚伪的闺蜜", "背叛的好友", "叛逆的子女", "自私的亲戚", "贪婪的邻居", "狠心的家人", "嫉妒心强的兄弟姐妹", "心怀不轨的秘书/下属", "勾心斗角的后宫嫔妃", "刻薄的长辈", "心机深沉的姐姐/妹妹", "严格的导师", "背叛的朋友", "邪恶的妖魔", "仙界的反派", "邪恶的异能者", "严厉的老师", "上一世的仇人", "孤儿院恶霸", "不负责任的媒体", "乱政的官宦", "学术竞争对手", "恶意造谣者", "自私的同事", "苛刻的上司", "嫉妒的竞争对手", "有偏见的人", "贪婪的地主", "狡猾的村长", "自私的地方官", "天才发明家", "虚伪未婚夫", "系统操控者", "心理扭曲的追求者", "背后捅刀的朋友", "人性实验者"],
  plotHook: ["随机", "追妻火葬场", "优雅打脸", "穿书成反派后自救", "扮猪吃老虎", "重生复仇", "团宠", "修罗场", "金手指", "替身", "穿成人生对照组", "生态建设", "空间种植", "假戏真做", "商业巨擘", "捉迷藏", "家道中落", "厨艺比拼", "共同劳作", "重建家园", "三角恋", "多角恋", "意外邂逅", "同桌情缘", "匿名情书", "秘密基地", "毕业告白", "错拿手机", "运动会", "萌娃", "黑暗料理", "带球跑", "校园霸凌", "自我怀疑", "重男轻女", "破解谜团", "考研", "自恋", "校霸", "时尚逆袭", "技能解锁", "契约恋爱", "欢喜冤家", "海王鱼塘", "完美复仇", "先婚后爱", "浪漫约会", "旧情复燃", "打脸虐渣", "争夺孩子", "角色黑化", "亲情回暖", "父母祭天", "自我实现", "重组家庭", "雨中共伞", "冲喜", "偶遇前夫", "财迷", "相亲闹剧", "小三", "打脸反派", "前任比惨", "绿茶", "旧爱归来", "病娇", "秘密情人", "海后", "渣男", "气运争夺", "契约到期", "双向暗恋", "替嫁", "爱上反派", "伪替身", "真假合作", "双替身", "收购并购", "男二上位", "技术创新", "炮灰翻身", "攻略反派", "反派自救", "拯救反派", "配角上位", "白月光", "高岭之花", "理想破灭", "套路系统", "双废柴", "位面", "退婚反噬", "攻略", "异地恋", "师徒", "跨国婚姻", "古穿今", "恶搞告白", "未穿现", "恶搞约会", "强者归来", "恶搞日常", "崩人设", "备胎转正", "捡漏", "身份乌龙", "双重生", "真命天子", "破镜重圆", "真命天女", "女扮男装", "预言之子", "青梅竹马", "霸道护短", "真假千金", "回忆杀", "求生欲", "相爱相杀", "病情错付", "对抗命运", "召唤", "玄学", "炼器", "事务所", "制作人", "萌宠", "奇遇连连", "异兽驯养", "天降竹马", "互换人生", "三生三世", "马甲互怼", "近水楼台", "爱情战争", "真假废柴", "转世轮回", "杀妻证道", "修炼受挫", "空间灵泉", "悲情英雄", "龙傲天", "电车难题", "玛丽苏", "梦想破灭", "锦鲤", "规划未来", "咸鱼", "升级流", "双面间谍", "封神流", "战神流", "逆天改命", "掌心宠", "小妈文学", "自我攻略", "打卡签到", "直播", "记忆篡改", "聊天群", "抢红包", "卡牌", "抽卡", "抽奖", "纸片人", "时尚灾难", "氪金", "APP", "正邪相恋", "隐婚", "一念成魔", "退婚", "六道轮回", "离婚", "神器认主", "二婚", "美男环绕", "以身还债", "天劫", "报恩", "灵魂囚禁", "醉酒", "全员发疯", "假死", "前世今生", "绝症", "下药", "失忆", "忠犬男主", "明星红毯", "时间回溯", "试镜乌龙", "绯闻风波", "逆风翻盘", "综艺翻车", "系统升级", "粉丝互动", "意外走红", "记忆抹除", "道具失控", "爱而不得", "梦中背书", "轮回错过", "精神分裂", "家族仇恨", "网络暴力", "孤独旅程", "开家长会", "一见钟情", "黑心房东", "浪漫告白", "厨神争霸", "甜蜜日常", "资源掠夺", "解除误会", "灵宠传情", "团队内讧", "专属宠溺", "异能冲突", "自我镜像", "妙手回春", "人性实验", "药膳养生", "交换记忆", "改革时代", "收服神器", "流放", "流亡", "医术遭禁", "车祸", "癌症", "骨肉分离", "众叛亲离", "自我牺牲", "卧底身份", "技能满点", "掉马", "反派悔过", "替身误会", "萌娃助攻", "宠物助攻", "斗智", "变装", "技能误用", "子嗣荣耀", "姐妹互助", "至亲背刺", "挚爱背叛", "家族陷害", "好友反目", "子嗣夭折", "身心受虐", "绝境绝望", "默默守护", "秘密花园", "互赠信物", "月下私语", "共同成长", "公开示爱", "多系统", "信任崩塌", "孤独奋斗", "分享秘密", "时光倒流", "甜蜜同居", "浪漫求婚", "男女互穿", "灵魂互换", "技能乱入", "语言不通", "假面情人", "双重间谍", "教育改革", "文化传播", "反套路", "流落荒岛", "外星拾荒", "亲人牺牲", "能力封禁", "日常互宠", "反差萌", "假扮情侣", "双重身份", "科技狂", "时空错乱", "大丰收", "芥子空间", "空间禁锢", "能力衰退", "旧伤复发"],
  timeBackground: ["随机", "现代都市", "古代架空", "封建王朝", "末日废土", "异世界", "修真世界", "现代校园", "异能都市", "超级AI统治的未来地球", "古代宫廷", "修仙界", "核战后的地球", "现代修仙", "青春校园", "现代家庭", "现代豪门", "黑暗时代", "新兰大陆", "古代穿越", "现代军事战争", "苏联解体前后", "虚拟游戏中的异世界求生", "2050年全球机器人足球赛", "古代农商", "清末鸦片后的重建时代", "史前恐龙时代", "未来世界大战", "二战战场", "神话时代重现", "明末清初的抗清斗争", "澳大利亚内陆的佳民灵治", "克隆人时代", "未来世界的基因改造人社会", "以太界的飘渺仙踪", "魔法世界", "古代怪兽神话世界", "古代欧洲", "古代中东", "古代非洲", "未来深空探险", "未来校园", "赛博朋克", "西班牙", "抗日战争时期", "魔法学院都市", "旧时代香港", "古代中国", "东海龙宫", "未来城市地下城", "月球基地", "宋朝繁荣", "末日后的荒原", "18世纪欧洲", "极端生存环境", "19世纪英国庄园", "现代农村", "工业革命英国", "现代企业商战", "二战太平洋孤岛", "明清江南水乡", "太空站", "异界仙灵帝国", "现代特种部队", "90年代市场经济兴起", "时空管理局", "唐朝盛世长安", "汉代仙侠盛世", "古代医女大院", "海底人鱼帝国", "罗马帝国末期", "80年代改革开放期", "21世纪科技公司", "三国时期", "五四运动时期", "秦帝国", "古代江湖", "星际帝国", "古巴比伦文明", "量子纠缠时代", "安史之乱", "唐末农民起义", "隋朝统一", "南北朝", "五胡乱华", "东晋时期", "北宋时期", "唐宋农民起义", "东晋十六国", "太空探索时代", "西汉盛世", "未来校园", "魔法与基因改造的生物科技时代", "欧洲中世纪", "吸血鬼时代", "日据时期台湾", "穿越异世", "法国小镇", "阿兹特克帝国", "神秘岛屿", "乡村黑土地", "汉武帝时期", "90年代末的大学校园", "高中", "黑衣人", "西游记世界", "宋代武侠江湖", "末日之后的魔法复兴", "AI觉醒后的修仙纪元", "纳粹德国背景", "旧上海滩", "机甲时代", "地下神秘王国", "海边小镇", "1960年代美国", "未来太空舰队", "快穿系统"]
};

const QUICK_STEPS = [
  ["config", "核心要求"],
  ["inspiration", "灵感"],
  ["direction", "走向"],
  ["unit", "章节"],
  ["outline", "细纲"],
  ["draft", "正文"]
];
const QUICK_MULTI_FIELDS = new Set(["styleMode", "genre", "fixedTemplate", "plotType", "worldviewTemplate", "goldfingerType", "titleStructure", "femaleLead", "maleLead", "villain", "plotHook", "timeBackground"]);
const QUICK_COLLAPSE_LIMIT = 20;

const SAMPLE_SURNAMES = ["李", "陆", "林", "沈", "周", "陈", "许", "韩", "洛", "顾", "江", "秦", "谢", "孟", "叶", "宋", "楚", "白", "萧", "梁"];
const SAMPLE_GIVEN_NAMES = ["观澜", "知白", "砚秋", "承泽", "青栀", "云舟", "景行", "长宁", "疏影", "明微", "照夜", "星河", "临渊", "南枝", "见深", "归尘", "怀瑾", "听雪", "照川", "予安"];

function seededIndex(seed, offset, max) {
  let hash = 2166136261;
  const text = `${seed || Date.now()}-${offset}`;
  for (let index = 0; index < text.length; index += 1) {
    hash ^= text.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return Math.abs(hash) % max;
}

function samplePersonName(seed, offset = 0) {
  return `${SAMPLE_SURNAMES[seededIndex(seed, offset, SAMPLE_SURNAMES.length)]}${SAMPLE_GIVEN_NAMES[seededIndex(seed, offset + 31, SAMPLE_GIVEN_NAMES.length)]}`;
}

function normalizeStoryboardStyle(style) {
  return style === "手绘电影分镜" ? "手绘电影风" : (style || "手绘电影风");
}

const state = {
  view: "projects",
  projectId: null,
  chapterId: null,
  assetTab: "all",
  assetFocusId: null,
  assetSearch: "",
  entityTab: "all",
  entityListTab: "all",
  memoryTab: "all",
  storyboardTab: "shots",
  modal: null,
  bookSearch: "",
  styleDraft: null,
  styleDraftProjectId: null,
  wizardStep: 1,
  wizard: {},
  bookSetupCoverSerial: 0,
  bookIdea: { genre: "", style: "", genreValues: [], styleValues: [], genreOther: "", styleOther: "", premise: "", options: [], selected: -1, demo: false, premiseSerial: 0, premiseDemo: false },
  bookIdeaProgress: { kind: "", index: 0 },
  aiDraftConfig: { words: 1500, direction: "强冲突推进", note: "" },
  outlineExpand: { actCount: 3, chaptersPerAct: 5 },
  pendingAssets: [],
  assetPromptId: null,
  entityEditId: null,
  memoryEditId: null,
  legacyBibleOpen: false,
  deleteProjectId: null,
  trashDeleteId: null,
  aiStatus: { connected: false, model: "演示模式", imageConnected: false, imageModel: "待配置" },
  aiResult: "",
  busy: false,
  storyboardImageJob: null,
  quickWriting: loadQuickWriting(),
  quickExpanded: {},
  entitySearch: "",
  entityFocusId: null,
  entityFolderFilter: null,
  projects: loadProjects(),
  trash: loadTrash()
};

function loadProjects() {
  try {
    const data = JSON.parse(localStorage.getItem("museforge-projects"));
    return Array.isArray(data) && data.length ? data.map(normalizeProject) : [normalizeProject(structuredClone(initialProject))];
  } catch {
    return [normalizeProject(structuredClone(initialProject))];
  }
}
function loadTrash() {
  try {
    const data = JSON.parse(localStorage.getItem("museforge-trash"));
    return Array.isArray(data) ? data.map((entry) => ({ ...entry, project: normalizeProject(entry.project) })) : [];
  } catch {
    return [];
  }
}
function loadQuickWriting() {
  try {
    return normalizeQuickWriting(JSON.parse(localStorage.getItem("museforge-quick-writing")) || {});
  } catch {
    return normalizeQuickWriting();
  }
}
function normalizeProject(item) {
  const outline = item.outline || (item.id === "demo-project" ? structuredClone(initialProject.outline) : null);
  if (outline && typeof outline.locked !== "boolean") outline.locked = item.id === "demo-project";
  const defaultTask = () => ({ goal: "", requiredEvents: [], requiredCharacters: [], forbidden: [], foreshadow: "", hook: "" });
  const sourceChapters = item.chapters?.length ? item.chapters : [{ id: uid(), title: "第一章 未命名", content: "", status: "待写", summary: "", updatedAt: Date.now() }];
  const chapters = sourceChapters.map((chapter, index) => ({
    ...chapter,
    fineOutline: chapter.fineOutline || "",
    taskCard: { ...defaultTask(), ...(chapter.taskCard || {}) },
    qualityReport: chapter.qualityReport || null,
    scenes: (chapter.scenes || []).map((scene, sceneIndex) => normalizeScene(scene, sceneIndex)),
    revision: chapter.revision || 1,
    publishedAt: chapter.publishedAt || (chapter.status === "已完成" ? chapter.updatedAt : null),
    hasUnpublishedChanges: chapter.hasUnpublishedChanges || false,
    order: chapter.order ?? index
  }));
  const assets = (item.assets || []).map((asset) => ({
    ...asset,
    promptReady: asset.promptReady || Boolean(asset.prompt),
    imageStatus: asset.imageUrl ? "ready" : "pending-api",
    seed: asset.seed || Math.floor(Math.random() * 900000000),
    referenceWeight: asset.referenceWeight ?? 0.8,
    referenceImages: asset.referenceImages || [],
    views: asset.views || ["正面", "侧面", "背面"],
    outfits: asset.outfits || [asset.version || "基础造型 v1"],
    expressions: asset.expressions || ["平静", "警觉", "愤怒"]
  }));
  const entities = (item.entities?.length ? item.entities : assets.map((asset) => entityFromAsset(asset))).map(normalizeEntity);
  const bible = normalizeBible(item.bible);
  const memories = (item.memories?.length ? item.memories : migrateLegacyMemories(bible, chapters)).map(normalizeMemory);
  const volumes = normalizeVolumes(item.volumes, outline, chapters);
  repairSplitQuickDraftChapters(chapters, volumes);
  return {
    ...item,
    outline,
    bible,
    assets,
    entities,
    entityFolders: Array.isArray(item.entityFolders) ? item.entityFolders : [],
    memories,
    inspirationNotes: Array.isArray(item.inspirationNotes) ? item.inspirationNotes : [],
    styleProfile: normalizeStyleProfile(item),
    volumes,
    chapters,
    storyboards: item.storyboards || (item.shots?.length && item.chapters?.[0]?.id ? { [item.chapters[0].id]: item.shots } : {}),
    storyboardAssets: item.storyboardAssets || {},
    storyboardConfig: item.storyboardConfig || {},
    storyboardStyle: normalizeStoryboardStyle(item.storyboardStyle)
  };
}

function normalizeStyleProfile(item) {
  const pack = stylePackById(item.genesis?.stylePack);
  const defaults = ["human-voice", "filter-words", "dialogue-progress", "scene-four-step", "tension", "chapter-hook", "task-audit", "logic-audit"];
  const selected = item.genesis?.styleModules || defaults;
  const existing = item.styleProfile;
  return {
    name: existing?.name || pack.name,
    desc: existing?.desc ?? pack.desc,
    rules: Array.isArray(existing?.rules) ? existing.rules.map((rule) => ({
      id: rule.id || uid(), groupId: rule.groupId || "voice", title: rule.title || "未命名规则",
      content: rule.content || "", source: rule.source === "template" ? "template" : "custom",
      templateId: rule.templateId || "", policy: ["force", "auto", "ignore"].includes(rule.policy) ? rule.policy : "force"
    })) : STYLE_MODULE_GROUPS.flatMap((group) => group.modules.filter(([id]) => selected.includes(id)).map(([id, name]) => ({
      id: uid(), groupId: group.id, title: name, content: STYLE_RULE_TEMPLATES[id] || "",
      source: "template", templateId: id, policy: "force"
    })))
  };
}

function repairSplitQuickDraftChapters(chapters, volumes) {
  if (!Array.isArray(chapters) || !Array.isArray(volumes) || chapters.length < 2) return;
  const filled = chapters.filter((item) => String(item.content || "").trim()).length;
  const first = chapters.find((item) => String(item.content || "").trim());
  if (filled !== 1 || !first || countText(first.content) < 1000) return;
  if (!/第\s*\d+\s*篇[：:、\s]/.test(first.content)) return;

  const maxPieces = Math.max(1, ...volumes.map((volume) => volume.chapterIds?.length || 1));
  const draftPieces = splitQuickDraftByPiece({ draft: first.content, config: { chapterCount: volumes.length, piecesPerChapter: maxPieces } }, []);
  if (draftPieces.size <= 1) return;

  volumes.forEach((volume, volumeIndex) => {
    (volume.chapterIds || []).forEach((chapterId, pieceIndex) => {
      const target = chapters.find((item) => item.id === chapterId);
      const pieceContent = draftPieces.get(`${volumeIndex + 1}-${pieceIndex + 1}`);
      if (!target || !pieceContent) return;
      target.content = pieceContent;
      target.status = "快写初稿";
      target.updatedAt = Date.now();
    });
  });
}

function normalizeQuickWriting(item = {}) {
  const config = item.config || {};
  const rhythm = quickTextValue(config.rhythmTemplate);
  const normalizedRhythm = QUICK_OPTIONS.rhythmTemplate.includes(rhythm) ? rhythm
    : rhythm.includes("30秒") ? "极速爆款 1000字"
    : rhythm.includes("1分钟") ? "快节奏 1600字"
    : rhythm.includes("3分钟") ? "精品微小说 2300字"
    : rhythm.includes("5分钟") ? "长篇小说 3500字"
    : "精品微小说 2300字";
  return {
    step: item.step || "config",
    config: {
      mode: config.mode || "模板创作",
      language: config.language || "中文",
      audience: config.audience || "男频",
      platform: config.platform || "番茄",
      length: config.length || "长篇 50-100万字",
      pov: config.pov || "第三人称",
      styleMode: normalizeQuickArray(config.styleMode, ["强爽点"]),
      era: config.era || "现代",
      genre: normalizeQuickArray(config.genre, ["都市"]),
      goldfinger: config.goldfinger || "否",
      fixedTemplate: normalizeQuickArray(config.fixedTemplate, ["重生商业帝王"]),
      plotType: normalizeQuickArray(config.plotType, ["男频脑洞"]),
      rhythmTemplate: normalizedRhythm,
      worldviewTemplate: normalizeQuickArray(config.worldviewTemplate, ["现代都市"]),
      goldfingerType: normalizeQuickArray(config.goldfingerType, ["任务类系统"]),
      titleStructure: normalizeQuickArray(config.titleStructure, ["情绪事件 + 反差"]),
      maleLead: normalizeQuickArray(config.maleLead, ["随机"]),
      femaleLead: normalizeQuickArray(config.femaleLead, ["随机"]),
      villain: normalizeQuickArray(config.villain, ["随机"]),
      plotHook: normalizeQuickArray(config.plotHook, ["随机"]),
      timeBackground: normalizeQuickArray(config.timeBackground, ["随机"]),
      background: config.background || "",
      chapterCount: Number.parseInt(config.chapterCount, 10) || 20,
      piecesPerChapter: Number.parseInt(config.piecesPerChapter, 10) || 3,
      other: config.other || ""
    },
    inspiration: item.inspiration || "",
    directions: Array.isArray(item.directions) ? item.directions : [],
    selectedDirection: item.selectedDirection || "",
    units: Array.isArray(item.units) ? item.units : [],
    fineOutline: item.fineOutline || "",
    draftPieces: Array.isArray(item.draftPieces) ? item.draftPieces.map(normalizeQuickDraftPiece).filter(Boolean) : [],
    draft: item.draft || "",
    generationSerial: Number(item.generationSerial) || 0
  };
}
function normalizeQuickDraftPiece(piece = {}) {
  const chapterIndex = Number(piece.chapterIndex);
  const pieceIndex = Number(piece.pieceIndex);
  if (!Number.isFinite(chapterIndex) || !Number.isFinite(pieceIndex)) return null;
  return {
    chapterIndex,
    pieceIndex,
    title: piece.title || `第${chapterIndex + 1}章 第${pieceIndex + 1}篇`,
    content: String(piece.content || "").trim(),
    updatedAt: piece.updatedAt || Date.now()
  };
}
function normalizeQuickArray(value, fallback = []) {
  if (Array.isArray(value)) return value.filter(Boolean);
  if (typeof value === "string" && value.trim()) return [value.trim()];
  return fallback;
}
function normalizeScene(scene = {}, index = 0) {
  return {
    id: scene.id || uid(),
    title: scene.title || `场景 ${index + 1}`,
    summary: scene.summary || "",
    beat: scene.beat || "推进",
    tension: Number(scene.tension) || 3,
    tags: scene.tags || [],
    status: scene.status || "draft",
    linkedEntityIds: scene.linkedEntityIds || [],
    targetWords: Number(scene.targetWords) || 500
  };
}
function entityFromAsset(asset) {
  return {
    id: asset.id,
    type: asset.type === "scene" ? "location" : asset.type,
    name: asset.name,
    summary: asset.desc,
    status: "confirmed",
    aliases: [],
    relations: [],
    visualAssetId: asset.id,
    source: "visual-asset"
  };
}
function normalizeEntity(entity = {}) {
  return {
    id: entity.id || uid(),
    type: entity.type || "character",
    name: entity.name || "未命名设定",
    summary: entity.summary || entity.desc || "",
    content: entity.content || "",
    role: entity.role || "ordinary",
    scope: entity.scope || "manual",
    keyFacts: Array.isArray(entity.keyFacts) ? entity.keyFacts : [],
    attributes: Array.isArray(entity.attributes) ? entity.attributes : [],
    folderId: entity.folderId || null,
    volumeId: entity.volumeId || null,
    status: entity.status || "draft",
    aliases: entity.aliases || [],
    relations: entity.relations || [],
    parentId: entity.parentId || null,
    firstChapterId: entity.firstChapterId || null,
    visualAssetId: entity.visualAssetId || null,
    source: entity.source || "manual",
    createdAt: entity.createdAt || Date.now(),
    updatedAt: entity.updatedAt || Date.now()
  };
}
function normalizeMemory(memory = {}) {
  return {
    id: memory.id || uid(),
    type: memory.type || "plot",
    title: memory.title || "未命名事实",
    content: memory.content || "",
    chapterId: memory.chapterId || null,
    active: memory.active !== false,
    source: memory.source || "manual",
    sourceKey: memory.sourceKey || null,
    versions: memory.versions || [],
    entityIds: memory.entityIds || [],
    createdAt: memory.createdAt || Date.now(),
    updatedAt: memory.updatedAt || Date.now()
  };
}
function migrateLegacyMemories(bible, chapters) {
  const latestChapter = chapters.filter((c) => c.status === "已完成").at(-1)?.id || null;
  return [
    ...bible.facts.map((content) => ({ type: "plot", title: "章节事实", content, chapterId: latestChapter, source: "legacy" })),
    ...bible.timeline.map((content) => ({ type: "time", title: "时间线", content, chapterId: latestChapter, source: "legacy" })),
    ...bible.relationships.map((content) => ({ type: "relationship", title: "关系变化", content, chapterId: latestChapter, source: "legacy" })),
    ...bible.foreshadows.map((content) => ({ type: "clue", title: "开放伏笔", content, chapterId: latestChapter, source: "legacy" }))
  ];
}
function normalizeVolumes(volumes, outline, chapters) {
  if (volumes?.length) return volumes.map((volume, index) => ({ id: volume.id || uid(), title: volume.title || `第${index + 1}卷`, summary: volume.summary || "", chapterIds: volume.chapterIds || [] })).filter((volume)=>volume.chapterIds.length);
  if (!outline?.acts?.length) return [{ id: uid(), title: "第一卷", summary: "", chapterIds: chapters.map((c) => c.id) }];
  let offset = 0;
  const derived = outline.acts.map((act, index) => {
    const count = act.chapters?.length || 0;
    const chapterIds = chapters.slice(offset, offset + count).map((c) => c.id);
    offset += count;
    return { id: uid(), title: act.title || `第${index + 1}卷`, summary: act.summary || "", chapterIds };
  });
  if (offset < chapters.length) derived[derived.length - 1].chapterIds.push(...chapters.slice(offset).map((c) => c.id));
  return derived;
}
function normalizeBible(bible = {}) {
  return {
    rules: bible.rules || "",
    locked: bible.locked || [],
    worldRules: bible.worldRules || (bible.rules ? [bible.rules] : []),
    limitations: bible.limitations || [],
    timeline: bible.timeline || [],
    foreshadows: bible.foreshadows || [],
    resolvedForeshadows: bible.resolvedForeshadows || [],
    relationships: bible.relationships || [],
    facts: bible.facts || [],
    knowledge: bible.knowledge || [],
    changeImpacts: bible.changeImpacts || [],
    characterStates: bible.characterStates || {}
  };
}
function save() {
  localStorage.setItem("museforge-projects", JSON.stringify(state.projects));
  localStorage.setItem("museforge-trash", JSON.stringify(state.trash));
  localStorage.setItem("museforge-quick-writing", JSON.stringify(state.quickWriting));
}
function project() { return state.projectId ? state.projects.find((item) => item.id === state.projectId) || null : null; }
function chapter() {
  const p = project();
  return p?.chapters.find((item) => item.id === state.chapterId) || p?.chapters[0];
}
function quickWriting() {
  const c = state.quickWriting?.config;
  const rhythm = quickTextValue(c?.rhythmTemplate);
  if (!c || !Object.prototype.hasOwnProperty.call(c, "piecesPerChapter") || !QUICK_OPTIONS.rhythmTemplate.includes(rhythm)) {
    state.quickWriting = normalizeQuickWriting(state.quickWriting);
  }
  return state.quickWriting;
}
function toast(message) {
  $(".toast")?.remove();
  document.body.insertAdjacentHTML("beforeend", `<div class="toast">${escapeHtml(message)}</div>`);
  setTimeout(() => $(".toast")?.remove(), 2600);
}

async function checkAI() {
  try {
    state.aiStatus = await fetch("/api/status").then((res) => res.json());
  } catch {}
  render();
}

function nav() {
  const p = project();
  const projectItems = [
    ["outline", "◫", "大纲"],
    ["drafting", "✎", "初稿"],
    ["encyclopedia", "◉", "设定百科"],
    ["bible", "◎", "动态记忆"],
    ["style", "✦", "作品风格"],
    ["inspiration", "✧", "灵感墙"],
    ["finalize", "✓", "定稿"],
    ["assets", "◇", "资产"],
    ["storyboard", "▤", "分镜"]
  ];
  return `
    <aside class="sidebar">
      <div class="brand"><div class="brand-mark">4YI</div><div><strong>4YI小说创作平台</strong><small>AI NOVEL STUDIO</small></div></div>
      <button class="nav-btn ${state.view === "projects" ? "active" : ""}" data-view="projects"><span class="nav-icon">▦</span>项目中心</button>
      <button class="nav-btn ${state.view === "quick" ? "active" : ""}" data-view="quick">快速创作</button>
      <button class="nav-btn" data-action="new-project">创建新故事</button>
      ${p ? `<div class="project-scope"><span class="scope-divider"></span><span class="scope-name" title="${escapeHtml(p.title)}">${escapeHtml(p.title)}</span>
        <button class="nav-btn" data-action="open-book-search"><span class="nav-icon">⌕</span>搜索本书 <small>⌘K</small></button>
        ${projectItems.map(([id, icon, label]) => `<button class="nav-btn ${(state.view === id || (id === "drafting" && state.view === "writing")) ? "active" : ""}" data-view="${id}"><span class="nav-icon">${icon}</span>${label}</button>`).join("")}
      </div>` : ""}
      <div class="sidebar-foot">
        <div class="ai-state">
          <div class="status-line"><i class="status-dot ${state.aiStatus.connected ? "live" : ""}"></i>${state.aiStatus.connected ? "AI 已连接" : "AI 演示模式"}</div>
          <small>${escapeHtml(state.aiStatus.model)}</small>
        </div>
      </div>
    </aside>`;
}

function topbar() {
  const p = project();
  const title = state.view === "projects" ? "项目中心" : state.view === "quick" ? "快速创作" : escapeHtml(p?.title || "未选择项目");
  return `<div class="topbar">
    <div class="crumb">${state.view !== "projects" ? `<button class="back-link" data-action="back-projects">‹ 返回项目中心</button><span class="crumb-sep">/</span>` : ""}<b>${title}</b></div>
    <div class="top-actions">
      ${p ? `<button class="btn small ghost" data-action="sync-project">云端备份</button><button class="btn small ghost" data-action="open-versions">版本</button><button class="btn small ghost" data-action="export-project">导出</button>` : ""}
    </div>
  </div>`;
}

const listValue = (value) => Array.isArray(value) ? value.join("\n") : value || "";
const ENTITY_TYPES = [["collection","集合"],["character","角色"],["location","地点"],["faction","势力"],["prop","物品"],["skill","功法"],["rule","规则"],["background","背景"]];
const ENTITY_TYPE_LABELS = Object.fromEntries(ENTITY_TYPES);
const ENTITY_SCOPE_LABELS = { manual:"仅手动引用", global:"全书长期生效", volume:"绑定卷宗", off:"不要自动带入" };
function entityArticle(content) {
  return (content || "").split(/\n/).map((line) => {
    const safe = escapeHtml(line.trim());
    if (!safe) return "<div class=\"entity-article-gap\"></div>";
    if (/^#{1,3}\s/.test(line)) return `<h3>${safe.replace(/^#{1,3}\s*/, "")}</h3>`;
    if (/^【.+】$/.test(line.trim())) return `<h3>${safe}</h3>`;
    if (/^[-*•]\s/.test(line)) return `<p class="entity-bullet">• ${safe.replace(/^[-*•]\s*/, "")}</p>`;
    return `<p>${safe}</p>`;
  }).join("");
}
function encyclopediaView() {
  const p = project();
  const query = (state.entitySearch || "").trim();
  const filtered = p.entities.filter((entity) => {
    const listMatch = state.entityListTab === "todo" ? entity.status !== "confirmed" : state.entityListTab === "core" ? entity.role === "lead" || entity.scope === "global" : true;
    return listMatch && (state.entityTab === "all" || entity.type === state.entityTab)
      && (!state.entityFolderFilter || entity.folderId === state.entityFolderFilter)
      && (!query || `${entity.name} ${entity.summary} ${entity.content} ${entity.aliases.join(" ")} ${entity.keyFacts.join(" ")}`.toLowerCase().includes(query.toLowerCase()));
  });
  const focused = filtered.find((entity) => entity.id === state.entityFocusId) || filtered[0] || null;
  const first = focused ? p.chapters.find((c)=>c.id===focused.firstChapterId) : null;
  const visual = focused ? p.assets.find((asset)=>asset.id===focused.visualAssetId) : null;
  const folders = p.entityFolders || [];
  const outputReady = p.chapters.some((chapter) => chapter.status === "已完成");
  return `<div class="page-head"><div><p class="eyebrow">STORY ENCYCLOPEDIA</p><h1>设定百科</h1><p class="subtext">为人物、地点与世界规则建立可检索的完整档案，并控制它们何时进入创作上下文。</p></div><div class="head-actions"><button class="btn" data-action="sync-assets-entities">同步视觉资产</button><button class="btn" data-action="new-entity-folder">＋ 新建分组</button><button class="btn primary" data-action="new-entity">＋ 新建设定</button></div></div>
    <section class="entity-overview">
      <div><strong>${p.entities.length}</strong><span>设定实体</span></div><div><strong>${p.entities.filter((x)=>x.status==="confirmed").length}</strong><span>已确认</span></div><div><strong>${p.entities.filter((x)=>x.visualAssetId).length}</strong><span>已关联视觉资产</span></div><div><strong>${p.entities.reduce((n,x)=>n+x.relations.length,0)}</strong><span>关系记录</span></div>
    </section>
    <div class="entity-workspace">
      <aside class="panel entity-tree-panel">
        <div class="panel-head"><h3>万物百科</h3><span class="tag">有效 ${p.entities.filter(x=>x.status==="confirmed").length}</span></div>
        <div class="entity-tree-body">
          <div class="entity-list-tabs">${[["todo","待办"],["core","核心"],["all","全部"],["graph","图谱"]].map(([id,label])=>`<button data-entity-list-tab="${id}" class="${state.entityListTab===id?"active":""}">${label}</button>`).join("")}</div>
          <input class="entity-search" data-entity-search value="${escapeHtml(state.entitySearch || "")}" placeholder="搜索设定、角色、地点……" />
          <div class="entity-filter-pills">${[["all","全部"],...ENTITY_TYPES].map(([id,label]) => `<button class="${state.entityTab===id?"active":""}" data-entity-tab="${id}">${label}</button>`).join("")}</div>
          <div class="entity-folder-list"><button class="${!state.entityFolderFilter?"active":""}" data-entity-folder="">全部分组</button>${folders.map(folder=>`<button class="${state.entityFolderFilter===folder.id?"active":""}" data-entity-folder="${folder.id}">📁 ${escapeHtml(folder.name)} <small>${p.entities.filter(x=>x.folderId===folder.id).length}</small></button>`).join("")}</div>
          ${state.entityFolderFilter ? `<div class="entity-folder-actions"><button data-action="rename-entity-folder">重命名分组</button><button data-action="delete-entity-folder">删除分组</button></div>` : ""}
          <div class="entity-tree-groups">${filtered.map((entity) => `<button class="entity-tree-node ${focused?.id === entity.id ? "active" : ""}" data-entity-focus="${entity.id}"><span class="entity-symbol ${entity.type}">${escapeHtml(entity.name.slice(0,1))}</span><strong>${escapeHtml(entity.name)}</strong><i>${escapeHtml(ENTITY_TYPE_LABELS[entity.type]||"设定")}</i></button>`).join("") || `<div class="entity-tree-empty">当前筛选下没有设定</div>`}</div>
        </div>
      </aside>
      <section class="panel entity-detail-panel">
        ${state.entityListTab === "graph" ? `<div class="entity-graph"><h2>设定关系图谱</h2><p>点击任一设定查看详情；有关系记录的设定会展示关联线索。</p><div class="entity-graph-cards">${filtered.map(entity=>`<button data-entity-focus="${entity.id}" class="${focused?.id===entity.id?"active":""}"><strong>${escapeHtml(entity.name)}</strong><small>${escapeHtml(ENTITY_TYPE_LABELS[entity.type]||"设定")}</small><span>${escapeHtml(entity.relations.join(" · ")||"暂无关系")}</span></button>`).join("") || "暂无设定"}</div></div>` : focused ? `<div class="entity-detail-head">
          <span class="entity-symbol ${focused.type}">${escapeHtml(focused.name.slice(0,1))}</span>
          <div><p class="eyebrow">${escapeHtml(ENTITY_TYPE_LABELS[focused.type] || "设定")} · ${focused.status==="confirmed"?"已确认":"待完善"}</p><h2>${escapeHtml(focused.name)}</h2><p>${escapeHtml(focused.summary || "等待补充设定内容。")}</p><div class="entity-tags"><span>${focused.status==="confirmed"?"● 已确认":"○ 待确认"}</span><span>${escapeHtml(ENTITY_SCOPE_LABELS[focused.scope]||"仅手动引用")}</span>${focused.role==="lead"?"<span>主角</span>":""}</div></div>
        </div>
        <div class="entity-detail-actions">
          ${["character","location","prop"].includes(focused.type) ? `<button class="btn primary" ${outputReady ? `data-action="entity-asset-prompt" data-entity-id="${focused.id}"` : "disabled"}>${outputReady ? visual?.imageUrl ? "查看定妆图" : visual ? "生成定妆提示词" : "创建定妆资产" : "定稿后解锁定妆"}</button>` : ""}
          <button class="btn" data-action="edit-entity" data-entity-id="${focused.id}">编辑设定</button>
          <button class="btn ghost" data-action="delete-entity" data-entity-id="${focused.id}">删除</button>
        </div>
        <div class="entity-detail-grid">
          <div><span>别名</span><strong>${escapeHtml(focused.aliases.join("、") || "无")}</strong></div>
          <div><span>首次出场</span><strong>${escapeHtml(first?.title || "未指定")}</strong></div>
          <div><span>视觉资产</span><strong>${visual ? escapeHtml(visual.name) : "未关联"}</strong></div>
          <div><span>关系记录</span><strong>${focused.relations.length} 条</strong></div>
        </div>
        <section class="entity-detail-section"><h3>关键事实</h3>${focused.keyFacts.length ? focused.keyFacts.map((item)=>`<p>• ${escapeHtml(item)}</p>`).join("") : `<p class="subtext">还没有关键事实。</p>`}</section>
        <section class="entity-detail-section entity-article"><h3>详细档案</h3>${focused.content ? entityArticle(focused.content) : `<p class="subtext">还没有详细档案。点击“编辑设定”，可添加分章节的完整介绍。</p>`}</section>
        <section class="entity-detail-section"><h3>属性与关系</h3>${focused.attributes.map((item)=>`<p>${escapeHtml(item)}</p>`).join("")}${focused.relations.length ? focused.relations.map((item)=>`<p>${escapeHtml(item)}</p>`).join("") : `<p class="subtext">还没有关系记录。</p>`}</section>`
        : `<div class="empty">当前分类还没有设定实体。</div>`}
      </section>
    </div>`;
}
function bibleView() {
  const p = project();
  if (!p) return `<div class="empty">请先进入一个项目。</div>`;
  const b = p.bible;
  const fields = [
    ["worldRules", "世界规则", "魔法、系统、社会与物理规则"],
    ["limitations", "能力限制", "能力的代价、边界和禁止项"],
    ["timeline", "时间线", "每行一个关键时间点"],
    ["foreshadows", "未回收伏笔", "已埋下但尚未回收的线索"],
    ["resolvedForeshadows", "已回收伏笔", "注明回收章节与方式"],
    ["relationships", "关系变化", "人物关系及变化原因"],
    ["facts", "章节事实", "完成章节后自动回写"],
    ["knowledge", "信息边界", "谁知道什么、谁不知道什么"],
    ["changeImpacts", "设定修改影响", "修改设定会影响哪些章节与资产"]
  ];
  const characters = p.entities.filter((entity) => entity.type === "character");
  const memoryLabels = { plot:"剧情状态", time:"舞台时空", character:"角色状态", relationship:"关系状态", clue:"开放线索" };
  const filteredMemories = p.memories.filter((memory)=>state.memoryTab==="all" || memory.type===state.memoryTab);
  return `<div class="page-head"><div><p class="eyebrow">DYNAMIC STORY MEMORY</p><h1>动态记忆</h1><p class="subtext">只记录“故事现在发生到哪里”。每条事实都有来源章节、有效状态与历史版本。</p></div><div class="head-actions"><button class="btn" data-action="ai-audit-bible">一致性检查</button><button class="btn primary" data-action="new-memory">＋ 新增事实卡</button></div></div>
    <section class="memory-stats">${["plot","time","character","relationship","clue"].map((type)=>`<button data-memory-tab="${type}" class="${state.memoryTab===type?"active":""}"><strong>${p.memories.filter((x)=>x.type===type&&x.active).length}</strong><span>${memoryLabels[type]}</span></button>`).join("")}</section>
    <div class="tabs"><button class="tab ${state.memoryTab==="all"?"active":""}" data-memory-tab="all">全部事实</button><button class="tab ${state.memoryTab==="clue"?"active":""}" data-memory-tab="clue">待回收伏笔</button><button class="tab" data-action="toggle-legacy-bible">高级规则</button></div>
    <div class="memory-grid">${filteredMemories.map((memory)=>{
      const sourceChapter=p.chapters.find((c)=>c.id===memory.chapterId);
      return `<article class="memory-card ${memory.active?"":"inactive"}"><div class="memory-type">${memoryLabels[memory.type] || "事实"}</div><h3>${escapeHtml(memory.title)}</h3><p>${escapeHtml(memory.content)}</p><div class="memory-source"><span>来源：${escapeHtml(sourceChapter?.title || "手动记录")}</span><span>${memory.source==="ai"?"AI提取":"用户维护"}</span><span>${memory.versions.length} 个历史版本</span></div><div class="entity-card-foot"><button class="btn small ghost" data-action="toggle-memory" data-memory-id="${memory.id}">${memory.active?"标记失效":"重新启用"}</button><button class="btn small" data-action="edit-memory" data-memory-id="${memory.id}">编辑与溯源</button></div></article>`;}).join("") || `<div class="panel empty">还没有动态事实。完成一章后系统会自动写入剧情、角色与伏笔记录。</div>`}</div>
    <details class="legacy-bible panel" ${state.legacyBibleOpen ? "open" : ""}><summary>高级世界规则与人工校准</summary><div class="bible-grid">${fields.map(([id,title,hint]) => `<section class="bible-card"><div class="panel-head"><h3>${title}</h3><span class="tag">${(b[id] || []).length} 条</span></div><div class="panel-body"><p class="subtext">${hint}</p><textarea data-bible-field="${id}" placeholder="每行一条">${escapeHtml(listValue(b[id]))}</textarea></div></section>`).join("")}</div></details>
    <section class="panel"><div class="panel-head"><div><h3>人物当前状态</h3><p>状态会随完成章节自动回写，下一章生成前会被读取。</p></div></div><div class="panel-body character-state-grid">
      ${characters.map((entity) => { const s = b.characterStates[entity.id] || {}; return `<article class="state-card"><h3>${escapeHtml(entity.name)}</h3>
        <label>当前位置<input data-character-state="${entity.id}" data-state-field="location" value="${escapeHtml(s.location || "")}" /></label>
        <label>当前状态<input data-character-state="${entity.id}" data-state-field="status" value="${escapeHtml(s.status || "")}" /></label>
        <label>当前目标<input data-character-state="${entity.id}" data-state-field="goal" value="${escapeHtml(s.goal || "")}" /></label>
        <label>已知信息<textarea data-character-state="${entity.id}" data-state-field="known">${escapeHtml(s.known || "")}</textarea></label>
      </article>`; }).join("") || `<div class="empty">资产库中还没有人物。</div>`}
    </div></section>`;
}

function styleDraft() {
  const p = project();
  if (state.styleDraftProjectId !== p.id || !state.styleDraft) {
    state.styleDraft = structuredClone(p.styleProfile);
    state.styleDraftProjectId = p.id;
  }
  return state.styleDraft;
}

function styleView() {
  const profile = styleDraft();
  const active = profile.rules.filter((rule) => rule.policy !== "ignore" && rule.content.trim()).length;
  return `<div class="page-head"><div><p class="eyebrow">STORY STYLE</p><h1>作品风格包</h1><p class="subtext">按写作环节整理规则。保存后，规则内容会进入本书的 AI 写作与质量检查提示词。</p></div><div class="head-actions"><button class="btn" data-action="cancel-style">放弃修改</button><button class="btn primary" data-action="save-style">保存风格包</button></div></div>
    <section class="panel style-profile-intro"><div class="panel-body"><div class="style-profile-fields"><label>风格包名称<input data-style-profile-field="name" value="${escapeHtml(profile.name)}" maxlength="80" /></label><label>说明<input data-style-profile-field="desc" value="${escapeHtml(profile.desc)}" maxlength="240" /></label></div><p>当前有 ${profile.rules.length} 条规则，其中 ${active} 条参与 AI。强制：每次都读；按需：仅在相关任务中读；忽略：不发送给 AI。</p></div></section>
    <div class="style-editor-groups">${STYLE_MODULE_GROUPS.map((group) => {
      const rules = profile.rules.filter((rule) => rule.groupId === group.id);
      return `<section class="panel style-editor-group"><div class="panel-head"><div><h2>${group.name}</h2><p>${group.desc}</p></div><span class="tag">${rules.length} 条</span></div><div class="panel-body">
        ${rules.map((rule) => {
          const templates = group.modules;
          return `<article class="style-rule-card" data-style-rule-card="${escapeHtml(rule.id)}"><div class="style-rule-heading"><input data-style-rule-field="title" data-style-rule-id="${escapeHtml(rule.id)}" aria-label="规则名称" value="${escapeHtml(rule.title)}" maxlength="80" /><button class="btn small ghost" data-action="remove-style-rule" data-style-rule-id="${escapeHtml(rule.id)}">移除</button></div>
            <div class="style-rule-controls"><div class="style-rule-source"><button class="${rule.source === "custom" ? "active" : ""}" data-style-rule-source="custom" data-style-rule-id="${escapeHtml(rule.id)}">自定义</button><button class="${rule.source === "template" ? "active" : ""}" data-style-rule-source="template" data-style-rule-id="${escapeHtml(rule.id)}">用模板</button></div>
              <select data-style-rule-policy="${escapeHtml(rule.id)}" aria-label="${escapeHtml(rule.title)}引用策略"><option value="force" ${rule.policy === "force" ? "selected" : ""}>强制</option><option value="auto" ${rule.policy === "auto" ? "selected" : ""}>按需</option><option value="ignore" ${rule.policy === "ignore" ? "selected" : ""}>忽略</option></select></div>
            ${rule.source === "template" ? `<select data-style-rule-template="${escapeHtml(rule.id)}" aria-label="选择规则模板">${templates.map(([id, name]) => `<option value="${id}" ${rule.templateId === id ? "selected" : ""}>${name}</option>`).join("")}</select>` : ""}
            <textarea data-style-rule-field="content" data-style-rule-id="${escapeHtml(rule.id)}" aria-label="${escapeHtml(rule.title)}的规则内容" ${rule.source === "template" ? "readonly" : ""} placeholder="写清楚 AI 应遵守的具体要求…">${escapeHtml(rule.content)}</textarea></article>`;
        }).join("") || `<p class="style-rule-empty">这里还没有规则，可以从模板开始，也可以自己写。</p>`}
        <button class="btn small" data-action="add-style-rule" data-style-group-id="${group.id}">＋ 添加规则</button>
      </div></section>`;
    }).join("")}</div>`;
}

function inspirationView() {
  const p = project();
  const notes = [...(p.inspirationNotes || [])].sort((a, b) => b.createdAt - a.createdAt);
  return `<div class="page-head"><div><p class="eyebrow">IDEA WALL</p><h1>灵感墙</h1><p class="subtext">随手记下对白、画面或情节。需要时可以一键放进当前章节任务。</p></div><span class="tag">${notes.length} 条灵感</span></div>
    <section class="panel idea-composer"><div class="panel-body"><label for="ideaInput">此刻想到什么？</label><textarea id="ideaInput" placeholder="例如：主角第一次发现账簿会篡改别人的记忆……"></textarea><div class="idea-composer-actions"><span>仅保存在这本作品中</span><button class="btn primary" data-action="add-inspiration">记下灵感</button></div></div></section>
    <section class="idea-list">${notes.length ? notes.map((note) => `<article class="panel idea-card"><div class="panel-body"><p>${escapeHtml(note.text)}</p><div class="idea-card-foot"><time>${new Date(note.createdAt).toLocaleString("zh-CN")}</time><button class="btn small" data-action="use-inspiration" data-idea-id="${escapeHtml(note.id)}">放进当前章节任务 →</button></div></div></article>`).join("") : `<div class="panel empty">还没有灵感。在上方写下第一条，随时回来继续整理。</div>`}</section>`;
}

function projectsView() {
  const totalWords = state.projects.reduce((sum, p) => sum + p.chapters.reduce((n, c) => n + countText(c.content), 0), 0);
  const chapters = state.projects.reduce((sum, p) => sum + p.chapters.length, 0);
  const assets = state.projects.reduce((sum, p) => sum + p.assets.length, 0);
  return `
    <div class="page-head home-head">
      <div><p class="eyebrow">4YI NOVEL WORKBENCH</p><h1>从一句灵感到可视化故事板</h1><p class="subtext">4YI小说创作平台把长篇大纲、正文、设定记忆、定妆资产和故事板图放在同一个工作台里。</p></div>
      <div class="head-actions"><button class="btn" data-action="open-trash">回收站${state.trash.length ? ` · ${state.trash.length}` : ""}</button><button class="btn" data-action="import-project">导入项目</button><input id="projectImport" type="file" accept=".json,application/json" hidden /></div>
    </div>
    <section class="home-command-layout">
      <div class="home-entry-grid">
        <button class="home-entry-card primary" data-view="quick">
          <span>01</span>
          <h2>快速创作</h2>
          <p>已有大致题材，想先试写？从灵感一路生成到正文，完成后可保存为项目继续修改。</p>
          <b>试写一个故事 →</b>
        </button>
        <button class="home-entry-card" data-action="new-project">
          <span>02</span>
          <h2>创建新故事</h2>
          <p>输入题材、风格和核心脑洞，比较三种立书方向，再完善人物、世界与章节。</p>
          <b>推演新书方向 →</b>
        </button>
        <button class="home-entry-card" data-view="projects">
          <span>03</span>
          <h2>项目中心</h2>
          <p>已有作品从这里继续。打开最近章节，也能管理设定、资产和分镜。</p>
          <b>继续已有作品 →</b>
        </button>
      </div>
      <aside class="home-assistant-panel">
        <p class="eyebrow">4YI ASSISTANT</p>
        <h2>创作助手</h2>
        <p>按当前目标选择入口。试写可以快速落笔；新书推演先比较方向，再进入五步建书。</p>
        <div class="assistant-flow">
          <div><span>1</span><strong>选择起点</strong><small>试写方向，或直接建立长篇项目</small></div>
          <div><span>2</span><strong>继续写作</strong><small>在项目中完善章节与设定</small></div>
          <div><span>3</span><strong>制作分镜</strong><small>正文稳定后再整理视觉资产</small></div>
        </div>
        <div class="assistant-actions">
          <button class="btn primary" data-view="quick">快速创作</button>
          <button class="btn" data-action="new-project">创建新故事</button>
        </div>
      </aside>
    </section>
    <section class="home-feature-strip" aria-label="平台能力">
      <div><strong>长篇写作</strong><span>章节、篇章、细纲、正文逐步生成</span></div>
      <div><strong>动态记忆</strong><span>持续约束设定、伏笔和人物状态</span></div>
      <div><strong>定妆资产</strong><span>人物、道具、场景从正文提取确认</span></div>
      <div><strong>故事板图</strong><span>按资产一致性生成分镜风格图</span></div>
    </section>
    <section class="stats">
      <div class="stat"><span>进行中的作品</span><strong>${state.projects.length}</strong></div>
      <div class="stat"><span>累计创作字数</span><strong>${totalWords.toLocaleString()}</strong></div>
      <div class="stat"><span>章节总数</span><strong>${chapters}</strong></div>
      <div class="stat"><span>视觉资产</span><strong>${assets}</strong></div>
    </section>
    <div class="section-title home-project-title"><div><p class="eyebrow">PROJECT CENTER</p><h2>最近项目</h2></div></div>
    <section class="project-grid">
      ${state.projects.map((p) => `
        <article class="project-card" data-open-project="${p.id}">
          <button class="project-menu" data-action="delete-project" data-project-id="${p.id}" aria-label="删除项目 ${escapeHtml(p.title)}" title="移到回收站">•••</button>
          <p class="eyebrow">${escapeHtml(p.visualStyle || "小说项目")}</p>
          <h2>${escapeHtml(p.title)}</h2>
          <p class="subtext">${escapeHtml(p.logline || "这个故事还在等待第一句话。")}</p>
          <div class="tag-row">${(p.genre || []).map((g) => `<span class="tag">${escapeHtml(g)}</span>`).join("")}</div>
          <div class="project-meta">
            <div class="progress"><i style="width:${Math.min(p.progress || 0, 100)}%"></i></div>
            <div class="meta-line"><span>${p.chapters.length} 章 · ${p.chapters.reduce((n,c)=>n+countText(c.content),0).toLocaleString()} 字</span><span>${p.progress || 0}%</span></div>
          </div>
          <div class="project-next"><span>下一步：${escapeHtml(projectNextStep(p).label)}</span><b>继续 →</b></div>
        </article>`).join("")}
    </section>`;
}

function projectNextStep(p) {
  if (!p.outline || !p.outline.locked) return { view: "outline", chapterId: p.chapters[0]?.id, label: p.outline ? "确认大纲" : "建立故事大纲" };
  const current = p.chapters.find((item) => item.status !== "已完成") || p.chapters.at(-1);
  if (!current) return { view: "drafting", chapterId: null, label: "开始第一章" };
  return { view: ["初稿完成", "初写完成", "快写初稿"].includes(current.status) ? "finalize" : "drafting", chapterId: current.id, label: `${current.title} · ${current.status === "待写" ? "开始初稿" : "继续完善"}` };
}

function genesisArchive(p) {
  const cards = p.genesis?.soulCards;
  if (!cards) return `<section class="panel genesis-archive-empty"><div><p class="eyebrow">STORY SOUL FILE</p><h3>这本旧项目还没有核心设定卡</h3><p>可以根据现有题材、大纲和能力设定补生成一套。</p></div><button class="btn" data-action="generate-project-soul">✦ 生成核心档案</button></section>`;
  const defs = [
    ["positioning","题材定位","blue"],
    ["theme","核心命题","gold"],
    ["emotion","情感内核","amber"],
    ["desire","主角根本欲望","red"],
    ["finalChoice","最终选择","blue"],
    ["hooks","核心钩子 · 三梗","amber"],
    ...(cards.power ? [["power","金手指核心设定","gold"]] : [])
  ];
  const activePack = stylePackById(p.genesis?.stylePack);
  return `<section class="genesis-archive">
    <div class="section-title"><div><p class="eyebrow">STORY SOUL FILE</p><h2>大纲生成依据 · 创世核心档案</h2><p>${escapeHtml(p.styleProfile?.name || activePack.name)} · ${(p.styleProfile?.rules || []).filter((rule) => rule.policy !== "ignore").length} 条风格规则参与创作</p></div><button class="btn" data-action="generate-project-soul">✦ 根据现有大纲重整</button></div>
    <div class="genesis-card-grid">${defs.map(([id,title,color])=>`<article class="genesis-result-card ${color}"><div><h3>${title}</h3><span>AI</span></div>${p.outline?.locked ? `<p>${escapeHtml(cards[id] || "")}</p>` : `<textarea data-genesis-card="${id}">${escapeHtml(cards[id] || "")}</textarea>`}</article>`).join("")}</div>
    <div class="soul-tags"><strong>风格标签</strong>${[...(p.genre||[]),p.tone,activePack.name].filter(Boolean).map((tag)=>`<span>${escapeHtml(tag)}</span>`).join("")}</div>
  </section>`;
}

function outlineView() {
  const p = project();
  if (!p) return `<div class="empty">请先创建一个项目。</div>`;
  const outline = p.outline;
  return `
    <div class="page-head hero-head">
      <div><p class="eyebrow">STORY ARCHITECT</p><h1>从一个念头，到完整世界</h1><p class="subtext">${escapeHtml(p.logline || "AI 将根据题材、时代和视觉风格搭建故事。")}</p></div>
      <div class="head-actions">
        ${outline ? `<span class="lock-state ${outline.locked ? "locked" : ""}">${outline.locked ? "✓ 大纲已锁定" : "等待你的确认"}</span>` : ""}
        <button class="btn ${outline?.locked ? "" : "primary"}" data-action="${outline?.locked ? "unlock-outline" : outline ? "confirm-outline" : "generate-outline"}" ${state.busy ? "disabled" : ""}>${state.busy ? "正在构建故事…" : outline?.locked ? "修改大纲" : outline ? "确认并锁定大纲" : "AI 生成大纲与章节"}</button>
      </div>
    </div>
    ${!outline ? `
      <section class="apple-hero-card">
        <span class="hero-orb">✦</span>
        <p class="eyebrow">ONE CLICK STORY BUILD</p>
        <h2>AI 会先完成故事骨架和分集规划</h2>
        <p>根据「${escapeHtml((p.genre || []).join(" × "))}」生成章节大纲；定妆资产会在定稿后按每一集新出现的人物、场景和道具提取。</p>
        <button class="btn dark" data-action="generate-outline">开始构建</button>
      </section>` : `
      <section class="outline-summary panel">
        <div class="panel-body"><p class="eyebrow">故事核心</p><h2>${escapeHtml(outline.premise)}</h2>
        <div class="outline-meta"><span>${p.targetWords?.toLocaleString() || "待定"} 目标字数</span><span>${outline.acts.reduce((n,a)=>n+a.chapters.length,0)} 个规划章节</span><span>${p.assets.length} 项视觉资产</span></div></div>
      </section>
      ${genesisArchive(p)}
      ${!outline.locked ? `<div class="outline-builder-toolbar">
        <div><p class="eyebrow">FLEXIBLE STRUCTURE</p><h2>自由调整章数和集数</h2><p>可以手动逐项增加，也可以让AI一次扩充到指定规模。</p></div>
        <div class="head-actions"><button class="btn" data-action="add-act">＋ 增加一章</button><button class="btn primary" data-action="open-outline-expand">✦ AI批量扩充</button></div>
      </div>` : ""}
      <div class="act-grid ${outline.acts.length > 3 ? "many-acts" : ""}">${outline.acts.map((act, index) => `
        <details class="act-card outline-collapsible" open>
          <summary class="act-card-summary">
            <span class="act-number">${String(index + 1).padStart(2,"0")}</span>
            <div>
              <p class="eyebrow">第${index + 1}章 · ${act.chapters.length}集</p>
              <strong>${escapeHtml(act.title || `第${index + 1}章`)}</strong>
            </div>
            <i>展开/收起</i>
          </summary>
          <div class="act-card-body">
          ${outline.locked
            ? `<p class="eyebrow">${escapeHtml(act.title)}</p><h3>${escapeHtml(act.summary)}</h3>`
            : `<div class="act-edit-head"><input class="act-title-input" data-act-title="${index}" value="${escapeHtml(act.title)}" aria-label="第${index+1}章标题" /><button class="icon-btn danger" data-action="remove-act" data-act-index="${index}" ${outline.acts.length <= 1 ? "disabled" : ""} title="删除这一章">×</button></div>
               <textarea class="act-summary-input" data-act-summary="${index}" aria-label="第${index+1}章概要">${escapeHtml(act.summary)}</textarea>`}
          <ol>${act.chapters.map((name, chapterIndex) => `<li>${outline.locked ? `<span>${escapeHtml(name)}</span>` : `<input class="outline-title-input" data-act-index="${index}" data-outline-chapter="${chapterIndex}" value="${escapeHtml(name)}" aria-label="${escapeHtml(act.title)}分集标题" /><button class="chapter-remove" data-action="remove-outline-chapter" data-act-index="${index}" data-chapter-index="${chapterIndex}" title="删除分集">×</button>`}</li>`).join("")}</ol>
          ${!outline.locked ? `<button class="add-chapter-btn" data-action="add-outline-chapter" data-act-index="${index}">＋ 在本章增加集数</button>` : ""}
          </div>
        </details>`).join("")}
      </div>
      <section class="generated-assets">
        <div class="section-title"><div><p class="eyebrow">CHAPTER-BASED ASSETS</p><h2>定妆资产从正文里提取</h2></div><button class="btn" data-view="assets">查看资产库 →</button></div>
        <div class="notice">新建大纲不会预塞主角、配角、场景或道具。每一集正文完成后，系统会按本集新出现的人物、场景、关键道具进行 AI 提取，再由你人工确认加入资产库。</div>
      </section>
      <div class="next-step-card"><div><p class="eyebrow">NEXT STEP</p><h2>${outline.locked ? "大纲与分集标题已经锁定" : "请先确认每一集的标题"}</h2><p>${outline.locked ? "初稿时 AI 将读取创世四块内容与本章位置，但作者仍可继续修改正文。" : "你可以直接修改上方分集标题，确认后再进入初稿。"}</p></div><button class="btn primary" data-action="${outline.locked ? "go-writing" : "confirm-outline"}">${outline.locked ? "开始初稿第一集 →" : "确认并锁定大纲"}</button></div>`}
  `;
}

function creationBlocksText(p) {
  const labels = { bookOutline: "全书大纲", firstArc: "第一卷大纲", worldRules: "世界法则", coreCharacters: "核心角色" };
  const blocks = p.genesis?.creationBlocks || {};
  return Object.entries(labels).map(([key, label]) => blocks[key]?.trim() ? `【${label}】\n${blocks[key].trim()}` : "").filter(Boolean).join("\n\n") || "暂无";
}

function chapterFineOutline(p, c) {
  if (c.fineOutline?.trim()) return c.fineOutline.trim();
  const task = c.taskCard || {};
  const act = p.outline?.acts?.find((item) => (item.chapters || []).includes(c.title));
  const volume = p.volumes?.find((item) => (item.chapterIds || []).includes(c.id));
  return [
    `${c.title}｜${volume?.title || act?.title || "当前卷"}`,
    act?.summary ? `章节位置：${act.summary}` : "",
    task.goal ? `本章目标：${task.goal}` : "",
    task.requiredEvents?.length ? `必须事件：${task.requiredEvents.join(" → ")}` : "",
    task.requiredCharacters?.length ? `出场人物：${task.requiredCharacters.join("、")}` : "",
    task.foreshadow ? `伏笔：${task.foreshadow}` : "",
    task.hook ? `收尾钩子：${task.hook}` : ""
  ].filter(Boolean).join("\n") || `围绕“${c.title}”承接全书大纲与第一卷大纲，完成本章核心冲突、转折和结尾钩子。`;
}

function writingView(mode = state.view) {
  const p = project();
  const c = chapter();
  if (!p || !c) return `<div class="empty">请先创建一个项目。</div>`;
  if (p.outline && !p.outline.locked) return `
    <section class="apple-hero-card compact-lock"><span class="hero-orb">◫</span><p class="eyebrow">OUTLINE APPROVAL REQUIRED</p>
      <h2>先确认故事大纲和分集标题</h2><p>大纲锁定后，AI 才会以同一份创世规划开始初稿。</p>
      <button class="btn dark" data-action="go-outline">返回确认大纲</button></section>`;
  const isFinalizeMode = mode === "finalize";
  const isFinalized = c.status === "已完成";
  const isInitialDone = ["初稿完成", "初写完成", "快写初稿", "已完成"].includes(c.status);
  const qualityIssues = normalizeQualityIssues(c.qualityReport?.issues || []);
  const currentVolume = p.volumes.find((volume) => volume.chapterIds.includes(c.id));
  const tools = [["draft", isFinalizeMode ? "✦ AI生成定稿" : "✦ AI生成初稿"], ["continue","续写"], ["polish","润色"], ["expand","扩写"], ["rewrite","改写"], ["logic","逻辑检查"], ["summary","章节摘要"]];
  const scenePlanner = isFinalizeMode ? `<section class="panel scene-planner finalize-planner">
    <div class="panel-head"><div><p class="eyebrow">FOUR SCENE PLAN</p><h3>四个场景规划</h3><p>定稿将按 1—4 的顺序逐场执行；每个场景都可以修改后锁定。</p></div><button class="btn small primary" data-action="generate-scenes">✦ ${c.scenes.length === 4 ? "重新规划4个场景" : "AI规划4个场景"}</button></div>
    <div class="scene-rail four-scenes">${c.scenes.slice(0,4).map((scene,index)=>`<article class="scene-node ${scene.status==="locked"?"locked":""}">
      <div class="scene-node-top"><span>${String(index+1).padStart(2,"0")}</span><select data-scene-field="beat" data-scene-index="${index}">${["开场","推进","冲突","反转","高潮","收束"].map((beat)=>`<option ${scene.beat===beat?"selected":""}>${beat}</option>`).join("")}</select><button data-action="toggle-scene-lock" data-scene-index="${index}">${scene.status==="locked"?"🔒":"锁定"}</button></div>
      <input data-scene-field="title" data-scene-index="${index}" value="${escapeHtml(scene.title)}" aria-label="场景${index+1}标题" />
      <textarea data-scene-field="summary" data-scene-index="${index}" placeholder="这个场景具体发生什么">${escapeHtml(scene.summary)}</textarea>
      <div class="scene-node-bottom"><label>张力 <input type="range" min="1" max="5" value="${scene.tension}" data-scene-field="tension" data-scene-index="${index}" /></label><label>字数 <input type="number" value="${scene.targetWords}" data-scene-field="targetWords" data-scene-index="${index}" /></label></div>
    </article>`).join("") || `<div class="scene-empty"><strong>还没有四场景规划</strong><p>点击上方按钮，系统会依据本章细纲一次生成四个连续场景。</p></div>`}</div></section>` : "";
  const finalPlan = isFinalizeMode ? `<section class="panel final-outline-card"><div class="panel-head"><div><p class="eyebrow">CHAPTER FINE OUTLINE</p><h3>创世生成的本章细纲</h3><p>定稿以此细纲为主约束，并逐一落实下面四个场景。</p></div><span class="tag">严格执行</span></div><textarea id="chapterFineOutline" class="fine-outline-editor" placeholder="补充本章细纲……">${escapeHtml(chapterFineOutline(p,c))}</textarea></section>` : "";
  return `<div class="page-head"><div><p class="eyebrow">${isFinalizeMode ? "FINAL DRAFT ROOM" : "FIRST DRAFT ROOM"}</p><h1>${escapeHtml(p.title)}</h1><p class="subtext">${isFinalizeMode ? "结合本章细纲与四个场景规划生成最终定稿。" : "AI 直接读取创世四块内容生成初稿，本页只保留正文创作。"}</p></div>
    <div class="head-actions"><button class="btn" data-action="go-outline">查看故事大纲</button>${isFinalizeMode ? `<button class="btn" data-action="go-writing">返回初稿</button>` : `<button class="btn" data-action="go-finalize">进入定稿</button>`}<button class="btn dark" data-action="add-chapter">＋ 新建章节</button></div></div>
    ${finalPlan}${scenePlanner}
    <div class="workspace"><aside class="panel"><div class="panel-head"><h3>章节目录</h3><button class="btn small" data-action="add-chapter">＋ 新增篇</button></div><div class="chapter-list volume-chapter-list">${p.volumes.map((volume)=>`<details class="volume-group" ${volume.chapterIds.includes(c.id)?"open":""}><summary class="volume-label"><strong>${escapeHtml(volume.title)}</strong><span>${volume.chapterIds.length}章</span></summary>${volume.chapterIds.map((chapterId)=>{ const item=p.chapters.find((ch)=>ch.id===chapterId); if(!item)return ""; const index=p.chapters.indexOf(item); return `<div class="chapter-tree-row ${item.id===c.id?"active":""}"><button class="chapter-item" data-chapter="${item.id}"><b>${escapeHtml(item.title||`第${index+1}章`)}</b><span>${countText(item.content)} 字 · ${escapeHtml(item.hasUnpublishedChanges?"有未发布修改":item.status)}</span></button><button class="chapter-row-delete" data-action="remove-chapter" data-chapter-id="${item.id}" title="删除这一章">×</button></div>`;}).join("")}</details>`).join("")}</div></aside>
      <section><div class="panel"><div class="editor-tools">${tools.map(([tool,label])=>`<button class="btn small" ${tool==="draft"?`data-action="open-ai-draft"`:`data-ai="${tool}"`} ${state.busy||(isFinalized&&isFinalizeMode)?"disabled":""}>${label}</button>`).join("")}</div>
        <input class="editor-title" id="chapterTitle" value="${escapeHtml(c.title)}" aria-label="章节标题" ${isFinalized&&isFinalizeMode?"readonly":""}/>
        ${!c.content?`<div class="empty-draft"><span>✦</span><h2>这一章还没有正文</h2><p>${isFinalizeMode?"先确认本章细纲和四个场景，再生成定稿。":"选择目标字数，AI 会读取创世四块内容生成初稿。"}</p><button class="btn primary" data-action="open-ai-draft">${isFinalizeMode?"生成定稿":"配置 AI 初稿"}</button></div>`:""}
        <textarea class="editor ${!c.content?"visually-empty":""}" id="chapterEditor" placeholder="从这里开始写下故事……" ${isFinalized&&isFinalizeMode?"readonly":""}>${escapeHtml(c.content)}</textarea>
        <div class="editor-foot"><span>自动保存到本机</span><div><button class="btn small ghost" data-action="quality-check">AI 质量检查</button><span id="wordCount">${countText(c.content)} 字</span></div></div>
        ${isFinalizeMode&&!isFinalized?`<div class="generate-final-row"><div><strong>细纲 + 四场景 → 完整定稿</strong><p>生成前会检查四个场景是否齐全。</p></div><button class="btn primary" data-action="generate-final-draft">✦ 生成定稿</button></div>`:""}
      </div>
      ${c.content?`<div class="chapter-complete-bar ${isFinalized?"done":""}"><div><span class="complete-icon">${isFinalized?"✓":isInitialDone?"2":"1"}</span><div><h3>${isFinalizeMode?(isFinalized?"本章已经定稿":"确认最终定稿？"):(isInitialDone?"本章初稿已完成":"确认初稿内容？")}</h3><p>${isFinalizeMode?"确认后将保存正文并提取视觉资产。":"初稿完成后可进入定稿，按细纲和四场景进行最终生成。"}</p></div></div>${isFinalizeMode?(isFinalized?`<div class="head-actions"><button class="btn" data-action="edit-completed-chapter">修改定稿</button><button class="btn primary" data-action="chapter-storyboard">一键生成故事板 →</button></div>`:`<button class="btn primary" data-action="finalize-chapter">确认定稿并提取视觉资产</button>`):(isInitialDone?`<div class="head-actions"><button class="btn" data-action="edit-completed-chapter">继续修改</button><button class="btn primary" data-action="go-finalize">进入定稿 →</button></div>`:`<button class="btn primary" data-action="complete-initial-draft">完成初稿</button>`)}</div>`:""}
      <div class="panel ai-drawer"><div class="panel-head"><h3>AI 创作建议</h3><span class="tag">${state.busy?"生成中":state.aiStatus.connected?"实时模型":"演示模式"}</span></div><div class="panel-body"><div class="ai-result ${state.busy?"loading":""}">${escapeHtml(state.aiResult||"选择上方操作，AI 将结合当前章节协助创作。")}</div></div></div></section></div>`;
}

function quickValueList(value) {
  return Array.isArray(value) ? value : normalizeQuickArray(value, value ? [value] : []);
}

function quickTextValue(value) {
  return Array.isArray(value) ? value.join("、") : (value || "");
}

function quickChapterCount(q = quickWriting()) {
  return Math.min(300, Math.max(1, Number(q.config.chapterCount) || 20));
}

function quickPieceCount(q = quickWriting()) {
  return Math.min(50, Math.max(1, Number(q.config.piecesPerChapter) || 3));
}

function quickWordTemplate(q = quickWriting()) {
  const template = quickTextValue(q.config.rhythmTemplate) || "精品微小说 2300字";
  const words = Number(template.match(/(\d+)/)?.[1]) || 2300;
  const detail = words >= 3500 ? "极详细，每个走向要写清主线阶段、核心反派、情绪递进、爽点链、长线伏笔和结尾钩子"
    : words >= 2300 ? "详细，每个走向要写清主线推进、人物关系变化、反转点、爽点和后续钩子"
    : words >= 1600 ? "中等详细，每个走向要写清开局冲突、中段升级和结尾期待"
    : "短平快，每个走向要直接给出冲突、爽点和可追读的钩子";
  const summaryRange = words >= 3500 ? "420-600字"
    : words >= 2300 ? "260-360字"
    : words >= 1600 ? "150-220字"
    : "80-120字";
  return { template, words, detail, summaryRange };
}

function quickPieceAnalysisLines(q, chapterIndex) {
  const total = quickPieceCount(q);
  const beats = [
    ["开场压迫", "用一个直接冲突把主角推进本章处境，交代本章目标、阻力和必须立刻行动的理由。"],
    ["发现突破口", "主角从上一篇留下的线索里找到可操作的缝隙，但这个办法会带来新的代价或暴露风险。"],
    ["第一次交锋", "主角与本章主要阻力正面碰撞，展示双方手段，让读者看清谁占规则优势、谁在暗处布局。"],
    ["代价浮现", "前面的选择开始反噬，主角必须在利益、关系或底线之间做取舍，情绪压力明显升级。"],
    ["关系拉扯", "重要配角因为立场、利益或误会与主角发生变化，推动人物关系从利用走向信任或决裂。"],
    ["反派加码", "对手发现主角威胁后提高压迫强度，制造更大的外部危机，让本章中段不松劲。"],
    ["资源到手", "主角通过谋划、交易或冒险获得关键资源，但资源本身也会指向下一层更大的敌人。"],
    ["暗线揭露", "露出一条与主线相关的新信息，让读者意识到当前冲突背后还有更大的局。"],
    ["情绪反转", "让主角或重要关系发生一次认知变化，前文的误解、隐忍或委屈在这里转化成爆发力。"],
    ["结尾钩子", "本篇必须以新证据、新敌人、新条件或倒计时收尾，直接推动下一篇开场。"]
  ];
  return Array.from({ length: total }, (_, index) => {
    const [title, purpose] = beats[index % beats.length];
    return `第${index + 1}篇：《${title}》：${purpose}本篇在第${chapterIndex + 1}章中的作用是完成一个清晰的小推进，既服务本章大故事线，也保留下一篇继续追读的接口。`;
  }).join("\n");
}

function normalizePieceAnalysis(text, q, chapterIndex) {
  const fallbackLines = quickPieceAnalysisLines(q, chapterIndex).split(/\n+/);
  const lines = String(text || "").split(/\n+/).map((line) => line.trim()).filter(Boolean).slice(0, quickPieceCount(q));
  while (lines.length < quickPieceCount(q)) lines.push(fallbackLines[lines.length] || `第${lines.length + 1}篇：推进本章剧情。`);
  return lines.map((line, index) => {
    const body = line.replace(/^第?\d+篇[：:、\s]*/, "").trim();
    const fallbackBody = fallbackLines[index]?.replace(/^第?\d+篇[：:、\s]*/, "").trim() || "推进本章剧情，并留下下一篇的追读点。";
    const fullBody = body.length < 30 ? `${body || fallbackBody}。${fallbackBody}` : body;
    return `第${index + 1}篇：${fullBody}`;
  }).join("\n");
}

function normalizeLongText(value, fallback, minLength = 80) {
  const text = String(value || "").trim();
  if (text.length >= minLength) return text;
  return text ? `${text}\n${fallback}` : fallback;
}

function sanitizeNewCharacters(value) {
  const text = String(value || "").trim();
  if (!text) return "";
  const genericOnly = /^(无|暂无|没有|无新增|阶段对手|关键盟友|信息提供者|关系搅局者|配角|反派|主角|敌人|路人|群众|待定)[、，\s]*(阶段对手|关键盟友|信息提供者|关系搅局者|配角|反派|敌人|路人|群众|待定)?$/;
  return genericOnly.test(text) ? "" : text;
}

function normalizeQuickUnit(unit, q = quickWriting(), index = 0) {
  return {
    title: unit?.title || `第${index + 1}章：阶段推进`,
    大故事线: normalizeLongText(unit?.大故事线 || unit?.卷内作用, `第${index + 1}章必须围绕已选走向推进一条完整的大故事线：开头承接上一章遗留问题，中段让主角围绕核心目标持续试探和交锋，后段给出阶段性结果，同时抛出下一章无法回避的新问题。`, 90),
    篇目分析: normalizePieceAnalysis(unit?.篇目分析, q, index),
    卷内作用: normalizeLongText(unit?.卷内作用, `本章在整体结构中的作用是完成第${index + 1}个阶段推进：既要承接前面已经建立的矛盾，又要把主角推向更高层级的选择，让读者清楚看到故事不是散点事件，而是在一步步逼近主线真相。`, 70),
    主角动机: normalizeLongText(unit?.主角动机, "主角行动的动机不能只写“变强”或“复仇”，需要落到当下必须解决的问题上：如果他不行动，就会失去关键资源、重要关系、身份主动权或继续追查真相的机会。", 65),
    核心设计: normalizeLongText(unit?.核心设计, "本章核心设计要包含冲突结构、信息差和反转接口：先让主角看似被规则压制，再让他通过判断、资源或能力找到破局点，最后用一个新问题把胜利变成下一章的压力。", 70),
    新增人物: sanitizeNewCharacters(unit?.新增人物),
    爽点: normalizeLongText(unit?.爽点, "爽点要具体落地，不能只写“打脸”。本章至少要包含一次读者能感知的压迫反杀、一次资源或身份上的收益，以及一个让反派或旁观者重新评估主角的场面。", 65)
  };
}

function ensureQuickUnits(units, q = quickWriting()) {
  const chapterTotal = quickChapterCount(q);
  const normalized = Array.isArray(units) ? units.slice(0, chapterTotal) : [];
  while (normalized.length < chapterTotal) {
    normalized.push(fallbackQuickUnit(q, normalized.length));
  }
  return normalized.map((unit, index) => normalizeQuickUnit(unit, q, index));
}

function normalizeExistingQuickUnits(units, q = quickWriting()) {
  const chapterTotal = quickChapterCount(q);
  return (Array.isArray(units) ? units.slice(0, chapterTotal) : [])
    .map((unit, index) => normalizeQuickUnit(unit, q, index));
}

function quickOutlineGeneratedCount(q = quickWriting()) {
  const matches = String(q.fineOutline || "").match(/^##\s*第\d+章/gm);
  return Math.min(quickChapterCount(q), matches ? matches.length : 0);
}

function resetQuickAfter(q, step) {
  if (step === "config") {
    q.inspiration = "";
    q.directions = [];
    q.selectedDirection = "";
    q.units = [];
    q.fineOutline = "";
    q.draftPieces = [];
    q.draft = "";
  }
  if (step === "inspiration") {
    q.directions = [];
    q.selectedDirection = "";
    q.units = [];
    q.fineOutline = "";
    q.draftPieces = [];
    q.draft = "";
  }
  if (step === "direction") {
    q.units = [];
    q.fineOutline = "";
    q.draftPieces = [];
    q.draft = "";
  }
  if (step === "unit") {
    q.fineOutline = "";
    q.draftPieces = [];
    q.draft = "";
  }
  if (step === "outline") {
    q.draftPieces = [];
    q.draft = "";
  }
}

function quickChoiceButtons(field, values, value) {
  const selected = quickValueList(value);
  const expanded = Boolean(state.quickExpanded[field]);
  const visible = expanded || values.length <= QUICK_COLLAPSE_LIMIT ? values : values.slice(0, QUICK_COLLAPSE_LIMIT);
  const buttons = visible.map((item) => `<button class="choice ${selected.includes(item) ? "selected" : ""}" data-quick-choice="${field}" data-quick-value="${escapeHtml(item)}">${escapeHtml(item)}</button>`).join("");
  const toggle = values.length > QUICK_COLLAPSE_LIMIT
    ? `<button class="choice expand-choice" data-action="quick-toggle-expand" data-quick-expand="${field}">${expanded ? "收起" : `展开全部 ${values.length}`}</button>`
    : "";
  return `${buttons}${toggle}`;
}

function quickNumberControl(field, values, current, unit, max) {
  const nums = values.map((item) => Number.parseInt(item, 10)).filter(Boolean);
  const value = Number(current) || nums[0] || 1;
  const isCustom = !nums.includes(value);
  return `<div class="quick-number-row">
    <select data-quick-number-select="${field}">
      ${values.map((item) => {
        const num = Number.parseInt(item, 10);
        return `<option value="${num}" ${!isCustom && num === value ? "selected" : ""}>${item}</option>`;
      }).join("")}
      <option value="custom" ${isCustom ? "selected" : ""}>自定义</option>
    </select>
    <input type="number" min="1" max="${max}" step="1" value="${value}" data-quick-number-input="${field}" placeholder="自定义${unit}" />
  </div>`;
}

function quickStepAvailable(q, step) {
  if (step === "config") return true;
  if (step === "inspiration") return Boolean(q.inspiration);
  if (step === "direction") return Boolean(q.directions?.length);
  if (step === "unit") return Boolean(q.units?.length);
  if (step === "outline") return Boolean(q.fineOutline);
  if (step === "draft") return Boolean(q.draft || quickGeneratedPieceCount(q));
  return false;
}

function quickStepper(current, q = quickWriting()) {
  const index = QUICK_STEPS.findIndex(([id]) => id === current);
  return `<div class="quick-stepper">${QUICK_STEPS.map(([id,label], stepIndex) => {
    const available = quickStepAvailable(q, id) || stepIndex <= index;
    return `<button class="${id === current ? "active" : quickStepAvailable(q, id) ? "done" : ""}" data-action="quick-jump" data-quick-step="${id}" ${available ? "" : "disabled"}><span>${stepIndex + 1}</span>${label}</button>`;
  }).join("")}</div>`;
}

function canJumpQuickStep(q, step) {
  const currentIndex = QUICK_STEPS.findIndex(([id]) => id === q.step);
  const targetIndex = QUICK_STEPS.findIndex(([id]) => id === step);
  return targetIndex >= 0 && (targetIndex <= currentIndex || quickStepAvailable(q, step));
}

function quickConfigView(q) {
  const config = q.config;
  const isTemplateMode = config.mode === "模板创作";
  return `<section class="panel quick-panel">
    <div class="panel-head"><div><p class="eyebrow">QUICK CREATE</p><h3>先定故事方向</h3><p>先选一个模板，再按需调整设置；不确定的选项可以保留默认值。下一步会先生成可修改的灵感。</p></div><span class="tag">第 1 / 6 步</span></div>
    <div class="panel-body quick-config-grid">
      <div class="quick-field full quick-mode-field"><label>创作方式</label><div class="segmented-options small">${quickChoiceButtons("mode", QUICK_OPTIONS.mode, config.mode)}</div></div>
      <div class="quick-field"><label>语言</label><div class="segmented-options small">${quickChoiceButtons("language", QUICK_OPTIONS.language, config.language)}</div></div>
      <div class="quick-field"><label>受众</label><div class="segmented-options">${quickChoiceButtons("audience", QUICK_OPTIONS.audience, config.audience)}</div></div>
      <div class="quick-field"><label>发表平台</label><div class="segmented-options">${quickChoiceButtons("platform", QUICK_OPTIONS.platform, config.platform)}</div></div>
      <div class="quick-field"><label>篇幅</label><div class="segmented-options">${quickChoiceButtons("length", QUICK_OPTIONS.length, config.length)}</div></div>
      <div class="quick-field"><label>视角</label><div class="segmented-options">${quickChoiceButtons("pov", QUICK_OPTIONS.pov, config.pov)}</div></div>
      <div class="quick-field"><label>年代</label><div class="segmented-options">${quickChoiceButtons("era", QUICK_OPTIONS.era, config.era)}</div></div>
      <div class="quick-field"><label>是否金手指</label><div class="segmented-options small">${quickChoiceButtons("goldfinger", QUICK_OPTIONS.goldfinger, config.goldfinger)}</div></div>
      ${isTemplateMode ? `
        <div class="quick-field full template-field"><label>爆款固定模板</label><div class="segmented-options">${quickChoiceButtons("fixedTemplate", QUICK_OPTIONS.fixedTemplate, config.fixedTemplate)}</div></div>
        <div class="quick-field full template-field"><label>情节类型</label><div class="segmented-options">${quickChoiceButtons("plotType", QUICK_OPTIONS.plotType, config.plotType)}</div></div>
        <div class="quick-field full template-field"><label>小说字数模板</label><div class="segmented-options">${quickChoiceButtons("rhythmTemplate", QUICK_OPTIONS.rhythmTemplate, config.rhythmTemplate)}</div></div>
        <div class="quick-field full template-field"><label>世界观模板</label><div class="segmented-options">${quickChoiceButtons("worldviewTemplate", QUICK_OPTIONS.worldviewTemplate, config.worldviewTemplate)}</div></div>
        ${config.goldfinger === "是" ? `<div class="quick-field full template-field"><label>金手指模板</label><div class="segmented-options">${quickChoiceButtons("goldfingerType", QUICK_OPTIONS.goldfingerType, config.goldfingerType)}</div></div>` : ""}
      ` : `
        <div class="quick-field full template-field"><label>文风模式</label><div class="segmented-options">${quickChoiceButtons("styleMode", QUICK_OPTIONS.styleMode, config.styleMode)}</div></div>
        <div class="quick-field full template-field"><label>时空背景</label><div class="segmented-options">${quickChoiceButtons("timeBackground", QUICK_OPTIONS.timeBackground, config.timeBackground)}</div></div>
        <div class="quick-field full template-field"><label>题材</label><div class="segmented-options">${quickChoiceButtons("genre", QUICK_OPTIONS.genre, config.genre)}</div></div>
        ${config.goldfinger === "是" ? `<div class="quick-field full template-field"><label>金手指类型</label><div class="segmented-options">${quickChoiceButtons("goldfingerType", QUICK_OPTIONS.goldfingerType, config.goldfingerType)}</div></div>` : ""}
        <div class="quick-field full template-field"><label>标题结构</label><div class="segmented-options">${quickChoiceButtons("titleStructure", QUICK_OPTIONS.titleStructure, config.titleStructure)}</div></div>
        <div class="quick-field full template-field"><label>男主人设</label><div class="segmented-options">${quickChoiceButtons("maleLead", QUICK_OPTIONS.maleLead, config.maleLead)}</div></div>
        <div class="quick-field full template-field"><label>女人设</label><div class="segmented-options">${quickChoiceButtons("femaleLead", QUICK_OPTIONS.femaleLead, config.femaleLead)}</div></div>
        <div class="quick-field full template-field"><label>反派人设</label><div class="segmented-options">${quickChoiceButtons("villain", QUICK_OPTIONS.villain, config.villain)}</div></div>
        <div class="quick-field full template-field"><label>情节模板</label><div class="segmented-options">${quickChoiceButtons("plotHook", QUICK_OPTIONS.plotHook, config.plotHook)}</div></div>
      `}
      <div class="quick-field"><label>章节数</label>${quickNumberControl("chapterCount", QUICK_OPTIONS.chapterCount, config.chapterCount, "章", 300)}</div>
      <div class="quick-field"><label>每章篇数</label>${quickNumberControl("piecesPerChapter", QUICK_OPTIONS.piecesPerChapter, config.piecesPerChapter, "篇", 50)}</div>
      <div class="quick-field full"><label>背景</label><textarea data-quick-field="background" placeholder="比如：地球过度开发、大气层破损、灵气复苏，男主带系统重生复仇……">${escapeHtml(config.background)}</textarea></div>
      <div class="quick-field full"><label>其他要求</label><textarea data-quick-field="other" placeholder="比如：不要过早解释母亲身份；前期只写商战复仇，中后期科技升级……">${escapeHtml(config.other)}</textarea></div>
    </div>
    <div class="quick-actions"><button class="btn" data-action="quick-reset">清空快写</button><button class="btn primary" data-action="quick-generate-inspiration" ${state.busy ? "disabled" : ""}>${state.busy ? "生成中…" : "AI 生成灵感 →"}</button></div>
  </section>`;
}

function quickInspirationView(q) {
  const hasInspiration = Boolean(q.inspiration.trim());
  return `<section class="panel quick-panel">
    <div class="panel-head"><div><p class="eyebrow">INSPIRATION</p><h3>小说灵感</h3><p>这里先看作品方向是否有劲，确认后再进入“走向选择”。</p></div><span class="tag">可编辑</span></div>
    <div class="panel-body"><textarea class="quick-big-text" data-quick-field="inspiration">${escapeHtml(q.inspiration)}</textarea></div>
    <div class="quick-actions"><button class="btn" data-action="quick-back-config" ${state.busy ? "disabled" : ""}>返回要求</button><button class="btn ${state.busy ? "loading" : ""}" data-action="quick-generate-inspiration" ${state.busy ? "disabled" : ""}>${state.busy ? "生成中…" : hasInspiration ? "AI重新生成灵感" : "AI生成灵感"}</button><button class="btn primary" data-action="quick-next-direction" ${state.busy ? "disabled" : ""}>下一步：选择走向 →</button></div>
  </section>`;
}

function quickDirectionView(q) {
  const wordPlan = quickWordTemplate(q);
  const hasDirections = Boolean(q.directions.length);
  return `<section class="panel quick-panel">
    <div class="panel-head"><div><p class="eyebrow">STORY DIRECTION</p><h3>选择接下来的走向</h3><p>走向会按当前小说字数模板控制详细度：${escapeHtml(wordPlan.template)}。</p></div><span class="tag">${q.directions.length} 个方案</span></div>
    <div class="panel-body quick-direction-grid">${q.directions.map((item, index) => `<article class="quick-card ${q.selectedDirection === item.title ? "selected" : ""}" data-quick-direction="${index}"><span>走向 ${index + 1}</span><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.summary)}</p><div class="quick-tags">${(item.tags || []).map((tag)=>`<b>${escapeHtml(tag)}</b>`).join("")}</div></article>`).join("") || `<div class="empty">还没有走向，点击下方“AI 推荐走向”。</div>`}</div>
    <div class="quick-actions"><button class="btn" data-action="quick-generate-directions" ${state.busy ? "disabled" : ""}>${hasDirections ? "AI重新生成走向" : "AI生成走向"}</button><button class="btn primary" data-action="quick-next-unit" ${!q.selectedDirection || state.busy ? "disabled" : ""}>下一步：章节规划 →</button></div>
  </section>`;
}

function quickUnitView(q) {
  const chapterTotal = quickChapterCount(q);
  const pieceTotal = quickPieceCount(q);
  const units = normalizeExistingQuickUnits(q.units, q);
  q.units = units;
  const done = Math.min(units.length, chapterTotal);
  const complete = done >= chapterTotal;
  return `<section class="panel quick-panel">
    <div class="panel-head"><div><p class="eyebrow">CHAPTER PLAN</p><h3>章节规划</h3><p>严格按核心要求生成：${chapterTotal} 个章节，每章 ${pieceTotal} 篇；可以一章一章生成，也可以补齐剩余章节。</p></div><span class="tag">已生成 ${done}/${chapterTotal} 章 · 每章 ${pieceTotal} 篇</span></div>
    <div class="panel-body quick-unit-list">${units.map((unit, index) => `<article class="quick-unit-card">
      <input data-quick-unit="${index}" data-unit-field="title" value="${escapeHtml(unit.title || `第${index + 1}章 未命名`)}" />
      ${["大故事线","篇目分析","卷内作用","主角动机","核心设计","新增人物","爽点"].map((field)=>`<label>${field}<textarea data-quick-unit="${index}" data-unit-field="${field}">${escapeHtml(unit[field] || "")}</textarea></label>`).join("")}
    </article>`).join("") || `<div class="empty">还没有章节规划。先点“AI生成下一章”，或者直接“AI补齐剩余章节”。</div>`}</div>
    <div class="quick-actions">
      <button class="btn" data-action="quick-generate-next-unit" ${state.busy || complete ? "disabled" : ""}>${state.busy ? "生成中…" : "AI生成下一章"}</button>
      <button class="btn" data-action="quick-generate-units" ${state.busy || complete ? "disabled" : ""}>${done ? "AI补齐剩余章节" : "AI生成全部章节"}</button>
      <button class="btn primary" data-action="quick-next-outline" ${!complete || state.busy ? "disabled" : ""}>下一步：细纲 →</button>
    </div>
  </section>`;
}

function quickSnapshotKeys(config) {
  const base = ["language","audience","platform","length","pov","era","goldfinger"];
  const template = ["fixedTemplate","plotType","rhythmTemplate","worldviewTemplate"];
  const custom = ["styleMode","timeBackground","genre","titleStructure","maleLead","femaleLead","villain","plotHook"];
  const keys = config.mode === "模板创作" ? base.concat(template) : base.concat(custom);
  return keys.filter((key)=>key !== "goldfingerType" || config.goldfinger === "是")
    .concat(config.goldfinger === "是" ? ["goldfingerType"] : []);
}

function quickOutlineView(q) {
  const chapterTotal = quickChapterCount(q);
  const outlineDone = quickOutlineGeneratedCount(q);
  const outlineComplete = outlineDone >= chapterTotal;
  return `<section class="panel quick-panel">
    <div class="panel-head"><div><p class="eyebrow">DETAILED OUTLINE</p><h3>细纲</h3><p>细纲可以继续调整，确认后再生成正文。</p></div><span class="tag">${countText(q.fineOutline).toLocaleString()} 字</span></div>
    <div class="panel-body"><textarea class="quick-big-text" data-quick-field="fineOutline">${escapeHtml(q.fineOutline)}</textarea></div>
    <div class="quick-actions">
      <button class="btn" data-action="quick-generate-next-outline" ${state.busy || outlineComplete ? "disabled" : ""}>${state.busy ? "生成中…" : "AI生成下一章细纲"}</button>
      <button class="btn" data-action="quick-generate-fine-outline" ${state.busy || outlineComplete ? "disabled" : ""}>${outlineDone ? "AI补齐剩余细纲" : "AI生成全部细纲"}</button>
      <button class="btn primary" data-action="quick-next-draft" ${!outlineComplete || state.busy ? "disabled" : ""}>下一步：正文 →</button>
    </div>
  </section>`;
}

function quickDraftView(q) {
  const done = quickGeneratedPieceCount(q);
  const total = quickTotalPieces(q);
  const missing = Math.max(0, total - done);
  const target = quickNextDraftTarget(q);
  q.draft = quickDraftFromPieces(q) || q.draft;
  const generateLabel = state.busy ? "AI正在生成正文…" : target ? `AI生成下一篇：第${target.chapterIndex + 1}章第${target.pieceIndex + 1}篇` : "正文已全部生成";
  const batchLabel = state.busy ? "批量生成中…" : done ? "AI继续生成5篇" : "AI批量生成前5篇";
  return `<section class="panel quick-panel">
    <div class="panel-head"><div><p class="eyebrow">DRAFT BY PIECE</p><h3>逐章逐篇生成正文</h3><p>${state.busy ? "AI 正在生成当前篇，请等待当前任务完成。" : "正文不再一次生成全书。每次只生成一篇，保持章篇结构连续，降低大请求失败率。"}</p></div><span class="tag">${state.busy ? "生成中" : `${done}/${total} 篇 · ${countText(q.draft).toLocaleString()} 字`}</span></div>
    <div class="panel-body quick-draft-progress">
      <div class="quick-draft-status"><strong>已完成 ${done} 篇</strong><span>缺失 ${missing} 篇</span></div>
      <div class="quick-draft-meter"><span style="width:${total ? Math.round((done / total) * 100) : 0}%"></span></div>
      ${target ? `<p class="subtext">下一篇：第${target.chapterIndex + 1}章第${target.pieceIndex + 1}篇。系统会读取对应章节规划和细纲，只写这一篇正文。</p>` : `<p class="subtext">全部篇章已生成，可以保存到项目中心继续初写、设定和定稿。</p>`}
    </div>
    <div class="panel-body"><textarea class="quick-big-text draft" data-quick-field="draft">${escapeHtml(q.draft)}</textarea></div>
    <div class="quick-actions">
      <button class="btn primary ${state.busy ? "loading" : ""}" data-action="quick-generate-next-draft-piece" ${state.busy || !target ? "disabled" : ""}>${generateLabel}</button>
      <button class="btn ${state.busy ? "loading" : ""}" data-action="quick-generate-draft" ${state.busy || !target ? "disabled" : ""}>${batchLabel}</button>
      <button class="btn" data-action="quick-save-result" ${state.busy || !done ? "disabled" : ""}>保存已完成篇</button>
    </div>
  </section>`;
}

function quickView() {
  const q = quickWriting();
  const panels = {
    config: quickConfigView,
    inspiration: quickInspirationView,
    direction: quickDirectionView,
    unit: quickUnitView,
    outline: quickOutlineView,
    draft: quickDraftView
  };
  return `<div class="page-head">
    <div><p class="eyebrow">FAST CREATE PIPELINE</p><h1>快速创作</h1><p class="subtext">先试写方向，再逐步完善章节与正文；完成后可保存为项目继续创作。</p></div>
    <div class="head-actions"><button class="btn" data-action="quick-new-creation">新的创作</button><button class="btn" data-action="quick-save-project">保存进度</button><button class="btn dark" data-action="back-projects">返回项目中心</button></div>
  </div>
  ${quickStepper(q.step)}
  ${panels[q.step]?.(q) || quickConfigView(q)}
  <section class="panel quick-snapshot">
    <div class="panel-head"><h3>当前核心要求</h3><span class="tag">${escapeHtml(quickTextValue(q.config.audience))} · ${escapeHtml(quickTextValue(q.config.platform))}</span></div>
    <div class="panel-body quick-tags">${quickSnapshotKeys(q.config).flatMap((key)=>quickValueList(q.config[key]).slice(0, 6)).map((value)=>`<b>${escapeHtml(value)}</b>`).join("")}</div>
  </section>`;
}

function assetsView() {
  const p = project();
  const tabs = [["all","全部"],["character","人物"],["scene","场景"],["prop","道具"]];
  const labels = { character: "人物", scene: "场景", prop: "道具" };
  const finalizedCount = p.chapters.filter((chapter) => chapter.status === "已完成").length;
  const outputReady = finalizedCount > 0;
  const query = (state.assetSearch || "").trim().toLowerCase();
  const filtered = p.assets.filter((a) =>
    (state.assetTab === "all" || a.type === state.assetTab)
    && (!query || `${a.name} ${a.desc} ${a.version}`.toLowerCase().includes(query))
  );
  const focused = filtered.find((asset) => asset.id === state.assetFocusId) || filtered[0] || null;
  const linkedEntities = focused ? p.entities.filter((entity) => entity.visualAssetId === focused.id) : [];
  const relatedChapters = focused ? p.chapters.filter((chapter) => chapterContextText(p, chapter).includes(focused.name)).slice(0, 8) : [];
  return `
    <div class="page-head">
      <div><p class="eyebrow">VISUAL ASSET BIBLE</p><h1>视觉资产库</h1><p class="subtext">${outputReady ? "定稿后固定人物、场景和关键道具的视觉身份，保持跨章节画面一致。" : "文本阶段可以先维护设定；完成定稿后再生成定妆提示词、定妆图和故事板图。"}</p></div>
      <button class="btn primary" data-action="new-asset">＋ 新增资产</button>
    </div>
    <div class="studio-layout asset-studio-layout">
      <aside class="panel studio-nav-panel">
        <div class="panel-head"><h3>资产导航</h3><span class="tag">${filtered.length} 项</span></div>
        <div class="studio-nav-body">
          <input class="entity-search" data-asset-search value="${escapeHtml(state.assetSearch || "")}" placeholder="搜索人物、场景、道具……" />
          <div class="entity-filter-pills">${tabs.map(([id,label]) => `<button class="${state.assetTab === id ? "active" : ""}" data-asset-tab="${id}">${label}<small>${id==="all"?p.assets.length:p.assets.filter((a)=>a.type===id).length}</small></button>`).join("")}</div>
          <div class="asset-tree-list">${filtered.map((asset) => `
            <button class="asset-tree-node ${focused?.id === asset.id ? "active" : ""}" data-asset-focus="${asset.id}">
              <span class="asset-mini-avatar ${asset.type}">${escapeHtml(asset.name.slice(0,1))}</span>
              <strong>${escapeHtml(asset.name)}</strong>
              <small>${labels[asset.type] || "资产"} · ${asset.imageUrl ? "已定妆" : asset.promptReady || asset.prompt ? "待出图" : "待提示词"}</small>
            </button>`).join("") || `<div class="entity-tree-empty">当前分类暂无资产</div>`}</div>
          <button class="btn primary full-width" data-action="new-asset">＋ 新增资产</button>
        </div>
      </aside>
      <main class="panel studio-main-panel">
        ${focused ? `
          <div class="asset-detail-hero">
            <div class="asset-detail-visual ${focused.type}">${focused.imageUrl ? `<img src="${escapeHtml(focused.imageUrl)}" alt="${escapeHtml(focused.name)}" />` : escapeHtml(focused.name.slice(0,1))}</div>
            <div>
              <p class="eyebrow">${labels[focused.type] || "视觉资产"} · ${escapeHtml(focused.version || "v1")}</p>
              <h2>${escapeHtml(focused.name)}</h2>
              <p>${escapeHtml(focused.desc || "等待补充定妆描述。")}</p>
              <div class="entity-detail-actions">
                <button class="btn primary" ${outputReady ? `data-action="ai-asset-prompt" data-asset-id="${focused.id}"` : "disabled"}>${outputReady ? focused.promptReady || focused.prompt ? "查看/生成定妆" : "AI生成定妆提示词" : "定稿后解锁定妆"}</button>
                <button class="btn" data-action="new-asset">新增同类资产</button>
              </div>
            </div>
          </div>
          <div class="asset-detail-sections">
            <section><h3>定妆提示词</h3><p>${escapeHtml(focused.prompt || "还没有生成定妆提示词。点击上方按钮后，系统会生成可复用的人物/道具/场景定妆提示词。")}</p></section>
            <section><h3>一致性规则</h3><p>后续故事板图必须优先读取这张资产的定妆照、种子、版本、参考权重和视觉风格；如果故事板风格与资产风格冲突，生成前需要提示用户切换风格或重新定妆。</p></section>
          </div>`
        : `<div class="empty">还没有视觉资产。请先从正文提取，或手动新增人物、场景、道具。</div>`}
      </main>
      <aside class="panel studio-status-panel">
        <div class="panel-head"><h3>状态与约束</h3><span class="tag">${outputReady ? focused?.imageUrl ? "可出图" : "待完善" : "等待定稿"}</span></div>
        ${focused ? `<div class="studio-status-body">
          <div class="status-kv"><span>文本阶段</span><strong>${outputReady ? `已定稿 ${finalizedCount} 章` : "等待定稿"}</strong></div>
          <div class="status-kv"><span>类型</span><strong>${labels[focused.type] || "资产"}</strong></div>
          <div class="status-kv"><span>定妆状态</span><strong>${focused.imageUrl ? "定妆照已确认" : focused.promptReady || focused.prompt ? "提示词已就绪" : "未生成提示词"}</strong></div>
          <div class="status-kv"><span>视觉家族</span><strong>${escapeHtml(assetVisualFamily(focused))}</strong></div>
          <div class="status-kv"><span>参考权重</span><strong>${Math.round((focused.referenceWeight || 0.8) * 100)}%</strong></div>
          <div class="status-kv"><span>种子</span><strong>${focused.seed || "未锁定"}</strong></div>
          <div class="status-kv"><span>关联百科</span><strong>${linkedEntities.map((entity)=>escapeHtml(entity.name)).join("、") || "未关联"}</strong></div>
          <div class="side-section"><h4>出现位置</h4>${relatedChapters.length ? relatedChapters.map((chapter)=>`<button data-chapter="${chapter.id}" data-action="go-writing">${escapeHtml(chapter.title)}</button>`).join("") : `<p>暂未在正文或任务卡中匹配到。</p>`}</div>
        </div>` : `<div class="empty">选择一个资产查看状态。</div>`}
      </aside>
    </div>`;
}

function linkedAssetIdsForChapter(p, c) {
  if (!p || !c) return [];
  return Object.prototype.hasOwnProperty.call(p.storyboardAssets || {}, c.id)
    ? p.storyboardAssets[c.id]
    : inferLinkedAssetIdsForChapter(p, c);
}

function chapterContextText(p, c) {
  const task = c?.taskCard || {};
  const scenes = (c?.scenes || []).map((scene) => `${scene.title} ${scene.summary} ${(scene.tags || []).join(" ")}`).join("\n");
  return [
    p?.title, p?.logline, c?.title, c?.summary, c?.content,
    task.goal, ...(task.requiredEvents || []), ...(task.requiredCharacters || []), task.foreshadow, task.hook, scenes
  ].filter(Boolean).join("\n");
}

function inferLinkedAssetIdsForChapter(p, c) {
  const text = chapterContextText(p, c);
  if (!text.trim()) return [];
  const matched = p.assets.filter((asset) => text.includes(asset.name)).map((asset) => asset.id);
  if (matched.length) return matched;
  return p.assets
    .filter((asset) => asset.type === "scene" && (p.era ? asset.desc?.includes(p.era) : false))
    .slice(0, 1)
    .map((asset) => asset.id);
}

function storyboardView() {
  const p = project();
  const c = chapter();
  const missing = c?.status === "已完成" ? [] : detectMissingAssets(c?.content || "", p.assets);
  const linkedIds = linkedAssetIdsForChapter(p, c);
  const linkedAssets = p.assets.filter((asset) => linkedIds.includes(asset.id));
  const styleMeta = storyboardStyleMeta(p.storyboardStyle);
  const notReadyAssets = linkedAssets.filter((asset) => !asset.imageUrl);
  const incompatibleAssets = styleMeta.family === "通用" ? [] : linkedAssets.filter((asset) => asset.imageUrl && assetVisualFamily(asset) !== "通用" && assetVisualFamily(asset) !== styleMeta.family);
  p.storyboardConfig ||= {};
  const config = p.storyboardConfig[c?.id] || { mode: "12" };
  const shotLabel = config.mode === "auto" ? "AI智能" : `${config.mode}格`;
  const styles = Object.entries(STORYBOARD_STYLE_GUIDES).map(([name, meta]) => [name, `${meta.temp} · ${meta.family}`]);
  const imageJob = state.storyboardImageJob;
  const imageBusy = state.busy && imageJob?.type === "image";
  const batchLabel = imageBusy && imageJob.total > 1 ? `正在生成画面 ${imageJob.done}/${imageJob.total}` : "批量生成可见画面";
  const shotPlanLabel = state.busy && !imageBusy ? "正在生成故事板…" : `生成${shotLabel}故事板`;
  const shots = p.storyboards?.[c?.id] || [];
  const activeShot = shots[0];
  return `
    <div class="page-head">
      <div><p class="eyebrow">STORYBOARD LAB</p><h1>一键生成章节故事板</h1><p class="subtext">调用已确认的视觉资产，把本章拆解成连续电影镜头。</p></div>
      <div class="head-actions"><button class="btn ${imageBusy ? "loading" : ""}" data-action="generate-all-shot-images" ${state.busy || !(p.storyboards?.[c?.id] || []).length ? "disabled" : ""}>${batchLabel}</button><button class="btn primary ${state.busy && !imageBusy ? "loading" : ""}" data-action="generate-shots" ${state.busy || !c?.content ? "disabled" : ""}>${shotPlanLabel}</button></div>
    </div>
    <div class="studio-layout storyboard-studio-layout">
      <aside class="panel studio-nav-panel">
        <div class="panel-head"><h3>章节导航</h3><span class="tag">${p.chapters.length} 篇</span></div>
        <div class="studio-nav-body">
          <select id="shotChapter">${p.chapters.map((item) => `<option value="${item.id}" ${item.id === c?.id ? "selected" : ""}>${escapeHtml(item.title)}</option>`).join("")}</select>
          <div class="story-chapter-tree">${p.volumes.map((volume)=>`<details class="volume-group" ${volume.chapterIds.includes(c?.id) ? "open" : ""}>
            <summary class="volume-label"><strong>${escapeHtml(volume.title)}</strong><span>${volume.chapterIds.length}集</span></summary>
            ${volume.chapterIds.map((chapterId)=>{
              const item = p.chapters.find((chapter)=>chapter.id===chapterId); if (!item) return "";
              const count = (p.storyboards?.[item.id] || []).length;
              return `<button class="asset-tree-node ${item.id === c?.id ? "active" : ""}" data-chapter="${item.id}"><strong>${escapeHtml(item.title)}</strong><small>${count ? `${count} 镜头` : item.status}</small></button>`;
            }).join("")}
          </details>`).join("")}</div>
        </div>
      </aside>
      <main class="studio-main-panel">
        <div class="tabs compact-tabs">
          <button class="tab ${state.storyboardTab === "shots" ? "active" : ""}" data-story-tab="shots">故事板画面</button>
          <button class="tab ${state.storyboardTab === "table" ? "active" : ""}" data-story-tab="table">制作清单</button>
        </div>
        ${renderShots(shots, p.storyboardStyle)}
      </main>
      <aside class="panel studio-status-panel storyboard-side-panel">
        <div class="panel-head"><h3>状态与生成</h3><span class="tag">${c?.status || "待写"}</span></div>
        <div class="studio-status-body">
          <div class="status-kv"><span>当前篇</span><strong>${escapeHtml(c?.title || "未选择")}</strong></div>
          <div class="status-kv"><span>正文字数</span><strong>${countText(c?.content || "")} 字</strong></div>
          <div class="status-kv"><span>镜头规划</span><strong>${shotLabel}</strong></div>
          <div class="shot-count-picker">${[["6","6格概要"],["12","12格标准"],["24","24格详细"],["auto","AI智能"]].map(([id,label]) => `<button class="choice ${config.mode===id?"selected":""}" data-shot-count="${id}">${label}</button>`).join("")}</div>
          <div class="side-section"><h4>资产预检</h4>
            ${missing.length ? `<p class="notice compact">可能缺失：${missing.map(escapeHtml).join("、")}。建议先加入资产库。</p>` : notReadyAssets.length ? `<p class="notice compact">缺定妆照：${notReadyAssets.map((asset)=>escapeHtml(asset.name)).join("、")}。</p>` : incompatibleAssets.length ? `<p class="notice compact">当前定妆照无法生成「${escapeHtml(normalizeStoryboardStyle(p.storyboardStyle))}」。不匹配：${incompatibleAssets.map((asset)=>escapeHtml(asset.name)).join("、")}。</p>` : `<p class="notice compact pass">资产和画风可用。</p>`}
          </div>
          <div class="side-section"><h4>关联资产 ${linkedAssets.length} / ${p.assets.length}</h4>
            <div class="side-asset-list">${p.assets.length ? p.assets.map((asset) => `
              <label class="asset-link-item ${linkedIds.includes(asset.id) ? "selected" : ""}">
                <input type="checkbox" data-story-asset="${asset.id}" ${linkedIds.includes(asset.id) ? "checked" : ""} />
                <span class="asset-mini-avatar ${asset.type}">${escapeHtml(asset.name.slice(0,1))}</span>
                <div><strong>${escapeHtml(asset.name)}</strong><small>${asset.type === "character" ? "人物" : asset.type === "scene" ? "场景" : "道具"} · ${escapeHtml(asset.version || "v1")}</small></div>
              </label>`).join("") : `<p>资产库为空。</p>`}</div>
          </div>
          <div class="side-section"><h4>画风</h4><div class="style-options side-style-options">${styles.map(([name,desc], index) => `<button class="style-option ${normalizeStoryboardStyle(p.storyboardStyle)===name?"selected":""}" data-story-style="${name}"><span class="style-swatch swatch-${index % 5}"></span><strong>${name}</strong><small>${desc}</small></button>`).join("")}</div></div>
          <div class="side-section"><h4>提示词约束</h4><div class="prompt-box">16:9故事板，${shots.length ? `${shots.length}个` : shotLabel}连续电影镜头，${escapeHtml(p.storyboardStyle)}。严格调用关联资产参考图、种子、版本和参考权重；保持人物五官、服装、道具和场景结构一致。</div>${activeShot ? `<div class="prompt-box">${escapeHtml(activeShot.prompt)}</div>` : ""}</div>
        </div>
      </aside>
    </div>`;
}

function renderShots(shots, style) {
  if (!shots.length) return `<div class="panel empty storyboard-empty"><span>▦</span><h3>还没有故事板</h3><p>确认本章、补齐资产并选择画风后，点击“生成12格故事板”。</p></div>`;
  if (state.storyboardTab === "table") {
    return `<div class="panel" style="overflow:auto"><table style="width:100%;border-collapse:collapse;font-size:12px">
      <thead><tr>${["镜号","时长","画面描述","景别","角色动作","情绪","场景","对白","关联资产","分镜提示词","视频运动提示词"].map(x=>`<th style="padding:12px;text-align:left;border-bottom:1px solid var(--line);white-space:nowrap">${x}</th>`).join("")}</tr></thead>
      <tbody>${shots.map(s=>`<tr>${[s.no,s.duration,s.visual,s.shotSize,s.action,s.emotion,s.scene,s.dialogue,(s.assetNames||[]).join("、"),s.prompt,s.motion].map((x,index)=>`<td style="padding:12px;border-bottom:1px solid #eee9df;min-width:${index >= 8 ? "260px" : "90px"};line-height:1.6">${escapeHtml(String(x||"—"))}</td>`).join("")}</tr>`).join("")}</tbody>
    </table></div>`;
  }
  const active = shots[0];
  const imageJob = state.storyboardImageJob;
  const imageBusy = state.busy && imageJob?.type === "image";
  return `<div class="storyboard-workbench compact">
    <div class="storyboard-sheet full-width ${style.includes("手绘") ? "sketch-style" : ""}">
      <div class="sheet-head"><div><strong>${shots.length}格故事板 · ${escapeHtml(chapter()?.title || "")}</strong><span>${escapeHtml(style)} / 16:9</span></div><div class="annotation-legend"><i class="red"></i>动作 <i class="blue"></i>运镜 <i class="green"></i>构图 <i class="orange"></i>光线</div></div>
      <div class="storyboard-grid">${shots.map((s) => {
        const shotBusy = imageBusy && imageJob.shotNo === s.no;
        return `
        <article class="shot-card ${s.locked ? "locked" : ""} ${shotBusy ? "generating" : ""}">
          <div class="shot-image">
            <span class="shot-no">${s.no}</span><span class="shot-size-label">${escapeHtml(s.shotSize.split("/")[0])}</span>
            ${s.imageUrl ? `<img src="${escapeHtml(s.imageUrl)}" alt="镜头 ${s.no}" />` : `<div class="sketch-figure"><i></i><b></b></div>`}
            ${shotBusy ? `<div class="shot-generating">生成中…</div>` : ""}
            <div class="motion-arrow ${s.no % 2 ? "right" : "left"}">➜</div>
            <div class="shot-caption">${escapeHtml(s.visual)}</div>
          </div>
          <div class="shot-strip"><span>${escapeHtml(s.duration)}</span><span>${escapeHtml(s.emotion)}</span></div>
          <div class="shot-actions"><button data-action="toggle-shot-lock" data-shot-index="${s.no-1}" ${state.busy ? "disabled" : ""}>${s.locked ? "🔒 已锁定" : "锁定"}</button><button data-action="regenerate-shot" data-shot-index="${s.no-1}" ${state.busy ? "disabled" : ""}>重做</button><button class="${shotBusy ? "loading" : ""}" data-action="generate-shot-image" data-shot-index="${s.no-1}" ${state.busy ? "disabled" : ""}>${shotBusy ? "生成中" : s.imageUrl ? "重绘" : "生成画面"}</button><button data-action="delete-shot" data-shot-index="${s.no-1}" ${state.busy ? "disabled" : ""}>删除</button></div>
        </article>`;
      }).join("")}</div>
      <button class="btn add-shot-wide" data-action="add-shot" ${state.busy ? "disabled" : ""}>＋ 手动增加镜头</button>
    </div>
  </div>`;
}

function detectMissingAssets(text, assets) {
  if (!text.trim()) return [];
  const known = assets.map((a) => a.name);
  const candidates = [...text.matchAll(/([\u4e00-\u9fa5]{2}[街城宫司寺山塔]|[\u4e00-\u9fa5]{2,3}[剑刀簿]|灯笼|系统|宗门)/g)]
    .map((m) => m[1])
    .filter((name) => !known.some((knownName) => name.includes(knownName) || knownName.includes(name)));
  return [...new Set(candidates)].slice(0, 4);
}

function bookSearchResults(query) {
  const p = project();
  if (!p) return "";
  const term = query.trim().toLocaleLowerCase();
  if (!term) return `<p class="book-search-hint">输入角色、设定、章节或正文关键词，点击结果直达。</p>`;
  const matches = [
    ...p.chapters.map((item) => ({ type: "章节", view: "drafting", id: item.id, title: item.title, detail: item.content || item.summary || "尚无正文" })),
    ...p.entities.map((item) => ({ type: "设定", view: "encyclopedia", id: item.id, title: item.name, detail: `${item.summary} ${(item.aliases || []).join(" ")}` })),
    ...p.memories.map((item) => ({ type: "记忆", view: "bible", id: item.id, title: item.title, detail: item.content })),
    ...(p.inspirationNotes || []).map((item) => ({ type: "灵感", view: "inspiration", id: item.id, title: item.text.slice(0, 30), detail: item.text })),
    ...p.assets.map((item) => ({ type: "资产", view: "assets", id: item.id, title: item.name, detail: item.desc || "" }))
  ].filter((item) => `${item.title} ${item.detail}`.toLocaleLowerCase().includes(term)).slice(0, 30);
  return matches.length ? matches.map((item) => {
    const source = String(item.detail || "");
    const position = source.toLocaleLowerCase().indexOf(term);
    const excerpt = position < 0 ? source.slice(0, 90) : source.slice(Math.max(0, position - 32), position + 58);
    return `<button class="book-search-result" data-search-view="${item.view}" data-search-id="${escapeHtml(item.id)}"><span>${item.type}</span><strong>${escapeHtml(item.title)}</strong><small>${escapeHtml(excerpt)}</small></button>`;
  }).join("") : `<p class="book-search-hint">没有找到“${escapeHtml(query.trim())}”。试试更短的关键词。</p>`;
}

function bookSearchModal() {
  return `<div class="modal-backdrop"><div class="modal book-search-modal" role="dialog" aria-label="搜索本书">
    <div class="modal-head"><div><p class="eyebrow">BOOK SEARCH</p><h2>搜索本书</h2></div><button class="btn small ghost" data-action="close-modal">✕</button></div>
    <div class="modal-body"><input id="bookSearchInput" type="search" autocomplete="off" value="${escapeHtml(state.bookSearch)}" placeholder="搜索章节、正文、设定、记忆、资产…" aria-label="搜索关键词" />
      <div class="book-search-results" id="bookSearchResults">${bookSearchResults(state.bookSearch)}</div></div>
  </div></div>`;
}

function modal() {
  if (!state.modal) return "";
  if (state.modal === "book-ideas") return bookIdeasModal();
  if (state.modal === "book-setup") return bookSetupModal();
  if (state.modal === "book-search") return bookSearchModal();
  if (state.modal === "project") return projectWizard();
  if (state.modal === "asset") return assetModal();
  if (state.modal === "ai-draft") return aiDraftModal();
  if (state.modal === "asset-review") return assetReviewModal();
  if (state.modal === "outline-expand") return outlineExpandModal();
  if (state.modal === "asset-prompt") return assetPromptModal();
  if (state.modal === "versions") return versionsModal();
  if (state.modal === "entity") return entityModal();
  if (state.modal === "memory") return memoryModal();
  if (state.modal === "delete-project") return deleteProjectModal();
  if (state.modal === "trash") return trashModal();
  if (state.modal === "trash-delete") return trashDeleteModal();
  return "";
}

const BOOK_IDEA_ROUTES = [
  { id:"fast", label:"高钩子快节奏", hint:"开局迅速兑现卖点，适合高频追更" },
  { id:"long", label:"长线成长", hint:"建立能力边界、升级阶梯和可持续矛盾" },
  { id:"fresh", label:"差异化脑洞", hint:"改变故事机制，制造意料之外的反转" }
];
const BOOK_IDEA_PROGRESS = {
  core: ["正在理解题材与风格…","正在寻找主角的特殊处境…","正在设计核心机制与代价…","正在安排开局冲突…","正在压缩为清晰的核心脑洞…"],
  routes: ["正在拆分三种立书方向…","正在设计高钩子开局…","正在建立长线成长阶梯…","正在寻找差异化反转…","正在检查三条路线是否重复…","正在整理书名与完整梗概…"]
};
let bookIdeaProgressTimer = null;
function startBookIdeaProgress(kind) {
  if (bookIdeaProgressTimer) clearInterval(bookIdeaProgressTimer);
  state.busy = true;
  state.bookIdeaProgress = { kind, index: 0, startedAt: Date.now() };
  bookIdeaProgressTimer = setInterval(() => {
    const stages = BOOK_IDEA_PROGRESS[kind];
    state.bookIdeaProgress.index = (state.bookIdeaProgress.index + 1) % stages.length;
    if (state.modal === "book-ideas") render();
  }, 900);
  render();
}
function stopBookIdeaProgress() {
  if (bookIdeaProgressTimer) clearInterval(bookIdeaProgressTimer);
  bookIdeaProgressTimer = null;
  state.busy = false;
  state.bookIdeaProgress = { kind: "", index: 0 };
}
async function keepBookIdeaProgressVisible(minimumMs) {
  const elapsed = Date.now() - Number(state.bookIdeaProgress.startedAt || Date.now());
  if (elapsed < minimumMs) await new Promise(resolve=>setTimeout(resolve, minimumMs - elapsed));
}
function bookIdeaProgressView() {
  const progress = state.bookIdeaProgress;
  const stages = BOOK_IDEA_PROGRESS[progress.kind] || BOOK_IDEA_PROGRESS.routes;
  const current = stages[progress.index] || stages[0];
  return `<section class="book-idea-progress">
    <div class="book-idea-progress-head"><div><i></i><i></i><i></i><strong>4YI 推演中</strong></div><span>${progress.index + 1} / ${stages.length}</span></div>
    <div class="book-idea-progress-line"><span>${escapeHtml(current)}</span></div>
    <div class="book-idea-skeleton-grid">${[0,1,2].map(index=>`<article><b></b><i></i><i></i><i></i><small>方向 0${index+1}</small></article>`).join("")}</div>
  </section>`;
}
function bookIdeaMultiSelect(field, label, options) {
  const idea = state.bookIdea;
  const values = idea[field + "Values"] || [];
  const other = idea[field + "Other"] || "";
  const selectedText = [...values, other].filter(Boolean).join("、") || ("请选择" + label);
  return `<details class="book-idea-multiselect">
    <summary><span data-idea-summary="${field}">${escapeHtml(selectedText)}</span><i>⌄</i></summary>
    <div class="book-idea-option-menu">
      ${options.filter(item=>item!=="随机").map(item=>`<label><input type="checkbox" data-idea-multi="${field}" value="${escapeHtml(item)}" aria-label="${escapeHtml(item)}" ${values.includes(item)?"checked":""}/><span>${escapeHtml(item)}</span></label>`).join("")}
      <div class="book-idea-other"><strong>其他（手写输入）</strong><input data-idea-other="${field}" aria-label="其他${label}" value="${escapeHtml(other)}" placeholder="输入自定义${label}，可与上面多选组合" /></div>
    </div>
  </details>`;
}
function bookIdeasModal() {
  const idea = state.bookIdea;
  return `<div class="modal-backdrop"><div class="modal book-ideas-modal">
    <div class="modal-head"><div><p class="eyebrow">NEW STORY · 4YI</p><h2>从一个脑洞，推演三本不同的书</h2><p>先比较方向，再进入五步建书。推演不会直接创建项目。</p></div><button class="btn small ghost" data-action="close-modal">✕</button></div>
    <div class="modal-body">
      <div class="book-idea-inputs">
        <div class="field"><label>题材 / 类目（可多选）</label>${bookIdeaMultiSelect("genre","题材",QUICK_OPTIONS.genre)}</div>
        <div class="field"><label>风格关键词（可多选）</label>${bookIdeaMultiSelect("style","风格",QUICK_OPTIONS.styleMode)}</div>
        <div class="field full"><div class="book-idea-field-head"><label for="ideaPremise">核心脑洞 *</label><div><button class="btn small" data-action="generate-core-premise" ${state.busy?"disabled":""}>${state.busy?"AI 构思中…":idea.premise?"↻ 换一个":"✦ AI 生成"}</button></div></div><textarea id="ideaPremise" placeholder="可以自己写，也可以先填写题材和风格，让 AI 帮你生成">${escapeHtml(idea.premise)}</textarea>${idea.premiseDemo ? `<small class="book-idea-demo-note">当前是本地灵感示例；配置密钥后会改用 AI 生成。</small>` : ""}</div>
      </div>
      ${state.busy ? bookIdeaProgressView() : `<div class="book-idea-toolbar"><span>${idea.options.length ? idea.demo ? "本地结构示例 · 配置密钥后可由 AI 推演" : "AI 推演结果 · 请选择最想写的方向" : "三条路线会分别强调即时爽点、长线成长和差异化机制"}</span><button class="btn primary" data-action="generate-book-ideas">${idea.options.length?"重新推演三种方向":"推演三种方向"}</button></div>
      ${idea.options.length ? `<div class="book-idea-grid">${idea.options.map((option,index)=>`<button class="book-idea-card ${idea.selected===index?"selected":""}" data-book-idea="${index}"><span class="book-idea-route">0${index+1} · ${escapeHtml(BOOK_IDEA_ROUTES[index].label)}</span><strong>${escapeHtml(option.title)}</strong><p>${escapeHtml(option.summary)}</p><small>${escapeHtml(option.mechanism || BOOK_IDEA_ROUTES[index].hint)}</small></button>`).join("")}</div>` : `<div class="book-idea-empty">写下你的核心脑洞，点击推演后比较三条不同的立书方向。</div>`}`}
    </div>
    <div class="modal-foot"><button class="btn" data-action="manual-book-wizard">跳过推演，手动建书</button><button class="btn primary" data-action="select-book-idea" ${idea.selected<0?"disabled":""}>选这个方向，继续建书 →</button></div>
  </div></div>`;
}

const BOOK_COVER_THEMES = [
  { id:"ember", label:"烬火长夜", mark:"破局", glyph:"火" },
  { id:"jade", label:"青山异闻", mark:"东方奇谭", glyph:"山" },
  { id:"void", label:"深空序列", mark:"高概念", glyph:"Ω" },
  { id:"city", label:"都市暗流", mark:"逆袭", glyph:"城" }
];

function syncBookSetupInputs() {
  const w = state.wizard;
  if ($("#setupTitle")) w.title = $("#setupTitle").value.trim();
  if ($("#setupCategory")) {
    const category = $("#setupCategory").value;
    w.genre = category ? [category, ...(w.genre || []).filter(item=>item!==category)].slice(0,4) : (w.genre || []);
  }
  if ($("#setupSynopsis")) w.logline = $("#setupSynopsis").value.trim();
}

function bookSetupModal() {
  const w = state.wizard;
  const theme = BOOK_COVER_THEMES.find(item=>item.id===w.coverTheme) || BOOK_COVER_THEMES[0];
  const categories = [...new Set([...(w.genre || []), ...QUICK_OPTIONS.genre.filter(item=>item!=="随机")])];
  const genre = w.genre?.[0] || "";
  return `<div class="modal-backdrop book-setup-backdrop"><div class="modal book-setup-modal" role="dialog" aria-label="作品立项">
    <aside class="book-setup-aside"><p class="book-setup-en">CREATE</p><h2>作品立项</h2><i></i><p>确认读者第一眼看到的书籍信息，再进入五步建书。</p><button class="book-setup-return" data-action="back-book-ideas">← 返回脑洞推演</button></aside>
    <section class="book-setup-main">
      <header><div><p class="eyebrow">BOOK PROFILE · 00</p><h2>先让这本书站在读者面前</h2></div><span>✦ 4YI 协助</span><button class="book-setup-close" data-action="close-modal" aria-label="关闭">✕</button></header>
      <div class="book-setup-content">
        <div class="book-cover-column">
          <div class="novel-cover ${theme.id}">
            ${w.coverImage ? `<img src="${escapeHtml(w.coverImage)}" alt="上传的书籍封面" />` : `<div class="novel-cover-art"><b>${escapeHtml(theme.glyph)}</b><em></em><span>${escapeHtml(theme.mark)}</span></div>`}
            <div class="novel-cover-copy"><strong>${escapeHtml(w.title || "未命名新书")}</strong><small>4YI 著</small></div>
          </div>
          <div class="book-cover-actions"><button class="btn" data-action="upload-book-cover">上传封面</button><button class="btn dark" data-action="generate-book-cover">✦ 换一款</button><input id="bookCoverUpload" type="file" accept="image/png,image/jpeg,image/webp" hidden /></div>
          <small>建议 600 × 800 px，支持 JPG、PNG、WebP</small>
        </div>
        <div class="book-profile-fields">
          <label><span>书名 <b>/ TITLE</b></span><input id="setupTitle" maxlength="40" value="${escapeHtml(w.title || "")}" placeholder="输入一个有记忆点的书名" /></label>
          <label><span>主分类 <b>/ CATEGORY</b></span><select id="setupCategory"><option value="">请选择主分类</option>${categories.map(item=>`<option value="${escapeHtml(item)}" ${genre===item?"selected":""}>${escapeHtml(item)}</option>`).join("")}</select></label>
          <label class="synopsis"><span>作品简介 <b>/ SYNOPSIS</b><small id="setupSynopsisCount">${String(w.logline || "").length} / 500</small></span><textarea id="setupSynopsis" maxlength="500" placeholder="用一个异常开局、一个核心矛盾和一个追读悬念吸引读者…">${escapeHtml(w.logline || "")}</textarea></label>
          <div class="book-profile-note"><span>◇</span><p><strong>展示预览</strong>这些内容会成为项目首页的书籍名片，后续仍可修改。</p></div>
        </div>
      </div>
      <footer><button class="btn" data-action="back-book-ideas">取消</button><button class="btn primary book-setup-next" data-action="enter-book-wizard">确认立项，进入五步建书 →</button></footer>
    </section>
  </div></div>`;
}

function deleteProjectModal() {
  const target = state.projects.find((item) => item.id === state.deleteProjectId);
  if (!target) return "";
  return `<div class="modal-backdrop"><div class="modal delete-project-modal">
    <div class="modal-head"><div><p class="eyebrow">MOVE TO TRASH</p><h2>移除「${escapeHtml(target.title)}」？</h2></div><button class="btn small ghost" data-action="close-modal">✕</button></div>
    <div class="modal-body"><div class="delete-warning"><span>!</span><div><strong>项目会从项目中心消失</strong><p>正文、大纲、设定、视觉资产和故事板会一起移入回收站，之后仍可恢复。</p></div></div>
      <div class="project-delete-summary"><span>${target.chapters.length} 章</span><span>${target.chapters.reduce((n,c)=>n+countText(c.content),0).toLocaleString()} 字</span><span>${target.assets.length} 项资产</span></div>
    </div>
    <div class="modal-foot"><button class="btn" data-action="close-modal">取消</button><button class="btn danger-solid" data-action="confirm-delete-project">移到回收站</button></div>
  </div></div>`;
}

function trashModal() {
  return `<div class="modal-backdrop"><div class="modal trash-modal">
    <div class="modal-head"><div><p class="eyebrow">PROJECT TRASH</p><h2>项目回收站</h2><p>误删的项目可以完整恢复；彻底删除后将从本机回收站移除。</p></div><button class="btn small ghost" data-action="close-modal">✕</button></div>
    <div class="modal-body trash-list">${state.trash.length ? state.trash.map((entry) => `
      <article><div><strong>${escapeHtml(entry.project.title)}</strong><span>${entry.project.chapters.length} 章 · ${entry.project.chapters.reduce((n,c)=>n+countText(c.content),0).toLocaleString()} 字 · ${entry.project.assets?.length || 0} 项资产</span><small>移除于 ${new Date(entry.deletedAt).toLocaleString()}</small></div><div class="trash-actions"><button class="btn small primary" data-action="restore-project" data-trash-id="${entry.id}">还原</button><button class="btn small danger-outline" data-action="ask-delete-trash" data-trash-id="${entry.id}">删除</button></div></article>`).join("") : `<div class="empty">回收站是空的。</div>`}</div>
    <div class="modal-foot"><span class="subtext">项目不会自动永久删除。</span><button class="btn" data-action="close-modal">完成</button></div>
  </div></div>`;
}

function trashDeleteModal() {
  const entry = state.trash.find((item) => item.id === state.trashDeleteId);
  if (!entry) return trashModal();
  return `<div class="modal-backdrop"><div class="modal delete-project-modal">
    <div class="modal-head"><div><p class="eyebrow">DELETE FOREVER</p><h2>彻底删除「${escapeHtml(entry.project.title)}」？</h2></div><button class="btn small ghost" data-action="back-trash">✕</button></div>
    <div class="modal-body"><div class="delete-warning"><span>!</span><div><strong>这个操作不可恢复</strong><p>项目正文、大纲、设定、视觉资产和故事板都会从本机回收站移除。</p></div></div>
      <div class="project-delete-summary"><span>${entry.project.chapters.length} 章</span><span>${entry.project.chapters.reduce((n,c)=>n+countText(c.content),0).toLocaleString()} 字</span><span>${entry.project.assets?.length || 0} 项资产</span></div>
    </div>
    <div class="modal-foot"><button class="btn" data-action="back-trash">取消</button><button class="btn danger-solid" data-action="confirm-delete-trash">彻底删除</button></div>
  </div></div>`;
}

function entityModal() {
  const p = project();
  const entity = p.entities.find((item)=>item.id===state.entityEditId) || normalizeEntity({});
  const labels = ENTITY_TYPES;
  return `<div class="modal-backdrop"><div class="modal"><div class="modal-head"><div><p class="eyebrow">ENCYCLOPEDIA ENTITY</p><h2>${state.entityEditId?"编辑设定":"新建设定"}</h2></div><button class="btn small ghost" data-action="close-modal">✕</button></div>
  <div class="modal-body"><div class="form-grid">
    <div class="field"><label>类型</label><select id="entityType">${labels.map(([id,label])=>`<option value="${id}" ${entity.type===id?"selected":""}>${label}</option>`).join("")}</select></div>
    <div class="field"><label>状态</label><select id="entityStatus"><option value="draft" ${entity.status==="draft"?"selected":""}>草稿</option><option value="confirmed" ${entity.status==="confirmed"?"selected":""}>已确认</option></select></div>
    <div class="field full"><label>名称</label><input id="entityName" value="${escapeHtml(state.entityEditId?entity.name:"")}" placeholder="例如：倚天剑" /></div>
    <div class="field full"><label>静态设定摘要</label><textarea id="entitySummary" placeholder="只写长期稳定的信息，不写当前持有人或临时状态">${escapeHtml(state.entityEditId?entity.summary:"")}</textarea></div>
    <div class="field"><label>所在分组</label><select id="entityFolder"><option value="">未分组</option>${(p.entityFolders||[]).map(folder=>`<option value="${folder.id}" ${entity.folderId===folder.id?"selected":""}>${escapeHtml(folder.name)}</option>`).join("")}</select></div>
    <div class="field"><label>角色身份</label><select id="entityRole">${[["ordinary","普通角色"],["lead","主角"],["important","重要角色"],["antagonist","主要反派"]].map(([id,label])=>`<option value="${id}" ${entity.role===id?"selected":""}>${label}</option>`).join("")}</select></div>
    <div class="field"><label>生效范围</label><select id="entityScope">${Object.entries(ENTITY_SCOPE_LABELS).map(([id,label])=>`<option value="${id}" ${entity.scope===id?"selected":""}>${label}</option>`).join("")}</select></div>
    <div class="field"><label>绑定卷宗</label><select id="entityVolume"><option value="">未绑定</option>${p.volumes.map(volume=>`<option value="${volume.id}" ${entity.volumeId===volume.id?"selected":""}>${escapeHtml(volume.title)}</option>`).join("")}</select></div>
    <div class="field full"><label>详细档案</label><textarea id="entityContent" class="entity-content-input" placeholder="用 # 标题、【小节】和段落写完整档案；保存后自动排版展示">${escapeHtml(entity.content)}</textarea></div>
    <div class="field full"><label>关键事实（每行一条）</label><textarea id="entityKeyFacts" placeholder="稳定、不可轻易变化的信息">${escapeHtml(listValue(entity.keyFacts))}</textarea></div>
    <div class="field full"><label>自定义属性（每行一条，例如：阵营：自由人）</label><textarea id="entityAttributes">${escapeHtml(listValue(entity.attributes))}</textarea></div>
    <div class="field"><label>别名（逗号分隔）</label><input id="entityAliases" value="${escapeHtml(entity.aliases.join("、"))}" /></div>
    <div class="field"><label>首次出场章节</label><select id="entityFirstChapter"><option value="">未指定</option>${p.chapters.map((c)=>`<option value="${c.id}" ${entity.firstChapterId===c.id?"selected":""}>${escapeHtml(c.title)}</option>`).join("")}</select></div>
    <div class="field full"><label>关系（每行一条，例如：持有人 → 张无忌）</label><textarea id="entityRelations">${escapeHtml(listValue(entity.relations))}</textarea></div>
  </div><div class="notice">百科保存静态身份；当前持有人、伤势等变化请记录到动态记忆。设定内容由你撰写，演示模式也能完整编辑和保存。</div></div>
  <div class="modal-foot"><button class="btn" data-action="close-modal">取消</button><button class="btn primary" data-action="save-entity">保存设定</button></div></div></div>`;
}
function memoryModal() {
  const p=project();
  const memory=p.memories.find((item)=>item.id===state.memoryEditId) || normalizeMemory({});
  const labels=[["plot","剧情状态"],["time","舞台时空"],["character","角色状态"],["relationship","关系状态"],["clue","开放线索"]];
  return `<div class="modal-backdrop"><div class="modal"><div class="modal-head"><div><p class="eyebrow">DYNAMIC FACT</p><h2>${state.memoryEditId?"编辑事实与溯源":"新增动态事实"}</h2></div><button class="btn small ghost" data-action="close-modal">✕</button></div>
  <div class="modal-body"><div class="form-grid">
    <div class="field"><label>事实类型</label><select id="memoryType">${labels.map(([id,label])=>`<option value="${id}" ${memory.type===id?"selected":""}>${label}</option>`).join("")}</select></div>
    <div class="field"><label>来源章节</label><select id="memoryChapter"><option value="">手动记录</option>${p.chapters.map((c)=>`<option value="${c.id}" ${memory.chapterId===c.id?"selected":""}>${escapeHtml(c.title)}</option>`).join("")}</select></div>
    <div class="field full"><label>标题</label><input id="memoryTitle" value="${escapeHtml(state.memoryEditId?memory.title:"")}" /></div>
    <div class="field full"><label>当前事实</label><textarea id="memoryContent">${escapeHtml(state.memoryEditId?memory.content:"")}</textarea></div>
    <div class="field full"><label>关联实体</label><div class="memory-entity-checks">${p.entities.map((entity)=>`<label><input type="checkbox" data-memory-entity="${entity.id}" ${memory.entityIds.includes(entity.id)?"checked":""} />${escapeHtml(entity.name)}</label>`).join("") || "暂无百科实体"}</div></div>
  </div>${memory.versions.length?`<div class="memory-history"><h3>历史版本</h3>${memory.versions.slice().reverse().map((version)=>`<article><strong>${new Date(version.at).toLocaleString()}</strong><span>${escapeHtml(version.content)}</span></article>`).join("")}</div>`:""}</div>
  <div class="modal-foot"><label class="status-switch"><input id="memoryActive" type="checkbox" ${memory.active?"checked":""}/>当前仍有效</label><button class="btn primary" data-action="save-memory">保存事实</button></div></div></div>`;
}

function projectVersions() {
  try { return JSON.parse(localStorage.getItem(`museforge-versions-${project()?.id}`)) || []; } catch { return []; }
}
function versionsModal() {
  const versions = projectVersions();
  return `<div class="modal-backdrop"><div class="modal"><div class="modal-head"><div><p class="eyebrow">VERSION HISTORY</p><h2>版本历史</h2></div><button class="btn small ghost" data-action="close-modal">✕</button></div>
    <div class="modal-body version-list">${versions.length ? versions.map((v,index) => `<article><div><strong>${escapeHtml(v.label)}</strong><small>${new Date(v.createdAt).toLocaleString()}</small></div><button class="btn small" data-action="restore-version" data-version-index="${index}">恢复此版本</button></article>`).join("") : `<div class="empty">还没有历史版本。每次云端备份或手动保存版本都会记录。</div>`}</div>
    <div class="modal-foot"><button class="btn" data-action="close-modal">关闭</button><button class="btn primary" data-action="create-version">＋ 保存当前版本</button></div></div></div>`;
}

function stylePackById(id) {
  return STYLE_PACKS.find((pack)=>pack.id===id) || STYLE_PACKS[0];
}

function hasGoldfinger(w = {}) {
  return (w.styleModules || []).includes("power-limit") || (w.genre || []).includes("系统流");
}

function wizardValue(w, key) {
  return w[key] === "其他" ? (w[`${key}Other`] || "其他") : (w[key] || "");
}

function buildSoulCards(w) {
  const genres = (w.genre || ["待探索"]).join(" / ");
  const hasPower = hasGoldfinger(w);
  const ability = hasPower ? (wizardValue(w, "abilityType") || "待设计金手指") : "无金手指";
  const origin = wizardValue(w, "origin") || ((w.genre || []).includes("穿越") ? "现代人穿越" : "原住民");
  const travelGroup = wizardValue(w, "travelGroup") || "单人";
  const cost = w.abilityCost || "每次越级使用都会暴露身份，并留下不可逆代价";
  const heroGoal = w.heroGoal || "在失去一切前完成第一次逆转";
  const stakes = w.stakes || "失败将失去最重要的人与返回原世界的机会";
  const platform = w.platform || "番茄 / 七猫";
  const tone = w.tone || stylePackById(w.stylePack).tone;
  const audience = w.audienceGender || "男频 / 女频待定";
  const premisePower = hasPower ? `获得${ability}` : "被卷入无法退让的处境";
  w.logline ||= `${origin}的主角${premisePower}，为了${heroGoal}不断付出代价，最终必须回答自己究竟要成为什么样的人。`;
  w.coreConflict ||= hasPower
    ? `主角想靠${ability}${heroGoal}，反派或旧秩序却试图夺走、复制、封锁或污染这份能力；${stakes}。`
    : `主角想要${heroGoal}，反派或旧秩序却不断逼他牺牲底线、关系或自我；${stakes}。`;
  return {
    positioning: `主要类型：${genres}\n受众性别：${audience}\n目标平台：${platform}\n情绪基调：${tone}\n目标读者：偏好强钩子、持续成长、明确冲突、人物命运拉扯和章末追读的网文读者`,
    theme: `核心命题：${w.coreTheme || "一个人在获得改变命运的机会后，是否还能守住原来的自己？"}\n这个命题不能有标准答案，正派和反派都要能给出不同答案，并且能支撑长篇持续讨论。`,
    emotion: `情感内核：${w.emotionalCore || "不甘、守护、孤独与救赎交织。"}\n读者追下去，不只是为了看主角赢，而是想看他在一次次胜利和失去后，会不会变成自己最害怕的样子。`,
    desire: `主角来源：${origin}；穿越组合：${travelGroup}\n表面目标：${heroGoal}\n深层欲望：${w.deepDesire || "证明自己不是被命运随意摆布的人。"}\n真正需要：${w.trueNeed || "学会在力量、仇恨和关系之间重新选择自己。"}\n最终代价：${w.finalCost || stakes}`,
    finalChoice: `最终选择：${w.finalChoice || "当主角终于拥有改变一切的力量时，他必须决定是继续追逐胜利，还是为某个人、某种信念或某个世界付出不可逆代价。"}\n小说之魂公式：这是一个关于【${origin}】，为了【${heroGoal}】，不断付出【${w.finalCost || stakes}】，最终明白【${w.finalRealization || "真正的强大不是征服世界，而是不被恐惧支配"}】的故事。`,
    hooks: `主角与反派的核心矛盾点：${w.coreConflict}\n身份梗：${origin}，处境、认知或血脉与当前世界格格不入。\n${hasPower ? `能力梗：${ability}既能制造爽点，也会不断索取代价。` : "能力梗：本书不依赖外挂，爽点来自主角选择、谋略、关系与资源反击。"}\n冲突梗：反派不是单纯阻拦主角，而是对同一个核心命题给出相反答案。`,
    ...(hasPower ? {
      power: `1. 金手指是什么：${ability}。\n2. 能力机制：${w.powerMechanism || "必须通过明确条件触发，不能无代价解决所有问题。"}\n3. 能力进化阶梯：${w.powerLadder || "入门应用 → 规则专精 → 领域突破 → 终局权柄。"}\n4. 触发限制 / 代价：${cost}。\n5. 冲突接口：${w.powerConflict || "能力所需资源、身份暴露、使用后果和反派复制/污染能力的企图持续制造新矛盾。"}` 
    } : {})
  };
}

const CREATION_BLOCKS = [
  { id:"bookOutline", numeral:"壹", title:"全书大纲", subtitle:"鸿图初定 · 卷脉初成", points:["全书卷级结构","各卷功能与核心事件","起始状态 → 结束状态","关键爽点与伏笔","全书字数分配","小・中・大爽点节奏","核心伏笔线与回收节点"] },
  { id:"firstArc", numeral:"贰", title:"第一卷大纲", subtitle:"起势之卷 · 章节落地", points:["卷级信息与核心功能","逐章情绪弧线与起承转合","主角・反派・导师・引路人卷内弧线","逐章小爽点・阶段中爽点・卷末大爽点","本卷伏笔埋设与回收","三次核心反转","主线与次线冲突","卷内章节分段","写作重点与下卷钩子"] },
  { id:"worldRules", numeral:"叁", title:"世界法则", subtitle:"世界的第一道边界", points:["一句话大白话","核心机制与继承原则","触发方式与生效反馈","升级资源","分阶段晋升阶梯","极致爽点与反差反馈","触发条件・代价・节奏闸门","后续升级钩子"] },
  { id:"coreCharacters", numeral:"肆", title:"核心角色", subtitle:"先被唤醒的人", points:["基础档案・身份・年龄・阵营","外观印象与视觉锚点","性格关键词・口癖・标志动作","核心能力与致命软肋","高光场景","剧情定位・关键节点・退场方式","核心羁绊・阵营立场・关系钩子","打脸对象与标志台词"] }
];

const CREATION_BLOCK_REQUIREMENTS = {
  bookOutline: `【输出强度】正文不少于3500个中文字。根据目标字数规划6—10卷，不得只给三幕概括。
【全书摘要】先给1出一句50—120字的全书蓝图，写明总卷数、总章数、主角起点、能力终点和终局。
【每卷固定格式】每一卷都必须逐项写：卷名（字数区间、章数）；本卷功能；5—8个有因果的核心事件（用箭头串联）；起始状态→结束状态；至少4个具体爽点；至少3条伏笔并标注“埋/现/误导/回收/收”。事件必须使用本书专属人名、势力名、道具名和机制名，不得写“某势力”“发生危机”。
【总表】末尾必须绑出：逐卷字数和章数表（总和必须接近目标字数）；小爽点、中爽点、大爽点的频率与本书专属例子；至少5条跨卷伏笔线，每条写明“哪卷埋设→哪卷发展→哪卷回收→真相”。`,
  firstArc: `【输出强度】正文不少于3500个中文字。这是“第一卷大纲”，不是第一章的细纲。必须严格承接全书大纲的第一卷，卷名、字数、章数、事件、人名和伏笔不得改动。
【卷首摘要】先输出卷名，再用50—120字写“卷一蓝图”，一句包含章数、字数、核心卖点、卷内最大事件和下卷接口。
【卷级信息】分别写明：字数及占全书比例；章数范围及每章平均字数；本卷在全书中的核心功能。
【情绪弧线】必须逐章列出“第N章 [情绪节点] 具体情绪与事件”，用箭头显示走势；再单独解释承、转、合分别落在哪些章，最后总结“目标情绪”链。
【人物弧线】分别写主角、第一反派、导师/任务源、引路人；主角必须有起点、转折、成长、终点，其他人至少写起点、终点与本卷作用。
【爽点节奏】小爽点必须覆盖本卷每一章，每章1—2个；中爽点按跨章阶段设计至少3个；大爽点安排在卷末高潮，必须详写事件过程、群体反应和格局变化。
【伏笔设计】分为“本卷埋设”和“本卷回收”；每条写明所在章、表面异常、真实用途和将在哪卷回收。若本卷不回收，必须明确说明原因。
【反转设计】至少3次，每次固定使用“铺垫—反转—冲击”三段式，不得只写结论。
【核心冲突】分别写主线冲突和至少3条次线冲突；每条明确冲突双方、各自目标、升级方式和卷末状态。
【章节分段】将全卷划分为3—5个阶段，每阶段标注章数范围，并用5—8个有因果的具体事件箭头串联。
【写作重点】至少5条，每条写清要达成的阅读效果、应该怎么写以及最容易写坏的地方；最后明确卷末停在哪个新钩子上。`,
  worldRules: `【输出强度】正文不少于2400个中文字。不得新增与全书大纲冲突的第二套能力体系。
【一句话大白话】用100—200字让没看过设定的人也能立即明白“主角凭什么爽、怎么升级、为什么不能无敌”。
【机制】分别详写核心继承、至少3种触发方式、至少3种生效反馈、升级资源、暴露/失败后果。
【晋升阶梯】设计4—6个阶段；每阶都必须写“名称、可做什么、不能做什么、升级条件、代表性用法3个、对手如何升级”。
【爽点与控制】给出本书最强的极致爽点场景；至少4种反差反馈；至少4条节奏闸门，明确准备、冷却、代价、稀缺度或暴露限制。
【后续钩子】至少4条，每条说明前期如何埋、中期如何误导、后期揭示什么。`,
  coreCharacters: `【输出强度】这一块只聚焦一位最核心角色，通常是主角；不要分散生成多份完整人物卡。正文不少于1800个中文字，身份、能力、关系和关键节点必须与前三块一致。
【顶部摘要】先输出角色姓名，再用50—120字写清其身份反差、核心能力、第一卷代表性战绩和卷末状态。
【基础档案】写明现实/世界内身份、别名或ID、觉醒后称号、职业/组织归属、年龄和阵营立场。
【外观印象】设计2—3个可在文中反复出现的具体视觉锚点，区分必要的双重外观（如现实/游戏、日常/战斗），并绑出气质标签及其外在表现。
【性格与口癖】设计3—5个彼此有张力的性格关键词，不只列词，还要说明他在压力下会怎么行动；设计1句口头禅和1个能与视觉锚点结合的标志动作。
【能力与软肋】完整继承世界法则中的触发、升级、边界和代价；写清第一卷当前所处等级、能做什么和不能做什么；至少3个会真正导致失败的致命软肋；再写一个与第一卷大爽点完全对应的高光场景。
【剧情作用】先写全书定位与第一卷功能；再引用前两块已确定的3—5个关键章节节点，每个写明角色发生了什么改变；最后说明贯穿方式和结局/退场方式。
【人际关系】至少写明3条核心羁绊，每条必须使用已有具体人名/势力名，写明错位关系、阵营变化和可在后续回收的关系钩子。
【流派钩子】列出3类具体打脸对象，再写1句与能力机制、性格和主要对手都有关的专属台词；禁止使用可以套在任何主角身上的通用热血口号。`
};

function localCreationBlock(id, w) {
  const title = w.title || "这本新书";
  const premise = w.logline || w.coreConflict || "主角必须在失去一切前完成第一次逆转";
  const ability = wizardValue(w,"abilityType") || w.powerMechanism || "核心机制";
  const hero = samplePersonName(title, 2);
  const texts = {
    bookOutline:`【全书卷级结构】\n第1卷｜危机入局：${premise}。功能是立住卖点、完成首次能力兑现，结尾打开更大危机。\n第2卷｜代价显形：主角将${ability}用于更大目标，胜利同时暴露身份和弱点。\n第3卷｜势力博弈：个人矛盾升级为阵营冲突，旧规则开始反扑。\n第4卷｜真相翻转：主角发现能力、对手与自己的过去共用同一个源头。\n第5卷｜终局选择：所有伏笔汇合，主角用不可逆的代价回答核心命题。\n\n【状态与爽点】\n起点：被低估、资源不足、没有退路 → 终点：能主动改写规则，却必须为选择负责。\n小爽点每1—2节一次，中爽点每3—5节一次，每卷末安排一次改变局势的大爽点。\n\n【伏笔与字数】\n总字数按目标约${Math.round(Number(w.targetWords||200000)/10000)}万字分配；前20%完成卖点兑现，中60%持续升级对手与代价，后20%集中回收。核心伏笔依次经过埋设、异常显形、误导、部分揭示和终局回收。`,
    firstArc:`【卷级信息】\n卷一：裂缝初鸣・失去的第一段记忆。约7章1.4万字，承担“立人、立奇观、立危机”的开局功能。\n\n【情绪弧线】\n第1章[起点]压抑与不甘 → 第2章[上扬]发现${ability} → 第3章[蓄势]接下不可能目标 → 第4—5章[引爆]首次成功却引发超预期后果 → 第6章[余震]对手开始围猎 → 第7章[合]主角主动接下更危险的新目标。\n\n【人物弧线】\n主角${hero}从被动忍受的边缘人，走到第一次主动改变规则；反派从忽视主角变为必须消除他；导师验证主角是否有资格进入更深的规则层；引路人只给线索，不代替主角破局。\n\n【爽点与反转】\n小爽点逐章升级：嘲笑者闭嘴、废招变成入场券、强敌成为目标、一个轻巧动作引爆大后果、群体反应放大战绩、围猎失败、新任务弹出。三次反转依次为：最弱手段是唯一入场券；成功比失败更危险；所有人等他逃跑时，他选择下一个更大目标。\n\n【伏笔・冲突・分段】\n本卷埋设主角被选中的原因、首次成功中的异常、一位知道过多的旁观者。主线是${hero}对抗旧规则，次线是反派围猎、导师试炼和引路人试探。章节分为“废招觉醒”“不可能目标”“首次引爆”“卷末新钩子”四阶段。\n\n【写作重点】\n开局要让压抑有具体来源；${ability}首次生效不能靠旁白解释；大后果要用多方反应呈现；始终保留能力边界；第7章必须停在下一个更危险的目标上。`,
    worldRules:`【一句话大白话】\n${title}的核心是：${premise}。所有能力、升级和冲突都从这条规则生长，不另起一套互不相干的系统。\n\n【运转机制与晋升阶梯】\n核心继承：${ability}必须保持统一逻辑。\n触发方式：主角主动选择目标并满足明确条件；越阶使用必须先布置时机。\n生效反馈：成功当场带来可见收益，同时改变敌人行动并累积风险。\n升级资源：只有完成稀缺、困难且会改变局势的目标才能获得。\n晋升阶梯：Lv1解决个人生存 → Lv2影响关系与资源 → Lv3干预势力规则 → Lv4触碰世界底层法则。\n\n【爽点与节奏闸门】\n极致爽点来自“最弱的人用最不起眼的手段，造成最大的结果”。每次使用都必须遵守限制：不能直接解决所有对手；目标越大准备越长；成功后会暴露更多信息；越阶使用产生不可逆代价。\n\n【后续钩子】\n新阶段把对手从个人升级为组织；能力源头藏着前代失败者；升级资源的真实用途与表面说法不同；主角的成长速度本身就是一条证据。`,
    coreCharacters:`【基础档案】\n姓名：${hero}｜身份：被现有秩序低估的边缘人｜年龄：24岁｜阵营：暂无归属，只对自己的目标负责。\n\n【外观印象】\n视觉锚点：衣着普通，但右手留着一道与核心机制有关的旧痕。气质标签：安静、低存在感，看到机会时眼神会突然变亮。\n\n【性格与口癖】\n性格关键词：懒散・偏执・记仇・不愿服输。口头禅：“你们守的是规矩，我找的是缝。”标志动作：得手后不回头看结果，只用拇指擦过右手旧痕。\n\n【能力与软肋】\n核心能力：${ability}，用改变局面代替单纯战力碾压。致命软肋：正面对抗能力弱；对特殊目标容易执着；长期单干导致不信任同伴。高光场景：所有人准备正面决战时，他用一个微小动作让整个战场失去意义。\n\n【剧情作用】\n定位：全书主角，完成从规则边缘人到规则改写者的蜕变。关键节点：能力觉醒、首次改变大局、发现能力真相、为终局付出代价。贯穿全书，结局保留一条与旧世界相连的开放暗线。\n\n【人际关系与流派钩子】\n核心羁绊：与引路人是“被选中者与幕后棋手”；与合作者互相试探；与反派围绕同一套规则给出相反答案。打脸对象：嘲笑他的旁观者、依赖旧规则的强者、认为他只是意外的执法者。标志台词：“我不需要比你强，只要你最依赖的东西不再属于你。”`
  };
  return texts[id] || "";
}

function creationBlockPrompt(block, w) {
  const previous = CREATION_BLOCKS.filter(item=>item.id!==block.id&&w.creationBlocks?.[item.id]).map(item=>`${item.title}：\n${w.creationBlocks[item.id]}`).join("\n\n");
  return `你是资深中文网文总策划，正在交付可直接进入连载的详细创世档案。请为《${w.title || "未命名新书"}》生成“${block.title}”。\n题材：${(w.genre||[]).join("、")}；平台：${w.platform||"未指定"}；情绪：${w.tone||"未指定"}；核心故事：${w.logline||w.coreConflict||"未填写"}；目标字数：${w.targetWords||200000}。${previous?`\n已完成的前置创世档案（必须继承专有名词、事件顺序、能力边界和伏笔）：\n${previous}`:""}\n\n${CREATION_BLOCK_REQUIREMENTS[block.id]}\n\n统一要求：\n1. 必须用【小节名】分节，并完整覆盖：${block.points.join("；")}。\n2. 先在内部检查人名、势力、能力层级、章数、字数和伏笔回收是否一致，但不输出检查过程。\n3. 禁止用“发生一场危机”“遇到更强敌人”等空洞句子；每个要点都要写清谁、为了什么、做了什么、导致什么后果。\n4. 不要照抄任何参考作品，不要 Markdown 代码块，不要解释思考过程。只输出该板块正文。`;
}

async function generateCreationBlockText(block,w,extra="") {
  const prompt=creationBlockPrompt(block,w)+extra;
  let text=await aiQuickText(prompt,.78,8000);
  const minimum={bookOutline:3500,firstArc:3500,worldRules:2400,coreCharacters:1800}[block.id]||2000;
  if(text && text.length<minimum) {
    text=await aiQuickText(`${prompt}\n\n上一版只有${text.length}字，达不到交付标准。请保留其中已经具体的设定，重写为完整版，补齐所有数量与结构要求。\n上一版：\n${text}`,.72,10000);
  }
  return text;
}

async function generateCreationJourney() {
  syncWizardInputs();
  const w = state.wizard;
  w.creationBlocks = {};
  w.creationCollapsed = {};
  w.creationProgress = { active:0, completed:[], running:true };
  state.busy = true; render();
  try {
    for (let index=0; index<CREATION_BLOCKS.length; index+=1) {
      const block = CREATION_BLOCKS[index];
      w.creationProgress.active = index; render();
      const started = Date.now();
      let text = "";
      try { text = await generateCreationBlockText(block,w); } catch {}
      const elapsed = Date.now()-started;
      if (elapsed < 1500) await new Promise(resolve=>setTimeout(resolve,1500-elapsed));
      w.creationBlocks[block.id] = text || localCreationBlock(block.id,w);
      w.creationProgress.completed.push(block.id);
      render();
    }
    w.worldRules = w.creationBlocks.worldRules;
    w.creationProgress.running = false;
    toast(state.aiStatus.connected ? "四块创世档案已生成" : "已生成四块本地创世示例");
  } finally { state.busy=false; if(w.creationProgress) w.creationProgress.running=false; render(); }
}

async function regenerateCreationBlock(id) {
  const block = CREATION_BLOCKS.find(item=>item.id===id);
  if (!block || state.busy) return;
  const w = state.wizard;
  state.busy = true;
  w.creationProgress = { active:CREATION_BLOCKS.indexOf(block), completed:CREATION_BLOCKS.filter(item=>item.id!==id&&w.creationBlocks?.[item.id]).map(item=>item.id), running:true };
  render();
  const started=Date.now();
  let text="";
  try { text=await generateCreationBlockText(block,w,"\n这是单块重生，必须换用更具体的事件、反转和限制，不得简化。"); } catch {}
  const elapsed=Date.now()-started;
  if(elapsed<1500) await new Promise(resolve=>setTimeout(resolve,1500-elapsed));
  w.creationBlocks[id]=text||localCreationBlock(id,{...w,title:`${w.title||"新书"}${Date.now()%7}`});
  if(id==="worldRules") w.worldRules=w.creationBlocks[id];
  w.creationProgress={active:-1,completed:CREATION_BLOCKS.filter(item=>w.creationBlocks?.[item.id]).map(item=>item.id),running:false};
  state.busy=false; render(); toast(`已重新生成${block.title}`);
}

function creationJourneyView(w) {
  const progress = w.creationProgress || {active:-1,completed:[],running:false};
  const blocks = w.creationBlocks || {};
  const completed = progress.completed || [];
  if (!Object.keys(blocks).length && !progress.running) return `<section class="creation-awaken"><span>🌱</span><div><p class="eyebrow">AWAKEN THE WORLD</p><h3>唤醒世界之灵</h3><p>按全书大纲、第一卷大纲、世界法则、核心角色的顺序，逐块建立可编辑的创世档案。</p></div><button class="btn primary" data-action="generate-creation-journey">✦ 开启创世之旅</button></section>`;
  return `<div class="creation-journey">
    <div class="creation-progress-head"><div><span class="creation-orbit"><i></i><i></i><i></i></span><div><p class="eyebrow">4YI CREATION</p><h3>${progress.running?"创世推演中":"创世完成"}</h3></div></div><strong>${Math.round(completed.length/4*100)}%</strong></div>
    <div class="creation-progress-track"><i style="width:${completed.length/4*100}%"></i></div>
    <div class="creation-block-list">${CREATION_BLOCKS.map((block,index)=>{
      const done=completed.includes(block.id), active=progress.running&&progress.active===index, locked=progress.running&&!done&&!active;
      const collapsed=done&&Boolean(w.creationCollapsed?.[block.id]);
      return `<article class="creation-block ${active?"active":done?"done":"locked"} ${collapsed?"collapsed":""}"><div class="creation-block-index"><b>${done?"✓":block.numeral}</b><i></i></div><div class="creation-block-body"><header><div><small>${block.subtitle}</small><h3>${block.title}</h3><p>${block.points.join(" · ")}</p></div><div class="creation-block-status"><span>${done?"已完成":active?"生成中…":"等待上一块"}</span>${done?`<button data-action="toggle-creation-block" data-creation-id="${block.id}" aria-expanded="${!collapsed}">${collapsed?"展开 ⌄":"收起 ⌃"}</button>`:""}</div></header>${active?`<div class="creation-thinking"><div><i></i><i></i><i></i><strong>正在构建${block.title}</strong></div><p>${block.points[(Date.now()/900|0)%block.points.length]}</p><em></em><em></em><em></em></div>`:done&&!collapsed?`<textarea data-creation-block="${block.id}">${escapeHtml(blocks[block.id]||"")}</textarea><footer><small>可直接编辑，后续 AI 将读取修改后的内容</small><button class="btn small" data-action="regenerate-creation-block" data-creation-id="${block.id}">↻ 重新生成</button></footer>`:""}</div></article>`;
    }).join("")}</div>
  </div>`;
}

function projectWizard() {
  const w = state.wizard;
  w.stylePack ||= "longform";
  w.styleModules ||= ["human-voice","filter-words","dialogue-progress","scene-four-step","tension","chapter-hook","task-audit","logic-audit"];
  const steps = [["定风","Style"],["定魂","Soul"],["创世","World"],["布局","Structure"],["开书","Create"]];
  let body = "";
  if (state.wizardStep === 1) {
    const genres = ["穿越","重生","修仙","玄幻","悬疑","都市","末日","系统流","经营","无限流","言情","搞笑"];
    const activePack = stylePackById(w.stylePack);
    body = `<div class="style-studio">
      <section class="style-basics">
        <div class="field"><label>作品名称 *</label><input id="wTitle" value="${escapeHtml(w.title || "")}" placeholder="例如：我在末日经营一家当铺" /></div>
        <div class="field"><label>目标平台</label><select id="wPlatform">${["番茄 / 七猫","起点男频","晋江女频","短剧 / 漫剧","自媒体连载","暂不确定"].map(v=>`<option ${w.platform===v?"selected":""}>${v}</option>`).join("")}</select></div>
        <div class="field"><label>情绪基调</label><select id="wTone">${["热血爽感","轻松搞笑","悬疑压迫","温暖治愈","暗黑史诗","甜宠拉扯"].map(v=>`<option ${w.tone===v?"selected":""}>${v}</option>`).join("")}</select></div>
        <div class="field genre-field"><label>题材标签（1～4个）</label><div class="choice-grid compact">${genres.map(g=>`<button class="choice ${(w.genre||[]).includes(g)?"selected":""}" data-genre="${g}">${g}</button>`).join("")}${(w.genre||[]).filter(g=>!genres.includes(g)).map(g=>`<button class="choice selected" data-genre="${escapeHtml(g)}">${escapeHtml(g)}</button>`).join("")}</div></div>
      </section>
      <section class="style-status-strip">
        <div><i>✓</i><span>已启用风格包<strong>${escapeHtml(activePack.name)}</strong></span></div>
        <label><i>✓</i><span>目标字数<select id="wWords">${[100000,200000,500000,1000000,2000000,3000000].map(v=>`<option value="${v}" ${Number(w.targetWords||200000)===v?"selected":""}>${v/10000} 万字</option>`).join("")}</select></span></label>
        <label><i>✓</i><span>每集字数<select id="wChapterWords">${[1000,1500,2500,3000,3500,5000].map(v=>`<option value="${v}" ${Number(w.chapterWords||2500)===v?"selected":""}>${v} 字</option>`).join("")}</select></span></label>
      </section>
      <section class="style-workbench">
        <aside class="style-pack-sidebar"><div><p class="eyebrow">STYLE PACK</p><h3>作品风格</h3></div>${STYLE_PACKS.map((pack)=>`<button class="${w.stylePack===pack.id?"active":""}" data-style-pack="${pack.id}"><strong>${pack.name}</strong><span>${pack.desc}</span></button>`).join("")}<div class="pack-tip"><strong>没有满意的？</strong><p>后续可加入“拆书生成风格包”，本轮先用预设打底。</p></div></aside>
        <div class="style-module-panel">
          <div class="style-module-head"><div><p class="eyebrow">RULE MODULES</p><h3>${escapeHtml(activePack.name)}</h3><p>${escapeHtml(activePack.desc)}。选择的模块会进入AI正文提示和质量检查。</p></div><span>${w.styleModules.length} 个模块已启用</span></div>
          <div class="style-module-groups">${STYLE_MODULE_GROUPS.map((group)=>`<section><div class="module-group-head"><div><strong>${group.name}</strong><span>${group.desc}</span></div><small>${group.modules.filter(([id])=>w.styleModules.includes(id)).length}/${group.modules.length}</small></div><div class="module-card-grid">${group.modules.map(([id,name])=>`<button class="${w.styleModules.includes(id)?"enabled":""}" data-style-module="${id}"><i>${w.styleModules.includes(id)?"✓":"+"}</i><span><strong>${name}</strong><small>${w.styleModules.includes(id)?"强制参与AI写作":"点击启用"}</small></span></button>`).join("")}</div></section>`).join("")}</div>
        </div>
      </section>
    </div>`;
  } else if (state.wizardStep === 2) {
    const hasPower = hasGoldfinger(w);
    w.soulCards = { ...buildSoulCards({ ...w, soulCards: null }), ...(w.soulCards || {}) };
    if (!hasPower) delete w.soulCards.power;
    const optionSelect = (id, values, selected) => `<select id="${id}">${values.map(v=>`<option ${selected===v?"selected":""}>${v}</option>`).join("")}</select>`;
    const soulCardDefs = [
      ["positioning","题材定位","blue"],
      ["theme","核心命题","gold"],
      ["emotion","情感内核","amber"],
      ["desire","主角根本欲望","red"],
      ["finalChoice","最终选择","blue"],
      ["hooks","核心钩子 · 三梗","amber"],
      ...(hasPower ? [["power","金手指核心设定","gold"]] : [])
    ];
    body = `<div class="soul-studio">
      <section class="soul-controls">
        <div class="field"><label>主角来源</label>${optionSelect("wOrigin", ["原住民","现代人穿越","古代人穿越","重生者","觉醒者","失忆者","其他"], w.origin)}${w.origin==="其他" ? `<input id="wOriginOther" value="${escapeHtml(w.originOther || "")}" placeholder="自己输入主角来源" />` : ""}</div>
        <div class="field"><label>穿越组合</label>${optionSelect("wTravelGroup", ["单人","一家人","朋友组队","人与宠物","双人宿敌","不涉及穿越","其他"], w.travelGroup)}${w.travelGroup==="其他" ? `<input id="wTravelGroupOther" value="${escapeHtml(w.travelGroupOther || "")}" placeholder="自己输入穿越组合" />` : ""}</div>
        ${hasPower ? `<div class="field"><label>核心外挂 / 能力</label>${optionSelect("wAbilityType", ["系统成长","特殊道具","血脉觉醒","职业天赋","知识降维","空间 / 随身世界","其他"], w.abilityType)}${w.abilityType==="其他" ? `<input id="wAbilityTypeOther" value="${escapeHtml(w.abilityTypeOther || "")}" placeholder="自己输入金手指类型" />` : ""}</div>` : `<div class="notice">第一步未启用“金手指与世界限制”，本书暂按无金手指结构设计；定魂页不会显示金手指核心设定。</div>`}
        <button class="btn primary" data-action="regenerate-soul-cards">✦ 按选择重新生成核心卡</button>
      </section>
      <div class="soul-card-grid">${soulCardDefs.map(([id,title,color])=>`<article class="soul-card ${color}"><div class="soul-card-head"><h3>${title}</h3><button data-action="rewrite-soul-card" data-soul-card-id="${id}">AI 重写</button></div><textarea data-soul-card="${id}">${escapeHtml(w.soulCards[id] || "")}</textarea><div class="soul-card-foot"><span>可直接修改</span><button data-action="rewrite-soul-card" data-soul-card-id="${id}">更锋利</button><button data-action="rewrite-soul-card" data-soul-card-id="${id}">加限制与反转</button></div></article>`).join("")}</div>
      <div class="soul-tags"><strong>风格标签</strong>${[...(w.genre||[]),w.tone,stylePackById(w.stylePack).name].filter(Boolean).map((tag)=>`<span>${escapeHtml(tag)}</span>`).join("")}</div>
    </div>`;
  } else if (state.wizardStep === 3) {
    body = `<div class="creation-intro"><div><p class="eyebrow">03 · CREATION</p><h3>创世：从全书蓝图到第一位核心角色</h3><p>四块内容严格依次生成，后一块会读取前一块的结果，确保大纲、法则和人物彼此一致。</p></div><span>全书大纲 → 第一卷大纲 → 世界法则 → 核心角色</span></div>${creationJourneyView(w)}`;
  } else if (state.wizardStep === 4) {
    body = `<div class="wizard-intro"><p class="eyebrow">04 · STRUCTURE</p><h3>决定故事骨架和作者参与程度</h3><p>先选择宏观结构，生成后仍可自由增加章、集和场景。</p></div>
      <div class="form-grid">
        <div class="field"><label>结构模板</label><select id="wStructure">${["三幕式","英雄之旅","网文升级流","悬疑解谜链","经营扩张流","感情关系弧","自由结构"].map(v=>`<option ${w.structure===v?"selected":""}>${v}</option>`).join("")}</select></div>
        <div class="field"><label>叙事视角</label><select id="wPov">${["第三人称","第一人称","多视角"].map(v=>`<option ${w.pov===v?"selected":""}>${v}</option>`).join("")}</select></div>
        <div class="field"><label>规划章数</label><select id="wActCount">${[3,4,5,6,8].map(v=>`<option value="${v}" ${Number(w.actCount||3)===v?"selected":""}>${v} 章</option>`).join("")}</select></div>
        <div class="field"><label>每章首批规划集数</label><select id="wChaptersPerAct">${[3,5,10,20,30].map(v=>`<option value="${v}" ${Number(w.chaptersPerAct||5)===v?"selected":""}>${v} 集</option>`).join("")}</select></div>
        <div class="field full"><label>结局方向</label><input id="wEnding" value="${escapeHtml(w.ending || "")}" placeholder="主角最终得到什么、失去什么；可以暂时留白" /></div>
        <div class="field full"><label>创作参与模式</label><div class="wizard-mode-grid">
          ${[["guided","作者主导","AI生成可编辑骨架，你逐步确认后再写"],["auto","AI辅助开局","AI先生成完整初版，你随时介入修改"]].map(([id,title,desc])=>`<button class="wizard-mode ${w.creationMode===id||(!w.creationMode&&id==="guided")?"selected":""}" data-wizard-mode="${id}"><strong>${title}</strong><span>${desc}</span></button>`).join("")}
        </div></div>
      </div>`;
  } else {
    body = `<div class="wizard-intro final"><p class="eyebrow">05 · CREATE</p><h3>创世配置已经准备好</h3><p>创建后，AI会先生成可编辑章节大纲和分集标题；定妆资产会在正文完成后按本集内容提取。</p></div>
      <div class="creation-review">
        <section><span>作品</span><strong>${escapeHtml(w.title || "未命名")}</strong><p>${escapeHtml((w.genre || []).join(" × ") || "待探索题材")} · ${escapeHtml(w.platform || "暂不确定")}</p></section>
        <section><span>故事核心</span><strong>${escapeHtml(w.logline || w.coreTheme || "等待AI补全")}</strong><p>${escapeHtml(wizardValue(w, "origin") || "原住民")} · ${hasGoldfinger(w) ? `${escapeHtml(wizardValue(w, "abilityType") || "金手指待设计")} · 代价：${escapeHtml(w.abilityCost || "待设计")}` : "无金手指结构"}</p></section>
        <section><span>世界</span><strong>${escapeHtml(w.era || "架空古代")}</strong><p>${escapeHtml(w.worldRules || "创建后由AI生成世界规则")}</p></section>
        <section><span>结构</span><strong>${escapeHtml(w.structure || "三幕式")} · ${w.actCount || 3} 章</strong><p>每章首批 ${w.chaptersPerAct || 5} 集 · 每集 ${Number(w.chapterWords || 2500).toLocaleString()} 字 · ${escapeHtml(w.creationMode==="auto"?"AI辅助开局":"作者主导")}</p></section>
      </div>`;
  }
  return `<div class="modal-backdrop"><div class="modal creation-wizard-modal">
    <div class="modal-head"><div><p class="eyebrow">STORY GENESIS</p><h2>五步建立一本能长期写下去的小说</h2></div><button class="btn small ghost" data-action="close-modal">✕</button></div>
    <div class="modal-body"><nav class="genesis-stepper">${steps.map(([cn,en],index)=>`<button class="${index+1===state.wizardStep?"active":index+1<state.wizardStep?"done":""}" data-wizard-jump="${index+1}" ${index+1>state.wizardStep?"disabled":""}><i>${index+1<state.wizardStep?"✓":index+1}</i><span>${cn}<small>${en}</small></span></button>`).join("")}</nav>${body}</div>
    <div class="modal-foot"><button class="btn" data-action="wizard-back">${state.wizardStep===1?"← 返回作品立项":"上一步"}</button><div class="wizard-progress">${state.wizardStep} / 5</div><button class="btn primary" data-action="${state.wizardStep===5?"create-project":"wizard-next"}">${state.wizardStep===5?"创建项目并生成大纲 →":"保存并继续 →"}</button></div>
  </div></div>`;
}

function assetModal() {
  return `<div class="modal-backdrop"><div class="modal" style="max-width:600px">
    <div class="modal-head"><div><p class="eyebrow">NEW ASSET</p><h2>新增视觉资产</h2></div><button class="btn small ghost" data-action="close-modal">✕</button></div>
    <div class="modal-body"><div class="form-grid">
      <div class="field"><label>资产类型</label><select id="assetType"><option value="character">人物</option><option value="scene">场景</option><option value="prop">道具</option></select></div>
      <div class="field"><label>名称</label><input id="assetName" placeholder="例如：沈砚" /></div>
      <div class="field full"><label>定妆描述 / 生成提示词</label><textarea id="assetDesc" placeholder="年龄、外貌、服装、材质、色彩、标志性细节……"></textarea></div>
      <div class="field full"><label>版本名称</label><input id="assetVersion" value="基础定妆 v1" /></div>
    </div></div>
    <div class="modal-foot"><span></span><button class="btn primary" data-action="create-asset">保存到资产库</button></div>
  </div></div>`;
}

function buildAssetPrompts(asset, p) {
  const typeRequirement = asset.type === "character"
    ? "角色设定三视图，正面、左侧面、背面，同一人物、同一服装、同一比例，纯色背景，包含头部细节与全身造型"
    : asset.type === "scene"
      ? "场景概念设计，广角建立镜头、主要活动区、关键陈设细节，空间结构明确，可供多镜头重复调用"
      : "道具设定图，正视图、侧视图、材质细节特写，尺寸关系明确，可供角色持握使用";
  return {
    positivePrompt: `[资产ID：${asset.id}] + [${typeRequirement}] + [资产名称：${asset.name}] + [固定描述：${asset.desc}] + [项目视觉风格：${p.visualStyle}] + [这是后续所有故事板和分镜出图的唯一视觉基准] + [必须锁定脸型、年龄感、发型、身形比例、服装层次、道具材质、场景结构、色彩脚本和轮廓特征] + [干净设定图排版，主体完整，细节清晰，可被二次转绘为不同故事板风格]`,
    negativePrompt: "不同人物、五官漂移、服装变化、比例错误、多余肢体、手指畸形、道具变形、场景结构变化、随机新增角色、文字水印、模糊、低清晰度、裁切主体、风格混乱"
  };
}

function assetPromptModal() {
  const p = project();
  const asset = p?.assets.find((item) => item.id === state.assetPromptId);
  if (!asset) return "";
  const prompts = asset.positivePrompt ? { positivePrompt: asset.positivePrompt, negativePrompt: asset.negativePrompt || "" } : buildAssetPrompts(asset, p);
  const viewLabels = asset.type === "character" ? ["正面", "侧面", "背面"] : asset.type === "scene" ? ["全景", "结构", "细节"] : ["正视", "侧视", "材质"];
  return `<div class="modal-backdrop"><div class="modal asset-prompt-modal">
    <div class="modal-head"><div><p class="eyebrow">AI ASSET PROMPT</p><h2>${escapeHtml(asset.name)} · ${asset.type === "character" ? "人物定妆" : asset.type === "scene" ? "场景构建" : "道具设定"}</h2></div><button class="btn small ghost" data-action="close-modal">✕</button></div>
    <div class="modal-body">
      <div class="asset-prompt-layout">
        <div class="triptych-placeholder">${asset.imageUrl ? `<img src="${escapeHtml(asset.imageUrl)}" alt="${escapeHtml(asset.name)}定妆图" />` : viewLabels.map((label) => `<div><span>${escapeHtml(asset.name.slice(0,1))}</span><small>${label}</small></div>`).join("")}<p>${asset.imageUrl ? "真实生成结果" : state.aiStatus.imageConnected ? "点击生成后在这里显示真实结果" : "需要在服务端配置图像生成API"}</p></div>
        <div>
          <div class="field"><label>AI 正向提示词</label><textarea id="assetPositivePrompt" class="prompt-textarea">${escapeHtml(prompts.positivePrompt)}</textarea></div>
          <div class="field" style="margin-top:13px"><label>负面提示词</label><textarea id="assetNegativePrompt" class="prompt-textarea short">${escapeHtml(prompts.negativePrompt)}</textarea></div>
          <div class="form-grid asset-model-fields">
            <div class="field"><label>固定种子</label><input id="assetSeed" type="number" value="${asset.seed || 1}" /></div>
            <div class="field"><label>参考图权重 0-1</label><input id="assetReferenceWeight" type="number" min="0" max="1" step="0.1" value="${asset.referenceWeight ?? 0.8}" /></div>
            <div class="field full"><label>参考图片URL（每行一张）</label><textarea id="assetReferenceImages" class="prompt-textarea short">${escapeHtml(listValue(asset.referenceImages))}</textarea></div>
            <div class="field"><label>服装版本</label><textarea id="assetOutfits" class="prompt-textarea short">${escapeHtml(listValue(asset.outfits))}</textarea></div>
            <div class="field"><label>表情版本</label><textarea id="assetExpressions" class="prompt-textarea short">${escapeHtml(listValue(asset.expressions))}</textarea></div>
          </div>
          <div class="generation-context"><span>资产ID：${escapeHtml(asset.id.slice(0,8))}</span><span>版本：${escapeHtml(asset.version || "v1")}</span><span>画风：${escapeHtml(p.visualStyle)}</span></div>
        </div>
      </div>
    </div>
    <div class="modal-foot"><button class="btn" data-action="save-asset-prompt">保存提示词</button><button class="btn primary" data-action="generate-asset-image">${state.busy ? "生成中…" : state.aiStatus.imageConnected ? "生成真实图片" : "图像API待配置"}</button></div>
  </div></div>`;
}

function aiDraftModal() {
  const p = project();
  const c = chapter();
  const directions = [
    ["强冲突推进", `让${p.assets.find(a=>a.type==="character")?.name || "主角"}立刻遭遇更大的危机，用行动推进主线。`],
    ["悬念揭秘", "围绕本章标题揭开一条关键线索，同时制造一个更大的疑问。"],
    ["人物关系", "用对话、试探与误会推进人物关系，结尾用身份或立场反转收束。"]
  ];
  return `<div class="modal-backdrop"><div class="modal ai-config-modal">
    <div class="modal-head"><div><p class="eyebrow">AI GHOSTWRITER</p><h2>${state.view === "finalize" ? "生成定稿" : "AI 生成初稿"}「${escapeHtml(c.title)}」</h2></div><button class="btn small ghost" data-action="close-modal">✕</button></div>
    <div class="modal-body">
      <div class="config-section"><label>本章目标字数 <small>允许 ±10%</small></label><div class="segmented-options">${[1000,1500,2000,3000,5000].map(words => `<button class="choice ${state.aiDraftConfig.words===words?"selected":""}" data-draft-words="${words}">${words.toLocaleString()} 字</button>`).join("")}</div><p class="word-range-hint">实际成稿区间：${Math.round(state.aiDraftConfig.words*.9).toLocaleString()}—${Math.round(state.aiDraftConfig.words*1.1).toLocaleString()} 字</p></div>
      <div class="config-section"><label>选择本章剧情方向</label><div class="direction-grid">${directions.map(([name,desc],i) => `<button class="direction-card ${state.aiDraftConfig.direction===name?"selected":""}" data-draft-direction="${name}"><span>方向 ${i+1}</span><strong>${name}</strong><p>${desc}</p></button>`).join("")}</div></div>
      <div class="field"><label>额外要求（选填）</label><textarea id="draftNote" placeholder="例如：本章不要出现新角色，结尾必须停在主角发现密室……">${escapeHtml(state.aiDraftConfig.note || "")}</textarea></div>
      <div class="generation-context">${state.view === "finalize" ? `<span>✓ 已读取本章细纲</span><span>✓ 已读取4个场景规划</span>` : `<span>✓ 已读取创世四块内容</span>`}<span>✓ 已读取前文摘要</span></div>
    </div>
    <div class="modal-foot"><button class="btn" data-action="close-modal">取消</button><button class="btn primary" data-action="start-ai-draft">${state.view === "finalize" ? "生成定稿" : "生成初稿"} · ${Math.round(state.aiDraftConfig.words*.9).toLocaleString()}—${Math.round(state.aiDraftConfig.words*1.1).toLocaleString()} 字 →</button></div>
  </div></div>`;
}

function assetReviewModal() {
  const c = chapter();
  return `<div class="modal-backdrop"><div class="modal asset-review-modal">
    <div class="modal-head"><div><p class="eyebrow">CHAPTER ASSET EXTRACTION</p><h2>本章已保存，发现 ${state.pendingAssets.length} 项新增视觉资产</h2></div><button class="btn small ghost" data-action="close-modal">✕</button></div>
    <div class="modal-body">
      <div class="success-banner"><span>✓</span><div><strong>${escapeHtml(c.title)} 已标记完成</strong><p>系统已将正文与大纲资产库进行对比，只展示此前没有定妆的内容。</p></div></div>
      <div class="notice asset-rule-note"><strong>提取标准：</strong>识别正文中新出现且资产库中不存在的人物、可复用场景，以及有专属名称、参与动作或影响剧情的关键道具。普通桌椅、一次性背景物默认不提取；“倚天剑、屠龙刀”这类命名武器会作为道具提取。</div>
      <div class="extracted-list">${state.pendingAssets.length ? state.pendingAssets.map((asset,index) => `
        <label class="extracted-item">
          <input type="checkbox" data-pending-asset="${index}" checked />
          <span class="asset-type-icon">${asset.type === "character" ? "人" : asset.type === "scene" ? "景" : "物"}</span>
          <div><strong>${escapeHtml(asset.name)}</strong><span>${asset.type === "character" ? "新增人物" : asset.type === "scene" ? "新增场景" : "新增道具"}</span><p>${escapeHtml(asset.desc)}</p></div>
        </label>`).join("") : `<div class="empty">没有自动发现新资产；你也可以在下方手动补充。</div>`}</div>
      <div class="manual-asset-row"><select id="manualAssetType"><option value="prop">道具</option><option value="character">人物</option><option value="scene">场景</option></select><input id="manualAssetName" placeholder="手动补充名称，例如：倚天剑" /><button class="btn" data-action="add-pending-asset">＋ 加入待确认列表</button></div>
      ${state.pendingAssets.length ? `<div class="asset-output-options"><div class="field"><label>人物资产生成规格</label><select id="assetOutputMode"><option>角色三视图（正面 / 侧面 / 背面）</option><option>人物定妆概念图</option><option>表情与动作设定表</option></select></div><div class="notice">生成时会沿用项目画风，并把定妆提示词、负面提示词和版本号一起保存到资产库。</div></div>` : ""}
    </div>
    <div class="modal-foot"><button class="btn" data-action="close-modal">稍后处理</button><button class="btn primary" data-action="save-extracted-assets">${state.pendingAssets.length ? "加入资产库并进入故事板" : "进入故事板"} →</button></div>
  </div></div>`;
}

function outlineExpandModal() {
  const p = project();
  const total = state.outlineExpand.actCount * state.outlineExpand.chaptersPerAct;
  return `<div class="modal-backdrop"><div class="modal outline-expand-modal">
    <div class="modal-head"><div><p class="eyebrow">AI OUTLINE EXPANSION</p><h2>扩充「${escapeHtml(p.title)}」的故事结构</h2></div><button class="btn small ghost" data-action="close-modal">✕</button></div>
    <div class="modal-body">
      <div class="config-section"><label>整部作品需要几章？</label><div class="segmented-options act-count-options">${[3,4,5,6,8].map(count => `<button class="choice ${state.outlineExpand.actCount===count?"selected":""}" data-expand-acts="${count}">${count} 章</button>`).join("")}</div></div>
      <div class="config-section"><label>每一章规划多少集？</label><div class="segmented-options chapter-count-options">${[3,5,10,20,30].map(count => `<button class="choice ${state.outlineExpand.chaptersPerAct===count?"selected":""}" data-expand-chapters="${count}">每章 ${count} 集</button>`).join("")}</div></div>
      <div class="scale-preview"><span>AI 将生成</span><strong>${state.outlineExpand.actCount} 章 · ${total} 集标题</strong><p>会保留已有正文内容，扩充缺少的章与集，并根据前后剧情生成连续标题。</p></div>
      <div class="notice">章节数量只是规划，可以生成后继续手动增加、删除或改名；确认锁定前都不会进入正式写作。</div>
    </div>
    <div class="modal-foot"><button class="btn" data-action="close-modal">取消</button><button class="btn primary" data-action="apply-outline-expand">AI 生成 ${total} 集结构 →</button></div>
  </div></div>`;
}

function render() {
  if (state.view === "writing") state.view = "drafting";
  const views = {
    projects: projectsView,
    outline: outlineView,
    drafting: () => writingView("drafting"),
    encyclopedia: encyclopediaView,
    bible: bibleView,
    style: styleView,
    inspiration: inspirationView,
    finalize: () => writingView("finalize"),
    quick: quickView,
    assets: assetsView,
    storyboard: storyboardView
  };
  $("#app").innerHTML = `<div class="shell">${nav()}<main class="main">${topbar()}${views[state.view]()}</main></div>${modal()}`;
  bind();
}

function bind() {
  $$("[data-book-idea]").forEach(el => el.onclick = () => { syncBookIdeaInputs(); state.bookIdea.selected = Number(el.dataset.bookIdea); render(); });
  $$("[data-idea-multi]").forEach(el => el.onchange = () => {
    const field = el.dataset.ideaMulti;
    state.bookIdea[field + "Values"] = $$('[data-idea-multi="' + field + '"]:checked').map(item=>item.value);
    syncBookIdeaInputs();
    const summary = $('[data-idea-summary="' + field + '"]');
    if (summary) summary.textContent = state.bookIdea[field] || ("请选择" + (field==="genre"?"题材":"风格"));
    state.bookIdea.options = []; state.bookIdea.selected = -1;
  });
  $$("[data-idea-other]").forEach(el => el.oninput = () => {
    const field = el.dataset.ideaOther;
    state.bookIdea[field + "Other"] = el.value.trim();
    syncBookIdeaInputs();
    const summary = $('[data-idea-summary="' + field + '"]');
    if (summary) summary.textContent = state.bookIdea[field] || ("请选择" + (field==="genre"?"题材":"风格"));
    state.bookIdea.options = []; state.bookIdea.selected = -1;
  });
  const premiseInput = $("#ideaPremise");
  if (premiseInput) premiseInput.oninput = () => {
    state.bookIdea.premise = premiseInput.value;
    state.bookIdea.premiseDemo = false;
    state.bookIdea.options = []; state.bookIdea.selected = -1;
  };
  const setupTitle = $("#setupTitle");
  if (setupTitle) setupTitle.oninput = () => {
    state.wizard.title = setupTitle.value;
    const coverTitle = $(".novel-cover-copy strong");
    if (coverTitle) coverTitle.textContent = setupTitle.value.trim() || "未命名新书";
  };
  const setupSynopsis = $("#setupSynopsis");
  if (setupSynopsis) setupSynopsis.oninput = () => {
    state.wizard.logline = setupSynopsis.value;
    if ($("#setupSynopsisCount")) $("#setupSynopsisCount").textContent = `${setupSynopsis.value.length} / 500`;
  };
  $("#setupCategory")?.addEventListener("change", syncBookSetupInputs);
  $("#bookCoverUpload")?.addEventListener("change", (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    if (file.size > 4 * 1024 * 1024) return toast("封面图请控制在 4MB 以内");
    const reader = new FileReader();
    reader.onload = () => { state.wizard.coverImage = String(reader.result || ""); render(); toast("封面已上传"); };
    reader.readAsDataURL(file);
  });
  $$('[data-creation-block]').forEach(el=>el.oninput=()=>{
    state.wizard.creationBlocks ||= {};
    state.wizard.creationBlocks[el.dataset.creationBlock] = el.value;
    if (el.dataset.creationBlock === "worldRules") state.wizard.worldRules = el.value;
  });
  $$("[data-style-profile-field]").forEach((el) => el.oninput = () => { styleDraft()[el.dataset.styleProfileField] = el.value; });
  $$("[data-style-rule-field]").forEach((el) => el.oninput = () => {
    const rule = styleDraft().rules.find((item) => item.id === el.dataset.styleRuleId);
    if (rule) rule[el.dataset.styleRuleField] = el.value;
  });
  $$("[data-style-rule-policy]").forEach((el) => el.onchange = () => {
    const rule = styleDraft().rules.find((item) => item.id === el.dataset.styleRulePolicy);
    if (rule) rule.policy = el.value;
  });
  $$("[data-style-rule-source]").forEach((el) => el.onclick = () => {
    const rule = styleDraft().rules.find((item) => item.id === el.dataset.styleRuleId);
    if (!rule) return;
    rule.source = el.dataset.styleRuleSource;
    if (rule.source === "template") {
      const first = STYLE_MODULE_GROUPS.find((group) => group.id === rule.groupId)?.modules[0];
      rule.templateId = rule.templateId || first?.[0] || "";
      rule.content = STYLE_RULE_TEMPLATES[rule.templateId] || "";
    }
    render();
  });
  $$("[data-style-rule-template]").forEach((el) => el.onchange = () => {
    const rule = styleDraft().rules.find((item) => item.id === el.dataset.styleRuleTemplate);
    if (!rule) return;
    rule.templateId = el.value;
    rule.title = STYLE_MODULE_GROUPS.flatMap((group) => group.modules).find(([id]) => id === el.value)?.[1] || rule.title;
    rule.content = STYLE_RULE_TEMPLATES[el.value] || "";
    render();
  });
  const bookSearchInput = $("#bookSearchInput");
  if (bookSearchInput) bookSearchInput.oninput = () => {
    state.bookSearch = bookSearchInput.value;
    $("#bookSearchResults").innerHTML = bookSearchResults(state.bookSearch);
    bindBookSearchResults();
  };
  bindBookSearchResults();
  $$("[data-view]").forEach((el) => el.onclick = () => {
    if (el.dataset.view === "projects") {
      saveEditor();
      state.projectId = null;
      state.chapterId = null;
      state.aiResult = "";
      state.view = "projects";
      return render();
    }
    if (el.dataset.view === "quick") {
      saveEditor();
      state.projectId = null;
      state.chapterId = null;
      state.aiResult = "";
      state.view = "quick";
      return render();
    }
    if (!state.projectId || !project()) return toast("请先从项目中心进入一个项目");
    state.view = el.dataset.view === "writing" ? "drafting" : el.dataset.view;
    if (state.projectId && !state.chapterId) state.chapterId = project()?.chapters[0]?.id;
    state.aiResult = "";
    render();
  });
  $$("[data-open-project]").forEach((el) => el.onclick = () => {
    state.projectId = el.dataset.openProject;
    const next = projectNextStep(project());
    state.chapterId = next.chapterId;
    state.aiResult = "";
    state.pendingAssets = [];
    state.view = next.view;
    render();
  });
  $$("[data-action]").forEach((el) => el.onclick = (event) => { event.stopPropagation(); action(el.dataset.action, el); });
  $$("[data-chapter]").forEach((el) => el.onclick = () => { saveEditor(); state.chapterId = el.dataset.chapter; state.aiResult = ""; render(); });
  $$("[data-ai]").forEach((el) => el.onclick = () => runAI(el.dataset.ai));
  $$("[data-asset-tab]").forEach((el) => el.onclick = () => { state.assetTab = el.dataset.assetTab; state.assetFocusId = null; render(); });
  $$("[data-asset-focus]").forEach((el) => el.onclick = () => { state.assetFocusId = el.dataset.assetFocus; render(); });
  $$("[data-asset-search]").forEach((el) => el.oninput = () => { state.assetSearch = el.value; state.assetFocusId = null; render(); });
  $$("[data-entity-tab]").forEach((el) => el.onclick = () => { state.entityTab = el.dataset.entityTab; render(); });
  $$("[data-entity-list-tab]").forEach((el) => el.onclick = () => { state.entityListTab = el.dataset.entityListTab; render(); });
  $$("[data-entity-folder]").forEach((el) => el.onclick = () => { state.entityFolderFilter = el.dataset.entityFolder || null; render(); });
  $$("[data-entity-focus]").forEach((el) => el.onclick = () => { state.entityFocusId = el.dataset.entityFocus; render(); });
  $$("[data-entity-search]").forEach((el) => el.oninput = () => { state.entitySearch = el.value; render(); });
  $$("[data-memory-tab]").forEach((el) => el.onclick = () => { state.memoryTab = el.dataset.memoryTab; render(); });
  $$("[data-story-tab]").forEach((el) => el.onclick = () => { state.storyboardTab = el.dataset.storyTab; render(); });
  $$("[data-shot-count]").forEach((el) => el.onclick = () => {
    const p = project(), c = chapter();
    p.storyboardConfig ||= {};
    p.storyboardConfig[c.id] = { ...(p.storyboardConfig[c.id] || {}), mode: el.dataset.shotCount };
    save(); render();
  });
  $$("[data-bible-field]").forEach((el) => el.oninput = () => {
    project().bible[el.dataset.bibleField] = el.value.split(/\n+/).map((x) => x.trim()).filter(Boolean);
    save();
  });
  $$("[data-character-state]").forEach((el) => el.oninput = () => {
    const b = project().bible;
    b.characterStates[el.dataset.characterState] ||= {};
    b.characterStates[el.dataset.characterState][el.dataset.stateField] = el.value;
    save();
  });
  const fineOutlineInput = $("#chapterFineOutline");
  if (fineOutlineInput) fineOutlineInput.oninput = () => { chapter().fineOutline = fineOutlineInput.value; chapter().updatedAt = Date.now(); save(); };
  $$("[data-task-field]").forEach((el) => el.oninput = () => {
    const field = el.dataset.taskField;
    chapter().taskCard[field] = ["requiredEvents","requiredCharacters","forbidden"].includes(field)
      ? el.value.split(/\n+/).map((x) => x.trim()).filter(Boolean) : el.value;
    save();
  });
  $$("[data-scene-field]").forEach((el) => el.oninput = () => {
    const scene = chapter()?.scenes[Number(el.dataset.sceneIndex)];
    if (!scene || scene.status === "locked") return;
    scene[el.dataset.sceneField] = ["tension", "targetWords"].includes(el.dataset.sceneField) ? Number(el.value) : el.value;
    chapter().updatedAt = Date.now();
    save();
  });
  $$("[data-story-style]").forEach((el) => el.onclick = () => {
    project().storyboardStyle = el.dataset.storyStyle;
    if (chapter()) project().storyboards[chapter().id] = [];
    save();
    render();
  });
  $$("[data-story-asset]").forEach((el) => el.onchange = () => {
    const p = project();
    const c = chapter();
    p.storyboardAssets ||= {};
    p.storyboardAssets[c.id] = $$("[data-story-asset]:checked").map((item) => item.dataset.storyAsset);
    p.storyboards[c.id] = [];
    save();
    render();
  });
  $$("[data-quick-choice]").forEach((el) => el.onclick = () => {
    const q = quickWriting();
    const field = el.dataset.quickChoice;
    const value = el.dataset.quickValue;
    if (QUICK_MULTI_FIELDS.has(field)) {
      const values = quickValueList(q.config[field]).filter((item) => item !== "随机" || value === "随机");
      q.config[field] = values.includes(value)
        ? values.filter((item) => item !== value)
        : value === "随机" ? ["随机"] : [...values.filter((item) => item !== "随机"), value];
      if (!q.config[field].length) q.config[field] = ["随机"];
    } else {
      q.config[field] = value;
    }
    resetQuickAfter(q, "config");
    q.step = "config";
    save();
    render();
  });
  $$("[data-quick-expand]").forEach((el) => el.onclick = (event) => {
    event.stopPropagation();
    state.quickExpanded[el.dataset.quickExpand] = !state.quickExpanded[el.dataset.quickExpand];
    render();
  });
  $$("[data-quick-field]").forEach((el) => {
    const updateQuickField = () => {
    const q = quickWriting();
    const key = el.dataset.quickField;
    if (Object.prototype.hasOwnProperty.call(q.config, key)) {
      q.config[key] = ["chapterCount", "piecesPerChapter"].includes(key) ? Number(el.value) : el.value;
      resetQuickAfter(q, "config");
      q.step = "config";
    } else {
      q[key] = el.value;
      if (key === "inspiration") resetQuickAfter(q, "inspiration");
      if (key === "fineOutline") resetQuickAfter(q, "outline");
    }
    save();
    };
    el.oninput = updateQuickField;
    el.onchange = updateQuickField;
  });
  $$("[data-quick-number-select]").forEach((el) => {
    el.onchange = () => {
      const q = quickWriting();
      const key = el.dataset.quickNumberSelect;
      const input = $(`[data-quick-number-input="${key}"]`);
      const next = el.value === "custom" ? Number(input?.value) : Number(el.value);
      q.config[key] = Math.max(1, next || (key === "chapterCount" ? 20 : 3));
      resetQuickAfter(q, "config");
      q.step = "config";
      save();
      render();
    };
  });
  $$("[data-quick-number-input]").forEach((el) => {
    const updateQuickNumber = () => {
      const q = quickWriting();
      const key = el.dataset.quickNumberInput;
      const max = key === "chapterCount" ? 300 : 50;
      const next = Math.min(max, Math.max(1, Number(el.value) || (key === "chapterCount" ? 20 : 3)));
      q.config[key] = next;
      resetQuickAfter(q, "config");
      q.step = "config";
      save();
    };
    el.oninput = updateQuickNumber;
    el.onchange = () => {
      updateQuickNumber();
      render();
    };
  });
  $$("[data-quick-direction]").forEach((el) => el.onclick = () => {
    const q = quickWriting();
    q.selectedDirection = q.directions[Number(el.dataset.quickDirection)]?.title || "";
    resetQuickAfter(q, "direction");
    save();
    render();
  });
  $$("[data-quick-unit]").forEach((el) => el.oninput = () => {
    const q = quickWriting();
    const unit = q.units[Number(el.dataset.quickUnit)];
    if (!unit) return;
    unit[el.dataset.unitField] = el.value;
    resetQuickAfter(q, "unit");
    save();
  });
  $$("[data-genre]").forEach((el) => el.onclick = () => {
    syncWizardInputs();
    state.wizard.genre ||= [];
    const value = el.dataset.genre;
    state.wizard.genre = state.wizard.genre.includes(value) ? state.wizard.genre.filter(x=>x!==value) : [...state.wizard.genre, value].slice(-4);
    state.wizard.soulCards = null;
    render();
  });
  $$("[data-style-pack]").forEach((el) => el.onclick = () => {
    syncWizardInputs();
    state.wizard.stylePack = el.dataset.stylePack;
    state.wizard.tone ||= stylePackById(el.dataset.stylePack).tone;
    state.wizard.soulCards = null;
    render();
  });
  $$("[data-style-module]").forEach((el) => el.onclick = () => {
    syncWizardInputs();
    const id = el.dataset.styleModule;
    state.wizard.styleModules ||= [];
    state.wizard.styleModules = state.wizard.styleModules.includes(id)
      ? state.wizard.styleModules.filter((item)=>item!==id)
      : [...state.wizard.styleModules, id];
    state.wizard.soulCards = null;
    render();
  });
  $$("[data-soul-card]").forEach((el) => el.oninput = () => {
    state.wizard.soulCards ||= {};
    state.wizard.soulCards[el.dataset.soulCard] = el.value;
  });
  $$("[data-genesis-card]").forEach((el) => el.oninput = () => {
    project().genesis ||= {};
    project().genesis.soulCards ||= {};
    project().genesis.soulCards[el.dataset.genesisCard] = el.value;
    save();
  });
  $$("[data-wizard-mode]").forEach((el) => el.onclick = () => {
    syncWizardInputs();
    state.wizard.creationMode = el.dataset.wizardMode;
    render();
  });
  ["#wOrigin", "#wTravelGroup", "#wAbilityType"].forEach((selector) => {
    $(selector)?.addEventListener("change", () => {
      syncWizardInputs();
      render();
    });
  });
  $$("[data-wizard-jump]").forEach((el) => el.onclick = () => {
    syncWizardInputs();
    state.wizardStep = Number(el.dataset.wizardJump);
    render();
  });
  $$("[data-draft-words]").forEach((el) => el.onclick = () => {
    state.aiDraftConfig.words = Number(el.dataset.draftWords);
    state.aiDraftConfig.note = $("#draftNote")?.value || "";
    render();
  });
  $$("[data-draft-direction]").forEach((el) => el.onclick = () => {
    state.aiDraftConfig.direction = el.dataset.draftDirection;
    state.aiDraftConfig.note = $("#draftNote")?.value || "";
    render();
  });
  $$("[data-expand-acts]").forEach((el) => el.onclick = () => {
    state.outlineExpand.actCount = Number(el.dataset.expandActs);
    render();
  });
  $$("[data-expand-chapters]").forEach((el) => el.onclick = () => {
    state.outlineExpand.chaptersPerAct = Number(el.dataset.expandChapters);
    render();
  });
  $$("[data-outline-chapter]").forEach((el) => el.oninput = () => {
    const p = project();
    p.outline.acts[Number(el.dataset.actIndex)].chapters[Number(el.dataset.outlineChapter)] = el.value;
    save();
  });
  $$("[data-act-title]").forEach((el) => el.oninput = () => {
    project().outline.acts[Number(el.dataset.actTitle)].title = el.value;
    save();
  });
  $$("[data-act-summary]").forEach((el) => el.oninput = () => {
    project().outline.acts[Number(el.dataset.actSummary)].summary = el.value;
    save();
  });
  $("#chapterEditor")?.addEventListener("input", (event) => {
    $("#wordCount").textContent = `${countText(event.target.value)} 字`;
    debounceSave();
  });
  $("#chapterTitle")?.addEventListener("input", debounceSave);
  $("#shotChapter")?.addEventListener("change", (event) => { state.chapterId = event.target.value; render(); });
  $("#projectImport")?.addEventListener("change", importProjectFile);
}

function bindBookSearchResults() {
  $$("[data-search-view]").forEach((el) => el.onclick = () => {
    saveEditor();
    state.view = el.dataset.searchView;
    if (state.view === "drafting") state.chapterId = el.dataset.searchId;
    if (state.view === "encyclopedia") { state.entityTab = "all"; state.entitySearch = ""; state.entityFocusId = el.dataset.searchId; }
    if (state.view === "bible") state.memoryTab = "all";
    if (state.view === "assets") { state.assetTab = "all"; state.assetSearch = ""; state.assetFocusId = el.dataset.searchId; }
    state.modal = null;
    render();
  });
}

let saveTimer;
function debounceSave() { clearTimeout(saveTimer); saveTimer = setTimeout(saveEditor, 500); }
function saveEditor() {
  const c = chapter();
  if (!c || !$("#chapterEditor")) return;
  const changed = c.content !== $("#chapterEditor").value || c.title !== $("#chapterTitle").value;
  c.content = $("#chapterEditor").value;
  c.title = $("#chapterTitle").value;
  if (changed && c.publishedAt) c.hasUnpublishedChanges = true;
  c.updatedAt = Date.now();
  project().updatedAt = Date.now();
  save();
}

function syncWizardInputs() {
  const w = state.wizard;
  const values = {
    title: "#wTitle", platform: "#wPlatform", tone: "#wTone", logline: "#wLogline", origin: "#wOrigin",
    travelGroup: "#wTravelGroup", abilityType: "#wAbilityType", abilityCost: "#wAbilityCost", coreConflict: "#wCoreConflict",
    heroGoal: "#wHeroGoal", stakes: "#wStakes", era: "#wEra", visualStyle: "#wVisual", worldRules: "#wWorldRules",
    powerSystem: "#wPowerSystem", factions: "#wFactions", lockedFacts: "#wLockedFacts", structure: "#wStructure",
    pov: "#wPov", ending: "#wEnding", originOther: "#wOriginOther", travelGroupOther: "#wTravelGroupOther",
    abilityTypeOther: "#wAbilityTypeOther", audienceGender: "#wAudienceGender", coreTheme: "#wCoreTheme",
    emotionalCore: "#wEmotionalCore", deepDesire: "#wDeepDesire", trueNeed: "#wTrueNeed",
    finalCost: "#wFinalCost", finalRealization: "#wFinalRealization", finalChoice: "#wFinalChoice",
    powerMechanism: "#wPowerMechanism", powerLadder: "#wPowerLadder", powerConflict: "#wPowerConflict"
  };
  Object.entries(values).forEach(([key, selector]) => {
    const element = $(selector);
    if (element) w[key] = element.value.trim();
  });
  const numbers = { targetWords: "#wWords", chapterWords: "#wChapterWords", actCount: "#wActCount", chaptersPerAct: "#wChaptersPerAct" };
  Object.entries(numbers).forEach(([key, selector]) => {
    const element = $(selector);
    if (element) w[key] = Number(element.value);
  });
}

function collectWizardStep() {
  syncWizardInputs();
  const w = state.wizard;
  if (state.wizardStep === 1) {
    if (!w.title) return toast("先给故事起一个名字"), false;
    if (!w.genre?.length) return toast("至少选择一个题材标签"), false;
  }
  if (state.wizardStep === 3 && CREATION_BLOCKS.some(block=>!w.creationBlocks?.[block.id]?.trim())) return toast("请先完成四块创世档案"), false;
  return true;
}

function action(name, source) {
  if (name === "add-style-rule") {
    const group = STYLE_MODULE_GROUPS.find((item) => item.id === source?.dataset.styleGroupId);
    if (!group) return;
    styleDraft().rules.push({ id: uid(), groupId: group.id, title: "新规则", content: "", source: "custom", templateId: "", policy: "auto" });
    render(); return;
  }
  if (name === "remove-style-rule") {
    styleDraft().rules = styleDraft().rules.filter((rule) => rule.id !== source?.dataset.styleRuleId);
    render(); return;
  }
  if (name === "cancel-style") {
    state.styleDraft = structuredClone(project().styleProfile);
    render(); return toast("已放弃未保存的风格修改");
  }
  if (name === "save-style") {
    const draft = styleDraft();
    if (!draft.name.trim()) return toast("请填写风格包名称");
    if (draft.rules.some((rule) => !rule.title.trim() || (rule.policy !== "ignore" && !rule.content.trim()))) return toast("请补全参与 AI 的规则名称和内容");
    project().styleProfile = structuredClone(draft);
    project().updatedAt = Date.now();
    save();
    render(); return toast("风格包已保存，后续 AI 写作会使用新规则");
  }
  if (name === "add-inspiration") {
    const note = $("#ideaInput")?.value.trim();
    if (!note) return toast("先写下一条灵感");
    project().inspirationNotes.push({ id: uid(), text: note, createdAt: Date.now() });
    save(); render(); return toast("灵感已记下");
  }
  if (name === "use-inspiration") {
    const note = project()?.inspirationNotes.find((item) => item.id === source?.dataset.ideaId);
    const current = chapter();
    if (!note || !current) return;
    current.taskCard.goal = [current.taskCard.goal, note.text].filter(Boolean).join("\n");
    save();
    state.view = "drafting";
    render();
    return toast("已加入当前章节任务，可继续修改");
  }
  if (name === "open-book-search") {
    if (!project()) return toast("请先打开一本作品");
    saveEditor();
    state.bookSearch = "";
    state.modal = "book-search";
    render();
    $("#bookSearchInput")?.focus();
    return;
  }
  if (name === "new-project") { state.modal = "book-ideas"; state.bookIdea = { genre:"", style:"", genreValues:[], styleValues:[], genreOther:"", styleOther:"", premise:"", options:[], selected:-1, demo:false, premiseSerial:0, premiseDemo:false }; return render(); }
  if (name === "generate-core-premise") return generateCorePremise();
  if (name === "generate-book-ideas") return generateBookIdeas();
  if (name === "manual-book-wizard") { state.modal = "book-setup"; state.wizardStep = 1; state.wizard = { genre: [], coverTheme: "ember", coverImage: "" }; return render(); }
  if (name === "select-book-idea") {
    const idea = state.bookIdea, selected = idea.options[idea.selected];
    if (!selected) return toast("请先选择一个方向");
    const selectedGenres = [...(idea.genreValues || []), idea.genreOther || ""].filter(Boolean).map(item=>item==="修真"?"修仙":item).slice(0,4);
    const tone = /搞笑|幽默|轻松/.test(idea.style) ? "轻松搞笑" : /悬疑|惊悚/.test(idea.style) ? "悬疑压迫" : /治愈|温暖/.test(idea.style) ? "温暖治愈" : "热血爽感";
    state.wizard = { genre: selectedGenres.length ? selectedGenres : ["待探索"], title: selected.title, logline: selected.summary,
      coreConflict: selected.conflict || selected.summary, powerMechanism: selected.mechanism || "",
      tone, platform: idea.selected===0 ? "番茄 / 七猫" : idea.selected===1 ? "起点男频" : "暂不确定",
      ideaRoute: BOOK_IDEA_ROUTES[idea.selected].id, ideaSeed: idea.premise, ideaStyle: idea.style };
    state.wizard.coverTheme = BOOK_COVER_THEMES[idea.selected % BOOK_COVER_THEMES.length].id;
    state.wizard.coverImage = "";
    state.wizardStep = 1; state.modal = "book-setup"; return render();
  }
  if (name === "back-book-ideas") { syncBookSetupInputs(); state.modal = "book-ideas"; return render(); }
  if (name === "upload-book-cover") { $("#bookCoverUpload")?.click(); return; }
  if (name === "generate-book-cover") {
    syncBookSetupInputs();
    state.bookSetupCoverSerial = (state.bookSetupCoverSerial + 1) % BOOK_COVER_THEMES.length;
    state.wizard.coverTheme = BOOK_COVER_THEMES[state.bookSetupCoverSerial].id;
    state.wizard.coverImage = "";
    render(); return toast("已换一种封面概念");
  }
  if (name === "enter-book-wizard") {
    syncBookSetupInputs();
    if (!state.wizard.title) return toast("先填写书名");
    if (!state.wizard.genre?.length) return toast("先选择主分类");
    if (!state.wizard.logline) return toast("先填写作品简介");
    state.wizardStep = 1; state.modal = "project"; return render();
  }
  if (name === "generate-creation-journey") return generateCreationJourney();
  if (name === "regenerate-creation-block") return regenerateCreationBlock(source?.dataset.creationId);
  if (name === "toggle-creation-block") {
    const id=source?.dataset.creationId;
    if(!CREATION_BLOCKS.some(block=>block.id===id)) return;
    state.wizard.creationCollapsed ||= {};
    state.wizard.creationCollapsed[id]=!state.wizard.creationCollapsed[id];
    return render();
  }
  if (name === "delete-project") { state.deleteProjectId = source?.dataset.projectId; state.modal = "delete-project"; return render(); }
  if (name === "confirm-delete-project") return moveProjectToTrash();
  if (name === "open-trash") { state.modal = "trash"; return render(); }
  if (name === "restore-project") return restoreProjectFromTrash(source?.dataset.trashId);
  if (name === "ask-delete-trash") { state.trashDeleteId = source?.dataset.trashId; state.modal = "trash-delete"; return render(); }
  if (name === "back-trash") { state.trashDeleteId = null; state.modal = "trash"; return render(); }
  if (name === "confirm-delete-trash") return permanentlyDeleteTrashEntry();
  if (name === "import-project") { $("#projectImport")?.click(); return; }
  if (name === "close-modal") { state.modal = null; state.deleteProjectId = null; state.trashDeleteId = null; return render(); }
  if (name === "back-projects") {
    saveEditor();
    state.projectId = null;
    state.chapterId = null;
    state.aiResult = "";
    state.pendingAssets = [];
    state.view = "projects";
    return render();
  }
  if (name === "go-outline") { saveEditor(); state.view = "outline"; return render(); }
  if (name === "go-writing") { state.view = "drafting"; state.chapterId = source?.dataset.chapter || state.chapterId || project()?.chapters[0]?.id; return render(); }
  if (name === "go-finalize") { saveEditor(); state.view = "finalize"; state.chapterId = source?.dataset.chapter || state.chapterId || project()?.chapters[0]?.id; return render(); }
  if (name === "generate-outline") return generateOutlineAndAssets();
  if (name === "quick-save-project") { save(); return toast("快速创作进度已保存"); }
  if (name === "quick-reset" || name === "quick-new-creation") { state.quickWriting = normalizeQuickWriting(); state.quickExpanded = {}; save(); render(); return toast(name === "quick-new-creation" ? "已开启新的快速创作" : "快速创作已清空"); }
  if (name === "quick-back-config") { quickWriting().step = "config"; save(); return render(); }
  if (name === "quick-jump") {
    const q = quickWriting();
    const nextStep = source?.dataset.quickStep || "config";
    if (!canJumpQuickStep(q, nextStep)) return toast("请先完成当前步骤");
    q.step = nextStep;
    save();
    return render();
  }
  if (name === "quick-toggle-expand") { state.quickExpanded[source?.dataset.quickExpand] = !state.quickExpanded[source?.dataset.quickExpand]; return render(); }
  if (name === "quick-generate-inspiration") return generateQuickInspiration();
  if (name === "quick-next-direction") return prepareQuickDirections();
  if (name === "quick-generate-directions") return generateQuickDirections();
  if (name === "quick-next-unit") return goQuickUnit();
  if (name === "quick-generate-next-unit") return generateQuickNextUnit();
  if (name === "quick-generate-units") return generateQuickUnits();
  if (name === "quick-next-outline") return goQuickOutline();
  if (name === "quick-generate-next-outline") return generateQuickNextFineOutline();
  if (name === "quick-generate-fine-outline") return generateQuickFineOutline();
  if (name === "quick-next-draft") return goQuickDraft();
  if (name === "quick-generate-next-draft-piece") return generateQuickNextDraftPiece();
  if (name === "quick-generate-draft") return generateQuickDraft();
  if (name === "quick-save-result") return saveQuickResultAsProject();
  if (name === "generate-project-soul") return generateProjectSoul();
  if (name === "confirm-outline") return confirmOutline();
  if (name === "unlock-outline") { project().outline.locked = false; save(); render(); return toast("大纲已解锁，修改后请重新确认"); }
  if (name === "add-act") return addOutlineAct();
  if (name === "remove-act") return removeOutlineAct(Number(source?.dataset.actIndex));
  if (name === "add-outline-chapter") return addOutlineChapter(Number(source?.dataset.actIndex));
  if (name === "remove-outline-chapter") return removeOutlineChapter(Number(source?.dataset.actIndex), Number(source?.dataset.chapterIndex));
  if (name === "open-outline-expand") {
    const p = project();
    state.outlineExpand = { actCount: Math.max(3, p.outline.acts.length), chaptersPerAct: Math.max(3, p.outline.acts[0]?.chapters.length || 3) };
    state.modal = "outline-expand";
    return render();
  }
  if (name === "apply-outline-expand") return applyOutlineExpand();
  if (name === "open-ai-draft") { state.modal = "ai-draft"; state.aiDraftConfig = { words: 1500, direction: "强冲突推进", note: "" }; return render(); }
  if (name === "generate-final-draft") {
    const p = project(), c = chapter();
    const field = $("#chapterFineOutline");
    if (field) c.fineOutline = field.value.trim();
    if (c.scenes.length !== 4) generateScenes();
    state.modal = "ai-draft"; state.aiDraftConfig = { words: 1500, direction: "强冲突推进", note: "" }; return render(); }
  if (name === "start-ai-draft") {
    if (state.view === "finalize" && chapter()?.scenes.length !== 4) generateScenes();
    const fineOutlineField = $("#chapterFineOutline");
    if (fineOutlineField && chapter()) chapter().fineOutline = fineOutlineField.value.trim();
    state.aiDraftConfig.note = $("#draftNote")?.value.trim() || "";
    state.modal = null;
    render();
    return runAI("draft");
  }
  if (name === "wizard-next") { if (collectWizardStep()) { state.wizardStep = Math.min(5, state.wizardStep + 1); render(); } return; }
  if (name === "wizard-back") {
    syncWizardInputs();
    if (state.wizardStep === 1) { state.modal = "book-setup"; return render(); }
    state.wizardStep = Math.max(1, state.wizardStep - 1); return render();
  }
  if (name === "regenerate-soul-cards") return regenerateSoulCards();
  if (name === "rewrite-soul-card") return rewriteSoulCard(source?.dataset.soulCardId);
  if (name === "create-project") return createProject();
  if (name === "save") { saveEditor(); save(); return toast("已保存"); }
  if (name === "sync-project") return syncProject();
  if (name === "open-versions") { state.modal = "versions"; return render(); }
  if (name === "create-version") { createVersion("手动版本"); return render(); }
  if (name === "restore-version") return restoreVersion(Number(source?.dataset.versionIndex));
  if (name === "export-project") return exportProject();
  if (name === "ai-fill-task") return fillTaskCard();
  if (name === "quality-check") { saveEditor(); runQualityCheck(); return render(); }
  if (name === "jump-quality-issue") return jumpQualityIssue(Number(source?.dataset.issueIndex));
  if (name === "ai-audit-bible") return auditBible();
  if (name === "add-chapter") {
    saveEditor();
    const p = project();
    const item = normalizeProject({ chapters: [{ id: uid(), title: `第${p.chapters.length + 1}章 未命名`, content: "", status: "待写", summary: "", updatedAt: Date.now() }] }).chapters[0];
    p.chapters.push(item);
    (p.volumes[p.volumes.length - 1] ||= { id: uid(), title: "第一卷", summary: "", chapterIds: [] }).chapterIds.push(item.id);
    state.chapterId = item.id; save(); return render();
  }
  if (name === "remove-chapter") return removeChapter(source?.dataset.chapterId);
  if (name === "append-ai") {
    const editor = $("#chapterEditor"); editor.value += `${editor.value ? "\n\n" : ""}${state.aiResult}`; state.aiResult = ""; saveEditor(); return render();
  }
  if (name === "clear-ai") { state.aiResult = ""; return render(); }
  if (name === "new-asset") { state.modal = "asset"; return render(); }
  if (name === "create-asset") return createAsset();
  if (name === "sync-assets-entities") return syncAssetsToEntities(true);
  if (name === "new-entity") { state.entityEditId = null; state.modal = "entity"; return render(); }
  if (name === "new-entity-folder") {
    const label = prompt("新分组名称");
    if (!label?.trim()) return;
    const p = project();
    p.entityFolders ||= [];
    const folder = { id: uid(), name: label.trim() };
    p.entityFolders.push(folder);
    state.entityFolderFilter = folder.id;
    save(); return render();
  }
  if (name === "rename-entity-folder") {
    const p = project(), folder = (p.entityFolders||[]).find(item=>item.id===state.entityFolderFilter);
    if (!folder) return;
    const label = prompt("分组名称", folder.name);
    if (!label?.trim()) return;
    folder.name = label.trim(); save(); return render();
  }
  if (name === "delete-entity-folder") {
    const p = project(), id = state.entityFolderFilter;
    const folder = (p.entityFolders||[]).find(item=>item.id===id);
    if (!folder || !confirm(`删除分组「${folder.name}」？其中设定会转入未分组。`)) return;
    p.entities.filter(item=>item.folderId===id).forEach(item=>item.folderId=null);
    p.entityFolders = p.entityFolders.filter(item=>item.id!==id);
    state.entityFolderFilter = null; save(); return render();
  }
  if (name === "delete-entity") {
    const p = project(), id = source?.dataset.entityId;
    const entity = p.entities.find(item=>item.id===id);
    if (!entity || !confirm(`删除设定「${entity.name}」？`)) return;
    p.entities = p.entities.filter(item=>item.id!==id);
    state.entityFocusId = null;
    save(); return render();
  }
  if (name === "edit-entity") { state.entityEditId = source?.dataset.entityId; state.modal = "entity"; return render(); }
  if (name === "entity-asset-prompt") return openEntityAssetPrompt(source?.dataset.entityId);
  if (name === "save-entity") return saveEntity();
  if (name === "new-memory") { state.memoryEditId = null; state.modal = "memory"; return render(); }
  if (name === "edit-memory") { state.memoryEditId = source?.dataset.memoryId; state.modal = "memory"; return render(); }
  if (name === "save-memory") return saveMemory();
  if (name === "toggle-memory") return toggleMemory(source?.dataset.memoryId);
  if (name === "toggle-legacy-bible") { state.legacyBibleOpen = !state.legacyBibleOpen; return render(); }
  if (name === "add-scene") return addScene();
  if (name === "generate-scenes") return generateScenes();
  if (name === "toggle-scene-lock") return toggleSceneLock(Number(source?.dataset.sceneIndex));
  if (name === "remove-scene") return removeScene(Number(source?.dataset.sceneIndex));
  if (name === "ai-asset-prompt") {
    if (!project()?.chapters.some((item) => item.status === "已完成")) return toast("请先完成定稿，再生成定妆提示词");
    state.assetPromptId = source?.dataset.assetId;
    state.modal = "asset-prompt";
    return render();
  }
  if (name === "save-asset-prompt") return saveAssetPrompt(false);
  if (name === "generate-asset-image") return saveAssetPrompt(true);
  if (name === "generate-shots") return generateShots();
  if (name === "generate-all-shot-images") return generateAllShotImages();
  if (name === "toggle-shot-lock") return toggleShotLock(Number(source?.dataset.shotIndex));
  if (name === "delete-shot") return deleteShot(Number(source?.dataset.shotIndex));
  if (name === "add-shot") return addShot();
  if (name === "regenerate-shot") return regenerateShot(Number(source?.dataset.shotIndex));
  if (name === "generate-shot-image") return generateShotImage(Number(source?.dataset.shotIndex));
  if (name === "complete-initial-draft") return completeInitialDraft();
  if (name === "finalize-chapter") return finalizeChapter();
  if (name === "edit-completed-chapter") {
    const c = chapter();
    c.status = "修改中";
    c.hasUnpublishedChanges = true;
    c.updatedAt = Date.now();
    save(); render(); return toast("本章已解锁；修改后请重新确认初稿或定稿");
  }
  if (name === "add-pending-asset") return addPendingAsset();
  if (name === "save-extracted-assets") return saveExtractedAssets();
  if (name === "chapter-storyboard") {
    saveEditor();
    if (chapter()?.status !== "已完成") return toast("请先确认定稿，再进入故事板");
    state.view = "storyboard";
    render();
    return toast("请选择画风，然后生成12格故事板");
  }
}

function moveProjectToTrash() {
  const index = state.projects.findIndex((item) => item.id === state.deleteProjectId);
  if (index < 0) return;
  const [removed] = state.projects.splice(index, 1);
  state.trash.unshift({ id: uid(), deletedAt: Date.now(), project: removed });
  state.deleteProjectId = null;
  state.modal = null;
  save(); render(); toast(`「${removed.title}」已移到回收站`);
}

function regenerateSoulCards() {
  syncWizardInputs();
  state.wizard.soulCards = buildSoulCards({ ...state.wizard, soulCards: null });
  render(); toast("已根据当前题材、小说之魂和能力配置重新生成核心卡");
}

function rewriteSoulCard(id) {
  syncWizardInputs();
  const card = state.wizard.soulCards?.[id];
  if (!card) return;
  const additions = {
    positioning: "\n差异化要求：开篇三集必须兑现题材承诺，避免泛化世界观说明。",
    theme: "\n长篇支撑要求：正派、反派和重要配角都要围绕同一命题给出不同答案。",
    emotion: "\n追读要求：每个阶段胜利都要伴随一种情绪代价，让读者在爽感之外持续牵挂人物。",
    desire: "\n人物弧要求：表面目标、深层欲望、真正需要三者不能完全相同，否则人物会扁。",
    finalChoice: "\n结局要求：最终选择必须用行动回答核心命题，而不是靠旁白讲道理。",
    hooks: "\n追读要求：身份梗、能力梗和冲突梗必须在第一集发生碰撞，不能分散介绍。",
    power: "\n一致性约束：每次升级都必须同时扩大用途、提高代价并制造新的敌人。"
  };
  if (!additions[id]) return;
  if (!card.includes(additions[id].trim())) state.wizard.soulCards[id] = `${card}${additions[id]}`;
  render(); toast("AI已强化这张核心设定卡");
}

function generateProjectSoul() {
  const p = project();
  if (!p) return;
  p.genesis ||= {};
  p.genesis.stylePack ||= "longform";
  p.genesis.styleModules ||= ["human-voice","filter-words","dialogue-progress","scene-four-step","tension","chapter-hook","task-audit","logic-audit"];
  const source = {
    title: p.title, genre: p.genre, platform: p.platform, tone: p.tone, logline: p.logline,
    era: p.era, ...p.genesis
  };
  p.genesis.soulCards = buildSoulCards(source);
  p.genesis.coreConflict ||= source.coreConflict;
  save(); render(); toast("已根据现有题材与大纲生成创世核心卡");
}

function restoreProjectFromTrash(trashId) {
  const index = state.trash.findIndex((entry) => entry.id === trashId);
  if (index < 0) return;
  const [entry] = state.trash.splice(index, 1);
  entry.project.updatedAt = Date.now();
  state.projects.unshift(entry.project);
  save(); render(); toast(`「${entry.project.title}」已恢复`);
}

function permanentlyDeleteTrashEntry() {
  const index = state.trash.findIndex((entry) => entry.id === state.trashDeleteId);
  if (index < 0) {
    state.trashDeleteId = null;
    state.modal = "trash";
    return render();
  }
  const [entry] = state.trash.splice(index, 1);
  state.trashDeleteId = null;
  state.modal = "trash";
  save();
  render();
  toast(`「${entry.project.title}」已彻底删除`);
}

function removeChapter(chapterId) {
  const p = project();
  const index = p?.chapters.findIndex((item) => item.id === chapterId) ?? -1;
  if (!p || index < 0) return;
  if (p.chapters.length <= 1) return toast("至少保留一个写作单元");
  const target = p.chapters[index];
  if (countText(target.content || "") > 0 && !confirm(`确定删除「${target.title}」吗？正文和故事板也会一起移除。`)) return;
  p.chapters.splice(index, 1);
  p.volumes.forEach((volume) => {
    volume.chapterIds = (volume.chapterIds || []).filter((id) => id !== chapterId);
  });
  p.volumes = p.volumes.filter((volume) => volume.chapterIds.length);
  if (!p.volumes.length) p.volumes = [{ id: uid(), title: "第一卷", summary: "", chapterIds: p.chapters.map((item) => item.id) }];
  delete p.storyboards?.[chapterId];
  delete p.storyboardAssets?.[chapterId];
  if (state.chapterId === chapterId) state.chapterId = p.chapters[Math.min(index, p.chapters.length - 1)]?.id || p.chapters[0]?.id;
  p.updatedAt = Date.now();
  save();
  render();
  toast(`已删除「${target.title}」`);
}

async function importProjectFile(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  try {
    const imported = normalizeProject(JSON.parse(await file.text()));
    imported.id = uid();
    imported.title = `${imported.title}（导入）`;
    state.projects.unshift(imported); save(); render(); toast("项目已导入");
  } catch { toast("导入失败：请选择墨境导出的 JSON 项目文件"); }
}

function createVersion(label = "保存版本") {
  const p = project();
  if (!p) return;
  const versions = projectVersions();
  versions.unshift({ label, createdAt: Date.now(), project: structuredClone(p) });
  localStorage.setItem(`museforge-versions-${p.id}`, JSON.stringify(versions.slice(0, 20)));
  toast("版本已保存");
}
function restoreVersion(index) {
  const snapshot = projectVersions()[index]?.project;
  if (!snapshot) return;
  const currentIndex = state.projects.findIndex((p) => p.id === state.projectId);
  state.projects[currentIndex] = normalizeProject(snapshot);
  state.modal = null; save(); render(); toast("已恢复历史版本");
}
function exportProject() {
  saveEditor();
  const blob = new Blob([JSON.stringify(project(), null, 2)], { type: "application/json" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `${project().title}-墨境项目.json`;
  link.click();
  URL.revokeObjectURL(link.href);
}
async function syncProject() {
  saveEditor(); createVersion("云端备份前");
  try {
    const result = await fetch("/api/projects/sync", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ project: project() }) }).then((res) => res.json());
    if (!result.ok && !result.syncedAt) throw new Error(result.error || "备份失败");
    toast("已备份到服务器，并保留本机版本");
  } catch (error) { toast(`备份失败：${error.message}`); }
}
function fillTaskCard() {
  const p = project(), c = chapter();
  const names = p.assets.filter((a) => a.type === "character").slice(0, 2).map((a) => a.name);
  c.taskCard = {
    goal: `围绕“${c.title.replace(/^第.+?章\s*/, "")}”推动主线，并让主角作出不可撤回的选择`,
    requiredEvents: ["出现明确冲突", "获得一条新线索", "主角为选择付出代价"],
    requiredCharacters: names,
    forbidden: ["无代价解决危机", "违反已锁定世界规则"],
    foreshadow: "埋下一条可在三章后回收的细节",
    hook: "以新身份、新威胁或倒计时收尾"
  };
  save(); render(); toast("章节任务卡已生成");
}

function makeQualityIssue(message, query = "", type = "general") {
  return { message, query: String(query || "").trim(), type };
}

function normalizeQualityIssues(issues = []) {
  return (Array.isArray(issues) ? issues : []).map((issue) => {
    if (typeof issue === "string") return makeQualityIssue(issue);
    return makeQualityIssue(issue.message || "未命名问题", issue.query || "", issue.type || "general");
  });
}

function runQualityCheck() {
  const c = chapter(), text = c.content || "", task = c.taskCard || {};
  const issues = [];
  const target = state.aiDraftConfig.words || 1500;
  if (countText(text) < Math.min(800, target * 0.75)) issues.push(makeQualityIssue("正文偏短", text.slice(Math.max(0, text.length - 80)), "length"));
  if (task.goal && !task.goal.split(/[，。、“”]/).filter((x) => x.length >= 2).some((x) => text.includes(x))) issues.push(makeQualityIssue("本章目标体现不足", task.goal, "goal"));
  (task.requiredEvents || []).forEach((item) => { if (!text.includes(item)) issues.push(makeQualityIssue(`待确认事件：${item}`, item, "missing-event")); });
  (task.requiredCharacters || []).forEach((item) => { if (!text.includes(item)) issues.push(makeQualityIssue(`人物未出现：${item}`, item, "missing-character")); });
  (task.forbidden || []).forEach((item) => { if (text.includes(item)) issues.push(makeQualityIssue(`触发禁止项：${item}`, item, "forbidden")); });
  const paragraphs = text.split(/\n+/).map((x) => x.trim()).filter((x) => x.length > 30);
  const seen = new Set();
  const duplicate = paragraphs.find((paragraph) => seen.has(paragraph) || !seen.add(paragraph));
  if (duplicate) issues.push(makeQualityIssue("存在重复段落", duplicate, "repeat"));
  if (task.hook && !/[！？…]$/.test(text.trim())) issues.push(makeQualityIssue("结尾钩子力度不足", text.slice(Math.max(0, text.length - 120)), "hook"));
  c.qualityReport = { score: Math.max(0, 100 - issues.length * 12), issues, checkedAt: Date.now() };
  save(); toast(`质量检查完成：${c.qualityReport.score} 分`);
}

function jumpQualityIssue(index) {
  const c = chapter();
  const issue = normalizeQualityIssues(c?.qualityReport?.issues || [])[index];
  const editor = $("#chapterEditor");
  if (!issue || !editor) return;
  const text = editor.value || "";
  let query = issue.query;
  let at = query ? text.indexOf(query) : -1;
  if (at < 0 && query.length > 20) {
    query = query.slice(0, 20);
    at = text.indexOf(query);
  }
  if (at < 0) return toast("这个问题没有可自动定位的原文，请按提示人工补写或调整");
  editor.focus();
  editor.setSelectionRange(at, Math.min(text.length, at + query.length));
  const ratio = at / Math.max(1, text.length);
  editor.scrollTop = Math.max(0, ratio * (editor.scrollHeight - editor.clientHeight));
  toast(`已定位：${issue.message}`);
}
function auditBible() {
  const b = project().bible;
  const issues = [];
  if (!b.worldRules.length) issues.push("尚未建立世界规则");
  if (!b.limitations.length) issues.push("能力缺少限制与代价");
  if (!b.timeline.length) issues.push("尚未建立时间线");
  state.aiResult = issues.length ? issues.map((x) => `• ${x}`).join("\n") : "故事圣经基础结构完整，暂未发现明显缺口。";
  toast(issues.length ? `发现 ${issues.length} 个圣经缺口` : "一致性基础检查通过");
}

function quickConfigText(q = quickWriting()) {
  const c = q.config;
  const wordPlan = quickWordTemplate(q);
  return `创作方式：${quickTextValue(c.mode)}
语言：${quickTextValue(c.language)}
受众：${quickTextValue(c.audience)}
平台：${quickTextValue(c.platform)}
篇幅：${quickTextValue(c.length)}
视角：${quickTextValue(c.pov)}
文风模式：${quickTextValue(c.styleMode)}
年代：${quickTextValue(c.era)}
固定爆款模板：${c.mode === "模板创作" ? quickTextValue(c.fixedTemplate) : "未使用"}
情节类型：${c.mode === "模板创作" ? quickTextValue(c.plotType) : "自定义"}
小说字数模板：${c.mode === "模板创作" ? wordPlan.template : "自定义"}
单篇正文目标字数：${wordPlan.words}字，可为保证完整性适当增加
世界观模板：${c.mode === "模板创作" ? quickTextValue(c.worldviewTemplate) : "自定义"}
时空背景：${quickTextValue(c.timeBackground)}
题材：${quickTextValue(c.genre)}
是否金手指：${quickTextValue(c.goldfinger)}
金手指类型：${c.goldfinger === "是" ? quickTextValue(c.goldfingerType) : "无"}
标题结构：${quickTextValue(c.titleStructure)}
男主人设：${quickTextValue(c.maleLead)}
女人设：${quickTextValue(c.femaleLead)}
反派人设：${quickTextValue(c.villain)}
情节模板：${quickTextValue(c.plotHook)}
章节数：${quickChapterCount(q)}
每章篇数：${quickPieceCount(q)}
背景：${quickTextValue(c.background) || "未填写，由AI补全"}
其他要求：${quickTextValue(c.other) || "无"}`;
}

async function aiQuickText(prompt, temperature = 0.75, maxTokens = 0) {
  const response = await fetch("/api/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt, temperature, ...(maxTokens ? { maxTokens } : {}) })
  }).then((res) => res.json());
  if (response.error) throw new Error(response.error);
  return response.demo ? "" : (response.content || "").trim();
}

function syncBookIdeaInputs() {
  const idea = state.bookIdea;
  idea.genre = [...(idea.genreValues || []), idea.genreOther || ""].filter(Boolean).join("、");
  idea.style = [...(idea.styleValues || []), idea.styleOther || ""].filter(Boolean).join("、");
  idea.premise = $("#ideaPremise")?.value.trim() ?? idea.premise;
}

function localCorePremise(idea) {
  const genre = idea.genre || "架空世界";
  const style = idea.style || "强冲突";
  const samples = [
    "在" + genre + "世界里，主角一直被当成最没用的人，却能把别人丢弃的失败经历炼成新能力。开局他捡走宿敌的一次惨败，发现其中藏着足以推翻现有秩序的证据；能力越强，他也越可能继承失败者留下的代价。整体采用" + style + "风格。",
    "主角在" + genre + "世界经营一家只在午夜出现的小店，客人可以用最珍贵的记忆交换愿望。开局第一位客人竟是三天后的主角本人，他要求现在的自己绝不能完成一笔即将上门的交易；故事以" + style + "风格展开。",
    "所有人都以为主角依靠一种稀有能力崛起，只有他知道那份力量每天都会篡改一条世界规则。开局他赢下第一次胜利后，最亲近的人却不再记得他的名字；他必须利用规则反击，同时阻止自己被世界彻底删除，保持" + style + "的叙事气质。",
    "在" + genre + "世界，主角能提前看见每个选择最坏的结果，却从来不知道哪条路能赢。开局全城都认定他制造了一场灾难，他只能故意选择看似最糟的方案，把真正的幕后者逼入更坏的结局；故事强调" + style + "与连续反转。"
  ];
  return samples[(Math.max(1, idea.premiseSerial) - 1) % samples.length];
}

async function generateCorePremise() {
  syncBookIdeaInputs();
  const idea = state.bookIdea;
  const previous = idea.premise.trim();
  idea.premiseSerial = Number(idea.premiseSerial || 0) + 1;
  const prompt = [
    "你是中文网文立项编辑。生成一个可以支撑长篇连载的原创核心脑洞。",
    "题材：" + (idea.genre || "不限") + "；风格：" + (idea.style || "强冲突、有追读感") + "。",
    "必须在一段话内写清：主角初始处境、独特机制、开局冲突、能力限制或代价、长线悬念。控制在100至180字，不要写书名、标题、分析或项目符号，不要照抄现成作品。",
    previous ? "作者不满意上一版，必须更换主角身份、核心机制和开局事件，不能只换词。上一版：" + previous : "",
    "仅输出核心脑洞正文。"
  ].filter(Boolean).join("\n");
  startBookIdeaProgress("core");
  try {
    const raw = await aiQuickText(prompt, 0.92);
    idea.premise = (raw || localCorePremise(idea)).replace(/^["“]|["”]$/g, "").trim();
    idea.premiseDemo = !raw;
    idea.options = [];
    idea.selected = -1;
    idea.demo = false;
    if (!raw) toast(previous ? "已换一条本地脑洞示例" : "已生成本地脑洞示例");
  } catch (error) {
    toast("脑洞生成失败：" + error.message + "。你可以再次刷新或手动填写。");
  } finally {
    await keepBookIdeaProgressVisible(2700);
    stopBookIdeaProgress();
    render();
  }
}

function localBookIdeaOptions(idea) {
  const genre = idea.genre || "新故事";
  const premise = idea.premise.replace(/[。！？!?]+$/, "");
  const tone = idea.style || "你选定的风格";
  return [
    { title: `${genre}：开局就要翻盘`, summary: `从“${premise}”开场，第一章立刻让主角遭遇公开失利，并在同一场冲突里展示反击能力。故事按“受压—行动—结果—更大麻烦”推进，每次胜利都留下下一章必须解决的具体问题；整体保持${tone}。`, mechanism:"即时兑现核心能力，章节以冲突和追读钩子驱动", conflict:"主角必须在公开失利后迅速扭转局面，反击又招来更强的对手。" },
    { title: `${genre}：从起点改写规则`, summary: `保留“${premise}”的核心，但把能力拆成触发条件、限制、代价与升级阶梯。前期解决生存问题，中期卷入势力竞争，后期发现能力与世界秩序的关系，让同一个矛盾支撑长篇成长；人物关系和${tone}语气贯穿其中。`, mechanism:"能力规则与代价逐层展开，适合长线成长", conflict:"主角每次使用能力都会换来新的代价，并逐步触碰世界规则。" },
    { title: `${genre}：真正的规则另有其人`, summary: `先让读者相信“${premise}”，随后在开局安排一件无法用原设定解释的事件：主角以为自己掌握了规则，却发现规则也在利用自己。爽点来自一次次反向验证与身份翻转，同时保持${tone}，把“真相究竟是什么”变成持续追读的悬念。`, mechanism:"反转原始机制，以规则真相推动悬念", conflict:"主角依赖的能力可能是陷阱，必须在获利与查清真相之间选择。" }
  ];
}

function parseBookIdeaOptions(raw) {
  const clean = String(raw || "").replace(/^```(?:json)?\s*|\s*```$/g, "").trim();
  let data;
  try { data = JSON.parse(clean); }
  catch {
    const match = clean.match(/\{[\s\S]*\}/);
    if (!match) throw new Error("推演结果不是可读取的 JSON");
    data = JSON.parse(match[0]);
  }
  const options = Array.isArray(data) ? data : data.options;
  if (!Array.isArray(options) || options.length !== 3
    || options.some(item => !String(item?.title || "").trim() || !String(item?.summary || "").trim())) {
    throw new Error("推演结果缺少三条完整方案");
  }
  return options.map(item => ({
    title:String(item.title).trim().slice(0, 90),
    summary:String(item.summary).trim().slice(0, 1000),
    mechanism:String(item.mechanism || "").trim().slice(0, 300),
    conflict:String(item.conflict || "").trim().slice(0, 300)
  }));
}

async function generateBookIdeas() {
  syncBookIdeaInputs();
  const idea = state.bookIdea;
  if (!idea.premise) return toast("先写下核心脑洞");
  const previous = idea.options.map(item => item.title).join("；");
  const prompt = `你是中文网文立项编辑。根据作者输入生成恰好三条真正不同的新书方向，不要照抄任何现成作品。
题材：${idea.genre || "由内容判断"}；风格：${idea.style || "由内容判断"}；核心脑洞：${idea.premise}
方向1：高钩子快节奏。开局兑现卖点，冲突与爽点清晰。
方向2：长线成长。能力机制、限制、代价和势力升级能支撑长篇。
方向3：差异化脑洞。改变对核心机制的理解，有意外但合理的反转。
三条方案的主角身份、开局冲突、能力机制、爽点路径、情绪、长线展开必须明显不同。保留作者的核心脑洞，不要只改标题。
${previous ? `上一轮标题：${previous}。本轮不要重复或仅改同义词。` : ""}
仅输出合法 JSON，不要 Markdown：{"options":[{"title":"书名","summary":"100-220字具体梗概","mechanism":"核心机制一句话","conflict":"长线核心冲突一句话"},{"title":"...","summary":"...","mechanism":"...","conflict":"..."},{"title":"...","summary":"...","mechanism":"...","conflict":"..."}]}`;
  startBookIdeaProgress("routes");
  try {
    const raw = await aiQuickText(prompt, 0.85);
    idea.options = raw ? parseBookIdeaOptions(raw) : localBookIdeaOptions(idea);
    idea.demo = !raw;
    idea.selected = -1;
    if (!raw) toast("当前为演示模式，已生成三条本地结构示例");
  } catch (error) {
    toast(`推演失败：${error.message}。请重试或手动建书。`);
  } finally {
    await keepBookIdeaProgressVisible(4600);
    stopBookIdeaProgress(); render();
  }
}

function quickVariantInstruction(q, scope, previous = "") {
  q.generationSerial = Number(q.generationSerial || 0) + 1;
  const nonce = `${scope}-${q.generationSerial}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  const last = String(previous || "").trim().slice(0, 900);
  return `\n\n【本次重生成要求】\n生成批次码：${nonce}\n这不是继续复述旧答案，而是一次新的创作。必须在核心设定不变的前提下，主动改变切入角度、事件组合、人物压力、反转方式、标题表达和爽点设计。\n${last ? `上一次内容摘录如下，禁止照抄、近似复述或只换同义词：\n${last}` : "如果没有上一次内容，也要避免模板化套话，输出要有新的具体事件与细节。"}`;
}

function quickSelectedDirection(q = quickWriting()) {
  const selected = q.selectedDirection || "";
  return (q.directions || []).find((item) => item.title === selected) || null;
}

function quickSelectedDirectionText(q = quickWriting()) {
  const item = quickSelectedDirection(q);
  if (!item) return q.selectedDirection || "未选择";
  return `标题：${item.title}
摘要：${item.summary || "无"}
标签：${(item.tags || []).join("、") || "无"}
硬性约束：后续章节、细纲和正文必须沿着这个走向推进，不得擅自切换为其他走向；可以补充细节，但不能改变主线方向、核心冲突、爽点类型和情绪承诺。`;
}

function parseJsonBlock(text, fallback) {
  try {
    const block = text.match(/```json\s*([\s\S]*?)```/i)?.[1] || text.match(/(\[[\s\S]*\]|\{[\s\S]*\})/)?.[1] || text;
    return JSON.parse(block);
  } catch {
    return fallback;
  }
}

function fallbackQuickInspiration(q) {
  const c = q.config;
  const wordPlan = quickWordTemplate(q);
  return `标签：
- 人设：一个被现实逼到退无可退的主角，表面冷静，内里压着强烈不甘；反派与主角目标相撞，不能只是坏，要有自己的理由。
- 情节：开篇用一次无法回避的危机拉住读者，中段用选择与代价升级，后段揭开更大的世界真相。
- 年代：${c.era}
- 题材：${c.genre}
- 受众：${c.audience} / ${c.platform}
- 视角：${c.pov}
- 篇幅：${c.length}，规划 ${quickChapterCount(q)} 章，每章 ${quickPieceCount(q)} 篇；正文模板为${wordPlan.template}
- 文风模式：${c.styleMode}
- 背景设定：${c.background || "以一个强冲突世界为底盘，先写人物困境，再逐步放大格局。"}
- 人物设计：主角有明确欲望和底线，反派与主角共享同一核心问题但选择相反答案，配角承担关系拉扯和信息差。
- 分卷设计：第一卷立住危机与爽点，第二卷扩大资源与敌人，第三卷回收真相并迫使主角做选择。`;
}

function fallbackQuickDirections(q) {
  const c = q.config;
  const wordPlan = quickWordTemplate(q);
  const detail = wordPlan.words >= 2300
    ? "前期立住危机与人物欲望，中段持续扩大敌人和资源，后段用一次真相反转把主角推到更难选择里。每个阶段都要有看得见的胜利，也要留下更深的代价。"
    : "先给强冲突，再给反击点，最后用新危机留住追读。";
  return [
    { title: "从死局反杀到资源扩张", summary: `主角先解决身边最迫切的危机，再用${c.goldfinger === "是" ? "金手指" : "谋略与资源"}撬开更大的局。${detail}`, tags: ["强开局", "复仇", "升级"] },
    { title: "从身份误解到真相逼近", summary: `主角被误判、被利用、被推上台前，随着调查深入发现反派背后还有更大的秩序。${detail}`, tags: ["身份梗", "悬念", "反转"] },
    { title: "从小目标胜利到世界规则崩塌", summary: `每次胜利都带来新代价，最终主角发现自己解决的不是一件事，而是一整套旧规则。${detail}`, tags: ["格局放大", "代价", "长线"] }
  ];
}

function fallbackQuickUnit(q, index) {
  const selected = q.selectedDirection || "从死局反杀到资源扩张";
  const names = ["危机入局", "第一次反击", "暗线浮出", "关系翻转", "更大敌人", "阶段收束", "资源扩张", "身份试探", "代价显形", "真相逼近"];
  return {
    title: `第${index + 1}章：${names[index % names.length]}`,
    大故事线: `本章围绕“${selected}”推进第${index + 1}个完整阶段。开头要承接上一章留下的压力，让主角面对一个不能绕开的现实问题；中段通过试探、交锋和误判不断扩大冲突；后段让主角取得阶段性结果，但这个结果不能让问题彻底结束，而是露出下一章必须处理的新代价或新线索。`,
    篇目分析: quickPieceAnalysisLines(q, index),
    卷内作用: `本章是整体连续结构里的第${index + 1}个推进点，作用不是单独制造一个事件，而是把前面已经建立的矛盾继续向前推。它需要完成阶段目标、强化主角处境、更新读者对敌我关系的判断，并在结尾给下一章留下明确入口。`,
    主角动机: index === 0 ? "主角必须先稳住局面、保住主动权，否则他会在故事一开始就失去继续选择的资格。本章要让他的行动动机具体落地，不是抽象地想赢，而是眼前有必须解决的人、事、资源或危机。" : "主角要利用上一章得到的线索、资源或关系继续推进主线。如果他停下，上一章的胜利就会变成空账，敌人也会趁机夺回主动权，所以他必须冒着新的风险向前走。",
    核心设计: "本章核心设计是连续递进：先给读者一个清晰目标，再制造比目标更大的阻力；主角每解决一层问题，都要暴露下一层更难的真相。爽点不能孤立存在，必须和信息差、人物关系、后续伏笔连在一起。",
    新增人物: "",
    爽点: index === 0 ? "爽点集中在绝境反手破局：主角被压到看似没有退路时，用提前准备、判断力或特殊资源打破对方认知，让对手第一次意识到他不是可以随意摆布的人。" : "爽点集中在反击、夺资源和揭穿阴谋：主角不只是赢一场口舌，而是拿到实际收益，让敌人的布置反过来成为自己继续推进的踏脚石。"
  };
}

function fallbackQuickUnits(q) {
  return Array.from({ length: quickChapterCount(q) }, (_, index) => fallbackQuickUnit(q, index));
}

function fallbackQuickOutlineChapter(q, index) {
  const unit = normalizeQuickUnit((q.units || [])[index] || fallbackQuickUnit(q, index), q, index);
  return `## ${unit.title || `第${index + 1}章：阶段推进`}
### 大故事线
${unit.大故事线 || ""}

### 承上启下
本章承接上一章留下的压力和线索，先让主角处理一个必须立刻面对的问题，再把问题引向更深层的矛盾。结尾不能把冲突完全解决，而要给下一章留下明确入口。

### 核心冲突
${unit.核心设计 || ""}

### 结尾钩子
本章结尾用新的证据、新的敌意、新的条件或新的倒计时收束，让读者清楚知道下一章必须继续追下去。

${normalizePieceAnalysis(unit.篇目分析, q, index).split(/\n+/).map((line, pieceIndex) => {
  const body = line.replace(/^第?\d+篇[：:、\s]*/, "").trim();
  const title = body.match(/《([^》]+)》/)?.[1] || body.split(/[。；;]/)[0].replace(/[《》]/g, "").slice(0, 18) || "篇章推进";
  return `### 第${pieceIndex + 1}篇：${title}
篇内目标：承接本章大故事线中的第${pieceIndex + 1}个推进点，让主角完成一个可感知的小目标。
关键冲突：${body} 本篇必须出现阻力、误判或代价，推动人物行动，而不是只交代信息。
人物情绪变化：从压力、试探或犹豫，推进到更明确的选择，让人物关系或主角认知发生可见变化。
爽点/钩子：让主角通过判断、资源、能力或关系完成一次小反击，同时留下下一篇必须回应的问题。
本篇作用：本篇服务本章整体推进，不单独游离；它既完成一个阶段动作，也把读者推向下一篇。`;
}).join("\n\n")}

新增人物：
${sanitizeNewCharacters(unit.新增人物) || "本章没有已命名新增人物则保持为空，后续正文不强行塞人。"}

爽点/钩子：
${unit.爽点 || ""}`;
}

function fallbackQuickOutline(q) {
  const units = ensureQuickUnits(q.units.length ? q.units : fallbackQuickUnits(q), q);
  return units.map((_, index) => fallbackQuickOutlineChapter(q, index)).join("\n\n");
}

function fallbackQuickDraft(q) {
  const units = ensureQuickUnits(q.units.length ? q.units : fallbackQuickUnits(q), q);
  return units.map((unit, chapterIndex) => `${unit.title || `第${chapterIndex + 1}章`}

${normalizePieceAnalysis(unit.篇目分析, q, chapterIndex).split(/\n+/).map((line, pieceIndex) => {
  const title = line.replace(/^第?\d+篇[：:、\s]*/, "").split(/[。；;]/)[0].replace(/[《》]/g, "").trim() || "未命名篇章";
  return `第${pieceIndex + 1}篇：${title}

夜色压下来时，主角终于意识到，眼前这件事从来不是一次偶然。

这一篇承接“${unit.title || `第${chapterIndex + 1}章`}”的大故事线：${unit.大故事线 || "主角必须在压力中推进目标。"}

他站在原地没有退，指尖却慢慢收紧。那些人以为他已经无路可走，以为只要把证据、退路和最后一点体面全部拿走，他就会像过去那样沉默。可本篇的真正作用，是让主角在当前小目标里完成一次清晰推进：${line.replace(/^第?\d+篇[：:、\s]*/, "")}

他不能输。不是为了证明自己多厉害，也不是为了把所有人踩在脚下，而是因为这一章的动机已经压到眼前：${unit.主角动机 || "如果他不行动，就会失去继续选择的资格。"}

于是他抬起头，看向最先笑出来的那个人。

“你们准备得很充分。”他说，“可惜，少算了一件事。”

下一秒，局势开始倒转。但这场胜利没有结束一切，它只把下一篇的问题推到了台前。`;
}).join("\n\n")}`).join("\n\n");
}

function quickPieceTitles(unit, unitIndex) {
  const raw = (unit.篇目分析 || "").split(/\n+/).map((line) => line.trim()).filter(Boolean);
  const q = quickWriting();
  const total = quickPieceCount(q);
  const fallbackLines = quickPieceAnalysisLines(q, unitIndex).split(/\n+/);
  const lines = (raw.length ? raw : fallbackLines).slice(0, total);
  while (lines.length < total) lines.push(fallbackLines[lines.length] || `第${lines.length + 1}篇：推进本章剧情`);
  return lines.map((line, index) => {
    const title = line.replace(/^第?\d+篇[：:、\s]*/, "").split(/[。；;]/)[0].trim();
    return `第${unitIndex + 1}章 第${index + 1}篇：${title || "未命名篇章"}`;
  });
}

function splitHeaderSections(text, regex) {
  const source = String(text || "");
  const matches = [...source.matchAll(regex)];
  return matches.map((match, index) => ({
    number: Number(match[1]) || index + 1,
    header: match[0].trim(),
    start: match.index,
    end: index + 1 < matches.length ? matches[index + 1].index : source.length,
    content: source.slice(match.index, index + 1 < matches.length ? matches[index + 1].index : source.length).trim()
  }));
}

function splitQuickDraftByPiece(q, units) {
  const text = String(q.draft || "").trim();
  const pieces = new Map();
  if (!text) return pieces;
  const chapterSections = splitHeaderSections(text, /^#{0,4}\s*第\s*(\d+)\s*章[：:、\s].*$/gm);
  const sections = chapterSections.length ? chapterSections : [{ number: 1, content: text }];
  sections.forEach((section) => {
    const pieceSections = splitHeaderSections(section.content, /^#{0,5}\s*(?:第\s*\d+\s*章\s*)?第\s*(\d+)\s*篇[：:、\s].*$/gm);
    if (pieceSections.length) {
      pieceSections.forEach((piece) => pieces.set(`${section.number}-${piece.number}`, piece.content));
    } else if (section.number === 1) {
      pieces.set("1-1", section.content);
    }
  });
  if (!pieces.size) pieces.set("1-1", text);
  return pieces;
}

function quickPieceKey(chapterIndex, pieceIndex) {
  return `${chapterIndex + 1}-${pieceIndex + 1}`;
}

function quickTotalPieces(q = quickWriting()) {
  return quickChapterCount(q) * quickPieceCount(q);
}

function quickDraftPieceMap(q = quickWriting()) {
  const pieces = new Map();
  (q.draftPieces || []).forEach((piece) => {
    const normalized = normalizeQuickDraftPiece(piece);
    if (normalized?.content) pieces.set(quickPieceKey(normalized.chapterIndex, normalized.pieceIndex), normalized);
  });
  if (!pieces.size && String(q.draft || "").trim()) {
    splitQuickDraftByPiece(q, q.units || []).forEach((content, key) => {
      const [chapterNo, pieceNo] = key.split("-").map((item) => Number(item));
      pieces.set(key, normalizeQuickDraftPiece({
        chapterIndex: Math.max(0, chapterNo - 1),
        pieceIndex: Math.max(0, pieceNo - 1),
        title: `第${chapterNo}章 第${pieceNo}篇`,
        content
      }));
    });
  }
  return pieces;
}

function quickGeneratedPieceCount(q = quickWriting()) {
  return quickDraftPieceMap(q).size;
}

function quickNextDraftTarget(q = quickWriting()) {
  const pieces = quickDraftPieceMap(q);
  const chapterTotal = quickChapterCount(q);
  const pieceTotal = quickPieceCount(q);
  for (let chapterIndex = 0; chapterIndex < chapterTotal; chapterIndex += 1) {
    for (let pieceIndex = 0; pieceIndex < pieceTotal; pieceIndex += 1) {
      if (!pieces.has(quickPieceKey(chapterIndex, pieceIndex))) return { chapterIndex, pieceIndex };
    }
  }
  return null;
}

function quickPieceTitleFromUnit(unit, chapterIndex, pieceIndex, q = quickWriting()) {
  const line = normalizePieceAnalysis(unit?.篇目分析, q, chapterIndex).split(/\n+/)[pieceIndex] || "";
  const body = line.replace(/^第?\d+篇[：:、\s]*/, "").trim();
  const title = body.match(/《([^》]+)》/)?.[1] || body.split(/[。；;]/)[0].replace(/[《》]/g, "").trim();
  return title || `第${chapterIndex + 1}章第${pieceIndex + 1}篇`;
}

function quickDraftFromPieces(q = quickWriting()) {
  const pieces = quickDraftPieceMap(q);
  const units = ensureQuickUnits(q.units?.length ? q.units : fallbackQuickUnits(q), q);
  const chapterTotal = quickChapterCount(q);
  const pieceTotal = quickPieceCount(q);
  return Array.from({ length: chapterTotal }, (_, chapterIndex) => {
    const unit = units[chapterIndex] || fallbackQuickUnit(q, chapterIndex);
    const lines = [`## ${unit.title || `第${chapterIndex + 1}章`}`];
    for (let pieceIndex = 0; pieceIndex < pieceTotal; pieceIndex += 1) {
      const piece = pieces.get(quickPieceKey(chapterIndex, pieceIndex));
      if (!piece) continue;
      lines.push(piece.content);
    }
    return lines.join("\n\n");
  }).filter((text) => /第\s*\d+\s*篇/.test(text)).join("\n\n");
}

function quickProjectTitle(q) {
  const template = quickValueList(q.config.fixedTemplate).filter((item)=>item !== "随机")[0];
  const genre = quickValueList(q.config.genre).filter((item)=>item !== "随机")[0];
  const direction = q.selectedDirection || q.directions?.[0]?.title;
  return `${template || genre || direction || "快速创作故事"}-${new Date().toLocaleString().replace(/[/:]/g, "-")}`;
}

function saveQuickResultAsProject() {
  const q = quickWriting();
  const draftPieces = quickDraftPieceMap(q);
  const completedCount = draftPieces.size;
  const totalCount = quickTotalPieces(q);
  const missingCount = Math.max(0, totalCount - completedCount);
  if (!completedCount) return toast("还没有已完成正文篇，不能保存为项目");
  const units = ensureQuickUnits(q.units.length ? q.units : fallbackQuickUnits(q), q);
  const chapters = [];
  const acts = units.map((unit, unitIndex) => {
    const pieceTitles = quickPieceTitles(unit, unitIndex);
    const chapterIds = pieceTitles.map((title, pieceIndex) => {
      const id = uid();
      const pieceContent = draftPieces.get(`${unitIndex + 1}-${pieceIndex + 1}`)?.content || "";
      chapters.push({
        id,
        title,
        content: pieceContent,
        status: pieceContent ? "快写初稿" : "待写",
        summary: `${unit.title || `第${unitIndex + 1}章`}｜${pieceIndex === 0 ? unit.大故事线 || unit.卷内作用 || "" : unit.篇目分析 || ""}`.slice(0, 240),
        updatedAt: Date.now()
      });
      return id;
    });
    return {
      title: unit.title || `第${unitIndex + 1}章`,
      summary: unit.大故事线 || unit.卷内作用 || "",
      chapters: pieceTitles,
      chapterIds
    };
  });
  const title = quickProjectTitle(q);
  const outlineActs = acts.map((act) => ({ title: act.title, summary: act.summary, chapters: act.chapters }));
  const p = normalizeProject({
    id: uid(),
    title,
    logline: q.selectedDirection || (q.inspiration || "").split(/\n+/).find(Boolean) || "由快速创作生成的故事项目。",
    genre: quickValueList(q.config.genre).filter((item)=>item !== "随机").slice(0, 4),
    era: quickTextValue(q.config.era),
    tone: quickTextValue(q.config.styleMode),
    pov: quickTextValue(q.config.pov),
    platform: quickTextValue(q.config.platform),
    targetWords: quickChapterCount(q) * quickPieceCount(q) * quickWordTemplate(q).words,
    chapterWords: quickWordTemplate(q).words,
    visualStyle: quickTextValue(q.config.worldviewTemplate) || quickTextValue(q.config.timeBackground) || "通用网文视觉",
    storyboardStyle: "手绘电影风",
    progress: 1,
    updatedAt: Date.now(),
    genesis: {
      creationMode: "quick",
      quickConfig: q.config,
      inspiration: q.inspiration,
      selectedDirection: q.selectedDirection,
      quickChapters: units,
      fineOutline: q.fineOutline,
      draftPieces: q.draftPieces || [],
      completedPieces: completedCount,
      missingPieces: missingCount
    },
    bible: {
      rules: `快速创作方式：${quickTextValue(q.config.mode)}\n固定模板：${quickTextValue(q.config.fixedTemplate)}\n世界观：${quickTextValue(q.config.worldviewTemplate)}\n其他要求：${quickTextValue(q.config.other)}`,
      locked: ["由快速创作生成，后续写作应遵守已确认的灵感、走向、章节规划与细纲"],
      worldRules: [quickTextValue(q.config.worldviewTemplate), quickTextValue(q.config.timeBackground), quickTextValue(q.config.background)].filter(Boolean),
      limitations: q.config.goldfinger === "是" ? [`金手指类型：${quickTextValue(q.config.goldfingerType)}`] : []
    },
    outline: { locked: true, premise: q.selectedDirection || "快速创作生成的大纲", acts: outlineActs },
    chapters,
    volumes: acts.map((act) => ({ id: uid(), title: act.title, summary: act.summary, chapterIds: act.chapterIds })),
    assets: [],
    storyboards: {},
    storyboardAssets: {}
  });
  state.projects.unshift(p);
  state.quickWriting = normalizeQuickWriting();
  state.quickExpanded = {};
  state.view = "quick";
  state.projectId = null;
  state.chapterId = null;
  save();
  render();
  toast(`已保存已完成篇：${completedCount}/${totalCount} 篇，缺失 ${missingCount} 篇。项目已进入项目中心`);
}

async function generateQuickInspiration() {
  const q = quickWriting();
  const previous = q.inspiration;
  const variant = quickVariantInstruction(q, "inspiration", previous);
  resetQuickAfter(q, "inspiration");
  state.busy = true; render();
  try {
    const prompt = `你是爆款网文策划编辑。根据核心要求生成“小说灵感”，必须适合长期展开，不能只给空泛口号。
输出中文，不要Markdown表格。必须包含这些标签，且每个标签都写实用内容：
人设、情节、年代、题材、受众、视角、篇幅、文风模式、背景设定、人物设计、分卷设计。
要求：不要固定写“闯入新世界”“开局就是死局”；根据用户选择变化；如果用户没有设定的内容，你可以自由发挥，但要和已填要求连贯。

核心要求：
${quickConfigText(q)}${variant}`;
    q.inspiration = await aiQuickText(prompt, 0.82) || fallbackQuickInspiration(q);
    q.step = "inspiration";
    save(); toast("小说灵感已生成");
  } catch (error) {
    q.inspiration = fallbackQuickInspiration(q);
    q.step = "inspiration";
    save(); toast(`AI生成失败，已使用本地兜底：${error.message}`);
  } finally {
    state.busy = false; render();
  }
}

async function prepareQuickDirections() {
  const q = quickWriting();
  if (!q.inspiration.trim()) return toast("请先生成或填写灵感");
  q.step = "direction";
  save();
  return render();
}

function goQuickUnit() {
  const q = quickWriting();
  if (!q.inspiration.trim()) return toast("请先生成或填写灵感");
  if (!q.selectedDirection) return toast("请先选择一个走向");
  q.step = "unit";
  save();
  return render();
}

function goQuickOutline() {
  const q = quickWriting();
  const chapterTotal = quickChapterCount(q);
  q.units = normalizeExistingQuickUnits(q.units, q);
  if (q.units.length < chapterTotal) return toast(`章节规划还没完成：当前 ${q.units.length}/${chapterTotal} 章`);
  q.step = "outline";
  save();
  return render();
}

function goQuickDraft() {
  const q = quickWriting();
  if (!q.fineOutline.trim()) return toast("请先生成或填写细纲");
  if (quickOutlineGeneratedCount(q) < quickChapterCount(q)) return toast(`细纲还没完成：当前 ${quickOutlineGeneratedCount(q)}/${quickChapterCount(q)} 章`);
  q.step = "draft";
  save();
  return render();
}

async function generateQuickDirections() {
  const q = quickWriting();
  const previous = JSON.stringify(q.directions || []);
  const variant = quickVariantInstruction(q, "directions", previous);
  resetQuickAfter(q, "direction");
  const wordPlan = quickWordTemplate(q);
  state.busy = true; render();
  try {
    const prompt = `根据下面“核心要求”和“小说灵感”，生成 5 个可选择的剧情走向。
输出严格 JSON 数组，不要解释。格式：
[{"title":"走向标题","summary":"按照小说字数模板要求的详细度说明主线如何推进","tags":["标签1","标签2","标签3"]}]
小说字数模板：${wordPlan.template}
走向详细度：${wordPlan.detail}
每个 summary 字数建议：${wordPlan.summaryRange}
要求：每个走向必须明显不同；不能套用固定标题；必须能继续生成章节规划；字数模板越长，走向越要写清阶段、人物、冲突、爽点、代价与伏笔。

核心要求：
${quickConfigText(q)}

小说灵感：
${q.inspiration}${variant}`;
    q.directions = parseJsonBlock(await aiQuickText(prompt, 0.78), fallbackQuickDirections(q));
    if (!Array.isArray(q.directions) || !q.directions.length) q.directions = fallbackQuickDirections(q);
    q.selectedDirection = q.directions[0]?.title || "";
    q.step = "direction";
    save(); toast("剧情走向已生成");
  } catch (error) {
    q.directions = fallbackQuickDirections(q);
    q.selectedDirection = q.directions[0]?.title || "";
    q.step = "direction";
    save(); toast(`AI生成失败，已使用本地兜底：${error.message}`);
  } finally {
    state.busy = false; render();
  }
}

async function generateQuickUnitAt(index) {
  const q = quickWriting();
  const chapterTotal = quickChapterCount(q);
  const pieceTotal = quickPieceCount(q);
  const previousUnits = normalizeExistingQuickUnits(q.units, q).slice(Math.max(0, index - 2), index);
  const previousSameIndex = (q.units || [])[index] ? JSON.stringify((q.units || [])[index]) : "";
  const variant = quickVariantInstruction(q, `chapter-${index + 1}`, previousSameIndex);
  const prompt = `根据核心要求、灵感和已选走向，只生成“第${index + 1}章”的章节规划。
输出严格 JSON 对象，不要解释，不要数组。
对象格式：
{"title":"第${index + 1}章：章节标题","大故事线":"不少于120字，这一章完整的大故事线，说明起承转合和上下章连接","篇目分析":"第1篇：《篇标题》：不少于60字，说明本篇发生什么、服务本章什么作用、如何把读者推向下一篇。\\n第2篇：《篇标题》：不少于60字，说明本篇发生什么、服务本章什么作用、如何把读者推向下一篇。","卷内作用":"不少于100字，说明这一章在整本书/本卷中的结构功能和连续性作用","主角动机":"不少于80字，说明主角为什么必须在这一章行动，失败会失去什么","核心设计":"不少于100字，说明本章核心冲突、反转、信息差和长线伏笔","新增人物":"只填写本章首次出现且已经有明确姓名的人物；如果没有明确姓名，必须留空","爽点":"不少于80字，写清具体爽点、情绪点、打脸点或追读钩子"}
硬性要求：
1. 这是全书 ${chapterTotal} 章中的第 ${index + 1} 章，必须承接前文，并为后续章节留下接口。
2. “篇目分析”必须严格包含 ${pieceTotal} 篇，从“第1篇”写到“第${pieceTotal}篇”。
3. 每一篇都必须有《篇标题》，并写清“本篇内容 + 本篇作用 + 与下一篇的连接”，不能只写几个字。
4. 大故事线、卷内作用、主角动机、核心设计、爽点都要详细描述，保持整体连续性。
5. 新增人物没有明确姓名就留空，不要写“阶段对手、关键盟友、信息提供者”这种占位词。
6. 章节标题要有网文追读感，不能模板化。

核心要求：
${quickConfigText(q)}

小说灵感：
${q.inspiration}

已选走向：
${quickSelectedDirectionText(q)}

最近已生成章节：
${previousUnits.length ? JSON.stringify(previousUnits, null, 2) : "暂无，这是章节规划的开端。"}${variant}`;
  const parsed = parseJsonBlock(await aiQuickText(prompt, 0.72), fallbackQuickUnit(q, index));
  const unit = Array.isArray(parsed) ? parsed[0] : parsed;
  return normalizeQuickUnit(unit || fallbackQuickUnit(q, index), q, index);
}

async function generateQuickNextUnit() {
  const q = quickWriting();
  if (!q.selectedDirection) return toast("请先选择一个走向");
  resetQuickAfter(q, "unit");
  q.units = normalizeExistingQuickUnits(q.units, q);
  const chapterTotal = quickChapterCount(q);
  const nextIndex = q.units.length;
  if (nextIndex >= chapterTotal) return toast("章节规划已经完整");
  state.busy = true; render();
  try {
    q.units[nextIndex] = await generateQuickUnitAt(nextIndex);
    q.step = "unit";
    save(); toast(`第${nextIndex + 1}章已生成`);
  } catch (error) {
    q.units[nextIndex] = normalizeQuickUnit(fallbackQuickUnit(q, nextIndex), q, nextIndex);
    q.step = "unit";
    save(); toast(`AI生成失败，已补入本地兜底第${nextIndex + 1}章：${error.message}`);
  } finally {
    state.busy = false; render();
  }
}

async function generateQuickUnits() {
  const q = quickWriting();
  if (!q.selectedDirection) return toast("请先选择一个走向");
  resetQuickAfter(q, "unit");
  const chapterTotal = quickChapterCount(q);
  q.units = normalizeExistingQuickUnits(q.units, q);
  if (q.units.length >= chapterTotal) return toast("章节规划已经完整");
  state.busy = true; render();
  try {
    while (q.units.length < chapterTotal) {
      const index = q.units.length;
      q.units[index] = await generateQuickUnitAt(index);
      q.step = "unit";
      save();
      render();
      await new Promise((resolve) => setTimeout(resolve, 20));
    }
    q.step = "unit";
    save(); toast("章节规划已补齐");
  } catch (error) {
    const index = q.units.length;
    if (index < chapterTotal) q.units[index] = normalizeQuickUnit(fallbackQuickUnit(q, index), q, index);
    q.step = "unit";
    save(); toast(`AI生成中断，已保留当前进度并补入本地兜底：${error.message}`);
  } finally {
    state.busy = false; render();
  }
}

async function generateQuickFineOutline() {
  const q = quickWriting();
  if (!q.units.length) return toast("请先生成章节规划");
  resetQuickAfter(q, "outline");
  const chapterTotal = quickChapterCount(q);
  q.units = normalizeExistingQuickUnits(q.units, q);
  if (q.units.length < chapterTotal) return toast(`章节规划还没完成：当前 ${q.units.length}/${chapterTotal} 章`);
  if (quickOutlineGeneratedCount(q) >= chapterTotal) return toast("细纲已经完整");
  state.busy = true; render();
  try {
    while (quickOutlineGeneratedCount(q) < chapterTotal) {
      const index = quickOutlineGeneratedCount(q);
      const outline = await generateQuickOutlineAt(index);
      q.fineOutline = [q.fineOutline.trim(), outline.trim()].filter(Boolean).join("\n\n");
      q.step = "outline";
      save();
      render();
      await new Promise((resolve) => setTimeout(resolve, 20));
    }
    q.step = "outline";
    save(); toast("细纲已补齐");
  } catch (error) {
    const index = quickOutlineGeneratedCount(q);
    q.fineOutline = [q.fineOutline.trim(), fallbackQuickOutlineChapter(q, index)].filter(Boolean).join("\n\n");
    q.step = "outline";
    save(); toast(`AI生成中断，已保留当前细纲并补入本地兜底：${error.message}`);
  } finally {
    state.busy = false; render();
  }
}

async function generateQuickNextFineOutline() {
  const q = quickWriting();
  if (!q.units.length) return toast("请先生成章节规划");
  resetQuickAfter(q, "outline");
  const chapterTotal = quickChapterCount(q);
  q.units = normalizeExistingQuickUnits(q.units, q);
  if (q.units.length < chapterTotal) return toast(`章节规划还没完成：当前 ${q.units.length}/${chapterTotal} 章`);
  const index = quickOutlineGeneratedCount(q);
  if (index >= chapterTotal) return toast("细纲已经完整");
  state.busy = true; render();
  try {
    const outline = await generateQuickOutlineAt(index);
    q.fineOutline = [q.fineOutline.trim(), outline.trim()].filter(Boolean).join("\n\n");
    q.step = "outline";
    save(); toast(`第${index + 1}章细纲已生成`);
  } catch (error) {
    q.fineOutline = [q.fineOutline.trim(), fallbackQuickOutlineChapter(q, index)].filter(Boolean).join("\n\n");
    q.step = "outline";
    save(); toast(`AI生成失败，已补入本地兜底第${index + 1}章细纲：${error.message}`);
  } finally {
    state.busy = false; render();
  }
}

async function generateQuickOutlineAt(index) {
  const q = quickWriting();
  const pieceTotal = quickPieceCount(q);
  const chapter = normalizeQuickUnit(q.units[index] || fallbackQuickUnit(q, index), q, index);
  const previousOutline = String(q.fineOutline || "").split(/^##\s*第\d+章/gm).slice(-2).join("\n").trim();
  const variant = quickVariantInstruction(q, `outline-${index + 1}`, previousOutline);
  const prompt = `根据核心要求、灵感、走向和第${index + 1}章规划，只生成这一章的详细细纲。
不要生成其他章节，不要解释创作过程。
输出必须使用以下层级：
## 第${index + 1}章：章标题
### 大故事线
### 承上启下
### 核心冲突
### 结尾钩子
### 第1篇：篇标题
篇内目标、关键冲突、人物情绪变化、爽点/钩子、结尾追读点、本篇在本章里的作用，不少于120字。

硬性要求：
1. 本章下面必须严格包含 ${pieceTotal} 篇，从“第1篇”到“第${pieceTotal}篇”。
2. 每篇细纲不少于120字，必须能直接拿去写正文。
3. 必须遵守章节规划里的篇目分析、卷内作用、主角动机、核心设计和爽点。
4. 新增人物没有明确姓名不要硬写名字；已有姓名则保持一致。
5. 只输出第${index + 1}章，不要输出全书。

核心要求：
${quickConfigText(q)}

小说灵感：
${q.inspiration}

已选走向：
${quickSelectedDirectionText(q)}

最近已有细纲：
${previousOutline || "暂无，这是细纲开端。"}

本章规划：
${JSON.stringify(chapter, null, 2)}${variant}`;
  return await aiQuickText(prompt, 0.68) || fallbackQuickOutlineChapter(q, index);
}

async function generateQuickDraftPieceAt(chapterIndex, pieceIndex) {
  const q = quickWriting();
  const chapterTotal = quickChapterCount(q);
  const pieceTotal = quickPieceCount(q);
  const wordPlan = quickWordTemplate(q);
  const units = ensureQuickUnits(q.units?.length ? q.units : fallbackQuickUnits(q), q);
  const unit = units[chapterIndex] || fallbackQuickUnit(q, chapterIndex);
  const pieceLines = normalizePieceAnalysis(unit.篇目分析, q, chapterIndex).split(/\n+/);
  const pieceLine = pieceLines[pieceIndex] || `第${pieceIndex + 1}篇：推进本章剧情`;
  const pieceTitle = quickPieceTitleFromUnit(unit, chapterIndex, pieceIndex, q);
  const outlineSections = splitHeaderSections(q.fineOutline, /^##\s*第\s*(\d+)\s*章[：:、\s].*$/gm);
  const chapterOutline = outlineSections.find((section) => section.number === chapterIndex + 1)?.content || fallbackQuickOutlineChapter(q, chapterIndex);
  const previousPiece = pieceIndex > 0 ? quickDraftPieceMap(q).get(quickPieceKey(chapterIndex, pieceIndex - 1))?.content : "";
  const previousChapter = chapterIndex > 0 ? quickDraftPieceMap(q).get(quickPieceKey(chapterIndex - 1, pieceTotal - 1))?.content : "";
  const previousText = previousPiece || previousChapter || "";
  const variant = quickVariantInstruction(q, `draft-${chapterIndex + 1}-${pieceIndex + 1}`, quickDraftPieceMap(q).get(quickPieceKey(chapterIndex, pieceIndex))?.content || "");
  const prompt = `根据下面所有已确认内容，只生成“第${chapterIndex + 1}章第${pieceIndex + 1}篇”的正文。
不要生成其他章节或其他篇，不要解释创作思路。
输出格式必须以这一行开头：
第${pieceIndex + 1}篇：${pieceTitle}

写作要求：
1. 这是全书 ${chapterTotal} 章、每章 ${pieceTotal} 篇中的第 ${chapterIndex + 1} 章第 ${pieceIndex + 1} 篇，必须承接前文并为下一篇留下入口。
2. 本篇正文目标约 ${wordPlan.words} 字；为了保证内容完整，可以适当增加，但不能偷懒成摘要。
3. 必须严格遵守用户选择的走向、章节规划、篇目分析和细纲，不得擅自改换主线方向。
4. 要写成可直接阅读的小说正文：有场景、有行动、有对话、有情绪变化、有冲突推进和结尾钩子。
5. 新增人物如果前面没有明确姓名，不要硬塞占位人名。
6. 只输出本篇正文。

核心要求：
${quickConfigText(q)}

小说灵感：
${q.inspiration}

已选走向：
${quickSelectedDirectionText(q)}

本章规划：
${JSON.stringify(unit, null, 2)}

本篇篇目分析：
${pieceLine}

本章细纲：
${chapterOutline}

最近前文：
${previousText ? previousText.slice(-2200) : "暂无前文，这是正文开端。"}${variant}`;
  const content = await aiQuickText(prompt, 0.82);
  return normalizeQuickDraftPiece({
    chapterIndex,
    pieceIndex,
    title: `第${chapterIndex + 1}章 第${pieceIndex + 1}篇：${pieceTitle}`,
    content: content || fallbackQuickDraftPiece(q, unit, chapterIndex, pieceIndex, pieceLine),
    updatedAt: Date.now()
  });
}

function fallbackQuickDraftPiece(q, unit, chapterIndex, pieceIndex, pieceLine) {
  const title = quickPieceTitleFromUnit(unit, chapterIndex, pieceIndex, q);
  return `第${pieceIndex + 1}篇：${title}

夜色压下来时，主角终于意识到，眼前这件事从来不是一次偶然。

这一篇承接“${unit.title || `第${chapterIndex + 1}章`}”的大故事线：${unit.大故事线 || "主角必须在压力中推进目标。"}

他站在原地没有退，指尖却慢慢收紧。那些人以为他已经无路可走，以为只要把证据、退路和最后一点体面全部拿走，他就会像过去那样沉默。可本篇的真正作用，是让主角在当前小目标里完成一次清晰推进：${pieceLine.replace(/^第?\d+篇[：:、\s]*/, "")}

他不能输。不是为了证明自己多厉害，也不是为了把所有人踩在脚下，而是因为这一章的动机已经压到眼前：${unit.主角动机 || "如果他不行动，就会失去继续选择的资格。"}

于是他抬起头，看向最先笑出来的那个人。

“你们准备得很充分。”他说，“可惜，少算了一件事。”

下一秒，局势开始倒转。但这场胜利没有结束一切，它只把下一篇的问题推到了台前。`;
}

function upsertQuickDraftPiece(q, piece) {
  q.draftPieces = (q.draftPieces || []).filter((item) => !(Number(item.chapterIndex) === piece.chapterIndex && Number(item.pieceIndex) === piece.pieceIndex));
  q.draftPieces.push(piece);
  q.draftPieces.sort((a, b) => a.chapterIndex - b.chapterIndex || a.pieceIndex - b.pieceIndex);
  q.draft = quickDraftFromPieces(q);
}

async function generateQuickNextDraftPiece() {
  const q = quickWriting();
  if (!q.fineOutline.trim()) return toast("请先生成或填写细纲");
  if (quickOutlineGeneratedCount(q) < quickChapterCount(q)) return toast(`细纲还没完成：当前 ${quickOutlineGeneratedCount(q)}/${quickChapterCount(q)} 章`);
  const target = quickNextDraftTarget(q);
  if (!target) return toast("正文已经全部生成");
  state.busy = true; render();
  try {
    const piece = await generateQuickDraftPieceAt(target.chapterIndex, target.pieceIndex);
    upsertQuickDraftPiece(q, piece);
    q.step = "draft";
    save(); toast(`第${target.chapterIndex + 1}章第${target.pieceIndex + 1}篇正文已生成`);
  } catch (error) {
    const unit = normalizeQuickUnit(q.units?.[target.chapterIndex] || fallbackQuickUnit(q, target.chapterIndex), q, target.chapterIndex);
    const pieceLine = normalizePieceAnalysis(unit.篇目分析, q, target.chapterIndex).split(/\n+/)[target.pieceIndex] || "";
    upsertQuickDraftPiece(q, normalizeQuickDraftPiece({
      chapterIndex: target.chapterIndex,
      pieceIndex: target.pieceIndex,
      title: `第${target.chapterIndex + 1}章 第${target.pieceIndex + 1}篇`,
      content: fallbackQuickDraftPiece(q, unit, target.chapterIndex, target.pieceIndex, pieceLine)
    }));
    q.step = "draft";
    save(); toast(`AI生成失败，已补入本篇本地兜底：${error.message}`);
  } finally {
    state.busy = false; render();
  }
}

async function generateQuickDraft() {
  const q = quickWriting();
  if (!q.fineOutline.trim()) return toast("请先生成或填写细纲");
  if (quickOutlineGeneratedCount(q) < quickChapterCount(q)) return toast(`细纲还没完成：当前 ${quickOutlineGeneratedCount(q)}/${quickChapterCount(q)} 章`);
  if (!quickNextDraftTarget(q)) return toast("正文已经全部生成");
  state.busy = true; render();
  let generated = 0;
  try {
    while (quickNextDraftTarget(q) && generated < 5) {
      const target = quickNextDraftTarget(q);
      const piece = await generateQuickDraftPieceAt(target.chapterIndex, target.pieceIndex);
      upsertQuickDraftPiece(q, piece);
      q.step = "draft";
      generated += 1;
      save();
      render();
      await new Promise((resolve) => setTimeout(resolve, 20));
    }
    const missing = quickTotalPieces(q) - quickGeneratedPieceCount(q);
    save(); toast(`本批已生成 ${generated} 篇，剩余 ${Math.max(0, missing)} 篇`);
  } catch (error) {
    save(); toast(`AI生成中断，已保存当前进度：${error.message}`);
  } finally {
    state.busy = false; render();
  }
}

function insertQuickDraftToChapter() {
  const q = quickWriting();
  const c = chapter();
  if (!q.draft.trim() || !c) return toast("还没有可写入的正文");
  c.content = q.draft;
  c.status = "快写初稿";
  c.updatedAt = Date.now();
  project().updatedAt = Date.now();
  save();
  state.view = "drafting";
  render();
  toast("快速创作正文已写入当前篇");
}

function createProject() {
  if (!collectWizardStep()) return;
  const w = state.wizard;
  const origin = wizardValue(w, "origin") || w.origin;
  const travelGroup = wizardValue(w, "travelGroup") || w.travelGroup;
  const abilityType = hasGoldfinger(w) ? (wizardValue(w, "abilityType") || w.abilityType) : "没有外挂";
  const p = normalizeProject({
    id: uid(), title: w.title, logline: w.logline || `${origin || "主角"}来到${w.era}，卷入${w.coreConflict || "一场无法回头的命运"}。`,
    genre: w.genre?.length ? w.genre : ["待探索"], era: w.era, tone: w.tone || "轻松紧张", pov: w.pov,
    platform: w.platform, targetWords: w.targetWords, chapterWords: w.chapterWords, visualStyle: w.visualStyle,
    coverImage: w.coverImage || "", coverTheme: w.coverTheme || "ember",
    storyboardStyle: "手绘电影风", progress: 1, updatedAt: Date.now(),
    genesis: {
      creationMode: w.creationMode || "guided", origin, travelGroup, abilityType,
      originOther: w.originOther, travelGroupOther: w.travelGroupOther, abilityTypeOther: w.abilityTypeOther,
      abilityCost: hasGoldfinger(w) ? w.abilityCost : "", audienceGender: w.audienceGender,
      coreTheme: w.coreTheme, emotionalCore: w.emotionalCore, coreConflict: w.coreConflict,
      heroGoal: w.heroGoal, stakes: w.stakes, deepDesire: w.deepDesire, trueNeed: w.trueNeed,
      finalCost: w.finalCost, finalRealization: w.finalRealization, finalChoice: w.finalChoice,
      powerMechanism: hasGoldfinger(w) ? w.powerMechanism : "", powerLadder: hasGoldfinger(w) ? w.powerLadder : "",
      powerConflict: hasGoldfinger(w) ? w.powerConflict : "",
      powerSystem: w.powerSystem, factions: w.factions, structure: w.structure, actCount: w.actCount,
      chaptersPerAct: w.chaptersPerAct, ending: w.ending, stylePack: w.stylePack,
      ideaRoute: w.ideaRoute || null, ideaSeed: w.ideaSeed || "", ideaStyle: w.ideaStyle || "",
      styleModules: w.styleModules || [], soulCards: w.soulCards || buildSoulCards(w),
      creationBlocks: structuredClone(w.creationBlocks || {})
    },
    bible: {
      rules: w.worldRules || "",
      locked: (w.lockedFacts || "").split(/\n+/).map((x)=>x.trim()).filter(Boolean),
      worldRules: [w.worldRules, w.powerSystem].filter(Boolean),
      limitations: hasGoldfinger(w) && w.abilityCost ? [`${abilityType || "核心能力"}的代价：${w.abilityCost}`] : []
    }, outline: null,
    chapters: [{ id: uid(), title: "第一章 未命名", content: "", status: "待写", summary: "", updatedAt: Date.now() }],
    assets: [], storyboards: {}, storyboardAssets: {}
  });
  state.projects.unshift(p); state.projectId = p.id; state.chapterId = p.chapters[0].id;
  state.modal = null; state.view = "outline"; save(); render();
  toast("项目已创建，请点击“AI 生成大纲与章节”开始第一步");
}

function fallbackOutline(p) {
  const protagonist = samplePersonName(p.id || p.title, 0);
  const actCount = Math.max(1, Number(p.genesis?.actCount) || 3);
  const chaptersPerAct = Math.max(1, Number(p.genesis?.chaptersPerAct) || 5);
  const seed = `${p.id}-${p.title}-${(p.genre || []).join("-")}-${p.genesis?.coreConflict || ""}`;
  const chapterBanks = [
    ["坠落前的来电","账户里的异常数字","咖啡冷掉以后","被提前写好的通告","失控的第一笔转账","南方来的加密文件","旧同伴的新证词","十二分钟后的会议","消失的访问日志","备用方案启动"],
    ["反向收购","沉默的合伙人","漏洞里的名字","深夜审计","第二份合同","天台下的影子","舆论风暴前夜","被调换的密钥","安全屋来客","无人承认的指令"],
    ["裂缝坐标","第七科研站","雨里的金色颗粒","资产清洗日","无法解释的动物迁徙","天空出现旧伤","第一座安全城","背叛者名单","终局董事会","门后的世界"],
    ["归来的债主","被删除的母带","危险的订单","候选人的邀请","三小时封锁","交易所熔断","黑箱权限","看不见的买家","旧规则崩塌","新的秩序"],
    ["陌生盟友","假胜利","隐藏代价","第二层真相","敌友倒置","被遗忘的人","局中之局","失控边缘","最后证词","真正的猎物"]
  ];
  const chapterHeads = ["危机起点", "暗线浮出", "局势反转", "资源扩张", "真相逼近", "秩序重写", "最终选择", "新门开启"];
  const acts = Array.from({ length: actCount }, (_, actIndex) => {
    const phase = actIndex === 0 ? 0 : actIndex === actCount - 1 ? 2 : 1;
    const defaultTitles = chapterBanks[(phase + seededIndex(seed, actIndex, chapterBanks.length)) % chapterBanks.length];
    const head = chapterHeads[seededIndex(seed, actIndex + 17, chapterHeads.length)];
    return {
      title: `第${actIndex + 1}章 · ${head}`,
      summary: actIndex === 0
        ? `主角在危机中登场，发现${p.genesis?.abilityType || "核心能力"}，并被迫面对${p.genesis?.coreConflict || "首个致命问题"}。`
        : actIndex === actCount - 1
          ? `所有冲突与伏笔汇入终局，主角必须在${p.genesis?.stakes || "代价与目标"}之间完成最后选择。`
          : `力量、关系与对手同步升级，${p.genesis?.abilityCost ? `能力代价“${p.genesis.abilityCost}”开始反噬` : "胜利暴露出更大的代价"}。`,
      chapters: Array.from({ length: chaptersPerAct }, (_, chapterIndex) => {
        const offset = seededIndex(seed, actIndex * 31 + chapterIndex, defaultTitles.length);
        const title = defaultTitles[(chapterIndex + offset) % defaultTitles.length];
        return `第${chapterIndex + 1}集 ${title}${chapterIndex >= defaultTitles.length ? ` ${Math.floor(chapterIndex / defaultTitles.length) + 1}` : ""}`;
      })
    };
  });
  return {
    outline: {
      locked: false,
      premise: p.logline || `${protagonist}来到${p.era}，在失去一切前发现一条足以改写命运的隐藏规则。`,
      acts
    },
    assets: []
  };
}

function normalizeGeneratedOutline(data, p) {
  const actCount = Math.max(1, Number(p.genesis?.actCount) || 3);
  const chaptersPerAct = Math.max(1, Number(p.genesis?.chaptersPerAct) || 5);
  const acts = Array.isArray(data?.acts) ? data.acts : [];
  const normalizedActs = acts.slice(0, actCount).map((act, actIndex) => {
    const chapters = Array.isArray(act.chapters) ? act.chapters : [];
    return {
      title: String(act.title || `第${actIndex + 1}章 · 未命名`).replace(/^第\d+幕/, `第${actIndex + 1}章`),
      summary: String(act.summary || "本章围绕核心冲突推进。"),
      chapters: chapters.slice(0, chaptersPerAct).map((title, chapterIndex) => {
        const clean = String(title || `第${chapterIndex + 1}集 未命名`).replace(/^第\d+章\s*/, "").trim();
        return clean.match(/^第\d+集\s/) ? clean : `第${chapterIndex + 1}集 ${clean}`;
      })
    };
  }).filter((act) => act.chapters.length);
  if (normalizedActs.length < actCount || normalizedActs.some((act) => act.chapters.length < chaptersPerAct)) return null;
  return {
    outline: {
      locked: false,
      premise: String(data?.premise || p.logline || `${p.title}的故事由此开始。`),
      acts: normalizedActs
    },
    entities: normalizeGeneratedEntities(data?.entities || data?.storySystem?.entities || [], p),
    memories: normalizeGeneratedMemories(data?.memories || data?.storySystem?.memories || []),
    biblePatch: data?.biblePatch || data?.storySystem?.biblePatch || {},
    chapterTasks: Array.isArray(data?.chapterTasks || data?.storySystem?.chapterTasks) ? (data.chapterTasks || data.storySystem.chapterTasks) : [],
    storySystem: data?.storySystem || null,
    assets: []
  };
}

function normalizeGeneratedEntities(items, p) {
  const typeMap = { role: "character", character: "character", protagonist: "character", support: "character", villain: "character", location: "location", scene: "location", prop: "prop", item: "prop", faction: "faction", rule: "rule" };
  return (Array.isArray(items) ? items : []).map((item) => {
    const type = typeMap[item.type] || "character";
    const name = String(item.name || "").trim();
    if (!name) return null;
    const roleLabel = item.role ? `身份定位：${item.role}。` : "";
    const arc = item.arc ? `人物/剧情作用：${item.arc}。` : "";
    const appearance = item.appearance ? `外观/识别：${item.appearance}。` : "";
    return normalizeEntity({
      type,
      name: name.slice(0, 24),
      summary: String(item.summary || item.desc || `${roleLabel}${arc}${appearance}` || `${name}，由大纲阶段生成的故事系统设定。`).slice(0, 420),
      aliases: Array.isArray(item.aliases) ? item.aliases : [],
      relations: Array.isArray(item.relations) ? item.relations : [],
      status: "confirmed",
      source: "outline-ai-system"
    });
  }).filter(Boolean);
}

function normalizeGeneratedMemories(items) {
  return (Array.isArray(items) ? items : []).map((item) => {
    const title = String(item.title || "").trim();
    const content = String(item.content || item.summary || "").trim();
    if (!title || !content) return null;
    return normalizeMemory({
      type: ["plot", "time", "character", "relationship", "clue"].includes(item.type) ? item.type : "plot",
      title: title.slice(0, 40),
      content: content.slice(0, 500),
      active: true,
      source: "outline-ai-system",
      sourceKey: `outline-system:${title}`
    });
  }).filter(Boolean);
}

function fallbackStorySystem(p) {
  const hero = samplePersonName(p.id || p.title, 0);
  const partner = samplePersonName(p.id || p.title, 1);
  const rival = samplePersonName(p.id || p.title, 2);
  const era = p.era || "故事主舞台";
  return {
    entities: normalizeGeneratedEntities([
      { type: "character", name: hero, role: "主角", summary: `${hero}是故事主角，围绕“${p.genesis?.coreConflict || p.logline || "核心冲突"}”被迫行动，成长线要和核心命题闭环。` },
      { type: "character", name: partner, role: "重要配角", summary: `${partner}负责提供情感拉扯、信息差和阶段协助，后续可由作者在设定百科中调整出场集数。` },
      { type: "character", name: rival, role: "反派/对手", summary: `${rival}与主角争夺同一目标，但给出相反答案，不能只是坏人，要承担价值观冲突。` },
      { type: "location", name: era, summary: `${era}是故事初始核心场景，承载开篇冲突、人物行动和视觉氛围。` },
      { type: "prop", name: "核心信物", summary: "贯穿前期的关键道具，负责触发线索、制造误判或连接隐藏规则。" },
      { type: "rule", name: "故事闭环规则", summary: "每个阶段胜利必须带来新的代价或更高层级的问题，避免无代价解决危机。" }
    ], p),
    memories: normalizeGeneratedMemories([
      { type: "plot", title: "主线初始状态", content: `主角尚未完成第一次不可逆选择，故事需要先兑现“${p.genesis?.coreConflict || p.logline || "核心冲突"}”。` },
      { type: "relationship", title: "初始关系张力", content: `${hero}、${partner}、${rival}围绕目标、信任和利益形成三角压力，后续可按章节逐步更新。` },
      { type: "clue", title: "前期开放伏笔", content: "核心信物与隐藏规则有关，但不能在开篇一次解释完，应分阶段揭示。" }
    ]),
    biblePatch: {
      worldRules: ["每个情节推进都必须服务主角目标、人物关系或长线伏笔"],
      foreshadows: ["核心信物背后隐藏真正规则"],
      relationships: [`${hero}与${rival}在价值选择上形成镜像对照`]
    },
    chapterTasks: []
  };
}

async function generateOutlineWithAI(p) {
  if (!state.aiStatus.connected) return null;
  const actCount = Math.max(1, Number(p.genesis?.actCount) || 3);
  const chaptersPerAct = Math.max(1, Number(p.genesis?.chaptersPerAct) || 5);
  const prompt = `你是资深中文网文总策划。请根据用户已填写的定风、定魂、创世、布局信息，先搭建一个逻辑闭环的“故事系统包”，再生成项目专属章节大纲。
要求：
1. 不要使用固定模板名，例如“闯入新世界”“开局就是死局”。
2. 外层必须是“第1章、第2章……”；内层必须是“第1集、第2集……”。
3. 必须同时生成主角、配角、反派、核心地点、关键道具、势力/规则、前期伏笔和初始动态记忆，形成可持续写作的闭环。
4. 这些只是文字设定，不能生成定妆图、不能输出图片提示词、不能把它们当视觉资产。
5. 标题要贴合题材、平台、主角矛盾、核心命题和世界规则，每个项目都应不同。
6. 输出严格 JSON，不要解释，不要 Markdown。

JSON 格式：
{"premise":"一句话故事核心","acts":[{"title":"第一章 · 标题","summary":"本章核心冲突与转折","chapters":["第1集 标题","第2集 标题"]}],"storySystem":{"entities":[{"type":"character|location|prop|faction|rule","name":"名称","role":"主角/配角/反派/场景功能等","summary":"身份、功能、动机、冲突作用","appearance":"如需后期定妆，可写外观识别，但不要写图片提示词","relations":["与某人的关系"]}],"memories":[{"type":"plot|time|character|relationship|clue","title":"事实标题","content":"初始动态事实"}],"biblePatch":{"worldRules":["世界规则"],"foreshadows":["伏笔"],"relationships":["初始关系"]},"chapterTasks":[{"chapterTitle":"第1集 标题","goal":"本集目标","requiredEvents":["必须事件"],"requiredCharacters":["明确姓名"],"forbidden":["禁止事项"],"foreshadow":"伏笔","hook":"结尾钩子"}]}}

需要生成：${actCount}章，每章${chaptersPerAct}集。
作品名：${p.title}
题材：${(p.genre || []).join("、")}
平台：${p.platform || "未指定"}
情绪基调：${p.tone || "未指定"}
一句话故事：${p.logline || "未指定"}
创世核心卡：
${p.genesis?.soulCards ? Object.entries(p.genesis.soulCards).map(([key, value]) => `${key}：${value}`).join("\n") : "暂无"}
主角来源：${p.genesis?.origin || "未指定"}
穿越组合：${p.genesis?.travelGroup || "未指定"}
金手指：${p.genesis?.abilityType || "无"}
世界规则：${p.bible?.worldRules?.join("；") || p.bible?.rules || "未指定"}
力量/社会体系：${p.genesis?.powerSystem || "未指定"}
关键势力与地点：${p.genesis?.factions || "未指定"}
结局方向：${p.genesis?.ending || "未指定"}`;
  const response = await fetch("/api/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt, temperature: 0.9 })
  }).then((res) => res.json());
  if (response.error || response.demo || !response.content) return null;
  const jsonText = response.content.match(/\{[\s\S]*\}/)?.[0] || response.content;
  return normalizeGeneratedOutline(JSON.parse(jsonText), p);
}

function addOutlineAct() {
  const p = project();
  if (!p?.outline || p.outline.locked) return;
  const index = p.outline.acts.length + 1;
  p.outline.acts.push({
    title: `第${index}章 · 新的篇章`,
    summary: "填写这一章的核心目标、主要冲突和结尾转折。",
    chapters: [`第1集 新的事件`]
  });
  save();
  render();
}

function removeOutlineAct(index) {
  const p = project();
  if (!p?.outline || p.outline.locked || p.outline.acts.length <= 1 || !Number.isInteger(index)) return;
  p.outline.acts.splice(index, 1);
  save();
  render();
  toast("已删除这一章；确认大纲前不会影响正式正文");
}

function addOutlineChapter(actIndex) {
  const p = project();
  const act = p?.outline?.acts[actIndex];
  if (!act || p.outline.locked) return;
  const total = p.outline.acts.reduce((sum, item) => sum + item.chapters.length, 0);
  act.chapters.push(`第${act.chapters.length + 1}集 新的事件`);
  save();
  render();
}

function removeOutlineChapter(actIndex, chapterIndex) {
  const p = project();
  const act = p?.outline?.acts[actIndex];
  if (!act || p.outline.locked || !Number.isInteger(chapterIndex)) return;
  act.chapters.splice(chapterIndex, 1);
  save();
  render();
}

function applyOutlineExpand() {
  const p = project();
  if (!p?.outline || p.outline.locked) return;
  const targetActs = Math.max(state.outlineExpand.actCount, p.outline.acts.length);
  const targetPerAct = state.outlineExpand.chaptersPerAct;
  const titleBank = [
    "意外来客", "规则试探", "第一次选择", "隐藏代价", "危险盟友", "线索断裂", "反向追踪", "身份裂缝", "假胜利", "深夜来信",
    "旧事重现", "不可说的交易", "第二层真相", "敌友倒置", "被遗忘的人", "局中之局", "失控边缘", "最后证词", "真正的猎物", "门后的世界",
    "全城封锁", "倒计时开始", "背叛之前", "孤注一掷", "规则崩塌", "弱点暴露", "终局入场", "以命换局", "真相落地", "新的起点"
  ];
  while (p.outline.acts.length < targetActs) {
    const actNo = p.outline.acts.length + 1;
    p.outline.acts.push({ title: `第${actNo}章 · 局势升级`, summary: `第${actNo}章扩大故事矛盾，引入新的目标与关键反转。`, chapters: [] });
  }
  let globalIndex = 0;
  p.outline.acts.forEach((act, actIndex) => {
    const desired = Math.max(targetPerAct, act.chapters.length);
    while (act.chapters.length < desired) {
      const bankTitle = titleBank[globalIndex % titleBank.length];
      act.chapters.push(`第${act.chapters.length + 1}集 ${bankTitle}${globalIndex >= titleBank.length ? ` ${Math.floor(globalIndex / titleBank.length) + 1}` : ""}`);
      globalIndex += 1;
    }
    if (!act.title.trim()) act.title = `第${actIndex + 1}章`;
  });
  state.modal = null;
  save();
  render();
  toast(`大纲已扩充为 ${p.outline.acts.length} 章、${p.outline.acts.reduce((sum, act) => sum + act.chapters.length, 0)} 集`);
}

function confirmOutline() {
  const p = project();
  if (!p?.outline) return;
  const titles = p.outline.acts.flatMap((act) => act.chapters.map((title) => title.trim())).filter(Boolean);
  if (!titles.length || p.outline.acts.some((act) => !act.chapters.length || act.chapters.some((title) => !title.trim()))) return toast("每一章至少保留一个分集，并补全所有分集标题");
  const oldChapters = p.chapters || [];
  const systemTasks = p.genesis?.storySystem?.chapterTasks || [];
  const taskForTitle = (title) => systemTasks.find((item) => {
    const source = String(item.chapterTitle || "").replace(/\s+/g, "");
    const target = String(title || "").replace(/\s+/g, "");
    return source && (source === target || source.includes(target) || target.includes(source));
  });
  p.chapters = titles.map((title, index) => {
    const systemTask = taskForTitle(title) || {};
    const oldTask = oldChapters[index]?.taskCard || {};
    return {
    id: oldChapters[index]?.id || uid(),
    title: title.match(/^第\d+集\s/) ? title : `第${index + 1}集 ${title}`,
    content: oldChapters[index]?.content || "",
    status: oldChapters[index]?.status || "待写",
    summary: oldChapters[index]?.summary || "",
    updatedAt: oldChapters[index]?.updatedAt || Date.now(),
    taskCard: {
      ...oldTask,
      goal: oldTask.goal || systemTask.goal || "",
      requiredEvents: oldTask.requiredEvents?.length ? oldTask.requiredEvents : systemTask.requiredEvents || [],
      requiredCharacters: oldTask.requiredCharacters?.length ? oldTask.requiredCharacters : systemTask.requiredCharacters || [],
      forbidden: oldTask.forbidden?.length ? oldTask.forbidden : systemTask.forbidden || [],
      foreshadow: oldTask.foreshadow || systemTask.foreshadow || "",
      hook: oldTask.hook || systemTask.hook || ""
    },
    qualityReport: oldChapters[index]?.qualityReport || null,
    scenes: oldChapters[index]?.scenes || [],
    revision: oldChapters[index]?.revision || 1,
    publishedAt: oldChapters[index]?.publishedAt || null,
    hasUnpublishedChanges: oldChapters[index]?.hasUnpublishedChanges || false,
    order: index
  };
  });
  p.volumes = normalizeVolumes(null, p.outline, p.chapters);
  p.outline.locked = true;
  state.chapterId = p.chapters[0]?.id;
  save();
  render();
  toast(`大纲与 ${titles.length} 个分集标题已锁定`);
}

async function generateOutlineAndAssets() {
  const p = project();
  if (!p || state.busy) return;
  state.busy = true; render();
  try {
    let generated = null;
    try {
      generated = await generateOutlineWithAI(p);
    } catch {}
    generated ||= fallbackOutline(p);
    const fallbackSystem = fallbackStorySystem(p);
    generated.entities = generated.entities?.length ? generated.entities : fallbackSystem.entities;
    generated.memories = generated.memories?.length ? generated.memories : fallbackSystem.memories;
    generated.biblePatch = generated.biblePatch || fallbackSystem.biblePatch;
    p.outline = generated.outline;
    p.genesis ||= {};
    p.genesis.storySystem = {
      entities: generated.entities,
      memories: generated.memories,
      biblePatch: generated.biblePatch,
      chapterTasks: generated.chapterTasks || []
    };
    generated.entities.forEach((entity) => {
      if (!p.entities.some((item) => item.name === entity.name && item.type === entity.type)) p.entities.push(entity);
    });
    generated.memories.forEach((memory) => {
      if (!p.memories.some((item) => item.sourceKey === memory.sourceKey || item.title === memory.title)) p.memories.unshift(memory);
    });
    const patch = generated.biblePatch || {};
    ["worldRules", "foreshadows", "relationships", "facts", "knowledge"].forEach((field) => {
      if (!Array.isArray(patch[field])) return;
      p.bible[field] ||= [];
      patch[field].forEach((item) => {
        const text = String(item || "").trim();
        if (text && !p.bible[field].includes(text)) p.bible[field].push(text);
      });
    });
    (p.genesis?.factions || "").split(/\n+/).map((line)=>line.trim()).filter(Boolean).forEach((line) => {
      const [name, ...details] = line.split(/[｜|：:]/);
      if (name && !p.entities.some((entity)=>entity.name===name.trim())) p.entities.push(normalizeEntity({
        type: "faction", name: name.trim(), summary: details.join("：").trim() || line, status: "confirmed", source: "genesis"
      }));
    });
    if (p.bible.rules && !p.entities.some((entity)=>entity.type==="rule" && entity.name==="世界核心规则")) {
      p.entities.push(normalizeEntity({ type: "rule", name: "世界核心规则", summary: p.bible.rules, status: "confirmed", source: "genesis" }));
    }
    const planned = p.outline.acts.flatMap((act) => act.chapters);
    if (p.chapters.length === 1 && !p.chapters[0].content) {
      p.chapters = planned.map((title, index) => ({
        id: index === 0 ? p.chapters[0].id : uid(),
        title: title.match(/^第\d+集\s/) ? title : `第${index + 1}集 ${title}`, content: "", status: "待写", summary: "", updatedAt: Date.now(),
        taskCard: { goal: "", requiredEvents: [], requiredCharacters: [], forbidden: [], foreshadow: "", hook: "" },
        qualityReport: null, scenes: [], revision: 1, publishedAt: null, hasUnpublishedChanges: false, order: index
      }));
      state.chapterId = p.chapters[0].id;
    }
    p.volumes = normalizeVolumes(null, p.outline, p.chapters);
    save();
  } finally {
    state.busy = false; render(); toast("章节大纲与分集规划已生成；定妆资产将在正文完成后提取");
  }
}

function createAsset() {
  const name = $("#assetName").value.trim();
  const desc = $("#assetDesc").value.trim();
  if (!name || !desc) return toast("请填写资产名称和定妆描述");
  const p = project();
  const asset = { id: uid(), type: $("#assetType").value, name, desc, version: $("#assetVersion").value.trim() || "v1", baseVisualStyle: p.visualStyle, visualFamily: visualFamilyOfText(p.visualStyle) };
  p.assets.push(asset);
  p.entities.push(normalizeEntity(entityFromAsset(asset)));
  state.modal = null; save(); render(); toast("视觉资产已保存");
}

function openEntityAssetPrompt(entityId) {
  const p = project();
  if (!p?.chapters.some((item) => item.status === "已完成")) return toast("请先完成定稿，再生成定妆提示词");
  const entity = p?.entities.find((item) => item.id === entityId);
  if (!entity) return toast("没有找到这个百科设定");
  const typeMap = { character: "character", location: "scene", prop: "prop" };
  const assetType = typeMap[entity.type];
  if (!assetType) return toast("只有人物、地点/场景和道具可以生成定妆提示词");
  let asset = p.assets.find((item) => item.id === entity.visualAssetId || item.name === entity.name);
  if (!asset) {
    asset = {
      id: uid(),
      type: assetType,
      name: entity.name,
      desc: entity.summary || `${entity.name}，根据设定百科生成可复用视觉资产。`,
      version: "百科定妆 v1",
      baseVisualStyle: p.visualStyle,
      visualFamily: visualFamilyOfText(p.visualStyle),
      promptReady: false,
      imageStatus: "pending-api",
      seed: Math.floor(Math.random() * 900000000),
      referenceWeight: 0.8,
      referenceImages: [],
      views: assetType === "character" ? ["正面", "侧面", "背面"] : assetType === "scene" ? ["全景", "结构", "细节"] : ["正视", "侧视", "材质"],
      outfits: ["基础定妆 v1"],
      expressions: ["平静", "警觉", "紧张"]
    };
    p.assets.push(asset);
  }
  entity.visualAssetId = asset.id;
  if (!asset.desc && entity.summary) asset.desc = entity.summary;
  state.assetPromptId = asset.id;
  state.modal = "asset-prompt";
  save();
  render();
}

function syncAssetsToEntities(showToast = true, targetProject = project()) {
  if (!targetProject) return;
  let added = 0;
  targetProject.assets.forEach((asset) => {
    const existing = targetProject.entities.find((entity) => entity.visualAssetId === asset.id || entity.id === asset.id || entity.name === asset.name);
    if (existing) {
      existing.visualAssetId ||= asset.id;
      if (!existing.summary) existing.summary = asset.desc;
      return;
    }
    targetProject.entities.push(normalizeEntity(entityFromAsset(asset)));
    added += 1;
  });
  save();
  if (showToast) { render(); toast(added ? `已同步 ${added} 项视觉资产到设定百科` : "设定百科已经与视觉资产同步"); }
}

function saveEntity() {
  const p = project();
  const name = $("#entityName")?.value.trim();
  const summary = $("#entitySummary")?.value.trim();
  if (!name || !summary) return toast("请填写设定名称和静态摘要");
  const current = p.entities.find((item) => item.id === state.entityEditId);
  const next = normalizeEntity({
    ...(current || {}),
    id: current?.id || uid(),
    type: $("#entityType").value,
    status: $("#entityStatus").value,
    name,
    summary,
    content: $("#entityContent")?.value.trim() || "",
    role: $("#entityRole")?.value || "ordinary",
    scope: $("#entityScope")?.value || "manual",
    keyFacts: ($("#entityKeyFacts")?.value || "").split(/\n+/).map(x=>x.trim()).filter(Boolean),
    attributes: ($("#entityAttributes")?.value || "").split(/\n+/).map(x=>x.trim()).filter(Boolean),
    folderId: $("#entityFolder")?.value || null,
    volumeId: $("#entityVolume")?.value || null,
    aliases: ($("#entityAliases")?.value || "").split(/[、,，\n]+/).map((x) => x.trim()).filter(Boolean),
    relations: ($("#entityRelations")?.value || "").split(/\n+/).map((x) => x.trim()).filter(Boolean),
    firstChapterId: $("#entityFirstChapter")?.value || null,
    updatedAt: Date.now()
  });
  if (current) Object.assign(current, next);
  else p.entities.push(next);
  state.entityFocusId = next.id;
  state.entityFolderFilter = null;
  state.entityTab = "all";
  state.entityListTab = "all";
  state.entityEditId = null;
  state.modal = null;
  save(); render(); toast("设定已保存");
}

function saveMemory() {
  const p = project();
  const title = $("#memoryTitle")?.value.trim();
  const content = $("#memoryContent")?.value.trim();
  if (!title || !content) return toast("请填写事实标题和内容");
  const current = p.memories.find((item) => item.id === state.memoryEditId);
  const versions = [...(current?.versions || [])];
  if (current && current.content !== content) versions.push({ at: Date.now(), content: current.content, chapterId: current.chapterId });
  const next = normalizeMemory({
    ...(current || {}),
    id: current?.id || uid(),
    type: $("#memoryType").value,
    title,
    content,
    chapterId: $("#memoryChapter")?.value || null,
    active: $("#memoryActive")?.checked !== false,
    source: current?.source || "manual",
    versions,
    entityIds: $$("[data-memory-entity]:checked").map((el) => el.dataset.memoryEntity),
    updatedAt: Date.now()
  });
  if (current) Object.assign(current, next);
  else p.memories.unshift(next);
  state.memoryEditId = null;
  state.modal = null;
  save(); render(); toast(current ? "事实已更新，旧内容已进入历史版本" : "动态事实已保存");
}

function toggleMemory(id) {
  const memory = project()?.memories.find((item) => item.id === id);
  if (!memory) return;
  memory.active = !memory.active;
  memory.updatedAt = Date.now();
  save(); render(); toast(memory.active ? "事实已重新启用" : "事实已标记失效，AI将不再读取");
}

function addScene() {
  const c = chapter();
  c.scenes.push(normalizeScene({ title: `场景 ${c.scenes.length + 1}`, targetWords: Math.max(300, Math.round((project().chapterWords || 2000) / Math.max(3, c.scenes.length + 1))) }, c.scenes.length));
  c.updatedAt = Date.now();
  save(); render();
}

function generateScenes() {
  const c = chapter();
  const p = project();
  const fine = chapterFineOutline(p, c);
  const task = c.taskCard || {};
  const people = task.requiredCharacters?.join("、") || p.entities.filter((x) => x.type === "character").slice(0, 2).map((x) => x.name).join("、") || "主角";
  const target = p.chapterWords || state.aiDraftConfig.words || 2000;
  const outlineLines = fine.split(/\n+/).map((line) => line.trim()).filter(Boolean);
  c.scenes = [
    normalizeScene({ title: "开场钩子", summary: `${people}进入细纲规定的开局处境：${outlineLines[0] || c.title}。用异常、威胁或目标立刻抓住读者。`, beat: "开场", tension: 3, targetWords: Math.round(target * .2) }, 0),
    normalizeScene({ title: "行动与阻力", summary: outlineLines[1] || task.goal || "主角围绕细纲目标采取行动，阻力升级并产生明确后果。", beat: "冲突", tension: 4, targetWords: Math.round(target * .3) }, 1),
    normalizeScene({ title: "关键转折", summary: outlineLines[2] || (task.requiredEvents || [])[0] || "落实细纲中的关键事件，让新信息改变人物对局势的判断。", beat: "反转", tension: 5, targetWords: Math.round(target * .3) }, 2),
    normalizeScene({ title: "结果与钩子", summary: outlineLines.slice(3).join("；") || task.hook || "完成本章阶段结果，以细纲规定的悬念衔接下一章。", beat: "收束", tension: 4, targetWords: Math.round(target * .2) }, 3)
  ];
  c.updatedAt = Date.now();
  save(); render(); toast("已生成4个可编辑场景；锁定满意场景后再交给AI写作");
}

function toggleSceneLock(index) {
  const scene = chapter()?.scenes[index];
  if (!scene) return;
  scene.status = scene.status === "locked" ? "draft" : "locked";
  save(); render();
}

function removeScene(index) {
  const c = chapter();
  if (!c?.scenes[index]) return;
  if (c.scenes[index].status === "locked") return toast("请先解锁这个场景");
  c.scenes.splice(index, 1);
  save(); render();
}

async function saveAssetPrompt(requestImage) {
  const p = project();
  const asset = p?.assets.find((item) => item.id === state.assetPromptId);
  if (!asset) return;
  asset.positivePrompt = $("#assetPositivePrompt")?.value.trim() || buildAssetPrompts(asset, p).positivePrompt;
  asset.negativePrompt = $("#assetNegativePrompt")?.value.trim() || buildAssetPrompts(asset, p).negativePrompt;
  asset.prompt = asset.positivePrompt;
  asset.promptReady = true;
  asset.seed = Number($("#assetSeed")?.value) || asset.seed;
  asset.referenceWeight = Number($("#assetReferenceWeight")?.value) || 0.8;
  asset.referenceImages = ($("#assetReferenceImages")?.value || "").split(/\n+/).map((x) => x.trim()).filter(Boolean);
  asset.outfits = ($("#assetOutfits")?.value || "").split(/\n+/).map((x) => x.trim()).filter(Boolean);
  asset.expressions = ($("#assetExpressions")?.value || "").split(/\n+/).map((x) => x.trim()).filter(Boolean);
  asset.imageStatus = asset.imageUrl ? "ready" : "pending-api";
  asset.baseVisualStyle = p.visualStyle;
  asset.visualFamily = visualFamilyOfText(p.visualStyle);
  save();
  if (requestImage) {
    if (!state.aiStatus.imageConnected) { render(); return toast("提示词已保存；请先在服务端配置 AI_IMAGE_API_KEY"); }
    state.busy = true; render();
    try {
      const result = await fetch("/api/image", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({
        prompt: `${asset.positivePrompt}\n固定种子：${asset.seed}；参考图权重：${asset.referenceWeight}；负面提示：${asset.negativePrompt}`,
        size: "1536x1024", referenceImages: asset.referenceImages
      }) }).then((res) => res.json());
      if (!result.imageUrl) throw new Error(result.error || "未返回图片");
      asset.imageUrl = result.imageUrl; asset.imageStatus = "ready";
      save(); toast("真实定妆图片已生成");
    } catch (error) { toast(`图片生成失败：${error.message}`); }
    finally { state.busy = false; render(); }
    return;
  }
  state.modal = null;
  state.assetPromptId = null;
  render();
  toast("AI定妆提示词已保存到资产库");
}

function chapterPosition(p, chapterId) {
  const index = p.chapters.findIndex((item) => item.id === chapterId);
  return index < 0 ? Number.MAX_SAFE_INTEGER : index;
}

function activeMemoriesBeforeChapter(p, c) {
  const currentIndex = chapterPosition(p, c.id);
  return p.memories.filter((memory) =>
    memory.active && (!memory.chapterId || chapterPosition(p, memory.chapterId) < currentIndex)
  );
}

function styleRulesForPrompt(p, taskType) {
  const applicable = taskType === "logic" ? new Set(["structure", "character", "quality"])
    : taskType === "summary" ? new Set(["structure", "character", "quality"])
    : new Set(["voice", "dialogue", "structure", "character"]);
  return (p.styleProfile?.rules || [])
    .filter((rule) => rule.content?.trim() && (rule.policy === "force" || (rule.policy === "auto" && applicable.has(rule.groupId))))
    .map((rule) => `- [${STYLE_MODULE_GROUPS.find((group) => group.id === rule.groupId)?.name || "其他"} / ${rule.policy === "force" ? "强制" : "按需"}] ${rule.title}：${rule.content.trim()}`)
    .join("\n") || "暂无";
}

function entitiesForPrompt(p, c) {
  const taskText = [c.title, c.taskCard?.goal, ...(c.taskCard?.requiredCharacters || []), ...(c.taskCard?.requiredEvents || [])].join(" ");
  return p.entities.filter((entity) => {
    if (entity.status !== "confirmed" || entity.scope === "off") return false;
    if (entity.scope === "global") return true;
    if (entity.scope === "manual") return taskText.includes(entity.name);
    return entity.scope === "volume" && p.volumes.some(volume => volume.id === entity.volumeId && volume.chapterIds.includes(c.id));
  })
    .slice(0, 24)
    .map(entity => `${entity.name}[${ENTITY_TYPE_LABELS[entity.type] || entity.type}]：${entity.summary}；关键事实：${entity.keyFacts.slice(0, 5).join("、") || "暂无"}；档案：${entity.content.slice(0, 500) || "暂无"}`);
}

function buildPrompt(type, p, c) {
  const instructions = {
    draft: `根据已锁定故事总纲、当前分集标题和已确认设定，直接创作本集完整初稿。目标约${state.aiDraftConfig.words}字；为了保证情节、情绪和段落收束完整，可以自然增加到目标字数的120%～125%，不要为了卡字数硬截断。选定方向：${state.aiDraftConfig.direction}。额外要求：${state.aiDraftConfig.note || "无"}。具体节奏与语言遵循本书保存的风格规则。`,
    continue: "续写当前章节约500字。延续语气和节奏，制造一个新冲突，并在结尾留下钩子。",
    polish: "润色当前正文，保留事件和信息不变，使语言更流畅、画面更具体。输出完整润色稿。",
    expand: "扩写当前正文，补充动作、环境和人物反应，但不要水字数。输出扩写后的完整正文。",
    rewrite: "在不改变核心事件的前提下重写正文，加强开篇钩子、冲突和反转。输出完整重写稿。",
    logic: "检查剧情逻辑、人物行为、时间线和设定冲突。用简短清单列出问题与修改建议。",
    summary: "生成不超过150字的章节摘要，并列出本章新增人物、道具、地点、伏笔和角色状态变化。"
  };
  const relevantMemories = activeMemoriesBeforeChapter(p, c);
  const staticEntities = entitiesForPrompt(p, c).join("\n") || "暂无";
  const scenePlan = c.scenes.length
    ? c.scenes.map((scene, index) => `${index + 1}.${scene.title}[${scene.beat}/张力${scene.tension}/约${scene.targetWords}字]：${scene.summary}`).join("\n")
    : "暂无，按章节任务卡自行规划";
  const chapterIndex = p.chapters.findIndex((item) => item.id === c.id) + 1;
  const previousChapterSummaries = p.chapters
    .filter((item) => chapterPosition(p, item.id) < chapterPosition(p, c.id))
    .slice(-8)
    .map((item) => `${item.title}：${item.summary || `已写${countText(item.content || "")}字`}`)
    .join("\n") || "暂无";
  const nextChapterHints = p.chapters
    .filter((item) => chapterPosition(p, item.id) > chapterPosition(p, c.id))
    .slice(0, 3)
    .map((item) => item.title)
    .join("、") || "暂无";
  return `你现在是资深中文网文作者，不是聊天助手。请直接产出可用内容。

硬性创作纪律：
1. 严格遵守“不可修改事实、故事圣经、动态记忆、设定百科、章节任务卡”；已经设定的身份、能力、关系、时间线、伏笔状态不得擅自改写。
2. 没有设定的部分可以自由发挥，但必须服务当前章节目标，不能凭空引入会破坏后续主线的大设定。
3. 新出现的人物必须使用未在本项目出现过的新姓名；不得复用已有角色名，也不要反复使用顾临川、闻昭、沈砚、许知意这类模板名。
4. 正文要有连续因果：人物先有动机，再有行动，再有后果；每个转折要能从前文找到理由。
5. 语言、对白、节奏和钩子遵循下方本书风格规则；被忽略的规则不得通过旧预设重新加入。
6. 除非任务要求，输出不要附带解释、标题、分析或项目符号。

项目：${p.title}
题材：${p.genre.join("、")}
目标平台与基调：${p.platform || "未指定"}；${p.tone || "未指定"}
作品风格包：${p.styleProfile?.name || stylePackById(p.genesis?.stylePack).name}
本次生效的风格规则（逐条执行，不要在输出中复述规则）：
${styleRulesForPrompt(p, type)}
一句话故事：${p.logline}
创世核心：主角来源=${p.genesis?.origin || "未指定"}；穿越组合=${p.genesis?.travelGroup || "未指定"}；核心能力=${p.genesis?.abilityType || "未指定"}；能力代价=${p.genesis?.abilityCost || "未指定"}；核心命题=${p.genesis?.coreTheme || "未指定"}；情感内核=${p.genesis?.emotionalCore || "未指定"}；核心冲突=${p.genesis?.coreConflict || "未指定"}；阶段目标=${p.genesis?.heroGoal || "未指定"}；深层欲望=${p.genesis?.deepDesire || "未指定"}；真正需要=${p.genesis?.trueNeed || "未指定"}；最终选择=${p.genesis?.finalChoice || "未指定"}；失败代价=${p.genesis?.stakes || "未指定"}；结局方向=${p.genesis?.ending || "未指定"}
创世核心卡：${p.genesis?.soulCards ? Object.values(p.genesis.soulCards).join("\n") : "暂无"}
故事大纲：${p.outline ? p.outline.acts.map((act) => `${act.title}：${act.summary}`).join("；") : "暂无"}
人物与资产：${p.assets.map((asset) => `${asset.name}（${asset.desc}）`).join("；") || "暂无"}
设定百科（静态身份）：${staticEntities}
世界规则：${p.bible.rules || "暂无"}
不可修改事实：${p.bible.locked.join("；") || "暂无"}
故事圣经：世界规则=${p.bible.worldRules.join("；") || "暂无"}；能力限制=${p.bible.limitations.join("；") || "暂无"}；时间线=${p.bible.timeline.join("；") || "暂无"}；未回收伏笔=${p.bible.foreshadows.join("；") || "暂无"}；角色关系=${p.bible.relationships.join("；") || "暂无"}；已确认事实=${p.bible.facts.slice(-30).join("；") || "暂无"}；信息边界=${p.bible.knowledge.join("；") || "暂无"}
动态记忆（仅当前章之前且仍有效）：${relevantMemories.map((memory) => `${memory.title}：${memory.content}`).join("；") || "暂无"}
前文摘要（最近8章）：
${previousChapterSummaries}
当前章节序号：第${chapterIndex}章
当前章节：${c.title}
后续章节方向参考：${nextChapterHints}
本章分场蓝图：
${scenePlan}
章节任务卡：目标=${c.taskCard?.goal || "暂无"}；必须事件=${(c.taskCard?.requiredEvents || []).join("；") || "暂无"}；必须人物=${(c.taskCard?.requiredCharacters || []).join("；") || "暂无"}；禁止事项=${(c.taskCard?.forbidden || []).join("；") || "暂无"}；伏笔=${c.taskCard?.foreshadow || "暂无"}；结尾钩子=${c.taskCard?.hook || "暂无"}
正文：
${c.content || "尚未开始"}

任务：${instructions[type]}`;
}

function buildContinuationPrompt(p, c, generatedText, remaining) {
  return `${buildPrompt("draft", p, c)}

续写补齐要求：
当前已生成${countText(generatedText)}字，目标约${state.aiDraftConfig.words}字，还缺约${remaining}字；如果当前冲突或情绪还没收完整，可以自然多写到目标字数的120%～125%。
请只输出“新增正文”，从已有正文最后一句无缝接上。
不要重复前文，不要总结，不要跳章，不要为了卡字数硬收尾，不要突然揭露未铺垫真相。
继续遵守上面的故事圣经、动态记忆、人物设定、章节任务卡和禁止事项。

已有正文：
${generatedText}`;
}

function compactDraftPrompt(p, c) {
  const relevantMemories = activeMemoriesBeforeChapter(p, c).slice(-12);
  const chapterIndex = p.chapters.findIndex((item) => item.id === c.id) + 1;
  const act = p.volumes.find((volume) => volume.chapterIds.includes(c.id));
  const isFinalizeMode = state.view === "finalize";
  const target = Number(state.aiDraftConfig.words) || 1500;
  const minimum = Math.round(target * .9);
  const maximum = Math.round(target * 1.1);
  const previousChapterSummaries = p.chapters.filter((item) => chapterPosition(p,item.id) < chapterPosition(p,c.id)).slice(-3).map((item)=>`${item.title}：${item.summary || `已写${countText(item.content||"")}字`}`).join("\n") || "暂无";
  const matchedEntities = entitiesForPrompt(p,c).slice(0,12).join("\n") || "暂无";
  const fineOutline = chapterFineOutline(p,c);
  const scenePlan = c.scenes.slice(0,4).map((scene,index)=>`${index+1}.${scene.title}[${scene.beat}/张力${scene.tension}/约${scene.targetWords}字]：${scene.summary}`).join("\n") || "暂无";
  return `你是资深中文网文作者。请直接输出当前章节的${isFinalizeMode ? "最终定稿" : "完整初稿"}，不要解释过程，不要输出标题、大纲或项目符号。

字数硬约束：目标${target}字，合格区间${minimum}—${maximum}字（±10%）。必须写到至少${minimum}字，最多不得超过${maximum}字；在区间内自然收束完整场景。

项目：${p.title}
题材/平台/基调：${(p.genre||[]).join("、")} / ${p.platform||"未指定"} / ${p.tone||"未指定"}
当前阶段：${act?.title||"未分卷"}，第${chapterIndex}章
当前章节：${c.title}
写作方向：${state.aiDraftConfig.direction}
额外要求：${state.aiDraftConfig.note||"无"}

本书风格规则：
${styleRulesForPrompt(p,"draft")}

前文摘要：
${previousChapterSummaries}

设定百科与动态记忆：
${matchedEntities}
${relevantMemories.map((memory)=>`${memory.title}：${memory.content}`).join("；")||"暂无"}

${isFinalizeMode ? `【定稿唯一执行蓝图】
本章细纲：
${fineOutline}

四个场景规划（必须严格按1→2→3→4依次写完，不得漏写、合并、调序或新增第五场）：
${scenePlan}

作者现有初稿：
${(c.content||"暂无").slice(-5000)}

定稿要求：以本章细纲决定事件，以四场景决定正文顺序；校正初稿的逻辑、人物状态和设定冲突。保留与蓝图一致的有效内容，删除偏离细纲的内容。` : `【初稿唯一创作来源：创世四块内容】
${creationBlocksText(p)}

初稿要求：从上述全书大纲、第一卷大纲、世界法则、核心角色中提取当前章所需内容；遵守前文章节事实，写成可继续修改的小说正文。初稿阶段不读取任务卡，也不读取场景规划。`}`;
}

function compactContinuationPrompt(p, c, generatedText, remaining) {
  return `请只续写“新增正文”，从已有正文最后一句自然接上。
当前分集：${c.title}
目标还缺约${remaining}字。按本书风格规则维持语言与节奏。
风格规则：
${styleRulesForPrompt(p, "draft")}
不要重复前文，不要总结，不要解释。

已有正文末尾：
${generatedText.slice(-2200)}`;
}

function trimToWritingLength(text, target) {
  let visible = 0;
  let rawIndex = text.length;
  for (let index = 0; index < text.length; index += 1) {
    if (!/\s/.test(text[index])) visible += 1;
    if (visible >= target) { rawIndex = index + 1; break; }
  }
  const sliced = text.slice(0, rawIndex).trimEnd();
  return /[。！？]$/.test(sliced) ? sliced : `${sliced.replace(/[，、；：]$/, "")}。`;
}

function demoDraftToLength(p, c, target, direction) {
  const hero = p.assets.find((asset) => asset.type === "character")?.name || samplePersonName(p.id || p.title, 1);
  const partner = p.assets.filter((asset) => asset.type === "character")[1]?.name || samplePersonName(p.id || p.title, 2);
  const scene = p.assets.find((asset) => asset.type === "scene")?.name || p.era || "旧城";
  const prop = p.assets.find((asset) => asset.type === "prop")?.name || "命运信物";
  const blocks = [
    `铜锣响了第三遍，${hero}才发现刑台上要斩的人是自己。刽子手已经举刀，台下却没有一个人记得他是怎么被押上来的。`,
    `“等一下。”${hero}抬头看向监斩官，“你手里的罪状，少了最后一页。”人群骤然安静，因为那一页正从他袖中缓缓滑出。`,
    `三息之前，${prop}在他掌心发烫，一行只有他能看见的字浮了出来：想改写结果，就先让所有人相信错误已经发生。`,
    `${partner}站在人群最后，脸上没有惊讶，反而悄悄做了一个噤声手势。${hero}立刻明白，今天的刑台不是终点，而是一场专门等他的试探。`,
    `刀锋落下的瞬间，${hero}侧身撞翻木案。锁链擦过石面，火星一闪，藏在罪状夹层里的细小地图落进雨水，指向${scene}最深处。`,
    `监斩官厉声命人封锁出口，可围观者突然同时喊出另一个名字。秩序被撕开一道口子，${hero}借着混乱冲下刑台，却没有选择逃走。`,
    `他反向逼近监斩官，问出一个所有人都不敢问的问题：如果罪名是真的，为什么行刑文书上的日期是明天？`,
    `这句话像刀一样切开人群。监斩官下意识看向高楼窗口，那里有人迅速放下竹帘。${partner}循着目光追去，只捡到一枚还带余温的铜扣。`,
    `${hero}把地图、铜扣和${prop}放在一起，三个毫无关系的线索竟拼出同一种纹章。纹章属于早已被宣布覆灭的旧组织。`,
    `按照“${direction}”的选择，他没有立刻揭穿真相，而是故意承认一半罪名，引出藏在人群里的第二名执行者。`,
    `第二名执行者果然动了。他袖中的短刃只露出一点寒光，${partner}已经撞开旁人，逼得对方提前出手。`,
    `短刃没有刺向${hero}，而是刺向那张被雨水浸透的地图。对方宁愿暴露身份，也不愿地图被完整看见。`,
    `${hero}抢下残片时看见背面写着一句话：今夜子时，${scene}会出现一个和他一模一样的人。`,
    `远处钟声响起，封闭的城门却自行打开。门外没有援军，只有一辆无人驾驶的黑色马车，车帘上正绣着同样的纹章。`,
    `${hero}握紧${prop}，终于意识到自己一直追查的不是谁想杀他，而是谁已经提前活过了他的人生。`
  ];
  let result = "";
  let index = 0;
  while (countText(result) < target + 80) {
    const transition = index >= blocks.length ? `局势再次翻转。第${Math.floor(index / blocks.length) + 1}轮试探中，` : "";
    result += `${result ? "\n\n" : ""}${transition}${blocks[index % blocks.length]}`;
    index += 1;
  }
  return trimToWritingLength(result, target);
}

function demoAI(type, p, c) {
  if (type === "draft") return demoDraftToLength(p, c, state.aiDraftConfig.words, state.aiDraftConfig.direction);
  const hero = p.assets.find((asset) => asset.type === "character")?.name || samplePersonName(p.id || p.title, 1);
  if (type === "logic") return `1. “关键异常人物现身”是强钩子，但需要在下一集尽快给出${hero}确认异常的证据。\n2. 核心能力如果有代价，建议明确代价是否可恢复，避免后续爽点失重。\n3. 袭击者身份尚未留下可追踪线索，可补一个服饰、口音或工具细节。\n4. 建议记录状态变化：${hero}付出一次代价；袭击者行动失败；新的悬疑人物现身。`;
  if (type === "summary") return `${hero}在危机中被迫启用核心能力，完成第一次反制，并在混乱中发现一个不该出现的人。\n\n新增伏笔：异常人物现身；能力代价。状态变化：${hero}付出一次代价。`;
  const samples = {
    continue: `那人从灯影里抬起脸，雨水顺着惨白的下颌滴落。\n\n${hero}认得他。就在不久前，自己还亲眼确认过这个人已经不可能出现在这里。\n\n“${hero}，”那人开口，声音像湿纸贴过青砖，“你欠我的东西，该还了。”\n\n围观者齐齐后退，唯独被扣住手腕的对手突然笑起来。${hero}心中一沉——这场伏击，从来不是为了杀他，而是为了让所有人亲眼看见这一幕。`,
    polish: c.content.replace("铜锣声砸进雨夜时", "铜锣声劈开雨幕时").replace("他笑了：“换。”", `${hero}忽然笑了，声音很轻：“换。”`),
    expand: `${c.content}\n\n雨水顺着${hero}的睫毛往下淌。他听见四周骤然安静，连屋檐落水的声音都变得清晰。对手虎口的薄茧、袖口沾着的香灰，以及腰间那枚倒挂的铜鱼符，在灯光下一闪而过。`,
    rewrite: `危机落下来之前，${hero}先看见了自己的退路被彻底封死。\n\n【是否支付代价，换取下一步行动线索？】\n\n雨水没过手背。身后的对手压低声音：“现在求饶，已经晚了。”\n\n${hero}吐掉嘴里的血，盯着那行只有自己能看见的小字：“成交。”`
  };
  return samples[type] || "AI 已完成处理。";
}

async function runAI(type) {
  saveEditor();
  const p = project(), c = chapter();
  if (!c.content.trim() && !["continue", "draft"].includes(type)) return toast("当前章节还没有正文");
  state.busy = true; state.aiResult = ""; render();
  try {
    const prompt = type === "draft" ? compactDraftPrompt(p, c) : buildPrompt(type, p, c);
    const response = await fetch("/api/generate", {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt, temperature: type === "logic" ? 0.3 : 0.8 })
    }).then((res) => res.json());
    if (response.error) throw new Error(response.error);
    let generatedText = response.demo ? demoAI(type, p, c) : response.content;
    if (type === "draft" && !response.demo) {
      const target = state.aiDraftConfig.words;
      let continuationRound = 0;
      while (countText(generatedText) < target * 0.9 && continuationRound < 6) {
        const remaining = Math.max(300, target - countText(generatedText));
        const continuation = await fetch("/api/generate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            prompt: compactContinuationPrompt(p, c, generatedText, remaining),
            temperature: 0.8
          })
        }).then((res) => res.json());
        if (continuation.error || !continuation.content) break;
        generatedText += `\n\n${continuation.content.trim()}`;
        continuationRound += 1;
      }
      if (countText(generatedText) > target * 1.1) generatedText = trimToWritingLength(generatedText, Math.round(target * 1.1));
    }
    if (type === "draft") {
      c.content = generatedText;
      c.status = state.view === "finalize" ? "定稿草稿" : "AI初稿";
      c.updatedAt = Date.now();
      state.aiResult = `${state.view === "finalize" ? "本章定稿草稿" : "本章初稿"}已直接写入编辑器：目标 ${state.aiDraftConfig.words.toLocaleString()} 字（允许 ±10%），合格区间 ${Math.round(state.aiDraftConfig.words*.9).toLocaleString()}—${Math.round(state.aiDraftConfig.words*1.1).toLocaleString()} 字，实际 ${countText(generatedText).toLocaleString()} 字。`;
      runQualityCheck();
      save();
    } else {
      state.aiResult = generatedText;
      if (type === "summary") { c.summary = state.aiResult; save(); }
    }
  } catch (error) {
    if (type === "draft") {
      const fallback = demoAI(type, p, c);
      c.content = fallback;
      c.status = state.view === "finalize" ? "本地定稿临时稿" : "本地临时稿";
      c.updatedAt = Date.now();
      state.aiResult = `4YI 网关调用失败：${error.message}\n\n已写入“本地临时稿”，方便你继续编辑。这个不是远程 AI 成功结果；请重启本地后端或检查 4YI 网关后再重新代写。`;
      save();
      toast("4YI网关失败，已写入本地临时稿");
    } else {
      state.aiResult = `生成失败：${error.message}`;
    }
  } finally {
    state.busy = false; render();
  }
}

function namedPropCandidates(text) {
  const suffixes = /剑|刀|枪|弓|弩|斧|锤|鞭|杖|扇|琴|镜|印|鼎|炉|铃|珠|符|令牌|玉佩|簿|卷轴|地图|伞|匣|盒|戒指|手环|冠|盔甲|战甲|袍|靴/g;
  const boundaries = ["了个", "一把", "这把", "那把", "一柄", "这柄", "那柄", "一件", "这件", "那件", "一枚", "这枚", "那枚", "手中的", "腰间的", "背后的", "名为", "叫做", "拿起", "拿出", "取出", "握住", "握紧", "拔出", "抽出", "挥动", "祭出", "捡起", "发现", "看到", "的", "和", "与", "及"];
  const results = [];
  for (const match of text.matchAll(suffixes)) {
    const end = match.index + match[0].length;
    let raw = text.slice(Math.max(0, match.index - 8), end).split(/[，。！？；：、\n\s“”"'（）()【】]/).pop() || "";
    let cut = -1;
    boundaries.forEach((word) => {
      const index = raw.lastIndexOf(word);
      if (index >= 0) cut = Math.max(cut, index + word.length);
    });
    raw = raw.slice(cut < 0 ? 0 : cut).replace(/^(从|向|将|把|个|柄|件|枚|本|张|块)/, "");
    if (raw.length >= 2 && raw.length <= 8 && raw.endsWith(match[0])) results.push(raw);
  }
  return [...new Set(results)];
}

function namedCharacterCandidates(text) {
  const surname = "赵钱孙李周吴郑王冯陈褚卫蒋沈韩杨朱秦尤许何吕施张孔曹严华金魏陶姜戚谢邹喻柏水窦章云苏潘葛奚范彭郎鲁韦昌马苗凤花方俞任袁柳鲍史唐费廉岑薛雷贺倪汤滕殷罗毕郝邬安常乐于时傅皮卞齐康伍余元卜顾孟平黄和穆萧尹洛陆林叶楚江夏白宋莫龙段邓乔梁";
  const honorific = "(总|董|经理|律师|医生|教授|校尉|队长|秘书|助理|小姐|先生|夫人|少爷|老爷)";
  const results = [];
  for (const match of text.matchAll(new RegExp(`([${surname}][\\u4e00-\\u9fa5]{1,2})(?:${honorific})?`, "g"))) {
    const name = match[1];
    if (!/公司|系统|项目|资产|故事|章节|画风|人物|场景|道具|正文|本章|当前/.test(name)) results.push(name);
  }
  for (const match of text.matchAll(/(?:“|「|^|\n)([\u4e00-\u9fa5]{2,4})(?:说|问|喊|低声|冷笑|皱眉|抬头|看向|站起|沉默|点头|摇头)/g)) {
    results.push(match[1]);
  }
  for (const match of text.matchAll(/([\u4e00-\u9fa5]{2,4})[：:]/g)) {
    results.push(match[1]);
  }
  return [...new Set(results)].filter((name) => name.length >= 2 && name.length <= 4).slice(0, 12);
}

function namedSceneCandidates(text) {
  const results = [];
  for (const match of text.matchAll(/([\u4e00-\u9fa5A-Za-z0-9]{2,12}(?:大厦|公司|集团|会议室|办公室|实验室|科研站|基地|仓库|码头|机场|医院|学校|街|城|广场|酒店|别墅|公寓|山|岛|海域|冰原|裂缝|废墟|密室|大厅|天台|车库|走廊))/g)) {
    results.push(match[1]);
  }
  return [...new Set(results)].slice(0, 10);
}

function extractNewAssets(text, existingAssets, p = project()) {
  const catalogs = [
    { type: "character", names: namedCharacterCandidates(text) },
    { type: "scene", names: namedSceneCandidates(text) },
    { type: "prop", names: namedPropCandidates(text) }
  ];
  const existing = new Set(existingAssets.map((asset) => asset.name));
  const seen = new Set();
  return catalogs.flatMap((catalog) => [...new Set(catalog.names)]
    .filter((name) => text.includes(name) && !existing.has(name))
    .filter((name) => { const key = `${catalog.type}:${name}`; if (seen.has(key)) return false; seen.add(key); return true; })
    .map((name) => ({
      id: uid(),
      type: catalog.type,
      name,
      version: "章节提取 v1",
      desc: catalog.type === "character"
        ? `${name}，根据本章行为与身份生成统一人物定妆；明确年龄、身形、五官、发型、服装层次和标志性细节`
        : catalog.type === "scene"
          ? `${name}，根据本章时间、时代背景和情绪生成环境设定；包含空间结构、主要光源、材质与关键陈设`
          : `${name}，本章关键道具；明确材质、尺寸、磨损状态、使用方式和近景识别特征`,
      prompt: `[${catalog.type === "character" ? "角色定妆" : catalog.type === "scene" ? "场景设定" : "道具设定"}：${name}] + [项目画风：${p.visualStyle}] + [只依据当前章节正文提取] + [保持跨镜头造型一致]`
    })));
}

async function extractAssetsWithAI(p, c) {
  if (!state.aiStatus.connected) return null;
  const known = p.assets.map((asset) => `${asset.type}:${asset.name}`).join("、") || "无";
  const prompt = `你是小说视觉资产提取器。只从“当前章节正文”中提取确实出现、后续画面需要复用的人物、地点/场景、关键道具。
禁止使用示例名，禁止从项目旧资产里脑补，禁止输出正文没有出现的鲁丽、沈妍等无关人物。
已有资产：${known}
输出严格 JSON 数组，不要解释。每项格式：
{"type":"character|scene|prop","name":"名称","desc":"基于本章内容的可视化描述，补足外观/服装/材质/空间特征，但不要添加剧情设定"}

当前章节：${c.title}
正文：
${c.content.slice(0, 12000)}`;
  const response = await fetch("/api/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt, temperature: 0.2 })
  }).then((res) => res.json());
  if (response.error || response.demo || !response.content) return null;
  const jsonText = response.content.match(/\[[\s\S]*\]/)?.[0] || response.content;
  const parsed = JSON.parse(jsonText);
  if (!Array.isArray(parsed)) return null;
  const existing = new Set(p.assets.map((asset) => asset.name));
  return parsed
    .filter((item) => ["character", "scene", "prop"].includes(item.type) && item.name && c.content.includes(item.name) && !existing.has(item.name))
    .slice(0, 20)
    .map((item) => ({
      id: uid(),
      type: item.type,
      name: String(item.name).slice(0, 20),
      version: "章节AI提取 v1",
      desc: String(item.desc || `${item.name}，依据本章正文提取的视觉资产。`).slice(0, 260),
      prompt: `[${item.type === "character" ? "角色定妆" : item.type === "scene" ? "场景设定" : "道具设定"}：${item.name}] + [项目画风：${p.visualStyle}] + [只依据当前章节正文提取] + [保持跨镜头造型一致]`
    }));
}

async function finalizeChapter() {
  saveEditor();
  const p = project();
  const c = chapter();
  if (!c?.content.trim()) return toast("本章还没有正文");
  c.status = "已完成";
  c.revision = c.publishedAt ? (c.revision || 1) + 1 : 1;
  c.publishedAt = Date.now();
  c.hasUnpublishedChanges = false;
  c.summary ||= `${c.title}已完成，共${countText(c.content)}字。`;
  runQualityCheck();
  writeChapterFacts(p, c);
  state.busy = true;
  render();
  try {
    state.pendingAssets = await extractAssetsWithAI(p, c) || extractNewAssets(c.content, p.assets, p);
  } catch {
    state.pendingAssets = extractNewAssets(c.content, p.assets, p);
  }
  state.busy = false;
  state.modal = "asset-review";
  save();
  render();
}

function completeInitialDraft() {
  saveEditor();
  const p = project();
  const c = chapter();
  if (!c?.content.trim()) return toast("本章还没有正文");
  c.status = "初稿完成";
  c.summary ||= `${c.title}已完成初稿，共${countText(c.content)}字。`;
  c.updatedAt = Date.now();
  p.updatedAt = Date.now();
  save();
  render();
  toast("初稿已完成，可以进入定稿并按细纲与四场景生成最终正文");
}

function writeChapterFacts(p, c) {
  const b = p.bible;
  const marker = `[${c.title}]`;
  b.facts = b.facts.filter((item) => !item.startsWith(marker));
  b.facts.push(`${marker} ${c.summary || `正文完成，共${countText(c.content)}字`}`);
  b.timeline = b.timeline.filter((item) => !item.startsWith(marker));
  b.timeline.push(`${marker} 本章事件已发生，章节状态：${c.status}`);
  if (c.taskCard?.foreshadow) {
    const item = `${marker} ${c.taskCard.foreshadow}`;
    if (!b.foreshadows.includes(item)) b.foreshadows.push(item);
  }
  p.assets.filter((asset) => asset.type === "character" && c.content.includes(asset.name)).forEach((asset) => {
    b.characterStates[asset.id] ||= {};
    b.characterStates[asset.id].lastSeen = c.title;
    b.characterStates[asset.id].status ||= "状态待确认";
  });
  const upsert = (key, payload) => {
    const existing = p.memories.find((memory) => memory.sourceKey === key);
    if (existing) {
      if (existing.content !== payload.content) existing.versions.push({ at: Date.now(), content: existing.content, chapterId: existing.chapterId });
      Object.assign(existing, payload, { active: true, updatedAt: Date.now() });
    } else {
      p.memories.unshift(normalizeMemory({ ...payload, sourceKey: key, source: "ai" }));
      p.memories[0].sourceKey = key;
    }
  };
  upsert(`${c.id}:plot`, {
    type: "plot", title: `${c.title} · 已发生剧情`, content: c.summary || `本章正文完成，共${countText(c.content)}字。`,
    chapterId: c.id, entityIds: p.entities.filter((entity) => c.content.includes(entity.name)).map((entity) => entity.id)
  });
  upsert(`${c.id}:time`, {
    type: "time", title: `${c.title} · 时空推进`, content: c.scenes.length ? `依次发生：${c.scenes.map((scene) => scene.title).join(" → ")}` : "本章事件已发生，具体时间位置待补充。",
    chapterId: c.id, entityIds: []
  });
  if (c.taskCard?.foreshadow) upsert(`${c.id}:clue`, {
    type: "clue", title: `${c.title} · 开放线索`, content: c.taskCard.foreshadow, chapterId: c.id, entityIds: []
  });
  p.entities.filter((entity) => entity.type === "character" && c.content.includes(entity.name)).forEach((entity) => {
    const stateInfo = b.characterStates[entity.id] || {};
    upsert(`${c.id}:character:${entity.id}`, {
      type: "character", title: `${entity.name} · 章末状态`,
      content: `${entity.name}最后出现在${c.title}；状态：${stateInfo.status || "待确认"}；目标：${stateInfo.goal || "待确认"}。`,
      chapterId: c.id, entityIds: [entity.id]
    });
  });
}

function addPendingAsset() {
  const name = $("#manualAssetName")?.value.trim();
  const type = $("#manualAssetType")?.value || "prop";
  if (!name) return toast("请先填写资产名称");
  if (project().assets.some((asset) => asset.name === name) || state.pendingAssets.some((asset) => asset.name === name)) return toast("这个资产已经存在");
  const labels = { character: "人物", scene: "场景", prop: "关键道具" };
  state.pendingAssets.push({
    id: uid(), type, name, version: "章节手动提取 v1",
    desc: `${name}，本章新增${labels[type]}；根据正文上下文补全外观、材质、比例、状态与可持续复用的视觉识别特征`,
    prompt: `[${labels[type]}：${name}] + [项目画风：${project().visualStyle}] + [保持跨镜头造型一致]`
  });
  render(); toast(`${name} 已加入待确认资产`);
}

function saveExtractedAssets() {
  const checked = $$("[data-pending-asset]:checked").map((el) => state.pendingAssets[Number(el.dataset.pendingAsset)]);
  const outputMode = $("#assetOutputMode")?.value || "人物定妆概念图";
  const p = project();
  checked.forEach((asset) => {
    const prompts = buildAssetPrompts(asset, p);
    const completedAsset = {
      ...asset,
      outputMode,
      baseVisualStyle: p.visualStyle,
      visualFamily: visualFamilyOfText(p.visualStyle),
      prompt: prompts.positivePrompt,
      positivePrompt: prompts.positivePrompt,
      negativePrompt: prompts.negativePrompt,
      promptReady: true,
      imageStatus: "pending-api"
    };
    p.assets.push(completedAsset);
    if (!p.entities.some((entity) => entity.name === completedAsset.name && entity.type === (completedAsset.type === "scene" ? "location" : completedAsset.type))) {
      p.entities.push(normalizeEntity({ ...entityFromAsset(completedAsset), firstChapterId: chapter()?.id }));
    }
  });
  state.pendingAssets = [];
  state.modal = null;
  state.view = "storyboard";
  save();
  render();
  toast(checked.length ? `已新增 ${checked.length} 项视觉资产，选择画风后即可生成故事板` : "正文资产检查完成，可以生成故事板");
}

function splitSentences(text) {
  return text.split(/\n+|(?<=[。！？])/).map((x) => x.trim()).filter(Boolean);
}

function storyboardStyleGuide(style) {
  const meta = STORYBOARD_STYLE_GUIDES[normalizeStoryboardStyle(style)];
  return meta?.prompt || `${style}, coherent professional storyboard image style`;
}

function storyboardStyleMeta(style) {
  return STORYBOARD_STYLE_GUIDES[normalizeStoryboardStyle(style)] || { temp: "暖/冷", family: "通用", prompt: storyboardStyleGuide(style) };
}

function visualFamilyOfText(text = "") {
  if (/国风|水墨|工笔|重彩|东方|古风/.test(text)) return "国风";
  if (/日系|动画|赛璐璐|anime/i.test(text)) return "日系";
  if (/欧美|写实|电影|油画|美式|哥特|暗黑|western|comic|gothic/i.test(text)) return "欧美";
  return "通用";
}

function assetVisualFamily(asset) {
  return asset.visualFamily || visualFamilyOfText(`${asset.baseVisualStyle || ""} ${asset.positivePrompt || ""} ${asset.desc || ""}`);
}

function storyboardAssetIssue(p, shot) {
  const linkedIds = shot.assetIds?.length ? shot.assetIds : linkedAssetIdsForChapter(p, chapter());
  const linkedAssets = p.assets.filter((asset) => linkedIds.includes(asset.id));
  if (!linkedAssets.length) return "本镜头没有关联视觉资产，请先在故事板里关联本章人物、道具或场景。";
  const notReady = linkedAssets.filter((asset) => !asset.imageUrl);
  if (notReady.length) return `请先到视觉资产库生成并确认定妆照：${notReady.map((asset) => asset.name).join("、")}。`;
  const styleMeta = storyboardStyleMeta(p.storyboardStyle);
  if (styleMeta.family !== "通用") {
    const incompatible = linkedAssets.filter((asset) => {
      const family = assetVisualFamily(asset);
      return family !== "通用" && family !== styleMeta.family;
    });
    if (incompatible.length) return `当前定妆照无法生成此类风格板图。「${normalizeStoryboardStyle(p.storyboardStyle)}」属于${styleMeta.family}，不匹配资产：${incompatible.map((asset) => `${asset.name}(${assetVisualFamily(asset)})`).join("、")}。请先重新生成对应风格定妆照，或选择通用风格故事板。`;
  }
  return "";
}

function assetReferenceText(asset) {
  return [
    `${asset.name}#${asset.id.slice(0, 8)}`,
    `类型=${asset.type}`,
    `版本=${asset.version || "v1"}`,
    `种子=${asset.seed || 1}`,
    `参考权重=${asset.referenceWeight ?? 0.8}`,
    `描述=${asset.desc || "暂无"}`,
    asset.positivePrompt ? `定妆提示=${asset.positivePrompt}` : "",
    asset.imageUrl ? `参考图=${asset.imageUrl}` : ""
  ].filter(Boolean).join("；");
}

function chooseShotAsset(linkedAssets, sentence, type, fallback) {
  return linkedAssets.find((asset) => asset.type === type && sentence.includes(asset.name))
    || linkedAssets.find((asset) => asset.type === type)
    || fallback;
}

function buildShotPrompt({ p, shot, linkedAssets, actor, scene }) {
  const style = normalizeStoryboardStyle(p.storyboardStyle);
  const styleGuide = storyboardStyleGuide(style);
  const assetDetails = linkedAssets.map(assetReferenceText).join("\n") || "无";
  return `故事板画风：${style}
画风执行规范：${styleGuide}
画面比例：16:9
镜头：${shot.shotSize}
本镜头画面：${shot.visual}
角色动作：${shot.action}
情绪：${shot.emotion}
场景：${scene?.name || shot.scene || p.era}
对白：${shot.dialogue || "无"}
主角色：${actor?.name || "按正文角色"}
关联视觉资产：
${assetDetails}
图片输出约束：
1. 必须以视觉资产库的定妆照为准进行二次加工，只转换画风、光影和镜头构图。
2. 人物脸型、年龄感、发型、身形比例、服装版本、道具材质、场景结构不得改变。
3. 只画本镜头需要出现的角色与物件，不要额外添加无关人物。
4. 如果资产定妆照和目标画风类别不兼容，应提示用户重新生成对应风格定妆照，而不是强行出图。`;
}

function buildShotImagePrompt(p, shot) {
  const styleGuide = storyboardStyleGuide(p.storyboardStyle);
  return `${shot.prompt}

${shot.motion}

最终出图要求：
${styleGuide}
Use the linked asset portrait/reference image as the identity lock. Transform it into the selected storyboard style only; do not redesign the character, costume, prop material, or scene layout. 16:9 storyboard frame, single coherent panel, readable action, clear foreground/midground/background, strong cinematic composition.
Negative prompt: ${STORYBOARD_NEGATIVE_PROMPT}`;
}

function shotReferenceImages(p, shot) {
  const linkedIds = shot.assetIds?.length ? shot.assetIds : linkedAssetIdsForChapter(p, chapter());
  return p.assets
    .filter((asset) => linkedIds.includes(asset.id) && asset.imageUrl)
    .map((asset) => asset.imageUrl)
    .filter(Boolean);
}

async function generateShots() {
  saveEditor();
  const p = project(), c = chapter();
  if (!c?.content.trim()) return toast("请先写入章节正文");
  if (c.status !== "已完成") return toast("请先确认定稿，再生成故事板");
  state.busy = true; render();
  await new Promise((resolve) => setTimeout(resolve, 650));
  const sourceSentences = splitSentences(c.content);
  const mode = p.storyboardConfig?.[c.id]?.mode || "12";
  const shotCount = mode === "auto" ? Math.max(6, Math.min(24, Math.round(sourceSentences.length / 2))) : Number(mode);
  const sentences = Array.from({ length: shotCount }, (_, index) => sourceSentences[Math.min(sourceSentences.length - 1, Math.floor(index * sourceSentences.length / shotCount))] || `镜头${index + 1}`);
  const sizes = ["竖屏全景 / 低机位", "中近景 / 侧拍", "面部特写 / 推镜", "双人中景 / 横摇"];
  const linkedIds = linkedAssetIdsForChapter(p, c);
  const linkedAssets = p.assets.filter((asset) => linkedIds.includes(asset.id));
  const assetNames = linkedAssets.map((asset) => `${asset.name}#${asset.id.slice(0,8)}@seed${asset.seed || 1}@ref${asset.referenceWeight ?? 0.8}${asset.imageUrl ? "@有参考图" : ""}`);
  const previous = p.storyboards?.[c.id] || [];
  const generatedShots = sentences.map((sentence, index) => {
    const dialogue = sentence.match(/[“「](.*?)[”」]/)?.[1] || "";
    const actorAsset = chooseShotAsset(linkedAssets, sentence, "character", null);
    const sceneAsset = chooseShotAsset(linkedAssets, sentence, "scene", null);
    const actor = actorAsset?.name || "主角";
    const scene = sceneAsset?.name || p.era;
    const visual = sentence.replace(/[“”「」]/g, "").slice(0, 44);
    const shot = {
      no: index + 1, duration: `${4 + (index % 3)}秒`, visual,
      shotSize: sizes[index % sizes.length],
      action: `${actor}${index % 2 ? "快速转身观察四周" : "在压迫中作出反应"}`,
      emotion: index % 3 === 0 ? "紧张、压迫" : index % 3 === 1 ? "警觉、克制" : "震惊、悬疑",
      scene, dialogue,
      assetIds: linkedIds,
      assetNames,
      motion: `[摄影机${index % 2 ? "缓慢向前推移" : "低机位快速跟进"}] + [跟拍对象：${actor}] + [保持关联资产ID、参考图、种子与版本不变] + [角色动作：${visual}] + [镜头节奏：${index % 2 ? "压迫停顿" : "急促后定格"}]`,
      locked: false
    };
    shot.prompt = buildShotPrompt({ p, shot, linkedAssets, actor: actorAsset, scene: sceneAsset });
    return shot;
  });
  previous.forEach((shot, index) => { if (shot.locked && index < generatedShots.length) generatedShots[index] = { ...shot, no: index + 1 }; });
  p.storyboards ||= {};
  p.storyboards[c.id] = generatedShots;
  state.busy = false; state.storyboardTab = "shots"; save(); render(); toast(`已生成 ${generatedShots.length} 格连续故事板`);
}

function shotsForChapter() {
  const p = project(), c = chapter();
  p.storyboards ||= {};
  p.storyboards[c.id] ||= [];
  return p.storyboards[c.id];
}
function renumberShots(shots) { shots.forEach((shot, index) => { shot.no = index + 1; }); }
function toggleShotLock(index) {
  const shot = shotsForChapter()[index];
  if (!shot) return;
  shot.locked = !shot.locked; save(); render();
}
function deleteShot(index) {
  const shots = shotsForChapter();
  if (shots[index]?.locked) return toast("请先解锁这个镜头");
  shots.splice(index, 1); renumberShots(shots); save(); render(); toast("镜头已删除");
}
function addShot() {
  const shots = shotsForChapter(), no = shots.length + 1;
  const p = project(), c = chapter();
  const linkedIds = linkedAssetIdsForChapter(p, c);
  const linkedAssets = p.assets.filter((asset) => linkedIds.includes(asset.id));
  const shot = { no, duration: "5秒", visual: "点击重做生成此镜头内容", shotSize: "中景 / 平视", action: "待设计", emotion: "待设计", scene: p.era, dialogue: "", assetIds: linkedIds, assetNames: linkedAssets.map((asset) => `${asset.name}#${asset.id.slice(0,8)}`), motion: "固定镜头", locked: false };
  shot.prompt = buildShotPrompt({ p, shot, linkedAssets, actor: chooseShotAsset(linkedAssets, "", "character", null), scene: chooseShotAsset(linkedAssets, "", "scene", null) });
  shots.push(shot);
  save(); render();
}
function regenerateShot(index) {
  const shots = shotsForChapter(), shot = shots[index];
  if (!shot) return;
  if (shot.locked) return toast("请先解锁这个镜头");
  const sentences = splitSentences(chapter().content);
  const source = sentences[(index * 3 + Date.now()) % Math.max(1, sentences.length)] || "新的叙事镜头";
  const p = project(), c = chapter();
  const linkedAssets = p.assets.filter((asset) => (shot.assetIds?.length ? shot.assetIds : linkedAssetIdsForChapter(p, c)).includes(asset.id));
  const actorAsset = chooseShotAsset(linkedAssets, source, "character", null);
  const sceneAsset = chooseShotAsset(linkedAssets, source, "scene", null);
  shot.visual = source.replace(/[“”「」]/g, "").slice(0, 52);
  shot.action = `${actorAsset?.name || "角色"}围绕“${shot.visual.slice(0, 16)}”完成可见动作`;
  shot.scene = sceneAsset?.name || shot.scene || p.era;
  shot.prompt = buildShotPrompt({ p, shot, linkedAssets, actor: actorAsset, scene: sceneAsset });
  delete shot.imageUrl;
  save(); render(); toast(`镜头 ${index + 1} 已重新设计`);
}
async function generateShotImage(index) {
  const shot = shotsForChapter()[index];
  if (!shot) return;
  if (!state.aiStatus.imageConnected) return toast("请先在服务端配置 AI_IMAGE_API_KEY");
  const issue = storyboardAssetIssue(project(), shot);
  if (issue) return toast(issue);
  state.busy = true;
  state.storyboardImageJob = { type: "image", shotNo: shot.no, done: 0, total: 1 };
  render();
  try {
    const p = project();
    const result = await fetch("/api/image", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ prompt: buildShotImagePrompt(p, shot), size: "1536x1024", referenceImages: shotReferenceImages(p, shot) }) }).then((res) => res.json());
    if (!result.imageUrl) throw new Error(result.error || "未返回图片");
    shot.imageUrl = result.imageUrl;
    state.storyboardImageJob.done = 1;
    save();
    toast(`镜头 ${index + 1} 画面已生成`);
  } catch (error) { toast(`生成失败：${error.message}`); }
  finally { state.busy = false; state.storyboardImageJob = null; render(); }
}
async function generateAllShotImages() {
  if (!state.aiStatus.imageConnected) return toast("请先在服务端配置 AI_IMAGE_API_KEY");
  const shots = shotsForChapter();
  const firstIssue = shots.map((shot) => storyboardAssetIssue(project(), shot)).find(Boolean);
  if (firstIssue) return toast(firstIssue);
  state.busy = true;
  state.storyboardImageJob = { type: "image", shotNo: null, done: 0, total: shots.length };
  render();
  let completed = 0;
  try {
    for (const shot of shots) {
      if (shot.locked && shot.imageUrl) { completed += 1; state.storyboardImageJob.done = completed; continue; }
      state.storyboardImageJob = { type: "image", shotNo: shot.no, done: completed, total: shots.length };
      render();
      const p = project();
      const result = await fetch("/api/image", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ prompt: buildShotImagePrompt(p, shot), size: "1536x1024", referenceImages: shotReferenceImages(p, shot) }) }).then((res) => res.json());
      if (!result.imageUrl) throw new Error(`镜头${shot.no}：${result.error || "未返回图片"}`);
      shot.imageUrl = result.imageUrl;
      completed += 1;
      state.storyboardImageJob.done = completed;
      save();
      render();
    }
    toast(`已生成 ${completed} 个可见故事板画面`);
  } catch (error) { toast(`批量生成中断：${error.message}`); }
  finally { state.busy = false; state.storyboardImageJob = null; render(); }
}

document.addEventListener("keydown", (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k" && project()) {
    event.preventDefault();
    action("open-book-search");
  } else if (event.key === "Escape" && state.modal === "book-search") {
    action("close-modal");
  }
});

render();
checkAI();
