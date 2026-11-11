import {
  siPython, siPytorch, siScikitlearn, siNumpy, siPandas, siOpencv, siHuggingface, siFastapi, siFlask,
  siPostgresql, siSqlite, siStreamlit, siRaspberrypi, siArduino, siGit, siGithub, siGooglecolab, siKaggle,
  siAnaconda, siJupyter, siCplusplus, siOpenai, siPytest, siMeta, siGooglecloud, siDatacamp, siRoboflow,
  siMediapipe, siElevenlabs, siAmd, siTensorflow, siKeras,
} from "simple-icons";

type SI = { path: string; hex: string; title: string };

// Tech name (as written in the data file) → brand icon.
const BRANDS: Record<string, SI> = {
  python: siPython, pytorch: siPytorch, "scikit-learn": siScikitlearn, numpy: siNumpy, pandas: siPandas,
  opencv: siOpencv, "hugging face": siHuggingface, "hugging face transformers": siHuggingface, transformers: siHuggingface,
  fastapi: siFastapi, flask: siFlask, postgresql: siPostgresql, sqlite: siSqlite, streamlit: siStreamlit,
  "raspberry pi": siRaspberrypi, arduino: siArduino, git: siGit, github: siGithub, "google colab": siGooglecolab,
  "colab gpu training": siGooglecolab, kaggle: siKaggle, anaconda: siAnaconda, jupyter: siJupyter, "c++": siCplusplus,
  "openai api": siOpenai, openai: siOpenai, pytest: siPytest, "llama models": siMeta, "llama 3.3 70b": siMeta, llama: siMeta,
  "google cloud": siGooglecloud, datacamp: siDatacamp, roboflow: siRoboflow, "mediapipe pose": siMediapipe, mediapipe: siMediapipe,
  elevenlabs: siElevenlabs, "amd developer cloud": siAmd, tensorflow: siTensorflow, keras: siKeras,
  "llama 3.3": siMeta,
};

function readable(hex: string) {
  const n = parseInt(hex, 16);
  const r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
  const lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return lum < 0.38 ? "#e6e0f5" : `#${hex}`;
}

// Line glyphs for concepts without a brand logo (stroke style).
const C = (cx: number, cy: number, r: number) => `M${cx - r} ${cy}a${r} ${r} 0 1 0 ${2 * r} 0a${r} ${r} 0 1 0 ${-2 * r} 0`;
const GLYPH: Record<string, string> = {
  trend: "M3 17l6-6 4 4 8-8M14 7h7v7",
  tag: `M3 12V4h8l10 10-8 8L3 12z${C(7.5, 7.5, 1)}`,
  tree: "M12 22v-7M8 12l4 3 4-3M6 13a4 4 0 01-.5-7.9A5 5 0 0115 4a4 4 0 013 6.5A3.5 3.5 0 0116 16H8a3 3 0 01-2-3z",
  sliders: "M4 6h9M17 6h3M4 12h3M11 12h9M4 18h11M19 18h1M15 4v4M9 10v4M17 16v4",
  target: `${C(12, 12, 9)}${C(12, 12, 5)}${C(12, 12, 1)}`,
  funnel: "M3 4h18l-7 8.5V19l-4 2v-8.5L3 4z",
  search: `${C(11, 11, 7)}M21 21l-5-5`,
  nodes: `${C(5, 6, 2)}${C(5, 18, 2)}${C(12, 12, 2)}${C(19, 6, 2)}${C(19, 18, 2)}M7 7l3.5 3.5M7 17l3.5-3.5M13.5 10.5L17 7M13.5 13.5L17 17`,
  layers: "M12 3l9 5-9 5-9-5 9-5zM3 13l9 5 9-5M3 17.5l9 5 9-5",
  swap: "M4 8h14l-4-4M20 16H6l4 4",
  terminal: "M4 6l6 6-6 6M12 18h8",
  robot: `M5 8h14v11H5zM12 8V4${C(12, 3, 1)}M9 13h.01M15 13h.01M9.5 16h5M2 13h3M19 13h3`,
  smile: `${C(12, 12, 9)}M8 14s1.5 2 4 2 4-2 4-2M9 9.5h.01M15 9.5h.01`,
  mic: "M12 3a3 3 0 00-3 3v6a3 3 0 006 0V6a3 3 0 00-3-3zM5 11a7 7 0 0014 0M12 18v3",
  wave: "M3 12h2M7 8v8M11 5v14M15 8v8M19 10v4M21 12h0",
  scan: "M4 8V4h4M16 4h4v4M20 16v4h-4M8 20H4v-4M8 8h8v8H8z",
  rotbox: "M4 8V4h4M16 4h4v4M20 16v4h-4M8 20H4v-4M12 6l6 6-6 6-6-6z",
  crosshair: `${C(12, 12, 8)}M12 2v5M12 17v5M2 12h5M17 12h5`,
  person: `${C(12, 4.5, 2)}M12 7v6M12 13l-3.5 7M12 13l3.5 7M6 9.5h12`,
  grid: "M4 4h16v16H4zM4 9.3h16M4 14.6h16M9.3 4v16M14.6 4v16",
  perspective: "M3 20L8 4h8l5 16H3zM5.5 12h13M12 4v16",
  badge: `M3 5h18v14H3z${C(8, 11, 2)}M5 16.5c.8-1.5 1.8-2 3-2s2.2.5 3 2M13 9h5M13 13h5`,
  vector: "M4 20L20 4M20 4h-6M20 4v6M4 20L9 6M4 20l14-5",
  chart: "M4 20V10M10 20V4M16 20v-7M2 20h20",
  pie: "M12 3v9h9A9 9 0 1112 3zM15 3.5A9 9 0 0120.5 9H15V3.5z",
  heat: "M4 4h5v5H4zM10 4h5v5h-5zM16 4h4v5h-4zM4 10h5v5H4zM10 10h5v5h-5zM16 10h4v5h-4zM4 16h5v4H4zM10 16h5v4h-5zM16 16h4v4h-4z",
  sparkles: "M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8zM19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z",
  chat: "M4 4h16v11H8l-4 4V4zM8 9h8M8 12h5",
  api: "M8 6l-5 6 5 6M16 6l5 6-5 6M14 4l-4 16",
  pipe: `${C(5, 12, 2)}${C(19, 12, 2)}M7 12h3M14 12h3M10 9h4v6h-4z`,
  chip: "M8 2v3M16 2v3M8 19v3M16 19v3M2 8h3M2 16h3M19 8h3M19 16h3M6 5h12v14H6zM9.5 9.5h5v5h-5z",
  antenna: `${C(12, 12, 1.5)}M8 16a5.5 5.5 0 010-8M16 8a5.5 5.5 0 010 8M5 19a10 10 0 010-14M19 5a10 10 0 010 14`,
  pulse: "M3 12h4l2-6 4 12 2-6h6",
  db: "M12 3c4.4 0 8 1.3 8 3v12c0 1.7-3.6 3-8 3s-8-1.3-8-3V6c0-1.7 3.6-3 8-3zM4 6c0 1.7 3.6 3 8 3s8-1.3 8-3M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3",
  code: "M8 7l-5 5 5 5M16 7l5 5-5 5",
  gpu: "M3 7h18v10H3zM7 17v3M17 17v3M7 10h3v4H7zM13 10h4M13 13h4",
  brain: "M9.5 3A2.5 2.5 0 007 5.5v.5a3 3 0 00-2 5 3 3 0 001 5 3 3 0 003.5 4.5H12V3H9.5zM14.5 3A2.5 2.5 0 0117 5.5v.5a3 3 0 012 5 3 3 0 01-1 5 3 3 0 01-3.5 4.5H12",
};

const RULES: [RegExp, string][] = [
  [/obb/, "rotbox"], [/pose/, "person"], [/yolo|detection/, "scan"], [/tracking|bytetrack/, "crosshair"],
  [/re-id/, "badge"], [/segmentation/, "layers"], [/homography/, "perspective"],
  [/neural/, "nodes"], [/cnn/, "grid"], [/transfer/, "swap"], [/gpu/, "gpu"], [/^nlp$/, "chat"],
  [/regression/, "trend"], [/classification/, "tag"], [/forest/, "tree"], [/feature/, "sliders"],
  [/evaluation|validation/, "target"], [/cleaning/, "sparkles"], [/preprocess/, "funnel"], [/eda/, "search"],
  [/correlation/, "heat"], [/matplotlib/, "chart"], [/seaborn/, "pie"], [/vs code/, "code"], [/whisper/, "mic"], [/elevenlabs/, "wave"], [/prompt/, "terminal"], [/rag/, "db"],
  [/vector|qdrant/, "vector"], [/agent/, "robot"], [/sentiment/, "smile"], [/bert|groq|deepseek|llm/, "chat"],
  [/json|rest|api/, "api"], [/pipeline/, "pipe"], [/sql|postgres|database/, "db"], [/c\+\+|code/, "code"],
  [/wireless|antenna/, "antenna"], [/real-time/, "pulse"], [/sensor|iot|hardware/, "chip"],
];

function glyphFor(name: string): string {
  const n = name.toLowerCase();
  for (const [re, g] of RULES) if (re.test(n)) return g;
  return "sparkles";
}

export function TechIcon({ name, size = 16 }: { name: string; size?: number }) {
  const brand = BRANDS[name.toLowerCase()];
  if (brand) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill={readable(brand.hex)} aria-hidden="true" style={{ flexShrink: 0 }}>
        <path d={brand.path} />
      </svg>
    );
  }
  const g = glyphFor(name);
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#c4b5fd" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: 0 }}>
      <path d={GLYPH[g]} />
    </svg>
  );
}

/* ---------- UI icons ---------- */
const UI: Record<string, React.ReactNode> = {
  github: <path fill="currentColor" stroke="none" d={siGithub.path} />,
  linkedin: <path fill="currentColor" stroke="none" d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 110-4.13 2.06 2.06 0 010 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></>,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  arrowUpRight: <path d="M7 17L17 7M8 7h9v9" />,
  download: <path d="M12 3v12M7 10l5 5 5-5M4 19h16" />,
  copy: <><rect x="9" y="9" width="11" height="11" rx="2" /><path d="M5 15V5a2 2 0 012-2h10" /></>,
  pin: <><path d="M12 21s7-6.1 7-11a7 7 0 10-14 0c0 4.9 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></>,
  cap: <path d="M2 9l10-5 10 5-10 5L2 9zm4 2v5c2 2 10 2 12 0v-5" />,
  folder: <path d="M3 6a2 2 0 012-2h4l2 2h8a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V6z" />,
  star: <path fill="currentColor" stroke="none" d="M12 2l3 6.5 7 .8-5.2 4.8 1.5 7L12 17.6 5.7 21l1.5-7L2 9.3l7-.8z" />,
  check: <path d="M5 12l5 5 9-10" />,
  branch: <><circle cx="6" cy="5" r="2" /><circle cx="6" cy="19" r="2" /><circle cx="18" cy="7" r="2" /><path d="M6 7v10M18 9c0 4-6 3-12 8" /></>,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  medal: <><circle cx="12" cy="15" r="5" /><path d="M8.5 11L6 3h4l2 5 2-5h4l-2.5 8" /></>,
  play: <path fill="currentColor" stroke="none" d="M8 5v14l11-7z" />,
  expand: <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />,
  send: <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />,
  up: <path d="M12 19V5M6 11l6-6 6 6" />,
  file: <><path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8l-5-5z" /><path d="M14 3v5h5" /></>,
};

export function Icon({ name, size = 18 }: { name: keyof typeof UI; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: 0 }}>
      {UI[name]}
    </svg>
  );
}
