const SIZE = 256;
const WALL_PREVIEW_PADDING = 6;
const TRANSPARENT = [0, 0, 0, 0];
const DOUBLE_HEADER = [208,242,180,67,0,1,0,0,0,1,0,0,235,0,0,0,0,0,1,0];
const TRIPLE_HEADER = [80,1,187,153,0,1,0,0,0,1,0,0,72,1,0,0,0,0,1,0];
const GENERIC_SAIL_HEADER = [176,43,136,1,0,1,0,0,0,1,0,0,132,0,0,0,0,0,1,0];
const CANVAS_HEADER = [1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0];

const MODE_CONFIG = {
  arkPaintingCanvas: {
    name: "Custom_Sign_PaintingCanvas_Sign",
    suffix: "_Sign_PaintingCanvas_Sign",
    header: CANVAS_HEADER,
    layers: [{ key: "art", label: "ARK Painting Canvas", frame: [0, 0, 256, 256], safe: [0, 0, 256, 256] }],
  },
  arkSmallWoodSign: {
    name: "Custom_Sign_Small_Wood_Sign",
    suffix: "_Sign_Small_Wood_Sign",
    header: CANVAS_HEADER,
    layers: [{ key: "art", label: "ARK Small Wood Sign", frame: [0, 0, 256, 256], safe: [12, 24, 232, 208] }],
  },
  arkSmallMetalSign: {
    name: "Custom_Sign_Small_Metal_Sign",
    suffix: "_Sign_Small_Metal_Sign",
    header: CANVAS_HEADER,
    layers: [{ key: "art", label: "ARK Small Metal Sign", frame: [0, 0, 256, 256], safe: [12, 24, 232, 208] }],
  },
  arkWallWoodSign: {
    name: "Custom_Sign_Wall_Wood_Sign",
    suffix: "_Sign_Wall_Wood_Sign",
    header: CANVAS_HEADER,
    layers: [{ key: "art", label: "ARK Wooden Wall Sign", frame: [0, 0, 256, 256], safe: [12, 40, 232, 176] }],
  },
  arkWallMetalSign: {
    name: "Custom_Sign_Wall_Metal_Sign",
    suffix: "_Sign_Wall_Metal_Sign",
    header: CANVAS_HEADER,
    layers: [{ key: "art", label: "ARK Metal Wall Sign", frame: [0, 0, 256, 256], safe: [12, 40, 232, 176] }],
  },
  arkWoodBillboard: {
    name: "Custom_Sign_Billboard_Wood_Sign",
    suffix: "_Sign_Billboard_Wood_Sign",
    header: CANVAS_HEADER,
    layers: [{ key: "art", label: "ARK Wooden Billboard", frame: [0, 0, 256, 256], safe: [10, 18, 236, 220] }],
  },
  arkMetalBillboard: {
    name: "Custom_Sign_Billboard_Metal_Sign",
    suffix: "_Sign_Billboard_Metal_Sign",
    header: CANVAS_HEADER,
    layers: [{ key: "art", label: "ARK Metal Billboard", frame: [0, 0, 256, 256], safe: [10, 18, 236, 220] }],
  },
  arkWarMap: {
    name: "Custom_Sign_WarMap_C",
    suffix: "_Sign_WarMap_C",
    size: 512,
    layers: [{ key: "art", label: "ARK War Map", frame: [0, 0, 512, 512], safe: [0, 0, 512, 512] }],
  },
  arkSingleFlag: {
    name: "Custom_Flag_Single_Sign",
    suffix: "_Flag_Single_Sign",
    header: CANVAS_HEADER,
    layers: [{ key: "art", label: "ARK Single Flag", frame: [0, 0, 256, 256], safe: [18, 18, 220, 220] }],
  },
  arkFlag: {
    name: "Custom_PrimalItemStructure_Flag_Sign",
    suffix: "_PrimalItemStructure_Flag_Sign",
    header: CANVAS_HEADER,
    layers: [{ key: "art", label: "ARK Flag", frame: [0, 0, 256, 256], safe: [18, 18, 220, 220] }],
  },
  arkMultiPanelFlag: {
    name: "Custom_Flag_Sign",
    suffix: "_Flag_Sign",
    header: CANVAS_HEADER,
    layers: [{ key: "art", label: "ARK Multi Panel Flag", frame: [0, 0, 256, 256], safe: [18, 18, 220, 220] }],
  },
  arkBroodmotherFlag: {
    name: "Custom_Flag_BossSpider_Sign",
    suffix: "_Flag_BossSpider_Sign",
    header: CANVAS_HEADER,
    layers: [{ key: "art", label: "ARK Broodmother Flag", frame: [0, 0, 256, 256], safe: [18, 18, 220, 220] }],
  },
  arkMegapithecusFlag: {
    name: "Custom_Flag_BossGorilla_Sign",
    suffix: "_Flag_BossGorilla_Sign",
    header: CANVAS_HEADER,
    layers: [{ key: "art", label: "ARK Megapithecus Flag", frame: [0, 0, 256, 256], safe: [18, 18, 220, 220] }],
  },
  arkDragonFlag: {
    name: "Custom_Flag_BossDragon_Sign",
    suffix: "_Flag_BossDragon_Sign",
    header: CANVAS_HEADER,
    layers: [{ key: "art", label: "ARK Dragon Flag", frame: [0, 0, 256, 256], safe: [18, 18, 220, 220] }],
  },
  arkShagRug: {
    name: "Custom_Rug_Sign",
    suffix: "_Rug_Sign",
    header: CANVAS_HEADER,
    layers: [{ key: "art", label: "ARK Shag Rug", frame: [0, 0, 256, 256], safe: [16, 16, 224, 224] }],
  },
  arkSpotlight: {
    name: "Custom_Spotlight_Sign",
    suffix: "_Spotlight_Sign",
    header: CANVAS_HEADER,
    layers: [{ key: "art", label: "ARK Spotlight", frame: [0, 0, 256, 256], safe: [16, 16, 224, 224] }],
  },
  singleSail: {
    name: "Custom_SailGeneric_C",
    suffix: "_SailGeneric_C",
    header: GENERIC_SAIL_HEADER,
    layers: [
      { key: "art", label: "單桅帆", frame: [8, 18, 240, 220], safe: [24, 34, 208, 188] },
    ],
  },
  double: {
    name: "Custom_SailDouble_C",
    suffix: "_SailDouble_C",
    header: DOUBLE_HEADER,
    layers: [
      { key: "top", label: "上帆", frame: [8, 18, 140, 94], safe: [14, 28, 128, 68] },
      { key: "bottom", label: "下帆", frame: [168, 26, 76, 80], safe: [174, 38, 64, 48] },
    ],
  },
  triple: {
    name: "Custom_SailTriple_C",
    suffix: "_SailTriple_C",
    header: TRIPLE_HEADER,
    layers: [
      { key: "top", label: "上帆", frame: [8, 16, 140, 92], safe: [20, 30, 116, 58] },
      { key: "middle", label: "中帆", frame: [166, 18, 82, 90], safe: [174, 32, 66, 58] },
      { key: "bottom", label: "下帆", frame: [8, 146, 240, 92], safe: [30, 154, 196, 74] },
    ],
  },
  painting: {
    name: "Custom_Sign_PaintingCanvas_C",
    suffix: "_Sign_PaintingCanvas_C",
    header: CANVAS_HEADER,
    layers: [{ key: "art", label: "單幅畫布牆圖片", frame: [0, 0, 256, 256], safe: [0, 0, 256, 256] }],
  },
  wallCanvas: {
    name: "Custom_Sign_PaintingCanvas_C",
    suffix: "_Sign_PaintingCanvas_C",
    header: CANVAS_HEADER,
    layers: [{ key: "art", label: "單幅畫布牆圖片", frame: [0, 0, 256, 256], safe: [0, 0, 256, 256] }],
  },
  wall: {
    name: "K",
    suffix: "_Sign_PaintingCanvas_C",
    header: CANVAS_HEADER,
    wall: true,
    layers: [{ key: "art", label: "拼圖牆大圖", frame: [0, 0, 256, 256], safe: [0, 0, 256, 256] }],
  },
  claimFlag: {
    name: "Custom_ClaimingFlag_IslandSettlement_C",
    suffix: "_ClaimingFlag_IslandSettlement_C",
    header: CANVAS_HEADER,
    layers: [{ key: "art", label: "島嶼領地旗圖片", frame: [0, 0, 256, 256], safe: [18, 18, 220, 220] }],
  },
  singleFlag: {
    name: "Custom_Flag_SM_Single_C",
    suffix: "_Flag_SM_Single_C",
    header: CANVAS_HEADER,
    layers: [{ key: "art", label: "獨立旗幟圖片", frame: [0, 0, 256, 256], safe: [18, 18, 220, 220] }],
  },
  flag: {
    name: "Custom_Flag_SM_C",
    suffix: "_Flag_SM_C",
    header: CANVAS_HEADER,
    layers: [{ key: "art", label: "多面大型旗幟圖片", frame: [0, 0, 256, 256], safe: [18, 18, 220, 220] }],
  },
  signboard: {
    name: "Custom_Sign_Small_C",
    suffix: "_Sign_Small_C",
    header: CANVAS_HEADER,
    layers: [{ key: "art", label: "小型木製告示牌圖片", frame: [0, 0, 256, 256], safe: [10, 22, 236, 212] }],
  },
  hangingSign: {
    name: "Custom_Sign_Wall_Marquee_C",
    suffix: "_Sign_Wall_Marquee_C",
    header: CANVAS_HEADER,
    layers: [{ key: "art", label: "木製懸掛招牌圖片", frame: [0, 0, 256, 256], safe: [12, 40, 232, 176] }],
  },
  billboard: {
    name: "Custom_Sign_Large_C",
    suffix: "_Sign_Large_C",
    header: CANVAS_HEADER,
    layers: [{ key: "art", label: "大型木製看板圖片", frame: [0, 0, 256, 256], safe: [10, 18, 236, 220] }],
  },
  tattoo: {
    name: "Custom_Tattoo_C",
    suffix: "_Tattoo_C",
    header: CANVAS_HEADER,
    guide: "tattoo",
    layers: [
      { key: "head", label: "頭", frame: [105, 8, 46, 42], safe: [109, 12, 38, 34] },
      { key: "chest", label: "胸部", frame: [82, 58, 44, 58], safe: [86, 64, 36, 46] },
      { key: "back", label: "背", frame: [132, 58, 44, 58], safe: [136, 64, 36, 46] },
      { key: "leftArm", label: "左手", frame: [26, 58, 42, 88], safe: [30, 66, 34, 72] },
      { key: "rightArm", label: "右手", frame: [188, 58, 42, 88], safe: [192, 66, 34, 72] },
      { key: "leftLeg", label: "左腿", frame: [76, 130, 48, 100], safe: [82, 138, 36, 84] },
      { key: "rightLeg", label: "右腿", frame: [132, 130, 48, 100], safe: [138, 138, 36, 84] },
    ],
  },
};

const GAME_DEFAULT_MODE = {
  ark: "arkPaintingCanvas",
  atlas: "painting",
};

const GAME_MODE_GROUPS = {
  ark: [
    {
      key: "group.arkStructures",
      modes: ["arkPaintingCanvas", "arkSmallWoodSign", "arkSmallMetalSign", "arkWallWoodSign", "arkWallMetalSign", "arkWoodBillboard", "arkMetalBillboard", "arkSingleFlag", "arkFlag", "arkMultiPanelFlag", "arkShagRug", "arkSpotlight"],
    },
  ],
  atlas: [
    { key: "group.sails", modes: ["singleSail", "double", "triple"] },
    { key: "group.flags", modes: ["claimFlag", "singleFlag", "flag"] },
    { key: "group.structures", modes: ["painting", "signboard", "hangingSign", "billboard"] },
    { key: "group.tools", modes: ["wall", "tattoo"] },
  ],
};

const I18N = {
  "zh-TW": {
    appTitle: "ATLAS PNT 製作工具",
    seoTitle: "PNT Tool - ARK / ATLAS PNT 圖片轉換器",
    seoDescription: "PNT Tool 是 ARK / ATLAS 遊戲圖片轉換器，可將 PNG/JPG/WebP 製作成 PNT/PNG，支援畫布、旗幟、船帆、人物紋身與多幅畫作拼圖牆，適合生存遊戲玩家使用。",
    seoIntro: "ARK / ATLAS PNT 圖片轉換器，支援畫布、旗幟、船帆、人物紋身與多幅畫作拼圖牆，適合生存遊戲玩家製作遊戲圖片。",
    appIntro: "將圖片在本機瀏覽器轉成 ATLAS 可用的 PNT/PNG，不會上傳，支援船帆、畫作、旗幟、人物紋身與多幅畫作拼圖牆；完成後放入 <code>Steam\\steamapps\\common\\ATLAS\\ShooterGame\\Saved\\MyPaintings</code>。",
    language: "語言",
    modeLabel: "類型",
    wallCols: "橫向數量",
    wallRows: "直向數量",
    wallPrefix: "前綴",
    wallHint: "檔名格式：Kxy_Sign_PaintingCanvas_C，x 是橫軸，y 是直軸。",
    previewTitle: "遊戲內預覽",
    cropSelectTitle: "選擇影像裁切",
    cropPreviewTitle: "裁剪預覽",
    uploadDropTitle: "選擇檔案 / 拖放 / 貼上圖片",
    uploadDropHint: "支援 PNG、JPG、WebP。點擊此區或拖放圖片到這裡。",
    guideTab: "操作說明",
    guideTitle: "操作說明",
    guideStep1Title: "1. 上傳",
    guideStep1Text: "可透過拖放、文件選擇器或剪貼簿添加圖片。PNG 和 JPG 格式均適用。",
    guideStep2Title: "2. 調整",
    guideStep2Text: "選擇遊戲和物件類型，微調顏色，查看遊戲內預覽，所見即所得。",
    guideStep3Title: "3. 載入遊戲",
    guideStep3Text: "將 .pnt 檔案放入 MyPaintings 資料夾。\n\n資料夾位置：ShooterGame\\Saved\\MyPaintings\n\n預設路徑：C:\\Steam\\steamapps\\common\\遊戲名稱\\ShooterGame\\Saved\\MyPaintings",
    guideStep4Title: "4. 遊戲中染色",
    guideStep4Text: "背包中準備所需染料後，裝備道具「筆刷」，靠近物件按左鍵，選擇「載入畫作」並開始染色即可完成。",
    previewZoom: "檢視",
    colorCount: "{count} 色",
    fitMode: "放置方式",
    paletteLimit: "染料",
    qualityMode: "畫質模式",
    ditherAmount: "畫質強度",
    removeMode: "去背",
    threshold: "去背強度",
    fillColor: "背景填色",
    transparentBg: "去背後保持透明",
    showFrames: "顯示框線",
    outputName: "輸出檔名",
    downloadPng: "下載 PNG",
    downloadPnt: "下載 PNT",
    helpTitle: "小提醒",
    helpText: "白框是官方框，紅框是安全範圍。色盤使用 ATLAS Wiki 的 52 色染料；人物紋身建議先在遊戲內存一個空白 Tattoo PNT，再用同名檔覆蓋測試。",
    dyeListTitle: "染料清單",
    "group.sails": "船隻帆面類",
    "group.flags": "領地與主權旗幟類",
    "group.structures": "建築與基地畫布類",
    "group.tools": "其他工具",
    scale: "大小",
    moveX: "左右",
    moveY: "上下",
    rotate: "旋轉",
    rotate0: "轉正",
    rotate180: "上下顛倒",
    wallFileSummary: "{first}.pnt ... {last}.pnt，共 {count} 張",
    tattooGuide: "Tattoo 位置參考 - 請在遊戲內測試",
    "mode.singleSail": "單桅小船帆（木筏 / 斯路普帆）",
    "mode.double": "雙桅中船帆（雙桅船帆）",
    "mode.triple": "三桅大船帆（雙桅 / 帆船大帆）",
    "mode.painting": "單幅畫布牆（Wall Canvas）",
    "mode.wallCanvas": "單幅畫布牆 Wall Canvas",
    "mode.wall": "多幅畫作（拼圖牆）",
    "mode.claimFlag": "島嶼領地旗（核心主權旗）",
    "mode.singleFlag": "單面獨立落地旗幟",
    "mode.flag": "多面大型裝飾旗幟",
    "mode.signboard": "小型木製告示牌（Signboard）",
    "mode.hangingSign": "木製懸掛招牌（Hanging Sign）",
    "mode.billboard": "大型木製看板（Billboard）",
    "mode.tattoo": "人物紋身 Tattoo",
    "fit.contain": "完整放入",
    "fit.cover": "填滿裁切",
    "palette.all": "全部",
    "palette.5": "最多 5 色",
    "palette.10": "最多 10 色",
    "palette.20": "最多 20 色",
    "palette.30": "最多 30 色",
    "quality.dither": "照片優化（抖色）",
    "quality.softDither": "照片柔和",
    "quality.sharpDither": "照片銳利",
    "quality.smooth": "平滑色塊",
    "quality.pixel": "像素風",
    "quality.lineart": "線稿 / Logo",
    "quality.bw": "黑白兩色",
    "remove.none": "不去背",
    "remove.dark": "黑底/深色去背",
    "remove.edgeDark": "只去外圍黑底",
    "remove.checker": "白灰格去背",
    "remove.white": "白底去背",
    "remove.pick": "點選顏色去背",
    "layer.singleSail.art": "單桅帆",
    "layer.double.top": "上帆",
    "layer.double.bottom": "下帆",
    "layer.triple.top": "上帆",
    "layer.triple.middle": "中帆",
    "layer.triple.bottom": "下帆",
    "layer.painting.art": "單幅畫布牆圖片",
    "layer.wallCanvas.art": "畫布牆圖片",
    "layer.wall.art": "拼圖牆圖片",
    "layer.singleFlag.art": "獨立旗幟圖片",
    "layer.flag.art": "多面大型旗幟圖片",
    "layer.claimFlag.art": "島嶼領地旗圖片",
    "layer.signboard.art": "小型木製告示牌圖片",
    "layer.hangingSign.art": "木製懸掛招牌圖片",
    "layer.billboard.art": "大型木製看板圖片",
    "layer.tattoo.head": "頭",
    "layer.tattoo.chest": "胸部",
    "layer.tattoo.back": "背",
    "layer.tattoo.leftArm": "左手",
    "layer.tattoo.rightArm": "右手",
    "layer.tattoo.leftLeg": "左腿",
    "layer.tattoo.rightLeg": "右腿",
  },
  en: {
    appTitle: "ATLAS PNT Maker",
    seoTitle: "PNT Tool - ARK / ATLAS PNT Image Converter",
    seoDescription: "PNT Tool converts PNG, JPG, and WebP images into ARK and ATLAS PNT/PNG game paint files for canvases, flags, sails, tattoos, and survival game wall mosaics.",
    seoIntro: "ARK / ATLAS PNT image converter for survival game players, supporting canvases, flags, sails, tattoos, and multi-canvas wall mosaics.",
    appIntro: "Convert images locally in your browser into ATLAS-ready PNT/PNG files; nothing is uploaded, and it supports sails, paintings, flags, tattoos, and multi-canvas wall mosaics. Place finished files in <code>Steam\\steamapps\\common\\ATLAS\\ShooterGame\\Saved\\MyPaintings</code>.",
    language: "Language",
    modeLabel: "Type",
    wallCols: "Columns",
    wallRows: "Rows",
    wallPrefix: "Prefix",
    wallHint: "File format: Kxy_Sign_PaintingCanvas_C, where x is horizontal and y is vertical.",
    previewTitle: "In-game Preview",
    cropSelectTitle: "Choose Image and Crop",
    cropPreviewTitle: "Crop Preview",
    uploadDropTitle: "Choose file / drop / paste image",
    uploadDropHint: "PNG, JPG, and WebP are supported. Click here or drop an image.",
    guideTab: "How to Use",
    guideTitle: "How to Use",
    guideStep1Title: "1. Upload",
    guideStep1Text: "Add images by drag and drop, file picker, or clipboard paste. PNG and JPG both work.",
    guideStep2Title: "2. Adjust",
    guideStep2Text: "Choose the game and object type, fine-tune colors, and check the in-game preview. What you see is what you get.",
    guideStep3Title: "3. Load in Game",
    guideStep3Text: "Put the .pnt file in the MyPaintings folder.\n\nFolder: ShooterGame\\Saved\\MyPaintings\n\nDefault path: C:\\Steam\\steamapps\\common\\GameName\\ShooterGame\\Saved\\MyPaintings",
    guideStep4Title: "4. Paint in Game",
    guideStep4Text: "Prepare the required dyes in your inventory, equip the Paintbrush, left-click near the object, choose Load Painting, then start painting.",
    previewZoom: "View",
    colorCount: "{count} colors",
    fitMode: "Fit",
    paletteLimit: "Dyes",
    qualityMode: "Quality mode",
    ditherAmount: "Quality strength",
    removeMode: "Remove BG",
    threshold: "BG strength",
    fillColor: "BG fill",
    transparentBg: "Keep removed background transparent",
    showFrames: "Show frames",
    outputName: "Output name",
    downloadPng: "Download PNG",
    downloadPnt: "Download PNT",
    helpTitle: "Tip",
    helpText: "White frames are official frames, and red frames are safe areas. The palette uses the 52 ATLAS Wiki dyes. For tattoos, save a blank Tattoo PNT in game first, then test by replacing it with the same filename.",
    dyeListTitle: "Dye List",
    "group.sails": "Ship Sail Types",
    "group.flags": "Territory and Flag Types",
    "group.structures": "Building and Base Canvas Types",
    "group.tools": "Other Tools",
    scale: "Size",
    moveX: "Left / Right",
    moveY: "Up / Down",
    rotate: "Rotate",
    rotate0: "Straighten",
    rotate180: "Flip upside down",
    wallFileSummary: "{first}.pnt ... {last}.pnt, {count} files",
    tattooGuide: "Tattoo placement guide - test in game",
    "mode.singleSail": "Single Small Sail (raft / sloop sail)",
    "mode.double": "Double Medium Sail",
    "mode.triple": "Triple Large Sail",
    "mode.painting": "Wall Canvas",
    "mode.wallCanvas": "Single Wall Canvas",
    "mode.wall": "Multi-canvas Wall Mosaic",
    "mode.claimFlag": "Island Claim Flag",
    "mode.singleFlag": "Single-sided Standing Flag",
    "mode.flag": "Large Multi-panel Flag",
    "mode.signboard": "Wooden Signboard",
    "mode.hangingSign": "Hanging Wall Sign",
    "mode.billboard": "Large Wooden Billboard",
    "mode.tattoo": "Character Tattoo",
    "fit.contain": "Contain",
    "fit.cover": "Cover / crop",
    "palette.all": "All",
    "palette.5": "Max 5 colors",
    "palette.10": "Max 10 colors",
    "palette.20": "Max 20 colors",
    "palette.30": "Max 30 colors",
    "quality.dither": "Photo optimized (dither)",
    "quality.softDither": "Soft photo",
    "quality.sharpDither": "Sharp photo",
    "quality.smooth": "Smooth blocks",
    "quality.pixel": "Pixel art",
    "quality.lineart": "Line art / Logo",
    "quality.bw": "Black and white",
    "remove.none": "None",
    "remove.dark": "Dark background",
    "remove.edgeDark": "Outer dark only",
    "remove.checker": "White-gray checker",
    "remove.white": "White background",
    "remove.pick": "Picked color",
    "layer.singleSail.art": "Single sail",
    "layer.double.top": "Top sail",
    "layer.double.bottom": "Bottom sail",
    "layer.triple.top": "Top sail",
    "layer.triple.middle": "Middle sail",
    "layer.triple.bottom": "Bottom sail",
    "layer.painting.art": "Wall canvas image",
    "layer.wallCanvas.art": "Wall canvas image",
    "layer.wall.art": "Mosaic image",
    "layer.singleFlag.art": "Single flag image",
    "layer.flag.art": "Multi-panel flag image",
    "layer.claimFlag.art": "Island claim flag image",
    "layer.signboard.art": "Signboard image",
    "layer.hangingSign.art": "Hanging sign image",
    "layer.billboard.art": "Billboard image",
    "layer.tattoo.head": "Head",
    "layer.tattoo.chest": "Chest",
    "layer.tattoo.back": "Back",
    "layer.tattoo.leftArm": "Left arm",
    "layer.tattoo.rightArm": "Right arm",
    "layer.tattoo.leftLeg": "Left leg",
    "layer.tattoo.rightLeg": "Right leg",
  },
};

const LANGUAGE_ALIASES = {
  ja: {
    appTitle: "PNT Tool",
    seoTitle: "PNT Tool - ARK / ATLAS PNT 画像変換ツール",
    seoDescription: "ARK / ATLAS 用の PNT/PNG を作成できる画像変換ツール。キャンバス、旗、帆、タトゥー、サバイバルゲーム向けの壁画に対応します。",
    seoIntro: "ARK / ATLAS 用 PNT 画像変換ツール。キャンバス、旗、帆、タトゥー、複数キャンバス壁画に対応します。",
    appIntro: "画像をこのブラウザー内だけで ATLAS 用の PNT/PNG に変換します。アップロードは行いません。帆、絵画、旗、タトゥー、複数キャンバスの壁画に対応し、完成ファイルは <code>Steam\\steamapps\\common\\ATLAS\\ShooterGame\\Saved\\MyPaintings</code> に入れてください。",
    language: "言語",
    modeLabel: "種類",
    previewTitle: "プレビュー",
    previewZoom: "表示",
    colorCount: "{count} 色",
    fitMode: "配置",
    paletteLimit: "染料",
    qualityMode: "画質モード",
    ditherAmount: "画質の強さ",
    removeMode: "背景削除",
    outputName: "出力名",
    downloadPng: "PNG ダウンロード",
    downloadPnt: "PNT ダウンロード",
    helpTitle: "ヒント",
    dyeListTitle: "染料リスト",
    scale: "サイズ",
    moveX: "左右",
    moveY: "上下",
    rotate: "回転",
    rotate0: "正位置",
    rotate180: "上下反転",
    "mode.singleSail": "単帆（小型帆 / いかだ帆）",
    "mode.double": "二枚帆（中型帆）",
    "mode.triple": "三枚帆（大型帆）",
    "mode.painting": "絵画 PaintingCanvas",
    "mode.wallCanvas": "単体ウォールキャンバス",
    "mode.wall": "複数絵画（壁モザイク）",
    "mode.singleFlag": "片面旗 Single Flag",
    "mode.flag": "大型多面旗 Multi-panel Flag",
    "mode.tattoo": "キャラクタータトゥー",
  },
  ko: {
    appTitle: "PNT Tool",
    seoTitle: "PNT Tool - ARK / ATLAS PNT 이미지 변환기",
    seoDescription: "ARK / ATLAS용 PNT/PNG 게임 페인트 파일을 만드는 이미지 변환기입니다. 캔버스, 깃발, 돛, 문신, 벽화 제작을 지원합니다.",
    seoIntro: "ARK / ATLAS PNT 이미지 변환기입니다. 캔버스, 깃발, 돛, 문신, 여러 캔버스 벽화를 지원합니다.",
    appIntro: "이미지를 이 브라우저 안에서만 ATLAS용 PNT/PNG로 변환합니다. 업로드하지 않으며 돛, 그림, 깃발, 문신, 여러 캔버스 벽화를 지원합니다. 완성 파일은 <code>Steam\\steamapps\\common\\ATLAS\\ShooterGame\\Saved\\MyPaintings</code>에 넣으세요.",
    language: "언어",
    modeLabel: "유형",
    previewTitle: "미리보기",
    previewZoom: "보기",
    colorCount: "{count} 색",
    fitMode: "배치",
    paletteLimit: "염료",
    qualityMode: "화질 모드",
    ditherAmount: "화질 강도",
    removeMode: "배경 제거",
    outputName: "출력 이름",
    downloadPng: "PNG 다운로드",
    downloadPnt: "PNT 다운로드",
    helpTitle: "팁",
    dyeListTitle: "염료 목록",
    scale: "크기",
    moveX: "좌우",
    moveY: "상하",
    rotate: "회전",
    rotate0: "바로 세우기",
    rotate180: "상하 반전",
    "mode.singleSail": "단일 돛(소형/뗏목)",
    "mode.double": "쌍돛(중형)",
    "mode.triple": "삼중 돛(대형)",
    "mode.painting": "그림 PaintingCanvas",
    "mode.wallCanvas": "단일 벽 캔버스",
    "mode.wall": "여러 그림(벽 퍼즐)",
    "mode.singleFlag": "단면 깃발",
    "mode.flag": "대형 다면 깃발",
    "mode.tattoo": "캐릭터 문신",
  },
  th: {
    appTitle: "PNT Tool",
    seoTitle: "PNT Tool - ตัวแปลงรูปภาพ ARK / ATLAS PNT",
    seoDescription: "เครื่องมือแปลงรูปภาพเป็นไฟล์ PNT/PNG สำหรับ ARK และ ATLAS รองรับผ้าใบ ธง ใบเรือ รอยสัก และผนังภาพหลายผืนสำหรับผู้เล่นเกมเอาชีวิตรอด",
    seoIntro: "ตัวแปลงรูปภาพ ARK / ATLAS PNT สำหรับผู้เล่นเกมเอาชีวิตรอด รองรับผ้าใบ ธง ใบเรือ รอยสัก และผนังภาพหลายผืน",
    appIntro: "แปลงรูปภาพในเบราว์เซอร์เครื่องนี้เป็นไฟล์ PNT/PNG สำหรับ ATLAS โดยไม่อัปโหลด รองรับใบเรือ ภาพวาด ธง รอยสัก และผนังภาพหลายผืน จากนั้นนำไฟล์ไปไว้ที่ <code>Steam\\steamapps\\common\\ATLAS\\ShooterGame\\Saved\\MyPaintings</code>",
    language: "ภาษา",
    modeLabel: "ประเภท",
    previewTitle: "ตัวอย่าง",
    previewZoom: "มุมมอง",
    colorCount: "{count} สี",
    fitMode: "การวาง",
    paletteLimit: "สีย้อม",
    qualityMode: "โหมดคุณภาพ",
    ditherAmount: "ระดับคุณภาพ",
    removeMode: "ลบพื้นหลัง",
    outputName: "ชื่อไฟล์",
    downloadPng: "ดาวน์โหลด PNG",
    downloadPnt: "ดาวน์โหลด PNT",
    helpTitle: "คำแนะนำ",
    dyeListTitle: "รายการสีย้อม",
    scale: "ขนาด",
    moveX: "ซ้าย/ขวา",
    moveY: "ขึ้น/ลง",
    rotate: "หมุน",
    rotate0: "ตั้งตรง",
    rotate180: "กลับหัว",
    "mode.singleSail": "ใบเรือเดี่ยว (เล็ก/แพ)",
    "mode.double": "ใบเรือคู่ (กลาง)",
    "mode.triple": "ใบเรือสามชั้น (ใหญ่)",
    "mode.painting": "ภาพวาด PaintingCanvas",
    "mode.wallCanvas": "ผืนผ้าใบติดผนังเดี่ยว",
    "mode.wall": "ผนังภาพหลายผืน",
    "mode.singleFlag": "ธงหน้าเดียว",
    "mode.flag": "ธงหลายแผงขนาดใหญ่",
    "mode.tattoo": "รอยสักตัวละคร",
  },
  ru: {
    appTitle: "PNT Tool",
    seoTitle: "PNT Tool - конвертер изображений ARK / ATLAS PNT",
    seoDescription: "Конвертер изображений в файлы PNT/PNG для ARK и ATLAS: холсты, флаги, паруса, татуировки и стены из нескольких картин для игроков survival games.",
    seoIntro: "Конвертер изображений ARK / ATLAS PNT для survival games: холсты, флаги, паруса, татуировки и стены из нескольких картин.",
    appIntro: "Преобразует изображения локально в браузере в файлы PNT/PNG для ATLAS, без загрузки в сеть. Поддерживает паруса, картины, флаги, татуировки и стены из нескольких полотен. Готовые файлы поместите в <code>Steam\\steamapps\\common\\ATLAS\\ShooterGame\\Saved\\MyPaintings</code>.",
    language: "Язык",
    modeLabel: "Тип",
    previewTitle: "Предпросмотр",
    previewZoom: "Вид",
    colorCount: "{count} цветов",
    fitMode: "Размещение",
    paletteLimit: "Красители",
    qualityMode: "Качество",
    ditherAmount: "Сила качества",
    removeMode: "Удалить фон",
    outputName: "Имя файла",
    downloadPng: "Скачать PNG",
    downloadPnt: "Скачать PNT",
    helpTitle: "Подсказка",
    dyeListTitle: "Список красителей",
    scale: "Размер",
    moveX: "Влево/вправо",
    moveY: "Вверх/вниз",
    rotate: "Поворот",
    rotate0: "Выпрямить",
    rotate180: "Перевернуть",
    "mode.singleSail": "Один парус (малый / плот)",
    "mode.double": "Два паруса (средний)",
    "mode.triple": "Три паруса (большой)",
    "mode.painting": "Картина PaintingCanvas",
    "mode.wallCanvas": "Один настенный холст",
    "mode.wall": "Стена из нескольких картин",
    "mode.singleFlag": "Односторонний флаг",
    "mode.flag": "Большой многопанельный флаг",
    "mode.tattoo": "Татуировка персонажа",
  },
};

Object.assign(I18N["zh-TW"], {
  appTitle: "PNT Tool",
  "group.arkStructures": "ARK 建築與畫布類",
  "mode.arkPaintingCanvas": "畫布（Painting Canvas）",
  "mode.arkWarMap": "戰爭地圖（War Map）",
  "mode.arkSmallWoodSign": "小型木牌（Small Wood Sign）",
  "mode.arkSmallMetalSign": "小型鐵牌（Small Metal Sign）",
  "mode.arkWallWoodSign": "木製壁掛告示牌（Wooden Wall Sign）",
  "mode.arkWallMetalSign": "金屬壁掛告示牌（Metal Wall Sign）",
  "mode.arkWoodBillboard": "木製廣告牌（Wooden Billboard）",
  "mode.arkMetalBillboard": "金屬廣告牌（Metal Billboard）",
  "mode.arkSingleFlag": "單人旗幟（Single Flag）",
  "mode.arkFlag": "一般旗幟（Flag）",
  "mode.arkMultiPanelFlag": "多面旗幟（Multi Panel Flag）",
  "mode.arkBroodmotherFlag": "蜘蛛 BOSS 旗幟（Broodmother Flag）",
  "mode.arkMegapithecusFlag": "猩猩 BOSS 旗幟（Megapithecus Flag）",
  "mode.arkDragonFlag": "噴火龍 BOSS 旗幟（Dragon Flag）",
  "mode.arkShagRug": "毛絨地毯（Shag Rug）",
  "mode.arkSpotlight": "聚光燈（Spotlight）",
  "layer.arkPaintingCanvas.art": "ARK 畫布圖片",
  "layer.arkWarMap.art": "戰爭地圖圖片",
  "layer.arkSmallWoodSign.art": "小型木牌圖片",
  "layer.arkSmallMetalSign.art": "小型鐵牌圖片",
  "layer.arkWallWoodSign.art": "木製壁掛告示牌圖片",
  "layer.arkWallMetalSign.art": "金屬壁掛告示牌圖片",
  "layer.arkWoodBillboard.art": "木製廣告牌圖片",
  "layer.arkMetalBillboard.art": "金屬廣告牌圖片",
  "layer.arkSingleFlag.art": "單人旗幟圖片",
  "layer.arkFlag.art": "一般旗幟圖片",
  "layer.arkMultiPanelFlag.art": "多面旗幟圖片",
  "layer.arkBroodmotherFlag.art": "蜘蛛 BOSS 旗幟圖片",
  "layer.arkMegapithecusFlag.art": "猩猩 BOSS 旗幟圖片",
  "layer.arkDragonFlag.art": "噴火龍 BOSS 旗幟圖片",
  "layer.arkShagRug.art": "毛絨地毯圖片",
  "layer.arkSpotlight.art": "聚光燈圖片",
});

Object.assign(I18N.en, {
  appTitle: "PNT Tool",
  "group.arkStructures": "ARK Structures and Canvases",
  "mode.arkPaintingCanvas": "Painting Canvas",
  "mode.arkWarMap": "War Map",
  "mode.arkSmallWoodSign": "Wooden Sign",
  "mode.arkSmallMetalSign": "Metal Sign",
  "mode.arkWallWoodSign": "Wooden Wall Sign",
  "mode.arkWallMetalSign": "Metal Wall Sign",
  "mode.arkWoodBillboard": "Wooden Billboard",
  "mode.arkMetalBillboard": "Metal Billboard",
  "mode.arkSingleFlag": "Single Flag",
  "mode.arkFlag": "Flag",
  "mode.arkMultiPanelFlag": "Multi Panel Flag",
  "mode.arkBroodmotherFlag": "Broodmother Flag",
  "mode.arkMegapithecusFlag": "Megapithecus Flag",
  "mode.arkDragonFlag": "Dragon Flag",
  "mode.arkShagRug": "Shag Rug",
  "mode.arkSpotlight": "Spotlight",
  "layer.arkPaintingCanvas.art": "ARK painting canvas image",
  "layer.arkWarMap.art": "War map image",
  "layer.arkSmallWoodSign.art": "Wooden sign image",
  "layer.arkSmallMetalSign.art": "Metal sign image",
  "layer.arkWallWoodSign.art": "Wooden wall sign image",
  "layer.arkWallMetalSign.art": "Metal wall sign image",
  "layer.arkWoodBillboard.art": "Wooden billboard image",
  "layer.arkMetalBillboard.art": "Metal billboard image",
  "layer.arkSingleFlag.art": "Single flag image",
  "layer.arkFlag.art": "Flag image",
  "layer.arkMultiPanelFlag.art": "Multi panel flag image",
  "layer.arkBroodmotherFlag.art": "Broodmother flag image",
  "layer.arkMegapithecusFlag.art": "Megapithecus flag image",
  "layer.arkDragonFlag.art": "Dragon flag image",
  "layer.arkShagRug.art": "Shag rug image",
  "layer.arkSpotlight.art": "Spotlight image",
});

Object.assign(LANGUAGE_ALIASES.ja, {
  wallCols: "横数", wallRows: "縦数", wallPrefix: "接頭辞", threshold: "背景削除の強さ", fillColor: "背景色", transparentBg: "削除後は透明にする", showFrames: "枠線を表示",
  "fit.contain": "全体を入れる", "fit.cover": "塗りつぶし / 切り抜き",
  "palette.all": "すべて", "palette.5": "最大 5 色", "palette.10": "最大 10 色", "palette.20": "最大 20 色", "palette.30": "最大 30 色",
  "quality.dither": "写真最適化（ディザー）", "quality.softDither": "写真ソフト", "quality.sharpDither": "写真シャープ", "quality.smooth": "滑らかな色面", "quality.pixel": "ピクセル風", "quality.lineart": "線画 / ロゴ", "quality.bw": "白黒 2 色",
  "remove.none": "削除しない", "remove.dark": "黒/暗色背景", "remove.edgeDark": "外側の暗色のみ", "remove.checker": "白灰チェック", "remove.white": "白背景", "remove.pick": "クリックした色",
  "layer.singleSail.art": "単帆", "layer.double.top": "上帆", "layer.double.bottom": "下帆", "layer.triple.top": "上帆", "layer.triple.middle": "中帆", "layer.triple.bottom": "下帆",
  "layer.painting.art": "絵画画像", "layer.wallCanvas.art": "壁キャンバス画像", "layer.wall.art": "壁モザイク画像", "layer.singleFlag.art": "片面旗画像", "layer.flag.art": "大型旗画像",
  "layer.tattoo.head": "頭", "layer.tattoo.chest": "胸", "layer.tattoo.back": "背中", "layer.tattoo.leftArm": "左腕", "layer.tattoo.rightArm": "右腕", "layer.tattoo.leftLeg": "左脚", "layer.tattoo.rightLeg": "右脚",
});

Object.assign(LANGUAGE_ALIASES.ko, {
  wallCols: "가로 수", wallRows: "세로 수", wallPrefix: "접두어", threshold: "배경 제거 강도", fillColor: "배경색", transparentBg: "제거 후 투명 유지", showFrames: "프레임 표시",
  "fit.contain": "전체 넣기", "fit.cover": "채우기 / 자르기",
  "palette.all": "전체", "palette.5": "최대 5색", "palette.10": "최대 10색", "palette.20": "최대 20색", "palette.30": "최대 30색",
  "quality.dither": "사진 최적화(디더)", "quality.softDither": "부드러운 사진", "quality.sharpDither": "선명한 사진", "quality.smooth": "부드러운 색면", "quality.pixel": "픽셀풍", "quality.lineart": "선화 / 로고", "quality.bw": "흑백 2색",
  "remove.none": "사용 안 함", "remove.dark": "검정/어두운 배경", "remove.edgeDark": "외곽 어두운 색만", "remove.checker": "흰회색 격자", "remove.white": "흰 배경", "remove.pick": "선택한 색",
  "layer.singleSail.art": "단일 돛", "layer.double.top": "위 돛", "layer.double.bottom": "아래 돛", "layer.triple.top": "위 돛", "layer.triple.middle": "중간 돛", "layer.triple.bottom": "아래 돛",
  "layer.painting.art": "그림 이미지", "layer.wallCanvas.art": "벽 캔버스 이미지", "layer.wall.art": "벽 퍼즐 이미지", "layer.singleFlag.art": "단면 깃발 이미지", "layer.flag.art": "다면 깃발 이미지",
  "layer.tattoo.head": "머리", "layer.tattoo.chest": "가슴", "layer.tattoo.back": "등", "layer.tattoo.leftArm": "왼팔", "layer.tattoo.rightArm": "오른팔", "layer.tattoo.leftLeg": "왼다리", "layer.tattoo.rightLeg": "오른다리",
});

Object.assign(LANGUAGE_ALIASES.th, {
  wallCols: "จำนวนแนวนอน", wallRows: "จำนวนแนวตั้ง", wallPrefix: "คำนำหน้า", threshold: "ความแรงลบพื้นหลัง", fillColor: "สีพื้นหลัง", transparentBg: "คงพื้นหลังโปร่งใส", showFrames: "แสดงกรอบ",
  "fit.contain": "ใส่ทั้งภาพ", "fit.cover": "เต็มกรอบ / ครอบตัด",
  "palette.all": "ทั้งหมด", "palette.5": "สูงสุด 5 สี", "palette.10": "สูงสุด 10 สี", "palette.20": "สูงสุด 20 สี", "palette.30": "สูงสุด 30 สี",
  "quality.dither": "ปรับภาพถ่าย (ดิเทอร์)", "quality.softDither": "ภาพถ่ายนุ่ม", "quality.sharpDither": "ภาพถ่ายคม", "quality.smooth": "สีเรียบ", "quality.pixel": "พิกเซล", "quality.lineart": "ลายเส้น / โลโก้", "quality.bw": "ขาวดำ 2 สี",
  "remove.none": "ไม่ลบ", "remove.dark": "พื้นหลังดำ/เข้ม", "remove.edgeDark": "เฉพาะขอบมืด", "remove.checker": "ตารางขาวเทา", "remove.white": "พื้นหลังขาว", "remove.pick": "สีที่เลือก",
  "layer.singleSail.art": "ใบเรือเดี่ยว", "layer.double.top": "ใบบน", "layer.double.bottom": "ใบล่าง", "layer.triple.top": "ใบบน", "layer.triple.middle": "ใบกลาง", "layer.triple.bottom": "ใบล่าง",
  "layer.painting.art": "ภาพวาด", "layer.wallCanvas.art": "ภาพผนังเดี่ยว", "layer.wall.art": "ภาพผนังหลายผืน", "layer.singleFlag.art": "ภาพธงหน้าเดียว", "layer.flag.art": "ภาพธงหลายแผง",
  "layer.tattoo.head": "หัว", "layer.tattoo.chest": "อก", "layer.tattoo.back": "หลัง", "layer.tattoo.leftArm": "แขนซ้าย", "layer.tattoo.rightArm": "แขนขวา", "layer.tattoo.leftLeg": "ขาซ้าย", "layer.tattoo.rightLeg": "ขาขวา",
});

Object.assign(LANGUAGE_ALIASES.ru, {
  wallCols: "Столбцы", wallRows: "Строки", wallPrefix: "Префикс", threshold: "Сила удаления", fillColor: "Цвет фона", transparentBg: "Оставлять прозрачным", showFrames: "Показывать рамки",
  "fit.contain": "Поместить целиком", "fit.cover": "Заполнить / обрезать",
  "palette.all": "Все", "palette.5": "До 5 цветов", "palette.10": "До 10 цветов", "palette.20": "До 20 цветов", "palette.30": "До 30 цветов",
  "quality.dither": "Фото с дизерингом", "quality.softDither": "Мягкое фото", "quality.sharpDither": "Резкое фото", "quality.smooth": "Гладкие цвета", "quality.pixel": "Пиксельный стиль", "quality.lineart": "Лайнарт / Лого", "quality.bw": "Черно-белый",
  "remove.none": "Не удалять", "remove.dark": "Черный/темный фон", "remove.edgeDark": "Только внешний темный", "remove.checker": "Бело-серая сетка", "remove.white": "Белый фон", "remove.pick": "Выбранный цвет",
  "layer.singleSail.art": "Один парус", "layer.double.top": "Верхний парус", "layer.double.bottom": "Нижний парус", "layer.triple.top": "Верхний парус", "layer.triple.middle": "Средний парус", "layer.triple.bottom": "Нижний парус",
  "layer.painting.art": "Изображение картины", "layer.wallCanvas.art": "Настенный холст", "layer.wall.art": "Мозаика стены", "layer.singleFlag.art": "Односторонний флаг", "layer.flag.art": "Многопанельный флаг",
  "layer.tattoo.head": "Голова", "layer.tattoo.chest": "Грудь", "layer.tattoo.back": "Спина", "layer.tattoo.leftArm": "Левая рука", "layer.tattoo.rightArm": "Правая рука", "layer.tattoo.leftLeg": "Левая нога", "layer.tattoo.rightLeg": "Правая нога",
});

const MODE_ICON_SVG = {
  sail: `<svg viewBox="0 0 64 64" role="img"><path fill="#ffd166" d="M30 8v38h-3L30 8Z"/><path fill="#48c4d8" d="M32 10c11 9 15 20 15 34H32V10Z"/><path fill="#f08a4b" d="M28 18c-7 8-10 16-10 26h10V18Z"/><path fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" d="M12 50h40M30 8v42"/></svg>`,
  flag: `<svg viewBox="0 0 64 64" role="img"><path fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" d="M18 10v44"/><path fill="#ff5c5c" d="M20 12h30l-6 10 6 10H20V12Z"/><path fill="#ffd166" d="M24 17h16v5H24z"/></svg>`,
  canvas: `<svg viewBox="0 0 64 64" role="img"><rect x="12" y="14" width="40" height="34" rx="3" fill="#e8eef2"/><path fill="#48c4d8" d="M16 42l12-14 8 9 5-6 8 11H16Z"/><circle cx="42" cy="24" r="5" fill="#ffd166"/><path fill="none" stroke="currentColor" stroke-width="4" d="M12 14h40v34H12z"/></svg>`,
  tattoo: `<svg viewBox="0 0 64 64" role="img"><circle cx="32" cy="12" r="6" fill="#e8eef2"/><path fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" d="M32 20v18M18 28h28M24 54l8-16 8 16"/><path fill="#48c4d8" d="M24 27h16v12H24z"/></svg>`,
};

const MODE_ICON_KIND = {
  arkPaintingCanvas: "canvas",
  arkWarMap: "canvas",
  arkSmallWoodSign: "canvas",
  arkSmallMetalSign: "canvas",
  arkWallWoodSign: "canvas",
  arkWallMetalSign: "canvas",
  arkWoodBillboard: "canvas",
  arkMetalBillboard: "canvas",
  arkSingleFlag: "flag",
  arkFlag: "flag",
  arkMultiPanelFlag: "flag",
  arkBroodmotherFlag: "flag",
  arkMegapithecusFlag: "flag",
  arkDragonFlag: "flag",
  arkShagRug: "canvas",
  arkSpotlight: "canvas",
  singleSail: "sail",
  double: "sail",
  triple: "sail",
  claimFlag: "flag",
  singleFlag: "flag",
  flag: "flag",
  painting: "canvas",
  wallCanvas: "canvas",
  wall: "canvas",
  signboard: "canvas",
  hangingSign: "canvas",
  billboard: "canvas",
  tattoo: "tattoo",
};

const els = {
  languageBar: document.getElementById("languageBar"),
  appTitle: document.getElementById("appTitle"),
  seoIntro: document.getElementById("seoIntro"),
  cropSelectTitle: document.getElementById("cropSelectTitle"),
  cropPreviewTitle: document.getElementById("cropPreviewTitle"),
  guidePanel: document.getElementById("guidePanel"),
  guideTitle: document.getElementById("guideTitle"),
  guideStep1Title: document.getElementById("guideStep1Title"),
  guideStep1Text: document.getElementById("guideStep1Text"),
  guideStep2Title: document.getElementById("guideStep2Title"),
  guideStep2Text: document.getElementById("guideStep2Text"),
  guideStep3Title: document.getElementById("guideStep3Title"),
  guideStep3Text: document.getElementById("guideStep3Text"),
  guideStep4Title: document.getElementById("guideStep4Title"),
  guideStep4Text: document.getElementById("guideStep4Text"),
  modeLabel: document.getElementById("modeLabel"),
  mode: document.getElementById("modeSelect"),
  modeIcon: document.getElementById("modeIcon"),
  modeCardTitle: document.getElementById("modeCardTitle"),
  modeCardSuffix: document.getElementById("modeCardSuffix"),
  uploads: document.getElementById("uploads"),
  wallColsLabel: document.getElementById("wallColsLabel"),
  wallRowsLabel: document.getElementById("wallRowsLabel"),
  wallPrefixLabel: document.getElementById("wallPrefixLabel"),
  wallHint: document.getElementById("wallHint"),
  previewTitle: document.getElementById("previewTitle"),
  previewZoomLabel: document.getElementById("previewZoomLabel"),
  fitMode: document.getElementById("fitMode"),
  fitModeLabel: document.getElementById("fitModeLabel"),
  paletteLimit: document.getElementById("paletteLimit"),
  paletteLimitLabel: document.getElementById("paletteLimitLabel"),
  qualityMode: document.getElementById("qualityMode"),
  qualityModeLabel: document.getElementById("qualityModeLabel"),
  ditherAmount: document.getElementById("ditherAmount"),
  ditherAmountLabel: document.getElementById("ditherAmountLabel"),
  removeMode: document.getElementById("removeMode"),
  removeModeLabel: document.getElementById("removeModeLabel"),
  threshold: document.getElementById("threshold"),
  thresholdLabel: document.getElementById("thresholdLabel"),
  fillColor: document.getElementById("fillColor"),
  fillColorLabel: document.getElementById("fillColorLabel"),
  transparentBg: document.getElementById("transparentBg"),
  transparentBgLabel: document.getElementById("transparentBgLabel"),
  showFrames: document.getElementById("showFrames"),
  showFramesLabel: document.getElementById("showFramesLabel"),
  outputName: document.getElementById("outputName"),
  outputNameLabel: document.getElementById("outputNameLabel"),
  fixedSuffix: document.getElementById("fixedSuffix"),
  previewZoom: document.getElementById("previewZoom"),
  wallSettings: document.getElementById("wallSettings"),
  wallCols: document.getElementById("wallCols"),
  wallRows: document.getElementById("wallRows"),
  wallPrefix: document.getElementById("wallPrefix"),
  pngBtn: document.getElementById("downloadPngBtn"),
  pntBtn: document.getElementById("downloadPntBtn"),
  helpTitle: document.getElementById("helpTitle"),
  helpText: document.getElementById("helpText"),
  dyeListTitle: document.getElementById("dyeListTitle"),
  canvasWrap: document.getElementById("canvasWrap"),
  canvas: document.getElementById("previewCanvas"),
  dyeCount: document.getElementById("dyeCount"),
  dyeList: document.getElementById("dyeList"),
  fileNameHint: document.getElementById("fileNameHint"),
};

const ctx = els.canvas.getContext("2d", { willReadFrequently: true });
const state = {
  images: {},
  controls: {},
  picked: null,
  lastBuffer: null,
  lastPreview: null,
  activeLayerKey: null,
  language: "zh-TW",
  game: "atlas",
};

function t(key, fallback = "") {
  const lang = state.language;
  return (LANGUAGE_ALIASES[lang] && LANGUAGE_ALIASES[lang][key]) ||
    (I18N[lang] && I18N[lang][key]) ||
    (lang === "zh-TW" ? I18N["zh-TW"][key] : I18N.en[key]) ||
    I18N["zh-TW"][key] ||
    fallback ||
    key;
}

function formatText(key, values) {
  return t(key).replace(/\{(\w+)\}/g, (_, name) => values[name] ?? "");
}

function setText(element, key) {
  if (element) element.textContent = t(key, element.textContent);
}

function setHtml(element, key) {
  if (element) element.innerHTML = t(key, element.innerHTML);
}

function localizeSelect(select, prefix) {
  for (const option of select.options) {
    option.textContent = t(`${prefix}.${option.value}`, option.textContent);
  }
  for (const group of select.querySelectorAll("optgroup[data-i18n-group]")) {
    group.label = t(group.dataset.i18nGroup, group.label);
  }
}

function ensureGameTabs() {
  if (document.getElementById("gameTabs")) return;
  const tabs = document.createElement("div");
  tabs.id = "gameTabs";
  tabs.className = "gameTabs";
  tabs.innerHTML = `
    <button type="button" class="gameTab" data-game="ark"><span class="gameTabIcon" aria-hidden="true"><svg viewBox="0 0 82 70" role="img"><path fill="none" stroke="currentColor" stroke-width="4.8" stroke-linecap="round" stroke-linejoin="round" d="M6 31c1-8 7-14 18-15 9-1 13 1 22-6 4 0 7 3 12 2 7-1 13 2 20 9"/><path fill="none" stroke="currentColor" stroke-width="4.8" stroke-linecap="round" stroke-linejoin="round" d="M7 32c8 3 22 3 35 0 7-1 14-5 20-8-5 8-13 13-22 17"/><path fill="none" stroke="currentColor" stroke-width="4.8" stroke-linecap="round" stroke-linejoin="round" d="M22 59c11-2 20-9 27-19M47 55c6 2 10 6 12 12"/><circle cx="42" cy="17" r="5.4" fill="currentColor"/><circle cx="40" cy="15" r="1.8" fill="#fff"/><circle cx="13" cy="24" r="3.3" fill="currentColor"/><path fill="currentColor" d="M9 36l3 7 2-7h-5Zm7 1 3 7 2-7h-5Zm7 0 3 8 2-8h-5Zm7 0 3 7 2-8-5 1Zm7-1 3 7 2-8-5 1Zm-13 20 4-7 2 7h-6Zm7-3 4-7 2 7h-6Zm7-4 4-7 2 7h-6Z"/></svg></span><span>ARK</span></button>
    <button type="button" class="gameTab" data-game="atlas"><span class="gameTabIcon" aria-hidden="true"><svg viewBox="0 0 64 64" role="img"><path fill="currentColor" d="M29 7h4v7h-4zM34 8h16l-6 4 6 4H34V8ZM17 19h29c-1 8-1 13 1 21H16c-3-8-3-14 1-21ZM13 43h38l-3 7H16l-3-7ZM28 52h6v4h-6zM6 46h52c-1 8-4 13-9 15H16C10 59 7 54 6 46Z"/></svg></span><span>Atlas</span></button>
    <button type="button" class="gameTab" data-guide="guide"><span aria-hidden="true">?</span><span data-role="guideTabLabel">${t("guideTab")}</span></button>
    <a class="gameTab gameTabLink" href="https://groups.google.com/g/pnt-tool/" target="_blank" rel="noopener"><span aria-hidden="true">☷</span><span>網站討論區</span></a>
  `;
  els.appTitle.insertAdjacentElement("afterend", tabs);
  tabs.addEventListener("click", (event) => {
    const guideButton = event.target.closest("[data-guide]");
    if (guideButton) {
      scrollToGuidePanel();
      return;
    }
    const button = event.target.closest("[data-game]");
    if (!button || button.dataset.game === state.game) return;
    state.game = button.dataset.game;
    state.images = {};
    rebuildModeSelect(false);
    setupUploads();
    updateGameTabs();
  });
}

function updateGameTabs() {
  document.body.dataset.game = state.game;
  for (const button of document.querySelectorAll(".gameTab[data-game]")) {
    button.classList.toggle("isActive", button.dataset.game === state.game);
  }
}

function updateLanguageBar() {
  if (!els.languageBar) return;
  for (const button of els.languageBar.querySelectorAll("[data-lang]")) {
    button.classList.toggle("isActive", button.dataset.lang === state.language);
  }
}

function scrollToGuidePanel() {
  if (!els.guidePanel) return;
  els.guidePanel.scrollIntoView({ behavior: "smooth", block: "start" });
}

function rebuildModeSelect(preserveMode = true) {
  const current = preserveMode ? els.mode.value : "";
  const groups = GAME_MODE_GROUPS[state.game] || GAME_MODE_GROUPS.atlas;
  const allowedModes = new Set(groups.flatMap((group) => group.modes));
  els.mode.innerHTML = "";
  for (const group of groups) {
    const optgroup = document.createElement("optgroup");
    optgroup.label = t(group.key, group.key);
    for (const mode of group.modes) {
      const option = document.createElement("option");
      option.value = mode;
      option.textContent = t(`mode.${mode}`, mode);
      optgroup.appendChild(option);
    }
    els.mode.appendChild(optgroup);
  }
  els.mode.value = allowedModes.has(current) ? current : GAME_DEFAULT_MODE[state.game];
}

function layerLabel(layer) {
  return t(`layer.${els.mode.value}.${layer.key}`, layer.label);
}

function applyLanguage() {
  ensureGameTabs();
  document.documentElement.lang = state.language === "zh-TW" ? "zh-Hant" : state.language;
  document.title = t("seoTitle", t("appTitle"));
  const description = document.querySelector('meta[name="description"]');
  if (description) description.setAttribute("content", t("seoDescription", description.getAttribute("content") || ""));
  setText(els.appTitle, "appTitle");
  setText(els.seoIntro, "seoIntro");
  setText(els.cropSelectTitle, "cropSelectTitle");
  setText(els.cropPreviewTitle, "cropPreviewTitle");
  setText(els.guideTitle, "guideTitle");
  setText(els.guideStep1Title, "guideStep1Title");
  setText(els.guideStep1Text, "guideStep1Text");
  setText(els.guideStep2Title, "guideStep2Title");
  setText(els.guideStep2Text, "guideStep2Text");
  setText(els.guideStep3Title, "guideStep3Title");
  setText(els.guideStep3Text, "guideStep3Text");
  setText(els.guideStep4Title, "guideStep4Title");
  setText(els.guideStep4Text, "guideStep4Text");
  const guideLabel = document.querySelector("[data-role=guideTabLabel]");
  if (guideLabel) guideLabel.textContent = t("guideTab");
  updateLanguageBar();
  setText(els.modeLabel, "modeLabel");
  setText(els.wallColsLabel, "wallCols");
  setText(els.wallRowsLabel, "wallRows");
  setText(els.wallPrefixLabel, "wallPrefix");
  setText(els.wallHint, "wallHint");
  setText(els.previewTitle, "previewTitle");
  setText(els.previewZoomLabel, "previewZoom");
  setText(els.fitModeLabel, "fitMode");
  setText(els.paletteLimitLabel, "paletteLimit");
  setText(els.qualityModeLabel, "qualityMode");
  setText(els.ditherAmountLabel, "ditherAmount");
  setText(els.removeModeLabel, "removeMode");
  setText(els.thresholdLabel, "threshold");
  setText(els.fillColorLabel, "fillColor");
  setText(els.transparentBgLabel, "transparentBg");
  setText(els.showFramesLabel, "showFrames");
  setText(els.outputNameLabel, "outputName");
  setText(els.pngBtn, "downloadPng");
  setText(els.pntBtn, "downloadPnt");
  setText(els.helpTitle, "helpTitle");
  setText(els.helpText, "helpText");
  setText(els.dyeListTitle, "dyeListTitle");
  rebuildModeSelect(true);
  updateGameTabs();
  localizeSelect(els.fitMode, "fit");
  localizeSelect(els.paletteLimit, "palette");
  localizeSelect(els.qualityMode, "quality");
  localizeSelect(els.removeMode, "remove");
  updateModeCard();
}

function updateModeCard() {
  const mode = els.mode.value;
  const config = MODE_CONFIG[mode];
  const iconKind = MODE_ICON_KIND[mode] || "canvas";
  if (els.modeIcon) els.modeIcon.innerHTML = MODE_ICON_SVG[iconKind] || "";
  if (els.modeCardTitle) els.modeCardTitle.textContent = t(`mode.${mode}`, mode);
  if (els.modeCardSuffix) els.modeCardSuffix.textContent = config && config.suffix ? config.suffix : "";
}

function colorToRgba(hex) {
  return [
    parseInt(hex.slice(1, 3), 16),
    parseInt(hex.slice(3, 5), 16),
    parseInt(hex.slice(5, 7), 16),
    255,
  ];
}

function loadFile(file, key) {
  if (!file) return;
  state.activeLayerKey = key;
  const img = new Image();
  img.onload = () => {
    state.images[key] = img;
    render();
  };
  img.src = URL.createObjectURL(file);
}

function setupUploads({ preserveValues = false } = {}) {
  const config = MODE_CONFIG[els.mode.value];
  const previousName = els.outputName.value;
  const previousControls = {};
  for (const [key, control] of Object.entries(state.controls)) {
    previousControls[key] = {
      scale: control.scale.value,
      x: control.x.value,
      y: control.y.value,
      rotate: control.rotate.value,
    };
  }
  els.outputName.value = preserveValues ? previousName : baseNameWithoutSuffix(config.name, config.suffix);
  els.fixedSuffix.textContent = config.suffix || "";
  updateModeCard();
  updateWallSettings();
  els.uploads.innerHTML = "";
  state.controls = {};
  state.activeLayerKey = config.layers[0] && config.layers[0].key;

  for (const layer of config.layers) {
    const row = document.createElement("div");
    row.className = "uploadRow";
    row.innerHTML = `
      <div class="uploadTitle">${layerLabel(layer)}</div>
      <div class="uploadDrop" tabindex="0" role="button">
        <strong>${t("uploadDropTitle")}</strong>
        <span>${t("uploadDropHint")}</span>
        <input type="file" accept="image/png,image/jpeg,image/webp,image/*">
      </div>
      <label class="field"><span>${t("scale")}</span><input data-role="scale" type="range" min="50" max="180" value="100"></label>
      <div class="grid2">
        <label class="field"><span>${t("moveX")}</span><input data-role="x" type="range" min="-80" max="80" value="0"></label>
        <label class="field"><span>${t("moveY")}</span><input data-role="y" type="range" min="-80" max="80" value="0"></label>
      </div>
      <label class="field"><span>${t("rotate")}</span><input data-role="rotate" type="range" min="-180" max="180" value="0"></label>
      <div class="quickActions">
        <button data-role="rotate0" type="button">${t("rotate0")}</button>
        <button data-role="rotate180" type="button">${t("rotate180")}</button>
      </div>
    `;
    const fileInput = row.querySelector("input[type=file]");
    const drop = row.querySelector(".uploadDrop");
    const scale = row.querySelector("[data-role=scale]");
    const x = row.querySelector("[data-role=x]");
    const y = row.querySelector("[data-role=y]");
    const rotate = row.querySelector("[data-role=rotate]");
    const rotate0 = row.querySelector("[data-role=rotate0]");
    const rotate180 = row.querySelector("[data-role=rotate180]");
    if (preserveValues && previousControls[layer.key]) {
      scale.value = previousControls[layer.key].scale;
      x.value = previousControls[layer.key].x;
      y.value = previousControls[layer.key].y;
      rotate.value = previousControls[layer.key].rotate;
    }
    state.controls[layer.key] = { scale, x, y, rotate };
    const setActiveLayer = () => { state.activeLayerKey = layer.key; };
    const loadDroppedFile = (files) => {
      const file = Array.from(files || []).find((item) => item && item.type && item.type.startsWith("image/"));
      if (file) loadFile(file, layer.key);
    };
    drop.addEventListener("click", () => {
      setActiveLayer();
      fileInput.click();
    });
    drop.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        setActiveLayer();
        fileInput.click();
      }
    });
    drop.addEventListener("focus", setActiveLayer);
    drop.addEventListener("dragover", (event) => {
      event.preventDefault();
      drop.classList.add("isDragOver");
      setActiveLayer();
    });
    drop.addEventListener("dragleave", () => drop.classList.remove("isDragOver"));
    drop.addEventListener("drop", (event) => {
      event.preventDefault();
      drop.classList.remove("isDragOver");
      loadDroppedFile(event.dataTransfer.files);
    });
    fileInput.addEventListener("change", () => loadFile(fileInput.files[0], layer.key));
    scale.addEventListener("input", render);
    x.addEventListener("input", render);
    y.addEventListener("input", render);
    rotate.addEventListener("input", render);
    rotate0.addEventListener("click", () => {
      rotate.value = "0";
      render();
    });
    rotate180.addEventListener("click", () => {
      rotate.value = "180";
      render();
    });
    els.uploads.appendChild(row);
  }
  render();
}

function pasteImageFromClipboard(event) {
  const items = Array.from(event.clipboardData && event.clipboardData.items ? event.clipboardData.items : []);
  const file = items
    .filter((item) => item.kind === "file" && item.type.startsWith("image/"))
    .map((item) => item.getAsFile())
    .find(Boolean);
  if (!file) return;
  const config = MODE_CONFIG[els.mode.value];
  const fallbackLayer = config && config.layers[0] && config.layers[0].key;
  const key = state.activeLayerKey || fallbackLayer;
  if (!key) return;
  event.preventDefault();
  loadFile(file, key);
}

function updateWallSettings() {
  const isWall = Boolean(MODE_CONFIG[els.mode.value].wall);
  els.wallSettings.classList.toggle("isVisible", isWall);
  els.outputName.parentElement.style.display = isWall ? "none" : "";
  els.fixedSuffix.style.display = isWall ? "none" : "";
}

function imageToData(img) {
  const c = document.createElement("canvas");
  c.width = img.naturalWidth || img.width;
  c.height = img.naturalHeight || img.height;
  const cctx = c.getContext("2d", { willReadFrequently: true });
  cctx.drawImage(img, 0, 0);
  return cctx.getImageData(0, 0, c.width, c.height);
}

function removeBackground(imageData) {
  const mode = els.removeMode.value;
  if (mode === "none") return imageData;
  const threshold = Number(els.threshold.value);
  const data = new Uint8ClampedArray(imageData.data);
  const w = imageData.width;
  const h = imageData.height;
  const fill = els.transparentBg.checked ? TRANSPARENT : colorToRgba(els.fillColor.value);

  const closeToPicked = (r, g, b) => {
    if (!state.picked) return false;
    const [pr, pg, pb] = state.picked;
    return Math.abs(r - pr) + Math.abs(g - pg) + Math.abs(b - pb) <= threshold * 3;
  };

  const isBg = (i) => {
    const r = data[i], g = data[i + 1], b = data[i + 2], a = data[i + 3];
    if (a < 16) return true;
    if (mode === "dark" || mode === "edgeDark") return Math.max(r, g, b) <= threshold;
    if (mode === "white") return Math.min(r, g, b) >= 255 - threshold;
    if (mode === "checker") return Math.max(r, g, b) > 190 && Math.max(r, g, b) - Math.min(r, g, b) < 45;
    if (mode === "pick") return closeToPicked(r, g, b);
    return false;
  };

  const clearPixel = (i) => {
    data[i] = fill[0];
    data[i + 1] = fill[1];
    data[i + 2] = fill[2];
    data[i + 3] = fill[3];
  };

  if (mode !== "edgeDark") {
    for (let i = 0; i < data.length; i += 4) {
      if (isBg(i)) clearPixel(i);
    }
    return new ImageData(data, w, h);
  }

  const seen = new Uint8Array(w * h);
  const queue = [];
  const push = (x, y) => {
    const p = y * w + x;
    if (!seen[p] && isBg(p * 4)) {
      seen[p] = 1;
      queue.push([x, y]);
    }
  };
  for (let x = 0; x < w; x++) {
    push(x, 0);
    push(x, h - 1);
  }
  for (let y = 0; y < h; y++) {
    push(0, y);
    push(w - 1, y);
  }
  while (queue.length) {
    const [x, y] = queue.shift();
    if (x > 0) push(x - 1, y);
    if (x < w - 1) push(x + 1, y);
    if (y > 0) push(x, y - 1);
    if (y < h - 1) push(x, y + 1);
  }
  for (let p = 0; p < seen.length; p++) {
    if (seen[p]) clearPixel(p * 4);
  }
  return new ImageData(data, w, h);
}

function dataToCanvas(imageData) {
  const c = document.createElement("canvas");
  c.width = imageData.width;
  c.height = imageData.height;
  c.getContext("2d").putImageData(imageData, 0, 0);
  return c;
}

function drawLayer(targetCtx, img, layer) {
  const targetSize = currentSize();
  const processed = dataToCanvas(removeBackground(imageToData(img)));
  const [x, y, w, h] = layer.safe;
  const fit = els.fitMode.value;
  const control = state.controls[layer.key];
  const userScale = control ? Number(control.scale.value) / 100 : 1;
  const userX = control ? Number(control.x.value) : 0;
  const userY = control ? Number(control.y.value) : 0;
  const rotation = control ? Number(control.rotate.value) * Math.PI / 180 : 0;
  const sx = w / processed.width;
  const sy = h / processed.height;
  const baseScale = fit === "cover" ? Math.max(sx, sy) : Math.min(sx, sy);
  const finalScale = baseScale * userScale;
  const dw = processed.width * finalScale;
  const dh = processed.height * finalScale;
  targetCtx.save();
  targetCtx.translate(x + w / 2 + userX, y + h / 2 + userY);
  targetCtx.rotate(rotation);
  targetCtx.drawImage(processed, -dw / 2, -dh / 2, dw, dh);
  targetCtx.restore();
}

function drawFrames(targetCtx) {
  if (!els.showFrames.checked) return;
  const config = MODE_CONFIG[els.mode.value];
  targetCtx.save();
  targetCtx.lineWidth = 1;
  if (config.guide === "tattoo") {
    drawTattooGuide(targetCtx);
  }
  for (const layer of config.layers) {
    const [x, y, w, h] = layer.frame;
    targetCtx.strokeStyle = "rgba(255,255,255,.9)";
    targetCtx.strokeRect(x + 0.5, y + 0.5, w - 1, h - 1);
    drawGuideLabel(targetCtx, layerLabel(layer), x + 3, y + 3, 13);
    const [sx, sy, sw, sh] = layer.safe;
    targetCtx.setLineDash([4, 3]);
    targetCtx.strokeStyle = "rgba(255,60,60,.95)";
    targetCtx.strokeRect(sx + 0.5, sy + 0.5, sw - 1, sh - 1);
    targetCtx.setLineDash([]);
  }
  targetCtx.restore();
}

function drawGuideLabel(targetCtx, label, x, y, size = 12) {
  targetCtx.save();
  targetCtx.font = `700 ${size}px "Microsoft JhengHei", "Segoe UI", sans-serif`;
  targetCtx.textBaseline = "top";
  targetCtx.lineJoin = "round";
  const metrics = targetCtx.measureText(label);
  const labelW = Math.ceil(metrics.width) + 7;
  const labelH = size + 5;
  targetCtx.fillStyle = "rgba(7, 12, 16, .72)";
  targetCtx.fillRect(x - 2, y - 2, labelW, labelH);
  targetCtx.lineWidth = 3;
  targetCtx.strokeStyle = "rgba(0,0,0,.95)";
  targetCtx.strokeText(label, x + 2, y + 1);
  targetCtx.fillStyle = "rgba(255,255,255,.98)";
  targetCtx.fillText(label, x + 2, y + 1);
  targetCtx.restore();
}

function drawTattooGuide(targetCtx) {
  const parts = [
    [t("layer.tattoo.head"), 105, 8, 46, 42],
    [t("layer.tattoo.chest"), 82, 58, 44, 58],
    [t("layer.tattoo.back"), 132, 58, 44, 58],
    [t("layer.tattoo.leftArm"), 26, 58, 42, 88],
    [t("layer.tattoo.rightArm"), 188, 58, 42, 88],
    [t("layer.tattoo.leftLeg"), 76, 130, 48, 100],
    [t("layer.tattoo.rightLeg"), 132, 130, 48, 100],
  ];
  targetCtx.save();
  targetCtx.strokeStyle = "rgba(255,255,255,.85)";
  targetCtx.setLineDash([5, 4]);
  for (const [label, x, y, w, h] of parts) {
    targetCtx.strokeRect(x + 0.5, y + 0.5, w, h);
    drawGuideLabel(targetCtx, label, x + 3, y + 3, 10);
  }
  targetCtx.setLineDash([]);
  targetCtx.strokeStyle = "rgba(72,196,216,.9)";
  targetCtx.strokeRect(0.5, 0.5, 255, 255);
  drawGuideLabel(targetCtx, t("tattooGuide"), 6, 238, 10);
  targetCtx.restore();
}

function buildDesign() {
  const targetSize = currentSize();
  const c = document.createElement("canvas");
  c.width = targetSize;
  c.height = targetSize;
  const cctx = c.getContext("2d", { willReadFrequently: true });
  cctx.clearRect(0, 0, targetSize, targetSize);
  for (const layer of MODE_CONFIG[els.mode.value].layers) {
    if (state.images[layer.key]) drawLayer(cctx, state.images[layer.key], layer);
  }
  return c;
}

function currentSize() {
  return MODE_CONFIG[els.mode.value].size || SIZE;
}

function canvasHeaderForSize(size) {
  const header = new Uint8Array(20);
  const view = new DataView(header.buffer);
  view.setUint32(0, 1, true);
  view.setUint32(4, size, true);
  view.setUint32(8, size, true);
  view.setUint32(12, 0, true);
  view.setUint32(16, size * size, true);
  return header;
}

function headerForCurrentMode() {
  const config = MODE_CONFIG[els.mode.value];
  return config.header || Array.from(canvasHeaderForSize(currentSize()));
}

function wallGrid() {
  const cols = Math.max(1, Math.min(9, Number(els.wallCols.value) || 1));
  const rows = Math.max(1, Math.min(9, Number(els.wallRows.value) || 1));
  return { cols, rows };
}

function buildWallDesign() {
  const { cols, rows } = wallGrid();
  const c = document.createElement("canvas");
  c.width = cols * SIZE;
  c.height = rows * SIZE;
  const cctx = c.getContext("2d", { willReadFrequently: true });
  cctx.clearRect(0, 0, c.width, c.height);
  const img = state.images.art;
  if (!img) return c;
  const processed = dataToCanvas(removeBackground(imageToData(img)));
  const fit = els.fitMode.value;
  const control = state.controls.art;
  const userScale = control ? Number(control.scale.value) / 100 : 1;
  const userX = control ? Number(control.x.value) * cols : 0;
  const userY = control ? Number(control.y.value) * rows : 0;
  const rotation = control ? Number(control.rotate.value) * Math.PI / 180 : 0;
  const sx = c.width / processed.width;
  const sy = c.height / processed.height;
  const baseScale = fit === "cover" ? Math.max(sx, sy) : Math.min(sx, sy);
  const finalScale = baseScale * userScale;
  const dw = processed.width * finalScale;
  const dh = processed.height * finalScale;
  cctx.save();
  cctx.translate(c.width / 2 + userX, c.height / 2 + userY);
  cctx.rotate(rotation);
  cctx.drawImage(processed, -dw / 2, -dh / 2, dw, dh);
  cctx.restore();
  return c;
}

function wallTileCanvas(wallCanvas, x, y) {
  const tile = document.createElement("canvas");
  tile.width = SIZE;
  tile.height = SIZE;
  tile.getContext("2d", { willReadFrequently: true }).drawImage(
    wallCanvas,
    x * SIZE,
    y * SIZE,
    SIZE,
    SIZE,
    0,
    0,
    SIZE,
    SIZE,
  );
  return tile;
}

function wallFileName(x, y) {
  const prefix = (els.wallPrefix.value || "K").trim().replace(/\.(pnt|png)$/i, "") || "K";
  return `${prefix}${x}${y}${MODE_CONFIG.wall.suffix}`;
}

function colorDistance(r, g, b, color) {
  const dr = r - color.rgba[0], dg = g - color.rgba[1], db = b - color.rgba[2];
  return dr * dr + dg * dg + db * db;
}

function activePalette() {
  return window.ATLAS_DYE_PALETTE || window.ATLAS_WIKI_DYE_PALETTE;
}

function nearestColor(r, g, b, palette) {
  let best = palette[1] || palette[0];
  let bestD = Infinity;
  for (const color of palette) {
    if (color.id === 0) continue;
    const d = colorDistance(r, g, b, color);
    if (d < bestD) {
      bestD = d;
      best = color;
    }
  }
  return best;
}

function choosePalette(imageData) {
  const sourcePalette = activePalette();
  if (els.qualityMode.value === "bw") {
    return sourcePalette.filter((color) => color.id === 0 || color.label === "Black" || color.label === "White");
  }
  const limit = els.paletteLimit.value;
  if (limit === "all") return sourcePalette;
  const counts = new Map();
  const data = imageData.data;
  for (let i = 0; i < data.length; i += 4) {
    if (data[i + 3] < 32) continue;
    const c = nearestColor(data[i], data[i + 1], data[i + 2], sourcePalette);
    counts.set(c.id, (counts.get(c.id) || 0) + 1);
  }
  const ids = [...counts.entries()].sort((a, b) => b[1] - a[1]).slice(0, Number(limit)).map((x) => x[0]);
  return sourcePalette.filter((c) => c.id === 0 || ids.includes(c.id));
}

function quantize(canvas) {
  const qctx = canvas.getContext("2d", { willReadFrequently: true });
  const src = prepareImageData(qctx.getImageData(0, 0, canvas.width, canvas.height));
  const palette = choosePalette(src);
  if (els.qualityMode.value === "bw") {
    return quantizeBlackWhite(src, palette);
  }
  if (["dither", "softDither", "sharpDither"].includes(els.qualityMode.value)) {
    const modeBase = els.qualityMode.value === "softDither" ? 0.45 : els.qualityMode.value === "sharpDither" ? 0.9 : 0.7;
    const strength = modeBase * qualityStrength();
    if (strength <= 0) return quantizeNearest(src, palette);
    return quantizeDither(src, palette, strength);
  }
  return quantizeNearest(src, palette);
}

function qualityStrength() {
  return Math.max(0, Math.min(100, Number(els.ditherAmount.value) || 0)) / 100;
}

function prepareImageData(src) {
  const mode = els.qualityMode.value;
  const strength = qualityStrength();
  if (mode === "smooth") return smoothImageData(adjustImageData(src, { contrast: 0.95 + strength * 0.08, saturation: 0.95 + strength * 0.08 }), 1 + Math.round(strength * 2));
  if (mode === "lineart") return adjustImageData(src, { contrast: 1.15 + strength * 0.55, saturation: 0.95 + strength * 0.25 });
  if (mode === "sharpDither") return adjustImageData(src, { contrast: 1.05 + strength * 0.35, saturation: 1.0 + strength * 0.2 });
  if (mode === "softDither") return smoothImageData(adjustImageData(src, { contrast: 0.9 + strength * 0.08, saturation: 0.9 + strength * 0.08 }), 1);
  if (mode === "bw") return smoothGrayscaleImageData(adjustImageData(src, { contrast: 1.12 + strength * 0.42, saturation: 0 }));
  if (mode === "pixel") return pixelateImageData(src, 128);
  return adjustImageData(src, { contrast: 0.95 + strength * 0.12, saturation: 0.95 + strength * 0.12 });
}

function grayscaleImageData(src) {
  const out = new ImageData(new Uint8ClampedArray(src.data), src.width, src.height);
  const d = out.data;
  for (let i = 0; i < d.length; i += 4) {
    if (d[i + 3] < 32) continue;
    const gray = d[i] * 0.299 + d[i + 1] * 0.587 + d[i + 2] * 0.114;
    d[i] = gray;
    d[i + 1] = gray;
    d[i + 2] = gray;
  }
  return out;
}

function smoothGrayscaleImageData(src) {
  const gray = grayscaleImageData(src);
  return smoothImageData(gray, 1);
}

function smoothImageData(src, passes = 1) {
  let current = src;
  for (let pass = 0; pass < passes; pass++) {
    current = smoothImageDataOnce(current);
  }
  return current;
}

function smoothImageDataOnce(src) {
  const out = new ImageData(new Uint8ClampedArray(src.data), src.width, src.height);
  const input = src.data;
  const output = out.data;
  const w = src.width;
  const h = src.height;
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const i = (y * w + x) * 4;
      if (input[i + 3] < 32) continue;
      let totalR = 0;
      let totalG = 0;
      let totalB = 0;
      let weight = 0;
      for (let yy = -1; yy <= 1; yy++) {
        const py = y + yy;
        if (py < 0 || py >= h) continue;
        for (let xx = -1; xx <= 1; xx++) {
          const px = x + xx;
          if (px < 0 || px >= w) continue;
          const pi = (py * w + px) * 4;
          if (input[pi + 3] < 32) continue;
          const k = xx === 0 && yy === 0 ? 4 : 1;
          totalR += input[pi] * k;
          totalG += input[pi + 1] * k;
          totalB += input[pi + 2] * k;
          weight += k;
        }
      }
      output[i] = weight ? totalR / weight : input[i];
      output[i + 1] = weight ? totalG / weight : input[i + 1];
      output[i + 2] = weight ? totalB / weight : input[i + 2];
    }
  }
  return out;
}

function adjustImageData(src, { contrast, saturation }) {
  const out = new ImageData(new Uint8ClampedArray(src.data), src.width, src.height);
  const d = out.data;
  for (let i = 0; i < d.length; i += 4) {
    if (d[i + 3] < 32) continue;
    let r = (d[i] - 128) * contrast + 128;
    let g = (d[i + 1] - 128) * contrast + 128;
    let b = (d[i + 2] - 128) * contrast + 128;
    const gray = r * 0.299 + g * 0.587 + b * 0.114;
    r = gray + (r - gray) * saturation;
    g = gray + (g - gray) * saturation;
    b = gray + (b - gray) * saturation;
    d[i] = Math.max(0, Math.min(255, r));
    d[i + 1] = Math.max(0, Math.min(255, g));
    d[i + 2] = Math.max(0, Math.min(255, b));
  }
  return out;
}

function pixelateImageData(src, smallSize) {
  const source = document.createElement("canvas");
  source.width = src.width;
  source.height = src.height;
  source.getContext("2d").putImageData(src, 0, 0);
  const small = document.createElement("canvas");
  small.width = smallSize;
  small.height = smallSize;
  const smallCtx = small.getContext("2d");
  smallCtx.imageSmoothingEnabled = false;
  smallCtx.drawImage(source, 0, 0, smallSize, smallSize);
  const out = document.createElement("canvas");
  out.width = src.width;
  out.height = src.height;
  const outCtx = out.getContext("2d", { willReadFrequently: true });
  outCtx.imageSmoothingEnabled = false;
  outCtx.drawImage(small, 0, 0, src.width, src.height);
  return outCtx.getImageData(0, 0, src.width, src.height);
}

function otsuThreshold(src) {
  const histogram = new Uint32Array(256);
  let total = 0;
  let sum = 0;
  const d = src.data;
  for (let i = 0; i < d.length; i += 4) {
    if (d[i + 3] < 32) continue;
    const gray = Math.max(0, Math.min(255, Math.round(d[i])));
    histogram[gray]++;
    total++;
    sum += gray;
  }
  if (!total) return 128;
  let backgroundWeight = 0;
  let backgroundSum = 0;
  let bestVariance = -1;
  let threshold = Math.round(sum / total);
  for (let i = 0; i < 256; i++) {
    backgroundWeight += histogram[i];
    if (!backgroundWeight) continue;
    const foregroundWeight = total - backgroundWeight;
    if (!foregroundWeight) break;
    backgroundSum += i * histogram[i];
    const backgroundMean = backgroundSum / backgroundWeight;
    const foregroundMean = (sum - backgroundSum) / foregroundWeight;
    const variance = backgroundWeight * foregroundWeight * (backgroundMean - foregroundMean) ** 2;
    if (variance > bestVariance) {
      bestVariance = variance;
      threshold = i;
    }
  }
  return Math.max(80, Math.min(180, threshold));
}

function quantizeBlackWhite(src, palette) {
  const black = palette.find((color) => color.label === "Black") || palette[1] || palette[0];
  const white = palette.find((color) => color.label === "White") || palette[2] || black;
  const threshold = otsuThreshold(src);
  const strength = qualityStrength();
  const detailAmount = 6 + strength * 38;
  const matrix = [
    [0, 8, 2, 10],
    [12, 4, 14, 6],
    [3, 11, 1, 9],
    [15, 7, 13, 5],
  ];
  const out = new ImageData(src.width, src.height);
  const buffer = new Uint8Array(src.width * src.height);
  const counts = new Map();
  const data = src.data;
  for (let y = 0, p = 0; y < src.height; y++) {
    for (let x = 0; x < src.width; x++, p++) {
      const i = p * 4;
    if (data[i + 3] < 32) {
      buffer[p] = 0;
      out.data[i + 3] = 0;
      counts.set(0, (counts.get(0) || 0) + 1);
      continue;
    }
      const orderedOffset = (matrix[y % 4][x % 4] / 15 - 0.5) * detailAmount;
      const localValue = data[i] + orderedOffset;
      const color = localValue < threshold ? black : white;
    buffer[p] = color.id;
    out.data[i] = color.rgba[0];
    out.data[i + 1] = color.rgba[1];
    out.data[i + 2] = color.rgba[2];
    out.data[i + 3] = color.rgba[3];
    counts.set(color.id, (counts.get(color.id) || 0) + 1);
    }
  }
  return { imageData: out, buffer, counts };
}

function quantizeNearest(src, palette) {
  const out = new ImageData(src.width, src.height);
  const buffer = new Uint8Array(src.width * src.height);
  const counts = new Map();

  for (let i = 0, p = 0; i < src.data.length; i += 4, p++) {
    const a = src.data[i + 3];
    if (a < 32) {
      buffer[p] = 0;
      out.data[i + 3] = 0;
      counts.set(0, (counts.get(0) || 0) + 1);
      continue;
    }
    const color = nearestColor(src.data[i], src.data[i + 1], src.data[i + 2], palette);
    buffer[p] = color.id;
    out.data[i] = color.rgba[0];
    out.data[i + 1] = color.rgba[1];
    out.data[i + 2] = color.rgba[2];
    out.data[i + 3] = color.rgba[3];
    counts.set(color.id, (counts.get(color.id) || 0) + 1);
  }
  return { imageData: out, buffer, counts };
}

function quantizeDither(src, palette, strength = 0.7) {
  const out = new ImageData(src.width, src.height);
  const buffer = new Uint8Array(src.width * src.height);
  const counts = new Map();
  const pixels = new Float32Array(src.width * src.height * 4);
  for (let i = 0; i < src.data.length; i++) pixels[i] = src.data[i];

  const addError = (x, y, er, eg, eb, factor) => {
    if (x < 0 || x >= src.width || y < 0 || y >= src.height) return;
    const i = (y * src.width + x) * 4;
    if (pixels[i + 3] < 32) return;
    pixels[i] = Math.max(0, Math.min(255, pixels[i] + er * factor));
    pixels[i + 1] = Math.max(0, Math.min(255, pixels[i + 1] + eg * factor));
    pixels[i + 2] = Math.max(0, Math.min(255, pixels[i + 2] + eb * factor));
  };

  for (let y = 0; y < src.height; y++) {
    for (let x = 0; x < src.width; x++) {
      const i = (y * src.width + x) * 4;
      const p = y * src.width + x;
      const a = pixels[i + 3];
      if (a < 32) {
        buffer[p] = 0;
        out.data[i + 3] = 0;
        counts.set(0, (counts.get(0) || 0) + 1);
        continue;
      }
      const oldR = pixels[i];
      const oldG = pixels[i + 1];
      const oldB = pixels[i + 2];
      const color = nearestColor(oldR, oldG, oldB, palette);
      buffer[p] = color.id;
      out.data[i] = color.rgba[0];
      out.data[i + 1] = color.rgba[1];
      out.data[i + 2] = color.rgba[2];
      out.data[i + 3] = color.rgba[3];
      counts.set(color.id, (counts.get(color.id) || 0) + 1);

      const er = oldR - color.rgba[0];
      const eg = oldG - color.rgba[1];
      const eb = oldB - color.rgba[2];
      addError(x + 1, y, er, eg, eb, 7 / 16 * strength);
      addError(x - 1, y + 1, er, eg, eb, 3 / 16 * strength);
      addError(x, y + 1, er, eg, eb, 5 / 16 * strength);
      addError(x + 1, y + 1, er, eg, eb, 1 / 16 * strength);
    }
  }
  return { imageData: out, buffer, counts };
}

function render() {
  if (MODE_CONFIG[els.mode.value].wall) {
    renderWall();
    return;
  }
  const design = buildDesign();
  const result = quantize(design);
  state.lastBuffer = result.buffer;
  state.lastPreview = result.imageData;
  els.canvas.width = result.imageData.width;
  els.canvas.height = result.imageData.height;
  ctx.putImageData(result.imageData, 0, 0);
  drawFrames(ctx);
  updateDyes(result.counts);
  const name = outputBaseName();
  els.fileNameHint.textContent = `${name}.pnt / ${name}.png`;
  updatePreviewZoom();
}

function updatePreviewZoom() {
  const zoom = Number(els.previewZoom.value || 100);
  const wrapRect = els.canvasWrap.getBoundingClientRect();
  const isMobile = window.matchMedia("(max-width: 820px)").matches;
  const safeWidth = Math.max(80, wrapRect.width - 28);
  const visibleHeight = window.visualViewport ? window.visualViewport.height : window.innerHeight;
  const safeHeight = Math.max(80, (isMobile ? Math.min(wrapRect.height || visibleHeight * 0.68, visibleHeight * 0.68) : wrapRect.height) - 32);
  const maxPreview = isMobile ? 640 : 760;
  const baseSize = Math.min(safeWidth, safeHeight, maxPreview);
  els.canvas.style.setProperty("--preview-size", `${Math.max(32, baseSize * zoom / 100)}px`);
}

function renderWall() {
  const wall = buildWallDesign();
  const { cols, rows } = wallGrid();
  const scaleCanvas = document.createElement("canvas");
  scaleCanvas.width = SIZE;
  scaleCanvas.height = SIZE;
  const scaleCtx = scaleCanvas.getContext("2d", { willReadFrequently: true });
  scaleCtx.clearRect(0, 0, SIZE, SIZE);
  const available = SIZE - WALL_PREVIEW_PADDING * 2;
  const fitScale = Math.min(available / wall.width, available / wall.height);
  const previewW = Math.max(1, Math.round(wall.width * fitScale));
  const previewH = Math.max(1, Math.round(wall.height * fitScale));
  const offsetX = Math.floor((SIZE - previewW) / 2);
  const offsetY = Math.floor((SIZE - previewH) / 2);
  scaleCtx.drawImage(wall, offsetX, offsetY, previewW, previewH);
  const result = quantize(scaleCanvas);
  state.lastBuffer = null;
  state.lastPreview = result.imageData;
  ctx.putImageData(result.imageData, 0, 0);
  drawWallFrames(ctx, cols, rows, offsetX, offsetY, previewW, previewH);
  updateDyes(result.counts);
  const first = wallFileName(0, 0);
  const last = wallFileName(cols - 1, rows - 1);
  els.fileNameHint.textContent = formatText("wallFileSummary", { first, last, count: cols * rows });
  updatePreviewZoom();
}

function drawWallFrames(targetCtx, cols, rows, offsetX, offsetY, previewW, previewH) {
  if (!els.showFrames.checked) return;
  targetCtx.save();
  targetCtx.strokeStyle = "rgba(255,255,255,.9)";
  targetCtx.fillStyle = "rgba(255,255,255,.95)";
  targetCtx.lineWidth = 1;
  targetCtx.font = "10px sans-serif";
  const cellW = previewW / cols;
  const cellH = previewH / rows;
  for (let x = 0; x <= cols; x++) {
    const px = Math.round(offsetX + x * cellW) + 0.5;
    targetCtx.beginPath();
    targetCtx.moveTo(px, offsetY);
    targetCtx.lineTo(px, offsetY + previewH);
    targetCtx.stroke();
  }
  for (let y = 0; y <= rows; y++) {
    const py = Math.round(offsetY + y * cellH) + 0.5;
    targetCtx.beginPath();
    targetCtx.moveTo(offsetX, py);
    targetCtx.lineTo(offsetX + previewW, py);
    targetCtx.stroke();
  }
  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      targetCtx.fillText(`${els.wallPrefix.value || "K"}${x}${y}`, offsetX + x * cellW + 4, offsetY + y * cellH + 12);
    }
  }
  targetCtx.restore();
}

function outputBaseName() {
  const config = MODE_CONFIG[els.mode.value];
  let name = (els.outputName.value || config.name).trim();
  name = name.replace(/\.(pnt|png)$/i, "");
  if (config.suffix && !name.toLowerCase().endsWith(config.suffix.toLowerCase())) {
    name += config.suffix;
  }
  return name;
}

function baseNameWithoutSuffix(name, suffix) {
  if (!suffix) return name;
  return name.toLowerCase().endsWith(suffix.toLowerCase()) ? name.slice(0, -suffix.length) : name;
}

function cleanOutputNameInput() {
  const suffixes = Object.values(MODE_CONFIG).map((config) => config.suffix).filter(Boolean);
  let name = els.outputName.value.replace(/\.(pnt|png)$/i, "");
  for (const suffix of suffixes) {
    if (name.toLowerCase().endsWith(suffix.toLowerCase())) {
      name = name.slice(0, -suffix.length);
      break;
    }
  }
  if (name !== els.outputName.value) {
    els.outputName.value = name;
  }
}

function updateDyes(counts) {
  const nonTransparent = [...counts.entries()].filter(([id, count]) => id !== 0 && count > 0);
  els.dyeCount.textContent = formatText("colorCount", { count: nonTransparent.length });
  els.dyeList.innerHTML = "";
  nonTransparent.sort((a, b) => b[1] - a[1]).forEach(([id, count]) => {
    const color = window.ATLAS_PALETTE.find((c) => c.id === id);
    const active = activePalette();
    const display = active.find((c) => c.id === id) || color;
    const item = document.createElement("div");
    item.className = "dye";
    item.innerHTML = `<span class="swatch" style="background:rgba(${display.rgba.join(",")})"></span><span>${id} ${display.label} (${count})</span>`;
    els.dyeList.appendChild(item);
  });
}

function download(name, blob) {
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = name;
  a.click();
  URL.revokeObjectURL(a.href);
}

function downloadPng() {
  if (MODE_CONFIG[els.mode.value].wall) {
    downloadWall("png");
    return;
  }
  render();
  const name = outputBaseName();
  const c = document.createElement("canvas");
  c.width = state.lastPreview.width;
  c.height = state.lastPreview.height;
  c.getContext("2d").putImageData(state.lastPreview, 0, 0);
  c.toBlob((blob) => download(`${name}.png`, blob), "image/png");
}

function downloadPnt() {
  if (MODE_CONFIG[els.mode.value].wall) {
    downloadWall("pnt");
    return;
  }
  render();
  const name = outputBaseName();
  const header = headerForCurrentMode();
  const bytes = new Uint8Array(20 + state.lastBuffer.length);
  bytes.set(header, 0);
  bytes.set(state.lastBuffer, 20);
  download(`${name}.pnt`, new Blob([bytes], { type: "application/octet-stream" }));
}

function downloadWall(kind) {
  const wall = buildWallDesign();
  const { cols, rows } = wallGrid();
  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      const tile = wallTileCanvas(wall, x, y);
      const name = wallFileName(x, y);
      const result = quantize(tile);
      if (kind === "png") {
        const pngCanvas = document.createElement("canvas");
        pngCanvas.width = SIZE;
        pngCanvas.height = SIZE;
        pngCanvas.getContext("2d").putImageData(result.imageData, 0, 0);
        pngCanvas.toBlob((blob) => download(`${name}.png`, blob), "image/png");
      } else {
        const bytes = new Uint8Array(20 + result.buffer.length);
        bytes.set(CANVAS_HEADER, 0);
        bytes.set(result.buffer, 20);
        download(`${name}.pnt`, new Blob([bytes], { type: "application/octet-stream" }));
      }
    }
  }
  renderWall();
}

els.languageBar.addEventListener("click", (event) => {
  const button = event.target.closest("[data-lang]");
  if (!button || button.dataset.lang === state.language) return;
  state.language = button.dataset.lang;
  applyLanguage();
  setupUploads({ preserveValues: true });
});
els.mode.addEventListener("change", setupUploads);
[els.fitMode, els.paletteLimit, els.qualityMode, els.ditherAmount, els.removeMode, els.threshold, els.fillColor, els.transparentBg, els.showFrames, els.wallCols, els.wallRows, els.wallPrefix]
  .forEach((el) => el.addEventListener("input", render));
els.outputName.addEventListener("input", () => {
  cleanOutputNameInput();
  render();
});
els.previewZoom.addEventListener("input", updatePreviewZoom);
window.addEventListener("resize", updatePreviewZoom);
document.addEventListener("paste", pasteImageFromClipboard);
els.pngBtn.addEventListener("click", downloadPng);
els.pntBtn.addEventListener("click", downloadPnt);
els.canvas.addEventListener("click", (event) => {
  const rect = els.canvas.getBoundingClientRect();
  const x = Math.floor((event.clientX - rect.left) * els.canvas.width / rect.width);
  const y = Math.floor((event.clientY - rect.top) * els.canvas.height / rect.height);
  const design = buildDesign();
  const pixel = design.getContext("2d", { willReadFrequently: true }).getImageData(x, y, 1, 1).data;
  state.picked = [pixel[0], pixel[1], pixel[2]];
  els.removeMode.value = "pick";
  render();
});

applyLanguage();
setupUploads();
updatePreviewZoom();
