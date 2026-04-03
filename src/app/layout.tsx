import type { Metadata, Viewport } from "next";
import { Fredoka } from "next/font/google";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#fff8f3",
};

const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-landing",
  display: "swap",
});

/** Canonical URL for OG / iMessage / social previews (override with NEXT_PUBLIC_SITE_URL). */
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "https://picture-perfect-world-website.vercel.app");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "PicturePerfectWorld — Coming Summer 2026",
  description:
    "Turn real rooms into playful worlds. A kid-friendly creative game inspired by the joy of open-ended play.",
  openGraph: {
    title: "PicturePerfectWorld",
    description:
      "Launching Summer 2026. Playful worlds from real rooms — a cozy game for curious kids and peaceful parents.",
    siteName: "PicturePerfectWorld",
    type: "website",
    locale: "en_US",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "PicturePerfectWorld",
    description:
      "Launching Summer 2026. Playful worlds from real rooms.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fredoka.variable} min-h-dvh antialiased [font-family:var(--font-landing),system-ui,sans-serif] [padding-bottom:env(safe-area-inset-bottom,0px)]`}
      >
        {children}
      </body>
    </html>
  );
}
