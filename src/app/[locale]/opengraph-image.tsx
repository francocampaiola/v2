import { ImageResponse } from "next/og";
import { profile } from "@/content/data";
import { locales, type Locale } from "@/lib/i18n";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = profile.name;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function OpengraphImage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = (await params).locale as Locale;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#141210",
          color: "#f3f1ee",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 28, color: "#a8a29e" }}>
          <div style={{ width: 14, height: 14, borderRadius: 999, background: "#f0703a" }} />
          {profile.name} · {profile.role[locale]}
        </div>
        <div style={{ fontSize: 60, lineHeight: 1.15, letterSpacing: -1.5, maxWidth: 980 }}>
          {profile.headline[locale]}
        </div>
        <div style={{ fontSize: 24, color: "#78716c" }}>francocampaiola.com</div>
      </div>
    ),
    size,
  );
}
