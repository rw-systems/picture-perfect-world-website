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

/**
 * Canonical host for og:url, og:image, Twitter cards, and iMessage previews.
 * Do not use VERCEL_URL here — it is the per-deployment hostname and breaks previews.
 * Override for previews/staging: NEXT_PUBLIC_SITE_URL=https://staging.example.com
 */
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://pictureperfectworld.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
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
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "PicturePerfectWorld — Launching Summer 2026",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PicturePerfectWorld",
    description:
      "Launching Summer 2026. Playful worlds from real rooms.",
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
      <body
        className={`${fredoka.variable} min-h-dvh antialiased [font-family:var(--font-landing),system-ui,sans-serif] [padding-bottom:env(safe-area-inset-bottom,0px)]`}
      >
        {children}
      </body>
    </html>
  );
}
