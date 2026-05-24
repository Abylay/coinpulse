import { motion } from "framer-motion";

import { useGameStore } from "@/store/gameStore";

export function GameStats() {
  const coins = useGameStore((state) => state.coins);

  const xp = useGameStore((state) => state.xp);

  const level = useGameStore((state) => state.level);

  const stats = [
    {
      label: "Coins",
      value: coins,
    },

    {
      label: "Level",
      value: level,
    },

    {
      label: "XP",
      value: xp,
    },
  ];

  return (
    <div
      className="
        mb-8
        grid
        grid-cols-3
        gap-3
      "
    >
      {stats.map((stat) => (
        <motion.div
          key={stat.label}
          whileHover={{
            y: -4,
          }}
          className="
            rounded-3xl
            border
            border-slate-800
            bg-slate-900/60
            p-4
            backdrop-blur-xl
          "
        >
          <p
            className="
              mb-1
              text-xs
              text-slate-400
            "
          >
            {stat.label}
          </p>

          <p className="text-xl font-bold">{stat.value}</p>
        </motion.div>
      ))}
    </div>
  );
}
