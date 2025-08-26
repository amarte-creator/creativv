'use client'

import * as React from 'react'
import { Button } from "@/components/ui/button"
import { Code, Globe, CheckCircle, ArrowLeft, Users, Clock, Database, BarChart3, Cpu, Sun, Moon, Smartphone, Zap, Palette, Shield, ShoppingCart, Target } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function DesarrolloWebPage() {
  const [darkMode, setDarkMode] = React.useState(() => {
    // Initialize from localStorage if available, otherwise default to false (light mode)
    if (typeof window !== 'undefined') {
      const savedMode = localStorage.getItem('darkMode')
      return savedMode !== null ? savedMode === 'true' : false
    }
    return false
  })

  React.useEffect(() => {
    // Apply the dark mode class to document
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const handleToggleDarkMode = () => {
    const newMode = !darkMode
    setDarkMode(newMode)
    localStorage.setItem('darkMode', newMode.toString())
  }

  const features = [
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Diseño UX/UI Moderno",
      description: "Interfaces intuitivas que convierten visitantes en clientes"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Performance Optimizada",
      description: "Sitios web rápidos que cargan en menos de 2 segundos"
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Responsive Design",
      description: "Perfecto en todos los dispositivos y pantallas"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Seguridad Avanzada",
      description: "Protección completa contra amenazas cibernéticas"
    }
  ]

  const benefits = [
    "Diseño UX/UI de vanguardia",
    "Optimización para conversiones",
    "Integración con sistemas empresariales",
    "SEO optimizado para mejor posicionamiento",
    "Carga rápida y performance excepcional",
    "Diseño responsive para todos los dispositivos",
    "Seguridad y mantenimiento continuo",
    "Soporte técnico especializado"
  ]

  const webTypes = [
    {
      title: "Sitios Web Corporativos",
      description: "Presencia profesional que refleja la identidad de tu marca",
      icon: <Globe className="h-6 w-6" />
    },
    {
      title: "E-commerce",
      description: "Tiendas online que venden 24/7 con máxima conversión",
      icon: <ShoppingCart className="h-6 w-6" />
    },
    {
      title: "Aplicaciones Web",
      description: "Plataformas complejas que automatizan tus procesos",
      icon: <Code className="h-6 w-6" />
    },
    {
      title: "Landing Pages",
      description: "Páginas de conversión optimizadas para campañas específicas",
      icon: <Target className="h-6 w-6" />
    }
  ]

  return (
    <div className={`min-h-screen flex flex-col w-full ${darkMode ? 'dark' : ''}`}>
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
                <Code className="h-12 w-12 text-primary" />
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl animate-fade-up">
                Desarrollo{" "}
                <span className="gradient-text">Web</span>
              </h1>
              <p className="mx-auto max-w-[800px] text-muted-foreground text-lg md:text-xl animate-fade-up animate-delay-150">
                Creamos sitios web modernos que convierten visitantes en clientes. 
                Diseño, desarrollo y optimización para maximizar tu presencia digital.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-up animate-delay-300">
                <Button size="lg" className="btn-primary text-lg px-8 py-6">
                  Solicitar Presupuesto
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                  Ver Portafolio
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
                ¿Por qué elegir nuestro desarrollo web?
              </h2>
              <p className="mx-auto max-w-[600px] text-lg text-muted-foreground animate-fade-up animate-delay-150">
                Combinamos diseño creativo con tecnología de vanguardia para crear experiencias digitales excepcionales
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
                  Beneficios que impulsan tu presencia digital
                </h2>
                <p className="text-lg text-muted-foreground animate-fade-up animate-delay-150">
                  Nuestros sitios web no solo se ven bien, sino que también generan resultados medibles para tu negocio.
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
                      <span className="text-sm text-muted-foreground">Mejora en conversiones</span>
                      <span className="text-2xl font-bold text-primary">45%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{width: '45%'}}></div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Tiempo de carga</span>
                      <span className="text-2xl font-bold text-primary">&lt;2s</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{width: '90%'}}></div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Satisfacción cliente</span>
                      <span className="text-2xl font-bold text-primary">98%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{width: '98%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Web Types */}
        <section className="py-20 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6 animate-fade-up">
                Tipos de sitios web que desarrollamos
              </h2>
              <p className="mx-auto max-w-[600px] text-lg text-muted-foreground animate-fade-up animate-delay-150">
                Soluciones personalizadas para cada tipo de negocio y objetivo
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {webTypes.map((webType, index) => (
                <div key={webType.title} className="glass rounded-xl p-8 animate-fade-up" style={{animationDelay: `${index * 200}ms`}}>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                      {webType.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{webType.title}</h3>
                      <p className="text-muted-foreground">{webType.description}</p>
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
              ¿Listo para crear tu presencia digital?
            </h2>
            <p className="mx-auto max-w-[600px] text-lg text-muted-foreground mb-8 animate-fade-up animate-delay-150">
              Agenda una consulta gratuita y descubre cómo podemos crear el sitio web perfecto para tu negocio
            </p>
            <Button size="lg" className="btn-primary text-lg px-8 py-6 animate-fade-up animate-delay-300">
              Comenzar Proyecto
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
