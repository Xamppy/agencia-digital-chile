import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Agencia Digital Chile | Desarrollo Web y Marketing Digital",
    template: "%s | Agencia Digital Chile",
  },
  description:
    "Agencia de desarrollo web y marketing digital en Chile. Landing pages, e-commerce, SEO, sistemas web, agentes de IA y bots de WhatsApp.",
  keywords: [
    "agencia digital chile",
    "desarrollo web chile",
    "marketing digital",
    "landing pages",
    "e-commerce chile",
    "SEO chile",
    "agentes de IA",
    "bots de whatsapp",
    "sistemas web",
  ],
  authors: [{ name: "Agencia Digital Chile" }],
  creator: "Agencia Digital Chile",
  metadataBase: new URL("https://agenciadigitalchile.cl"),
  openGraph: {
    type: "website",
    locale: "es_CL",
    siteName: "Agencia Digital Chile",
    title: "Agencia Digital Chile | Desarrollo Web y Marketing Digital",
    description:
      "Soluciones digitales a medida para empresas en Chile. Desde landing pages hasta agentes de inteligencia artificial.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
