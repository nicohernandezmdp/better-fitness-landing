'use client'

import Image from "next/image";
import { motion } from "framer-motion";
import { Trophy, Users, ArrowRight } from "lucide-react";
import { WHATSAPP_URL } from "../lib/constants";

export default function BetterFCSection() {
  return (
    <section id="futbol" className="relative py-0">
      <div className="grid lg:grid-cols-2 overflow-hidden">
        {/* Contenido */}
        <div className="bg-zinc-900 flex items-center px-8 sm:px-12 lg:px-16 py-16 order-last lg:order-first">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="max-w-lg w-full"
          >
            <span className="text-brand-yellow font-bold text-sm uppercase tracking-widest">
              Fútbol
            </span>
            <h2 className="font-heading text-5xl sm:text-6xl text-white uppercase mt-2 mb-4 leading-none">
              Better FC:
              <br />
              <span className="text-brand-yellow">También somos equipo.</span>
            </h2>
            <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
              Better Fitness Club tiene su propio equipo de fútbol,{" "}
              <strong className="text-white">Better FC</strong>, que compite en
              torneos locales como Newbery Athletic. Una muestra más de la
              identidad deportiva y de comunidad que se vive dentro y fuera del
              gimnasio.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-zinc-800 border border-zinc-700 rounded-xl p-4 text-center">
                <Trophy size={24} className="text-brand-yellow mx-auto mb-2" />
                <p className="font-heading text-2xl text-white">Newbery Athletic</p>
                <p className="text-zinc-400 text-xs">Torneos locales</p>
              </div>
              <div className="bg-zinc-800 border border-zinc-700 rounded-xl p-4 text-center">
                <Users size={24} className="text-brand-yellow mx-auto mb-2" />
                <p className="font-heading text-2xl text-white">Comunidad</p>
                <p className="text-zinc-400 text-xs">Deporte y pertenencia</p>
              </div>
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-brand-yellow text-zinc-950 font-bold px-6 py-3 rounded-full hover:brightness-110 transition-all"
            >
              Quiero ser parte de la comunidad
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* Imagen */}
        <div className="relative h-72 lg:h-full lg:min-h-[620px]">
          <Image
            src="/assets/better/futbol-better-nuevo.jpg.jpg"
            fill
            alt="Better FC — Equipo de fútbol de Better Fitness Club"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-black/10 to-black/40 lg:bg-gradient-to-r" />
          <div className="absolute top-6 right-6 bg-brand-yellow text-zinc-950 font-heading text-2xl px-4 py-2 rounded-xl shadow-lg">
            BETTER FC
          </div>
        </div>
      </div>
    </section>
  );
}
