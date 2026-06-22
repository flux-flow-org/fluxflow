import { useReducedMotion } from "framer-motion";

/**
 * Fundo tech animado do hero: grade pontilhada + orbes de glow à deriva +
 * linhas "flux" fluindo (SVG com stroke-dashoffset animado via CSS).
 * Apenas transform/opacity/stroke-dashoffset → sem layout thrashing.
 * aria-hidden: decorativo, fora da árvore de acessibilidade.
 */
export default function AnimatedBackground() {
  const reduce = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Base radial sutil */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_28%,rgba(176,142,239,0.16),transparent_45%)]" />

      {/* Grade pontilhada com máscara de desvanecimento */}
      <div className="tech-grid absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

      {/* Orbes de glow à deriva */}
      <div
        className={`absolute -right-24 -top-28 h-[34rem] w-[34rem] rounded-full bg-flux-purple/25 blur-[120px] ${
          reduce ? "" : "animate-drift-a"
        }`}
      />
      <div
        className={`absolute -bottom-40 left-[-6rem] h-[26rem] w-[26rem] rounded-full bg-flux-deep/20 blur-[120px] ${
          reduce ? "" : "animate-drift-b"
        }`}
      />

      {/* Linhas fluidas — o "flux" contínuo */}
      <svg
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="none"
        viewBox="0 0 1200 800"
        fill="none"
      >
        <defs>
          <linearGradient id="fluxLine" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#8B5FD6" stopOpacity="0" />
            <stop offset="50%" stopColor="#B08EEF" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#C9B2F4" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[
          { d: "M-50,180 C300,80 560,300 900,180 1100,120 1300,260 1300,260", o: 0.55 },
          { d: "M-50,360 C260,260 620,480 980,360 1160,300 1300,420 1300,420", o: 0.35 },
          { d: "M-50,540 C320,460 600,640 940,520 1140,460 1300,560 1300,560", o: 0.22 },
        ].map((line, i) => (
          <path
            key={i}
            d={line.d}
            stroke="url(#fluxLine)"
            strokeWidth="1.5"
            strokeOpacity={line.o}
            strokeDasharray="14 22"
            className={reduce ? "" : "animate-flow-dash"}
            style={{ animationDelay: `${i * -1.4}s`, animationDuration: `${7 + i * 2}s` }}
          />
        ))}
      </svg>

      {/* Vinheta inferior para transição com a próxima seção */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-ink-bg" />
    </div>
  );
}
