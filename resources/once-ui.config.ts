import { Playfair_Display, Source_Sans_3, Geist_Mono } from "next/font/google";

const heading = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const body = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const label = Source_Sans_3({
  variable: "--font-label",
  subsets: ["latin"],
  display: "swap",
});

const code = Geist_Mono({
  variable: "--font-code",
  subsets: ["latin"],
  display: "swap",
});

export const fonts = {
  heading,
  body,
  label,
  code,
};

export const style = {
  theme: "dark" as const,
  neutral: "slate" as const,
  brand: "yellow" as const,
  accent: "yellow" as const,
  solid: "color" as const,
  solidStyle: "flat" as const,
  border: "playful" as const,
  surface: "translucent" as const,
  transition: "all" as const,
  scaling: "100" as const,
};

export const dataStyle = {
  variant: "gradient" as const,
  mode: "categorical" as const,
  height: 24,
  axis: {
    stroke: "var(--neutral-alpha-weak)",
  },
  tick: {
    fill: "var(--neutral-on-background-weak)",
    fontSize: 11,
    line: false,
  },
};
