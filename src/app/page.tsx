"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Rocket,
  Shield,
  Zap,
  Target,
  ChevronRight,
  Star,
  TrendingUp,
  Users,
  Award,
  Clock,
  CheckCircle2,
} from "lucide-react";
import { services } from "@/lib/services";
import { cn } from "@/lib/utils";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const stats = [
  { number: "+100", label: "Proyectos entregados", icon: CheckCircle2 },
  { number: "+50", label: "Clientes satisfechos", icon: Users },
  { number: "+5", label: "Años de experiencia", icon: Award },
  { number: "99%", label: "Tiempo de actividad", icon: Clock },
];

const whyUs = [
  {
    icon: Rocket,
    title: "Tecnología de Vanguardia",
    description:
      "Utilizamos las últimas tecnologías para entregar soluciones rápidas, escalables y modernas.",
  },
  {
    icon: Shield,
    title: "Confianza y Transparencia",
    description:
      "Procesos claros, comunicación constante y cumplimiento de plazos y presupuestos acordados.",
  },
  {
    icon: Zap,
    title: "Enfoque en Resultados",
    description:
      "Cada proyecto está orientado a generar impacto real en el crecimiento de tu negocio.",
  },
  {
    icon: Target,
    title: "Especialistas en Chile",
    description:
      "Conocemos el mercado chileno y adaptamos nuestras soluciones a las necesidades locales.",
  },
];

const testimonials = [
  {
    name: "María Fernández",
    company: "RetailTech SpA",
    text: "La tienda online que desarrollaron superó nuestras expectativas. Las ventas aumentaron un 200% en los primeros 3 meses.",
    rating: 5,
  },
  {
    name: "Carlos Mendoza",
    company: "Constructora Andes",
    text: "El sistema web que implementaron nos permitió reducir los tiempos de gestión en un 60%. Excelente equipo.",
    rating: 5,
  },
  {
    name: "Ana Castillo",
    company: "Clínica Vida",
    text: "El bot de WhatsApp transformó nuestra atención al paciente. Respondemos consultas 24/7 sin sobrecargar al personal.",
    rating: 5,
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-surface">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-brand-100 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-brand-50 rounded-full blur-3xl opacity-80" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-200 bg-brand-50 text-brand-600 text-sm font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
              Agencia Digital en Chile
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6 text-text-primary">
              Transformamos tu negocio
              <br />
              con{" "}
              <span className="text-gradient">
                soluciones digitales
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto mb-10">
              Desarrollamos páginas web, tiendas online, sistemas a medida,
              agentes de IA y bots de WhatsApp que impulsan el crecimiento de
              empresas en Chile.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40"
              >
                Solicitar Presupuesto
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/servicios"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-border hover:border-brand-300 text-text-secondary hover:text-text-primary font-semibold rounded-xl transition-all duration-300"
              >
                Ver Servicios
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-surface-alt border-y border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  variants={fadeUp}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-50 mb-3">
                    <Icon className="w-6 h-6 text-brand-500" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-bold text-text-primary mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-text-secondary">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-text-primary">
              Nuestros{" "}
              <span className="text-gradient">Servicios</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Soluciones digitales completas para cada etapa de tu negocio.
              Desde la presencia web hasta la automatización inteligente.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.slug}
                  variants={fadeUp}
                  className="card group"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center mb-4 group-hover:bg-brand-100 transition-colors">
                    <Icon className="w-6 h-6 text-brand-500" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-text-primary">
                    {service.shortTitle}
                  </h3>
                  <p className="text-sm text-text-secondary mb-4">
                    {service.description}
                  </p>
                  <Link
                    href={`/servicios/${service.slug}`}
                    className="inline-flex items-center gap-1 text-sm text-brand-500 hover:text-brand-600 font-medium transition-colors"
                  >
                    Ver más
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Why Us Section - Dark */}
      <section className="dark-section section-padding">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              ¿Por qué{" "}
              <span className="text-brand-400">elegirnos</span>?
            </h2>
            <p className="text-text-on-dark-secondary max-w-2xl mx-auto">
              Somos más que proveedores, somos socios estratégicos en la
              transformación digital de tu empresa.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-2 gap-6"
          >
            {whyUs.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  className="flex gap-4 p-6 rounded-2xl border border-border-dark bg-surface-dark-alt/50"
                >
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-brand-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-text-on-dark-secondary">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-text-primary">
              Lo que dicen nuestros{" "}
              <span className="text-gradient">clientes</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              La satisfacción de nuestros clientes es nuestra mejor carta de
              presentación.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-6"
          >
            {testimonials.map((t) => (
              <motion.div
                key={t.name}
                variants={fadeUp}
                className="card"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <p className="text-text-secondary text-sm mb-6 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div>
                  <div className="font-semibold text-sm text-text-primary">
                    {t.name}
                  </div>
                  <div className="text-xs text-text-muted">{t.company}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Dark */}
      <section className="section-padding bg-surface-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative p-12 rounded-3xl border border-border-dark bg-surface-dark-alt text-center overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-400/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-400 text-sm mb-6">
                <TrendingUp className="w-4 h-4" />
                Impulsa tu negocio hoy
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                ¿Listo para{" "}
                <span className="text-brand-400">transformar</span> tu empresa?
              </h2>
              <p className="text-text-on-dark-secondary max-w-xl mx-auto mb-8">
                Agenda una consulta gratuita y descubre cómo podemos ayudarte a
                alcanzar tus objetivos digitales.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-500 hover:bg-brand-400 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-brand-500/25"
                >
                  Contactar Ahora
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/precios"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-border-dark hover:border-brand-500/50 text-text-on-dark-secondary hover:text-text-on-dark font-semibold rounded-xl transition-all duration-300"
                >
                  Ver Planes
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
