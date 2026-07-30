import type { Metadata } from "next";
import { ContactoClient } from "./ContactoClient";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Cuéntanos sobre tu proyecto. Te responderemos en menos de 24 horas con una propuesta personalizada. Contacta a Agencia Digital Chile.",
  openGraph: {
    title: "Contacto | Agencia Digital Chile",
    description:
      "Solicita una cotización sin compromiso para tu proyecto de desarrollo web, e-commerce, SEO o automatización.",
  },
};

export default function ContactoPage() {
  return <ContactoClient />;
}
