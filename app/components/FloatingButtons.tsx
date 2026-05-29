'use client'

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Navigation } from "lucide-react";
import { WHATSAPP_URL, MAPS_DIRECTIONS_URL } from "../lib/constants";

export default function FloatingButtons() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-4 z-50 flex flex-col gap-3"
        >
          {/* Cómo llegar */}
          <a
            href={MAPS_DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Cómo llegar"
            className="group flex items-center gap-0 overflow-hidden bg-zinc-800 text-white p-3.5 rounded-full shadow-lg shadow-black/40 hover:gap-2 hover:px-4 transition-all duration-300 hover:bg-zinc-700"
          >
            <Navigation size={18} />
            <span className="max-w-0 group-hover:max-w-xs overflow-hidden whitespace-nowrap text-sm font-medium transition-all duration-300">
              Cómo llegar
            </span>
          </a>

          {/* WhatsApp */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Consultar por WhatsApp"
            className="group flex items-center gap-0 overflow-hidden bg-green-500 text-white p-3.5 rounded-full shadow-lg shadow-green-500/30 hover:gap-2 hover:px-4 transition-all duration-300 hover:bg-green-600"
          >
            <MessageCircle size={18} />
            <span className="max-w-0 group-hover:max-w-xs overflow-hidden whitespace-nowrap text-sm font-medium transition-all duration-300">
              WhatsApp
            </span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
