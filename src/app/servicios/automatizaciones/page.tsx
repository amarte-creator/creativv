'use client'

import * as React from 'react'
import { Button } from "@/components/ui/button"
import { Brain, Zap, CheckCircle, ArrowLeft, Users, TrendingUp, BarChart3, Cpu, Database, Sun, Moon } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Footer } from '@/components/footer'
import { FAQ, automationFAQs, pricingFAQs } from '@/components/faq'
import { Testimonials } from '@/components/testimonials'
import { SchemaOrg } from '@/components/schema-org'

export const metadata = {
  title: "Automatización con IA y n8n - Workflows Inteligentes | Creativv",
  description: "Automatiza procesos empresariales con n8n e inteligencia artificial. Reducimos tareas repetitivas hasta 80%, ahorramos 20+ horas semanales. Integración con 200+ apps. Consultoría gratuita en México.",
  keywords: "automatización n8n, automatización IA, workflows automatizados, n8n México, automatizar procesos, integración n8n, flujos de trabajo inteligentes, automatización empresarial",
  openGraph: {
    title: "Automatización con IA y n8n - Workflows Inteligentes",
    description: "Automatiza procesos con n8n e IA. Reducimos 80% de tareas repetitivas. 200+ integraciones disponibles.",
    type: "website",
    url: "https://servicioscreativos.online/servicios/automatizaciones",
  },
  alternates: {
    canonical: "https://servicioscreativos.online/servicios/automatizaciones",
  },
}

export default function AutomatizacionesPage() {
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
      icon: <Zap className="h-8 w-8" />,
      title: "Automatización Inteligente",
      description: "Flujos de trabajo que se adaptan y aprenden de tus procesos"
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: "Integración IA",
      description: "ChatGPT, Claude y otras IAs integradas en tus automatizaciones"
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "200+ Conectores",
      description: "Integración nativa con las herramientas que ya usas"
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Analytics Avanzado",
      description: "Métricas detalladas del rendimiento de tus automatizaciones"
    }
  ]

  const benefits = [
    "Reducción del 80% en tareas repetitivas",
    "Ahorro de 20+ horas semanales por empleado",
    "Integración con más de 200 aplicaciones",
    "Flujos de trabajo inteligentes con IA",
    "Escalabilidad automática según demanda",
    "Monitoreo en tiempo real",
    "Soporte 24/7 para automatizaciones críticas",
    "Cumplimiento de seguridad empresarial"
  ]

  const useCases = [
    {
      title: "Procesamiento de Emails",
      description: "Clasificación automática y respuesta inteligente a emails",
      icon: <Users className="h-6 w-6" />
    },
    {
      title: "Gestión de Leads",
      description: "Captura, calificación y distribución automática de leads",
      icon: <TrendingUp className="h-6 w-6" />
    },
    {
      title: "Reportes Automáticos",
      description: "Generación y envío de reportes sin intervención manual",
      icon: <BarChart3 className="h-6 w-6" />
    },
    {
      title: "Sincronización de Datos",
      description: "Mantenimiento automático de datos entre sistemas",
      icon: <Database className="h-6 w-6" />
    }
  ]

  return (
    <div className={`min-h-screen flex flex-col w-full ${mounted && darkMode ? 'dark' : ''}`}>
      <SchemaOrg type="service" serviceType="automation" />
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
                <Brain className="h-12 w-12 text-primary" />
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl animate-fade-up">
                Automatizaciones con{" "}
                <span className="gradient-text">IA y n8n</span>
              </h1>
              <p className="mx-auto max-w-[800px] text-muted-foreground text-lg md:text-xl animate-fade-up animate-delay-150">
                Transforma tus procesos manuales en flujos de trabajo inteligentes. 
                Automatiza tareas repetitivas con inteligencia artificial y escala tu negocio sin límites.
              </p>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6 animate-fade-up">
                ¿Por qué elegir nuestras automatizaciones?
              </h2>
              <p className="mx-auto max-w-[600px] text-lg text-muted-foreground animate-fade-up animate-delay-150">
                Combinamos la potencia de n8n con la inteligencia artificial más avanzada
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
                  Beneficios que transforman tu negocio
                </h2>
                <p className="text-lg text-muted-foreground animate-fade-up animate-delay-150">
                  Nuestras automatizaciones no solo ahorran tiempo, sino que también mejoran la calidad y consistencia de tus procesos.
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
                      <span className="text-sm text-muted-foreground">Tiempo ahorrado</span>
                      <span className="text-2xl font-bold text-primary">80%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{width: '80%'}}></div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Eficiencia mejorada</span>
                      <span className="text-2xl font-bold text-primary">3x</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{width: '75%'}}></div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">ROI promedio</span>
                      <span className="text-2xl font-bold text-primary">400%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{width: '90%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6 animate-fade-up">
                Casos de uso más populares
              </h2>
              <p className="mx-auto max-w-[600px] text-lg text-muted-foreground animate-fade-up animate-delay-150">
                Descubre cómo otras empresas están transformando sus procesos
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={useCase.title} className="glass rounded-xl p-8 animate-fade-up" style={{animationDelay: `${index * 200}ms`}}>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                      {useCase.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
                      <p className="text-muted-foreground">{useCase.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">
                Inversión y Precios
              </h2>
              <p className="mx-auto max-w-[700px] text-lg text-muted-foreground">
                Transparencia total. Sin costos ocultos, sin sorpresas.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Starter */}
              <div className="glass rounded-xl p-8">
                <div className="text-sm font-medium text-primary mb-2">Starter</div>
                <div className="text-4xl font-bold mb-2">$15,000 - $30,000</div>
                <div className="text-sm text-muted-foreground mb-6">MXN · Pago único</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">1-2 automatizaciones simples</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Hasta 5 integraciones</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Capacitación básica</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">1 mes de soporte incluido</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Documentación completa</span>
                  </li>
                </ul>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => window.open(process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/avilamolinaadrian/30min', '_blank')}
                >
                  Consulta Gratis
                </Button>
              </div>

              {/* Professional */}
              <div className="glass rounded-xl p-8 border-2 border-primary relative overflow-hidden">
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                  Más Popular
                </div>
                <div className="text-sm font-medium text-primary mb-2">Professional</div>
                <div className="text-4xl font-bold mb-2">$40,000 - $80,000</div>
                <div className="text-sm text-muted-foreground mb-6">MXN · Pago único</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">3-5 automatizaciones complejas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Integraciones ilimitadas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Integración con IA (GPT, Claude)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Capacitación avanzada</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">3 meses de soporte incluido</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Dashboard de métricas</span>
                  </li>
                </ul>
                <Button 
                  className="w-full btn-primary"
                  onClick={() => window.open(process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/avilamolinaadrian/30min', '_blank')}
                >
                  Agendar Llamada
                </Button>
              </div>

              {/* Enterprise */}
              <div className="glass rounded-xl p-8">
                <div className="text-sm font-medium text-primary mb-2">Enterprise</div>
                <div className="text-4xl font-bold mb-2">$100,000+</div>
                <div className="text-sm text-muted-foreground mb-6">MXN · Personalizado</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Ecosistema completo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Automatizaciones ilimitadas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">IA personalizada y fine-tuning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">SLA garantizado</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Soporte prioritario 24/7</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Equipo dedicado</span>
                  </li>
                </ul>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => window.open(process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/avilamolinaadrian/30min', '_blank')}
                >
                  Contactar
                </Button>
              </div>
            </div>

            <div className="mt-12 glass rounded-xl p-6 max-w-3xl mx-auto">
              <p className="text-sm text-muted-foreground text-center mb-4">
                <strong className="text-foreground">💡 Nota importante:</strong> Todos los precios incluyen desarrollo, integración, 
                pruebas, capacitación y primer mes de soporte. Aceptamos pagos en parcialidades para proyectos +$50,000.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Sin costos ocultos</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Garantía de satisfacción</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>ROI medible</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-muted/30 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Clientes que ya automatizaron su negocio
              </h2>
            </div>
            <Testimonials limit={3} />
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 w-full">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <FAQ 
              items={automationFAQs}
              title="Preguntas Frecuentes sobre Automatización"
              subtitle="Todo lo que necesitas saber antes de automatizar"
            />
            
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-center mb-8">Preguntas sobre Precios</h3>
              <FAQ items={pricingFAQs} />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-muted/30 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6 animate-fade-up">
              ¿Listo para automatizar tu negocio?
            </h2>
            <p className="mx-auto max-w-[600px] text-lg text-muted-foreground mb-8 animate-fade-up animate-delay-150">
              Agenda una consulta gratuita de 30 minutos. Analizaremos tus procesos y te mostraremos 
              exactamente cuánto tiempo y dinero puedes ahorrar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="btn-primary text-lg px-8 py-6 animate-fade-up animate-delay-300"
                onClick={() => window.open(process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/avilamolinaadrian/30min', '_blank')}
              >
                Agendar Consulta Gratuita
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 py-6"
                asChild
              >
                <Link href="/recursos/calculadora-roi">
                  Calcular mi ROI
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
