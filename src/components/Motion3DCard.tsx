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
  tiltAngle = 12
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 280, damping: 22 });
  const mouseYSpring = useSpring(y, { stiffness: 280, damping: 22 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [tiltAngle, -tiltAngle]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-tiltAngle, tiltAngle]);
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / rect.width - 0.5;
    const yPct = mouseY / rect.height - 0.5;
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
      whileHover={{
        y: -6,
        scale: 1.025,
        boxShadow: "0 24px 48px -12px rgba(235, 131, 23, 0.18), 0 0 0 1.5px #EB8317"
      }}
      whileTap={{ scale: 0.985 }}
      transition={{ type: "spring", stiffness: 350, damping: 25 }}
      className={`relative perspective-1000 cursor-pointer rounded-3xl ${className}`}
    >
      {/* Dynamic specular glare shimmer on hover */}
      {isHovered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(243, 198, 35, 0.28) 0%, rgba(235, 131, 23, 0.12) 35%, transparent 75%)`,
          }}
          className="pointer-events-none absolute inset-0 z-30 rounded-3xl transition-opacity duration-300"
        />
      )}
      <div style={{ transform: "translateZ(24px)" }} className="relative z-10 h-full">
        {children}
      </div>
    </motion.div>
  );
}
