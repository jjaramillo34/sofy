export type Wish = {
  id: string;
  from: string;
  message: string;
  createdAt: string;
};

export const seedWishes: Wish[] = [
  {
    id: "wish-mama",
    from: "Mamá",
    message:
      "Sofia Yaneli, verte mezclar colores es como ver nacer una constelación. Notas el mundo de un modo que nos hace mirar dos veces. Feliz 14.º cumpleaños, mi estrella.",
    createdAt: "2026-09-17",
  },
  {
    id: "wish-papa",
    from: "Papá",
    message:
      "Pintas con valentía. Eres valiente para hacer que un cielo gire, que una flor brille y que una tarde callada se sienta como una obra maestra. Estoy muy orgulloso de ser tu papá.",
    createdAt: "2026-09-17",
  },
  {
    id: "wish-abuela",
    from: "Abuela",
    message:
      "Que tu año sea tan dorado como las lunas que dibujas y tan tierno como la forma en que compartes tu arte. Te quiero, Sofia.",
    createdAt: "2026-09-16",
  },
  {
    id: "wish-family",
    from: "Tía y tío",
    message:
      "Sigue llenando el mundo con tus colores. El cielo de la noche brilla más porque tú estás en él.",
    createdAt: "2026-09-16",
  },
];

export const WISHES_STORAGE_KEY = "sofy-birthday-wishes";
export const STARS_STORAGE_KEY = "sofy-birthday-stars";
