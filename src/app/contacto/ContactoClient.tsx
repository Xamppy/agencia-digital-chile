"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hola@agenciadigitalchile.cl",
    href: "mailto:hola@agenciadigitalchile.cl",
  },
  {
    icon: Phone,
    label: "Teléfono",
    value: "+56 9 1234 5678",
    href: "tel:+56912345678",
  },
  {
    icon: MapPin,
    label: "Ubicación",
    value: "Santiago, Chile",
    href: "#",
  },
  {
    icon: Clock,
    label: "Horario",
    value: "Lun - Vie: 9:00 - 18:00",
    href: "#",
  },
];

const serviceOptions = [
  "Landing Page",
  "E-commerce",
  "SEO",
  "Sistema Web a Medida",
  "Agente de IA",
  "Bot de WhatsApp",
  "Otro",
];

export function ContactoClient() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 text-center bg-surface relative">
        <div className="absolute top-20 left-1/3 w-72 h-72 bg-brand-100 rounded-full blur-3xl opacity-60" />
        <div className="absolute top-10 right-1/4 w-72 h-72 bg-brand-50 rounded-full blur-3xl opacity-80" />

        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-text-primary"
          >
            <span className="text-gradient">Contacto</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-text-secondary max-w-2xl mx-auto"
          >
            Cuéntanos sobre tu proyecto. Te responderemos en menos de 24 horas
            con una propuesta personalizada.
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info Sidebar */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="lg:col-span-2 space-y-6"
            >
              <div>
                <h2 className="text-2xl font-bold mb-2 text-text-primary">
                  Información de{" "}
                  <span className="text-gradient">Contacto</span>
                </h2>
                <p className="text-sm text-text-secondary">
                  Estamos aquí para ayudarte. Elige el medio que prefieras.
                </p>
              </div>

              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={item.label}
                    variants={fadeUp}
                    href={item.href}
                    className="flex items-start gap-4 p-4 rounded-xl border border-border bg-surface-alt hover:border-brand-200 transition-all group"
                  >
                    <div className="shrink-0 w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center group-hover:bg-brand-100 transition-colors">
                      <Icon className="w-5 h-5 text-brand-500" />
                    </div>
                    <div>
                      <div className="text-xs text-text-muted mb-1">
                        {item.label}
                      </div>
                      <div className="text-sm font-medium text-text-primary">
                        {item.value}
                      </div>
                    </div>
                  </motion.a>
                );
              })}

              {/* WhatsApp CTA */}
              <motion.div
                variants={fadeUp}
                className="p-6 rounded-2xl border border-green-200 bg-green-50"
              >
                <div className="flex items-center gap-3 mb-3">
                  <MessageCircle className="w-6 h-6 text-green-600" />
                  <h3 className="font-semibold text-green-800">
                    ¿Prefieres WhatsApp?
                  </h3>
                </div>
                <p className="text-sm text-green-700 mb-4">
                  Envíanos un mensaje directo y te atenderemos de inmediato.
                </p>
                <a
                  href="https://wa.me/56912345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-all duration-300 text-sm"
                >
                  Abrir WhatsApp
                  <MessageCircle className="w-4 h-4" />
                </a>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="lg:col-span-3"
            >
              {submitted ? (
                <div className="p-12 rounded-2xl border border-green-200 bg-green-50 text-center">
                  <CheckCircle2 className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold mb-2 text-text-primary">
                    ¡Mensaje Enviado!
                  </h2>
                  <p className="text-text-secondary">
                    Gracias por contactarnos. Te responderemos en menos de 24
                    horas.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="p-8 rounded-2xl border border-border bg-surface-alt"
                >
                  <h2 className="text-2xl font-bold mb-6 text-text-primary">
                    Solicita tu{" "}
                    <span className="text-gradient">Cotización</span>
                  </h2>

                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-text-secondary mb-1.5">
                        Nombre completo *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Tu nombre"
                        className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-text-primary text-sm placeholder-text-muted focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-secondary mb-1.5">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="tu@email.cl"
                        className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-text-primary text-sm placeholder-text-muted focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-secondary mb-1.5">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+56 9 1234 5678"
                        className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-text-primary text-sm placeholder-text-muted focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-secondary mb-1.5">
                        Empresa
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Nombre de tu empresa"
                        className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-text-primary text-sm placeholder-text-muted focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-text-secondary mb-1.5">
                        Servicio de interés *
                      </label>
                      <select
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-text-primary text-sm focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-colors"
                      >
                        <option value="">Selecciona un servicio</option>
                        {serviceOptions.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-secondary mb-1.5">
                        Presupuesto aproximado
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-text-primary text-sm focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-colors"
                      >
                        <option value="">Selecciona un rango</option>
                        <option value="menos-500k">
                          Menos de $500.000
                        </option>
                        <option value="500k-1m">
                          $500.000 - $1.000.000
                        </option>
                        <option value="1m-3m">
                          $1.000.000 - $3.000.000
                        </option>
                        <option value="mas-3m">Más de $3.000.000</option>
                        <option value="no-se">No estoy seguro/a</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-text-secondary mb-1.5">
                      Cuéntanos sobre tu proyecto *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe tu proyecto, objetivos y cualquier detalle relevante..."
                      className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-text-primary text-sm placeholder-text-muted focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-brand-500/25"
                  >
                    <Send className="w-5 h-5" />
                    Enviar Mensaje
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
