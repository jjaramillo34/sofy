"use client";

import { Badge, Button, Column, Heading, Row, Text } from "@once-ui-system/core";
import { motion } from "framer-motion";

type BookCoverProps = {
  onOpen: () => void;
};

export function BookCover({ onOpen }: BookCoverProps) {
  return (
    <Column fillWidth horizontal="center" vertical="center" flex={1} padding="24" gap="32">
      <motion.div
        initial={{ opacity: 0, rotateY: -18, y: 24 }}
        animate={{ opacity: 1, rotateY: 0, y: 0 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        style={{ perspective: 1400, width: "100%", maxWidth: 720 }}
      >
        <Column
          fillWidth
          background="surface"
          border="brand-alpha-medium"
          radius="xl"
          padding="32"
          gap="24"
          horizontal="center"
          className="gold-foil"
          style={{
            background:
              "linear-gradient(160deg, rgba(28, 37, 65, 0.92) 0%, rgba(11, 19, 43, 0.96) 55%, rgba(30, 58, 138, 0.55) 100%)",
          }}
        >
          <Badge id="cover-badge" title="14 años · 17 de septiembre" icon="gift" arrow={false} effect={false} />
          <Text
            variant="label-default-s"
            onBackground="brand-medium"
            className="ornament"
            align="center"
          >
            Un cuento para tus 14 años
          </Text>
          <Heading
            as="h1"
            variant="display-strong-l"
            align="center"
            className="title-glow font-serif"
            wrap="balance"
            onBackground="brand-strong"
          >
            Una obra maestra estrellada: ¡feliz 14.º cumpleaños, Sofia Yaneli!
          </Heading>
          <Text
            variant="body-default-l"
            onBackground="neutral-weak"
            align="center"
            wrap="balance"
            style={{ maxWidth: 520 }}
          >
            Para Sofia Yaneli Jaramillo Bustos, que hoy cumple 14 años — pintora de cielos en
            espiral, guardiana de lunas de oro y el color más brillante de nuestra noche.
          </Text>
          <Row gap="12" wrap horizontal="center">
            <Button size="l" prefixIcon="sparkle" onClick={onOpen}>
              Abrir el libro
            </Button>
          </Row>
          <Text variant="label-default-s" onBackground="neutral-weak">
            Inspirado en La noche estrellada de Vincent van Gogh
          </Text>
        </Column>
      </motion.div>
    </Column>
  );
}
