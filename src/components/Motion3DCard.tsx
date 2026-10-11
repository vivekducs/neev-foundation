"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  tiltAngle?: number;
}

export function Motion3DCard({
  children,
  className = "",
  onClick,
  tiltAngle = 14
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Motion values tracking cursor position on card
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for high-velocity 3D perspective response
  const mouseXSpring = useSpring(x, { stiffness: 260, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 260, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [tiltAngle, -tiltAngle]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-tiltAngle, tiltAngle]);
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d"
      }}
      whileHover={{ scale: 1.025, z: 25 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 350, damping: 25 }}
      className={`relative perspective-1000 ${className}`}
    >
      {/* Glare specular highlight */}
      {isHovered && (
        <motion.div
          style={{
            background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(243, 198, 35, 0.22) 0%, rgba(235, 131, 23, 0.08) 40%, transparent 80%)`,
          }}
          className="pointer-events-none absolute inset-0 z-30 rounded-3xl transition-opacity duration-300"
        />
      )}
      <div style={{ transform: "translateZ(30px)" }} className="relative z-10 h-full">
        {children}
      </div>
    </motion.div>
  );
}
