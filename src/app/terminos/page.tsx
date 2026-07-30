import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos de Servicio",
  description:
    "Términos y condiciones de servicio de Agencia Digital Chile. Conoce las condiciones bajo las cuales prestamos nuestros servicios.",
};

export default function TerminosPage() {
  return (
    <section className="section-padding bg-surface">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-text-primary">
          Términos de Servicio
        </h1>

        <div className="prose prose-slate max-w-none space-y-6 text-text-secondary text-sm leading-relaxed">
          <p>
            <strong className="text-text-primary">Última actualización:</strong>{" "}
            {new Date().toLocaleDateString("es-CL", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>

          <div>
            <h2 className="text-xl font-semibold text-text-primary mb-3 mt-8">
              1. Aceptación de los términos
            </h2>
            <p>
              Al contratar los servicios de Agencia Digital Chile, usted acepta
              los presentes términos y condiciones en su totalidad. Si no está de
              acuerdo con alguno de estos términos, le recomendamos no contratar
              nuestros servicios.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-text-primary mb-3 mt-8">
              2. Alcance de los servicios
            </h2>
            <p>
              Los servicios de Agencia Digital Chile incluyen, pero no se limitan
              a: desarrollo de landing pages, tiendas online (e-commerce),
              servicios de posicionamiento web (SEO), desarrollo de sistemas web
              a medida, implementación de agentes de inteligencia artificial y
              bots de WhatsApp empresariales.
            </p>
            <p className="mt-3">
              El alcance específico de cada proyecto se define en la propuesta
              comercial y cotización aceptada por el cliente.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-text-primary mb-3 mt-8">
              3. Proceso de trabajo y entregables
            </h2>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>
                Cada proyecto inicia con una fase de levantamiento de
                requerimientos
              </li>
              <li>
                Se presentará una propuesta técnica y comercial antes del inicio
                del desarrollo
              </li>
              <li>
                Los plazos de entrega se acuerdan en la cotización y comienzan a
                contar desde la aprobación del proyecto y recepción del primer
                pago
              </li>
              <li>
                Los entregables intermedios se revisan y aprueban de forma
                conjunta
              </li>
              <li>
                El número de rondas de revisión se especifica en cada propuesta
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-text-primary mb-3 mt-8">
              4. Pagos
            </h2>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>
                Los precios están expresados en pesos chilenos (CLP) e incluyen
                los impuestos vigentes
              </li>
              <li>
                Para proyectos mayores a $1.000.000 CLP se establece un plan de
                pagos en cuotas sin interés
              </li>
              <li>
                El pago inicial (50% o según lo acordado) es condición para el
                inicio del proyecto
              </li>
              <li>
                Los pagos pendientes se facturan según el avance del proyecto
              </li>
              <li>
                Los pagos vencidos generarán intereses de acuerdo con la
                legislación chilena vigente
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-text-primary mb-3 mt-8">
              5. Propiedad intelectual
            </h2>
            <p>
              Una vez completado el pago total del proyecto, el cliente adquiere
              los derechos de propiedad intelectual sobre el código fuente,
              diseño y contenido entregado. Agencia Digital Chile se reserva el
              derecho de utilizar el proyecto como caso de portafolio, salvo que
              el cliente solicite lo contrario por escrito.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-text-primary mb-3 mt-8">
              6. Garantía y soporte
            </h2>
            <p>
              Cada plan incluye un período de soporte post-lanzamiento según lo
              especificado en la cotización. Durante este período se cubren:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>Corrección de errores y bugs</li>
              <li>Actualizaciones de seguridad</li>
              <li>Monitoreo de uptime (según plan)</li>
              <li>Soporte técnico por correo electrónico</li>
            </ul>
            <p className="mt-3">
              Los servicios fuera del alcance de la garantía se cotizan
              independientemente.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-text-primary mb-3 mt-8">
              7. Limitación de responsabilidad
            </h2>
            <p>
              Agencia Digital Chile no será responsable por daños indirectos,
              lucro cesante o pérdidas derivadas del uso de los servicios. La
              responsabilidad máxima se limitará al monto total pagado por el
              cliente por el servicio específico que genera la reclamación.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-text-primary mb-3 mt-8">
              8. Confidencialidad
            </h2>
            <p>
              Ambas partes se comprometen a mantener la confidencialidad de la
              información sensible compartida durante la relación comercial. Esta
              obligación se mantiene incluso después de finalizada la relación
              comercial.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-text-primary mb-3 mt-8">
              9. Cancelación y reembolsos
            </h2>
            <p>
              El cliente puede cancelar el proyecto en cualquier momento por
              escrito. En caso de cancelación, se facturará el trabajo realizado
              hasta la fecha de notificación. No se realizan reembolsos por
              trabajos ya ejecutados.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-text-primary mb-3 mt-8">
              10. Legislación aplicable
            </h2>
            <p>
              Estos términos se rigen por las leyes de la República de Chile.
              Cualquier controversia será sometida a los tribunales competentes
              de Santiago de Chile.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-text-primary mb-3 mt-8">
              11. Contacto
            </h2>
            <p>
              Para consultas sobre estos términos de servicio, puede
              contactarnos a través de correo electrónico a{" "}
              <a
                href="mailto:hola@agenciadigitalchile.cl"
                className="text-brand-500 hover:text-brand-600"
              >
                hola@agenciadigitalchile.cl
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
