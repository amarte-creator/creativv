'use client'

import * as React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MessageCircle, X, Send, ChevronRight, BarChart2, Globe, Zap, CheckCircle, ChevronDown, Menu, Moon, Sun } from 'lucide-react'
import Link from 'next/link'
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
    { text: "¡Hola! Bienvenido a servicioscreativos.online. ¿En qué puedo ayudarte hoy, líder innovador?", isBot: true }
  ])
  const [inputMessage, setInputMessage] = React.useState("")
  const [darkMode, setDarkMode] = React.useState(false)

  React.useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const toggleChat = () => setIsChatOpen(!isChatOpen)

  const sendMessage = () => {
    if (inputMessage.trim() === "") return
    setMessages([...messages, { text: inputMessage, isBot: false }])
    setInputMessage("")
    // Simulate bot response
    setTimeout(() => {
      setMessages(prev => [...prev, { text: "Entiendo que buscas soluciones personalizadas que te mantengan a la vanguardia. ¿Sobre qué área específica te gustaría saber más?", isBot: true }])
    }, 1000)
  }

  const services = [
    {
      title: "Business Intelligence",
      icon: <BarChart2 className="h-12 w-12 mb-4 text-primary" />,
      description: "Transformamos datos en decisiones estratégicas para líderes visionarios",
      benefits: [
        "Insights personalizados para tu industria",
        "Dashboards interactivos a medida",
        "Predicciones basadas en IA"
      ],
      slug: "business-intelligence"
    },
    {
      title: "Desarrollo Web Innovador",
      icon: <Globe className="h-12 w-12 mb-4 text-primary" />,
      description: "Creamos plataformas web que revolucionan tu sector",
      benefits: [
        "Diseño UX/UI de vanguardia",
        "Arquitectura escalable y flexible",
        "Integración con sistemas empresariales"
      ],
      slug: "desarrollo-web"
    },
    {
      title: "Transformación Digital Ágil",
      icon: <Zap className="h-12 w-12 mb-4 text-primary" />,
      description: "Aceleramos tu evolución digital con metodologías disruptivas",
      benefits: [
        "Roadmap de transformación personalizado",
        "Implementación de culturas ágiles",
        "Optimización de procesos con tecnología de punta"
      ],
      slug: "transformacion-digital"
    }
  ]

  const handleCTA = () => {
    setIsChatOpen(true)
    setMessages([
      { text: "¡Excelente decisión! Como líder que busca la excelencia, has dado el primer paso hacia la transformación de tu negocio. ¿Qué desafío específico estás enfrentando en tu industria?", isBot: true }
    ])
  }

  return (
    <div className={`min-h-screen flex flex-col ${darkMode ? 'dark' : ''}`}>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              {/* Replace with actual Allok logo */}
              <span className="text-primary-foreground font-bold">A</span>
            </div>
            <nav className="hidden md:flex space-x-4">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost">Servicios</Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[400px] sm:w-[540px]">
                  <SheetHeader>
                    <SheetTitle>Nuestros Servicios</SheetTitle>
                    <SheetDescription>
                      Descubre cómo podemos impulsar tu negocio con nuestras soluciones innovadoras.
                    </SheetDescription>
                  </SheetHeader>
                  <div className="grid gap-4 py-4">
                    {services.map((service) => (
                      <div key={service.title} className="space-y-2">
                        <h3 className="text-lg font-semibold flex items-center">
                          {service.icon}
                          <span className="ml-2">{service.title}</span>
                        </h3>
                        <p className="text-sm text-muted-foreground">{service.description}</p>
                        <ul className="text-sm space-y-1">
                          {service.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                        <Button asChild className="mt-2">
                          <Link href={`/servicios/${service.slug}`}>Saber más</Link>
                        </Button>
                      </div>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
              <Button variant="ghost" asChild>
                <Link href="#contacto">Contacto</Link>
              </Button>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Switch
                id="dark-mode"
                checked={darkMode}
                onCheckedChange={setDarkMode}
              />
              <label htmlFor="dark-mode" className="sr-only">
                Modo oscuro
              </label>
              {darkMode ? (
                <Moon className="h-4 w-4" />
              ) : (
                <Sun className="h-4 w-4" />
              )}
            </div>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Abrir menú</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[250px] sm:w-[300px]">
                <nav className="flex flex-col space-y-4">
                  <Button variant="ghost" asChild>
                    <Link href="/">Inicio</Link>
                  </Button>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="services">
                      <AccordionTrigger>Servicios</AccordionTrigger>
                      <AccordionContent>
                        <div className="flex flex-col space-y-2">
                          {services.map((service) => (
                            <Button key={service.title} variant="ghost" asChild className="justify-start">
                              <Link href={`/servicios/${service.slug}`}>{service.title}</Link>
                            </Button>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  <Button variant="ghost" asChild>
                    <Link href="#contacto">Contacto</Link>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none animate-fade-up">
                Soluciones Creativas para Líderes Visionarios
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl animate-fade-up animate-delay-150">
                Transformamos tu visión en realidad con estrategias personalizadas y tecnología de vanguardia
              </p>
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 animate-fade-up animate-delay-300" onClick={handleCTA}>
                Lidera el Cambio Ahora <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 animate-fade-up">
              Servicios para Líderes que Marcan la Diferencia
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={service.title} className="bg-card text-card-foreground rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fade-up" style={{animationDelay: `${index * 150}ms`}}>
                  <div className="p-6">
                    {service.icon}
                    <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle className="h-5 w-5 mr-2 text-primary" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href={`/servicios/${service.slug}`} passHref>
                      <Button className="mt-6 w-full">Descubre Más</Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="py-20 bg-muted/50">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 animate-fade-up">
              ¿Listo para Liderar la Innovación?
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mb-8 animate-fade-up animate-delay-150">
              No te conformes con soluciones genéricas. Descubre cómo podemos impulsar tu visión única.
            </p>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 animate-fade-up animate-delay-300" onClick={handleCTA}>
              Inicia tu Revolución Digital
            </Button>
          </div>
        </section>

        <section className="py-20">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 animate-fade-up">
              Preguntas Frecuentes
            </h2>
            <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
              <AccordionItem value="item-1">
                <AccordionTrigger>¿Cómo se adaptan sus servicios a mi industria específica?</AccordionTrigger>
                <AccordionContent>
                  Nuestro enfoque se basa en un análisis profundo de tu sector y tus necesidades únicas. Desarrollamos soluciones personalizadas que se alinean con los desafíos específicos de tu industria, garantizando resultados relevantes y efectivos.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>¿Cuánto tiempo toma ver resultados con sus servicios?</AccordionTrigger>
                <AccordionContent>
                  El tiempo para ver resultados varía según el proyecto y su complejidad. Sin embargo, nuestro enfoque ágil permite que veas avances y mejoras incrementales desde las primeras semanas de implementación. Trabajamos en ciclos cortos para asegurar una entrega de valor constante.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>¿Cómo aseguran la confidencialidad de la información de mi empresa?</AccordionTrigger>
                <AccordionContent>
                  La seguridad y confidencialidad son primordiales para nosotros. Implementamos protocolos de seguridad de nivel empresarial, incluyendo encriptación de datos, accesos restringidos y acuerdos de confidencialidad robustos. Además, nuestro equipo está capacitado en las mejores prácticas de manejo de información sensible.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>¿Ofrecen soporte continuo después de la implementación?</AccordionTrigger>
                <AccordionContent>
                  Absolutamente. Nuestro compromiso no termina con la implementación. Ofrecemos planes de soporte y mantenimiento continuo, asegurando que tus soluciones evolucionen con tu negocio. Además, proporcionamos capacitación a tu equipo para maximizar el valor de las herramientas implementadas.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </main>

      <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <div className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2024 servicioscreativos.online. Todos los derechos reservados.
          </div>
          <div className="flex gap-4">
            <a href="#" className="text-sm font-medium hover:underline underline-offset-4">Términos</a>
            <a href="#" className="text-sm font-medium hover:underline underline-offset-4">Privacidad</a>
          </div>
        </div>
      </footer>

      {/* Chatbot */}
      <div className={`fixed bottom-4 right-4 z-50 ${isChatOpen ? 'w-80' : 'w-auto'} transition-all duration-300`}>
        {isChatOpen ? (
          <div className="bg-background rounded-lg shadow-lg overflow-hidden animate-fade-up">
            <div className="bg-primary text-primary-foreground p-4 flex justify-between items-center">
              <h3 className="font-semibold">Asistente de Innovación</h3>
              <Button variant="ghost" size="icon" onClick={toggleChat}>
                <X className="h-5 w-5" />
              </Button>
            </div>
            <div className="h-80 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, index) => (
                <div key={index} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                  <div className={`rounded-lg p-2 max-w-[80%] ${msg.isBot ? 'bg-muted' : 'bg-primary text-primary-foreground'} animate-fade-in`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 border-t">
              <div className="flex space-x-2">
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Escribe tu mensaje..."
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                />
                <Button onClick={sendMessage}>
                  <Send className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <Button onClick={toggleChat} size="icon" className="rounded-full w-12 h-12 animate-bounce">
            <MessageCircle className="h-6 w-6" />
          </Button>
        )}
      </div>

      {/* Scroll down button */}
      <Button
        className="fixed bottom-4 left-4 rounded-full animate-bounce"
        size="icon"
        variant="outline"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <ChevronDown className="h-4 w-4" />
      </Button>
    </div>
  )
}