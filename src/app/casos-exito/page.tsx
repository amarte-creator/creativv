'use client'

import * as React from 'react'
import { Button } from "@/components/ui/button"
import { ArrowLeft, TrendingUp, Clock, DollarSign, Users, BarChart3, Zap, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
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
    id: "techflow-automation",
    title: "Automatización de Proceso de Ventas con IA",
    client: "TechFlow Solutions",
    industry: "Tecnología B2B",
    challenge: "TechFlow procesaba manualmente cada lead, perdiendo 30 horas semanales en tareas repetitivas. Los leads se perdían en el proceso y la tasa de cierre era solo del 12%.",
    solution: [
      "Implementación de n8n para automatizar captura y calificación de leads",
      "Integración de ChatGPT para respuestas automáticas personalizadas",
      "Dashboard de BI para seguimiento en tiempo real de pipeline",
      "Automatización de seguimientos y recordatorios"
    ],
    results: [
      { metric: "Tiempo ahorrado", value: "25h/semana", icon: <Clock className="h-6 w-6" /> },
      { metric: "Aumento en conversión", value: "40%", icon: <TrendingUp className="h-6 w-6" /> },
      { metric: "ROI mensual", value: "$8,500", icon: <DollarSign className="h-6 w-6" /> },
      { metric: "Leads procesados", value: "300% más", icon: <Users className="h-6 w-6" /> }
    ],
    testimonial: {
      quote: "Creativv transformó completamente nuestro proceso de ventas. La automatización con IA nos permitió escalar sin contratar más personal.",
      author: "Carlos Mendoza",
      role: "CEO, TechFlow Solutions"
    },
    tags: ["Automatización", "IA", "n8n", "CRM"]
  },
  {
    id: "innovatech-bi",
    title: "Dashboard de BI para Toma de Decisiones Estratégicas",
    client: "Innovatech México",
    industry: "Manufactura",
    challenge: "Datos dispersos en múltiples sistemas sin visibilidad consolidada. Las decisiones se tomaban basadas en intuición, no en datos reales.",
    solution: [
      "Integración de datos de ERP, CRM y sistemas de producción",
      "Desarrollo de dashboard interactivo con análisis predictivo",
      "Implementación de alertas automáticas para KPIs críticos",
      "Reportes automatizados diarios para la dirección"
    ],
    results: [
      { metric: "Tiempo de reporting", value: "90% menos", icon: <Clock className="h-6 w-6" /> },
      { metric: "Decisiones basadas en datos", value: "100%", icon: <BarChart3 className="h-6 w-6" /> },
      { metric: "ROI", value: "2 meses", icon: <DollarSign className="h-6 w-6" /> },
      { metric: "Eficiencia operativa", value: "+35%", icon: <Zap className="h-6 w-6" /> }
    ],
    testimonial: {
      quote: "Ahora vemos todo nuestro negocio en un solo lugar. Las decisiones que antes tomaban días, ahora las tomamos en minutos.",
      author: "María González",
      role: "Directora de Operaciones, Innovatech"
    },
    tags: ["Business Intelligence", "Dashboards", "Analytics", "Predictivo"]
  },
  {
    id: "growthlab-ecosystem",
    title: "Ecosistema Digital Completo con Automatizaciones",
    client: "GrowthLab",
    industry: "Consultoría",
    challenge: "Startup en crecimiento necesitaba presencia web profesional y automatizar todos sus procesos desde cero para escalar eficientemente.",
    solution: [
      "Desarrollo de sitio web moderno con integración de calendario",
      "Automatización completa de onboarding de clientes",
      "Sistema de facturación y pagos automatizado",
      "Integración de n8n con todas las herramientas de trabajo"
    ],
    results: [
      { metric: "Ahorro anual", value: "$45,000", icon: <DollarSign className="h-6 w-6" /> },
      { metric: "Tiempo administrativo", value: "-80%", icon: <Clock className="h-6 w-6" /> },
      { metric: "Nuevos clientes", value: "+250%", icon: <Users className="h-6 w-6" /> },
      { metric: "Satisfacción cliente", value: "4.9/5", icon: <TrendingUp className="h-6 w-6" /> }
    ],
    testimonial: {
      quote: "Creativv nos dio las herramientas para escalar como empresa grande desde el día uno. La inversión se pagó sola en 3 meses.",
      author: "Roberto Silva",
      role: "Fundador, GrowthLab"
    },
    tags: ["Desarrollo Web", "Automatización", "Ecosistema Digital"]
  },
  {
    id: "digitalventures-crm",
    title: "Integración Inteligente de CRM con Marketing",
    client: "Digital Ventures",
    industry: "Marketing Digital",
    challenge: "Leads de múltiples fuentes llegaban sin organización. El equipo de ventas perdía oportunidades por falta de seguimiento oportuno.",
    solution: [
      "Integración de n8n con HubSpot, Facebook Ads y Google Ads",
      "Sistema de calificación automática de leads con IA",
      "Asignación inteligente a vendedores según perfil",
      "Seguimientos automatizados personalizados"
    ],
    results: [
      { metric: "Eficiencia ventas", value: "300%", icon: <TrendingUp className="h-6 w-6" /> },
      { metric: "Velocidad respuesta", value: "2 min", icon: <Clock className="h-6 w-6" /> },
      { metric: "Tasa conversión", value: "+85%", icon: <Users className="h-6 w-6" /> },
      { metric: "Leads perdidos", value: "0%", icon: <CheckCircle className="h-6 w-6" /> }
    ],
    testimonial: {
      quote: "Ahora cada lead que llega se procesa perfectamente. Nuestro equipo solo se enfoca en cerrar ventas, no en tareas manuales.",
      author: "Ana Martínez",
      role: "VP de Marketing, Digital Ventures"
    },
    tags: ["CRM", "IA", "Marketing Automation", "n8n"]
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
                            "{study.testimonial.quote}"
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
