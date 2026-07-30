"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/services";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

export default function ServiciosPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 text-center bg-surface relative">
        <div className="absolute top-20 left-1/3 w-72 h-72 bg-brand-100 rounded-full blur-3xl opacity-60" />
        <div className="absolute top-40 right-1/4 w-72 h-72 bg-brand-50 rounded-full blur-3xl opacity-80" />

        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-text-primary"
          >
            Nuestros{" "}
            <span className="text-gradient">Servicios</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-text-secondary max-w-2xl mx-auto"
          >
            Ofrecemos un portafolio completo de soluciones digitales diseñadas
            para impulsar el crecimiento de empresas en Chile.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-2 gap-8"
          >
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.slug}
                  variants={fadeUp}
                  className="card group"
                >
                  <div className="flex items-start gap-5">
                    <div className="shrink-0 w-14 h-14 rounded-xl bg-brand-50 flex items-center justify-center group-hover:bg-brand-100 transition-colors">
                      <Icon className="w-7 h-7 text-brand-500" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-bold mb-3 text-text-primary">
                        {service.title}
                      </h2>
                      <p className="text-text-secondary text-sm mb-6">
                        {service.description}
                      </p>

                      <div className="grid grid-cols-2 gap-2 mb-6">
                        {service.features.slice(0, 4).map((f) => (
                          <div
                            key={f}
                            className="flex items-center gap-2 text-xs text-text-muted"
                          >
                            <span className="w-1 h-1 rounded-full bg-brand-400 shrink-0" />
                            {f}
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {service.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs rounded-full border border-border text-text-muted bg-surface-alt"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <Link
                        href={`/servicios/${service.slug}`}
                        className="inline-flex items-center gap-2 text-sm text-brand-500 hover:text-brand-600 font-medium transition-colors"
                      >
                        Ver detalles del servicio
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
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
              ¿Necesitas una{" "}
              <span className="text-brand-400">solución personalizada</span>?
            </h2>
            <p className="text-text-on-dark-secondary mb-8">
              Cuéntanos sobre tu proyecto y diseñaremos una solución a medida
              que se adapte a tus necesidades y presupuesto.
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
    </>
  );
}
