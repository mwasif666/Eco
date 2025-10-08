"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import cursorImg from "@/assets/img/fav.svg"; // change image if needed

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    const rotate = () => {
      setRotation((prev) => (prev + 1.5) % 360); // speed of rotation
      requestAnimationFrame(rotate);
    };

    window.addEventListener("mousemove", handleMove);
    rotate(); // start rotation loop

    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div
      className="custom-cursor"
      style={{
        left: `${pos.x}px`,
        top: `${pos.y}px`,
      }}
    >
      <Image
        src={cursorImg}
        alt="cursor"
        width={80}
        height={80}
        className="cursor-img"
        style={{ transform: `rotate(${rotation}deg)` }}
      />
    </div>
  );
}
