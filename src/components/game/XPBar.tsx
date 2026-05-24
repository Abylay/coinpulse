import { motion } from "framer-motion";

import { useGameStore } from "@/store/gameStore";

const XP_TO_LEVEL = 100;

export function XPBar() {
  const xp = useGameStore((state) => state.xp);

  const progress = (xp / XP_TO_LEVEL) * 100;

  return (
    <div className="mb-8">
      <div
        className="
          mb-2
          flex
          items-center
          justify-between
        "
      >
        <p className="text-sm text-slate-400">Progress</p>

        <p className="text-sm font-medium">
          {xp} / {XP_TO_LEVEL}
        </p>
      </div>

      <div
        className="
          h-4
          overflow-hidden
          rounded-full
          bg-slate-800
        "
      >
        <motion.div
          animate={{
            width: `${progress}%`,
          }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 20,
          }}
          className="
            h-full
            rounded-full
            bg-gradient-to-r
            from-cyan-400
            to-blue-500
          "
        />
      </div>
    </div>
  );
}
