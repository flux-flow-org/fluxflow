import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { WhatsAppIcon } from "./ui/BrandIcons";
import Wordmark from "./ui/Wordmark";
import { NAV_LINKS, CONTACT } from "../data/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Trava o scroll do body quando o menu mobile está aberto.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      initial={{ y: -90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      // Topbar suspensa: flutua afastada do topo e das laterais.
      className="fixed inset-x-0 top-3 z-50 px-3 sm:top-5 sm:px-6"
    >
      <nav
        aria-label="Navegação principal"
        className={`mx-auto flex max-w-5xl items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-500 sm:px-5 ${
          scrolled || open
            ? "glass-nav glass-nav-scrolled"
            : "glass-nav"
        }`}
      >
        {/* Marca , ícone em gradiente + wordmark */}
        <a
          href="#hero"
          className="flex items-center gap-2.5"
          aria-label="FluxFlow , início"
        >
          <img
            src="public/images/icons/nobg-icon-fade.png"
            alt=""
            className="h-8 w-8 drop-shadow-[0_4px_14px_rgba(176,142,239,0.45)]"
            width="32"
            height="32"
          />
          <Wordmark className="text-xl" />
        </a>

        {/* Links desktop */}
        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-lg px-3.5 py-2 text-sm font-medium tracking-wide text-dim transition-colors hover:bg-white/[0.04] hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA desktop , WhatsApp */}
        <div className="hidden md:block">
          <a
            href={CONTACT.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-xl bg-flux-deep px-4 py-2.5 text-sm font-semibold text-white shadow-glow-sm transition-all duration-300 hover:bg-flux-purple"
          >
            <WhatsAppIcon size={16} />
            Falar no WhatsApp
          </a>
        </div>

        {/* Botão mobile */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-white md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Menu mobile , painel de vidro suspenso */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="glass-nav mx-auto mt-2 max-w-5xl overflow-hidden rounded-2xl md:hidden"
          >
            <ul className="flex flex-col gap-1 p-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-base text-body transition-colors hover:bg-white/[0.05] hover:text-flux-purple"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-1">
                <a
                  href={CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-xl bg-flux-deep px-5 py-3 text-center text-sm font-semibold text-white"
                >
                  <WhatsAppIcon size={16} />
                  Falar no WhatsApp
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
