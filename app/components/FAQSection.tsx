'use client'

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { WHATSAPP_URL, BUSINESS_ADDRESS } from "../lib/constants";

const FAQS = [
  {
    q: "¿Dónde queda Better Fitness Club?",
    a: `En ${BUSINESS_ADDRESS}. En el centro de Mar del Plata, fácil acceso en transporte o en auto.`,
  },
  {
    q: "¿Qué horarios tienen?",
    a: "Lunes a viernes de 7:00 a 21:30 hs y sábados de 9:00 a 13:00 hs. Hay múltiples franjas horarias para funcional a lo largo del día.",
  },
  {
    q: "¿Qué actividades ofrecen?",
    a: "Entrenamiento funcional (el más completo del menú), running al aire libre (martes y jueves 18 hs), comunidad deportiva y el equipo de fútbol Better FC.",
  },
  {
    q: "¿Puedo consultar por WhatsApp antes de inscribirme?",
    a: "Sí, podés escribirnos desde los botones de la página y te respondemos con toda la info: precios, clases de prueba y disponibilidad.",
  },
  {
    q: "¿El running es al aire libre?",
    a: "Sí. Las salidas grupales se realizan por espacios abiertos de Mar del Plata, como la costa y parques. Son martes y jueves a las 18 hs.",
  },
  {
    q: "¿Tengo que tener experiencia para empezar?",
    a: "No. Los entrenamientos de funcional se adaptan a distintos niveles. Podés empezar sin experiencia previa.",
  },
];

function FAQItem({ faq, isOpen, onToggle }: { faq: { q: string; a: string }; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-zinc-800 dark:border-zinc-800 border-zinc-200">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-white dark:text-white text-zinc-900 group-hover:text-brand-yellow transition-colors text-base">
          {faq.q}
        </span>
        <ChevronDown
          size={18}
          className={`text-brand-yellow shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-zinc-400 dark:text-zinc-400 text-zinc-600 pb-5 text-sm leading-relaxed pr-8">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="py-24 bg-zinc-950 dark:bg-zinc-950 bg-zinc-50 overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="text-brand-yellow font-bold text-sm uppercase tracking-widest">
            Preguntas frecuentes
          </span>
          <h2 className="font-heading text-5xl sm:text-6xl text-white dark:text-white text-zinc-900 uppercase mt-2 leading-none">
            Preguntas{" "}
            <span className="text-brand-yellow">frecuentes.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-zinc-900 dark:bg-zinc-900 bg-white border border-zinc-800 dark:border-zinc-800 border-zinc-200 rounded-2xl px-6 mb-8"
        >
          {FAQS.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </motion.div>

        <p className="text-center text-zinc-400 dark:text-zinc-400 text-zinc-600 text-sm">
          ¿Otra consulta?{" "}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-yellow font-semibold hover:underline"
          >
            Escribinos por WhatsApp
          </a>
        </p>
      </div>
    </section>
  );
}
