'use client'

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Clock, Star, ArrowRight, Navigation } from "lucide-react";
import { WHATSAPP_URL, MAPS_DIRECTIONS_URL } from "../lib/constants";

const BADGES = [
  { icon: <MapPin size={14} />, text: "Alvarado 2837, MdP" },
  { icon: <Clock size={14} />,  text: "Lun–Vie 7:00–21:30" },
  { icon: <Clock size={14} />,  text: "Sáb 9:00–13:00" },
  { icon: <Star size={14} />,   text: "4.8 ★ en Google" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <Image
          src="/assets/better/hero-gym.jpg"
          fill
          alt="Better Fitness Club — Centro de entrenamiento en Mar del Plata"
          className="object-cover object-center"
          priority
          quality={85}
        />
        {/* Gradiente oscuro */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-black/40" />
      </div>

      {/* Elemento decorativo amarillo */}
      <div className="absolute top-1/3 right-10 w-64 h-64 bg-brand-yellow/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-40 h-40 bg-brand-yellow/5 rounded-full blur-2xl pointer-events-none" />

      {/* Contenido */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-28 pb-20 w-full">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          {/* Etiqueta */}
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 bg-brand-yellow/15 border border-brand-yellow/30 text-brand-yellow text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-brand-yellow rounded-full animate-pulse" />
              Mar del Plata · Entrenamiento Integral
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white leading-none uppercase mb-6"
          >
            Entrená mejor.
            <br />
            <span className="text-brand-yellow">Sentite mejor.</span>
            <br />
            Sumate a Better.
          </motion.h1>

          {/* Subtítulo */}
          <motion.p
            variants={item}
            className="text-zinc-300 text-lg sm:text-xl max-w-xl mb-8 leading-relaxed"
          >
            Centro de entrenamiento integral en Mar del Plata. Funcional, running,
            comunidad deportiva y equipo de fútbol propio.
          </motion.p>

          {/* Badges */}
          <motion.div variants={item} className="flex flex-wrap gap-3 mb-10">
            {BADGES.map((b, i) => (
              <span
                key={i}
                className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm px-3 py-1.5 rounded-full"
              >
                <span className="text-brand-yellow">{b.icon}</span>
                {b.text}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 bg-brand-yellow text-zinc-950 font-bold text-lg px-8 py-4 rounded-full hover:brightness-110 transition-all duration-200 shadow-lg shadow-brand-yellow/25"
            >
              Quiero empezar
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={MAPS_DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border-2 border-white/40 text-white font-bold text-lg px-8 py-4 rounded-full hover:border-brand-yellow hover:text-brand-yellow transition-all duration-200"
            >
              <Navigation size={18} />
              Ver ubicación
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator — chevrones en cascada */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-0"
      >
        {[0, 1, 2].map((i) => (
          <motion.svg
            key={i}
            width="28"
            height="16"
            viewBox="0 0 28 16"
            fill="none"
            animate={{ opacity: [0.15, 1, 0.15] }}
            transition={{
              duration: 1.4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.28,
            }}
          >
            <polyline
              points="2,2 14,13 26,2"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-brand-yellow"
            />
          </motion.svg>
        ))}
      </motion.div>
    </section>
  );
}
