"use client";

import { Badge, Column, Heading, RevealFx, Text } from "@once-ui-system/core";

export function PapaLetter() {
  return (
    <Column fillWidth gap="24" paddingY="8" s={{ paddingY: "4", gap: "16" }} horizontal="center">
      <Column gap="8" fillWidth>
        <Badge id="papa-letter-badge" title="Una carta de papá" icon="gift" arrow={false} />
        <Heading as="h2" variant="display-strong-s" className="font-serif title-glow">
          Para mi Sofi
        </Heading>
      </Column>
      <RevealFx speed="medium" translateY={1} fillWidth>
        <Column
          fillWidth
          maxWidth="m"
          background="surface"
          border="brand-alpha-medium"
          radius="xl"
          padding="20"
          s={{ padding: "16", gap: "16" }}
          l={{ padding: "32", gap: "20" }}
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
            Mi amada Sofía,
          </Heading>
          <Text variant="body-default-l" onBackground="neutral-weak" style={{ lineHeight: 1.9 }}>
            ¡Feliz cumpleaños, mi niña hermosa! Hoy celebro con todo mi corazón un año más de tu
            vida, y no hay palabras suficientes para expresar lo profundamente que te amo y lo
            agradecido que estoy de ser tu papá.
          </Text>
          <Text variant="body-default-l" onBackground="neutral-weak" style={{ lineHeight: 1.9 }}>
            Quiero recordarte hoy y siempre lo inmensamente orgulloso que me siento de ti. Me llena
            de orgullo la persona tan maravillosa en la que te has convertido: tu nobleza, tu
            esencia única y esa forma tan tuya de iluminar todo a tu alrededor. Admiro con toda mi
            alma tu talento para dibujar; la manera en que transformas tus ideas en arte refleja la
            belleza de tu imaginación y la sensibilidad de tu corazón.
          </Text>
          <Text variant="body-default-l" onBackground="neutral-weak" style={{ lineHeight: 1.9 }}>
            Eres hermosa, mi princesa, hermosa por fuera y aún más radiante por dentro. Nunca
            olvides quién eres ni el valor infinito que tienes. Sueña en grande, sigue trazando tu
            propio camino con esa pasión tan linda y recuerda que, sin importar a dónde te lleven
            tus pasos, aquí siempre estaré para apoyarte, aplaudir tus logros y cuidarte.
          </Text>
          <Text variant="body-default-l" onBackground="neutral-weak" style={{ lineHeight: 1.9 }}>
            Que este nuevo año venga lleno de sonrisas, colores y sueños cumplidos.
          </Text>
          <Text variant="body-default-l" onBackground="neutral-strong" className="font-serif">
            Te amo con todo mi ser, Sofi. ¡Feliz día!
            <br />
            Papá
          </Text>
        </Column>
      </RevealFx>
    </Column>
  );
}
