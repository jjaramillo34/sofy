"use client";

import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type FormEvent,
} from "react";
import {
  Badge,
  Button,
  Card,
  Column,
  Grid,
  Heading,
  Input,
  Row,
  Text,
  Textarea,
  TiltFx,
  useToast,
} from "@once-ui-system/core";
import {
  seedWishes,
  STARS_STORAGE_KEY,
  WISHES_STORAGE_KEY,
  type Wish,
} from "@/lib/wishes";

type SkyStar = {
  x: number;
  y: number;
  radius: number;
  rotation: number;
  phase: number;
  speed: number;
};

export function StarryGuestbook() {
  const { addToast } = useToast();
  const nameId = useId();
  const messageId = useId();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<SkyStar[]>([]);
  const [starCount, setStarCount] = useState(0);
  const [wishes, setWishes] = useState<Wish[]>(seedWishes);
  const [from, setFrom] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    try {
      const storedWishes = window.localStorage.getItem(WISHES_STORAGE_KEY);
      if (storedWishes) {
        const parsed = JSON.parse(storedWishes) as Wish[];
        if (Array.isArray(parsed) && parsed.length > 0) {
          setWishes(parsed);
        }
      }
      const storedStars = window.localStorage.getItem(STARS_STORAGE_KEY);
      if (storedStars) {
        const parsed = JSON.parse(storedStars) as SkyStar[];
        if (Array.isArray(parsed)) {
          starsRef.current = parsed;
          setStarCount(parsed.length);
        }
      }
    } catch {
      // Keep seeded data if storage is unavailable.
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let frame = 0;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");

    const resize = () => {
      const cssW = canvas.clientWidth;
      const cssH = canvas.clientHeight;
      if (cssW < 8 || cssH < 8) return { cssW: 0, cssH: 0 };
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const nextWidth = Math.round(cssW * dpr);
      const nextHeight = Math.round(cssH * dpr);
      if (canvas.width !== nextWidth || canvas.height !== nextHeight) {
        canvas.width = nextWidth;
        canvas.height = nextHeight;
      }
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      return { cssW, cssH };
    };

    const draw = () => {
      const { cssW, cssH } = resize();
      if (cssW < 8 || cssH < 8) {
        raf = window.requestAnimationFrame(draw);
        return;
      }
      frame += 1;
      const t = media.matches ? 0 : frame * 0.02;

      const sky = ctx.createLinearGradient(0, 0, cssW, cssH);
      sky.addColorStop(0, "#0b132b");
      sky.addColorStop(0.6, "#1c2541");
      sky.addColorStop(1, "#1e3a8a");
      ctx.fillStyle = sky;
      ctx.fillRect(0, 0, cssW, cssH);

      drawGuestbookMoon(ctx, cssW * 0.82, cssH * 0.22, Math.min(cssW, cssH) * 0.08, t);

      for (const star of starsRef.current) {
        drawVanGoghStar(ctx, star, t);
      }
      raf = window.requestAnimationFrame(draw);
    };

    resize();
    draw();
    const observer = new ResizeObserver(() => {
      resize();
    });
    observer.observe(canvas);
    window.addEventListener("resize", resize);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", resize);
      window.cancelAnimationFrame(raf);
    };
  }, []);

  const persistStars = useCallback(() => {
    window.localStorage.setItem(STARS_STORAGE_KEY, JSON.stringify(starsRef.current));
  }, []);

  const lastDropAt = useRef(0);

  const dropStar = (
    event: { clientX: number; clientY: number },
  ) => {
    const now = performance.now();
    if (now - lastDropAt.current < 120) return;
    lastDropAt.current = now;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const star: SkyStar = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
      radius: 10 + Math.random() * 10,
      rotation: Math.random() * Math.PI,
      phase: Math.random() * Math.PI * 2,
      speed: 0.8 + Math.random() * 1.4,
    };
    starsRef.current = [...starsRef.current, star];
    setStarCount(starsRef.current.length);
    persistStars();
  };

  const handleWish = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextFrom = from.trim();
    const nextMessage = message.trim();
    if (!nextFrom || !nextMessage) {
      addToast({
        variant: "warning",
        message: "Escribe tu nombre y un deseo de cumpleaños.",
      });
      return;
    }

    const nextWish: Wish = {
      id: `wish-${Date.now()}`,
      from: nextFrom,
      message: nextMessage,
      createdAt: new Date().toISOString().slice(0, 10),
    };
    const nextWishes = [nextWish, ...wishes];
    setWishes(nextWishes);
    window.localStorage.setItem(WISHES_STORAGE_KEY, JSON.stringify(nextWishes));
    setFrom("");
    setMessage("");
    addToast({
      variant: "success",
      message: "Tu deseo ya forma parte del cielo de Sofia.",
    });
  };

  return (
    <Column fillWidth gap="32" paddingY="16">
      <Column gap="8">
        <Badge id="sky-badge" title="Libro de deseos" icon="sparkle" arrow={false} />
        <Heading as="h2" variant="display-strong-s" className="font-serif title-glow">
          Deja una estrella, deja un deseo
        </Heading>
        <Text variant="body-default-m" onBackground="neutral-weak">
          Toca el cielo para dejar caer una estrella de Van Gogh. Luego escribe a Sofia una nota
          de cumpleaños que se queda en este cuento.
        </Text>
      </Column>

      <Column gap="12">
        <Row horizontal="between" vertical="center" gap="8" wrap>
          <Text variant="label-default-s" onBackground="brand-medium">
            Toca en cualquier parte del cielo
          </Text>
          <Badge
            id="star-count"
            title={`${starCount} ${starCount === 1 ? "estrella dorada" : "estrellas doradas"}`}
            arrow={false}
            effect={false}
          />
        </Row>
        <canvas
          ref={canvasRef}
          onPointerDown={dropStar}
          onClick={dropStar}
          role="img"
          aria-label="Cielo estrellado interactivo. Haz clic o toca para añadir una estrella de oro."
          className="h-[min(52vh,420px)] w-full cursor-crosshair rounded-[1.5rem] border border-[rgba(252,211,77,0.45)] bg-[#0b132b]"
        />
      </Column>

      <Grid columns="2" s={{ columns: "1" }} gap="20">
        <form onSubmit={handleWish}>
          <Column
            gap="16"
            padding="24"
            background="surface"
            border="brand-alpha-weak"
            radius="l"
          >
            <Heading as="h3" variant="heading-strong-s" className="font-serif">
              Escribe un deseo
            </Heading>
            <Input
              id={nameId}
              label="Tu nombre"
              value={from}
              onChange={(event) => setFrom(event.target.value)}
              placeholder="Mamá, un amigo, una estrella..."
            />
            <Textarea
              id={messageId}
              label="Mensaje de cumpleaños"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Una nota para Sofia Yaneli..."
              lines={4}
            />
            <Button type="submit" prefixIcon="gift">
              Dejar este deseo en el cielo
            </Button>
          </Column>
        </form>
        <Column gap="12">
          {wishes.map((wish) => (
            <TiltFx key={wish.id} intensity={0.4} fillWidth>
              <Card
                fillWidth
                padding="20"
                gap="8"
                background="surface"
                border="brand-alpha-weak"
                radius="l"
                className="gold-foil"
              >
                <Row horizontal="between" gap="8" wrap>
                  <Text variant="heading-strong-xs" className="font-serif">
                    {wish.from}
                  </Text>
                  <Text variant="label-default-s" onBackground="neutral-weak">
                    {wish.createdAt}
                  </Text>
                </Row>
                <Text variant="body-default-s" onBackground="neutral-weak">
                  {wish.message}
                </Text>
              </Card>
            </TiltFx>
          ))}
        </Column>
      </Grid>
    </Column>
  );
}

function drawGuestbookMoon(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  radius: number,
  t: number,
) {
  const glow = ctx.createRadialGradient(x, y, radius * 0.2, x, y, radius * 3.6);
  glow.addColorStop(0, "rgba(254, 240, 138, 0.95)");
  glow.addColorStop(0.2, "rgba(252, 211, 77, 0.45)");
  glow.addColorStop(1, "rgba(11, 19, 43, 0)");
  ctx.fillStyle = glow;
  ctx.beginPath();
  ctx.arc(x, y, radius * 3.6, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#fef08a";
  ctx.beginPath();
  ctx.arc(x, y, radius * 0.5, 0, Math.PI * 2);
  ctx.fill();
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(t * 0.08);
  ctx.strokeStyle = "rgba(254, 240, 138, 0.28)";
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.arc(0, 0, radius * 1.35, 0.2, 2);
  ctx.stroke();
  ctx.restore();
}

function drawVanGoghStar(ctx: CanvasRenderingContext2D, star: SkyStar, t: number) {
  const twinkle = 0.72 + 0.28 * Math.sin(t * star.speed + star.phase);
  const radius = star.radius * twinkle;
  const glow = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, radius * 5);
  glow.addColorStop(0, `rgba(254, 240, 138, ${0.95 * twinkle})`);
  glow.addColorStop(0.22, `rgba(252, 211, 77, ${0.7 * twinkle})`);
  glow.addColorStop(1, "rgba(245, 158, 11, 0)");
  ctx.fillStyle = glow;
  ctx.beginPath();
  ctx.arc(star.x, star.y, radius * 5, 0, Math.PI * 2);
  ctx.fill();

  ctx.save();
  ctx.translate(star.x, star.y);
  ctx.rotate(star.rotation + t * 0.15);
  for (let i = 0; i < 8; i += 1) {
    ctx.rotate(Math.PI / 4);
    ctx.beginPath();
    ctx.strokeStyle = `rgba(253, 224, 71, ${0.75 * twinkle})`;
    ctx.lineWidth = 2;
    ctx.moveTo(radius * 0.35, 0);
    ctx.quadraticCurveTo(radius * 1.5, radius * 0.45, radius * 2.4, 0);
    ctx.stroke();
  }
  ctx.restore();

  ctx.fillStyle = "#fef08a";
  ctx.beginPath();
  ctx.arc(star.x, star.y, radius * 0.42, 0, Math.PI * 2);
  ctx.fill();
}
