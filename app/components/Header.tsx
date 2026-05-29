'use client'

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Menu, X, MessageCircle, Home, Dumbbell,
  Clock, Activity, Trophy, MapPin, Phone, ArrowRight,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { WHATSAPP_URL, INSTAGRAM_URL } from "../lib/constants";

const NAV_LINKS = [
  { label: "Inicio",      href: "#inicio",      icon: <Home size={16} /> },
  { label: "Actividades", href: "#actividades",  icon: <Dumbbell size={16} /> },
  { label: "Horarios",    href: "#horarios",     icon: <Clock size={16} /> },
  { label: "Running",     href: "#running",      icon: <Activity size={16} /> },
  { label: "Fútbol",      href: "#futbol",       icon: <Trophy size={16} /> },
  { label: "Ubicación",   href: "#ubicacion",    icon: <MapPin size={16} /> },
  { label: "Contacto",    href: "#contacto",     icon: <Phone size={16} /> },
];

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = () => setOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-zinc-950/95 backdrop-blur-md shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-3 shrink-0">
            <div className="relative w-16 h-16">
              <Image
                src="/assets/better/better_fitness_logo_4k_full.png"
                fill alt="Better Fitness Club"
                className="object-contain"
                priority
              />
            </div>
            <span className="font-heading text-3xl text-white hidden sm:block tracking-wide">
              BETTER FITNESS
            </span>
          </a>

          {/* Nav desktop */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((l) => (
              <motion.a
                key={l.href}
                href={l.href}
                whileHover={{ y: -1 }}
                transition={{ duration: 0.15 }}
                className="relative px-3 py-2 text-lg font-medium text-zinc-300 hover:text-brand-yellow transition-colors rounded-md group overflow-hidden"
              >
                <motion.span
                  className="absolute bottom-0 left-0 h-px bg-brand-yellow origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                  style={{ width: "100%" }}
                />
                {l.label}
              </motion.a>
            ))}
          </nav>

          {/* Acciones */}
          <div className="flex items-center gap-3">
            {/* Botón WA con pulso */}
            <div className="relative hidden sm:block">
              {/* Anillo pulsante */}
              <motion.div
                className="absolute inset-0 rounded-full bg-brand-yellow"
                animate={{ scale: [1, 1.18, 1], opacity: [0.45, 0, 0.45] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              />
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center gap-2 bg-brand-yellow text-zinc-950 font-bold px-5 py-2.5 rounded-full hover:brightness-110 transition-all text-base shadow-lg shadow-brand-yellow/25"
              >
                <MessageCircle size={17} />
                Quiero empezar
              </a>
            </div>
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 text-white hover:text-brand-yellow transition-colors"
              aria-label="Menú"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* ── Menú mobile rediseñado ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] lg:hidden flex flex-col overflow-hidden"
          >
            {/* Fondo: imagen gym + overlay */}
            <div className="absolute inset-0">
              <Image
                src="/assets/better/hero-gym.jpg"
                fill alt=""
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-zinc-950/92" />
            </div>

            {/* Marca de agua */}
            <div
              className="absolute bottom-0 right-0 font-heading leading-none select-none pointer-events-none text-white/[0.04]"
              style={{ fontSize: "38vw" }}
            >
              BFC
            </div>

            {/* Barra superior del menú */}
            <div className="relative z-10 flex items-center justify-between px-5 pt-5 pb-4">
              <div className="flex items-center gap-2">
                <div className="relative w-8 h-8">
                  <Image
                    src="/assets/better/better_fitness_logo_4k_full.png"
                    fill alt="Logo"
                    className="object-contain"
                  />
                </div>
                <span className="font-heading text-brand-yellow text-sm tracking-widest">
                  BETTER FITNESS
                </span>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-zinc-400 hover:text-white transition-colors p-1"
                aria-label="Cerrar menú"
              >
                <X size={22} />
              </button>
            </div>

            {/* Línea decorativa */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="relative z-10 mx-5 h-px bg-gradient-to-r from-brand-yellow via-brand-yellow/40 to-transparent origin-left"
            />

            {/* Links */}
            <nav className="relative z-10 flex-1 px-5 py-2 overflow-y-auto">
              {NAV_LINKS.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={handleNavClick}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  whileHover={{ x: 6, transition: { duration: 0.18 } }}
                  transition={{ delay: 0.12 + i * 0.07, ease: "easeOut" }}
                  className="group relative flex items-center gap-4 py-3.5 border-b border-zinc-800/50 hover:border-brand-yellow/40 transition-colors overflow-hidden"
                >
                  {/* Fondo amarillo que entra desde la izquierda */}
                  <motion.span
                    className="absolute inset-0 bg-brand-yellow/5 origin-left pointer-events-none"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.25 }}
                  />

                  {/* Ícono */}
                  <span className="relative text-zinc-500 group-hover:text-brand-yellow transition-colors duration-200 shrink-0">
                    {l.icon}
                  </span>

                  {/* Texto */}
                  <span className="relative font-heading text-3xl text-white group-hover:text-brand-yellow transition-colors duration-200 flex-1 leading-none">
                    {l.label.toUpperCase()}
                  </span>

                  {/* Flecha */}
                  <ArrowRight
                    size={16}
                    className="relative text-zinc-700 group-hover:text-brand-yellow transition-colors duration-200 shrink-0"
                  />
                </motion.a>
              ))}
            </nav>

            {/* Footer del menú */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="relative z-10 px-5 pb-8 pt-4 space-y-3"
            >
              {/* Línea degradada */}
              <div className="h-px bg-gradient-to-r from-brand-yellow/60 to-transparent mb-5" />

              {/* WhatsApp */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleNavClick}
                className="flex items-center justify-center gap-2 w-full bg-brand-yellow text-zinc-950 font-bold py-4 rounded-full text-base shadow-lg shadow-brand-yellow/20"
              >
                <MessageCircle size={18} />
                Consultar por WhatsApp
              </a>

              {/* Instagram */}
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleNavClick}
                className="flex items-center justify-center gap-2 w-full border border-zinc-700 text-zinc-400 hover:text-brand-yellow hover:border-brand-yellow/50 transition-colors font-semibold py-3 rounded-full text-sm"
              >
                <InstagramIcon />
                @better.fitness.club
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
