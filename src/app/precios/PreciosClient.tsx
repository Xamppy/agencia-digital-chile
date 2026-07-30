"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Check, Sparkles, Building2, Rocket } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

interface Plan {
  name: string;
  icon: React.ElementType;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
  href: string;
}

const plans: Plan[] = [
  {
    name: "Inicio",
    icon: Rocket,
    price: "$499.000",
    period: "proyecto",
    description:
      "Ideal para startups y pequeñas empresas que necesitan presencia digital profesional.",
    features: [
      "Landing page responsive",
      "Diseño personalizado",
      "Formulario de contacto",
      "Integración con Google Analytics",
      "Optimización SEO básica",
      "Entrega en 2 semanas",
      "1 mes de soporte post-lanzamiento",
    ],
    cta: "Comenzar Proyecto",
    href: "/contacto",
  },
  {
    name: "Profesional",
    icon: Building2,
    price: "$1.499.000",
    period: "proyecto",
    description:
      "Para empresas en crecimiento que requieren funcionalidades avanzadas y escalamiento.",
    features: [
      "Todo lo del plan Inicio",
      "Hasta 10 páginas",
      "Blog integrado",
      "Sistema de gestión de contenido",
      "E-commerce básico (hasta 50 productos)",
      "Pasarela de pago Webpay",
      "SEO avanzado",
      "Entrega en 4 semanas",
      "3 meses de soporte post-lanzamiento",
    ],
    highlighted: true,
    cta: "Elegir Profesional",
    href: "/contacto",
  },
  {
    name: "Empresarial",
    icon: Sparkles,
    price: "Bajo presupuesto",
    period: "personalizado",
    description:
      "Soluciones completas a medida: sistemas web, agentes IA, e-commerce avanzado y más.",
    features: [
      "Todo lo del plan Profesional",
      "Sistemas web a medida",
      "E-commerce ilimitado",
      "Agentes de IA personalizados",
      "Bots de WhatsApp empresariales",
      "Integraciones con APIs externas",
      "Panel de administración custom",
      "Soporte prioritario continuo",
      "Reuniones de seguimiento mensuales",
    ],
    cta: "Solicitar Presupuesto",
    href: "/contacto",
  },
];

const addOns = [
  {
    title: "SEO Avanzado",
    price: "$299.000/mes",
    description:
      "Estrategia completa de posicionamiento orgánico para Google Chile.",
  },
  {
    title: "Bot de WhatsApp",
    price: "$599.000",
    description:
      "Bot personalizado con flujos de conversación y panel de administración.",
  },
  {
    title: "Agente de IA",
    price: "Desde $899.000",
    description: "Agente inteligente entrenado con los datos de tu empresa.",
  },
  {
    title: "Mantenimiento Web",
    price: "$149.000/mes",
    description:
      "Actualizaciones, backups, monitoreo de uptime y soporte técnico.",
  },
];

const faqs = [
  {
    q: "¿Los precios incluyen IVA?",
    a: "Todos nuestros precios están expresados en pesos chilenos y se aplican los impuestos vigentes según la legislación chilena.",
  },
  {
    q: "¿Puedo cambiar de plan después de iniciar?",
    a: "Sí, puedes escalar a un plan superior en cualquier momento. El costo se ajusta de forma proporcional al tiempo restante.",
  },
  {
    q: "¿Cuánto tiempo tarda un proyecto?",
    a: "Depende del alcance. Landing pages: 2 semanas. Proyectos profesionales: 4 semanas. Soluciones empresariales: se acordará según requerimientos.",
  },
  {
    q: "¿Ofrecen planes de pago?",
    a: "Sí, para proyectos superiores a $1.000.000 ofrecemos planes de pago en cuotas sin interés.",
  },
  {
    q: "¿Qué incluye el soporte post-lanzamiento?",
    a: "Corrección de bugs, actualizaciones de seguridad, monitoreo de uptime y soporte técnico por correo electrónico.",
  },
];

export function PreciosClient() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 text-center bg-surface relative">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-brand-100 rounded-full blur-3xl opacity-60" />
        <div className="absolute top-40 right-1/3 w-72 h-72 bg-brand-50 rounded-full blur-3xl opacity-80" />

        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-text-primary"
          >
            Planes y{" "}
            <span className="text-gradient">Precios</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-text-secondary max-w-2xl mx-auto"
          >
            Soluciones flexibles que se adaptan al presupuesto de cada empresa.
            Sin costos ocultos, sin sorpresas.
          </motion.p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-8 items-start"
          >
            {plans.map((plan) => {
              const Icon = plan.icon;
              return (
                <motion.div
                  key={plan.name}
                  variants={fadeUp}
                  className={`relative rounded-2xl border p-8 transition-all duration-300 ${
                    plan.highlighted
                      ? "border-brand-400 bg-surface shadow-elevated ring-1 ring-brand-200"
                      : "border-border bg-surface hover:border-brand-200 shadow-card"
                  }`}
                >
                  {plan.highlighted && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-brand-500 text-xs font-semibold text-white">
                      Más Popular
                    </div>
                  )}

                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        plan.highlighted ? "bg-brand-50" : "bg-surface-alt"
                      }`}
                    >
                      <Icon
                        className={`w-5 h-5 ${
                          plan.highlighted
                            ? "text-brand-500"
                            : "text-text-muted"
                        }`}
                      />
                    </div>
                    <h3 className="text-xl font-bold text-text-primary">
                      {plan.name}
                    </h3>
                  </div>

                  <div className="mb-4">
                    <span className="text-3xl font-bold text-text-primary">
                      {plan.price}
                    </span>
                    {plan.period !== "personalizado" && (
                      <span className="text-text-muted text-sm">
                        {" "}
                        / {plan.period}
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-text-secondary mb-6">
                    {plan.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-start gap-3"
                      >
                        <div
                          className={`shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                            plan.highlighted ? "bg-brand-50" : "bg-surface-alt"
                          }`}
                        >
                          <Check
                            className={`w-3 h-3 ${
                              plan.highlighted
                                ? "text-brand-500"
                                : "text-text-muted"
                            }`}
                          />
                        </div>
                        <span className="text-sm text-text-secondary">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={plan.href}
                    className={`block w-full text-center py-3 rounded-xl font-semibold transition-all duration-300 ${
                      plan.highlighted
                        ? "bg-brand-500 hover:bg-brand-600 text-white shadow-lg shadow-brand-500/25"
                        : "border border-border hover:border-brand-300 text-text-secondary hover:text-text-primary"
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Add-ons - Dark */}
      <section className="section-padding bg-surface-dark">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Servicios{" "}
              <span className="text-brand-400">Complementarios</span>
            </h2>
            <p className="text-text-on-dark-secondary max-w-xl mx-auto">
              Agrega servicios adicionales a cualquier plan para potenciar aún
              más tu presencia digital.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {addOns.map((addon) => (
              <motion.div
                key={addon.title}
                variants={fadeUp}
                className="p-6 rounded-2xl border border-border-dark bg-surface-dark-alt/50"
              >
                <h3 className="font-semibold mb-1">{addon.title}</h3>
                <div className="text-lg font-bold text-brand-400 mb-3">
                  {addon.price}
                </div>
                <p className="text-xs text-text-on-dark-secondary">
                  {addon.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-text-primary">
              Preguntas{" "}
              <span className="text-gradient">Frecuentes</span>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="space-y-4"
          >
            {faqs.map((faq) => (
              <motion.div
                key={faq.q}
                variants={fadeUp}
                className="p-6 rounded-xl border border-border bg-surface-alt"
              >
                <h3 className="font-semibold mb-2 text-text-primary">
                  {faq.q}
                </h3>
                <p className="text-sm text-text-secondary">{faq.a}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
