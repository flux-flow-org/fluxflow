import { Mail } from "lucide-react";
import Reveal from "./ui/Reveal";
import Wordmark from "./ui/Wordmark";
<<<<<<< HEAD
import { WhatsAppIcon, InstagramIcon } from "./ui/BrandIcons";
=======
import Icon from "./ui/Icon";
>>>>>>> 867a677fa53387b95f17f7ffe5a2d74071ab4ecf
import { fadeIn } from "../lib/animations";
import { NAV_LINKS, CONTACT } from "../data/content";

const SOCIALS = [
  {
    label: "Instagram",
    href: CONTACT.instagramUrl,
    icon: InstagramIcon,
    external: true,
  },
  {
    label: "WhatsApp",
    href: CONTACT.whatsappUrl,
    icon: WhatsAppIcon,
    external: true,
  },
  {
    label: "E-mail",
    href: `mailto:${CONTACT.email}`,
    icon: Mail,
    external: false,
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-line bg-ink-deep">
      {/* Glow inferior — assinatura do brandbook */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-48 left-1/2 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-flux-purple/15 blur-[120px]"
      />

      <Reveal variants={fadeIn} className="relative mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          {/* Marca */}
          <div className="max-w-sm">
<<<<<<< HEAD
            <a
              href="#hero"
              className="flex items-center gap-2.5"
              aria-label="FluxFlow — início"
            >
              <img
                src="/images/nobg-icon-fade.png"
                alt=""
                className="h-9 w-9 drop-shadow-[0_4px_14px_rgba(176,142,239,0.45)]"
                width="36"
                height="36"
              />
=======
            <a href="#hero" className="flex items-center gap-2.5" aria-label="FluxFlow — início">
              <Icon variant="white" className="h-6 w-6" width="24" height="24" />
>>>>>>> 867a677fa53387b95f17f7ffe5a2d74071ab4ecf
              <Wordmark className="text-2xl" />
            </a>
            <p className="mt-5 text-[15px] leading-relaxed text-dim">
              Sistemas que fluem com o seu negócio. Tecnologia sob medida — do
              fluxo à entrega, com precisão.
            </p>

            {/* Ícones sociais */}
            <div className="mt-6 flex items-center gap-3">
              {SOCIALS.map(({ label, href, icon: Icon, external }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-line text-dim transition-all duration-300 hover:-translate-y-0.5 hover:border-flux-purple/50 hover:text-flux-purple"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Navegação + contato */}
          <div className="grid grid-cols-2 gap-12 sm:gap-20">
            <nav aria-label="Navegação do rodapé">
              <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
                Navegação
              </h4>
              <ul className="mt-5 space-y-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-dim transition-colors hover:text-flux-purple"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
                Contato
              </h4>
              <ul className="mt-5 space-y-3">
                <li>
                  <a
                    href={CONTACT.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-dim transition-colors hover:text-flux-purple"
                  >
                    {CONTACT.whatsappDisplay}
                  </a>
                </li>
                <li>
                  <a
                    href={CONTACT.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-dim transition-colors hover:text-flux-purple"
                  >
                    {CONTACT.instagramHandle}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="text-sm text-dim transition-colors hover:text-flux-purple"
                  >
                    {CONTACT.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs tracking-wide text-dim">
            © {year} FluxFlow. Todos os direitos reservados.
          </p>
          <p className="text-xs tracking-wide text-dim">
            Feito com fluxo · Roxo #B08EEF · Dark #13181C
          </p>
        </div>
      </Reveal>
    </footer>
  );
}
