import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { WhatsAppIcon } from "../ui/BrandIcons";
import AnimatedBackground from "../ui/AnimatedBackground";
import { staggerContainer, fadeUp } from "../../lib/animations";
import { CONTACT } from "../../data/content";

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-ink-bg pt-24 sm:pt-32"
    >
      <AnimatedBackground />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-12 px-5 py-12 sm:gap-16 sm:px-6 sm:py-16 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:py-24">
        {/* Coluna texto */}
        <motion.div
          variants={staggerContainer(0.12, 0.05)}
          initial="hidden"
          animate="show"
        >
          {/* Selo */}
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-ink-surface/60 px-4 py-1.5 text-xs font-medium tracking-wide text-flux-soft backdrop-blur"
          >
            <Sparkles size={14} className="text-flux-purple" />
            Tecnologia · Soluções em Sistemas
          </motion.span>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tightest text-white sm:mt-7 sm:text-6xl sm:leading-[1.02] lg:text-7xl"
          >
            Sistemas que{" "}
            <span
              className={`text-gradient-flow ${
                reduce ? "" : "animate-gradient-pan"
              }`}
            >
              fluem
            </span>
            <br />
            com o seu negócio.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-base leading-relaxed text-dim sm:mt-7 sm:text-xl"
          >
            A FluxFlow desenvolve software sob medida que transforma
            complexidade operacional em fluxos simples, escaláveis e confiáveis.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center sm:gap-4"
          >
            <a
              href={CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-flow group inline-flex items-center justify-center gap-2 rounded-xl px-7 py-4 text-base font-semibold text-white shadow-glow-sm hover:shadow-glow"
            >
              <WhatsAppIcon size={18} />
              Começar agora
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-line bg-white/[0.03] px-7 py-4 text-base font-semibold text-body backdrop-blur transition-all duration-300 hover:border-flux-purple/50 hover:text-white"
            >
              Conheça nossos serviços
            </a>
          </motion.div>
        </motion.div>

        {/* Coluna visual , ícone em órbita fluida */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative hidden lg:block"
          aria-hidden="true"
        >
          <div className="relative mx-auto aspect-square w-full max-w-md">
            {/* Glow de fundo */}
            <div className="absolute inset-0 rounded-full bg-flux-purple/20 blur-[90px]" />

            {/* Anéis orbitais */}
            <div
              className={`absolute inset-6 rounded-full border border-line ${
                reduce ? "" : "animate-spin-slow"
              }`}
            >
              <span className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-flow shadow-glow-sm" />
            </div>
            <div
              className={`absolute inset-16 rounded-full border border-white/5 ${
                reduce ? "" : "animate-spin-slow"
              }`}
              style={{ animationDirection: "reverse" }}
            >
              <span className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-flux-aqua shadow-glow-sm" />
            </div>

            {/* Card de vidro central com o ícone da marca */}
            <div
              className={`absolute inset-[22%] flex items-center justify-center rounded-[28px] border-gradient shadow-glow ${
                reduce ? "" : "animate-float"
              }`}
            >
              <img
                src="/images/icons/nobg-icon-fade.png"
                alt=""
                className="h-1/2 w-1/2 drop-shadow-[0_10px_30px_rgba(176,142,239,0.5)]"
              />
            </div>

            {/* Pontos flutuantes */}
            <span className="absolute right-4 top-10 h-2 w-2 rounded-full bg-flux-soft/70" />
            <span className="absolute bottom-12 left-2 h-1.5 w-1.5 rounded-full bg-flux-aqua/70" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
