"use client";

import type { ReactNode } from "react";
import { TiltFx } from "@once-ui-system/core";
import { useMediaQuery } from "@/lib/use-media-query";

type HoverTiltProps = {
  children: ReactNode;
  intensity?: number;
};

export function HoverTilt({ children, intensity = 0.7 }: HoverTiltProps) {
  const canHover = useMediaQuery("(hover: hover) and (pointer: fine)");

  if (!canHover) {
    return children;
  }

  return (
    <TiltFx intensity={intensity} fillWidth>
      {children}
    </TiltFx>
  );
}
