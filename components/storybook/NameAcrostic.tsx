"use client";

import { Badge, Column, Grid, Heading, RevealFx, Row, Text } from "@once-ui-system/core";
import { acrosticSofia, acrosticYaneli } from "@/lib/acrostic";

export function NameAcrostic() {
  return (
    <Column fillWidth gap="24" paddingY="8" s={{ paddingY: "4", gap: "16" }}>
      <Column gap="8">
        <Badge id="name-acrostic-badge" title="Tu nombre" icon="sparkle" arrow={false} />
        <Heading as="h2" variant="display-strong-s" className="font-serif title-glow">
          Sofía Yaneli
        </Heading>
        <Text variant="body-default-m" onBackground="neutral-weak" wrap="balance">
          Cada letra de tu nombre es un deseo para tus 14 años.
        </Text>
      </Column>
      <Grid columns="2" s={{ columns: "1" }} gap="24">
        <AcrosticCard name="Sofía" lines={acrosticSofia} delay={0} />
        <AcrosticCard name="Yaneli" lines={acrosticYaneli} delay={0.12} />
      </Grid>
    </Column>
  );
}

function AcrosticCard({
  name,
  lines,
  delay,
}: {
  name: string;
  lines: readonly { letter: string; line: string }[];
  delay: number;
}) {
  return (
    <RevealFx speed="medium" delay={delay} translateY={1} fillWidth>
      <Column
        fillWidth
        gap="16"
        padding="16"
        s={{ padding: "16" }}
        l={{ padding: "24" }}
        background="surface"
        border="brand-alpha-medium"
        radius="xl"
        className="gold-foil"
        style={{
          background:
            "linear-gradient(180deg, rgba(254, 240, 138, 0.08) 0%, rgba(11, 19, 43, 0.92) 18%, rgba(28, 37, 65, 0.9) 100%)",
        }}
      >
        <Text variant="label-default-s" onBackground="brand-medium" className="ornament">
          {name}
        </Text>
        <Column gap="12">
          {lines.map((item) => (
            <Row key={`${name}-${item.letter}-${item.line}`} gap="12" s={{ gap: "8" }} vertical="start">
              <Text
                className="font-serif title-glow acrostic-letter"
                style={{
                  color: "#fcd34d",
                  fontWeight: 700,
                }}
              >
                {item.letter}
              </Text>
              <Text variant="body-default-m" onBackground="neutral-weak" style={{ lineHeight: 1.7 }}>
                {item.line}
              </Text>
            </Row>
          ))}
        </Column>
      </Column>
    </RevealFx>
  );
}
