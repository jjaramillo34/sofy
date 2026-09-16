import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0B132B 0%, #1E3A8A 100%)",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 88,
            height: 88,
            borderRadius: 999,
            background: "#FEF08A",
            right: 36,
            top: 34,
            boxShadow: "0 0 36px rgba(252, 211, 77, 0.7)",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 74,
            height: 74,
            borderRadius: 999,
            background: "#0B132B",
            right: 62,
            top: 34,
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 14,
            height: 14,
            borderRadius: 999,
            background: "#FCD34D",
            left: 42,
            bottom: 48,
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 8,
            height: 8,
            borderRadius: 999,
            background: "#FEF08A",
            left: 58,
            top: 52,
          }}
        />
      </div>
    ),
    { ...size },
  );
}
