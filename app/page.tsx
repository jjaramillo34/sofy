"use client";

import { useCallback, useEffect, useRef, useState, type PointerEvent } from "react";
import { Column } from "@once-ui-system/core";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { AtelierGallery } from "@/components/storybook/AtelierGallery";
import { BookCover } from "@/components/storybook/BookCover";
import { BookNavigation } from "@/components/storybook/BookNavigation";
import { DedicationLetter } from "@/components/storybook/DedicationLetter";
import { NameAcrostic } from "@/components/storybook/NameAcrostic";
import { PapaLetter } from "@/components/storybook/PapaLetter";
import { PrologueSpread } from "@/components/storybook/PrologueSpread";
import { StarryBackground } from "@/components/storybook/StarryBackground";
import { StarryGuestbook } from "@/components/storybook/StarryGuestbook";
import { CHAPTERS } from "@/lib/chapters";
import { useMediaQuery } from "@/lib/use-media-query";

const pageVariants = {
  enter: (direction: number) => ({
    rotateY: direction >= 0 ? 72 : -72,
    opacity: 0,
    x: direction >= 0 ? 48 : -48,
  }),
  center: {
    rotateY: 0,
    opacity: 1,
    x: 0,
  },
  leave: (direction: number) => ({
    rotateY: direction >= 0 ? -72 : 72,
    opacity: 0,
    x: direction >= 0 ? -48 : 48,
  }),
};

const mobilePageVariants = {
  enter: (direction: number) => ({
    opacity: 0,
    x: direction >= 0 ? 28 : -28,
  }),
  center: {
    opacity: 1,
    x: 0,
  },
  leave: (direction: number) => ({
    opacity: 0,
    x: direction >= 0 ? -28 : 28,
  }),
};

const SWIPE_IGNORE = "button, a, input, textarea, select, canvas, [role='dialog']";

export default function Home() {
  const [chapter, setChapter] = useState(0);
  const [direction, setDirection] = useState(1);
  const reduceMotion = useReducedMotion();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const swipeOrigin = useRef<{ x: number; y: number } | null>(null);

  const goTo = useCallback((next: number) => {
    setChapter((current) => {
      const bounded = Math.max(0, Math.min(CHAPTERS.length - 1, next));
      setDirection(bounded >= current ? 1 : -1);
      return bounded;
    });
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        goTo(chapter + 1);
      }
      if (event.key === "ArrowLeft") {
        goTo(chapter - 1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [chapter, goTo]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  }, [chapter, reduceMotion]);

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if ((event.target as HTMLElement).closest(SWIPE_IGNORE)) {
      swipeOrigin.current = null;
      return;
    }
    swipeOrigin.current = { x: event.clientX, y: event.clientY };
  };

  const onPointerUp = (event: PointerEvent<HTMLDivElement>) => {
    if (!swipeOrigin.current) return;
    const dx = event.clientX - swipeOrigin.current.x;
    const dy = event.clientY - swipeOrigin.current.y;
    swipeOrigin.current = null;
    if (Math.abs(dx) < 56 || Math.abs(dx) < Math.abs(dy) * 1.4) return;
    goTo(chapter + (dx < 0 ? 1 : -1));
  };

  const variants = isMobile ? mobilePageVariants : pageVariants;

  return (
    <Column fillWidth flex={1} className="relative min-h-dvh overflow-x-hidden">
      <StarryBackground />
      <div className="swirl-orb left-[-10%] top-[10%] h-72 w-72 bg-royal" />
      <div className="swirl-orb right-[-8%] top-[30%] h-80 w-80 bg-star/40" style={{ animationDelay: "-8s" }} />
      <div className="swirl-orb bottom-[-12%] left-[30%] h-64 w-64 bg-gold/30" style={{ animationDelay: "-16s" }} />

      <Column
        fillWidth
        flex={1}
        horizontal="center"
        gap="16"
        className="storybook-shell"
        style={{ position: "relative", zIndex: 1 }}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
      >
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={chapter}
            custom={direction}
            variants={reduceMotion ? undefined : variants}
            initial={reduceMotion ? { opacity: 0 } : "enter"}
            animate={reduceMotion ? { opacity: 1 } : "center"}
            exit={reduceMotion ? { opacity: 0 } : "leave"}
            transition={{ duration: isMobile ? 0.35 : 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{
              width: "100%",
              maxWidth: 1080,
              transformStyle: isMobile ? undefined : "preserve-3d",
              transformOrigin: direction >= 0 ? "left center" : "right center",
            }}
          >
            {chapter === 0 ? <BookCover onOpen={() => goTo(1)} /> : null}
            {chapter === 1 ? <PrologueSpread /> : null}
            {chapter === 2 ? <PapaLetter /> : null}
            {chapter === 3 ? <AtelierGallery /> : null}
            {chapter === 4 ? <DedicationLetter /> : null}
            {chapter === 5 ? <NameAcrostic /> : null}
            {chapter === 6 ? <StarryGuestbook /> : null}
          </motion.div>
        </AnimatePresence>
        <BookNavigation chapter={chapter} onChange={goTo} />
      </Column>
    </Column>
  );
}
