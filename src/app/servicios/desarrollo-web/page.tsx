'use client'

import * as React from 'react'
import { Button } from "@/components/ui/button"
import { Code, Globe, CheckCircle, ArrowLeft, Users, Clock, Database, BarChart3, Cpu, Sun, Moon, Smartphone, Zap, Palette, Shield, ShoppingCart, Target, Sparkles, Star, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Footer } from '@/components/footer'

export default function DesarrolloWebPage() {
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
    <div className={`min-h-screen flex flex-col w-full ${mounted && darkMode ? 'dark' : ''}`}>
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Floating particles */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary/30 rounded-full animate-pulse" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-secondary/40 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-60 left-1/4 w-3 h-3 bg-primary/20 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-80 right-1/3 w-2 h-2 bg-secondary/30 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-96 left-1/2 w-1 h-1 bg-primary/40 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
        
        {/* Gradient orbs */}
        <div className="absolute top-1/4 right-10 w-32 h-32 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-10 w-40 h-40 bg-gradient-to-r from-secondary/10 to-primary/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="relative">
                <Image 
                  src="/creativv-lg.png" 
                  alt="Creativv" 
                  width={40} 
                  height={40}
                  className="rounded-lg transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <span className="text-xl font-bold gradient-text">Creativv</span>
            </Link>
            <Button variant="ghost" asChild className="group">
              <Link href="/" className="flex items-center transition-all duration-300 group-hover:translate-x-[-4px]">
                <ArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:translate-x-[-2px]" />
                Volver
              </Link>
            </Button>
          </div>
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleToggleDarkMode}
              className="relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-md"></div>
              {darkMode ? (
                <Sun className="h-4 w-4 relative z-10" />
              ) : (
                <Moon className="h-4 w-4 relative z-10" />
              )}
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-grow w-full relative">
        {/* Hero Section */}
        <section className="py-24 relative overflow-hidden w-full">
          {/* Enhanced background gradients */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/3 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-tl from-secondary/5 via-primary/3 to-transparent"></div>
          
          {/* Animated background shapes */}
          <div className="absolute top-20 left-1/4 w-64 h-64 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-gradient-to-l from-secondary/10 to-primary/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col items-center space-y-8 text-center">
              {/* Enhanced icon container */}
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mb-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full animate-pulse"></div>
                  <Code className="h-14 w-14 text-primary relative z-10" />
                </div>
                {/* Floating sparkles */}
                <div className="absolute -top-2 -right-2">
                  <Sparkles className="h-6 w-6 text-secondary animate-pulse" />
                </div>
                <div className="absolute -bottom-2 -left-2">
                  <Star className="h-4 w-4 text-primary animate-pulse" style={{animationDelay: '1s'}} />
                </div>
              </div>
              
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl animate-fade-up">
                Desarrollo{" "}
                <span className="gradient-text relative">
                  Web
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-2xl -z-10"></div>
                </span>
              </h1>
              <p className="mx-auto max-w-[800px] text-muted-foreground text-lg md:text-xl animate-fade-up animate-delay-150 leading-relaxed">
                Creamos sitios web modernos que convierten visitantes en clientes. 
                Diseño, desarrollo y optimización para maximizar tu presencia digital.
              </p>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 w-full relative">
          {/* Background pattern */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/20 to-transparent"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6 animate-fade-up">
                ¿Por qué elegir nuestro{" "}
                <span className="gradient-text">desarrollo web</span>?
              </h2>
              <p className="mx-auto max-w-[600px] text-lg text-muted-foreground animate-fade-up animate-delay-150">
                Combinamos diseño creativo con tecnología de vanguardia para crear experiencias digitales excepcionales
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={feature.title} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="glass rounded-xl p-6 text-center animate-fade-up relative hover:scale-105 transition-transform duration-300 hover:shadow-2xl" style={{animationDelay: `${index * 150}ms`}}>
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-primary group-hover:text-secondary transition-colors duration-300">
                        {feature.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-gradient-to-br from-muted/30 via-background to-muted/20 w-full relative">
          {/* Animated background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-1/3 w-32 h-32 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute bottom-10 right-1/3 w-40 h-40 bg-gradient-to-l from-secondary/5 to-primary/5 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl animate-fade-up">
                  Beneficios que{" "}
                  <span className="gradient-text">impulsan</span> tu presencia digital
                </h2>
                <p className="text-lg text-muted-foreground animate-fade-up animate-delay-150 leading-relaxed">
                  Nuestros sitios web no solo se ven bien, sino que también generan resultados medibles para tu negocio.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fade-up animate-delay-300">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3 group">
                      <div className="w-5 h-5 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300">
                        <CheckCircle className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-sm group-hover:text-foreground transition-colors duration-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="glass rounded-2xl p-8 animate-fade-up animate-delay-300 relative overflow-hidden group hover:scale-105 transition-transform duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="space-y-6 relative z-10">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Mejora en conversiones</span>
                      <span className="text-2xl font-bold gradient-text">45%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                      <div className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-1000" style={{width: '45%'}}></div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Tiempo de carga</span>
                      <span className="text-2xl font-bold gradient-text">&lt;2s</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                      <div className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-1000" style={{width: '90%'}}></div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Satisfacción cliente</span>
                      <span className="text-2xl font-bold gradient-text">98%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                      <div className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-1000" style={{width: '98%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Web Types */}
        <section className="py-20 w-full relative">
          {/* Background pattern */}
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-muted/10 to-transparent"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6 animate-fade-up">
                Tipos de sitios web que{" "}
                <span className="gradient-text">desarrollamos</span>
              </h2>
              <p className="mx-auto max-w-[600px] text-lg text-muted-foreground animate-fade-up animate-delay-150">
                Soluciones personalizadas para cada tipo de negocio y objetivo
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {webTypes.map((webType, index) => (
                <div key={webType.title} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="glass rounded-xl p-8 animate-fade-up relative hover:scale-105 transition-transform duration-300 hover:shadow-2xl" style={{animationDelay: `${index * 200}ms`}}>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <div className="text-primary group-hover:text-secondary transition-colors duration-300">
                          {webType.icon}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">{webType.title}</h3>
                        <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">{webType.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-muted/40 via-background to-muted/30 w-full relative">
          {/* Enhanced background */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/3 to-primary/5"></div>
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-secondary/10 to-primary/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6 animate-fade-up">
              ¿Listo para crear tu{" "}
              <span className="gradient-text">presencia digital</span>?
            </h2>
            <p className="mx-auto max-w-[600px] text-lg text-muted-foreground mb-8 animate-fade-up animate-delay-150 leading-relaxed">
              Agenda una consulta gratuita y descubre cómo podemos crear el sitio web perfecto para tu negocio
            </p>
            <Button 
              size="lg" 
              className="btn-primary text-lg px-8 py-6 relative overflow-hidden group animate-fade-up animate-delay-300"
              onClick={() => window.open(process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/avilamolinaadrian/30min', '_blank')}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="relative z-10">Comenzar proyecto</span>
              <ArrowRight className="h-4 w-4 ml-2 relative z-10 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
