"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

interface Project {
  title: string;
  category: string;
  description: string;
  results: string[];
  technologies: string[];
}

const projects: Project[] = [
  {
    title: "Tienda Online ModaChile",
    category: "E-commerce",
    description:
      "Plataforma de comercio electrónico para una marca de moda chilena con catálogo de +500 productos, sistema de tallas inteligente y pasarela de pagos Webpay.",
    results: [
      "+150% de ventas en el primer trimestre",
      "Reducción del 40% en abandonos de carro",
      "+80% de tráfico orgánico",
    ],
    technologies: ["Next.js", "PostgreSQL", "Webpay", "Vercel"],
  },
  {
    title: "Sistema CRM ConstructoraAndes",
    category: "Sistemas Web",
    description:
      "Sistema de gestión de clientes y proyectos para una constructora con +200 empleados. Incluye pipeline de ventas, seguimiento de proyectos y reporting.",
    results: [
      "-60% en tiempo de gestión administrativa",
      "+35% de conversión de prospectos",
      "ROI en 4 meses",
    ],
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Redis"],
  },
  {
    title: "Bot WhatsApp Clínica Vida",
    category: "Bots WhatsApp",
    description:
      "Bot de WhatsApp para agendamiento de citas, recordatorios de pacientes y respuesta a consultas frecuentes de una clínica con 5 sucursales.",
    results: [
      "Atención 24/7 automatizada",
      "-50% en llamadas telefónicas",
      "+90% de satisfacción del paciente",
    ],
    technologies: ["WhatsApp API", "Node.js", "CRM Integration"],
  },
  {
    title: "Agente IA RetailTech",
    category: "Agentes IA",
    description:
      "Agente de inteligencia artificial para soporte técnico de productos electrónicos, capaz de resolver consultas complejas y escalar a agentes humanos.",
    results: [
      "70% de consultas resueltas automáticamente",
      "-35% en costos de soporte",
      "Tiempo de respuesta: < 10 segundos",
    ],
    technologies: ["OpenAI", "LangChain", "FastAPI", "Vector DB"],
  },
  {
    title: "Landing Page SolarEnergy",
    category: "Landing Pages",
    description:
      "Landing de alta conversión para empresa de paneles solares con formulario de cotización, calculadora de ahorro y chat en vivo.",
    results: [
      "+200% de leads cualificados",
      "Tasa de conversión: 12%",
      "CPC reducido en 45%",
    ],
    technologies: ["Next.js", "Tailwind CSS", "Vercel"],
  },
  {
    title: "SEO LogísticaSur",
    category: "SEO",
    description:
      "Estrategia integral de SEO para empresa de logística que pasó de la página 5 a la posición 1 en keywords principales del sector.",
    results: [
      "Posición 1 en +15 keywords principales",
      "+400% de tráfico orgánico en 6 meses",
      "+120% de solicitudes de cotización",
    ],
    technologies: ["Google Analytics", "Search Console", "Ahrefs"],
  },
];

export function PortfolioClient() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 text-center bg-surface relative">
        <div className="absolute top-20 right-1/3 w-72 h-72 bg-brand-50 rounded-full blur-3xl opacity-80" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-brand-100 rounded-full blur-3xl opacity-60" />

        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-text-primary"
          >
            Nuestro{" "}
            <span className="text-gradient">Portafolio</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-text-secondary max-w-2xl mx-auto"
          >
            Proyectos reales, resultados reales. Descubre cómo hemos ayudado a
            empresas chilenas a transformar su presencia digital.
          </motion.p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project) => (
              <motion.div
                key={project.title}
                variants={fadeUp}
                className="card group overflow-hidden p-0"
              >
                {/* Placeholder image area */}
                <div className="h-48 bg-gradient-to-br from-brand-50 to-brand-100 flex items-center justify-center">
                  <span className="text-5xl font-bold text-brand-200">
                    {project.title.charAt(0)}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 text-xs rounded-full bg-brand-50 text-brand-600 border border-brand-200 font-medium">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold mb-2 text-text-primary">
                    {project.title}
                  </h3>
                  <p className="text-sm text-text-secondary mb-4">
                    {project.description}
                  </p>

                  {/* Results */}
                  <div className="space-y-2 mb-4">
                    {project.results.map((result) => (
                      <div
                        key={result}
                        className="flex items-center gap-2 text-xs"
                      >
                        <TrendingUp className="w-3.5 h-3.5 text-success shrink-0" />
                        <span className="text-success font-medium">
                          {result}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-[10px] rounded border border-border text-text-muted bg-surface-alt"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
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
              ¿Quieres ser nuestro próximo{" "}
              <span className="text-brand-400">caso de éxito</span>?
            </h2>
            <p className="text-text-on-dark-secondary mb-8">
              Cuéntanos tu idea y hagámosla realidad. Cada proyecto comienza
              con una conversación.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-500 hover:bg-brand-400 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-brand-500/25"
            >
              Iniciar Proyecto
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
