import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";
import { ShareImage, shareImageSize } from "@/lib/share-image";

export const alt = siteConfig.title;
export const size = shareImageSize;
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(<ShareImage />, { ...size });
}
