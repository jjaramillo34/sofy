import "@once-ui-system/core/css/styles.css";
import "@once-ui-system/core/css/tokens.css";
import "@/resources/custom.css";
import "./globals.css";

import classNames from "classnames";
import type { Metadata } from "next";
import { Column, ThemeInit } from "@once-ui-system/core";
import { Providers } from "@/components/Providers";
import { dataStyle, fonts, style } from "@/resources/once-ui.config";

export const metadata: Metadata = {
  title: "Una obra maestra estrellada — Feliz 14.º cumpleaños, Sofia Yaneli",
  description:
    "Un cuento digital para el 14.º cumpleaños de Sofia Yaneli Jaramillo Bustos, inspirado en La noche estrellada y en su espíritu artístico.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      data-theme={style.theme}
      data-neutral={style.neutral}
      data-brand={style.brand}
      data-accent={style.accent}
      data-solid={style.solid}
      data-solid-style={style.solidStyle}
      data-border={style.border}
      data-surface={style.surface}
      data-transition={style.transition}
      data-scaling={style.scaling}
      className={classNames(
        fonts.heading.variable,
        fonts.body.variable,
        fonts.label.variable,
        fonts.code.variable,
        "h-full",
      )}
    >
      <head>
        <ThemeInit
          config={{
            theme: style.theme,
            brand: style.brand,
            accent: style.accent,
            neutral: style.neutral,
            solid: style.solid,
            "solid-style": style.solidStyle,
            border: style.border,
            surface: style.surface,
            transition: style.transition,
            scaling: style.scaling,
            "viz-style": dataStyle.variant,
          }}
        />
      </head>
      <body className="min-h-full antialiased" suppressHydrationWarning>
        <Providers>
          <Column as="main" fillWidth style={{ minHeight: "100dvh" }}>
            {children}
          </Column>
        </Providers>
      </body>
    </html>
  );
}
