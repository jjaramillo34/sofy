# A Starry Masterpiece

Interactive birthday storybook for **Sofia Yaneli Jaramillo Bustos**, painted in the spirit of Van Gogh’s *The Starry Night*.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Swap in Sofia’s paintings

Gallery images currently use Unsplash placeholders defined in `lib/artworks.ts`.

1. Add photos to `public/images/` as `sofia-art-1.jpg` through `sofia-art-6.jpg`.
2. In `lib/artworks.ts`, change `artworkSrc()` to return `artwork.image` instead of `artwork.placeholder`.
3. Update each painting’s title, quote, date, and medium.

## Chapters

1. Cover — glowing title and Open Book
2. Prologue — the story begins
3. Sofia’s Atelier — tilt cards and lightbox
4. Dedication — letter from Mamá & Papá
5. Starry Sky — tap to drop stars and leave wishes (saved in the browser)
