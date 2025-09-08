"use client";
import { motion } from "framer-motion";
export const HeroCenterFlexGrow = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => {
  return (
    <motion.div
      className="flex-1 self-stretch flex flex-col items-center justify-center max-w-full overflow-hidden"
      initial={{ flex: 0, width: 0 }}
      animate={{ flex: 1, width: "100%" }}
      transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1], delay }}
    >
      {children}
    </motion.div>
  );
};
