import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import { EASE } from "../../lib/animations";
import { DEPOIMENTOS } from "../../data/content";

const variants = {
  enter: (dir) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
  center: { opacity: 1, x: 0 },
  exit: (dir) => ({ opacity: 0, x: dir > 0 ? -60 : 60 }),
};

export default function Testimonials() {
  const [[index, dir], setState] = useState([0, 0]);
  const reduce = useReducedMotion();
  const count = DEPOIMENTOS.length;

  const paginate = useCallback(
    (step) => {
      setState(([i]) => [(i + step + count) % count, step]);
    },
    [count]
  );

  const goTo = (i) => setState(([cur]) => [i, i > cur ? 1 : -1]);

  // Auto-advance (pausa em reduced-motion).
  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => paginate(1), 6000);
    return () => clearInterval(id);
  }, [paginate, reduce, index]);

  const current = DEPOIMENTOS[index];

  return (
    <section id="depoimentos" className="relative bg-ink-bg py-28 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="05 · Depoimentos"
          title="Quem flui com a gente"
          lead="A confiança dos nossos clientes é o melhor indicador de que o fluxo funciona."
          align="center"
        />

        <div className="relative mx-auto mt-16 max-w-3xl">
          <div className="relative min-h-[20rem] sm:min-h-[16rem]">
            <AnimatePresence custom={dir} mode="wait">
              <motion.figure
                key={index}
                custom={dir}
                variants={reduce ? undefined : variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: EASE }}
                className="glass absolute inset-0 flex flex-col justify-between rounded-brand p-8 sm:p-10"
              >
                <Quote
                  size={40}
                  className="text-flux-purple/40"
                  aria-hidden="true"
                />
                <blockquote className="mt-4 font-display text-xl font-semibold leading-relaxed text-white sm:text-2xl">
                  “{current.quote}”
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-4">
                  <span className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-gradient-to-br from-flux-purple to-flux-deep font-display text-sm font-bold text-ink">
                    {current.initials}
                  </span>
                  <span>
                    <span className="block font-semibold text-white">
                      {current.name}
                    </span>
                    <span className="block text-sm text-dim">
                      {current.role}
                    </span>
                  </span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          {/* Controles */}
          <div className="mt-8 flex items-center justify-center gap-6">
            <button
              type="button"
              onClick={() => paginate(-1)}
              aria-label="Depoimento anterior"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-body transition-colors hover:border-flux-purple/60 hover:text-flux-purple"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex items-center gap-2.5" role="tablist" aria-label="Selecionar depoimento">
              {DEPOIMENTOS.map((d, i) => (
                <button
                  key={d.name}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Ir para depoimento ${i + 1}`}
                  onClick={() => goTo(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === index
                      ? "w-7 bg-flux-purple"
                      : "w-2 bg-dim/40 hover:bg-dim"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => paginate(1)}
              aria-label="Próximo depoimento"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-body transition-colors hover:border-flux-purple/60 hover:text-flux-purple"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
