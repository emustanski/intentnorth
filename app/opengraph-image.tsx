import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = siteConfig.name;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#0B1220",
          color: "#F7F8FC",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <svg width="48" height="48" viewBox="0 0 32 32">
            <circle cx="16" cy="16" r="15" fill="none" stroke="#F7F8FC" strokeOpacity="0.3" strokeWidth="1.5" />
            <path d="M16 5 L21 22 L16 18.5 L11 22 Z" fill="#B9F227" />
          </svg>
          <div style={{ fontSize: 32, fontWeight: 700 }}>{siteConfig.name}</div>
        </div>
        <div style={{ marginTop: 48, fontSize: 56, fontWeight: 700, maxWidth: 900, lineHeight: 1.15 }}>
          Turn audience intent into measurable growth.
        </div>
        <div style={{ marginTop: 32, fontSize: 28, color: "#A5A0FF" }}>{siteConfig.tagline}</div>
      </div>
    ),
    { ...size },
  );
}
