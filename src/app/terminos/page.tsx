import { Footer } from '@/components/footer'

export const metadata = {
  title: 'Términos y Condiciones - Creativv',
  description: 'Términos y condiciones de uso del sitio web de Creativv',
}

export default function TerminosPage() {
  return (
    <div>
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-4">Términos y Condiciones</h1>
        <p className="text-muted-foreground mb-6">Última actualización: 2025-09-16</p>
        <div className="prose prose-neutral dark:prose-invert">
          <p>Bienvenido a Creativv. Al acceder y utilizar este sitio web, aceptas cumplir con estos términos y condiciones.</p>
          <h2>Uso del Sitio</h2>
          <p>Te comprometes a utilizar el sitio de manera legal y respetuosa, sin infringir derechos de terceros.</p>
          <h2>Propiedad Intelectual</h2>
          <p>Todo el contenido, marcas y logotipos son propiedad de Creativv o de sus licenciantes y están protegidos por leyes aplicables.</p>
          <h2>Limitación de Responsabilidad</h2>
          <p>Creativv no será responsable por daños indirectos o incidentales derivados del uso de este sitio.</p>
          <h2>Modificaciones</h2>
          <p>Podemos actualizar estos términos en cualquier momento. Te recomendamos revisarlos periódicamente.</p>
          <h2>Contacto</h2>
          <p>Si tienes preguntas sobre estos términos, contáctanos a través de nuestros canales habituales.</p>
        </div>
      </main>
      <Footer />
    </div>
  )
}


