import { motion } from "framer-motion";
import Counter from "../ui/Counter";
import { staggerContainer, fadeUp, viewportOnce } from "../../lib/animations";
import { METRICAS } from "../../data/content";

export default function WhyFluxFlow() {
  return (
    <section id="por-que" className="relative overflow-hidden bg-ink py-28 sm:py-32">
      {/* Glow central de fundo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-flux-deep/15 blur-[130px]"
      />

      <div className="relative mx-auto max-w-6xl px-6 text-center">
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <motion.span variants={fadeUp} className="eyebrow justify-center">
            04 · Por que a FluxFlow
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mx-auto mt-6 max-w-2xl font-display text-4xl font-extrabold tracking-tightest text-white sm:text-5xl"
          >
            Números que falam por nós
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-5 max-w-xl text-lg text-dim"
          >
            Acelerando o amanhã. Engenharia de fluxo inteligente e inovação contínua para transformar o seu negócio hoje.
          </motion.p>
        </motion.div>

        {/* Métricas com separadores verticais */}
        <motion.dl
          variants={staggerContainer(0.13, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-16 grid grid-cols-2 gap-y-12 rounded-brand border border-line bg-ink-surface/40 py-12 backdrop-blur sm:gap-y-0 lg:grid-cols-4"
        >
          {METRICAS.map((m, i) => (
            <motion.div
              key={m.label}
              variants={fadeUp}
              className={`flex flex-col items-center px-6 ${
                i !== 0 ? "lg:border-l lg:border-line" : ""
              } ${i % 2 !== 0 ? "border-l border-line lg:border-l" : ""}`}
            >
              <dd className="font-display text-5xl font-extrabold tracking-tightest text-gradient sm:text-6xl">
                <Counter
                  value={m.value}
                  suffix={m.suffix}
                  decimals={m.decimals || 0}
                />
              </dd>
              <dt className="mt-3 text-sm font-medium tracking-wide text-dim">
                {m.label}
              </dt>
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
