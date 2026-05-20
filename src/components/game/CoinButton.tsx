import { motion } from "framer-motion";

export function CoinButton() {
  return (
    <div className="flex flex-1 items-center justify-center">
      <motion.button
        whileTap={{
          scale: 0.92,
        }}
        whileHover={{
          scale: 1.03,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 15,
        }}
        className="
          relative
          flex
          h-56
          w-56
          items-center
          justify-center
          rounded-full
          bg-gradient-to-br
          from-yellow-300
          via-yellow-400
          to-orange-500
          shadow-[0_0_80px_rgba(250,204,21,0.45)]
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
        <span className="text-7xl">🪙</span>
      </motion.button>
    </div>
  );
}
