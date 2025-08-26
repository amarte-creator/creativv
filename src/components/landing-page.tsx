'use client'

import * as React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MessageCircle, X, Send, ChevronRight, BarChart2, Globe, Zap, CheckCircle, ChevronDown, Brain, Code, TrendingUp, Users, Clock, Target, Award } from 'lucide-react'
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

  const sendMessage = () => {
    if (inputMessage.trim() === "") return
    setMessages([...messages, { text: inputMessage, isBot: false }])
    setInputMessage("")
    // Simulate bot response
    setTimeout(() => {
      setMessages(prev => [...prev, { text: "Perfecto, entiendo tu interés en la transformación digital. ¿Te gustaría que te ayude a identificar qué servicio se adapta mejor a tus necesidades?", isBot: true }])
    }, 1000)
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

  const processSteps = [
    {
      step: "01",
      title: "Diagnóstico",
      description: "Analizamos tu negocio para identificar oportunidades de mejora",
      icon: <Target className="h-8 w-8" />
    },
    {
      step: "02", 
      title: "Diseño de Solución",
      description: "Creamos una estrategia personalizada para tu transformación digital",
      icon: <TrendingUp className="h-8 w-8" />
    },
    {
      step: "03",
      title: "Implementación", 
      description: "Desarrollamos e implementamos la solución con metodologías ágiles",
      icon: <Code className="h-8 w-8" />
    },
    {
      step: "04",
      title: "Escalabilidad",
      description: "Aseguramos que tu solución crezca con tu negocio",
      icon: <Award className="h-8 w-8" />
    }
  ]

  const testimonials = [
    {
      name: "María González",
      role: "CEO, TechStart",
      content: "Creativv transformó completamente nuestros procesos. Ahora somos 3x más eficientes.",
      avatar: "MG"
    },
    {
      name: "Carlos Rodríguez", 
      role: "Director de Operaciones, DataCorp",
      content: "Los dashboards de BI que desarrollaron nos han dado insights que nunca habíamos visto.",
      avatar: "CR"
    },
    {
      name: "Ana Martínez",
      role: "Fundadora, InnovateLab",
      content: "Su enfoque en automatización nos permitió escalar sin contratar más personal.",
      avatar: "AM"
    }
  ]

  const handleCTA = () => {
    setIsChatOpen(true)
    setMessages([
      { text: "¡Excelente decisión! Estás a un paso de transformar tu negocio. ¿Qué desafío específico te gustaría resolver primero?", isBot: true }
    ])
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
                <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                  Ver nuestros casos
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

        {/* Proceso de Trabajo */}
        <section className="py-20 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6 animate-fade-up">
                Nuestro Proceso
              </h2>
              <p className="mx-auto max-w-[600px] text-lg text-muted-foreground animate-fade-up animate-delay-150">
                Una metodología probada que garantiza resultados excepcionales en cada proyecto
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={step.step} className="text-center animate-fade-up" style={{animationDelay: `${index * 200}ms`}}>
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-primary">{step.step}</span>
                    </div>
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Casos de Éxito */}
        <section id="casos" className="py-20 bg-muted/30 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6 animate-fade-up">
                Casos de Éxito
              </h2>
              <p className="mx-auto max-w-[600px] text-lg text-muted-foreground animate-fade-up animate-delay-150">
                Descubre cómo hemos transformado negocios con nuestras soluciones digitales
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.name} className="glass rounded-xl p-8 animate-fade-up" style={{animationDelay: `${index * 200}ms`}}>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                      <span className="font-semibold text-primary">{testimonial.avatar}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic">"{testimonial.content}"</p>
                </div>
              ))}
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
              <div className="flex space-x-2">
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Escribe tu mensaje..."
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                  className="flex-1"
                />
                <Button onClick={sendMessage} size="icon">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
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