import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt =
  "Kai Tranchant — Hybrid Comp Prep & College Sport S&C. Peak when it counts.";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

async function loadFont(slug: string, weight: number) {
  const res = await fetch(
    `https://cdn.jsdelivr.net/fontsource/fonts/${slug}@5.2.5/latin-${weight}-normal.ttf`,
  );
  if (!res.ok) {
    throw new Error(`Failed to load font ${slug} ${weight}: ${res.status}`);
  }
  return res.arrayBuffer();
}

export default async function Image() {
  const [archivoExtraBold, manropeSemiBold, photoBuffer] = await Promise.all([
    loadFont("archivo", 800),
    loadFont("manrope", 600),
    readFile(join(process.cwd(), "public/images/HeroSled2.JPEG")),
  ]);

  const photoSrc = `data:image/jpeg;base64,${photoBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#111110",
          color: "#f3f1ed",
          fontFamily: "Manrope",
        }}
      >
        {/* Copy panel */}
        <div
          style={{
            width: "56%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "64px 56px 56px 64px",
            background:
              "linear-gradient(135deg, #191816 0%, #111110 55%, #0d0c0b 100%)",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 36,
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 3,
                  background: "#ff5c1f",
                }}
              />
              <div
                style={{
                  fontSize: 22,
                  fontWeight: 600,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#a39d93",
                }}
              >
                Strength &amp; Conditioning
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontFamily: "Archivo",
                fontWeight: 800,
                fontSize: 64,
                lineHeight: 1.02,
                letterSpacing: "-0.02em",
                textTransform: "uppercase",
              }}
            >
              <div>Kai</div>
              <div>Tranchant</div>
            </div>

            <div
              style={{
                display: "flex",
                marginTop: 28,
                fontFamily: "Archivo",
                fontWeight: 800,
                fontSize: 40,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                color: "#ff5c1f",
              }}
            >
              Peak when it counts.
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <div
              style={{
                fontSize: 24,
                fontWeight: 600,
                color: "#f3f1ed",
                lineHeight: 1.35,
              }}
            >
              Hybrid comp prep · College sport S&amp;C
            </div>
            <div
              style={{
                fontSize: 20,
                fontWeight: 600,
                color: "#a39d93",
              }}
            >
              Twin Tiers · Online · kaitranchant.com
            </div>
          </div>
        </div>

        {/* Photo panel */}
        <div
          style={{
            width: "44%",
            height: "100%",
            display: "flex",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <img
            src={photoSrc}
            alt=""
            width={528}
            height={630}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center 18%",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: 120,
              height: "100%",
              background:
                "linear-gradient(90deg, #111110 0%, rgba(17,17,16,0) 100%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              height: 8,
              background: "#ff5c1f",
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Archivo",
          data: archivoExtraBold,
          style: "normal",
          weight: 800,
        },
        {
          name: "Manrope",
          data: manropeSemiBold,
          style: "normal",
          weight: 600,
        },
      ],
    },
  );
}
