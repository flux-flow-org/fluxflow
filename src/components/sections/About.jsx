import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import { staggerContainer, scaleIn, viewportOnce } from "../../lib/animations";
import { DIFERENCIAIS } from "../../data/content";

export default function About() {
  return (
    <section id="sobre" className="relative bg-ink py-28 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="01 · Sobre"
          title="Tecnologia que se adapta — não o contrário."
          lead="Somos um time de engenheiros e designers obcecados por fluxo. Construímos sistemas que removem atrito do código à experiência — sob medida para cada negócio e prontos para escalar."
        />

        {/* Cards de diferenciais */}
        <motion.div
          variants={staggerContainer(0.14)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-16 grid gap-6 md:grid-cols-3"
        >
          {DIFERENCIAIS.map(({ icon: Icon, title, desc }) => (
            <motion.article
              key={title}
              variants={scaleIn}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="group relative overflow-hidden rounded-brand border border-line bg-ink-surface p-8 transition-shadow duration-300 hover:shadow-glow"
            >
              {/* Borda superior em gradiente — assinatura do brandbook */}
              <span className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-flux-purple to-transparent" />
              {/* Glow roxo no hover */}
              <span className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-flux-purple/0 blur-2xl transition-colors duration-500 group-hover:bg-flux-purple/20" />

              <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-flux-purple to-flux-deep text-ink shadow-glow-sm">
                <Icon size={26} strokeWidth={2} />
              </span>
              <h3 className="mt-6 font-display text-xl font-bold text-white">
                {title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-dim">{desc}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
