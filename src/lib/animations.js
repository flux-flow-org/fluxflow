// Variants compartilhadas , timing e easing consistentes em toda a página.
// Entradas entre 300ms–600ms, easing ease-out natural, stagger de ~120ms.

export const EASE = [0.22, 1, 0.36, 1]; // ease-out suave (cubic-bezier)

// Container que orquestra o stagger dos filhos ao entrar na viewport.
export const staggerContainer = (stagger = 0.12, delay = 0) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: stagger,
      delayChildren: delay,
    },
  },
});

// Item padrão: fade + slide vertical suave.
export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE },
  },
};

export const fadeUpSm = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: EASE },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6, ease: EASE } },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.94, y: 20 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE },
  },
};

// Configuração de viewport reutilizada nos whileInView.
export const viewportOnce = { once: true, amount: 0.25 };
