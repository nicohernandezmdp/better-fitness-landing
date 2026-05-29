'use client'

import { motion } from "framer-motion";
import { MapPin, Clock, Navigation } from "lucide-react";
import { BUSINESS_ADDRESS, MAPS_DIRECTIONS_URL, MAPS_EMBED_URL } from "../lib/constants";

export default function LocationSection() {
  return (
    <section id="ubicacion" className="py-24 bg-zinc-950 dark:bg-zinc-950 bg-zinc-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-brand-yellow font-bold text-sm uppercase tracking-widest">
            Ubicación
          </span>
          <h2 className="font-heading text-5xl sm:text-6xl text-white dark:text-white text-zinc-900 uppercase mt-2 leading-none">
            Encontranos en{" "}
            <span className="text-brand-yellow">Mar del Plata.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Mapa */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden border border-zinc-800 dark:border-zinc-800 border-zinc-200 shadow-xl shadow-black/30 h-[400px]"
          >
            <iframe
              src={MAPS_EMBED_URL}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Better Fitness Club en Google Maps"
            />
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-zinc-900 dark:bg-zinc-900 bg-white border border-zinc-800 dark:border-zinc-800 border-zinc-200 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <span className="text-brand-yellow shrink-0 mt-1"><MapPin size={22} /></span>
                <div>
                  <p className="text-zinc-400 text-xs uppercase tracking-wider mb-1">Dirección</p>
                  <p className="font-heading text-2xl text-white dark:text-white text-zinc-900 uppercase">
                    {BUSINESS_ADDRESS}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 dark:bg-zinc-900 bg-white border border-zinc-800 dark:border-zinc-800 border-zinc-200 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <span className="text-brand-yellow shrink-0 mt-1"><Clock size={22} /></span>
                <div className="space-y-3 w-full">
                  <p className="text-zinc-400 text-xs uppercase tracking-wider">Horarios</p>
                  <div className="flex justify-between items-center border-b border-zinc-800 dark:border-zinc-800 border-zinc-200 pb-3">
                    <span className="text-zinc-300 dark:text-zinc-300 text-zinc-700">Lunes a Viernes</span>
                    <span className="font-heading text-xl text-brand-yellow">7:00 – 21:30</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-300 dark:text-zinc-300 text-zinc-700">Sábados</span>
                    <span className="font-heading text-xl text-brand-yellow">9:00 – 13:00</span>
                  </div>
                </div>
              </div>
            </div>

            <a
              href={MAPS_DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-brand-yellow text-zinc-950 font-bold text-lg px-6 py-4 rounded-full hover:brightness-110 transition-all w-full"
            >
              <Navigation size={20} />
              Cómo llegar
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
