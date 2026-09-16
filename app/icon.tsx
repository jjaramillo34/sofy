import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0B132B",
          borderRadius: 8,
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 16,
            height: 16,
            borderRadius: 999,
            background: "#FEF08A",
            right: 6,
            top: 6,
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 13,
            height: 13,
            borderRadius: 999,
            background: "#0B132B",
            right: 11,
            top: 6,
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 4,
            height: 4,
            borderRadius: 999,
            background: "#FCD34D",
            left: 7,
            bottom: 8,
          }}
        />
      </div>
    ),
    { ...size },
  );
}
