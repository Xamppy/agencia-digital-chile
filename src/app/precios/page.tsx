import type { Metadata } from "next";
import { PreciosClient } from "./PreciosClient";

export const metadata: Metadata = {
  title: "Planes y Precios",
  description:
    "Soluciones flexibles que se adaptan al presupuesto de cada empresa. Landing pages, e-commerce, sistemas web y más. Sin costos ocultos.",
  openGraph: {
    title: "Planes y Precios | Agencia Digital Chile",
    description:
      "Planes de desarrollo web y soluciones digitales para empresas en Chile. Desde $499.000 CLP.",
  },
};

export default function PreciosPage() {
  return <PreciosClient />;
}
