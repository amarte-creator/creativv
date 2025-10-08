'use client'

import * as React from 'react'
import { Button } from "@/components/ui/button"
import { ChevronRight, Zap, Brain, Workflow, ArrowRight, CheckCircle2, Sparkles, TrendingUp, Clock, Shield, Star, Users } from 'lucide-react'
import Link from 'next/link'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Testimonials } from "@/components/testimonials"
import { FAQ, generalFAQs } from "@/components/faq"
import { ThreeBackground } from "@/components/three-background"
import { SchemaOrg } from "@/components/schema-org"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

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
  
  const heroRef = React.useRef<HTMLElement>(null)
  const servicesRef = React.useRef<HTMLElement>(null)
  const processRef = React.useRef<HTMLElement>(null)

  // Enhanced GSAP Animations with Advanced Effects
  useGSAP(() => {
    if (!mounted) return

    // Hero section - Dynamic entrance
    const heroTl = gsap.timeline({ defaults: { ease: 'power4.out' } })
    
    heroTl
      .from('.hero-badge', { 
        opacity: 0, 
        y: 40,
        scale: 0.8,
        duration: 1,
        ease: 'elastic.out(1, 0.5)'
      })
      .from('.hero-title', { 
        opacity: 0, 
        y: 60,
        rotationX: 90,
        transformOrigin: 'center bottom',
        duration: 1.2,
        stagger: 0.2,
        ease: 'power4.out'
      }, '-=0.5')
      .from('.hero-subtitle', { 
        opacity: 0, 
        y: 40,
        scale: 0.95,
        duration: 1 
      }, '-=0.7')
      .from('.hero-cta', { 
        opacity: 0, 
        scale: 0.5,
        rotation: -10,
        duration: 0.8,
        ease: 'back.out(1.7)'
      }, '-=0.5')

    // Service cards - 3D rotation reveal
    gsap.from('.service-card', {
      scrollTrigger: {
        trigger: servicesRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
        scrub: 0.5
      },
      opacity: 0,
      y: 100,
      rotateY: 45,
      scale: 0.8,
      duration: 1.2,
      stagger: {
        each: 0.2,
        from: 'start'
      },
      ease: 'power3.out'
    })

    // Process steps - Slide and bounce
    gsap.from('.process-step', {
      scrollTrigger: {
        trigger: processRef.current,
        start: 'top 75%',
        toggleActions: 'play none none reverse'
      },
      opacity: 0,
      x: -100,
      rotation: -5,
      duration: 1,
      stagger: 0.15,
      ease: 'back.out(1.2)'
    })

    // Enhanced parallax for sections
    gsap.utils.toArray<HTMLElement>('.parallax-section').forEach((section) => {
      gsap.to(section, {
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 2
        },
        y: -80,
        ease: 'none'
      })
    })

    // Dynamic fade-in with scale
    gsap.utils.toArray<HTMLElement>('.fade-in-scroll').forEach((element) => {
      gsap.from(element, {
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 50,
        scale: 0.95,
        duration: 1,
        ease: 'power3.out'
      })
    })

    // Floating orbs parallax
    gsap.utils.toArray<HTMLElement>('.floating-orb').forEach((orb, index) => {
      gsap.to(orb, {
        scrollTrigger: {
          trigger: orb,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        },
        y: index % 2 === 0 ? -150 : -100,
        x: index % 2 === 0 ? 50 : -50,
        rotation: index % 2 === 0 ? 360 : -360,
        ease: 'none'
      })
    })

    // Benefits cards - Stagger reveal with rotation
    gsap.from('.benefit-card', {
      scrollTrigger: {
        trigger: '.benefits-grid',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      },
      opacity: 0,
      y: 60,
      rotation: 5,
      scale: 0.9,
      duration: 0.8,
      stagger: {
        each: 0.1,
        from: 'edges'
      },
      ease: 'power3.out'
    })

    // Number counter animation
    gsap.utils.toArray<HTMLElement>('.counter-number').forEach((counter) => {
      const target = counter.getAttribute('data-target')
      if (target) {
        gsap.from(counter, {
          scrollTrigger: {
            trigger: counter,
            start: 'top 90%',
            toggleActions: 'play none none none'
          },
          textContent: 0,
          duration: 2,
          ease: 'power1.out',
          snap: { textContent: 1 }
        })
      }
    })

    // Magnetic effect on hover for interactive elements
    const magneticElements = document.querySelectorAll('.magnetic')
    magneticElements.forEach((element) => {
      element.addEventListener('mousemove', (e: Event) => {
        const mouseEvent = e as MouseEvent
        const rect = (element as HTMLElement).getBoundingClientRect()
        const x = mouseEvent.clientX - rect.left - rect.width / 2
        const y = mouseEvent.clientY - rect.top - rect.height / 2
        
        gsap.to(element, {
          x: x * 0.3,
          y: y * 0.3,
          duration: 0.3,
          ease: 'power2.out'
        })
      })

      element.addEventListener('mouseleave', () => {
        gsap.to(element, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: 'elastic.out(1, 0.3)'
        })
      })
    })
  }, { scope: heroRef, dependencies: [mounted] })

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
    
    // Custom cursor
    const cursor = document.createElement('div')
    cursor.className = 'custom-cursor'
    document.body.appendChild(cursor)

    let cursorX = 0
    let cursorY = 0
    let targetX = 0
    let targetY = 0

    const moveCursor = (e: MouseEvent) => {
      targetX = e.clientX
      targetY = e.clientY
    }

    const animateCursor = () => {
      const ease = 0.15
      cursorX += (targetX - cursorX) * ease
      cursorY += (targetY - cursorY) * ease
      cursor.style.left = cursorX + 'px'
      cursor.style.top = cursorY + 'px'
      requestAnimationFrame(animateCursor)
    }

    const handleMouseEnter = () => cursor.classList.add('hover')
    const handleMouseLeave = () => cursor.classList.remove('hover')

    document.addEventListener('mousemove', moveCursor)
    animateCursor()

    // Add hover effect to interactive elements
    const interactiveElements = document.querySelectorAll('button, a, .magnetic, .bento-card')
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })
    
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

    // Cleanup cursor
    return () => {
      document.removeEventListener('mousemove', moveCursor)
      if (cursor && document.body.contains(cursor)) {
        document.body.removeChild(cursor)
      }
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
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
      title: "Automatizaciones con IA",
      icon: <Brain className="h-8 w-8 text-primary" />,
      description: "Automatiza procesos complejos con inteligencia artificial avanzada",
      benefits: [
        "Reducción del 80% en tareas repetitivas",
        "Integración con más de 200 aplicaciones",
        "Flujos de trabajo inteligentes con IA"
      ],
      slug: "automatizaciones"
    },
    {
      title: "Flujos de Trabajo n8n",
      icon: <Workflow className="h-8 w-8 text-primary" />,
      description: "Conecta todas tus herramientas en workflows inteligentes y automatizados",
      benefits: [
        "Workflows personalizados sin código",
        "Sincronización en tiempo real",
        "Escalabilidad automática"
      ],
      slug: "automatizaciones"
    },
    {
      title: "Inteligencia de Datos",
      icon: <Sparkles className="h-8 w-8 text-primary" />,
      description: "Convierte datos en decisiones estratégicas con IA",
      benefits: [
        "Dashboards inteligentes en tiempo real",
        "Análisis predictivo con IA",
        "Reportes automatizados"
      ],
      slug: "business-intelligence"
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
      <SchemaOrg type="home" />
      <Header 
        darkMode={darkMode} 
        onToggleDarkMode={handleToggleDarkMode} 
        scrollToSection={scrollToSection}
      />

      <main className="flex-grow w-full">
        {/* Hero Section - UnicornStudio + GSAP Enhanced */}
        <section ref={heroRef} id="inicio" className="relative overflow-hidden w-full min-h-[95vh] flex items-center">
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
          
          {/* Gradient overlays for depth */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/20 to-black/40 dark:from-black/40 dark:via-black/30 dark:to-black/50 z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 z-10"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 py-20">
            <div className="flex flex-col items-center text-center space-y-8 md:space-y-12">
              
              {/* AI Badge */}
              <div className="hero-badge inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/40 glass-frost shadow-2xl magnetic">
                <Sparkles className="h-4 w-4 text-white animate-pulse" />
                <span className="text-sm font-semibold text-white tracking-wide">Automatización con IA</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05] drop-shadow-[0_10px_40px_rgba(0,0,0,0.95)]">
                <div className="hero-title mb-4 text-white">Automatiza tu</div>
                <div className="hero-title neon-glow text-white relative">
                  Negocio con IA
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                </div>
              </h1>
              
              {/* Subheadline */}
              <p className="hero-subtitle max-w-2xl text-lg sm:text-xl md:text-2xl text-white/95 leading-relaxed drop-shadow-[0_6px_24px_rgba(0,0,0,0.95)] font-light">
                Especialistas en <Link href="/servicios/automatizaciones" className="font-semibold text-white hover:underline">automatización con n8n e IA</Link>, <Link href="/servicios/business-intelligence" className="font-semibold text-white hover:underline">dashboards de Business Intelligence</Link> y <Link href="/servicios/desarrollo-web" className="font-semibold text-white hover:underline">desarrollo web</Link> que transforman tu forma de trabajar
              </p>
            </div>
          </div>

          {/* CTA Button - Positioned at bottom */}
          <div className="hero-cta absolute bottom-8 left-0 right-0 flex justify-center z-30">
            <Button 
              size="lg" 
              className="btn-primary text-base px-12 py-7 rounded-full group shadow-[0_20px_60px_rgba(41,121,255,0.5)] hover:shadow-[0_30px_80px_rgba(41,121,255,0.7)] backdrop-blur-xl magnetic relative overflow-hidden"
              onClick={handleCTA}
            >
              <span className="relative z-10 font-bold">Agenda una Consulta Gratuita</span>
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-all duration-300 relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            </Button>
          </div>
        </section>

        {/* Problem/Solution Section */}
        <section className="py-32 w-full relative overflow-hidden mesh-gradient">
          {/* Dynamic animated background elements with parallax */}
          <div className="absolute inset-0">
            <div className="floating-orb absolute top-10 right-10 w-80 h-80 bg-gradient-to-br from-destructive/30 to-transparent rounded-full blur-3xl animate-morph"></div>
            <div className="floating-orb absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-3xl animate-float-up" style={{animationDelay: '2s'}}></div>
            <div className="floating-orb absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-secondary/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid md:grid-cols-2 gap-20 items-center">
              <div className="space-y-6 fade-in-scroll">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-destructive/20 bg-destructive/10">
                  <Zap className="h-4 w-4 text-destructive" />
                  <span className="text-sm font-medium text-destructive">El Problema</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                  ¿Pierdes tiempo en tareas que podrían automatizarse?
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p className="flex items-start gap-3">
                    <span className="text-destructive mt-1">✗</span>
                    <span>Copiar y pegar datos entre herramientas (descubre cómo <Link href="/servicios/automatizaciones" className="text-primary hover:underline">automatizar procesos empresariales</Link>)</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-destructive mt-1">✗</span>
                    <span>Procesos manuales que consumen horas cada semana</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-destructive mt-1">✗</span>
                    <span>Sin visibilidad de métricas clave (necesitas <Link href="/servicios/business-intelligence" className="text-primary hover:underline">dashboards de Business Intelligence</Link>)</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-destructive mt-1">✗</span>
                    <span>Tareas repetitivas que drenan tu energía</span>
                  </p>
                </div>
              </div>
              
              <div className="space-y-6 fade-in-scroll">
                {/* Ultra-modern animated decorative grid */}
                <div className="relative mb-12 h-32">
                  <div className="absolute inset-0 grid grid-cols-4 gap-3">
                    {[...Array(8)].map((_, i) => (
                      <div 
                        key={i}
                        className="h-12 w-12 border border-primary/20 rounded-lg animate-float-up hover-glow magnetic"
                        style={{
                          animationDelay: `${i * 0.2}s`,
                          background: `linear-gradient(135deg, rgba(41,121,255,${0.05 + i * 0.02}), transparent)`
                        }}
                      ></div>
                    ))}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-40 w-40 bg-gradient-to-br from-primary/30 via-primary/10 to-transparent rounded-full blur-3xl animate-morph"></div>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-xl shadow-lg shadow-primary/20">
                  <Sparkles className="h-4 w-4 text-primary animate-pulse" />
                  <span className="text-sm font-semibold text-primary tracking-wide">La Solución</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                  Automatizaciones que trabajan mientras tú duermes
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span>Recupera hasta 20+ horas semanales con <Link href="/servicios/automatizaciones" className="text-primary hover:underline">automatización inteligente con n8n</Link></span>
                  </p>
                  <p className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span>Conecta 200+ aplicaciones para crear <Link href="/servicios/automatizaciones" className="text-primary hover:underline">flujos de trabajo automatizados</Link></span>
                  </p>
                  <p className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span>Toma decisiones basadas en datos con <Link href="/servicios/business-intelligence" className="text-primary hover:underline">dashboards en tiempo real</Link></span>
                  </p>
                  <p className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span>Enfócate en hacer crecer tu negocio, no en tareas administrativas (lee nuestro <Link href="/blog" className="text-primary hover:underline">blog sobre transformación digital</Link>)</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works - Process */}
        <section ref={processRef} className="py-32 w-full bg-muted/20 parallax-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20 fade-in-scroll">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Proceso <span className="gradient-text">Simple y Efectivo</span>
              </h2>
              <p className="mx-auto max-w-2xl text-lg md:text-xl text-muted-foreground">
                De la idea a la implementación en tiempo récord
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Descubrimiento",
                  description: "Analizamos tus procesos y encontramos oportunidades de automatización",
                  icon: <Brain className="h-6 w-6" />
                },
                {
                  step: "02",
                  title: "Diseño",
                  description: "Creamos un plan personalizado con workflows optimizados para tu negocio",
                  icon: <Workflow className="h-6 w-6" />
                },
                {
                  step: "03",
                  title: "Desarrollo",
                  description: "Implementamos las automatizaciones y las integramos con tus herramientas",
                  icon: <Zap className="h-6 w-6" />
                },
                {
                  step: "04",
                  title: "Optimización",
                  description: "Monitoreamos y mejoramos continuamente para maximizar resultados",
                  icon: <TrendingUp className="h-6 w-6" />
                }
              ].map((item, index) => (
                <div key={index} className="process-step relative">
                  {/* Connecting line (hidden on mobile) */}
                  {index < 3 && (
                    <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent"></div>
                  )}
                  
                  <div className="relative space-y-4 text-center hover:scale-105 transition-transform duration-300">
                    {/* Step number with icon */}
                    <div className="relative inline-flex items-center justify-center w-24 h-24 mx-auto">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/50 rounded-full opacity-20"></div>
                      <div className="relative bg-background border-2 border-primary rounded-full w-20 h-20 flex items-center justify-center">
                        {item.icon}
                </div>
                      <div className="absolute -top-2 -right-2 bg-primary text-white text-xs font-bold w-8 h-8 rounded-full flex items-center justify-center">
                        {item.step}
                </div>
              </div>

                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                </p>
              </div>
            </div>
              </div>
              ))}
            </div>
          </div>
        </section>

        {/* Servicios - Modern Minimalistic Design */}
        <section ref={servicesRef} id="servicios" className="py-32 w-full parallax-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20 fade-in-scroll">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Soluciones que <span className="gradient-text">Impulsan Resultados</span>
              </h2>
              <p className="mx-auto max-w-2xl text-lg md:text-xl text-muted-foreground">
                Tecnología de vanguardia para automatizar, analizar y optimizar tu negocio
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {services.map((service, index) => (
                <div 
                  key={service.title} 
                  className="service-card bento-card group p-8"
                >
                  <div className="relative space-y-6 z-10">
                    {/* Icon with morphing background */}
                    <div className="relative inline-flex p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 text-primary group-hover:from-primary group-hover:to-primary/80 group-hover:text-white transition-all duration-500 animate-morph hover-glow">
                      <div className="relative z-10">
                        {service.icon}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold">{service.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                    </div>
                    
                    {/* Benefits */}
                    <ul className="space-y-3">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {/* CTA */}
                    <Link 
                      href={`/servicios/${service.slug}`}
                      className="inline-flex items-center text-primary font-medium group-hover:gap-2 transition-all"
                    >
                      Explorar
                      <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>



        {/* Why Choose Us - Benefits */}
        <section className="py-32 w-full relative overflow-hidden">
          {/* Animated background grid */}
          <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style={{
            backgroundImage: 'radial-gradient(circle, rgba(41,121,255,0.8) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            animation: 'gradient-shift 20s ease infinite'
          }}></div>
          
          {/* Dynamic Floating orbs with parallax */}
          <div className="floating-orb absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/15 to-transparent rounded-full blur-3xl animate-float-up"></div>
          <div className="floating-orb absolute bottom-20 right-1/4 w-96 h-96 bg-gradient-to-tl from-secondary/15 to-transparent rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
          <div className="floating-orb absolute top-1/3 right-1/3 w-64 h-64 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-2xl animate-morph"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-20 fade-in-scroll">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                ¿Por qué <span className="gradient-text">Automatizar</span>?
              </h2>
              <p className="mx-auto max-w-2xl text-lg md:text-xl text-muted-foreground">
                Ahorra tiempo, reduce costos y escala más rápido
              </p>
            </div>

            <div className="benefits-grid grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Clock className="h-8 w-8" />,
                  title: "Ahorra Tiempo",
                  description: "Recupera horas cada semana en tareas repetitivas"
                },
                {
                  icon: <TrendingUp className="h-8 w-8" />,
                  title: "Reduce Costos",
                  description: "Menos trabajo manual significa menos gastos operativos"
                },
                {
                  icon: <Zap className="h-8 w-8" />,
                  title: "Mayor Eficiencia",
                  description: "Los procesos automatizados son más rápidos y precisos"
                },
                {
                  icon: <Sparkles className="h-8 w-8" />,
                  title: "Escala Rápido",
                  description: "Crece sin necesidad de contratar más personal"
                }
              ].map((benefit, index) => (
                <div key={index} className="benefit-card bento-card p-8 text-center space-y-5 group cursor-pointer">
                  <div className="relative inline-flex p-5 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 text-primary group-hover:from-primary group-hover:to-primary/80 group-hover:text-white transition-all duration-500 magnetic animate-morph">
                    <div className="relative z-10">
                      {benefit.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">{benefit.title}</h3>
                  <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-32 w-full bg-muted/20 relative overflow-hidden">
          {/* Animated lines background */}
          <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-shimmer"></div>
            <div className="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary to-transparent animate-shimmer" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-2/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-shimmer" style={{animationDelay: '2s'}}></div>
          </div>

          {/* Floating shapes */}
          <div className="absolute top-10 right-10 w-20 h-20 border-2 border-primary/20 rounded-lg rotate-12 animate-float-up"></div>
          <div className="absolute bottom-20 left-10 w-16 h-16 border-2 border-secondary/20 rounded-full animate-float" style={{animationDelay: '1.5s'}}></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-20 fade-in-scroll">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Lo Que Puedes <span className="gradient-text">Lograr</span>
              </h2>
              <p className="mx-auto max-w-2xl text-lg md:text-xl text-muted-foreground">
                Descubre cómo la automatización está transformando la forma de trabajar
              </p>
            </div>

            <div className="fade-in-scroll">
              <Testimonials limit={3} />
            </div>

            <div className="mt-12 text-center">
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <Link href="/casos-exito">
                  Ver Más Ejemplos
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Resources CTA */}
        <section className="py-32 w-full relative overflow-hidden">
          {/* Animated geometric shapes */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 -right-20 w-64 h-64 border border-primary/20 rounded-full animate-float-up"></div>
            <div className="absolute bottom-10 -left-20 w-80 h-80 border border-secondary/20 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-3xl animate-pulse"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="fade-in-scroll relative rounded-3xl p-12 md:p-16 overflow-hidden border border-primary/20 bg-gradient-to-br from-primary/10 via-background to-background hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(41,121,255,0.4) 1px, transparent 0)',
                backgroundSize: '32px 32px'
              }}></div>
              
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 animate-gradient-shift"></div>
              
              <div className="relative text-center space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold">
                    Recursos <span className="gradient-text">Gratuitos</span>
              </h2>
                  <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                    Descarga gratis: <Link href="/recursos" className="text-primary hover:underline font-semibold">guías de automatización con n8n</Link>, templates de workflows, <Link href="/recursos/calculadora-roi" className="text-primary hover:underline font-semibold">calculadora de ROI</Link>, y más herramientas para tu transformación digital
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Button asChild size="lg" className="btn-primary rounded-full">
                  <Link href="/recursos">
                      Ver Recursos Gratuitos
                      <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                  <Button asChild size="lg" variant="outline" className="rounded-full border-2">
                  <Link href="/recursos/calculadora-roi">
                    Calcular mi ROI de Automatización
                  </Link>
                </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-32 w-full bg-muted/20 relative overflow-hidden">
          {/* Subtle animated background */}
          <div className="absolute inset-0 opacity-[0.02]">
            <div className="absolute inset-0" style={{
              backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(41,121,255,0.3) 35px, rgba(41,121,255,0.3) 70px)',
              animation: 'shimmer 20s linear infinite'
            }}></div>
          </div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16 fade-in-scroll">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Preguntas <span className="gradient-text">Frecuentes</span>
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground">
                Todo lo que necesitas saber sobre nuestras automatizaciones
              </p>
            </div>
            
            <div className="fade-in-scroll">
              <FAQ 
                items={generalFAQs}
                title=""
                subtitle=""
              />
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-6">
                ¿Tienes más preguntas?
              </p>
              <Button onClick={handleCTA} size="lg" className="btn-primary rounded-full">
                Agenda una Llamada Gratuita
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section id="contacto" className="py-32 w-full relative overflow-hidden">
          {/* Dynamic animated background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(41,121,255,0.15),transparent_70%)] animate-pulse"></div>
          </div>
          
          {/* Floating elements */}
          <div className="absolute top-10 left-10 w-24 h-24 border-2 border-primary/30 rounded-full animate-float-up"></div>
          <div className="absolute top-20 right-20 w-16 h-16 border-2 border-secondary/30 rounded-lg rotate-45 animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-10 right-1/3 w-32 h-32 bg-gradient-to-tl from-secondary/20 to-transparent rounded-full blur-2xl animate-pulse-glow"></div>
          
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="space-y-8 fade-in-scroll">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/10 backdrop-blur-sm">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Comienza Tu Transformación Digital</span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                ¿Listo para <span className="gradient-text">Automatizar</span>?
              </h2>
              
              <p className="mx-auto max-w-2xl text-lg md:text-xl text-muted-foreground">
                Agenda una llamada de 30 minutos sin compromiso. Hablemos sobre cómo la automatización 
                puede transformar tu forma de trabajar.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" className="btn-primary text-base px-8 py-6 rounded-full group" onClick={handleCTA}>
                  Agendar Llamada Gratuita
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="text-base px-8 py-6 rounded-full border-2" asChild>
                  <Link href="/recursos">
                    Ver Recursos Gratis
                  </Link>
                </Button>
              </div>
              
              {/* Trust indicators */}
              <div className="flex flex-wrap justify-center gap-6 md:gap-8 pt-8">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>Sin compromiso</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>Respuesta rápida</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>Consulta personalizada</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}