export type Artwork = {
  id: string;
  title: string;
  quote: string;
  date: string;
  medium: string;
  /** Swap this path with a photo of Sofia's painting. */
  image: string;
  /** Temporary Unsplash stand-in until the local file is added. */
  placeholder: string;
};

export const artworks: Artwork[] = [
  {
    id: "1",
    title: "El jardín de la noche",
    quote: "Quería que las flores brillaran como si le susurraran secretos a la luna.",
    date: "Primavera 2025",
    medium: "Acrílico sobre lienzo",
    image: "/images/sofia-art-1.jpg",
    placeholder:
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "2",
    title: "Girasoles para Papá",
    quote: "El amarillo es un abrazo. Pinté un campo entero de abrazos.",
    date: "Verano 2025",
    medium: "Pastel al óleo sobre papel",
    image: "/images/sofia-art-2.jpg",
    placeholder:
      "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "3",
    title: "Río en espiral",
    quote: "Los ríos no van en línea recta. Los sentimientos tampoco.",
    date: "Otoño 2025",
    medium: "Acuarela",
    image: "/images/sofia-art-3.jpg",
    placeholder:
      "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "4",
    title: "Mi cielo azul",
    quote: "El azul puede ser callado y ruidoso a la vez. Ese es mi azul favorito.",
    date: "Invierno 2026",
    medium: "Técnica mixta",
    image: "/images/sofia-art-4.jpg",
    placeholder:
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "5",
    title: "La luna de oro",
    quote: "Si viviera en la luna, pintaría la Tierra para que no se sintiera sola.",
    date: "Primavera 2026",
    medium: "Acrílico sobre lienzo",
    image: "/images/sofia-art-5.jpg",
    placeholder:
      "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "6",
    title: "Ciprés danzante",
    quote: "Este árbol se estira hacia una estrella que ya le pertenece.",
    date: "Verano 2026",
    medium: "Témpera sobre tabla",
    image: "/images/sofia-art-6.jpg",
    placeholder:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1400&q=80",
  },
];

export function artworkSrc(artwork: Artwork) {
  return artwork.placeholder;
}
