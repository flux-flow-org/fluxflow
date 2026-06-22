import { motion } from "framer-motion";
import { staggerContainer, fadeUp, viewportOnce } from "../../lib/animations";

/**
 * Cabeçalho de seção editorial — eyebrow numerado + título + lead.
 * Mantém a hierarquia de headings correta (h2) para SEO/acessibilidade.
 */
export default function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  className = "",
}) {
  const isCenter = align === "center";
  return (
    <motion.div
      variants={staggerContainer(0.12)}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className={`${isCenter ? "mx-auto text-center" : ""} max-w-2xl ${className}`}
    >
      {eyebrow && (
        <motion.span
          variants={fadeUp}
          className={`eyebrow ${isCenter ? "justify-center" : ""}`}
        >
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        variants={fadeUp}
        className="mt-6 font-display text-4xl font-extrabold tracking-tightest text-white sm:text-5xl"
      >
        {title}
      </motion.h2>
      {lead && (
        <motion.p
          variants={fadeUp}
          className={`mt-5 text-lg leading-relaxed text-dim ${
            isCenter ? "mx-auto" : ""
          }`}
        >
          {lead}
        </motion.p>
      )}
    </motion.div>
  );
}
