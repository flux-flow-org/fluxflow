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
    const texto = `Olá, FluxFlow! Sou ${values.nome || "—"} (${
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
    <section id="contato" className="relative overflow-hidden bg-ink py-28 sm:py-32">
      {/* Fundo diferenciado — gradiente + glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(139,95,214,0.18),transparent_60%)]"
      />
      <div
        aria-hidden="true"
        className="tech-grid pointer-events-none absolute inset-0 opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"
      />

      <div className="relative mx-auto max-w-5xl px-6">
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative glass overflow-hidden rounded-[24px] p-8 shadow-glow sm:p-12 lg:p-16"
        >
          <div className="grid items-start gap-12 lg:grid-cols-2">
            {/* Coluna texto + contatos diretos */}
            <div>
              <motion.span variants={fadeUp} className="eyebrow">
                06 · Vamos conversar
              </motion.span>
              <motion.h2
                variants={fadeUp}
                className="mt-6 font-display text-4xl font-extrabold leading-tight tracking-tightest text-white sm:text-5xl"
              >
                Pronto para colocar seu negócio em{" "}
                <span className="text-gradient">fluxo?</span>
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="mt-5 max-w-md text-lg text-dim"
              >
                Conte o seu desafio. Respondemos rápido com os próximos passos —
                sem compromisso.
              </motion.p>

              {/* Cards de contato direto */}
              <motion.div variants={fadeUp} className="mt-8 space-y-3">
                {CONTACT_CARDS.map(
                  ({ icon: Icon, label, value, href, external }) => (
                    <a
                      key={label}
                      href={href}
                      {...(external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="group flex items-center gap-4 rounded-xl border border-line bg-ink-bg/40 p-4 transition-all duration-300 hover:border-flux-purple/50 hover:bg-ink-surface/60"
                    >
                      <span className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gradient-to-br from-flux-purple to-flux-deep text-ink">
                        <Icon size={20} />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xs uppercase tracking-wider text-dim">
                          {label}
                        </span>
                        <span className="block truncate font-medium text-white">
                          {value}
                        </span>
                      </span>
                      <ArrowUpRight
                        size={18}
                        className="ml-auto flex-none text-dim transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-flux-purple"
                      />
                    </a>
                  )
                )}
              </motion.div>
            </div>

            {/* Coluna formulário */}
            <motion.div variants={fadeUp}>
              {sent ? (
                <div
                  role="status"
                  className="flex h-full flex-col items-center justify-center rounded-brand border border-flux-purple/30 bg-ink-surface/60 p-10 text-center"
                >
                  <CheckCircle2 size={44} className="text-flux-purple" />
                  <h3 className="mt-4 font-display text-xl font-bold text-white">
                    Tudo certo!
                  </h3>
                  <p className="mt-2 text-sm text-dim">
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
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
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
                      className="w-full rounded-xl border border-line bg-ink-bg/60 px-4 py-3.5 text-white placeholder:text-dim/70 transition-colors focus:border-flux-purple/60 focus:outline-none"
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
                      className="w-full rounded-xl border border-line bg-ink-bg/60 px-4 py-3.5 text-white placeholder:text-dim/70 transition-colors focus:border-flux-purple/60 focus:outline-none"
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
                      className="w-full resize-none rounded-xl border border-line bg-ink-bg/60 px-4 py-3.5 text-white placeholder:text-dim/70 transition-colors focus:border-flux-purple/60 focus:outline-none"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={reduce ? undefined : { scale: 1.02 }}
                    whileTap={reduce ? undefined : { scale: 0.98 }}
                    className="group flex w-full items-center justify-center gap-2 rounded-xl bg-flux-deep px-6 py-4 text-base font-semibold text-white transition-colors hover:bg-flux-purple"
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
