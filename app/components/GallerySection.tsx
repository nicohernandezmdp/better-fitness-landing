'use client'

import Image from "next/image";
import { motion } from "framer-motion";

const IMAGES = [
  { src: "/assets/better/gym-1.jpg",        alt: "Instalaciones Better Fitness Club",       wide: false },
  { src: "/assets/better/gym-2.jpg",        alt: "Entrenamiento funcional",                  wide: true  },
  { src: "/assets/better/gym-3.jpg",        alt: "Entrenamiento en grupo",                   wide: false },
  { src: "/assets/better/gym-4.jpg",        alt: "Equipamiento del gimnasio",                wide: false },
  { src: "/assets/better/running.jpg",      alt: "Running al aire libre Mar del Plata",      wide: true  },
  { src: "/assets/better/gym-5.jpg",        alt: "Interior Better Fitness Club",             wide: false },
  { src: "/assets/better/futbol-better.jpg",alt: "Better FC — Equipo de fútbol",             wide: false },
  { src: "/assets/better/cartel-entrada.jpg",alt: "Entrada Better Fitness Club",             wide: false },
  { src: "/assets/better/entrada-gym.jpeg", alt: "Frente del gimnasio",                      wide: false },
];

export default function GallerySection() {
  return (
    <section className="py-24 bg-zinc-900 dark:bg-zinc-900 bg-zinc-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-brand-yellow font-bold text-sm uppercase tracking-widest">
            Galería
          </span>
          <h2 className="font-heading text-5xl sm:text-6xl text-white dark:text-white text-zinc-900 uppercase mt-2 leading-none">
            Así se vive{" "}
            <span className="text-brand-yellow">Better.</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 auto-rows-[200px]">
          {IMAGES.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className={`relative overflow-hidden rounded-xl group ${
                img.wide ? "col-span-2" : "col-span-1"
              }`}
            >
              <Image
                src={img.src}
                fill
                alt={img.alt}
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              {/* Overlay en hover */}
              <div className="absolute inset-0 bg-brand-yellow/0 group-hover:bg-brand-yellow/20 transition-colors duration-400" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-3 left-3 right-3 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-white text-xs font-medium truncate">{img.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
