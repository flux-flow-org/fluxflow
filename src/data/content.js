// Conteúdo centralizado da landing page FluxFlow (pt-BR).
// Editar aqui mantém os componentes de seção limpos e reutilizáveis.

import {
  Cpu,
  Workflow,
  HeartHandshake,
  Code2,
  Smartphone,
  Boxes,
  Cloud,
  Webhook,
  BarChart3,
  Search,
  PenTool,
  Rocket,
  LifeBuoy,
} from "lucide-react";

// Contato oficial da marca.
export const CONTACT = {
  email: "fluxflow.contato@gmail.com",
  // 31 97524-7458 , DDI Brasil (55) para o link do WhatsApp.
  whatsappDisplay: "(31) 97524-7458",
  whatsappNumber: "5531975247458",
  whatsappUrl:
    "https://wa.me/5531975247458?text=Ol%C3%A1%2C%20FluxFlow!%20Quero%20conversar%20sobre%20um%20projeto.",
  instagramHandle: "@fluxflowcode",
  instagramUrl: "https://instagram.com/fluxflowcode",
};

export const NAV_LINKS = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Processo", href: "#processo" },
  { label: "Depoimentos", href: "#depoimentos" },
];

// Seção 2 , diferenciais
export const DIFERENCIAIS = [
  {
    icon: Cpu,
    title: "Engenharia de precisão",
    desc: "Código testado e arquitetura sólida. Entregamos o que funciona , bem feito, do primeiro deploy ao último.",
  },
  {
    icon: Workflow,
    title: "Sob medida, de verdade",
    desc: "Nada de templates genéricos. Cada solução nasce do fluxo real do seu negócio e cresce com ele.",
  },
  {
    icon: HeartHandshake,
    title: "Parceria de longo prazo",
    desc: "Transparência e suporte contínuo. Não somos fornecedor , somos time. Crescemos junto com você.",
  },
];

// Seção 3 , serviços (mínimo 4)
export const SERVICOS = [
  {
    icon: Code2,
    title: "Desenvolvimento Web",
    desc: "Plataformas e SaaS performáticos, do front à infra. Experiências que carregam rápido e escalam.",
  },
  {
    icon: Smartphone,
    title: "Aplicativos Mobile",
    desc: "Apps nativos e multiplataforma com a fluidez que o usuário espera , iOS e Android.",
  },
  {
    icon: Boxes,
    title: "Sistemas sob Medida",
    desc: "ERPs, painéis internos e automações que substituem a planilha caótica por um fluxo único.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    desc: "Infraestrutura escalável, CI/CD e observabilidade. Deploy seguro, contínuo e sem dor de cabeça.",
  },
  {
    icon: Webhook,
    title: "Integrações & APIs",
    desc: "Conectamos seus sistemas, gateways e ferramentas. Tudo conversando, tudo em sincronia.",
  },
  {
    icon: BarChart3,
    title: "Dados & Dashboards",
    desc: "Transformamos dados dispersos em decisões. Métricas claras, em tempo real, onde você precisa.",
  },
];

// Seção , como trabalhamos (processo fluido, inspirado no fluxo da marca)
export const PROCESSO = [
  {
    icon: Search,
    step: "01",
    title: "Descoberta",
    desc: "Mergulhamos no seu negócio para mapear o fluxo real, os gargalos e onde a tecnologia gera mais impacto.",
  },
  {
    icon: PenTool,
    step: "02",
    title: "Desenho da solução",
    desc: "Arquitetura, design e escopo sob medida. Você aprova um plano claro antes de escrevermos a primeira linha.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Construção & entrega",
    desc: "Desenvolvimento em ciclos curtos, com entregas testadas e visíveis a cada etapa. Sem caixa-preta.",
  },
  {
    icon: LifeBuoy,
    step: "04",
    title: "Evolução contínua",
    desc: "Monitoramos, otimizamos e evoluímos o sistema junto com o seu crescimento. Parceria de longo prazo.",
  },
];

// Seção 4 , métricas (contadores animados)
export const METRICAS = [
  { value: 99.9, suffix: "%", label: "Uptime garantido e alta disponibilidade nas soluções desenvolvidas", decimals: 1 },
  { value: 10, suffix: "+", label: "Anos de experiência somada de nossos especialistas em tecnologia" },
  { value: 1, suffix: "h", label: "Tempo médio de resposta" },
  { value: 100, suffix: "%", label: "Projetos desenvolvidos em arquitetura Cloud-Native e metodologias ágeis" },
];

// Faixa de tecnologias (marquee) , reforça profundidade técnica.
export const TECNOLOGIAS = [
  "React",
  "Next.js",
  "Node.js",
  "TypeScript",
  "React Native",
  "PostgreSQL",
  "AWS",
  "Docker",
  "Python",
  "GraphQL",
];

// Seção 5 , depoimentos (placeholders realistas)
export const DEPOIMENTOS = [
  {
    quote:
      "A FluxFlow reescreveu nosso sistema de pedidos do zero. O que era um gargalo virou nosso maior diferencial , processamos 3x mais sem aumentar o time.",
    name: "Marina Castro",
    role: "COO · Distribuidora Norvex",
    initials: "MC",
  },
  {
    quote:
      "Time técnico de altíssimo nível e, mais raro ainda, que entende de negócio. Entregaram no prazo e seguem ao nosso lado a cada nova fase.",
    name: "Rafael Tavares",
    role: "CEO · Lumen Educação",
    initials: "RT",
  },
  {
    quote:
      "Integraram seis ferramentas que nunca se falaram. Hoje nossos dados fluem sozinhos e a operação ficou absurdamente mais leve.",
    name: "Juliana Prado",
    role: "Head de Operações · Clínica Vitta",
    initials: "JP",
  },
];

export const SOCIAL_LINKS = [
  { label: "Instagram", href: CONTACT.instagramUrl },
  { label: "WhatsApp", href: CONTACT.whatsappUrl },
  { label: "E-mail", href: `mailto:${CONTACT.email}` },
];
