// All portfolio content lives here. Edit this file to change text, links or projects.

export const profile = {
  name: "Nimra Faryal",
  title: "AI / ML Engineer",
  roles: [
    "AI / ML Engineer",
    "Machine Learning Engineer",
    "Deep Learning Engineer",
    "Computer Vision Engineer",
    "AI Application Developer",
  ],
  location: "Islamabad, Pakistan",
  email: "nimrafaryal2019@gmail.com",
  github: "https://github.com/nimrafaryal",
  linkedin: "https://www.linkedin.com/in/nimra-faryal-47494225b/",
  resume: "/Nimra_Faryal_CV.pdf",
  tagline: "AI / ML Engineer",
  typed: ["machine learning models", "computer vision pipelines", "LLM-powered apps", "deep learning systems", "IoT systems"],
  intro:
    "AI / ML Engineer and Computer Science graduate from UET Taxila. I train models on real-world data and build the systems around them: detection and tracking pipelines, LLM apps, APIs and sensor networks.",
  dailyDrivers: ["Python", "PyTorch", "OpenCV", "Hugging Face", "FastAPI", "PostgreSQL"],
};

export const about = {
  headline: ["I train models,", "then build what runs them."],
  paragraphs: [
    "I'm fascinated by what happens when code meets the real world: data starts showing patterns, a model learns to see, and an idea becomes something that actually runs. That curiosity has pulled me across machine learning, deep learning, computer vision, NLP and IoT. I've forecast Walmart sales with a Random Forest, and trained YOLO models that track basketball players, catch shoplifters and spot predators on a farm.",
    "I like looking at a problem from a few angles and bringing different tools together to solve it, whether that's an AI interviewer built on Llama 3.3 and Whisper, a FastAPI security gateway for AI agents, or Raspberry Pi sensor nodes for my final year project. For me, engineering is more than getting a model to train. It starts with understanding the problem and ends with something people can use. I'm always learning, and usually halfway through building something new.",
  ],
  chips: ["Islamabad", "UET Taxila '26", "Python · PyTorch · FastAPI", "open to work"],
  terminal: [
    { cmd: "whoami", out: "nimra-faryal · ai / ml engineer" },
    { cmd: "cat focus.txt", out: "ml · deep learning · computer vision · llm apps · iot" },
    { cmd: "ls ./stack", out: "python pytorch yolo opencv transformers fastapi postgresql" },
    { cmd: "pytest action-gate/tests -q", out: "52 passed" },
  ],
  focus: [
    { title: "Machine Learning", text: "Cleaning, EDA, feature engineering and model evaluation on structured data.", icon: "chart" },
    { title: "Deep Learning & Vision", text: "Custom YOLO training, tracking, pose and segmentation on real footage.", icon: "vision" },
    { title: "NLP & LLMs", text: "LLM apps with Groq, Whisper, Transformers, RAG and vector search.", icon: "chat" },
    { title: "Backend & IoT", text: "FastAPI and Flask APIs, PostgreSQL, Raspberry Pi and Arduino sensors.", icon: "chip" },
  ],
};

export const heroStats = [
  { label: "CGPA", value: "3.69", suffix: "/4.00", color: "var(--cyan)" },
  { label: "Projects", value: "10", suffix: "+", color: "var(--green)" },
  { label: "Position, 4th Semester", value: "1", suffix: "st", color: "var(--blue-bright)" },
  { label: "Hackathons", value: "2", suffix: "", color: "var(--purple)" },
];

/* ---------------- Skills ---------------- */

export const skillGroups = [
  {
    category: "AI / Machine Learning",
    folder: "ai",
    icon: "🧠",
    color: "var(--cyan)",
    skills: [
      "PyTorch", "Scikit-Learn", "Hugging Face", "Transformers", "Neural Networks", "CNNs",
      "Transfer Learning", "NLP", "Random Forest", "Feature Engineering", "Model Evaluation", "GPU Training",
    ],
  },
  {
    category: "Generative AI & LLMs",
    folder: "genai",
    icon: "✨",
    color: "var(--purple)",
    skills: [
      "Llama 3.3", "OpenAI API", "Groq API", "DeepSeek V3", "Whisper", "BERT", "Prompt Engineering",
      "RAG", "Vector Search", "Qdrant", "AI Agents", "Sentiment Analysis", "ElevenLabs",
    ],
  },
  {
    category: "Computer Vision",
    folder: "vision",
    icon: "👁️",
    color: "var(--green)",
    skills: [
      "YOLOv8", "YOLOv11", "YOLO11-OBB", "YOLO11-Pose", "Object Detection", "Object Tracking", "ByteTrack",
      "Re-ID", "Instance Segmentation", "Pose Estimation", "Homography", "OpenCV", "MediaPipe", "Roboflow",
    ],
  },
  {
    category: "Data Science & Analytics",
    folder: "data",
    icon: "📊",
    color: "var(--blue-bright)",
    skills: [
      "Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter", "EDA", "Data Cleaning", "Preprocessing",
      "Regression", "Classification", "Correlation Analysis",
    ],
  },
  {
    category: "Backend & APIs",
    folder: "backend",
    icon: "⚙️",
    color: "var(--cyan)",
    skills: ["FastAPI", "Flask", "REST APIs", "JSON", "Pytest", "Streamlit", "Automated Data Pipelines"],
  },
  {
    category: "Languages & Databases",
    folder: "languages",
    icon: "💻",
    color: "var(--blue-bright)",
    skills: ["Python", "C++", "SQL", "PostgreSQL", "SQLite"],
  },
  {
    category: "IoT & Hardware",
    folder: "iot",
    icon: "📡",
    color: "var(--green)",
    skills: ["Raspberry Pi", "Arduino", "Sensor Integration", "Wireless Sensor Networks", "IoT Systems", "Real-Time Data Collection"],
  },
  {
    category: "Tools & Platforms",
    folder: "tools",
    icon: "🧰",
    color: "var(--purple)",
    skills: ["Git", "GitHub", "Google Colab", "Kaggle", "Hugging Face", "Roboflow", "Anaconda", "VS Code"],
  },
];

/* ---------------- Projects ---------------- */

export type FilterKey = "all" | "ml" | "dl" | "cv" | "nlp" | "backend" | "hackathon";

export const filters: { key: FilterKey; label: string }[] = [
  { key: "all", label: "All Projects" },
  { key: "ml", label: "Machine Learning & Data Science" },
  { key: "dl", label: "Deep Learning" },
  { key: "cv", label: "Computer Vision" },
  { key: "nlp", label: "AI, NLP & LLMs" },
  { key: "backend", label: "Backend & IoT" },
  { key: "hackathon", label: "Hackathons" },
];

export type Media =
  | { type: "video"; src: string; poster: string; label?: string }
  | { type: "image"; src: string; alt: string; label?: string; fit?: "cover" | "contain"; bg?: string }
  | { type: "flow"; steps: string[] };

export type Project = {
  id: string;
  title: string;
  category: string; // label shown on the card
  tags: FilterKey[];
  accent: string;
  badge?: string;
  description: string;
  highlights: string[];
  tech: string[];
  media: Media[];
  links: { label: string; href: string; kind: "github" | "demo" | "linkedin" | "page" }[];
  featured?: boolean;
  stats?: { value: string; label: string }[];
  pipeline?: string[];
};

export const projects: Project[] = [
  {
    id: "walmart",
    title: "Walmart Weekly Sales Forecasting",
    category: "Machine Learning",
    tags: ["ml"],
    accent: "var(--cyan)",
    badge: "R² 0.945",
    description:
      "Forecasts weekly Walmart sales from historical sales, store details and external factors such as markdowns, temperature, CPI and unemployment.",
    highlights: [
      "Cleaned and merged store, sales and economic datasets",
      "EDA, correlation analysis and feature importance",
      "Random Forest regressor: R² = 0.945, RMSE = 15,230",
    ],
    tech: ["Python", "Pandas", "Scikit-Learn", "Matplotlib", "Seaborn"],
    media: [{ type: "image", src: "/images/walmart-results.jpg", alt: "Predicted vs actual sales scatter plot with RMSE 15,230 and R² 0.945", fit: "contain", bg: "#eef3f8" }],
    links: [{ label: "GitHub", href: "https://github.com/nimrafaryal/walmart-weekly-sales-forecasting", kind: "github" }],
  },
  {
    id: "interview",
    title: "AI Interview Studio",
    category: "LLM Application + Computer Vision",
    tags: ["nlp", "cv"],
    accent: "var(--purple)",
    badge: "Llama 3.3 70B",
    description:
      "A complete AI interview system on one laptop: an LLM writes role-specific questions and scores the answers, while live proctoring tracks gaze and flags phones.",
    highlights: [
      "Groq Llama 3.3 70B generates questions and evaluates answers",
      "Whisper turns spoken answers into text",
      "MediaPipe gaze tracking and YOLOv8n phone detection give a 0–100 integrity score",
      "Exports HTML, CSV and JSON reports",
    ],
    tech: ["Python", "Groq API", "Llama 3.3 70B", "Whisper", "MediaPipe", "YOLOv8n", "Streamlit"],
    media: [{ type: "flow", steps: ["Role & CV", "Llama 3.3 writes questions", "Whisper transcribes answer", "LLM scores answer", "Proctor: gaze + phone", "Report"] }],
    links: [{ label: "GitHub", href: "https://github.com/nimrafaryal/ai-interview-studio", kind: "github" }],
  },
  {
    id: "sentiment",
    title: "Sentiment Analysis Web App",
    category: "NLP",
    tags: ["nlp"],
    accent: "var(--purple)",
    description:
      "A Streamlit app that classifies any text as positive or negative using a Hugging Face Transformers sentiment model.",
    highlights: ["Positive / negative classification", "Shows the model's confidence score", "Simple interactive interface"],
    tech: ["Python", "Hugging Face Transformers", "PyTorch", "Streamlit"],
    media: [{ type: "flow", steps: ["Your text", "Transformers pipeline", "Label + confidence"] }],
    links: [{ label: "GitHub", href: "https://github.com/nimrafaryal/sentiment-analysis-web-app", kind: "github" }],
  },
  {
    id: "theft",
    featured: true,
    stats: [
      { value: "0.9s", label: "alert after grab" },
      { value: "17", label: "pose keypoints" },
      { value: "~5", label: "FPS on CPU" },
    ],
    pipeline: ["YOLO11-Pose", "ByteTrack", "Zone rules", "Risk score", "Alert"],
    title: "CCTV Suspicious Behaviour Detection",
    category: "Computer Vision",
    tags: ["cv"],
    accent: "#ff5a6e",
    badge: "Featured on LinkedIn",
    description:
      "Tracks every customer on store CCTV and flags a shelf grab followed by a hand moving to the pocket, with a live alert dashboard and risk score per person.",
    highlights: [
      "Pose-keypoint behaviour rules with zone polygons over shelves",
      "Risk score per tracked ID, live alerts and suspect snapshot",
      "Alert fired 0.9 s after the grab on the test clip",
    ],
    tech: ["Python", "YOLO11-Pose", "ByteTrack", "OpenCV"],
    media: [{ type: "video", src: "/videos/theft.mp4", poster: "/videos/theft.jpg" }],
    links: [{ label: "LinkedIn demo", href: "https://lnkd.in/p/dWAtPEUq", kind: "linkedin" }],
  },
  {
    id: "farm",
    title: "Farm Predator Detection",
    category: "Computer Vision",
    tags: ["cv", "dl"],
    accent: "var(--green)",
    description:
      "Detects predators such as a mongoose on a poultry farm camera, tracks every chicken with its own ID and raises an intrusion warning.",
    highlights: ["Custom dataset created and annotated in Roboflow", "Trained and retrained a YOLO11 model", "Tracking with ByteTrack and a live count panel"],
    tech: ["Python", "YOLO11", "Roboflow", "ByteTrack"],
    media: [{ type: "video", src: "/videos/farm.mp4", poster: "/videos/farm.jpg" }],
    links: [],
  },
  {
    id: "drone",
    title: "Drone Vehicle Detection & Traffic Analytics",
    category: "Computer Vision",
    tags: ["cv", "dl"],
    accent: "var(--blue-bright)",
    badge: "YOLO11s-OBB",
    description:
      "Detects vehicles in aerial drone footage with oriented bounding boxes and turns the detections into top-down traffic counts.",
    highlights: ["Rotated boxes fit angled vehicles", "Traffic counting from a top-down view"],
    tech: ["Python", "YOLO11s-OBB", "Ultralytics", "OpenCV"],
    media: [{ type: "video", src: "/videos/drone.mp4", poster: "/videos/drone.jpg" }],
    links: [{ label: "LinkedIn demo", href: "https://lnkd.in/p/dvtmhbeg", kind: "linkedin" }],
  },
  {
    id: "basketball",
    title: "AI Basketball Analytics & Live Commentary",
    category: "Computer Vision",
    tags: ["cv", "dl"],
    accent: "var(--cyan)",
    description:
      "Fine-tuned YOLO to detect players, ball, rim and referees in broadcast footage, then added tracking, speed measurement and AI voice commentary.",
    highlights: ["ByteTrack + re-ID keep player IDs through occlusions", "Player speed measured with homography", "Game-event analysis with ElevenLabs voice commentary"],
    tech: ["Python", "YOLO", "ByteTrack", "Re-ID", "Homography", "ElevenLabs"],
    media: [{ type: "video", src: "/videos/basketball.mp4", poster: "/videos/basketball.jpg" }],
    links: [{ label: "LinkedIn demo", href: "https://lnkd.in/p/dqr4iejD", kind: "linkedin" }],
  },
  {
    id: "ppe",
    title: "Employee Safety (PPE) Detection",
    category: "Computer Vision",
    tags: ["cv", "dl"],
    accent: "#F2C811",
    description: "A custom seven-class YOLOv11 model that tracks workers across site video and flags missing safety equipment.",
    highlights: ["Custom 7-class detection model", "Per-worker tracking and violation flags"],
    tech: ["Python", "YOLOv11", "PyTorch", "OpenCV"],
    media: [{ type: "video", src: "/videos/ppe.mp4", poster: "/videos/ppe.jpg" }],
    links: [{ label: "LinkedIn demo", href: "https://lnkd.in/p/dCr5ckYA", kind: "linkedin" }],
  },
  {
    id: "counting",
    title: "Traffic Analysis & Conveyor Orange Counting",
    category: "Computer Vision",
    tags: ["cv"],
    accent: "#ff8a4c",
    description: "One tracking pipeline for two jobs: counting vehicles on a road and counting oranges moving along a conveyor belt.",
    highlights: ["Unique tracking IDs prevent double counting", "Counting-line logic for both scenes"],
    tech: ["Python", "YOLOv11", "OpenCV", "Object Tracking"],
    media: [
      { type: "video", src: "/videos/traffic.mp4", poster: "/videos/traffic.jpg", label: "Traffic" },
      { type: "video", src: "/videos/oranges.mp4", poster: "/videos/oranges.jpg", label: "Conveyor" },
    ],
    links: [
      { label: "Traffic demo", href: "https://lnkd.in/p/dBW8WNtr", kind: "linkedin" },
      { label: "Oranges demo", href: "https://lnkd.in/p/dvSYNGYv", kind: "linkedin" },
    ],
  },
  {
    id: "fitness",
    title: "AI Squat & Push-up Coach",
    category: "Computer Vision",
    tags: ["cv"],
    accent: "var(--purple)",
    description: "Counts exercise reps and scores form out of 100 from pose keypoints, running live on a laptop CPU.",
    highlights: ["Rep counting from pose keypoints", "Form score out of 100", "Runs in real time on CPU"],
    tech: ["Python", "MediaPipe Pose", "OpenCV"],
    media: [
      { type: "video", src: "/videos/squat.mp4", poster: "/videos/squat.jpg", label: "Squat" },
      { type: "video", src: "/videos/pushup.mp4", poster: "/videos/pushup.jpg", label: "Push-up" },
    ],
    links: [
      { label: "Squat demo", href: "https://lnkd.in/p/dgbDqVzX", kind: "linkedin" },
      { label: "Push-up demo", href: "https://lnkd.in/p/dnrCXewc", kind: "linkedin" },
    ],
  },
  {
    id: "iot",
    title: "IoT Forest Monitoring Network",
    category: "Final Year Project · IoT & Backend",
    tags: ["backend"],
    accent: "var(--green)",
    badge: "Final Year Project",
    description:
      "A low-cost forest monitoring network for early fire-risk awareness. Sensor nodes send temperature, humidity and CO₂ readings over 433 MHz radio to a Raspberry Pi gateway, which stores them in PostgreSQL behind a Flask REST API and dashboard.",
    highlights: [
      "Arduino nodes with DHT11 and MQ135 sensors and multi-hop relaying",
      "Raspberry Pi gateway writes readings to PostgreSQL",
      "Flask REST API for live data, history, alerts and users",
      "Dashboard with visual and audible fire-risk alerts",
    ],
    tech: ["Python", "C++", "Raspberry Pi", "Arduino", "Flask", "PostgreSQL"],
    media: [
      { type: "video", src: "/videos/iot.mp4", poster: "/videos/iot.jpg" },
    ],
    links: [{ label: "GitHub", href: "https://github.com/nimrafaryal/iot-based-forest-network", kind: "github" }],
  },
  {
    id: "action-gate",
    title: "ACTION GATE: AI Agent Security Gateway",
    category: "Hackathon · Backend & AI Agents",
    tags: ["hackathon", "backend", "nlp"],
    accent: "var(--cyan)",
    badge: "AMD Hackathon ACT III",
    description:
      "A security layer between an AI agent and the business tools it can use. Every proposed plan is checked against policies and gets one decision: allow, require human approval, or block.",
    highlights: [
      "Policy enforcement and sequence risk analysis",
      "Consequence replay simulates a plan in a rolled-back transaction and suggests safer alternatives",
      "Audit log and Streamlit security dashboard",
      "52 automated tests; 16/16 red-team scenarios detected",
    ],
    tech: ["Python", "FastAPI", "DeepSeek V3", "AMD Developer Cloud", "SQLite", "Streamlit", "Pytest"],
    media: [{ type: "flow", steps: ["Agent proposes plan", "Policy check", "Sequence risk", "Consequence replay", "ALLOW · APPROVE · BLOCK", "Audit log"] }],
    links: [
      { label: "GitHub", href: "https://github.com/nimrafaryal/action-gate", kind: "github" },
      { label: "Live demo", href: "https://action-gate-veylora.streamlit.app/", kind: "demo" },
      { label: "lablab page", href: "https://lablab.build/ai-hackathons/amd-developer-hackathon-act-iii/veylora/action-gate-ai-agent-security", kind: "page" },
    ],
  },
  {
    id: "insurance",
    title: "Multimodal Insurance Claims Processor",
    category: "Hackathon · AI & Vector Search",
    tags: ["hackathon", "nlp"],
    accent: "var(--purple)",
    badge: "AI Genesis",
    description:
      "Team project (Stellar Engineers, 4 members). Uses Qdrant vector search across claim text, images, audio and video to find similar past claims and support fraud checks, settlement estimates and claim routing.",
    highlights: [
      "Vector search over historical claims in Qdrant",
      "Similar past claims ranked to explain each recommendation",
      "Streamlit interface for claim review",
    ],
    tech: ["Python", "Qdrant", "BERT", "OpenAI", "Streamlit"],
    media: [{ type: "flow", steps: ["New claim (text, image, audio, video)", "Embeddings", "Qdrant similarity search", "Ranked similar claims", "Recommendation"] }],
    links: [
      { label: "Live demo", href: "https://aigenesis-43f2jpgiymoaudrfos7vkx.streamlit.app/", kind: "demo" },
      { label: "lablab page", href: "https://lablab.build/ai-hackathons/ai-genesis/stellar-engineers/ai-powered-insurance-claims-processor", kind: "page" },
    ],
  },
];

/* ---------------- Experience & achievements ---------------- */

export const hackathons = [
  {
    id: "amd",
    branch: "feat/ai-agent-security",
    title: "AMD Developer Hackathon: ACT III",
    org: "lablab.ai · Team Veylora",
    period: "Oct 12 – 18, 2026",
    project: "ACTION GATE: AI Agent Security Gateway",
    points: [
      "Built a security gateway that decides whether an AI agent's actions are allowed, need approval or are blocked",
      "FastAPI backend with DeepSeek V3 on AMD Developer Cloud, Streamlit dashboard, 52 automated tests",
    ],
    tags: ["FastAPI", "DeepSeek V3", "AMD Developer Cloud", "Pytest"],
    color: "var(--cyan)",
    icon: "⚡",
    certificate: "/certificates/AMD-Hackathon-ACT-III-lablab.pdf",
    link: "https://lablab.build/ai-hackathons/amd-developer-hackathon-act-iii/veylora/action-gate-ai-agent-security",
  },
  {
    id: "genesis",
    branch: "feat/vector-search",
    title: "AI Genesis Hackathon",
    org: "lablab.ai · Team Stellar Engineers",
    period: "Nov 14 – 19, 2025",
    project: "Multimodal Insurance Claims Processor",
    points: [
      "Team project using Qdrant vector search to find similar past insurance claims across text, images, audio and video",
      "Built with Qdrant, BERT, OpenAI and Streamlit",
    ],
    tags: ["Qdrant", "BERT", "OpenAI", "Streamlit"],
    color: "var(--purple)",
    icon: "🧬",
    certificate: "/certificates/AI-Genesis-lablab.pdf",
    link: "https://lablab.build/ai-hackathons/ai-genesis/stellar-engineers/ai-powered-insurance-claims-processor",
  },
];

export const achievements = [
  { icon: "🥇", title: "Merit Scholarship", desc: "1st position in the CS-22 batch in 4th semester, SGPA 3.95", color: "var(--cyan)" },
  { icon: "💻", title: "Prime Minister Laptop Scheme", desc: "Awarded a laptop under the PM Laptop Scheme", color: "var(--blue-bright)" },
  { icon: "🏆", title: "5th Position, Logic and Code Clash", desc: "Round II, A&D Tech Innovations", color: "var(--green)" },
  { icon: "🌱", title: "Aspire Leaders Program", desc: "Cohort 4, 2026", color: "var(--purple)" },
  { icon: "🏀", title: "UET Women's Basketball Team", desc: "Team member, 2023 – 2025", color: "#ff8a4c" },
  { icon: "🏸", title: "Bronze Medal, Badminton Singles", desc: "UET Taxila", color: "#fbbf24" },
];

export const education = {
  degree: "BS Computer Science",
  institution: "University of Engineering and Technology (UET), Taxila",
  period: "Sep 2022 – Jul 2026",
  cgpa: "3.69 / 4.00",
  honor: "Merit Scholarship for 1st position in 4th semester (SGPA 3.95)",
  coursework: ["Artificial Intelligence", "Natural Language Processing", "Big Data Analytics", "Databases", "Artificial Neural Networks"],
  fyp: "Final Year Project: IoT Forest Monitoring Network",
};

export const certifications = [
  { title: "Introduction to Generative AI", issuer: "Google Cloud", year: "", icon: "✨", color: "var(--blue-bright)", href: "" },
  { title: "Introduction to SQL & Intermediate SQL", issuer: "DataCamp", year: "", icon: "🗄", color: "var(--green)", href: "" },
  { title: "AMD Developer Hackathon: ACT III, Certificate of Completion", issuer: "lablab.ai", year: "2026", icon: "⚡", color: "var(--cyan)", href: "/certificates/AMD-Hackathon-ACT-III-lablab.pdf" },
  { title: "AI Genesis Hackathon, Certificate of Completion", issuer: "lablab.ai", year: "2025", icon: "🧬", color: "var(--purple)", href: "/certificates/AI-Genesis-lablab.pdf" },
];
