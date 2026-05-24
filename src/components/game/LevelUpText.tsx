import { motion } from "framer-motion";

export function LevelUpText() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        scale: 1.5,
      }}
      transition={{
        duration: 0.8,
      }}
      className="
        pointer-events-none
        absolute
        inset-0
        z-50
        flex
        items-center
        justify-center
      "
    >
      <div
        className="rounded-3xl border border-yellow-300/30 bg-yellow-400/20
        px-8 py-4 text-4xl font-black text-yellow-300 backdrop-blur-xl"
      >
        LEVEL UP
      </div>
    </motion.div>
  );
}
