"use client";
import { useState } from "react";
import BgGradientOne from "../_components/bg-gradient-one";
import { Navbar } from "../_components/navbar/Navbar";

const CardWithEffect = ({ children }: { children: React.ReactNode }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      className="relative z-10 flex h-full flex-col items-center justify-center "
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ willChange: "transform" }}
    >
      {isHovered && (
        <div
          className="pointer-events-none absolute rounded-full"
          style={{
            width: "200px",
            height: "200px",
            top: mousePosition.y - 150,
            left: mousePosition.x - 150,
            background: "#5D2CA8",
            filter: "blur(100px)",
            transform: "translate(-0%, -0%)",
            zIndex: 10, // Ensure the effect is on top
            willChange: "transform, top, left",
          }}
        />
      )}
      {children}
    </div>
  );
};
const WebsitePage = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <BgGradientOne />
      </div>
      {/* Conteúdo da página */}

      <CardWithEffect>
        <Navbar />
        <div className="relative z-10 flex h-full flex-col items-center justify-center space-y-4">
          <h2 className="text-center text-3xl font-medium animate-text-gradient inline-flex bg-gradient-to-r from- via-slate-500 to-neutral-500 bg-[200%_auto] bg-clip-text leading-tight text-transparent dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400 sm:text-6xl">
            Couple Wealth AI
          </h2>
          <p className="text-lg text-gray-400 text-center">
            True Financial Management for Couples
          </p>
        </div>
      </CardWithEffect>
    </div>
  );
};

export default WebsitePage;
