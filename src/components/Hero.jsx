"use client";
import React from "react";
import { Spotlight } from "./ui/spotlight-new";

export default function Hero() {
  return (
    <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight />
      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          noramloop<br />
          Revoluciona la educación, hoy.
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          Trae al presente la revolución tecnológica en la educación con foco ambiental. Descubre cómo noramloop transforma el aprendizaje para un futuro sostenible.
        </p>
      </div>
    </div>
  );
} 