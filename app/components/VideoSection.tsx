'use client'

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

export default function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !muted;
      setMuted(!muted);
    }
  };

  return (
    <section className="py-24 bg-zinc-900 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="text-brand-yellow font-bold text-sm uppercase tracking-widest">
            Conocé Better
          </span>
          <h2 className="font-heading text-5xl sm:text-6xl text-white uppercase mt-2 leading-none">
            Conocé Better{" "}
            <span className="text-brand-yellow">por dentro.</span>
          </h2>
          <p className="text-zinc-400 text-lg mt-4 max-w-xl mx-auto">
            Un vistazo al espacio, la gente y la energía que hacen de Better
            mucho más que un lugar para entrenar.
          </p>
        </motion.div>

        {/* Video container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative rounded-2xl overflow-hidden border border-zinc-700 shadow-2xl shadow-black/60 group"
        >
          <video
            ref={videoRef}
            src="/assets/better/gym-video.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-auto max-h-[70vh] object-cover"
          />

          {/* Overlay sutil en los bordes */}
          <div className="absolute inset-0 ring-inset ring-1 ring-white/5 rounded-2xl pointer-events-none" />

          {/* Botón de mute/unmute */}
          <button
            onClick={toggleMute}
            aria-label={muted ? "Activar sonido" : "Silenciar"}
            className="absolute bottom-4 right-4 flex items-center gap-2 bg-zinc-950/70 backdrop-blur-sm border border-zinc-700 text-white text-xs font-semibold px-3 py-2 rounded-full hover:border-brand-yellow hover:text-brand-yellow transition-all duration-200"
          >
            {muted ? <VolumeX size={15} /> : <Volume2 size={15} />}
            {muted ? "Activar sonido" : "Silenciar"}
          </button>

          {/* Badge Better */}
          <div className="absolute top-4 left-4 bg-brand-yellow text-zinc-950 font-heading text-sm px-3 py-1 rounded-full shadow-lg">
            BETTER FITNESS CLUB
          </div>
        </motion.div>
      </div>
    </section>
  );
}
