import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nimra Faryal | AI / ML Engineer",
  description:
    "Portfolio of Nimra Faryal, AI / ML Engineer and Computer Science graduate from UET Taxila. Projects in machine learning, deep learning, computer vision, NLP and LLM applications, backend APIs and IoT.",
  keywords: [
    "Nimra Faryal",
    "AI Engineer",
    "Machine Learning",
    "Deep Learning",
    "NLP",
    "LLM",
    "Computer Vision",
    "Object Detection",
    "Object Tracking",
    "YOLO11",
    "ByteTrack",
    "Pose Estimation",
    "Drone AI",
    "Edge AI",
    "UET Taxila",
    "Portfolio",
  ],
  authors: [{ name: "Nimra Faryal" }],
  icons: { icon: "/images/nimra.jpg" },
  openGraph: {
    title: "Nimra Faryal | AI / ML Engineer",
    description:
      "Machine learning, deep learning, computer vision, LLM applications, backend and IoT projects. CS graduate from UET Taxila.",
    type: "website",
  },
};

export const viewport = { width: "device-width", initialScale: 1, viewportFit: "cover" as const };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#0a0816" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
