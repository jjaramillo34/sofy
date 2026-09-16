"use client";

import { Button, IconButton, Row, Text } from "@once-ui-system/core";
import { CHAPTERS } from "@/lib/chapters";

type BookNavigationProps = {
  chapter: number;
  onChange: (next: number) => void;
};

export function BookNavigation({ chapter, onChange }: BookNavigationProps) {
  const last = CHAPTERS.length - 1;

  return (
    <Row
      fillWidth
      horizontal="between"
      vertical="center"
      paddingX="16"
      paddingY="12"
      gap="12"
      wrap
      style={{
        position: "sticky",
        bottom: 12,
        zIndex: 8,
        maxWidth: 920,
        marginInline: "auto",
        background: "rgba(11, 19, 43, 0.72)",
        backdropFilter: "blur(16px)",
        border: "1px solid rgba(252, 211, 77, 0.28)",
        borderRadius: 999,
      }}
    >
      <IconButton
        icon="chevronLeft"
        variant="secondary"
        tooltip="Página anterior"
        onClick={() => onChange(Math.max(0, chapter - 1))}
        disabled={chapter === 0}
      />
      <Row gap="8" wrap horizontal="center" flex={1}>
        {CHAPTERS.map((item, index) => (
          <Button
            key={item.id}
            size="s"
            variant={index === chapter ? "primary" : "tertiary"}
            onClick={() => onChange(index)}
            aria-current={index === chapter ? "page" : undefined}
          >
            {item.title}
          </Button>
        ))}
      </Row>
      <Row gap="8" vertical="center">
        <Text variant="label-default-s" onBackground="neutral-weak" className="hidden sm:block">
          {chapter + 1} / {CHAPTERS.length}
        </Text>
        <IconButton
          icon="chevronRight"
          variant="secondary"
          tooltip="Página siguiente"
          onClick={() => onChange(Math.min(last, chapter + 1))}
          disabled={chapter === last}
        />
      </Row>
    </Row>
  );
}
