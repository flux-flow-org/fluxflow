import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import { staggerContainer, fadeUp, viewportOnce } from "../../lib/animations";
import { SERVICOS } from "../../data/content";

export default function Services() {
  return (
    <section id="servicos" className="relative bg-ink-bg py-28 sm:py-32">
      {/* Grade tech sutil ao fundo */}
      <div
        aria-hidden="true"
        className="tech-grid pointer-events-none absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="02 · Serviços"
          title="O que construímos para você"
          lead="Do produto digital ao sistema interno, cobrimos toda a jornada técnica — com a mesma obsessão por fluidez e performance."
        />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICOS.map(({ icon: Icon, title, desc }) => (
            <motion.article
              key={title}
              variants={fadeUp}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="group relative overflow-hidden rounded-brand border border-line bg-ink-surface/70 p-7 backdrop-blur transition-colors duration-300 hover:border-flux-purple/60"
            >
              {/* Brilho neon que segue o hover */}
              <span className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_right,rgba(176,142,239,0.14),transparent_60%)]" />

              <div className="relative flex items-start justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-line bg-ink text-flux-purple transition-all duration-300 group-hover:border-flux-purple/50 group-hover:bg-flux-purple/10">
                  <Icon
                    size={22}
                    strokeWidth={2}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-110"
                  />
                </span>
                <ArrowUpRight
                  size={20}
                  className="text-dim opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100 group-hover:text-flux-purple"
                />
              </div>

              <h3 className="relative mt-5 font-display text-lg font-bold text-white">
                {title}
              </h3>
              <p className="relative mt-2.5 text-sm leading-relaxed text-dim">
                {desc}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
