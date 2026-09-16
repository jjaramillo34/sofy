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
    title: "Amor Eterno",
    quote: "Dos Calaveras enamoradas y un dibujo de un corazón",
    date: "Primavera 2025",
    medium: "Marcadores Acrílicos",
    image: "/images/sofia-art-1.jpg",
    //placeholder:
      //"https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=1400&q=80",
    placeholder: "/images/sofia-art-1.jpg",
  },
  {
    id: "2",
    title: "Mi representación de la noche estrellada",
    quote: "La noche estrellada es mi representación de la noche estrellada.",
    date: "Verano 2025",
    medium: "Acuarela",
    image: "/images/sofia-art-2.jpg",
    //placeholder:
      //"https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=1400&q=80",
    placeholder: "/images/sofia-art-2.jpg",
  },
  {
    id: "3",
    title: "Un regalo para mi papá",
    quote: "Un regalo para mi papá. Vikingos y muchos mas objectos.",
    date: "Verano 2026",
    medium: "Acuarela",
    image: "/images/sofia-art-3.jpg",
    //placeholder:
      //"https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=1400&q=80",
    placeholder: "/images/sofia-art-3.jpg",
  },
  {
    id: "4",
    title: "Jugando con cafe. Un regalo para Ondel",
    quote: "Jugando con cafe. Un regalo para Ondel. Un regalo para Ondel.",
    date: "Verano 2026",
    medium: "Marcadores Acrílicos",
    image: "/images/sofia-art-4.jpg",
    //placeholder:
      //"https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=1400&q=80",
    placeholder: "/images/sofia-art-4.jpg",
  },
  {
    id: "5",
    title: "Jugando con cafe. Un regalo para Danielle",
    quote: "Jugando con cafe. Un regalo para Danielle. Un regalo para Danielle. Un regalo para Danielle.",
    date: "Verano 2026",
    medium: "Marcadores Acrílicos",
    image: "/images/sofia-art-5.jpg",
    //placeholder:
      //"https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&w=1400&q=80",
    placeholder: "/images/sofia-art-5.jpg",
  },
  {
    id: "6",
    title: "Jugando con cafe. Un regalo para Lina",
    quote: "Jugando con cafe. Un regalo para Lina. Un regalo para Lina. Un regalo para Lina.",
    date: "Verano 2026",
    medium: "Marcadores Acrílicos",
    image: "/images/sofia-art-6.jpg",
    //placeholder:
      //"https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1400&q=80",
    placeholder: "/images/sofia-art-6.jpg",
  },
];

export function artworkSrc(artwork: Artwork) {
  return artwork.placeholder;
}
