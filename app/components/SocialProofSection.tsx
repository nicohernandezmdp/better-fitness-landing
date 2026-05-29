'use client'

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { MessageCircle, Star } from "lucide-react";

function GoogleIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}
import { INSTAGRAM_URL, WHATSAPP_URL } from "../lib/constants";

function StarRating({ rating, max = 5 }: { rating: number; max?: number }) {
  return (
    <div className="flex items-center justify-center gap-1 mb-3">
      {Array.from({ length: max }).map((_, i) => {
        const fill = Math.min(Math.max(rating - i, 0), 1);
        return (
          <div key={i} className="relative w-6 h-6 shrink-0">
            {/* Estrella vacía */}
            <Star size={24} className="text-zinc-700 absolute inset-0" />
            {/* Estrella rellena (parcial usando clip por ancho) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${fill * 100}%` }}
            >
              <Star size={24} className="text-brand-yellow fill-brand-yellow absolute inset-0" />
            </div>
          </div>
        );
      })}
    </div>
  );
}

function Counter({
  end,
  decimals = 0,
  prefix = "",
  suffix = "",
}: {
  end: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
}) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const duration = 1800;
    const startTime = Date.now();
    const step = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(parseFloat((eased * end).toFixed(decimals)));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, end, decimals]);

  return (
    <span ref={ref}>
      {prefix}{value.toFixed(decimals)}{suffix}
    </span>
  );
}

const STATS = [
  {
    value: 4.8,
    decimals: 1,
    suffix: "",
    label: "en Google",
    sublabel: "Calificación promedio",
    icon: <GoogleIcon />,
    stars: 4.8,
  },
  {
    value: 113,
    decimals: 0,
    prefix: "+",
    label: "reseñas",
    sublabel: "En Google Maps",
    icon: <MessageCircle size={20} className="text-brand-yellow" />,
  },
  {
    value: 10900,
    decimals: 0,
    prefix: "+",
    label: "seguidores",
    sublabel: "En Instagram",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-brand-yellow">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
];

export default function SocialProofSection() {
  return (
    <section className="py-24 bg-zinc-950 dark:bg-zinc-950 bg-zinc-50 relative overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
        <span className="font-heading text-[20vw] text-brand-yellow leading-none select-none">
          BETTER
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-brand-yellow font-bold text-sm uppercase tracking-widest">
            Reputación
          </span>
          <h2 className="font-heading text-5xl sm:text-6xl text-white dark:text-white text-zinc-900 uppercase mt-2 leading-none">
            La comunidad habla
            <br />
            <span className="text-brand-yellow">por sí sola.</span>
          </h2>
          <p className="text-zinc-400 dark:text-zinc-400 text-zinc-600 text-lg mt-4 max-w-xl mx-auto">
            Better no es solo un lugar para entrenar: es una comunidad en crecimiento
            que se construye con constancia, esfuerzo y buena energía.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          {STATS.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-zinc-900 dark:bg-zinc-900 bg-white border border-zinc-800 dark:border-zinc-800 border-zinc-200 rounded-2xl p-8 text-center group hover:border-brand-yellow/50 transition-colors duration-300"
            >
              <div className="flex justify-center mb-4">{s.icon}</div>
              {"stars" in s && s.stars && (
                <StarRating rating={s.stars} />
              )}
              <div className="font-heading text-6xl sm:text-7xl text-brand-yellow leading-none mb-2">
                <Counter
                  end={s.value}
                  decimals={s.decimals}
                  prefix={s.prefix}
                  suffix={s.suffix}
                />
              </div>
              <p className="font-semibold text-white dark:text-white text-zinc-900 text-lg mb-1">{s.label}</p>
              <p className="text-zinc-400 text-sm">{s.sublabel}</p>
            </motion.div>
          ))}
        </div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-brand-yellow text-zinc-950 font-bold px-8 py-4 rounded-full hover:brightness-110 transition-all"
          >
            Quiero empezar a entrenar
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border-2 border-zinc-700 text-zinc-300 font-bold px-8 py-4 rounded-full hover:border-brand-yellow hover:text-brand-yellow transition-all"
          >
            Ver Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
}
