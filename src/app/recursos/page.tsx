'use client'

import * as React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Download, BookOpen, Calculator, FileText, Video, Lightbulb, ArrowRight, CheckCircle, Mail } from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import Link from 'next/link'

export default function RecursosPage() {
  const [darkMode, setDarkMode] = React.useState(false)
  const [mounted, setMounted] = React.useState(false)
  const [email, setEmail] = React.useState('')

  React.useEffect(() => {
    setMounted(true)
    const savedMode = localStorage.getItem('darkMode')
    if (savedMode !== null) {
      setDarkMode(savedMode === 'true')
    }
  }, [])

  React.useEffect(() => {
    if (mounted) {
      if (darkMode) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
  }, [darkMode, mounted])

  const handleToggleDarkMode = () => {
    const newMode = !darkMode
    setDarkMode(newMode)
    localStorage.setItem('darkMode', newMode.toString())
  }

  const handleDownload = (resourceTitle: string) => {
    setSelectedResource(resourceTitle)
    // In production, this would trigger actual download after email capture
  }

  const freeResources = [
    {
      title: "Guía Completa de Automatización con n8n",
      description: "Aprende a automatizar procesos empresariales paso a paso. Incluye 15 workflows listos para usar.",
      type: "PDF Guide",
      icon: <BookOpen className="h-6 w-6" />,
      color: "from-blue-500 to-cyan-500",
      benefits: [
        "15 workflows n8n pre-configurados",
        "Casos de uso reales por industria",
        "Mejores prácticas y tips de seguridad",
        "Guía de integración con IA"
      ]
    },
    {
      title: "Calculadora ROI de Automatización",
      description: "Descubre cuánto tiempo y dinero puedes ahorrar automatizando tus procesos.",
      type: "Interactive Tool",
      icon: <Calculator className="h-6 w-6" />,
      color: "from-purple-500 to-pink-500",
      link: "/recursos/calculadora-roi",
      benefits: [
        "Cálculo preciso de ahorro de tiempo",
        "Estimación de ROI en 12 meses",
        "Comparación de costos",
        "Reporte descargable en PDF"
      ]
    },
    {
      title: "Templates de Workflows n8n",
      description: "10 plantillas listas para importar: CRM, email marketing, gestión de leads y más.",
      type: "JSON Templates",
      icon: <FileText className="h-6 w-6" />,
      color: "from-orange-500 to-red-500",
      benefits: [
        "10 templates profesionales",
        "Documentación completa",
        "Casos de uso explicados",
        "Actualizaciones gratuitas"
      ]
    },
    {
      title: "Checklist: ¿Estás Listo para BI?",
      description: "Evaluación gratuita de 20 puntos para saber si tu empresa está lista para Business Intelligence.",
      type: "PDF Checklist",
      icon: <CheckCircle className="h-6 w-6" />,
      color: "from-green-500 to-emerald-500",
      benefits: [
        "Autoevaluación en 10 minutos",
        "Recomendaciones personalizadas",
        "Roadmap sugerido",
        "Benchmarks de industria"
      ]
    },
    {
      title: "Video Tutorial: Primeros Pasos con IA",
      description: "Serie de 5 videos mostrando cómo integrar ChatGPT y Claude en tus procesos.",
      type: "Video Series",
      icon: <Video className="h-6 w-6" />,
      color: "from-indigo-500 to-blue-500",
      benefits: [
        "5 videos paso a paso",
        "Ejemplos de código incluidos",
        "Casos de uso reales",
        "Acceso de por vida"
      ]
    },
    {
      title: "eBook: 50 Procesos Que Debes Automatizar",
      description: "Los procesos más comunes que empresas exitosas automatizan primero, con ROI verificado.",
      type: "eBook",
      icon: <Lightbulb className="h-6 w-6" />,
      color: "from-yellow-500 to-orange-500",
      benefits: [
        "50 procesos priorizados por ROI",
        "Herramientas recomendadas",
        "Estimación de tiempo de implementación",
        "Casos de estudio incluidos"
      ]
    }
  ]

  return (
    <div className={`min-h-screen flex flex-col w-full ${mounted && darkMode ? 'dark' : ''}`}>
      <Header 
        darkMode={darkMode} 
        onToggleDarkMode={handleToggleDarkMode}
      />

      <main className="flex-grow w-full">
        {/* Hero Section */}
        <section className="py-24 relative overflow-hidden w-full">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-transparent"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4 animate-fade-up">
                <Download className="h-4 w-4" />
                100% Gratuito
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl animate-fade-up animate-delay-150">
                Recursos <span className="gradient-text">Gratuitos</span>
              </h1>
              <p className="mx-auto max-w-[800px] text-muted-foreground text-lg md:text-xl animate-fade-up animate-delay-300">
                Guías, templates, calculadoras y herramientas para acelerar tu transformación digital. 
                Sin trucos, sin tarjetas de crédito, solo conocimiento de valor.
              </p>
            </div>
          </div>
        </section>

        {/* Resources Grid */}
        <section className="py-20 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {freeResources.map((resource, index) => (
                <div 
                  key={resource.title}
                  className="glass rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-fade-up group"
                  style={{animationDelay: `${index * 100}ms`}}
                >
                  {/* Header with gradient */}
                  <div className={`bg-gradient-to-br ${resource.color} p-6 text-white`}>
                    <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center mb-4">
                      {resource.icon}
                    </div>
                    <div className="text-xs font-medium mb-2 opacity-90">{resource.type}</div>
                    <h3 className="text-xl font-bold leading-tight">{resource.title}</h3>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {resource.description}
                    </p>

                    <div className="space-y-2">
                      <p className="text-sm font-semibold">Incluye:</p>
                      <ul className="space-y-1">
                        {resource.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                            <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {resource.link ? (
                      <Button className="w-full btn-primary group-hover:scale-105 transition-transform" asChild>
                        <Link href={resource.link}>
                          Usar Herramienta <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    ) : (
                      <Button 
                        className="w-full btn-primary group-hover:scale-105 transition-transform"
                        onClick={() => handleDownload(resource.title)}
                      >
                        Descargar Gratis <Download className="ml-2 h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-20 bg-muted/30 w-full">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glass rounded-2xl p-8 md:p-12 text-center">
              <Mail className="h-12 w-12 text-primary mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">
                Recibe recursos exclusivos cada semana
              </h2>
              <p className="text-muted-foreground mb-8 max-w-[600px] mx-auto">
                Únete a 500+ profesionales que reciben tips de automatización, casos de uso y 
                herramientas gratuitas directamente en su inbox.
              </p>
              
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
                <Input 
                  type="email" 
                  placeholder="tu@email.com" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1"
                />
                <Button type="submit" className="btn-primary">
                  Suscribirme Gratis
                </Button>
              </form>

              <p className="text-xs text-muted-foreground mt-4">
                Sin spam. Cancela cuando quieras. Valoramos tu privacidad.
              </p>
            </div>
          </div>
        </section>

        {/* Additional Value */}
        <section className="py-20 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                ¿Necesitas ayuda personalizada?
              </h2>
              <p className="text-muted-foreground max-w-[600px] mx-auto">
                Estos recursos son excelentes para empezar, pero si quieres acelerar resultados, 
                podemos trabajar directamente contigo.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Auditoría Gratuita</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  30 minutos analizando tus procesos y oportunidades de automatización
                </p>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => window.open(process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/avilamolinaadrian/30min', '_blank')}
                >
                  Agendar Auditoría
                </Button>
              </div>

              <div className="glass rounded-xl p-6 text-center border-2 border-primary/20">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Consultoría Express</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Sesión estratégica de 90 min con roadmap de implementación personalizado
                </p>
                <Button 
                  className="w-full btn-primary"
                  onClick={() => window.open(process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/avilamolinaadrian/30min', '_blank')}
                >
                  Más Información
                </Button>
              </div>

              <div className="glass rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Video className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Demo Personalizada</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Te mostramos cómo funcionarían las automatizaciones específicas para tu negocio
                </p>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => window.open(process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/avilamolinaadrian/30min', '_blank')}
                >
                  Solicitar Demo
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
