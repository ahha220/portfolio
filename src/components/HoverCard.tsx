"use client";

import Image from "next/image";
import { useState, type PointerEvent, type ReactNode } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring } from "motion/react";

type HoverCardProps = {
  title: string;
  image: string;
  href: string;
  children: ReactNode;
  className?: string;
};

export default function HoverCard({ title, image, href, children, className = "" }: HoverCardProps) {
  const [open, setOpen] = useState(false);
  const x = useSpring(useMotionValue(0), { stiffness: 400, damping: 35 });
  const y = useSpring(useMotionValue(0), { stiffness: 400, damping: 35 });

  function follow(event: PointerEvent<HTMLAnchorElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - bounds.left);
    y.set(event.clientY - bounds.top);
  }

  function show(event: PointerEvent<HTMLAnchorElement>) {
    if (event.pointerType !== "mouse") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    x.jump(event.clientX - bounds.left);
    y.jump(event.clientY - bounds.top);
    setOpen(true);
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      onPointerEnter={show}
      onPointerMove={follow}
      onPointerLeave={() => setOpen(false)}
      className={`relative cursor-pointer ${className}`}
    >
      {children}
      <AnimatePresence>
        {open && (
          <motion.span
            style={{ x, y }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.15 }}
            className="pointer-events-none absolute top-[1em] left-[1em] z-10 flex w-[9em] flex-col gap-[0.5em] border border-divider bg-black p-[0.4em]"
          >
            <Image src={image} alt="" width={320} height={180} className="aspect-video w-full bg-neutral-900 object-contain" />
            <span className="text-[0.55em] font-medium tracking-[0.15em] whitespace-normal uppercase">{title}</span>
          </motion.span>
        )}
      </AnimatePresence>
    </a>
  );
}
