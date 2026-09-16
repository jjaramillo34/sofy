"use client";

import { Button, Column, IconButton, Row, Text } from "@once-ui-system/core";
import { CHAPTERS } from "@/lib/chapters";

type BookNavigationProps = {
  chapter: number;
  onChange: (next: number) => void;
};

export function BookNavigation({ chapter, onChange }: BookNavigationProps) {
  const last = CHAPTERS.length - 1;
  const current = CHAPTERS[chapter];

  return (
    <Row
      horizontal="between"
      vertical="center"
      paddingX="12"
      paddingY="8"
      gap="8"
      className="book-nav"
    >
      <IconButton
        icon="chevronLeft"
        variant="secondary"
        tooltip="Página anterior"
        onClick={() => onChange(Math.max(0, chapter - 1))}
        disabled={chapter === 0}
      />
      <Column horizontal="center" gap="8" flex={1} className="book-nav-mobile">
        <Text variant="label-default-s" className="font-serif" onBackground="brand-strong">
          {current.title}
        </Text>
        <Row gap="8" horizontal="center" vertical="center">
          {CHAPTERS.map((item, index) => (
            <button
              key={item.id}
              type="button"
              className="chapter-dot"
              aria-label={item.title}
              aria-current={index === chapter ? "page" : undefined}
              onClick={() => onChange(index)}
              data-active={index === chapter}
            />
          ))}
        </Row>
      </Column>
      <Row gap="8" wrap horizontal="center" flex={1} className="chapter-chips">
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
        <Text variant="label-default-s" onBackground="neutral-weak" className="book-nav-count">
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
