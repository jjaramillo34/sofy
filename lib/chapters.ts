export const CHAPTERS = [
  { id: "cover", title: "Portada", kicker: "El gran revelado" },
  { id: "prologue", title: "Prólogo", kicker: "Érase una noche estrellada" },
  { id: "papa", title: "Papá y Mamá", kicker: "Una carta de tu papá" },
  { id: "atelier", title: "Atelier", kicker: "La galería de Sofia" },
  { id: "dedication", title: "Carta", kicker: "Una carta de casa" },
  { id: "nombre", title: "Nombre", kicker: "Sofía Yaneli" },
  { id: "guestbook", title: "Cielo", kicker: "Deseos y estrellas" },
] as const;

export type ChapterId = (typeof CHAPTERS)[number]["id"];
export type ChapterIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6;
