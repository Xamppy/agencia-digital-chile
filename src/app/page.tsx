"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Globe,
  ShoppingCart,
  Search,
  Layers,
  Bot,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  Zap,
  Shield,
  TrendingUp,
  Users,
  Clock,
  Star,
} from "lucide-react";

/* ─────────────────────────────────────────────
   FADE-IN ON SCROLL (simple IntersectionObserver)
   ───────────────────────────────────────────── */

function FadeIn({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   DATA
   ───────────────────────────────────────────── */

const SERVICES = [
  {
    icon: Globe,
    title: "Landing Pages",
    desc: "Diseñadas para convertir tráfico en clientes. Cada pixel con un propósito.",
    color: "#2563eb",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    desc: "Tiendas online que venden. Pasarelas de pago, inventario, automatización.",
    color: "#7c3aed",
  },
  {
    icon: Search,
    title: "SEO & CRO",
    desc: "Aparecé en Google y convertí visitas en ventas. Datos, no suposiciones.",
    color: "#059669",
  },
  {
    icon: Layers,
    title: "Sistemas Web",
    desc: "CRM, ERP, plataformas a medida. Tu operación, automatizada.",
    color: "#ea580c",
  },
  {
    icon: Bot,
    title: "Agentes de IA",
    desc: "Asistentes inteligentes que trabajan 24/7. Atención al cliente, ventas, soporte.",
    color: "#0891b2",
  },
  {
    icon: MessageCircle,
    title: "Bots WhatsApp",
    desc: "Automatización en el canal donde están tus clientes. Respuestas instantáneas.",
    color: "#16a34a",
  },
];

const STATS = [
  { value: "100+", label: "Proyectos entregados" },
  { value: "50+", label: "Clientes activos" },
  { value: "98%", label: "Satisfacción" },
  { value: "24h", label: "Tiempo de respuesta" },
];

const WHY_US = [
  {
    icon: Zap,
    title: "Full-Service Real",
    desc: "No necesitás 5 proveedores. Web + SEO + CRO + automatización en un solo equipo.",
  },
  {
    icon: Shield,
    title: "Expertos en Automatización",
    desc: "Integramos IA y bots en cada proyecto. Tu negocio trabaja mientras dormís.",
  },
  {
    icon: TrendingUp,
    title: "Enfoque en Resultados",
    desc: "No medimos likes, medimos ventas. Cada decisión está respaldada por datos.",
  },
];

const TESTIMONIALS = [
  {
    name: "Carolina Muñoz",
    role: "CEO, Wellness Studio",
    text: "Pasamos de 0 a 40 agendamientos mensuales después del rediseño. El SEO nos trajo clientes que no sabíamos que existían.",
    rating: 5,
  },
  {
    name: "Roberto Fuentes",
    role: "Director, TechRetail",
    text: "El bot de WhatsApp nos ahorra 20 horas semanales. Los clientes preguntan y compran a las 3 de la mañana.",
    rating: 5,
  },
  {
    name: "María José Soto",
    role: "Fundadora, Clínica Estética",
    text: "Nuestro sistema de gestión reemplazó 3 herramientas diferentes. Todo en un solo lugar, simple y rápido.",
    rating: 5,
  },
];

/* ─────────────────────────────────────────────
   PAGE
   ───────────────────────────────────────────── */

export default function Home() {
  return (
    <div className="relative">
      {/* ═══════════════════════════════════════
          HERO — Asymmetric, large type, real feel
          ═══════════════════════════════════════ */}

      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background gradient blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-brand-500/[0.04] blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-brand-400/[0.03] blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Copy */}
            <div>
              <FadeIn>
                <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-brand-600 bg-brand-50 border border-brand-100 rounded-full px-4 py-1.5 mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
                  Agencia digital en Chile
                </span>
              </FadeIn>

              <FadeIn delay={0.1}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[68px] font-bold tracking-tight text-text-primary leading-[1.08] mb-6">
                  Tu negocio necesita{" "}
                  <span className="text-brand-500">más que una web.</span>
                  <br />
                  Necesita resultados.
                </h1>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-lg text-text-secondary max-w-lg leading-relaxed mb-8">
                  Construimos páginas web, e-commerce, sistemas y automatizaciones
                  que generan ventas reales. No solo diseños bonitos — estrategia,
                  datos y ejecución.
                </p>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/contacto"
                    className="inline-flex items-center justify-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-semibold text-sm px-7 py-3.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-brand-500/20 active:scale-[0.98]"
                  >
                    Agendar reunión
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/portafolio"
                    className="inline-flex items-center justify-center gap-2 bg-white hover:bg-surface-alt text-text-primary font-semibold text-sm px-7 py-3.5 rounded-xl border border-border transition-all duration-200 active:scale-[0.98]"
                  >
                    Ver nuestro trabajo
                  </Link>
                </div>
              </FadeIn>

              <FadeIn delay={0.4}>
                <div className="flex items-center gap-4 mt-8 text-sm text-text-muted">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-success" />
                    Sin compromiso
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-success" />
                    Reunión de 20 min
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-success" />
                    100% gratis
                  </span>
                </div>
              </FadeIn>
            </div>

            {/* Right: Visual element — Stats + Services preview */}
            <FadeIn delay={0.2} className="hidden lg:block">
              <div className="relative">
                {/* Floating card: main */}
                <div className="bg-white rounded-2xl border border-border shadow-elevated p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-brand-500" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-text-primary">Impacto medible</p>
                      <p className="text-xs text-text-muted">Resultados desde el primer mes</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {STATS.map((stat) => (
                      <div
                        key={stat.label}
                        className="bg-surface-alt rounded-xl p-4 text-center"
                      >
                        <p className="text-2xl font-bold text-brand-500">{stat.value}</p>
                        <p className="text-xs text-text-muted mt-1">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="absolute -bottom-4 -left-4 bg-surface-dark text-white rounded-xl px-4 py-3 shadow-elevated"
                >
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-1">
                      {[...Array(4)].map((_, i) => (
                        <div
                          key={i}
                          className="w-6 h-6 rounded-full bg-brand-400 border-2 border-surface-dark flex items-center justify-center text-[8px] font-bold"
                        >
                          {["CM", "RF", "MJ", "DP"][i]}
                        </div>
                      ))}
                    </div>
                    <div>
                      <p className="text-xs font-semibold">50+ clientes</p>
                      <p className="text-[10px] text-zinc-400">confían en nosotros</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SERVICES — Large cards, asymmetric grid
          ═══════════════════════════════════════ */}

      <section className="section-padding bg-surface-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-xs font-semibold tracking-widest uppercase text-brand-500 mb-3">
              Lo que hacemos
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary mb-4">
              Soluciones completas para{" "}
              <span className="text-brand-500">crecer</span>
            </h2>
            <p className="text-text-secondary max-w-xl mb-12">
              No somos una web factory. Cada proyecto es una estrategia a medida
              diseñada para generar resultados medibles.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s, i) => (
              <FadeIn key={s.title} delay={i * 0.06}>
                <Link
                  href={`/servicios/${s.title.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}
                  className="group block bg-white rounded-2xl border border-border p-6 transition-all duration-300 hover:shadow-card-hover hover:border-brand-200 hover:-translate-y-1"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${s.color}10` }}
                  >
                    <s.icon className="w-6 h-6" style={{ color: s.color }} />
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-brand-500 transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed mb-4">
                    {s.desc}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Ver más <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          WHY US — Dark section, 3 columns
          ═══════════════════════════════════════ */}

      <section className="dark-section section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-xs font-semibold tracking-widest uppercase text-brand-400 mb-3">
              Por qué elegirnos
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
              No somos más de lo mismo.
            </h2>
            <p className="text-zinc-400 max-w-xl mb-12">
              Somos un equipo técnico que entiende de negocio. No solo programamos
              — resolvemos problemas.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {WHY_US.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6 hover:bg-white/[0.07] transition-colors duration-300">
                  <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-brand-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          PROCESS — Horizontal steps
          ═══════════════════════════════════════ */}

      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-xs font-semibold tracking-widest uppercase text-brand-500 mb-3">
              Cómo trabajamos
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary mb-12">
              De la idea al lanzamiento en{" "}
              <span className="text-brand-500">4 pasos</span>
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Diagnóstico", desc: "Analizamos tu negocio, competencia y objetivos. Definimos la estrategia." },
              { step: "02", title: "Diseño & Desarrollo", desc: "Creamos la solución con las mejores tecnologías y prácticas del mercado." },
              { step: "03", title: "Lanzamiento", desc: "Deploy, configuración de analytics, SEO técnico y monitoreo." },
              { step: "04", title: "Crecimiento", desc: "Optimización continua, CRO, automatizaciones y escalabilidad." },
            ].map((item, i) => (
              <FadeIn key={item.step} delay={i * 0.1}>
                <div className="relative">
                  <span className="text-6xl font-bold text-brand-500/10 absolute -top-2 -left-1">
                    {item.step}
                  </span>
                  <div className="relative pt-10">
                    <h3 className="text-lg font-semibold text-text-primary mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          TESTIMONIALS — Horizontal scroll cards
          ═══════════════════════════════════════ */}

      <section className="section-padding bg-surface-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-xs font-semibold tracking-widest uppercase text-brand-500 mb-3">
              Testimonios
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary mb-12">
              Lo que dicen nuestros clientes
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <FadeIn key={t.name} delay={i * 0.1}>
                <div className="bg-white rounded-2xl border border-border p-6 h-full flex flex-col">
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(t.rating)].map((_, j) => (
                      <Star
                        key={j}
                        className="w-4 h-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed flex-1 mb-6">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    <div className="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center text-sm font-bold text-brand-600">
                      {t.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-text-primary">
                        {t.name}
                      </p>
                      <p className="text-xs text-text-muted">{t.role}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CTA — Final conversion section
          ═══════════════════════════════════════ */}

      <section className="dark-section section-padding">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
              ¿Listo para hacer crecer tu negocio?
            </h2>
            <p className="text-zinc-400 max-w-lg mx-auto mb-8">
              Agendá una reunión de 20 minutos. Sin compromiso, sin ventas
              agresivas. Solo una conversación sobre cómo podemos ayudarte.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 bg-brand-500 hover:bg-brand-400 text-white font-semibold text-sm px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-brand-500/20 active:scale-[0.98]"
              >
                Agendar reunión gratis
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/569XXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BD5B] text-white font-semibold text-sm px-8 py-4 rounded-xl transition-all duration-200 active:scale-[0.98]"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
            <p className="text-xs text-zinc-500 mt-4">
              <Clock className="w-3 h-3 inline mr-1" />
              Respondemos en menos de 24 horas
            </p>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
