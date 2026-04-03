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

export const metadata: Metadata = {
  title: "PicturePerfectWorld — Coming Summer 2026",
  description:
    "Turn real rooms into playful worlds. A kid-friendly creative game inspired by the joy of open-ended play.",
  openGraph: {
    title: "PicturePerfectWorld",
    description: "Launching Summer 2026",
    siteName: "PicturePerfectWorld",
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
