import Navbar from "./components/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Services from "./components/sections/Services";
import Process from "./components/sections/Process";
import WhyFluxFlow from "./components/sections/WhyFluxFlow";
import Testimonials from "./components/sections/Testimonials";
import FinalCTA from "./components/sections/FinalCTA";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/ui/WhatsAppFloat";

export default function App() {
  return (
    <>
      {/* Pular para o conteúdo , acessibilidade por teclado */}
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-flux-deep focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Pular para o conteúdo
      </a>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <WhyFluxFlow />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
