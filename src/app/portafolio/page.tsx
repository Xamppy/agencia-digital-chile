import type { Metadata } from "next";
import { PortfolioClient } from "./PortfolioClient";

export const metadata: Metadata = {
  title: "Portafolio",
  description:
    "Proyectos reales, resultados reales. Descubre cómo hemos ayudado a empresas chilenas a transformar su presencia digital.",
  openGraph: {
    title: "Portafolio | Agencia Digital Chile",
    description:
      "Casos de éxito de desarrollo web, e-commerce, SEO, sistemas web, agentes IA y bots de WhatsApp para empresas en Chile.",
  },
};

export default function PortafolioPage() {
  return <PortfolioClient />;
}
