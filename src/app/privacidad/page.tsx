import { Footer } from '@/components/footer'

export const metadata = {
  title: 'Política de Privacidad - Creativv',
  description: 'Política de privacidad y protección de datos de Creativv',
}

export default function PrivacidadPage() {
  return (
    <div>
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-4">Política de Privacidad</h1>
        <p className="text-muted-foreground mb-6">Última actualización: 2025-09-16</p>
        <div className="prose prose-neutral dark:prose-invert">
          <p>En Creativv valoramos tu privacidad. Esta política explica cómo recopilamos, usamos y protegemos tus datos.</p>
          <h2>Datos que Recopilamos</h2>
          <p>Podemos recopilar datos de contacto, información de uso del sitio y comunicaciones que nos envíes.</p>
          <h2>Uso de la Información</h2>
          <p>Usamos tus datos para brindar y mejorar nuestros servicios, y para comunicarnos contigo.</p>
          <h2>Base Legal</h2>
          <p>Tratamos los datos conforme a las bases legales aplicables, incluyendo consentimiento e interés legítimo.</p>
          <h2>Compartición de Datos</h2>
          <p>No vendemos tus datos. Podemos compartirlos con proveedores que nos ayudan a operar el sitio, bajo acuerdos de confidencialidad.</p>
          <h2>Tus Derechos</h2>
          <p>Tienes derecho a acceder, rectificar y eliminar tus datos, entre otros. Contáctanos para ejercerlos.</p>
          <h2>Seguridad</h2>
          <p>Implementamos medidas razonables para proteger tus datos contra acceso no autorizado.</p>
          <h2>Cambios</h2>
          <p>Podemos actualizar esta política. Revisa esta página periódicamente.</p>
        </div>
      </main>
      <Footer />
    </div>
  )
}


