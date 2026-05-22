import { useState } from "react";
import type { MouseEvent } from "react";
import { FloatingText } from "@/components/game/FloatingText";
import type { FloatingTextItem } from "@/types/floatingText";
import { useGameStore } from "@/store/gameStore";
import { motion } from "framer-motion";

export function CoinButton() {
  const [floatingTexts, setFloatingTexts] = useState<FloatingTextItem[]>([]);

  function handleClick(event: MouseEvent<HTMLButtonElement>) {
    tapCoin();

    const id = crypto.randomUUID();

    const rect = event.currentTarget.getBoundingClientRect();

    const x = event.clientX - rect.left;

    const y = event.clientY - rect.top;

    setFloatingTexts((prev) => [
      ...prev,
      {
        id,
        x,
        y,
      },
    ]);
    setTimeout(() => {
      setFloatingTexts((prev) => prev.filter((text) => text.id !== id));
    }, 800);
  }
  const tapCoin = useGameStore((state) => state.tapCoin);
  return (
    <div className="relative flex flex-1 items-center justify-center">
      <div
        className="
          absolute
          h-72
          w-72
          rounded-full
          bg-yellow-400/20
          blur-3xl
        "
      />
      <motion.button
        onClick={handleClick}
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileTap={{
          scale: 0.92,
        }}
        className="
          relative
          flex
          h-64
          w-64
          items-center
          justify-center
          rounded-full
          bg-gradient-to-br
          from-yellow-300
          via-yellow-400
          to-orange-500
          shadow-[0_0_120px_rgba(250,204,21,0.45)]
        "
      >
        <div
          className="
            absolute
            inset-3
            rounded-full
            border
            border-white/30
          "
        />

        <div
          className="
            absolute
            inset-6
            rounded-full
            border
            border-yellow-100/30
          "
        />

        <span className="text-8xl">🪙</span>

        <div>
          {floatingTexts.map((text) => (
            <FloatingText key={text.id} x={text.x} y={text.y} />
          ))}
        </div>
      </motion.button>
    </div>
  );
}
