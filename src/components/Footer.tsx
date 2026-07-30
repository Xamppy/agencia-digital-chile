import Link from "next/link";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

const SERVICES = [
  { href: "/servicios/landing-pages", label: "Landing Pages" },
  { href: "/servicios/ecommerce", label: "E-commerce" },
  { href: "/servicios/seo", label: "SEO & CRO" },
  { href: "/servicios/sistemas-web", label: "Sistemas Web" },
  { href: "/servicios/agentes-ia", label: "Agentes de IA" },
  { href: "/servicios/bots-whatsapp", label: "Bots WhatsApp" },
];

const COMPANY = [
  { href: "/portafolio", label: "Portafolio" },
  { href: "/precios", label: "Precios" },
  { href: "/contacto", label: "Contacto" },
  { href: "/privacidad", label: "Privacidad" },
  { href: "/terminos", label: "Términos" },
];

export function Footer() {
  return (
    <footer className="bg-surface-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 py-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-brand-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">E</span>
              </div>
              <span className="font-bold text-base tracking-tight">Entity</span>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed mb-6 max-w-xs">
              Agencia digital full-service. Web, SEO, automatizaciones e
              inteligencia artificial para empresas que quieren crecer.
            </p>
            <div className="space-y-2.5 text-sm text-zinc-400">
              <a
                href="mailto:hola@entity.cl"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-zinc-500" />
                hola@entity.cl
              </a>
              <a
                href="tel:+569XXXXXXXX"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-zinc-500" />
                +56 9 XXXX XXXX
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-zinc-500" />
                Santiago, Chile
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 tracking-wide">
              Servicios
            </h4>
            <ul className="space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-sm text-zinc-400 hover:text-white transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 tracking-wide">
              Empresa
            </h4>
            <ul className="space-y-2.5">
              {COMPANY.map((c) => (
                <li key={c.href}>
                  <Link
                    href={c.href}
                    className="text-sm text-zinc-400 hover:text-white transition-colors"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-sm font-semibold text-white mb-4 tracking-wide">
              ¿Listo para empezar?
            </h4>
            <p className="text-sm text-zinc-400 mb-4">
              Agendá una reunión gratuita y descubrí cómo podemos ayudarte.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-400 text-white font-semibold text-sm px-5 py-2.5 rounded-xl transition-all duration-200"
            >
              Agendar reunión
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-500">
            © {new Date().getFullYear()} Entity. Todos los derechos reservados.
          </p>
          <p className="text-xs text-zinc-500">
            Hecho con ❤️ en Chile
          </p>
        </div>
      </div>
    </footer>
  );
}
