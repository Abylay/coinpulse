import { motion } from "framer-motion";

interface FloatingTextProps {
  x: number;

  y: number;
}

export function FloatingText({ x, y }: FloatingTextProps) {
  return (
    <motion.div
      initial={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      animate={{
        opacity: 0,
        y: -80,
        scale: 1.4,
      }}
      transition={{
        duration: 0.8,
      }}
      style={{
        left: x,
        top: y,
      }}
      className="
        pointer-events-none
        absolute
        z-50
        text-4xl
        font-bold
        text-yellow-300
      "
    >
      +1
    </motion.div>
  );
}
