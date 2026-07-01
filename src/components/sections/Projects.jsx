import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import { staggerContainer, fadeUp, viewportOnce } from "../../lib/animations";
import { PROJETOS } from "../../data/content";

export default function Projects() {
  return (
    <section id="projetos" className="relative overflow-hidden bg-ink-bg py-20 sm:py-28 lg:py-32">
      {/* Glow lateral sutil */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-1/4 h-96 w-96 rounded-full bg-flux-deep/15 blur-[120px]"
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeading
          eyebrow="04 · Projetos"
          title="Projetos que fluem de verdade"
          lead="Uma amostra do que construímos: soluções reais, em produção, gerando resultado para quem confia na FluxFlow."
        />

        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-12 grid grid-cols-1 gap-6 sm:mt-16"
        >
          {PROJETOS.map(({ title, desc, image, tags, href }) => (
            <motion.article
              key={title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="group relative overflow-hidden rounded-brand border border-line bg-ink-surface/70 backdrop-blur transition-colors duration-300 hover:border-flux-purple/60 hover:shadow-glow"
            >
              <span className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_right,rgba(176,142,239,0.12),transparent_60%),radial-gradient(circle_at_bottom_left,rgba(0,229,255,0.07),transparent_55%)]" />

              <div className="grid md:grid-cols-[1.1fr_.9fr]">
                {/* Preview do projeto */}
                <div className="relative aspect-[16/10] overflow-hidden bg-ink md:aspect-auto md:min-h-[300px]">
                  <img
                    src={image}
                    alt={`Preview do projeto ${title}`}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent md:bg-gradient-to-r"
                  />
                </div>

                {/* Conteúdo */}
                <div className="relative flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-line bg-ink px-3 py-1 text-xs font-medium tracking-wide text-flux-soft"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="mt-5 font-display text-xl font-bold text-white sm:text-2xl">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-dim sm:text-base">
                    {desc}
                  </p>

                  <a
                    href={href}
                    className="group/link mt-6 inline-flex w-fit items-center gap-1.5 py-2 text-sm font-semibold text-flux-purple transition-colors hover:text-flux-soft"
                  >
                    Ver projeto
                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                    />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
