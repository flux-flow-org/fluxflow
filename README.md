# FluxFlow — Landing Page

Landing page institucional e de captação da **FluxFlow**, construída em
**React + Tailwind CSS + Framer Motion**, fiel ao brandbook da marca
(`brandbook.html`).

## Stack

- **React 18** + **Vite** — build rápido e DX moderna.
- **Tailwind CSS** — design tokens da marca em `tailwind.config.js`.
- **Framer Motion** — reveals por scroll, stagger, contadores e carousel.
  Escolhido por integrar `whileInView`, `useReducedMotion` e `AnimatePresence`
  de forma declarativa — ideal para o volume de animações pedido.
- **lucide-react** — ícones em traço, coerentes com o estilo tech.

## Como rodar

```bash
npm install
npm run dev      # ambiente de desenvolvimento
npm run build    # build de produção (dist/)
npm run preview  # serve o build
```

## Estrutura (organizada por seção)

```
src/
├─ App.jsx                       # monta a página + skip link
├─ index.css                     # base, glassmorphism, reduced-motion
├─ lib/animations.js             # variants e easing compartilhados
├─ data/content.js               # todo o conteúdo (pt-BR) e ícones
├─ components/
│  ├─ Navbar.jsx                 # nav fixa com glass + menu mobile
│  ├─ Footer.jsx                 # 7 · rodapé
│  ├─ ui/
│  │  ├─ Reveal.jsx              # wrapper de reveal por scroll
│  │  ├─ SectionHeading.jsx      # eyebrow + título + lead
│  │  ├─ Counter.jsx             # contador animado
│  │  ├─ Wordmark.jsx            # logotipo textual FluxFlow
│  │  └─ AnimatedBackground.jsx  # grid + glow + linhas "flux"
│  └─ sections/
│     ├─ Hero.jsx                # 1 · hero
│     ├─ About.jsx               # 2 · sobre / diferenciais
│     ├─ Services.jsx            # 3 · serviços
│     ├─ WhyFluxFlow.jsx         # 4 · métricas
│     ├─ Testimonials.jsx        # 5 · depoimentos (carousel)
│     └─ FinalCTA.jsx            # 6 · formulário de contato
```

## Identidade visual

Paleta e tipografia vêm direto do brandbook:

- **Roxo** `#B08EEF` · **Roxo profundo** `#8B5FD6` · **Dark** `#0D1115` / `#13181C`
- **Tipografia:** DM Sans — fonte única do projeto (títulos, corpo e UI), conforme a identidade visual
- Estilo dark tech, glassmorphism sutil e gradientes roxo/neon.

## Animação & acessibilidade

- Reveal por scroll em todas as seções (entradas 0.3s–0.6s, `ease-out`, stagger ~120ms).
- Apenas `transform`/`opacity` animados — sem layout thrashing.
- **`prefers-reduced-motion`** respeitado via `useReducedMotion` e fallback CSS.
- Foco visível, `aria-label`s, hierarquia de headings e meta tags de SEO.

## Próximos passos

- Conectar o formulário (`FinalCTA.jsx`) a um backend ou serviço de e-mail.
- Substituir os depoimentos placeholder por cases reais.
