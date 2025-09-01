'use client'

import * as React from 'react'
import { Button } from "@/components/ui/button"
import { BarChart2, TrendingUp, CheckCircle, ArrowLeft, Users, Clock, Database, BarChart3, Cpu, Sun, Moon, PieChart, LineChart, Activity } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function BusinessIntelligencePage() {
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
    // Apply the dark mode class to document only after mounting
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

  const features = [
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Dashboards Interactivos",
      description: "Visualizaciones personalizadas que cuentan la historia de tus datos"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Análisis Predictivo",
      description: "Anticipa tendencias y comportamientos con IA avanzada"
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Integración de Datos",
      description: "Conecta todas tus fuentes de datos en una sola plataforma"
    },
    {
      icon: <Activity className="h-8 w-8" />,
      title: "Reportes en Tiempo Real",
      description: "Métricas actualizadas automáticamente para decisiones ágiles"
    }
  ]

  const benefits = [
    "Dashboards interactivos personalizados",
    "Análisis predictivo con IA",
    "Reportes automatizados en tiempo real",
    "Integración con múltiples fuentes de datos",
    "Alertas inteligentes y notificaciones",
    "Análisis de tendencias históricas",
    "Exportación automática de reportes",
    "Acceso móvil a dashboards críticos"
  ]

  const dashboardTypes = [
    {
      title: "Dashboard Ejecutivo",
      description: "Vista general de KPIs críticos para la toma de decisiones estratégicas",
      icon: <BarChart2 className="h-6 w-6" />
    },
    {
      title: "Dashboard Operacional",
      description: "Monitoreo en tiempo real de procesos y operaciones diarias",
      icon: <Activity className="h-6 w-6" />
    },
    {
      title: "Dashboard de Ventas",
      description: "Análisis completo del pipeline de ventas y performance del equipo",
      icon: <TrendingUp className="h-6 w-6" />
    },
    {
      title: "Dashboard Financiero",
      description: "Control de ingresos, gastos y métricas financieras clave",
      icon: <PieChart className="h-6 w-6" />
    }
  ]

  return (
    <div className={`min-h-screen flex flex-col w-full ${mounted && darkMode ? 'dark' : ''}`}>
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image 
                src="/creativv-lg.png" 
                alt="Creativv" 
                width={40} 
                height={40}
                className="rounded-lg"
              />
              <span className="text-xl font-bold gradient-text">Creativv</span>
            </Link>
            <Button variant="ghost" asChild>
              <Link href="/" className="flex items-center">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Volver
              </Link>
            </Button>
          </div>
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleToggleDarkMode}
            >
              {darkMode ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-grow w-full">
        {/* Hero Section */}
        <section className="py-24 relative overflow-hidden w-full">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-transparent"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col items-center space-y-8 text-center">
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <BarChart2 className="h-12 w-12 text-primary" />
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl animate-fade-up">
                Desarrollo{" "}
                <span className="gradient-text">Business Intelligence</span>
              </h1>
              <p className="mx-auto max-w-[800px] text-muted-foreground text-lg md:text-xl animate-fade-up animate-delay-150">
                Transforma datos en decisiones estratégicas. Creamos dashboards inteligentes 
                que te dan el poder de ver el futuro de tu negocio con claridad.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-up animate-delay-300">
                <Button size="lg" className="btn-primary text-lg px-8 py-6">
                  Solicitar Demo Gratuita
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                  Ver Dashboards de Ejemplo
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6 animate-fade-up">
                ¿Por qué elegir nuestro BI?
              </h2>
              <p className="mx-auto max-w-[600px] text-lg text-muted-foreground animate-fade-up animate-delay-150">
                Combinamos tecnología de vanguardia con diseño intuitivo para maximizar el valor de tus datos
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={feature.title} className="glass rounded-xl p-6 text-center animate-fade-up" style={{animationDelay: `${index * 150}ms`}}>
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-muted/30 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl animate-fade-up">
                  Beneficios que impulsan tu negocio
                </h2>
                <p className="text-lg text-muted-foreground animate-fade-up animate-delay-150">
                  Nuestras soluciones de BI no solo muestran datos, sino que te ayudan a tomar decisiones más inteligentes y rápidas.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fade-up animate-delay-300">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="glass rounded-2xl p-8 animate-fade-up animate-delay-300">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Mejora en decisiones</span>
                      <span className="text-2xl font-bold text-primary">60%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{width: '60%'}}></div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Tiempo de análisis</span>
                      <span className="text-2xl font-bold text-primary">-75%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{width: '75%'}}></div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">ROI promedio</span>
                      <span className="text-2xl font-bold text-primary">350%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dashboard Types */}
        <section className="py-20 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6 animate-fade-up">
                Tipos de dashboards que desarrollamos
              </h2>
              <p className="mx-auto max-w-[600px] text-lg text-muted-foreground animate-fade-up animate-delay-150">
                Soluciones personalizadas para cada nivel de tu organización
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {dashboardTypes.map((dashboard, index) => (
                <div key={dashboard.title} className="glass rounded-xl p-8 animate-fade-up" style={{animationDelay: `${index * 200}ms`}}>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                      {dashboard.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{dashboard.title}</h3>
                      <p className="text-muted-foreground">{dashboard.description}</p>
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
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6 animate-fade-up">
              ¿Listo para transformar tus datos en insights?
            </h2>
            <p className="mx-auto max-w-[600px] text-lg text-muted-foreground mb-8 animate-fade-up animate-delay-150">
              Agenda una consulta gratuita y descubre cómo podemos convertir tus datos en ventajas competitivas
            </p>
            <Button size="lg" className="btn-primary text-lg px-8 py-6 animate-fade-up animate-delay-300">
              Comenzar Ahora
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <div className="flex items-center space-x-2">
            <Image 
              src="/creativv-lg.png" 
              alt="Creativv" 
              width={32} 
              height={32}
              className="rounded-lg"
            />
            <span className="text-lg font-bold gradient-text">Creativv</span>
          </div>
          <div className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2024 Creativv. Todos los derechos reservados.
          </div>
          <div className="flex gap-6">
            <Link href="/" className="text-sm font-medium hover:underline underline-offset-4">inicio</Link>
            <Link href="/servicios" className="text-sm font-medium hover:underline underline-offset-4">servicios</Link>
            <Link href="/contacto" className="text-sm font-medium hover:underline underline-offset-4">contacto</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
