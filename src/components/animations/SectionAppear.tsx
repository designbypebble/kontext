"use client";
import { motion } from "framer-motion";

interface Props {
  transition?: object;
  delay?: number;
  children: React.ReactNode;
  className?: string;
  initialY?: number;
  initialScale?: number;
  viewportAmount?: number;
  initialOpacity?: number;
}

const SectionAppearAnimation: React.FC<Props> = ({
  children,
  transition,
  delay = 0,
  className = "",
  initialY = 40,
  initialScale = 1,
  viewportAmount = 0.5,
  initialOpacity = 0,
}) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: initialOpacity, y: initialY, scale: initialScale }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: viewportAmount }}
      transition={{
        duration: 0.8,
        ease: [0.25, 1, 0.5, 1],
        /*  damping: 40, stiffness: 200, mass: 0.15, */ delay: delay,
        ...transition,
      }}
    >
      {children}
    </motion.div>
  );
};

export default SectionAppearAnimation;
