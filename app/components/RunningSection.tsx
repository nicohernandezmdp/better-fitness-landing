'use client'

import Image from "next/image";
import { motion } from "framer-motion";
import { Check, MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "../lib/constants";

const FEATURES = [
  "Salidas grupales por la costa y parques de Mar del Plata",
  "Martes y jueves a las 18 hs",
  "Ideal para mejorar resistencia y capacidad aeróbica",
  "Acompañamiento y motivación del grupo",
  "Ambiente social y deportivo fuera del gimnasio",
  "Apto para todos los niveles de condición física",
];

export default function RunningSection() {
  return (
    <section id="running" className="relative py-0">
      <div className="grid lg:grid-cols-2 overflow-hidden">
        {/* Imagen */}
        <div className="relative h-72 lg:h-full lg:min-h-[620px] order-first">
          <Image
            src="/assets/better/running-real.jpg.jpg"
            fill
            alt="Running al aire libre en Mar del Plata — Better Fitness Club"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-black/60 lg:bg-gradient-to-l" />
        </div>

        {/* Contenido */}
        <div className="bg-zinc-950 flex items-center px-8 sm:px-12 lg:px-16 py-16">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="max-w-lg w-full"
          >
            <span className="text-brand-yellow font-bold text-sm uppercase tracking-widest">
              Running
            </span>
            <h2 className="font-heading text-5xl sm:text-6xl text-white uppercase mt-2 mb-4 leading-none">
              Running al aire libre
            </h2>
            <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
              Entrená por la costa, parques y espacios abiertos de Mar del Plata
              junto a la comunidad Better. Dos veces por semana, al aire libre.
            </p>

            {/* Highlight horario */}
            <div className="bg-brand-yellow/10 border border-brand-yellow/30 rounded-xl px-5 py-3 mb-8 inline-flex items-center gap-3">
              <span className="text-brand-yellow font-bold text-2xl font-heading">18:00 hs</span>
              <div>
                <p className="text-white font-semibold text-sm">Martes y Jueves</p>
                <p className="text-zinc-400 text-xs">Salida grupal</p>
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              {FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span className="text-brand-yellow mt-0.5 shrink-0">
                    <Check size={16} />
                  </span>
                  <span className="text-zinc-300 text-sm">{f}</span>
                </li>
              ))}
            </ul>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-yellow text-zinc-950 font-bold px-6 py-3 rounded-full hover:brightness-110 transition-all"
            >
              <MessageCircle size={18} />
              Sumarme al running
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
