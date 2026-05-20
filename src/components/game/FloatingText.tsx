import { motion } from "framer-motion";

export function FloatingText() {
  return (
    <motion.div
      initial={{
        opacity: 1,
        y: 0,
      }}
      animate={{
        opacity: 0,
        y: -60,
      }}
      transition={{
        duration: 0.8,
      }}
      className="
        pointer-events-none
        absolute
        text-3xl
        font-bold
        text-yellow-300
      "
    >
      +1
    </motion.div>
  );
}
