import type { Metadata } from "next";
import "./globals.css";

const SITE = "https://nimrafaryal.software";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: "Nimra Faryal | AI / ML Engineer",
  description:
    "Nimra Faryal is an AI / ML Engineer and Computer Science graduate from UET Taxila, Pakistan. Portfolio of machine learning, deep learning, computer vision, NLP and LLM projects, backend APIs and IoT.",
  keywords: [
    "Nimra Faryal",
    "Nimra Faryal portfolio",
    "Nimra Faryal UET Taxila",
    "AI / ML Engineer",
    "Machine Learning Engineer",
    "Computer Vision Engineer",
    "Deep Learning",
    "NLP",
    "LLM",
    "YOLO11",
    "UET Taxila",
  ],
  authors: [{ name: "Nimra Faryal", url: SITE }],
  creator: "Nimra Faryal",
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Nimra Faryal | AI / ML Engineer",
    description:
      "Machine learning, deep learning, computer vision, LLM applications, backend and IoT projects by Nimra Faryal, CS graduate from UET Taxila.",
    url: SITE,
    siteName: "Nimra Faryal",
    type: "profile",
    images: [{ url: "/images/nimra.jpg", width: 640, height: 640, alt: "Nimra Faryal" }],
  },
  twitter: {
    card: "summary",
    title: "Nimra Faryal | AI / ML Engineer",
    description: "AI / ML Engineer · UET Taxila · ML, computer vision, LLM apps and IoT.",
    images: ["/images/nimra.jpg"],
  },
};

export const viewport = { width: "device-width", initialScale: 1, viewportFit: "cover" as const };

// Structured data so search engines know this site is about the person Nimra Faryal.
const person = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Nimra Faryal",
  url: SITE,
  image: `${SITE}/images/nimra.jpg`,
  jobTitle: "AI / ML Engineer",
  email: "mailto:nimrafaryal2019@gmail.com",
  address: { "@type": "PostalAddress", addressCountry: "PK" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "University of Engineering and Technology, Taxila" },
  knowsAbout: ["Machine Learning", "Deep Learning", "Computer Vision", "Natural Language Processing", "Large Language Models", "IoT"],
  sameAs: ["https://github.com/nimrafaryal", "https://www.linkedin.com/in/nimra-faryal-47494225b/"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#0a0816" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }} />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
