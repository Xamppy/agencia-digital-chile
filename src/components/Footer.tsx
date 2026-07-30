import Link from "next/link";
import { Mail, Phone, MapPin, ArrowUpRight, Heart } from "lucide-react";

const SERVICE_LINKS = [
  { label: "Landing Pages", href: "/servicios/landing-pages" },
  { label: "E-commerce", href: "/servicios/ecommerce" },
  { label: "SEO", href: "/servicios/seo" },
  { label: "Sistemas Web", href: "/servicios/sistemas-web" },
  { label: "Agentes de IA", href: "/servicios/agentes-ia" },
  { label: "Bots de WhatsApp", href: "/servicios/bots-whatsapp" },
];

const COMPANY_LINKS = [
  { label: "Portafolio", href: "/portafolio" },
  { label: "Precios", href: "/precios" },
  { label: "Contacto", href: "/contacto" },
];

const LEGAL_LINKS = [
  { label: "Política de Privacidad", href: "/privacidad" },
  { label: "Términos de Servicio", href: "/terminos" },
];

export function Footer() {
  return (
    <footer className="relative bg-surface-dark text-text-on-dark border-t border-border-dark">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-500 text-sm font-bold text-white">
                AD
              </span>
              <span className="text-lg font-semibold text-text-on-dark">
                Agencia Digital
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-text-on-dark-secondary">
              Creamos experiencias digitales que impulsan el crecimiento de tu
              negocio. Soluciones a medida para empresas en Chile.
            </p>

            <div className="mt-6 flex flex-col gap-3">
              <a
                href="mailto:hola@agenciadigitalchile.cl"
                className="flex items-center gap-2 text-sm text-text-on-dark-secondary hover:text-brand-400 transition-colors"
              >
                <Mail className="h-4 w-4 shrink-0 text-text-muted" />
                hola@agenciadigitalchile.cl
              </a>
              <a
                href="tel:+56912345678"
                className="flex items-center gap-2 text-sm text-text-on-dark-secondary hover:text-brand-400 transition-colors"
              >
                <Phone className="h-4 w-4 shrink-0 text-text-muted" />
                +56 9 1234 5678
              </a>
              <p className="flex items-center gap-2 text-sm text-text-on-dark-secondary">
                <MapPin className="h-4 w-4 shrink-0 text-text-muted" />
                Santiago, Chile
              </p>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-text-on-dark">
              Servicios
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {SERVICE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-1 text-sm text-text-on-dark-secondary transition-colors hover:text-brand-400"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-text-on-dark">
              Empresa
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {COMPANY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-1 text-sm text-text-on-dark-secondary transition-colors hover:text-brand-400"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-text-on-dark">
              ¿Listo para empezar?
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-text-on-dark-secondary">
              Cuéntanos sobre tu proyecto y te ayudaremos a convertir tu idea en
              una solución digital exitosa.
            </p>
            <Link
              href="/contacto"
              className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition-all hover:bg-brand-600 hover:shadow-brand-500/40"
            >
              Solicitar Cotización
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border-dark py-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <p className="text-xs text-text-on-dark-secondary">
            © {new Date().getFullYear()} Agencia Digital Chile. Todos los
            derechos reservados.
          </p>

          <div className="flex items-center gap-4">
            {LEGAL_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-text-on-dark-secondary transition-colors hover:text-text-on-dark"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <p className="flex items-center gap-1 text-xs text-text-on-dark-secondary">
            Hecho con{" "}
            <Heart className="h-3 w-3 fill-red-500 text-red-500" /> en Chile
          </p>
        </div>
      </div>
    </footer>
  );
}
