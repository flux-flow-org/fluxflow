import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Send, CheckCircle2, Mail, ArrowUpRight } from "lucide-react";
import { WhatsAppIcon, InstagramIcon } from "../ui/BrandIcons";
import { staggerContainer, fadeUp, viewportOnce } from "../../lib/animations";
import { CONTACT } from "../../data/content";

const CONTACT_CARDS = [
  {
    icon: WhatsAppIcon,
    label: "WhatsApp",
    value: CONTACT.whatsappDisplay,
    href: CONTACT.whatsappUrl,
    external: true,
  },
  {
    icon: InstagramIcon,
    label: "Instagram",
    value: CONTACT.instagramHandle,
    href: CONTACT.instagramUrl,
    external: true,
  },
  {
    icon: Mail,
    label: "E-mail",
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
    external: false,
  },
];

export default function FinalCTA() {
  const reduce = useReducedMotion();
  const [sent, setSent] = useState(false);
  const [values, setValues] = useState({ nome: "", email: "", mensagem: "" });

  const handleChange = (e) =>
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // Encaminha a conversa para o WhatsApp com a mensagem pré-preenchida.
    const texto = `Olá, FluxFlow! Sou ${values.nome || ","} (${
      values.email || "sem e-mail"
    }). ${values.mensagem}`;
    window.open(
      `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(texto)}`,
      "_blank",
      "noopener,noreferrer"
    );
    setSent(true);
  };

  return (
    <section id="contato" className="relative overflow-hidden bg-ink py-20 sm:py-28 lg:py-32">
      {/* Fundo diferenciado , gradiente + glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(139,95,214,0.18),transparent_60%)]"
      />
      <div
        aria-hidden="true"
        className="tech-grid pointer-events-none absolute inset-0 opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"
      />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative glass overflow-hidden rounded-[20px] p-5 shadow-glow xs:p-6 sm:rounded-[24px] sm:p-12 lg:p-16"
        >
          <div className="grid items-start gap-8 sm:gap-12 lg:grid-cols-2">
            {/* Coluna texto + contatos diretos */}
            <div className="min-w-0">
              <motion.span
                variants={fadeUp}
                className="eyebrow max-[380px]:!gap-2 max-[380px]:tracking-[0.16em]"
              >
                05 · Vamos conversar
              </motion.span>
              <motion.h2
                variants={fadeUp}
                className="mt-5 font-display text-2xl font-extrabold leading-tight tracking-tightest text-white xs:text-3xl sm:mt-6 sm:text-4xl lg:text-5xl"
              >
                Pronto para colocar seu negócio em{" "}
                <span className="text-gradient">fluxo?</span>
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="mt-4 max-w-md text-sm text-dim sm:mt-5 sm:text-lg"
              >
                Conte o seu desafio. Respondemos rápido com os próximos passos ,
                sem compromisso.
              </motion.p>

              {/* Cards de contato direto */}
              <motion.div variants={fadeUp} className="mt-6 space-y-2.5 sm:mt-8 sm:space-y-3">
                {CONTACT_CARDS.map(
                  ({ icon: Icon, label, value, href, external }) => (
                    <a
                      key={label}
                      href={href}
                      {...(external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="group flex items-center gap-3 rounded-xl border border-line bg-ink-bg/40 p-3 transition-all duration-300 hover:border-flux-purple/50 hover:bg-ink-surface/60 sm:gap-4 sm:p-4"
                    >
                      <span className="flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-gradient-to-br from-flux-purple to-flux-deep text-ink sm:h-11 sm:w-11">
                        <Icon size={18} />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[11px] uppercase tracking-wider text-dim sm:text-xs">
                          {label}
                        </span>
                        <span className="block truncate text-sm font-medium text-white sm:text-base">
                          {value}
                        </span>
                      </span>
                      <ArrowUpRight
                        size={16}
                        className="ml-auto flex-none text-dim transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-flux-purple sm:size-[18px]"
                      />
                    </a>
                  )
                )}
              </motion.div>
            </div>

            {/* Coluna formulário */}
            <motion.div variants={fadeUp} className="min-w-0">
              {sent ? (
                <div
                  role="status"
                  className="flex h-full flex-col items-center justify-center rounded-brand border border-flux-purple/30 bg-ink-surface/60 p-6 text-center sm:p-10"
                >
                  <CheckCircle2 size={36} className="text-flux-purple sm:size-11" />
                  <h3 className="mt-4 font-display text-lg font-bold text-white sm:text-xl">
                    Tudo certo!
                  </h3>
                  <p className="mt-2 break-words text-sm text-dim">
                    Abrimos o WhatsApp para você, {values.nome || "tudo certo"}.
                    Se não abriu, fale com a gente em{" "}
                    <a
                      href={CONTACT.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-flux-purple hover:text-flux-soft"
                    >
                      {CONTACT.whatsappDisplay}
                    </a>
                    .
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4" noValidate>
                  <div>
                    <label htmlFor="nome" className="sr-only">
                      Nome
                    </label>
                    <input
                      id="nome"
                      name="nome"
                      type="text"
                      required
                      value={values.nome}
                      onChange={handleChange}
                      placeholder="Seu nome"
                      autoComplete="name"
                      className="w-full min-w-0 rounded-xl border border-line bg-ink-bg/60 px-3.5 py-3 text-sm text-white placeholder:text-dim/70 transition-colors focus:border-flux-purple/60 focus:outline-none sm:px-4 sm:py-3.5 sm:text-base"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="sr-only">
                      E-mail
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={values.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      autoComplete="email"
                      className="w-full min-w-0 rounded-xl border border-line bg-ink-bg/60 px-3.5 py-3 text-sm text-white placeholder:text-dim/70 transition-colors focus:border-flux-purple/60 focus:outline-none sm:px-4 sm:py-3.5 sm:text-base"
                    />
                  </div>
                  <div>
                    <label htmlFor="mensagem" className="sr-only">
                      Mensagem
                    </label>
                    <textarea
                      id="mensagem"
                      name="mensagem"
                      rows={4}
                      required
                      value={values.mensagem}
                      onChange={handleChange}
                      placeholder="Conte um pouco sobre o seu projeto…"
                      className="w-full min-w-0 resize-none rounded-xl border border-line bg-ink-bg/60 px-3.5 py-3 text-sm text-white placeholder:text-dim/70 transition-colors focus:border-flux-purple/60 focus:outline-none sm:px-4 sm:py-3.5 sm:text-base"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={reduce ? undefined : { scale: 1.02 }}
                    whileTap={reduce ? undefined : { scale: 0.98 }}
                    className="btn-flow group flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-semibold text-white shadow-glow-sm hover:shadow-glow sm:px-6 sm:py-4 sm:text-base"
                  >
                    Enviar mensagem
                    <Send
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </motion.button>
                  <p className="text-center text-xs text-dim">
                    Ao enviar, abrimos uma conversa no WhatsApp com a sua
                    mensagem.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
