'use client'

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Dumbbell, Activity, Trophy, Users, ArrowRight, Zap } from "lucide-react";
import { WHATSAPP_URL } from "../lib/constants";

const ACTIVITIES = [
  {
    id: "musculacion",
    icon: <Zap size={24} />,
    title: "Musculación",
    subtitle: "Salón completo con máquinas",
    text: "Zona equipada con máquinas y pesos libres para trabajar cada grupo muscular. El espacio principal del club, pensado para quienes van a entrenar en serio.",
    image: "/assets/better/musculacion.jpg",
    tag: "Todos los días",
  },
  {
    id: "actividades",
    icon: <Dumbbell size={24} />,
    title: "Funcional",
    subtitle: "Entrenamiento de alta intensidad",
    text: "Clases dinámicas para trabajar fuerza, resistencia, coordinación y movilidad. Adaptables a distintos niveles. Múltiples horarios de lunes a sábado.",
    image: "/assets/better/gym-4.jpg",
    tag: "Todos los días",
  },
  {
    id: "running",
    icon: <Activity size={24} />,
    title: "Running",
    subtitle: "Al aire libre en Mar del Plata",
    text: "Salidas grupales por los espacios abiertos de la ciudad. Mejorá tu resistencia, sumá constancia y entrenó en comunidad.",
    image: "/assets/better/running-real.jpg.jpg",
    tag: "Mar y Jue · 18 hs",
  },
  {
    id: "futbol",
    icon: <Trophy size={24} />,
    title: "Better FC",
    subtitle: "Equipo de fútbol propio",
    text: "Nuestro equipo participa en torneos locales como Newbery Athletic. Deporte, competencia y comunidad fuera del gimnasio.",
    image: "/assets/better/betterfc-team.png",
    tag: "Torneos locales",
  },
  {
    id: "comunidad",
    icon: <Users size={24} />,
    title: "Comunidad",
    subtitle: "Entrenar no es solo sudar",
    text: "Sumate a un grupo que se acompaña y se motiva. La constancia es más fácil cuando entrenás rodeado de gente comprometida.",
    image: "/assets/better/comunidad.png",
    tag: "+10.900 seguidores",
  },
];

function ActivityCard({ act, index }: { act: typeof ACTIVITIES[0]; index: number }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -10;
    setTilt({ x, y });
  };
  const handleLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div
        id={act.id}
        style={{
          transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
          transition: tilt.x === 0 ? "transform 0.5s ease" : "transform 0.1s ease",
        }}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className="group relative overflow-hidden rounded-2xl bg-zinc-900 dark:bg-zinc-900 bg-zinc-100 border border-zinc-800 dark:border-zinc-800 border-zinc-200 h-[420px] cursor-default"
      >
        {/* Imagen */}
        <div className="absolute inset-0">
          <Image
            src={act.image}
            fill
            alt={act.title}
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
        </div>

        {/* Contenido */}
        <div className="absolute inset-0 flex flex-col justify-between p-6 z-10">
          {/* Tag */}
          <div className="flex justify-between items-start">
            <span className="bg-brand-yellow text-zinc-950 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
              {act.tag}
            </span>
            <span className="text-brand-yellow">{act.icon}</span>
          </div>

          {/* Bottom */}
          <div>
            <h3 className="font-heading text-4xl text-white uppercase mb-1">{act.title}</h3>
            <p className="text-zinc-400 text-xs uppercase tracking-widest mb-2">
              {act.subtitle}
            </p>
            <p className="text-zinc-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-h-0 group-hover:max-h-32 overflow-hidden">
              {act.text}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ActivitiesSection() {
  return (
    <section className="py-24 bg-zinc-950 dark:bg-zinc-950 bg-zinc-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-yellow/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4"
        >
          <div>
            <span className="text-brand-yellow font-bold text-sm uppercase tracking-widest">
              Lo que hacemos
            </span>
            <h2 className="font-heading text-5xl sm:text-6xl text-white dark:text-white text-zinc-900 uppercase mt-2 leading-none">
              Actividades
            </h2>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-brand-yellow font-semibold hover:gap-3 transition-all duration-200 shrink-0"
          >
            Consultar por WhatsApp
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {ACTIVITIES.map((act, i) => (
            <ActivityCard key={act.id} act={act} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
