'use client'

import * as React from 'react'
import { Button } from "@/components/ui/button"
import { TrendingUp, Clock, DollarSign, Users, BarChart3, Zap, CheckCircle } from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

interface CaseStudy {
  id: string
  title: string
  client: string
  industry: string
  challenge: string
  solution: string[]
  results: {
    metric: string
    value: string
    icon: React.ReactNode
  }[]
  testimonial: {
    quote: string
    author: string
    role: string
  }
  tags: string[]
}

const caseStudies: CaseStudy[] = [
  {
    id: "constructora-samer",
    title: "Digitalización y Dashboard BI para Constructora",
    client: "Constructora Samer",
    industry: "Construcción",
    challenge: "Constructora Samer gestionaba múltiples proyectos simultáneos sin visibilidad clara del progreso, costos y recursos. Los reportes manuales tomaban días y las decisiones se retrasaban, afectando la rentabilidad de los proyectos.",
    solution: [
      "Digitalización completa de procesos de obra y administración",
      "Dashboard de BI integrado con datos de proyectos, costos y recursos",
      "Sistema de alertas automáticas para desviaciones de presupuesto",
      "Reportes en tiempo real para cada proyecto y análisis financiero"
    ],
    results: [
      { metric: "Tiempo de reporting", value: "85% menos", icon: <Clock className="h-6 w-6" /> },
      { metric: "Control de costos", value: "+45%", icon: <DollarSign className="h-6 w-6" /> },
      { metric: "Visibilidad proyectos", value: "100%", icon: <BarChart3 className="h-6 w-6" /> },
      { metric: "Rentabilidad", value: "+28%", icon: <TrendingUp className="h-6 w-6" /> }
    ],
    testimonial: {
      quote: "Ahora sabemos exactamente dónde está cada proyecto en tiempo real. Las desviaciones se detectan de inmediato y podemos tomar decisiones informadas rápidamente.",
      author: "Ing. Samuel Ramírez",
      role: "Director General, Constructora Samer"
    },
    tags: ["Business Intelligence", "Digitalización", "Dashboards", "Construcción"]
  },
  {
    id: "vistacampo",
    title: "Diseño Web Moderno para Centro Terapéutico",
    client: "Vistacampo",
    industry: "Salud y Bienestar",
    challenge: "Vistacampo necesitaba una presencia digital moderna que reflejara la calidad de sus servicios terapéuticos. Su sitio antiguo no mostraba adecuadamente los tratamientos y perdían pacientes potenciales por falta de funcionalidad.",
    solution: [
      "Diseño web moderno y responsivo con recorrido virtual de las instalaciones",
      "Catálogo de servicios terapéuticos con descripciones detalladas",
      "Integración de formularios con CRM para captura de leads",
      "Sistema de agendamiento de citas y consultas en línea"
    ],
    results: [
      { metric: "Consultas generadas", value: "+210%", icon: <Users className="h-6 w-6" /> },
      { metric: "Tiempo en sitio", value: "4.5 min", icon: <Clock className="h-6 w-6" /> },
      { metric: "Conversión", value: "+156%", icon: <TrendingUp className="h-6 w-6" /> },
      { metric: "Citas agendadas", value: "+180%", icon: <CheckCircle className="h-6 w-6" /> }
    ],
    testimonial: {
      quote: "El nuevo sitio web ha sido un cambio total. Los pacientes llegan mejor informados a las consultas y nuestro equipo recibe leads de mucha mejor calidad.",
      author: "Dra. Patricia Campos",
      role: "Directora, Vistacampo"
    },
    tags: ["Desarrollo Web", "Diseño UI/UX", "Salud y Bienestar", "Lead Generation"]
  },
  {
    id: "artistheway",
    title: "E-commerce para Arte Digital",
    client: "artistheway",
    industry: "Arte Digital",
    challenge: "artistheway quería vender arte digital en línea pero necesitaba una plataforma que protegiera las obras, gestionara licencias digitales y ofreciera una experiencia premium a los coleccionistas.",
    solution: [
      "Desarrollo de e-commerce especializado para arte digital",
      "Sistema de protección DRM y entrega segura de archivos digitales",
      "Gestión de licencias y derechos de uso automatizada",
      "Galería interactiva con vista previa y sistema de pagos integrado"
    ],
    results: [
      { metric: "Ventas mensuales", value: "+340%", icon: <DollarSign className="h-6 w-6" /> },
      { metric: "Artistas registrados", value: "150+", icon: <Users className="h-6 w-6" /> },
      { metric: "Ticket promedio", value: "+95%", icon: <TrendingUp className="h-6 w-6" /> },
      { metric: "Satisfacción", value: "4.8/5", icon: <CheckCircle className="h-6 w-6" /> }
    ],
    testimonial: {
      quote: "Creativv entendió perfectamente las necesidades del mercado de arte digital. La plataforma protege nuestras obras y nos ha permitido escalar las ventas de manera increíble.",
      author: "Laura Méndez",
      role: "Fundadora, artistheway"
    },
    tags: ["E-commerce", "Arte Digital", "Desarrollo Web", "Pagos en línea"]
  }
]

export default function CasosExitoPage() {
  const [darkMode, setDarkMode] = React.useState(false)
  const [mounted, setMounted] = React.useState(false)

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
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl animate-fade-up">
                Casos de <span className="gradient-text">Éxito</span>
              </h1>
              <p className="mx-auto max-w-[800px] text-muted-foreground text-lg md:text-xl animate-fade-up animate-delay-150">
                Resultados reales de empresas que transformaron su negocio con nuestras soluciones.
                Números verificables, no promesas vacías.
              </p>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-24">
              {caseStudies.map((study, index) => (
                <div key={study.id} className="animate-fade-up" style={{animationDelay: `${index * 200}ms`}}>
                  {/* Header */}
                  <div className="mb-8">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {study.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h2 className="text-3xl font-bold mb-3">{study.title}</h2>
                    <p className="text-lg text-muted-foreground">
                      {study.client} · {study.industry}
                    </p>
                  </div>

                  {/* Content */}
                  <div className="glass rounded-2xl p-8 md:p-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                      {/* Challenge & Solution */}
                      <div className="space-y-8">
                        <div>
                          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                            <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center">
                              <span className="text-red-500">⚠️</span>
                            </div>
                            El Desafío
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {study.challenge}
                          </p>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                            <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                              <Zap className="h-4 w-4 text-primary" />
                            </div>
                            La Solución
                          </h3>
                          <ul className="space-y-3">
                            {study.solution.map((item, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-muted-foreground">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Results */}
                      <div className="space-y-8">
                        <div>
                          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                            <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                              <TrendingUp className="h-4 w-4 text-green-500" />
                            </div>
                            Resultados Medibles
                          </h3>
                          <div className="grid grid-cols-2 gap-4">
                            {study.results.map((result, i) => (
                              <div key={i} className="bg-background/50 backdrop-blur rounded-xl p-4 border border-border/40">
                                <div className="text-primary mb-2">
                                  {result.icon}
                                </div>
                                <div className="text-2xl font-bold mb-1">{result.value}</div>
                                <div className="text-sm text-muted-foreground">{result.metric}</div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Testimonial */}
                        <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-6 border border-primary/20">
                          <p className="text-muted-foreground italic mb-4">
                            &ldquo;{study.testimonial.quote}&rdquo;
                          </p>
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold">
                              {study.testimonial.author.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div>
                              <p className="font-semibold">{study.testimonial.author}</p>
                              <p className="text-sm text-muted-foreground">{study.testimonial.role}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-muted/30 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">
              ¿Listo para ser nuestro próximo caso de éxito?
            </h2>
            <p className="mx-auto max-w-[600px] text-lg text-muted-foreground mb-8">
              Agenda una consulta gratuita y descubre cómo podemos generar resultados similares para tu negocio
            </p>
            <Button 
              size="lg" 
              className="btn-primary text-lg px-8 py-6"
              onClick={() => window.open(process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/avilamolinaadrian/30min', '_blank')}
            >
              Agendar Consulta Gratuita
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
