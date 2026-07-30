import {
  Globe,
  ShoppingCart,
  Search,
  Layout,
  Bot,
  MessageCircle,
  LucideIcon,
} from "lucide-react";

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  longDescription: string;
  icon: LucideIcon;
  features: string[];
  benefits: string[];
  technologies: string[];
}

export const services: Service[] = [
  {
    slug: "landing-pages",
    title: "Landing Pages de Alto Impacto",
    shortTitle: "Landing Pages",
    description:
      "Creamos landing pages optimizadas para convertir visitantes en clientes, con diseños atractivos y llamadas a la acción efectivas.",
    longDescription:
      "Nuestras landing pages están diseñadas con un enfoque en conversión. Utilizamos técnicas de diseño UX/UI probadas, cargas ultrarrápidas y contenido estratégico para maximizar cada visita. Cada página es medida y optimizada continuamente para lograr los mejores resultados en captación de leads y ventas.",
    icon: Layout,
    features: [
      "Diseño responsive y moderno",
      "Optimización de velocidad de carga",
      "A/B testing integrado",
      "Formularios de captación de leads",
      "Integración con herramientas de analytics",
      "Diseño mobile-first",
    ],
    benefits: [
      "Mayor tasa de conversión",
      "Reducción del costo por lead",
      "Experiencia de usuario superior",
      "Resultados medibles y escalables",
    ],
    technologies: ["Next.js", "React", "Tailwind CSS", "Vercel"],
  },
  {
    slug: "ecommerce",
    title: "E-commerce Completo",
    shortTitle: "E-commerce",
    description:
      "Desarrollamos tiendas online completas con pasarelas de pago chilenas, gestión de inventario y panel de administración.",
    longDescription:
      "Construimos plataformas de comercio electrónico robustas y escalables, integradas con las principales pasarelas de pago en Chile (Webpay, Transbank, Mercado Pago). Nuestras tiendas incluyen gestión completa de inventario, panel de administración intuitivo, y herramientas de marketing digital integradas.",
    icon: ShoppingCart,
    features: [
      "Integración con Webpay y Transbank",
      "Pasarelas de pago internacionales",
      "Gestión de inventario en tiempo real",
      "Panel de administración personalizado",
      "Carro de compras optimizado",
      "Sistema de descuentos y promociones",
      "Notificaciones de stock bajo",
      "Múltiples métodos de envío",
    ],
    benefits: [
      "Incremento en ventas online",
      "Automatización de procesos de venta",
      "Experiencia de compra excepcional",
      "Escalabilidad para alto tráfico",
    ],
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "Webpay"],
  },
  {
    slug: "seo",
    title: "SEO y Posicionamiento Web",
    shortTitle: "SEO",
    description:
      "Estrategias de posicionamiento orgánico para que tu negocio sea encontrado por clientes potenciales en Google Chile.",
    longDescription:
      "Implementamos estrategias SEO técnicas, on-page y off-page específicas para el mercado chileno. Desde la auditoría inicial hasta la estrategia de contenido a largo plazo, nos enfocamos en posicionar tu negocio en los primeros resultados de Google para las búsquedas más relevantes de tu industria.",
    icon: Search,
    features: [
      "Auditoría SEO completa",
      "Investigación de keywords para Chile",
      "Optimización técnica on-page",
      "Estrategia de contenido",
      "Link building de calidad",
      "SEO local para Google Maps",
      "Informes mensuales de rendimiento",
      "Optimización Core Web Vitals",
    ],
    benefits: [
      "Mayor tráfico orgánico cualificado",
      "Reducción de dependencia de publicidad pagada",
      "Autoridad de marca en línea",
      "ROI a largo plazo",
    ],
    technologies: ["Google Analytics", "Search Console", "Ahrefs", "Screaming Frog"],
  },
  {
    slug: "sistemas-web",
    title: "Sistemas Web a Medida",
    shortTitle: "Sistemas Web",
    description:
      "Desarrollamos sistemas web personalizados para automatizar y optimizar los procesos de tu empresa.",
    longDescription:
      "Creamos sistemas web personalizados que se adaptan a los procesos específicos de tu empresa. Desde sistemas de gestión de clientes (CRM) hasta plataformas de gestión de inventarios, sistemas de reservas, portales de empleados y herramientas de business intelligence. Cada sistema es diseñado para resolver problemas reales y optimizar operaciones.",
    icon: Globe,
    features: [
      "Análisis y levantamiento de requerimientos",
      "Arquitectura de software escalable",
      "APIs RESTful y GraphQL",
      "Autenticación y control de acceso",
      "Dashboard administrativo",
      "Reportes y analytics",
      "Integración con sistemas existentes",
      "Soporte y mantenimiento continuo",
    ],
    benefits: [
      "Automatización de procesos manuales",
      "Reducción de errores humanos",
      "Mayor productividad del equipo",
      "Visibilidad en tiempo real de operaciones",
    ],
    technologies: ["Next.js", "Node.js", "TypeScript", "PostgreSQL", "Redis"],
  },
  {
    slug: "agentes-ia",
    title: "Agentes de Inteligencia Artificial",
    shortTitle: "Agentes IA",
    description:
      "Implementamos agentes inteligentes que automatizan la atención al cliente, ventas y procesos internos de tu empresa.",
    longDescription:
      "Diseñamos e implementamos agentes de IA personalizados utilizando los últimos avances en inteligencia artificial. Desde chatbots inteligentes hasta agentes de soporte técnico, asistentes de ventas y herramientas de procesamiento de documentos. Nuestros agentes aprenden de tu negocio para ofrecer respuestas precisas y contextuales.",
    icon: Bot,
    features: [
      "Chatbots con procesamiento de lenguaje natural",
      "Integración con bases de conocimiento",
      "Entrenamiento con datos de tu empresa",
      "Múltiples canales de comunicación",
      "Escalamiento automático a agentes humanos",
      "Análisis de sentimientos",
      "Respuestas multilingües",
      "Aprendizaje continuo",
    ],
    benefits: [
      "Atención al cliente 24/7",
      "Reducción de costos operativos",
      "Tiempos de respuesta inmediatos",
      "Escalabilidad sin contratar más personal",
    ],
    technologies: ["OpenAI", "LangChain", "Python", "FastAPI", "Vector DB"],
  },
  {
    slug: "bots-whatsapp",
    title: "Bots de WhatsApp Empresariales",
    shortTitle: "Bots WhatsApp",
    description:
      "Automatiza la comunicación con tus clientes mediante bots de WhatsApp que atienden, venden y resuelven consultas.",
    longDescription:
      "WhatsApp es el canal de comunicación preferido en Chile. Nuestros bots de WhatsApp empresariales permiten automatizar la atención al cliente, el proceso de ventas, el seguimiento de pedidos y mucho más. Integramos con la API oficial de WhatsApp Business y con sistemas CRM para una experiencia completa y sin fricciones.",
    icon: MessageCircle,
    features: [
      "Integración con WhatsApp Business API",
      "Flujos de conversación personalizados",
      "Catálogo de productos integrado",
      "Envío de comprobantes y documentos",
      "Agendamiento de citas",
      "Seguimiento de pedidos",
      "Notificaciones automatizadas",
      "Transferencia a agente humano",
    ],
    benefits: [
      "Alcance masivo en el canal preferido",
      "Automatización de ventas y soporte",
      "Mejora en tiempos de respuesta",
      "Mayor satisfacción del cliente",
    ],
    technologies: ["WhatsApp Business API", "Node.js", "Python", "CRM Integration"],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
