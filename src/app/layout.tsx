import type { Metadata } from "next";
import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  axes: ["opsz"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Binyam Tesfay — Software Engineer & Full-Stack Developer",
  description:
    "Portfolio of Binyam Tesfay, a Software Engineering graduate from Mekelle University. I build full-stack systems for education and finance — from mentorship platforms to enterprise budgeting tools.",
  keywords: [
    "Binyam Tesfay",
    "Software Engineer",
    "Full-Stack Developer",
    "Python",
    "Django",
    "Next.js",
    "React",
    "FastAPI",
    "Flutter",
    "Mekelle University",
  ],
  authors: [{ name: "Binyam Tesfay", url: "https://github.com/binyamtesfayy" }],
  creator: "Binyam Tesfay",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://binyamtesfayy.github.io",
    title: "Binyam Tesfay — Software Engineer & Full-Stack Developer",
    description:
      "I build full-stack systems for education and finance — from mentorship platforms to enterprise budgeting tools.",
    siteName: "Binyam Tesfay Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Binyam Tesfay — Software Engineer",
    description:
      "I build full-stack systems for education and finance — from mentorship platforms to enterprise budgeting tools.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${ibmPlexMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
