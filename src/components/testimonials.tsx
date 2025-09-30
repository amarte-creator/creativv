'use client'

import * as React from 'react'
import { Star, Quote } from 'lucide-react'

interface Testimonial {
  name: string
  role: string
  company: string
  image?: string
  content: string
  rating: number
  results?: string
}

const testimonials: Testimonial[] = [
  {
    name: "Carlos Mendoza",
    role: "CEO",
    company: "TechFlow Solutions",
    content: "Creativv transformó completamente nuestros procesos de ventas. La automatización con IA que implementaron nos ahorró 25 horas semanales y aumentó nuestra tasa de cierre en un 40%.",
    rating: 5,
    results: "40% aumento en conversiones"
  },
  {
    name: "María González",
    role: "Directora de Operaciones",
    company: "Innovatech México",
    content: "Los dashboards de BI que desarrollaron nos dieron visibilidad completa de nuestro negocio. Ahora tomamos decisiones basadas en datos en tiempo real. El ROI fue visible en menos de 2 meses.",
    rating: 5,
    results: "ROI en 2 meses"
  },
  {
    name: "Roberto Silva",
    role: "Fundador",
    company: "GrowthLab",
    content: "Trabajar con Creativv fue excepcional. No solo entregaron un sitio web increíble, sino que implementaron automatizaciones que nos ahorraron $45,000 al año en costos operativos.",
    rating: 5,
    results: "$45K ahorrados anualmente"
  },
  {
    name: "Ana Martínez",
    role: "VP de Marketing",
    company: "Digital Ventures",
    content: "La integración de n8n con nuestro CRM fue perfecta. Ahora cada lead se procesa automáticamente, se califica y se asigna al vendedor correcto. Nuestra eficiencia aumentó 300%.",
    rating: 5,
    results: "300% más eficiencia"
  },
  {
    name: "Luis Hernández",
    role: "Director de TI",
    company: "FinanceHub",
    content: "Creativv no solo entiende la tecnología, sino también el negocio. Sus automatizaciones con IA nos permitieron escalar de 50 a 200 clientes sin aumentar el equipo.",
    rating: 5,
    results: "4x crecimiento sin contratar"
  },
  {
    name: "Patricia Ruiz",
    role: "COO",
    company: "ServicePro",
    content: "El equipo de Creativv es profesional, proactivo y orientado a resultados. El dashboard de BI que construyeron nos dio insights que nunca supimos que necesitábamos. Excelente inversión.",
    rating: 5,
    results: "Insights accionables diarios"
  }
]

export function Testimonials({ limit }: { limit?: number }) {
  const displayedTestimonials = limit ? testimonials.slice(0, limit) : testimonials

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {displayedTestimonials.map((testimonial, index) => (
        <div 
          key={index} 
          className="glass rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fade-up relative"
          style={{animationDelay: `${index * 100}ms`}}
        >
          <Quote className="h-8 w-8 text-primary/20 absolute top-4 right-4" />
          
          <div className="flex items-center mb-4">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-primary text-primary" />
            ))}
          </div>

          <p className="text-muted-foreground mb-6 relative z-10">
            &ldquo;{testimonial.content}&rdquo;
          </p>

          {testimonial.results && (
            <div className="mb-4 p-3 bg-primary/10 rounded-lg border border-primary/20">
              <p className="text-sm font-semibold text-primary text-center">
                ✨ {testimonial.results}
              </p>
            </div>
          )}

          <div className="flex items-center space-x-3 pt-4 border-t border-border/40">
            <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center text-lg font-bold">
              {testimonial.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <p className="font-semibold">{testimonial.name}</p>
              <p className="text-sm text-muted-foreground">{testimonial.role}, {testimonial.company}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export function TestimonialsSection() {
  return (
    <section className="py-24 w-full relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/3 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-up">
            <Star className="h-4 w-4 fill-primary" />
            Testimonios Reales
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6 animate-fade-up animate-delay-150">
            Lo que dicen nuestros clientes
          </h2>
          <p className="mx-auto max-w-[700px] text-lg text-muted-foreground animate-fade-up animate-delay-300">
            No confíes solo en nuestra palabra. Descubre cómo hemos ayudado a empresas como la tuya a transformarse digitalmente.
          </p>
        </div>

        <Testimonials />

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-8 glass rounded-full px-8 py-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">4.9/5</div>
              <div className="text-sm text-muted-foreground">Calificación promedio</div>
            </div>
            <div className="h-12 w-px bg-border/40"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Clientes satisfechos</div>
            </div>
            <div className="h-12 w-px bg-border/40"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">98%</div>
              <div className="text-sm text-muted-foreground">Tasa de retención</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
