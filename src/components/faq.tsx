'use client'

import * as React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { HelpCircle } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

interface FAQProps {
  items: FAQItem[]
  title?: string
  subtitle?: string
}

export function FAQ({ items, title, subtitle }: FAQProps) {
  return (
    <div className="w-full">
      {(title || subtitle) && (
        <div className="text-center mb-12">
          {title && (
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="mx-auto max-w-[700px] text-lg text-muted-foreground">
              {subtitle}
            </p>
          )}
        </div>
      )}
      
      <Accordion type="single" collapsible className="w-full space-y-4">
        {items.map((item, index) => (
          <AccordionItem 
            key={index} 
            value={`item-${index}`}
            className="glass rounded-xl px-6 border-none"
          >
            <AccordionTrigger className="text-left hover:no-underline py-6">
              <div className="flex items-start gap-4">
                <HelpCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="font-semibold">{item.question}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pl-9 text-muted-foreground pb-6">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}

// Predefined FAQ sets
export const generalFAQs: FAQItem[] = [
  {
    question: "¿Cuánto tiempo toma implementar una automatización?",
    answer: "Depende de la complejidad, pero la mayoría de automatizaciones están funcionando en 2-4 semanas. Trabajamos con entregas incrementales, así que empiezas a ver valor desde la primera semana."
  },
  {
    question: "¿Necesito conocimientos técnicos para usar las automatizaciones?",
    answer: "No. Diseñamos todo para que sea intuitivo. Incluimos capacitación completa para tu equipo y documentación clara. Si puedes usar Excel o Gmail, podrás usar nuestras automatizaciones."
  },
  {
    question: "¿Qué pasa si necesito cambios después de la implementación?",
    answer: "El primer mes de soporte está incluido sin costo. Después, ofrecemos planes de mantenimiento mensuales o puedes solicitar cambios bajo demanda. Siempre respondemos en menos de 24 horas."
  },
  {
    question: "¿Trabajan con empresas de mi tamaño/industria?",
    answer: "Trabajamos con empresas desde 5 hasta 500+ empleados en diversas industrias: tecnología, manufactura, retail, servicios profesionales, salud y más. Si tienes procesos repetitivos, podemos automatizarlos."
  },
  {
    question: "¿Cómo garantizan la seguridad de mis datos?",
    answer: "Cumplimos con estándares enterprise de seguridad. Tus datos se cifran en tránsito y en reposo. Podemos firmar NDAs y trabajamos bajo contratos con SLAs claros. Nunca compartimos información de clientes."
  },
  {
    question: "¿Cuál es la diferencia entre ustedes y otras agencias?",
    answer: "Nos especializamos en ROI medible, no solo en entregar proyectos. Cada implementación incluye KPIs claros y métricas de éxito. Además, somos expertos en integración de IA con herramientas empresariales existentes."
  }
]

export const automationFAQs: FAQItem[] = [
  {
    question: "¿Qué procesos se pueden automatizar?",
    answer: "Prácticamente cualquier tarea repetitiva: procesamiento de emails, entrada de datos, sincronización entre sistemas, generación de reportes, calificación de leads, onboarding de clientes, facturación, y más. Si lo haces más de 3 veces por semana, probablemente lo podamos automatizar."
  },
  {
    question: "¿Cuánto cuesta una automatización con n8n?",
    answer: "Los proyectos típicos van desde $15,000 MXN para automatizaciones simples hasta $80,000 MXN para flujos complejos con múltiples integraciones. Siempre proporcionamos cotizaciones detalladas antes de empezar."
  },
  {
    question: "¿Qué herramientas se pueden integrar?",
    answer: "n8n se conecta con más de 400 aplicaciones: Google Workspace, Microsoft 365, CRMs (HubSpot, Salesforce), Slack, WhatsApp, bases de datos, ERPs, y más. Si tiene API, lo podemos integrar. Si no tiene API, encontramos otra forma."
  },
  {
    question: "¿Qué pasa si cambio de herramientas en el futuro?",
    answer: "Las automatizaciones en n8n son flexibles. Si cambias de CRM o cualquier herramienta, podemos adaptar los workflows rápidamente. Muchos clientes empiezan con herramientas básicas y evolucionan sin reescribir todo desde cero."
  },
  {
    question: "¿Incluyen integración con IA (ChatGPT, Claude)?",
    answer: "Sí, es nuestra especialidad. Integramos modelos de OpenAI, Anthropic, y otros para tareas como: clasificación de contenido, generación de respuestas, extracción de información, análisis de sentimiento, y más."
  }
]

export const biFAQs: FAQItem[] = [
  {
    question: "¿Qué es exactamente Business Intelligence?",
    answer: "BI transforma tus datos dispersos en información accionable. Imagina ver en un solo dashboard: ventas en tiempo real, inventario, KPIs de marketing, métricas de producto, todo actualizado automáticamente. Eso es BI."
  },
  {
    question: "¿Necesito tener mis datos organizados antes de empezar?",
    answer: "No. Parte de nuestro servicio es limpiar, organizar e integrar tus datos. Muchos clientes empiezan con información en Excel, sistemas legacy, o múltiples bases de datos. Nosotros lo unificamos."
  },
  {
    question: "¿Qué incluye un proyecto de BI?",
    answer: "Incluye: consultoría inicial, diseño de dashboard personalizado, integración de fuentes de datos, configuración de actualizaciones automáticas, capacitación del equipo, y documentación completa. El primer mes de soporte también está incluido."
  },
  {
    question: "¿Puedo acceder a los dashboards desde mi celular?",
    answer: "Sí. Todos nuestros dashboards son responsive y se ven perfectos en cualquier dispositivo. Puedes revisar tus KPIs desde donde sea, cuando sea."
  },
  {
    question: "¿Qué pasa si quiero agregar nuevas métricas después?",
    answer: "Los dashboards son escalables. Puedes solicitar nuevos KPIs, gráficas, o integraciones en cualquier momento. Cobramos solo por el trabajo adicional, no por acceder a lo que ya construimos."
  }
]

export const pricingFAQs: FAQItem[] = [
  {
    question: "¿Cómo funciona el modelo de precios?",
    answer: "Cobramos por proyecto con precio fijo acordado previamente. No hay sorpresas ni costos ocultos. Cada cotización incluye: desarrollo, integración, pruebas, capacitación, y primer mes de soporte."
  },
  {
    question: "¿Ofrecen planes de pago?",
    answer: "Sí. Para proyectos mayores a $50,000 MXN, ofrecemos pagos en parcialidades (típicamente 3: inicio, desarrollo, entrega). También aceptamos pagos con tarjeta de crédito."
  },
  {
    question: "¿Hay costos recurrentes después de la implementación?",
    answer: "Depende de las herramientas. n8n puede ser self-hosted (sin costo mensual) o cloud (desde $20 USD/mes). Los dashboards de BI pueden requerir licencias de software (te asesoramos en la opción más económica). El soporte con nosotros es opcional."
  },
  {
    question: "¿Qué incluye el soporte post-implementación?",
    answer: "El primer mes está incluido sin costo. Después, ofrecemos planes desde $5,000 MXN/mes que incluyen: actualizaciones menores, respuesta prioritaria, ajustes de workflows, y consultoría continua."
  },
  {
    question: "¿Ofrecen descuentos para múltiples proyectos?",
    answer: "Sí. Si contratas 2 o más servicios (por ejemplo: automatización + BI + web), aplicamos descuentos del 15-20%. También tenemos precios preferenciales para contratos anuales."
  }
]
