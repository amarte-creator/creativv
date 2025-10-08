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
    name: "Ing. Samuel Ramírez",
    role: "Director General",
    company: "Constructora Samer",
    content: "Ahora sabemos exactamente dónde está cada proyecto en tiempo real. Las desviaciones se detectan de inmediato y podemos tomar decisiones informadas rápidamente. La digitalización cambió completamente nuestra forma de trabajar.",
    rating: 5,
    results: "85% menos tiempo en reportes"
  },
  {
    name: "Arq. Patricia Campos",
    role: "Directora de Marketing",
    company: "Vistacampo",
    content: "El nuevo sitio web ha sido un cambio total. Los clientes llegan mejor informados a las visitas y nuestro equipo de ventas recibe leads de mucha mejor calidad. Los resultados superaron nuestras expectativas.",
    rating: 5,
    results: "+210% leads generados"
  },
  {
    name: "Laura Méndez",
    role: "Fundadora",
    company: "artistheway",
    content: "Creativv entendió perfectamente las necesidades del mercado de arte digital. La plataforma protege nuestras obras y nos ha permitido escalar las ventas de manera increíble. Estamos muy contentos con los resultados.",
    rating: 5,
    results: "+340% en ventas mensuales"
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
  },
  {
    name: "Ana Martínez",
    role: "VP de Marketing",
    company: "Digital Ventures",
    content: "La integración de n8n con nuestro CRM fue perfecta. Ahora cada lead se procesa automáticamente, se califica y se asigna al vendedor correcto. Nuestra eficiencia aumentó 300%.",
    rating: 5,
    results: "300% más eficiencia"
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
