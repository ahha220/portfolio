"use client";

import { Children, type ReactNode } from "react";
import { motion, stagger, type Variants } from "motion/react";

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export default function Reveal({ children, className, delay = 0 }: RevealProps) {
  const group: Variants = {
    visible: { transition: { delayChildren: stagger(0.1, { startDelay: delay }) } },
  };

  return (
    <motion.div className={className} initial="hidden" animate="visible" variants={group}>
      {Children.map(children, (child) => (
        <motion.div variants={item}>{child}</motion.div>
      ))}
    </motion.div>
  );
}
