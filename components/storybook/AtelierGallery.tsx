"use client";

import { useState } from "react";
import {
  Badge,
  Card,
  Column,
  Dialog,
  Grid,
  Heading,
  Media,
  RevealFx,
  Row,
  Text,
  TiltFx,
} from "@once-ui-system/core";
import { artworks, artworkSrc, type Artwork } from "@/lib/artworks";

export function AtelierGallery() {
  const [selected, setSelected] = useState<Artwork | null>(null);

  return (
    <Column fillWidth gap="24" paddingY="16">
      <Column gap="8">
        <Badge id="atelier-badge" title="El atelier de Sofia" icon="eyeDropper" arrow={false} />
        <Heading as="h2" variant="display-strong-s" className="font-serif title-glow">
          Pinturas de un corazón estrellado
        </Heading>
        <Text variant="body-default-m" onBackground="neutral-weak" wrap="balance">
          Cada marco espera el lienzo verdadero de Sofia. Mientras tanto, estos recuerdos
          mantienen la galería encendida: toca una obra para abrirla.
        </Text>
      </Column>
      <Grid columns="3" m={{ columns: "2" }} s={{ columns: "1" }} gap="20">
        {artworks.map((artwork, index) => (
          <RevealFx key={artwork.id} delay={index * 0.08} translateY={1} speed="medium">
            <TiltFx intensity={0.7} fillWidth>
              <Card
                fillWidth
                padding="12"
                background="surface"
                border="brand-alpha-weak"
                radius="l"
                onClick={() => setSelected(artwork)}
                className="gold-foil"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(28, 37, 65, 0.88) 0%, rgba(11, 19, 43, 0.94) 100%)",
                }}
              >
                <Column fillWidth gap="12">
                  <Column
                    overflow="hidden"
                    radius="m"
                    style={{
                      border: "6px solid rgba(245, 158, 11, 0.55)",
                      boxShadow: "inset 0 0 0 1px rgba(254, 240, 138, 0.35)",
                    }}
                  >
                    <Media
                      src={artworkSrc(artwork)}
                      alt={artwork.title}
                      aspectRatio="4 / 5"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      radius="none"
                    />
                  </Column>
                  <Column gap="8" paddingX="8" paddingBottom="8">
                    <Heading as="h3" variant="heading-strong-s" className="font-serif">
                      {artwork.title}
                    </Heading>
                    <Text variant="body-default-s" onBackground="neutral-weak">
                      “{artwork.quote}”
                    </Text>
                    <Row gap="8" wrap>
                      <Badge
                        id={`medium-${artwork.id}`}
                        title={artwork.medium}
                        arrow={false}
                        effect={false}
                      />
                      <Badge
                        id={`date-${artwork.id}`}
                        title={artwork.date}
                        icon="calendar"
                        arrow={false}
                        effect={false}
                      />
                    </Row>
                  </Column>
                </Column>
              </Card>
            </TiltFx>
          </RevealFx>
        ))}
      </Grid>
      <Dialog
        isOpen={selected !== null}
        onClose={() => setSelected(null)}
        title={selected?.title ?? ""}
        description={selected ? `${selected.medium} · ${selected.date}` : ""}
        background="surface"
      >
        {selected ? (
          <Column gap="16">
            <Media
              src={artworkSrc(selected)}
              alt={selected.title}
              aspectRatio="4 / 5"
              sizes="80vw"
              radius="m"
              enlarge
            />
            <Text variant="body-default-m" onBackground="neutral-weak">
              “{selected.quote}”
            </Text>
            <Text variant="label-default-s" onBackground="brand-medium">
              Cambia la imagen en {selected.image} por una foto de la pintura de Sofia.
            </Text>
          </Column>
        ) : null}
      </Dialog>
    </Column>
  );
}
