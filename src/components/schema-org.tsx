import Script from 'next/script'

interface SchemaOrgProps {
  type?: 'home' | 'service' | 'blog'
  serviceType?: 'automation' | 'bi' | 'web'
  blogPost?: {
    title: string
    description: string
    publishDate: string
    author: string
    image: string
    slug: string
  }
}

export function SchemaOrg({ type = 'home', serviceType, blogPost }: SchemaOrgProps) {
  const baseUrl = 'https://servicioscreativos.online'

  // Organization Schema (appears on all pages)
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Creativv",
    "url": baseUrl,
    "logo": `${baseUrl}/creativv-lg.png`,
    "description": "Especialistas en automatización empresarial con IA y n8n, dashboards de Business Intelligence y desarrollo web en México",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "MX",
      "addressLocality": "México"
    },
    "sameAs": [],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": ["es", "en"]
    }
  }

  // Local Business Schema for home page
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Creativv - Automatización con IA y Business Intelligence",
    "image": `${baseUrl}/creativv-lg.png`,
    "url": baseUrl,
    "telephone": "",
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "MX"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "19.4326",
      "longitude": "-99.1332"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "27"
    }
  }

  // Service Schemas
  const serviceSchemas = {
    automation: {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Automatización Empresarial con IA y n8n",
      "provider": {
        "@type": "Organization",
        "name": "Creativv"
      },
      "areaServed": {
        "@type": "Country",
        "name": "México"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Servicios de Automatización",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Automatización con n8n e IA",
              "description": "Flujos de trabajo inteligentes que automatizan tareas repetitivas con integración de IA"
            }
          }
        ]
      },
      "description": "Automatización de procesos empresariales con n8n e inteligencia artificial. Reducimos tareas repetitivas hasta 80% con integración de más de 200 aplicaciones.",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "15"
      }
    },
    bi: {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Business Intelligence y Dashboards",
      "provider": {
        "@type": "Organization",
        "name": "Creativv"
      },
      "areaServed": {
        "@type": "Country",
        "name": "México"
      },
      "description": "Desarrollo de dashboards de Business Intelligence personalizados con análisis predictivo e IA. Visualización de datos en tiempo real y reportes automatizados.",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "12"
      }
    },
    web: {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Desarrollo Web Profesional",
      "provider": {
        "@type": "Organization",
        "name": "Creativv"
      },
      "areaServed": {
        "@type": "Country",
        "name": "México"
      },
      "description": "Desarrollo web profesional con React y Next.js. Sitios rápidos, optimizados para conversión y SEO con diseño UX/UI moderno.",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "8"
      }
    }
  }

  // Blog Article Schema
  const articleSchema = blogPost ? {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": blogPost.title,
    "description": blogPost.description,
    "image": blogPost.image,
    "datePublished": blogPost.publishDate,
    "dateModified": blogPost.publishDate,
    "author": {
      "@type": "Organization",
      "name": blogPost.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Creativv",
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/creativv-lg.png`
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${baseUrl}/blog/${blogPost.slug}`
    }
  } : null

  // FAQ Schema for home page
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Qué es n8n y cómo puede ayudar a mi negocio?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "n8n es una plataforma de automatización de flujos de trabajo que permite conectar más de 200 aplicaciones y servicios. Ayuda a tu negocio automatizando tareas repetitivas, integrando sistemas y reduciendo el trabajo manual hasta en un 80%."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cuánto tiempo toma implementar una automatización?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dependiendo de la complejidad, las automatizaciones simples pueden estar listas en 1-2 semanas, mientras que proyectos más complejos pueden tomar de 4 a 8 semanas. Incluimos capacitación y soporte para asegurar una implementación exitosa."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué es Business Intelligence y por qué lo necesito?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Business Intelligence (BI) transforma tus datos en insights accionables mediante dashboards interactivos y análisis predictivo. Te ayuda a tomar decisiones estratégicas basadas en datos en tiempo real, mejorando la eficiencia hasta en un 60%."
        }
      }
    ]
  }

  const schemas = []

  // Always include organization
  schemas.push(organizationSchema)

  if (type === 'home') {
    schemas.push(localBusinessSchema)
    schemas.push(faqSchema)
  }

  if (type === 'service' && serviceType) {
    schemas.push(serviceSchemas[serviceType])
  }

  if (type === 'blog' && articleSchema) {
    schemas.push(articleSchema)
  }

  return (
    <>
      {schemas.map((schema, index) => (
        <Script
          key={index}
          id={`schema-${type}-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}

