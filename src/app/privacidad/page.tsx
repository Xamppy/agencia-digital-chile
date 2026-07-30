import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description:
    "Política de privacidad de Agencia Digital Chile. Conoce cómo recopilamos, usamos y protegemos tu información personal.",
};

export default function PrivacidadPage() {
  return (
    <section className="section-padding bg-surface">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-text-primary">
          Política de Privacidad
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
              1. Información que recopilamos
            </h2>
            <p>
              En Agencia Digital Chile recopilamos información que usted nos
              proporciona directamente al contactarnos, solicitar una cotización
              o contratar nuestros servicios. Esta información puede incluir:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>Nombre completo y datos de contacto (email, teléfono)</li>
              <li>Nombre de la empresa y cargo</li>
              <li>Información sobre su proyecto o requerimientos</li>
              <li>Datos de facturación para servicios contratados</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-text-primary mb-3 mt-8">
              2. Uso de la información
            </h2>
            <p>
              Utilizamos la información recopilada para los siguientes fines:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>Responder a sus consultas y solicitudes de cotización</li>
              <li>Prestar los servicios contratados</li>
              <li>Enviar comunicaciones relacionadas con su proyecto</li>
              <li>Mejorar nuestros servicios y experiencia del cliente</li>
              <li>Cumplir con obligaciones legales y tributarias</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-text-primary mb-3 mt-8">
              3. Protección de datos
            </h2>
            <p>
              Implementamos medidas de seguridad técnicas y organizativas para
              proteger su información personal contra acceso no autorizado,
              alteración, divulgación o destrucción. Sus datos son tratados con
              confidencialidad y no son compartidos con terceros sin su
              consentimiento, salvo que sea necesario para la prestación del
              servicio contratado o cuando lo requiera la ley.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-text-primary mb-3 mt-8">
              4. Derechos del titular
            </h2>
            <p>
              Conforme a la Ley N° 19.628 sobre protección de datos personales
              en Chile, usted tiene derecho a:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>
                Acceder a sus datos personales que obran en nuestro poder
              </li>
              <li>Solicitar la rectificación o actualización de sus datos</li>
              <li>Solicitar la eliminación de sus datos personales</li>
              <li>Oponerse al tratamiento de sus datos para fines específicos</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-text-primary mb-3 mt-8">
              5. Cookies y tecnologías de rastreo
            </h2>
            <p>
              Nuestro sitio web utiliza cookies y tecnologías similares para
              mejorar su experiencia de navegación, analizar el tráfico del sitio
              y personalizar el contenido. Puede configurar su navegador para
              rechazar cookies, aunque esto podría afectar la funcionalidad del
              sitio.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-text-primary mb-3 mt-8">
              6. Retención de datos
            </h2>
            <p>
              Conservamos su información personal solo durante el tiempo necesario
              para cumplir con los fines para los que fue recopilada, o según lo
              requiera la legislación vigente. Una vez finalizada la relación
              comercial, sus datos serán eliminados o anonimizados de manera
              segura.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-text-primary mb-3 mt-8">
              7. Cambios en esta política
            </h2>
            <p>
              Nos reservamos el derecho de modificar esta política de privacidad
              en cualquier momento. Los cambios serán publicados en esta página y
              entrarán en vigor desde su publicación. Le recomendamos revisar
              periódicamente esta política.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-text-primary mb-3 mt-8">
              8. Contacto
            </h2>
            <p>
              Si tiene preguntas sobre esta política de privacidad o sobre el
              tratamiento de sus datos personales, puede contactarnos a través de
              correo electrónico a{" "}
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
