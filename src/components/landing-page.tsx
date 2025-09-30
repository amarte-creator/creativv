'use client'

import * as React from 'react'
import { Button } from "@/components/ui/button"
import { ChevronRight, BarChart2, CheckCircle, Brain, Code, TrendingUp, Users, Clock, Target, Award, Search, Rocket, Shield, Sparkles, Star } from 'lucide-react'
import Link from 'next/link'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Testimonials } from "@/components/testimonials"
import { FAQ, generalFAQs } from "@/components/faq"

declare global {
  interface Window {
    UnicornStudio?: {
      isInitialized?: boolean
      init?: () => void
    }
  }
}

export function LandingPageComponent() {
  const [darkMode, setDarkMode] = React.useState(false)
  const [mounted, setMounted] = React.useState(false)
  const [unicornStudioMounted, setUnicornStudioMounted] = React.useState(false)
  const [currentWordIndex, setCurrentWordIndex] = React.useState(0)
  const [displayText, setDisplayText] = React.useState('')
  const [isDeleting, setIsDeleting] = React.useState(false)

  // Typing animation effect
  React.useEffect(() => {
    const words = ['resultados', 'experiencias', 'crecimiento', 'oportunidades', 'innovación']
    const currentWord = words[currentWordIndex]
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayText.length < currentWord.length) {
          setDisplayText(currentWord.slice(0, displayText.length + 1))
        } else {
          // Finished typing, wait then start deleting
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1))
        } else {
          // Finished deleting, move to next word
          setIsDeleting(false)
          setCurrentWordIndex((prev) => (prev + 1) % words.length)
        }
      }
    }, isDeleting ? 100 : 150) // Faster typing, slower deleting

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentWordIndex])

  // Function to hide UnicornStudio badges
  const hideUnicornStudioBadges = React.useCallback(() => {
    // Hide elements by position and content
    const allDivs = document.querySelectorAll('div')
    const allLinks = document.querySelectorAll('a')
    const allImages = document.querySelectorAll('img')
    
    // Check divs for badges
    allDivs.forEach((element) => {
      const style = element.getAttribute('style') || ''
      const text = element.textContent || ''
      
      if ((style.includes('position: fixed') && (style.includes('bottom') || style.includes('right'))) ||
          text.includes('UnicornStudio') || 
          text.includes('Made with') ||
          text.includes('Powered by')) {
        element.style.display = 'none'
      }
    })
    
    // Check links for UnicornStudio references
    allLinks.forEach((element) => {
      const href = element.getAttribute('href') || ''
      const text = element.textContent || ''
      const style = element.getAttribute('style') || ''
      
      if (href.includes('unicornstudio') || 
          href.includes('unicorn.studio') ||
          text.includes('UnicornStudio') ||
          text.includes('Made with') ||
          (style.includes('position: absolute') && style.includes('bottom: 30px')) ||
          (style.includes('z-index: 99999999')) ||
          (style.includes('width: 190px') && style.includes('background-color: rgb(255, 255, 255)'))) {
        element.style.display = 'none'
      }
    })
    
    // Check images for UnicornStudio badge images
    allImages.forEach((element) => {
      const src = element.getAttribute('src') || ''
      const alt = element.getAttribute('alt') || ''
      
      if (src.includes('unicorn.studio') || 
          src.includes('made_in_us_small_web.svg') ||
          alt.includes('Made with unicorn.studio') ||
          alt.includes('unicorn.studio')) {
        element.style.display = 'none'
      }
    })
  }, [])

  // Deep removal: traverse regular DOM and shadow DOM to hide/remove badges
  const hideUnicornStudioBadgesDeep = React.useCallback(() => {
    const isBadgeAnchor = (el: Element): boolean => {
      const href = (el as HTMLAnchorElement).getAttribute?.('href') || ''
      const style = el.getAttribute?.('style') || ''
      const text = (el.textContent || '')
      return (
        el.tagName === 'A' && (
          href.includes('unicorn.studio') ||
          href.includes('unicornstudio') ||
          text.includes('UnicornStudio') ||
          style.includes('position: absolute') && style.includes('bottom: 30px') ||
          style.includes('z-index: 99999999')
        )
      )
    }

    const isBadgeImage = (el: Element): boolean => {
      const src = (el as HTMLImageElement).getAttribute?.('src') || ''
      const alt = (el as HTMLImageElement).getAttribute?.('alt') || ''
      return (
        el.tagName === 'IMG' && (
          src.includes('unicorn.studio') ||
          src.includes('made_in_us_small_web.svg') ||
          alt.includes('unicorn.studio') ||
          alt.toLowerCase().includes('made with')
        )
      )
    }

    const hideOrRemove = (el: Element) => {
      try {
        if (isBadgeAnchor(el)) {
          el.remove()
          return
        }
        if (isBadgeImage(el)) {
          const parent = el.parentElement
          if (parent && parent.tagName === 'A') {
            parent.remove()
          } else {
            el.remove()
          }
          return
        }
        const style = el.getAttribute?.('style') || ''
        const text = (el.textContent || '')
        if ((style.includes('position: fixed') && (style.includes('bottom') || style.includes('right'))) ||
            text.includes('UnicornStudio') || text.toLowerCase().includes('unicorn.studio') || text.toLowerCase().includes('made with') || text.toLowerCase().includes('powered by')) {
          (el as HTMLElement).style.display = 'none'
        }
      } catch {}
    }

    const traverse = (node: Node) => {
      if (node instanceof Element) {
        hideOrRemove(node)
        const elementNode = node as Element & { shadowRoot?: ShadowRoot }
        if (elementNode.shadowRoot) {
          traverse(elementNode.shadowRoot as unknown as Node)
        }
      }
      node.childNodes.forEach(traverse)
    }

    traverse(document.body)
  }, [])

  // Attach mutation observers to all discovered shadow roots so late-added badges get caught
  const observeAllShadowRoots = React.useCallback(() => {
    const attachForNode = (node: Node) => {
      const el = node as Element & { shadowRoot?: ShadowRoot; __usObserved?: boolean }
      if (el && el.shadowRoot && el.__usObserved !== true) {
        try {
          const shadowObserver = new MutationObserver(() => {
            hideUnicornStudioBadgesDeep()
          })
          shadowObserver.observe(el.shadowRoot, { childList: true, subtree: true, attributes: true })
          el.__usObserved = true
        } catch {}
      }
      node.childNodes.forEach(attachForNode)
    }
    attachForNode(document.body)
  }, [hideUnicornStudioBadgesDeep])

  React.useEffect(() => {
    setMounted(true)
    const savedMode = localStorage.getItem('darkMode')
    if (savedMode !== null) {
      setDarkMode(savedMode === 'true')
    }
    
    // Set UnicornStudio mounted after component mounts
    setUnicornStudioMounted(true)
    
    // Load UnicornStudio script
    if (typeof window !== 'undefined' && !window.UnicornStudio) {
      window.UnicornStudio = { isInitialized: false }
      
      const script = document.createElement('script')
      script.src = 'https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.30/dist/unicornStudio.umd.js'
      script.onload = function() {
        console.log('UnicornStudio script loaded')
        const us = window.UnicornStudio ?? { isInitialized: false }
        window.UnicornStudio = us
        if (!us.isInitialized) {
          us.init?.()
          us.isInitialized = true
          console.log('UnicornStudio initialized')
          
          // Hide badges after initialization
          setTimeout(() => {
            hideUnicornStudioBadges()
          }, 1000)
          
          // Run badge hiding periodically
          setTimeout(() => {
            hideUnicornStudioBadges()
          }, 3000)
          
          setTimeout(() => {
            hideUnicornStudioBadges()
          }, 5000)
        }
      }
      document.head.appendChild(script)
    }
  }, [hideUnicornStudioBadges])

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

  // Observe DOM changes to remove UnicornStudio badges dynamically (including shadow DOM)
  React.useEffect(() => {
    if (!mounted) return

    const handle = () => {
      hideUnicornStudioBadgesDeep()
      observeAllShadowRoots()
    }

    const observer = new MutationObserver(() => {
      handle()
    })
    observer.observe(document.body, { childList: true, subtree: true, attributes: true })

    // Initial sweep
    handle()

    return () => observer.disconnect()
  }, [mounted, hideUnicornStudioBadgesDeep, observeAllShadowRoots])

  return (
    <div className={`min-h-screen flex flex-col w-full ${mounted && darkMode ? 'dark' : ''}`}>
      <Header 
        darkMode={darkMode} 
        onToggleDarkMode={handleToggleDarkMode} 
        scrollToSection={scrollToSection}
      />

      <main className="flex-grow w-full">
        {/* Hero Section */}
        <section id="inicio" className="py-24 relative overflow-hidden w-full h-[80vh] flex items-center">
          {/* UnicornStudio Background - Only render on client side */}
          {unicornStudioMounted && (
            <div className="absolute inset-0 w-full h-full">
              {/* Fallback gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20"></div>
              
              <div 
                data-us-project="zKuwGLh6nlyf57ymyEfW" 
                style={{
                  width: '100%', 
                  height: '100%',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  zIndex: 1
                }}
              ></div>
            </div>
          )}
          
          {/* Lighter overlays to make background more visible */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-black/10 to-black/30 dark:from-black/30 dark:via-black/20 dark:to-black/40 z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-secondary/4 to-transparent z-10"></div>
          {/* Subtle animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-secondary/3 animate-pulse opacity-40 z-10"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
            <div className="flex flex-col items-center text-center space-y-24 animate-fade-up">
          <h1 className="text-4xl font-extrabold tracking-tight leading-[1.1] sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-[0_10px_30px_rgba(0,0,0,0.7)]">
            <div className="text-white/80 font-medium">Transformamos problemas</div>
            <div className="text-white/60 font-light text-3xl sm:text-4xl md:text-5xl lg:text-6xl italic">en</div>
            <div className="text-white/80 font-black drop-shadow-[0_10px_30px_rgba(0,0,0,0.7)] min-h-[1.2em]">
              {displayText}
              <span className="animate-pulse">|</span>
            </div>
          </h1>
              
              <div className="flex-1 flex items-end justify-center pb-16">
                <p className="mx-auto max-w-3xl text-white/95 md:text-lg lg:text-xl leading-relaxed drop-shadow-[0_6px_24px_rgba(0,0,0,0.75)] animate-fade-up animate-delay-150">
                  Somos expertos en transformación digital que ayudamos a empresas a escalar con tecnología de vanguardia. Desde automatizaciones con IA hasta desarrollo web, convertimos tus desafíos en oportunidades.
                </p>
              </div>
            </div>
          </div>

          {/* CTA at the very bottom of the section */}
          <div className="absolute bottom-6 left-0 right-0 flex justify-center z-30 animate-fade-up animate-delay-300">
            <Button 
              size="lg" 
              className="btn-primary text-lg px-8 py-6 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 backdrop-blur-md bg-primary/95 hover:bg-primary"
              onClick={handleCTA}
            >
              Agenda una consulta gratuita <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>

        {/* Trust Badges */}
        <section className="py-12 border-y border-border/40 bg-muted/30 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Proyectos Completados</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Satisfacción del Cliente</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">4.9/5</div>
                <div className="text-sm text-muted-foreground">Calificación Promedio</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">24h</div>
                <div className="text-sm text-muted-foreground">Tiempo de Respuesta</div>
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
                <div className="flex gap-4 pt-4">
                  <Button asChild className="btn-primary">
                    <Link href="/nosotros">Conocer más</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="/casos-exito">Ver casos de éxito</Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="glass rounded-2xl p-8 animate-fade-up animate-delay-300">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="text-2xl font-bold text-primary">300%</div>
                      <div className="text-sm text-muted-foreground">ROI Promedio</div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-2xl font-bold text-primary">3x</div>
                      <div className="text-sm text-muted-foreground">Mejora en eficiencia</div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-2xl font-bold text-primary">80%</div>
                      <div className="text-sm text-muted-foreground">Tiempo ahorrado</div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-2xl font-bold text-primary">2-4</div>
                      <div className="text-sm text-muted-foreground">Semanas a ROI</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Servicios */}
         <section id="servicios" className="py-24 w-full relative overflow-hidden">
          {/* Enhanced background with animated elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-primary/3 to-transparent"></div>
          <div className="absolute top-20 right-1/4 w-64 h-64 bg-gradient-to-l from-secondary/10 to-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                      ].map((benefit) => (
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
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 w-full bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-up">
                <Star className="h-4 w-4 fill-primary" />
                Testimonios Reales
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6 animate-fade-up animate-delay-150">
                Lo que dicen nuestros clientes
              </h2>
              <p className="mx-auto max-w-[700px] text-lg text-muted-foreground animate-fade-up animate-delay-300">
                No confíes solo en nuestra palabra. Descubre cómo hemos ayudado a empresas como la tuya.
              </p>
            </div>

            <Testimonials limit={3} />

            <div className="mt-12 text-center">
              <Button asChild variant="outline" size="lg">
                <Link href="/casos-exito">
                  Ver más casos de éxito <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Resources CTA */}
        <section className="py-20 w-full relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-transparent"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="glass rounded-2xl p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">
                Empieza gratis con nuestros recursos
              </h2>
              <p className="text-muted-foreground mb-8 max-w-[600px] mx-auto">
                Descarga guías, templates de n8n, calculadora de ROI y más herramientas gratuitas 
                para comenzar tu transformación digital hoy mismo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="btn-primary">
                  <Link href="/recursos">
                    Ver recursos gratuitos <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/recursos/calculadora-roi">
                    Calcular mi ROI
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 w-full bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <FAQ 
              items={generalFAQs}
              title="Preguntas Frecuentes"
              subtitle="Todo lo que necesitas saber sobre trabajar con Creativv"
            />
            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-4">
                ¿Tienes más preguntas?
              </p>
              <Button onClick={handleCTA} variant="outline" size="lg">
                Agenda una llamada de 30 minutos
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section id="contacto" className="py-20 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary px-6 py-3 rounded-full text-sm font-medium mb-6 animate-fade-up">
              <Users className="h-4 w-4" />
              Únete a 50+ Empresas Exitosas
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6 animate-fade-up animate-delay-150">
              ¿Listo para transformar tu negocio?
            </h2>
            <p className="mx-auto max-w-[600px] text-lg text-muted-foreground mb-8 animate-fade-up animate-delay-300">
              Agenda una consulta gratuita de 30 minutos. Sin presión de ventas, solo una conversación 
              honesta sobre cómo podemos ayudarte a crecer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up animate-delay-450">
              <Button size="lg" className="btn-primary text-lg px-8 py-6" onClick={handleCTA}>
                Agendar Consulta Gratuita <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6" asChild>
                <Link href="/nosotros">
                  Conocer más sobre nosotros
                </Link>
              </Button>
            </div>
            
            {/* Trust indicators */}
            <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>Sin compromiso</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>Respuesta en 24h</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>ROI garantizado</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}