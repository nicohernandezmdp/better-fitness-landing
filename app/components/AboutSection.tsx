'use client'

import { motion } from "framer-motion";
import { Dumbbell, Activity, Users, Trophy } from "lucide-react";

const FEATURES = [
  {
    icon: <Dumbbell size={26} />,
    title: "Entrenamiento Funcional",
    text: "Clases de alta intensidad para trabajar fuerza, resistencia y movilidad. Adaptable a todos los niveles.",
  },
  {
    icon: <Activity size={26} />,
    title: "Running al Aire Libre",
    text: "Salidas grupales por Mar del Plata. Martes y jueves a las 18 hs para mejorar resistencia en comunidad.",
  },
  {
    icon: <Users size={26} />,
    title: "Comunidad Activa",
    text: "Un espacio para entrenar con constancia, compartir objetivos y sostenerte con el acompañamiento del grupo.",
  },
  {
    icon: <Trophy size={26} />,
    title: "Better FC",
    text: "El equipo de fútbol de Better Fitness Club que compite en torneos locales como Newbery Athletic.",
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

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

        {/* Header con barra vertical */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 flex gap-5 items-stretch"
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
              Más que un gimnasio.
              <br />
              <span className="text-brand-yellow">Un club deportivo.</span>
            </h2>
            <p className="text-zinc-400 text-lg mt-4 leading-relaxed max-w-xl">
              Better Fitness Club es un centro de entrenamiento integral pensado para
              personas que quieren entrenar con constancia, mejorar su condición física y
              ser parte de una comunidad activa en Mar del Plata.
            </p>
          </div>
        </motion.div>

        {/* Línea separadora con puntos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center gap-3 mb-12"
        >
          <div className="h-px flex-1 bg-gradient-to-r from-brand-yellow/60 to-transparent" />
          <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow" />
          <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow/40" />
          <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow/20" />
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {FEATURES.map((f) => (
            <motion.div
              key={f.title}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group relative bg-zinc-800/80 backdrop-blur-sm border border-zinc-700 rounded-2xl p-6 cursor-default overflow-hidden"
            >
              {/* Borde izquierdo amarillo que crece en hover */}
              <motion.div
                className="absolute left-0 top-0 bottom-0 w-0.5 bg-brand-yellow origin-bottom"
                initial={{ scaleY: 0 }}
                whileHover={{ scaleY: 1 }}
                transition={{ duration: 0.25 }}
              />

              {/* Glow en hover */}
              <div className="absolute inset-0 bg-brand-yellow/0 group-hover:bg-brand-yellow/[0.04] transition-colors duration-300 rounded-2xl pointer-events-none" />

              {/* Ícono con fondo */}
              <div className="relative mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-zinc-700/60 group-hover:bg-brand-yellow/10 transition-colors duration-300">
                <span className="text-brand-yellow group-hover:scale-110 transition-transform duration-300 inline-block">
                  {f.icon}
                </span>
              </div>

              <h3 className="relative font-heading text-xl text-white uppercase mb-2 leading-tight group-hover:text-brand-yellow transition-colors duration-300">
                {f.title}
              </h3>
              <p className="relative text-zinc-400 text-sm leading-relaxed">
                {f.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
