import { siteConfig } from "@/lib/site";

export const shareImageSize = {
  width: 1200,
  height: 630,
};

const stars = [
  { left: 70, top: 70, size: 8 },
  { left: 160, top: 140, size: 5 },
  { left: 280, top: 60, size: 6 },
  { left: 420, top: 110, size: 4 },
  { left: 90, top: 240, size: 5 },
  { left: 520, top: 48, size: 7 },
  { left: 980, top: 420, size: 6 },
  { left: 1080, top: 520, size: 5 },
  { left: 860, top: 560, size: 4 },
];

export function ShareImage() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(135deg, #0B132B 0%, #1C2541 52%, #1E3A8A 100%)",
        color: "#F8FAFC",
        fontFamily: "Georgia, 'Times New Roman', serif",
      }}
    >
      {stars.map((star) => (
        <div
          key={`${star.left}-${star.top}`}
          style={{
            position: "absolute",
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            borderRadius: 999,
            background: "#FCD34D",
            boxShadow: "0 0 12px rgba(252, 211, 77, 0.85)",
          }}
        />
      ))}
      <div
        style={{
          position: "absolute",
          right: 90,
          top: 70,
          width: 220,
          height: 220,
          borderRadius: 999,
          background:
            "radial-gradient(circle at 35% 35%, #FEF08A 0%, #FCD34D 38%, rgba(245, 158, 11, 0.15) 72%, rgba(11, 19, 43, 0) 100%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          right: 148,
          top: 78,
          width: 170,
          height: 170,
          borderRadius: 999,
          background: "#0B132B",
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px 80px",
          width: "78%",
          height: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#FCD34D",
            marginBottom: 28,
          }}
        >
          14 años · 17 de septiembre
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 64,
            lineHeight: 1.1,
            fontWeight: 700,
            color: "#F8FAFC",
            marginBottom: 20,
          }}
        >
          {siteConfig.shortTitle}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "#FEF08A",
            marginBottom: 24,
          }}
        >
          {siteConfig.name}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 24,
            lineHeight: 1.4,
            color: "#94A3B8",
            maxWidth: 720,
          }}
        >
          Una obra maestra estrellada, inspirada en Van Gogh.
        </div>
      </div>
    </div>
  );
}
