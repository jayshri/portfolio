import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-xi-mauve-adp10owkww.vercel.app/"),
  title: "Jayshri Portfolio",
  description:
    "Jayshri Aher — Software Engineer. Projects built with React, Next.js, TypeScript, Tailwind CSS, and Java.",
  openGraph: {
    title: "Jayshri Aher | Portfolio",
    description:
      "Software Engineer — React, Next.js, TypeScript, Tailwind CSS, Java. Projects, demos, and source code.",
    url: "https://portfolio-xi-mauve-adp10owkww.vercel.app/",
    siteName: "Jayshri Portfolio",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Jayshri Aher Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jayshri Aher | Portfolio",
    description:
      "Software Engineer — React, Next.js, TypeScript, Tailwind CSS, Java. Projects, demos, and source code.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}