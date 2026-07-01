import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import { staggerContainer, fadeUp, viewportOnce } from "../../lib/animations";
import { PROCESSO } from "../../data/content";

export default function Process() {
  return (
    <section id="processo" className="relative overflow-hidden bg-ink py-20 sm:py-28 lg:py-32">
      {/* Glow lateral sutil */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-flux-deep/15 blur-[120px]"
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeading
          eyebrow="03 · Processo"
          title="Do fluxo à entrega, com precisão"
          lead="Um método fluido e transparente. Você acompanha cada etapa , sem caixa-preta, sem surpresas."
        />

        <motion.ol
          variants={staggerContainer(0.14)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative mt-12 grid grid-cols-1 gap-5 sm:mt-16 sm:gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {/* Linha de fluxo conectando as etapas (desktop) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-0 right-0 top-[34px] hidden h-px bg-gradient-to-r from-transparent via-flux-purple/40 to-transparent lg:block"
          />

          {PROCESSO.map(({ icon: Icon, step, title, desc }) => (
            <motion.li
              key={step}
              variants={fadeUp}
              className="group relative rounded-brand border border-line bg-ink-surface/60 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:border-flux-purple/50 hover:shadow-glow sm:p-7"
            >
              <div className="flex items-center justify-between">
                <span className="relative flex h-[68px] w-[68px] items-center justify-center rounded-2xl bg-gradient-to-br from-flux-purple to-flux-deep text-ink shadow-glow-sm">
                  <Icon size={28} strokeWidth={2} />
                </span>
                <span className="font-display text-4xl font-extrabold text-white/10 transition-colors duration-300 group-hover:text-flux-purple/30">
                  {step}
                </span>
              </div>
              <h3 className="mt-6 font-display text-lg font-bold text-white">
                {title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-dim">{desc}</p>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
