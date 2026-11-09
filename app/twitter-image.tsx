import { ImageResponse } from "next/og";
import { SITE } from "@/app/data/site";

export const alt = `${SITE.name} — Belajar tanpa batas, tumbuh dengan arah.`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#141210",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          padding: "80px",
        }}
      >
        <div
          style={{
            fontSize: 104,
            fontWeight: 700,
            color: "#f4efe4",
            fontFamily: "Georgia, serif",
            textAlign: "center",
            maxWidth: "850px",
          }}
        >
          {SITE.name}
        </div>
        <div
          style={{
            fontSize: 46,
            color: "#d94f2b",
            fontFamily: "Georgia, serif",
            fontStyle: "italic",
            marginTop: 28,
            textAlign: "center",
            maxWidth: "900px",
          }}
        >
          Belajar tanpa batas, tumbuh dengan arah.
        </div>
      </div>
    ),
    {
      width: size.width,
      height: size.height,
    }
  );
}
