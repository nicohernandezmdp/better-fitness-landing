'use client'

import Image from "next/image";
import { motion } from "framer-motion";
import { Clock, MessageCircle, Zap } from "lucide-react";
import { WHATSAPP_URL } from "../lib/constants";

export default function ScheduleSection() {
  return (
    <section
      id="horarios"
      className="py-24 bg-zinc-900 dark:bg-zinc-900 relative overflow-hidden"
    >
      {/* Fondo decorativo */}
      <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-brand-yellow/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-yellow/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <span className="text-brand-yellow font-bold text-sm uppercase tracking-widest">
            Horarios
          </span>
          <h2 className="font-heading text-5xl sm:text-6xl text-white uppercase mt-2 leading-none">
            Amplios horarios para{" "}
            <span className="text-brand-yellow">entrenar cuando te quede cómodo.</span>
          </h2>
        </motion.div>

        {/* Resumen rápido */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10"
        >
          {[
            { label: "Lunes a Viernes", hours: "7:00 – 21:30 hs" },
            { label: "Sábados",         hours: "9:00 – 13:00 hs" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-4 bg-zinc-800 border border-zinc-700 hover:border-brand-yellow/50 transition-colors duration-300 rounded-2xl p-5"
            >
              <div className="text-brand-yellow shrink-0"><Clock size={28} /></div>
              <div>
                <p className="text-zinc-400 text-xs uppercase tracking-wider mb-0.5">
                  {item.label}
                </p>
                <p className="font-heading text-3xl text-white">{item.hours}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* ── Imagen de horarios con efectos premium ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative group mb-10 max-w-2xl mx-auto"
        >
          {/* Glow exterior */}
          <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-brand-yellow/60 via-brand-yellow/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm pointer-events-none" />

          {/* Contenedor principal */}
          <div className="relative rounded-2xl overflow-hidden border border-brand-yellow/30 group-hover:border-brand-yellow/70 transition-colors duration-500 shadow-2xl shadow-black/50">

            {/* Esquinas decorativas */}
            {[
              "top-0 left-0 border-t-2 border-l-2 rounded-tl-2xl",
              "top-0 right-0 border-t-2 border-r-2 rounded-tr-2xl",
              "bottom-0 left-0 border-b-2 border-l-2 rounded-bl-2xl",
              "bottom-0 right-0 border-b-2 border-r-2 rounded-br-2xl",
            ].map((cls, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.07 }}
                className={`absolute w-6 h-6 border-brand-yellow z-10 ${cls}`}
              />
            ))}

            {/* Imagen */}
            <div className="relative w-full">
              <Image
                src="/assets/better/horarios.jpg"
                alt="Horarios Better Fitness Club — Grilla semanal de clases"
                width={1200}
                height={600}
                className="w-full h-auto group-hover:brightness-110 transition-all duration-500"
                quality={90}
              />

              {/* Shine sweep en hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/8 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none" />
            </div>
          </div>

          {/* Badge lateral */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="absolute -right-9 top-1/2 -translate-y-1/2 hidden sm:flex items-center gap-2 bg-brand-yellow text-zinc-950 font-heading text-sm px-3 py-1.5 rounded-full shadow-lg shadow-brand-yellow/30 [writing-mode:vertical-rl] rotate-180"
          >
            <Zap size={13} fill="currentColor" />
            MÚLTIPLES FRANJAS
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-yellow text-zinc-950 font-bold px-6 py-3 rounded-full hover:brightness-110 transition-all shadow-lg shadow-brand-yellow/20"
          >
            <MessageCircle size={18} />
            Consultar disponibilidad por WhatsApp
          </a>
        </motion.div>

      </div>
    </section>
  );
}
