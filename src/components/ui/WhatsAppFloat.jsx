import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { WhatsAppIcon } from "./BrandIcons";
import { CONTACT } from "../../data/content";

/**
 * Botão flutuante de WhatsApp , aparece após o usuário rolar a página.
 * Fixo no canto inferior direito, com glow pulsante da marca.
 */
export default function WhatsAppFloat() {
  const reduce = useReducedMotion();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href={CONTACT.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar no WhatsApp"
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          whileHover={reduce ? undefined : { scale: 1.08 }}
          whileTap={reduce ? undefined : { scale: 0.94 }}
          className={`fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-flux-deep text-white shadow-glow transition-colors hover:bg-flux-purple sm:bottom-7 sm:right-7 ${
            reduce ? "" : "animate-pulse-glow"
          }`}
        >
          <WhatsAppIcon size={28} />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
