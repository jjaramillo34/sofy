export const siteConfig = {
  title: "Una obra maestra estrellada — Feliz 14.º cumpleaños, Sofia Yaneli",
  shortTitle: "Feliz 14.º cumpleaños, Sofia Yaneli",
  description:
    "Un cuento digital para el 14.º cumpleaños de Sofia Yaneli Jaramillo Bustos, inspirado en La noche estrellada y en su espíritu artístico.",
  name: "Sofia Yaneli Jaramillo Bustos",
  locale: "es_ES",
};

export function getSiteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }

  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return "http://localhost:3000";
}
