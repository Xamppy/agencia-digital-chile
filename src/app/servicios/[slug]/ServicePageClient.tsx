"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  ArrowLeft,
  Check,
  ChevronRight,
} from "lucide-react";
import { services, getServiceBySlug } from "@/lib/services";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

interface ServicePageClientProps {
  slug: string;
  nextSlug: string;
  prevSlug: string;
}

export function ServicePageClient({
  slug,
  nextSlug,
  prevSlug,
}: ServicePageClientProps) {
  const service = getServiceBySlug(slug);
  const nextService = getServiceBySlug(nextSlug);
  const prevService = getServiceBySlug(prevSlug);

  if (!service || !nextService || !prevService) return null;

  const Icon = service.icon;

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-surface relative">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-brand-100 rounded-full blur-3xl opacity-60" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/servicios"
              className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-brand-500 transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Todos los servicios
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-brand-50 flex items-center justify-center">
                <Icon className="w-7 h-7 text-brand-500" />
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary">
                {service.title}
              </h1>
            </div>

            <p className="text-lg text-text-secondary max-w-3xl">
              {service.longDescription}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features & Benefits */}
      <section className="section-padding bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Features List */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="text-2xl font-bold mb-6 text-text-primary">
                Características{" "}
                <span className="text-gradient">Incluidas</span>
              </h2>
              <div className="space-y-3">
                {service.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-3 p-4 rounded-xl bg-surface-alt border border-border"
                  >
                    <div className="shrink-0 w-6 h-6 rounded-full bg-brand-100 flex items-center justify-center mt-0.5">
                      <Check className="w-3.5 h-3.5 text-brand-500" />
                    </div>
                    <span className="text-sm text-text-primary">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Benefits + Tech */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-6 text-text-primary">
                Beneficios{" "}
                <span className="text-gradient">Clave</span>
              </h2>
              <div className="space-y-3 mb-12">
                {service.benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-start gap-3 p-4 rounded-xl bg-surface-alt border border-border"
                  >
                    <div className="shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                      <Check className="w-3.5 h-3.5 text-success" />
                    </div>
                    <span className="text-sm text-text-primary">{benefit}</span>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold mb-6 text-text-primary">
                Tecnologías que{" "}
                <span className="text-gradient">utilizamos</span>
              </h2>
              <div className="flex flex-wrap gap-3">
                {service.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 text-sm rounded-xl border border-border text-text-secondary bg-surface-alt"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA - Dark */}
      <section className="section-padding bg-surface-dark">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">
              ¿Te interesa este{" "}
              <span className="text-brand-400">servicio</span>?
            </h2>
            <p className="text-text-on-dark-secondary mb-8">
              Solicita una cotización sin compromiso y te asesoramos sobre la
              mejor solución para tu empresa.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-500 hover:bg-brand-400 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-brand-500/25"
            >
              Solicitar Presupuesto
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Navigation between services */}
      <section className="py-12 bg-surface border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <Link
              href={`/servicios/${prevService.slug}`}
              className="flex items-center gap-3 p-4 rounded-xl border border-border hover:border-brand-300 bg-surface-alt transition-all group flex-1"
            >
              <ArrowLeft className="w-5 h-5 text-text-muted group-hover:text-brand-500 transition-colors" />
              <div>
                <div className="text-xs text-text-muted">Anterior</div>
                <div className="text-sm font-semibold text-text-primary">
                  {prevService.shortTitle}
                </div>
              </div>
            </Link>
            <Link
              href={`/servicios/${nextService.slug}`}
              className="flex items-center justify-end gap-3 p-4 rounded-xl border border-border hover:border-brand-300 bg-surface-alt transition-all group flex-1 text-right"
            >
              <div>
                <div className="text-xs text-text-muted">Siguiente</div>
                <div className="text-sm font-semibold text-text-primary">
                  {nextService.shortTitle}
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-text-muted group-hover:text-brand-500 transition-colors" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
