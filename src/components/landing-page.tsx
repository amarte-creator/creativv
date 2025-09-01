'use client'

import * as React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MessageCircle, X, Send, ChevronRight, BarChart2, Globe, Zap, CheckCircle, ChevronDown, Brain, Code, TrendingUp, Users, Clock, Target, Award, Search, Lightbulb, Rocket, Shield, ArrowRight, Sparkles, Star, Zap as ZapIcon, BarChart3, Settings, Monitor, Database, Cpu, Workflow, PieChart, LineChart, Activity } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Header } from "@/components/header"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Switch } from "@/components/ui/switch"

export function LandingPageComponent() {
  const [isChatOpen, setIsChatOpen] = React.useState(false)
  const [messages, setMessages] = React.useState([
    { text: "¡Hola! Soy tu asistente Creativv. ¿En qué puedo ayudarte a transformar tu negocio hoy?", isBot: true }
  ])
  const [inputMessage, setInputMessage] = React.useState("")
  const [darkMode, setDarkMode] = React.useState(false)
  const [mounted, setMounted] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)

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

  const toggleChat = () => setIsChatOpen(!isChatOpen)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerHeight = 64 // Height of the fixed header (16 * 4 = 64px)
      const elementPosition = element.offsetTop - headerHeight
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
  }

  const sendMessage = async () => {
    if (inputMessage.trim() === "" || isLoading) return
    
    const userMessage = inputMessage
    setInputMessage("")
    setIsLoading(true)
    
    // Add user message to chat
    setMessages(prev => [...prev, { text: userMessage, isBot: false }])
    
    try {
      // Prepare messages for API (excluding the initial greeting)
      const apiMessages = messages
        .filter(msg => !msg.isBot || msg.text !== "¡Hola! Soy tu asistente Creativv. ¿En qué puedo ayudarte a transformar tu negocio hoy?")
        .map(msg => ({
          role: msg.isBot ? 'assistant' : 'user',
          content: msg.text
        }))
      
      // Add current user message
      apiMessages.push({ role: 'user', content: userMessage })
      
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages: apiMessages }),
      })
      
      if (!response.ok) {
        throw new Error('Failed to get response')
      }
      
      const data = await response.json()
      
      // Add bot response to chat
      setMessages(prev => [...prev, { text: data.response, isBot: true }])
    } catch (error) {
      console.error('Chat error:', error)
      setMessages(prev => [...prev, { 
        text: "Lo siento, tuve un problema procesando tu mensaje. ¿Podrías intentarlo de nuevo o contactarnos directamente?", 
        isBot: true 
      }])
    } finally {
      setIsLoading(false)
    }
  }

  const services = [
    {
      title: "Automatizaciones con IA y n8n",
      icon: <Brain className="h-12 w-12 mb-4 text-primary" />,
      description: "Automatiza procesos complejos con inteligencia artificial y n8n",
      benefits: [
        "Reducción del 80% en tareas repetitivas",
        "Integración con más de 200 aplicaciones",
        "Flujos de trabajo inteligentes con IA"
      ],
      slug: "automatizaciones"
    },
    {
      title: "Desarrollo BI (Business Intelligence)",
      icon: <BarChart2 className="h-12 w-12 mb-4 text-primary" />,
      description: "Transforma datos en decisiones estratégicas con dashboards inteligentes",
      benefits: [
        "Dashboards interactivos personalizados",
        "Análisis predictivo con IA",
        "Reportes automatizados en tiempo real"
      ],
      slug: "business-intelligence"
    },
    {
      title: "Desarrollo Web",
      icon: <Code className="h-12 w-12 mb-4 text-primary" />,
      description: "Creamos sitios web modernos que convierten visitantes en clientes",
      benefits: [
        "Diseño UX/UI de vanguardia",
        "Optimización para conversiones",
        "Integración con sistemas empresariales"
      ],
      slug: "desarrollo-web"
    }
  ]



  const handleCTA = () => {
    window.open(process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/avilamolinaadrian/30min', '_blank')
  }

  return (
    <div className={`min-h-screen flex flex-col w-full ${mounted && darkMode ? 'dark' : ''}`}>
      <Header 
        darkMode={darkMode} 
        onToggleDarkMode={handleToggleDarkMode} 
        scrollToSection={scrollToSection}
      />

      <main className="flex-grow w-full">
        {/* Hero Section */}
        <section id="inicio" className="py-24 relative overflow-hidden w-full">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-transparent"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col items-center space-y-8 text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl animate-fade-up">
                Transformamos ideas en{" "}
                <span className="gradient-text">impacto digital</span>
              </h1>
              <p className="mx-auto max-w-[800px] text-muted-foreground text-lg md:text-xl animate-fade-up animate-delay-150">
                Somos expertos en transformación digital que ayudamos a empresas a escalar con tecnología de vanguardia. 
                Desde automatizaciones con IA hasta desarrollo web, convertimos tus desafíos en oportunidades.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-up animate-delay-300">
                <Button size="lg" className="btn-primary text-lg px-8 py-6" onClick={handleCTA}>
                  Agenda una consulta gratuita <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Sobre Nosotros */}
        <section className="py-20 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl animate-fade-up">
                  Sobre Creativv
                </h2>
                <p className="text-lg text-muted-foreground animate-fade-up animate-delay-150">
                  En Creativv, creemos que la tecnología debe ser un catalizador para el crecimiento empresarial. 
                  Nuestra filosofía se basa en tres pilares fundamentales:
                </p>
                <div className="space-y-4 animate-fade-up animate-delay-300">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <TrendingUp className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Innovación</h3>
                      <p className="text-muted-foreground">Utilizamos las últimas tecnologías para crear soluciones disruptivas</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Target className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Claridad</h3>
                      <p className="text-muted-foreground">Comunicamos de forma transparente y medimos resultados concretos</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Award className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Impacto</h3>
                      <p className="text-muted-foreground">Nos enfocamos en generar valor real y medible para tu negocio</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="glass rounded-2xl p-8 animate-fade-up animate-delay-300">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="text-2xl font-bold text-primary">50+</div>
                      <div className="text-sm text-muted-foreground">Proyectos completados</div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-2xl font-bold text-primary">95%</div>
                      <div className="text-sm text-muted-foreground">Satisfacción del cliente</div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-2xl font-bold text-primary">3x</div>
                      <div className="text-sm text-muted-foreground">Mejora en eficiencia</div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-2xl font-bold text-primary">24/7</div>
                      <div className="text-sm text-muted-foreground">Soporte disponible</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Servicios */}
        <section id="servicios" className="py-20 bg-muted/30 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6 animate-fade-up">
                Nuestros Servicios
              </h2>
              <p className="mx-auto max-w-[600px] text-lg text-muted-foreground animate-fade-up animate-delay-150">
                Soluciones integrales de transformación digital diseñadas para impulsar tu negocio al siguiente nivel
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={service.title} className="glass rounded-xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-fade-up" style={{animationDelay: `${index * 150}ms`}}>
                  <div className="text-center">
                    {service.icon}
                    <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                    <p className="text-muted-foreground mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-3 text-left">
                      {service.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                          <span className="text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="mt-8 w-full btn-primary" asChild>
                      <Link href={`/servicios/${service.slug}`}>
                        Saber más
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>



        {/* Experiencia del Cliente */}
        <section id="experiencia-cliente" className="py-24 w-full relative overflow-hidden">
          {/* Enhanced background with animated elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-primary/3 to-transparent"></div>
          <div className="absolute top-20 right-1/4 w-64 h-64 bg-gradient-to-l from-secondary/10 to-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-up">
                <Users className="h-4 w-4" />
                Experiencia Centrada en el Cliente
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6 animate-fade-up">
                Experiencia del Cliente
              </h2>
              <p className="mx-auto max-w-[700px] text-lg text-muted-foreground animate-fade-up animate-delay-150">
                Descubre el viaje completo que experimentarás al trabajar con nosotros. 
                Desde el primer contacto hasta el éxito continuo, cada paso está diseñado para tu satisfacción.
              </p>
            </div>
            
            {/* Client Journey Timeline */}
            <div className="relative">
              {/* Timeline line for desktop */}
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-secondary/20 via-secondary/40 to-secondary/20 transform -translate-y-1/2 z-0"></div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                {/* Left Column - Journey Steps */}
                <div className="space-y-8">
                  {[
                    {
                      phase: "01",
                      title: "Descubrimiento Inicial",
                      description: "Tu primer contacto con nosotros marca el inicio de una colaboración transformadora",
                      icon: <Search className="h-6 w-6" />,
                      color: "from-blue-500 to-cyan-500",
                      details: [
                        "Consulta gratuita personalizada",
                        "Análisis de necesidades específicas",
                        "Identificación de oportunidades",
                        "Presentación de propuesta inicial"
                      ]
                    },
                    {
                      phase: "02",
                      title: "Planificación Estratégica",
                      description: "Juntos diseñamos la hoja de ruta que llevará tu proyecto al éxito",
                      icon: <Target className="h-6 w-6" />,
                      color: "from-purple-500 to-pink-500",
                      details: [
                        "Definición de objetivos claros",
                        "Cronograma detallado del proyecto",
                        "Asignación de recursos especializados",
                        "Establecimiento de métricas de éxito"
                      ]
                    },
                    {
                      phase: "03",
                      title: "Desarrollo Colaborativo",
                      description: "Trabajamos en equipo, manteniéndote informado en cada paso del proceso",
                      icon: <Code className="h-6 w-6" />,
                      color: "from-orange-500 to-red-500",
                      details: [
                        "Comunicación constante y transparente",
                        "Sesiones de revisión regulares",
                        "Demostraciones de progreso",
                        "Ajustes basados en feedback"
                      ]
                    },
                    {
                      phase: "04",
                      title: "Lanzamiento y Optimización",
                      description: "Celebramos el éxito y continuamos optimizando para resultados excepcionales",
                      icon: <Rocket className="h-6 w-6" />,
                      color: "from-green-500 to-emerald-500",
                      details: [
                        "Implementación y lanzamiento",
                        "Capacitación del equipo",
                        "Monitoreo y optimización continua",
                        "Soporte post-lanzamiento"
                      ]
                    }
                  ].map((step, index) => (
                    <div key={step.phase} className="relative group">
                      <div className="glass rounded-2xl p-6 transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-fade-up relative overflow-hidden" 
                           style={{animationDelay: `${index * 150}ms`}}>
                        
                        {/* Background gradient overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
                        
                        <div className="relative z-10">
                          <div className="flex items-start space-x-4">
                            {/* Phase number and icon */}
                            <div className="flex-shrink-0">
                              <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center relative shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110`}>
                                <div className="text-white">
                                  {step.icon}
                                </div>
                                <div className="absolute -top-1 -right-1">
                                  <Sparkles className="h-3 w-3 text-white animate-pulse" />
                                </div>
                              </div>
                              <div className="text-center mt-2">
                                <span className="text-sm font-bold text-primary">{step.phase}</span>
                              </div>
                            </div>
                            
                            {/* Content */}
                            <div className="flex-1">
                              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                                {step.title}
                              </h3>
                              <p className="text-muted-foreground mb-4 leading-relaxed">
                                {step.description}
                              </p>
                              
                              {/* Details list */}
                              <div className="space-y-2">
                                {step.details.map((detail, detailIndex) => (
                                  <div key={detailIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                                    <span>{detail}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Hover effect border */}
                        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Right Column - Client Benefits */}
                <div className="space-y-8">
                  <div className="glass rounded-2xl p-8 animate-fade-up animate-delay-300">
                    <div className="text-center mb-8">
                      <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Star className="h-10 w-10 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4">¿Por qué elegirnos?</h3>
                      <p className="text-muted-foreground">
                        Nuestra experiencia del cliente está diseñada para maximizar tu éxito
                      </p>
                    </div>
                    
                    <div className="space-y-6">
                      {[
                        {
                          icon: <Shield className="h-6 w-6" />,
                          title: "Transparencia Total",
                          description: "Comunicación clara y honesta en cada etapa del proyecto"
                        },
                        {
                          icon: <Clock className="h-6 w-6" />,
                          title: "Cumplimiento de Plazos",
                          description: "Entregamos en tiempo y forma, sin sorpresas"
                        },
                        {
                          icon: <TrendingUp className="h-6 w-6" />,
                          title: "Resultados Medibles",
                          description: "Cada proyecto incluye métricas claras de ROI"
                        },
                        {
                          icon: <Users className="h-6 w-6" />,
                          title: "Soporte Continuo",
                          description: "Estamos contigo antes, durante y después del proyecto"
                        }
                      ].map((benefit, index) => (
                        <div key={benefit.title} className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                            <div className="text-primary">
                              {benefit.icon}
                            </div>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">{benefit.title}</h4>
                            <p className="text-sm text-muted-foreground">{benefit.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Client Satisfaction Stats */}
                  <div className="glass rounded-2xl p-8 animate-fade-up animate-delay-500">
                    <h3 className="text-xl font-bold mb-6 text-center">Nuestros Números</h3>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-primary mb-2">98%</div>
                        <div className="text-sm text-muted-foreground">Satisfacción del cliente</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-primary mb-2">24h</div>
                        <div className="text-sm text-muted-foreground">Tiempo de respuesta</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-primary mb-2">100%</div>
                        <div className="text-sm text-muted-foreground">Proyectos entregados</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
                        <div className="text-sm text-muted-foreground">Calificación promedio</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Bottom CTA */}
              <div className="text-center mt-16 animate-fade-up animate-delay-600">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary px-6 py-3 rounded-full text-sm font-medium mb-4">
                  <Users className="h-4 w-4" />
                  Experiencia Garantizada
                </div>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Únete a cientos de clientes satisfechos que han transformado sus negocios con nuestra metodología probada. 
                  Tu éxito es nuestro compromiso.
                </p>
                <Button size="lg" className="btn-primary text-lg px-8 py-6" onClick={handleCTA}>
                  Comienza tu experiencia <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>



        {/* CTA Final */}
        <section id="contacto" className="py-20 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6 animate-fade-up">
              ¿Listo para transformar tu negocio?
            </h2>
            <p className="mx-auto max-w-[600px] text-lg text-muted-foreground mb-8 animate-fade-up animate-delay-150">
              Únete a las empresas que ya están escalando con tecnología de vanguardia. 
              Tu transformación digital comienza aquí.
            </p>
            <Button size="lg" className="btn-primary text-lg px-8 py-6 animate-fade-up animate-delay-300" onClick={handleCTA}>
              Agenda una demo <ChevronRight className="ml-2 h-5 w-5" />
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
            <a href="#" className="text-sm font-medium hover:underline underline-offset-4">Términos</a>
            <a href="#" className="text-sm font-medium hover:underline underline-offset-4">Privacidad</a>
            <a href="#" className="text-sm font-medium hover:underline underline-offset-4">contacto</a>
          </div>
        </div>
      </footer>

      {/* Chatbot */}
      <div className={`fixed bottom-4 right-4 z-50 ${isChatOpen ? 'w-80' : 'w-auto'} transition-all duration-300`}>
        {isChatOpen ? (
          <div className="glass rounded-xl shadow-2xl overflow-hidden animate-fade-up">
            <div className="bg-primary text-primary-foreground p-4 flex justify-between items-center">
              <h3 className="font-semibold">Asistente Creativv</h3>
              <Button variant="ghost" size="icon" onClick={toggleChat}>
                <X className="h-5 w-5" />
              </Button>
            </div>
            <div className="h-80 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, index) => (
                <div key={index} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                  <div className={`rounded-lg p-3 max-w-[80%] ${msg.isBot ? 'bg-muted' : 'bg-primary text-primary-foreground'} animate-fade-in`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 border-t border-border/40">
              <div className="flex space-x-2 mb-3">
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Escribe tu mensaje..."
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                  className="flex-1"
                  disabled={isLoading}
                />
                <Button onClick={sendMessage} size="icon" disabled={isLoading}>
                  {isLoading ? (
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                  ) : (
                    <Send className="h-4 w-4" />
                  )}
                </Button>
              </div>
              <Button 
                onClick={() => window.open(process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/avilamolinaadrian/30min', '_blank')}
                className="w-full btn-primary text-sm"
                size="sm"
              >
                📅 Agenda tu consulta gratuita
              </Button>
            </div>
          </div>
        ) : (
          <Button onClick={toggleChat} size="icon" className="rounded-full w-14 h-14 btn-primary animate-bounce">
            <MessageCircle className="h-6 w-6" />
          </Button>
        )}
      </div>
    </div>
  )
}