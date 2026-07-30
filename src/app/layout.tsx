import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Entity — Agencia Digital en Chile",
    template: "%s | Entity",
  },
  description:
    "Agencia digital full-service en Chile. Landing pages, e-commerce, SEO, sistemas web, agentes de IA y bots de WhatsApp. Automatizaciones que generan resultados.",
  keywords: [
    "agencia digital Chile",
    "landing pages Chile",
    "e-commerce Chile",
    "SEO Chile",
    "desarrollo web Chile",
    "automatización IA",
    "bots WhatsApp",
    "sistemas web a medida",
  ],
  openGraph: {
    type: "website",
    locale: "es_CL",
    siteName: "Entity",
    title: "Entity — Agencia Digital en Chile",
    description:
      "Agencia digital full-service. Web, SEO, automatizaciones e IA para empresas que quieren crecer.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="font-sans bg-surface text-text-primary antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
