import { ImageResponse } from "next/og";
import { OgShareCard } from "@/lib/og-card";

export const alt = "PicturePerfectWorld — Launching Summer 2026";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(<OgShareCard />, { ...size });
}
