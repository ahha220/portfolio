"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type SpriteProps = {
  frames: string[];
  width: number;
  height: number;
  alt?: string;
  fps?: number;
  className?: string;
};

export default function Sprite({ frames, width, height, alt = "", fps = 4, className = "" }: SpriteProps) {
  const frame = useFrame(frames.length, fps);

  return (
    <div className={`grid ${className}`}>
      {frames.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={i === 0 ? alt : ""}
          width={width}
          height={height}
          loading="eager"
          className={`col-start-1 row-start-1 size-full max-w-none ${i === frame ? "" : "opacity-0"}`}
        />
      ))}
    </div>
  );
}

function useFrame(count: number, fps: number) {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setFrame((f) => (f + 1) % count), 1000 / fps);
    return () => clearInterval(id);
  }, [count, fps]);

  return frame;
}
