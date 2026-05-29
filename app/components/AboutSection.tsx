'use client'

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section
      id="nosotros"
      className="py-24 bg-zinc-900 relative overflow-hidden"
    >
      {/* ── Patrón de puntos ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(245,200,0,0.12) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* ── Marca de agua ── */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span
          className="font-heading text-white/[0.015] leading-none select-none whitespace-nowrap"
          style={{ fontSize: "22vw" }}
        >
          BETTER
        </span>
      </div>

      {/* ── Degradado superior que funde con la sección anterior ── */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-zinc-950/60 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex gap-5 items-stretch"
        >
          {/* Barra vertical amarilla animada */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-1 bg-brand-yellow rounded-full origin-top shrink-0"
          />

          <div>
            <span className="text-brand-yellow font-bold text-sm uppercase tracking-widest">
              Quiénes somos
            </span>
            <h2 className="font-heading text-5xl sm:text-6xl text-white uppercase mt-1 leading-none">
              Un gimnasio
              <br />
              <span className="text-brand-yellow">de barrio.</span>
            </h2>
            <p className="text-zinc-400 text-lg mt-4 leading-relaxed max-w-xl">
              Better Fitness Club es un centro de entrenamiento integral pensado para
              personas que quieren entrenar con constancia, mejorar su condición física y
              ser parte de una comunidad activa en Mar del Plata.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
