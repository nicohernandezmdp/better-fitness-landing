import Image from "next/image";
import { MapPin, Clock, MessageCircle } from "lucide-react";

function InstagramIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}
import { WHATSAPP_URL, INSTAGRAM_URL, BUSINESS_ADDRESS, MAPS_DIRECTIONS_URL } from "../lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-zinc-800 dark:border-zinc-800 border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Marca */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-12 h-12 shrink-0">
                <Image
                  src="/assets/better/better_fitness_logo_4k_full.png"
                  fill
                  alt="Better Fitness Club"
                  className="object-contain"
                />
              </div>
              <div>
                <p className="font-heading text-2xl text-white uppercase">Better Fitness</p>
                <p className="font-heading text-sm text-brand-yellow uppercase tracking-wider">Club</p>
              </div>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-xs">
              Centro de entrenamiento integral en Mar del Plata. Funcional, running,
              comunidad deportiva y Better FC.
            </p>
          </div>

          {/* Información */}
          <div>
            <h3 className="font-heading text-xl text-white uppercase mb-5 tracking-wide">Información</h3>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li className="flex items-start gap-2">
                <MapPin size={15} className="text-brand-yellow shrink-0 mt-0.5" />
                <a
                  href={MAPS_DIRECTIONS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-yellow transition-colors"
                >
                  {BUSINESS_ADDRESS}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock size={15} className="text-brand-yellow shrink-0 mt-0.5" />
                <span>Lun–Vie: 7:00 – 21:30 hs</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock size={15} className="text-brand-yellow shrink-0 mt-0.5" />
                <span>Sábados: 9:00 – 13:00 hs</span>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-heading text-xl text-white uppercase mb-5 tracking-wide">Contacto</h3>
            <div className="flex flex-col gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-zinc-400 hover:text-brand-yellow transition-colors text-sm"
              >
                <MessageCircle size={15} className="text-brand-yellow" />
                WhatsApp
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-zinc-400 hover:text-brand-yellow transition-colors text-sm"
              >
                <span className="text-brand-yellow"><InstagramIcon /></span>
                @better.fitness.club
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-zinc-900 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-zinc-600">
          <span>© {year} Better Fitness Club · Mar del Plata, Buenos Aires</span>
          <span>⭐ 4.8 en Google · +113 reseñas</span>
        </div>
      </div>
    </footer>
  );
}
