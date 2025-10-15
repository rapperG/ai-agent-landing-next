"use client";
import { motion } from "framer-motion";
import ParticleCanvas from "./ParticleCanvas";

export default function Hero() {
  return (
    <section
      className="relative flex items-center justify-center h-screen overflow-hidden"
      aria-label="AI Agent hero section"
    >
      <ParticleCanvas />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="z-20 flex flex-col items-center"
      >
        <div className="w-40 h-40 rounded-full border border-neonBlue shadow-[0_0_40px_#1b95e0] flex items-center justify-center">
          <span className="text-3xl text-highlight font-light">AI</span>
        </div>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1.2, ease: "easeInOut" }}
          className="mt-8 text-center text-2xl md:text-3xl font-light tracking-wide"
        >
          Empower Intelligence,<br />Redefine Possibility.
        </motion.h1>
      </motion.div>
    </section>
  );
}
