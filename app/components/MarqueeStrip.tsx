const WORDS = [
  "FUNCIONAL",
  "RUNNING",
  "BETTER FC",
  "COMUNIDAD",
  "MAR DEL PLATA",
  "ENTRENAMIENTO",
  "FUERZA",
  "RESISTENCIA",
];

const text = WORDS.join("  ·  ") + "  ·  ";

export default function MarqueeStrip() {
  return (
    <div className="bg-brand-yellow overflow-hidden py-3 pause-marquee select-none">
      <div className="animate-marquee flex whitespace-nowrap">
        {/* Duplicado para loop sin corte */}
        <span className="font-heading text-zinc-950 text-xl tracking-wider mr-0">
          {text}{text}
        </span>
        <span className="font-heading text-zinc-950 text-xl tracking-wider">
          {text}{text}
        </span>
      </div>
    </div>
  );
}
