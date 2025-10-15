import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Agent — Empower Intelligence",
  description: "Next-generation AI Agent platform with adaptive intelligence.",
  openGraph: {
    title: "AI Agent — Empower Intelligence",
    description: "Modern AI landing with neon aesthetics and smooth motion.",
    type: "website",
    url: "https://your-domain.com",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-bgDark text-white antialiased">{children}</body>
    </html>
  );
}