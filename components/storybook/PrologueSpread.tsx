"use client";

import { Badge, Column, Heading, RevealFx, Row, Text } from "@once-ui-system/core";

export function PrologueSpread() {
  return (
    <Column fillWidth gap="24" paddingY="16">
      <RevealFx speed="medium" translateY={1}>
        <Column gap="12">
          <Badge id="prologue-badge" title="Prólogo" icon="sparkle" arrow={false} />
          <Heading as="h2" variant="display-strong-s" className="font-serif title-glow">
            Érase una noche estrellada
          </Heading>
        </Column>
      </RevealFx>
      <RevealFx speed="medium" delay={0.12} translateY={1}>
        <Column
          background="surface"
          border="brand-alpha-weak"
          radius="l"
          padding="32"
          gap="20"
          style={{
            background:
              "linear-gradient(180deg, rgba(28, 37, 65, 0.78) 0%, rgba(11, 19, 43, 0.9) 100%)",
          }}
        >
          <Text variant="body-default-l" onBackground="neutral-weak" style={{ lineHeight: 1.8 }}>
            Hay una niña de 14 años que se llama Sofia Yaneli cuyas manos saben hacer que la
            medianoche se sienta cálida. Reúne cobalto y oro como otras personas reúnen historias:
            los hace girar hasta que un cielo callado se convierte en una fiesta.
          </Text>
          <Text variant="body-default-l" onBackground="neutral-weak" style={{ lineHeight: 1.8 }}>
            Este libro es su atelier, su dedicatoria y un cielo que guarda cada deseo. Pasa las
            páginas despacio. Las estrellas ya están escuchando.
          </Text>
          <Row gap="8" wrap>
            <Badge id="name-badge" title="Sofia Yaneli Jaramillo Bustos" arrow={false} effect={false} />
            <Badge id="date-badge" title="14 años · 17 de septiembre" icon="calendar" arrow={false} effect={false} />
          </Row>
        </Column>
      </RevealFx>
    </Column>
  );
}
