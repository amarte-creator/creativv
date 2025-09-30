'use client'

import * as React from 'react'
import { Button } from "@/components/ui/button"
import { Award, Heart, Lightbulb, Target, TrendingUp, Users, Zap, Shield, Clock, CheckCircle } from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export default function NosotrosPage() {
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

  const values = [
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Innovación Constante",
      description: "No nos conformamos con lo tradicional. Exploramos las últimas tecnologías de IA, automatización y análisis de datos para dar a nuestros clientes ventajas competitivas reales."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Resultados Medibles",
      description: "Cada proyecto incluye KPIs claros y métricas de éxito. No hacemos promesas vacías, entregamos ROI verificable y transparente."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Enfoque Humano",
      description: "Detrás de cada automatización y dashboard, están personas. Diseñamos soluciones que empoderan a los equipos, no que los reemplazan."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Transparencia Total",
      description: "Comunicación clara, sin jerga técnica innecesaria. Sabrás exactamente qué estamos construyendo, por qué y cuánto costará."
    }
  ]

  const stats = [
    { value: "50+", label: "Proyectos completados", icon: <CheckCircle className="h-6 w-6" /> },
    { value: "98%", label: "Tasa de satisfacción", icon: <Award className="h-6 w-6" /> },
    { value: "3x", label: "ROI promedio", icon: <TrendingUp className="h-6 w-6" /> },
    { value: "24h", label: "Tiempo de respuesta", icon: <Clock className="h-6 w-6" /> },
  ]

  const expertise = [
    "Automatización con IA (ChatGPT, Claude, modelos custom)",
    "Plataformas n8n y Make.com",
    "Business Intelligence (Power BI, Tableau, custom dashboards)",
    "Desarrollo web moderno (Next.js, React, TypeScript)",
    "Integraciones complejas de sistemas",
    "Análisis predictivo y machine learning",
    "Optimización de procesos empresariales",
    "Arquitectura cloud y escalabilidad"
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
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl animate-fade-up">
                Sobre <span className="gradient-text">Creativv</span>
              </h1>
              <p className="mx-auto max-w-[800px] text-muted-foreground text-lg md:text-xl animate-fade-up animate-delay-150">
                Somos un equipo de ingenieros, diseñadores y estrategas digitales obsesionados con transformar 
                procesos manuales en sistemas inteligentes que escalan.
              </p>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-20 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-up">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                  Nuestra Misión
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Democratizar el acceso a tecnología de nivel enterprise. Creemos que no necesitas ser una 
                  Fortune 500 para tener automatizaciones inteligentes, dashboards de BI de clase mundial o 
                  presencia web excepcional.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Cada empresa, sin importar su tamaño, merece herramientas que le permitan competir y escalar. 
                  Esa es la transformación digital que construimos día a día.
                </p>
                <div className="flex items-center gap-4 pt-4">
                  <Button 
                    size="lg" 
                    className="btn-primary"
                    onClick={() => window.open(process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/avilamolinaadrian/30min', '_blank')}
                  >
                    Trabajemos juntos
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="/casos-exito">Ver casos de éxito</a>
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="glass rounded-2xl p-8 space-y-6 animate-fade-up animate-delay-300">
                  <h3 className="text-2xl font-bold mb-6">¿Por qué Creativv?</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Zap className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Velocidad de implementación</h4>
                        <p className="text-sm text-muted-foreground">
                          Proyectos en semanas, no meses. Empiezas a ver ROI desde la primera entrega.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Users className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Equipo senior</h4>
                        <p className="text-sm text-muted-foreground">
                          Sin juniors experimentando. Solo profesionales con años de experiencia.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Award className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Garantía de resultados</h4>
                        <p className="text-sm text-muted-foreground">
                          Si no cumplimos los KPIs acordados, seguimos trabajando hasta lograrlo.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-muted/30 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">
                Nuestros Valores
              </h2>
              <p className="mx-auto max-w-[700px] text-lg text-muted-foreground">
                Principios que guían cada decisión y cada línea de código que escribimos
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div 
                  key={value.title}
                  className="glass rounded-xl p-8 animate-fade-up"
                  style={{animationDelay: `${index * 150}ms`}}
                >
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                    <div className="text-primary">
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Creativv en Números
              </h2>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label}
                  className="glass rounded-xl p-6 text-center animate-fade-up"
                  style={{animationDelay: `${index * 100}ms`}}
                >
                  <div className="flex justify-center mb-4 text-primary">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Expertise */}
        <section className="py-20 bg-muted/30 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                  Nuestra Experiencia Técnica
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Trabajamos con las tecnologías más avanzadas y probadas del mercado. 
                  No experimentamos con tu dinero; usamos stacks de producción que escalan.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {expertise.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div className="glass rounded-xl p-8">
                  <h3 className="text-xl font-semibold mb-4">Nuestro Proceso</h3>
                  <div className="space-y-4">
                    {[
                      { step: "1", title: "Descubrimiento", desc: "Entendemos tu negocio y objetivos" },
                      { step: "2", title: "Estrategia", desc: "Diseñamos la solución óptima" },
                      { step: "3", title: "Desarrollo", desc: "Construimos con actualizaciones semanales" },
                      { step: "4", title: "Lanzamiento", desc: "Implementación y capacitación" },
                      { step: "5", title: "Optimización", desc: "Mejora continua basada en datos" }
                    ].map((phase) => (
                      <div key={phase.step} className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-primary">
                          {phase.step}
                        </div>
                        <div>
                          <h4 className="font-semibold">{phase.title}</h4>
                          <p className="text-sm text-muted-foreground">{phase.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="glass rounded-xl p-6 bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
                  <p className="font-semibold mb-2">💡 Compromiso de Calidad</p>
                  <p className="text-sm text-muted-foreground">
                    Cada proyecto incluye documentación completa, capacitación del equipo y 
                    soporte post-lanzamiento sin costo adicional durante el primer mes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">
              Conversemos sobre tu proyecto
            </h2>
            <p className="mx-auto max-w-[600px] text-lg text-muted-foreground mb-8">
              Agenda una consulta gratuita de 30 minutos. Sin compromiso, sin presión de ventas. 
              Solo una conversación honesta sobre cómo podemos ayudarte.
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
