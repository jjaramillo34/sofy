"use client";

import { Badge, Column, Heading, RevealFx, Text } from "@once-ui-system/core";

export function DedicationLetter() {
  return (
    <Column fillWidth gap="24" paddingY="16" horizontal="center">
      <Column gap="8" fillWidth>
        <Badge id="letter-badge" title="Una carta de casa" icon="mail" arrow={false} />
        <Heading as="h2" variant="display-strong-s" className="font-serif title-glow">
          Para nuestra Sofia Yaneli
        </Heading>
      </Column>
      <RevealFx speed="medium" translateY={1} fillWidth>
        <Column
          fillWidth
          maxWidth="m"
          background="surface"
          border="brand-alpha-medium"
          radius="xl"
          padding="32"
          gap="20"
          className="gold-foil"
          style={{
            background:
              "linear-gradient(180deg, rgba(254, 240, 138, 0.08) 0%, rgba(11, 19, 43, 0.92) 18%, rgba(28, 37, 65, 0.9) 100%)",
          }}
        >
          <Text variant="label-default-s" onBackground="brand-medium" className="ornament">
            14 años · 17 de septiembre
          </Text>
          <Heading as="h3" variant="heading-strong-l" className="font-serif">
            Mi estrella,
          </Heading>
          <Text variant="body-default-l" onBackground="neutral-weak" style={{ lineHeight: 1.9 }}>
            Feliz 14.º cumpleaños, Sofia Yaneli Jaramillo Bustos. Hoy el cielo no es solo un cielo: es
            una galería, y tú eres la artista que le enseñó a girar.
          </Text>
          <Text variant="body-default-l" onBackground="neutral-weak" style={{ lineHeight: 1.9 }}>
            Tienes una forma de ver el color que se siente como un saludo secreto con el mundo.
            Donde otros ven azul, tú ves medianoche, cobalto y el oro escondido en un farol.
            Mezclas sentimientos como mezclas pintura: con valentía, con generosidad y con una
            paciencia que hace florecer hasta los días más callados.
          </Text>
          <Text variant="body-default-l" onBackground="neutral-weak" style={{ lineHeight: 1.9 }}>
            Estamos tan orgullosos de tu espíritu creativo: de cómo vuelves al lienzo, de las
            historias que cuenta tu pincel, de la ternura que dejas en cada rincón de una página.
            Nunca dejes de hacer la noche más brillante. La obra maestra no es solo lo que pintas.
            Eres tú.
          </Text>
          <Text variant="body-default-l" onBackground="neutral-strong" className="font-serif">
            Con todo nuestro amor,
            <br />
            Mamá y Papá
          </Text>
        </Column>
      </RevealFx>
    </Column>
  );
}
