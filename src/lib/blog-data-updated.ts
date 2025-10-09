export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  slug: string;
  category: string;
  readTime: string;
  publishDate: string;
  author: string;
  featured: boolean;
  tags: string[];
  image: string;
  content?: string;
  hidden?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: 10,
    title: "Cómo Automatizar Procesos Empresariales con n8n: Guía Completa 2025",
    excerpt: "Descubre las mejores estrategias para implementar automatizaciones inteligentes con n8n e IA que reduzcan costos hasta 80% y aumenten la productividad. Incluye casos de éxito, ROI y paso a paso.",
    slug: "como-automatizar-procesos-empresariales-n8n",
    category: "Automatización",
    readTime: "25 min",
    publishDate: "2025-01-20",
    author: "Equipo Creativv",
    featured: true,
    tags: ["n8n", "automatización", "IA", "workflows", "productividad", "ROI"],
    image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800&h=400&fit=crop&crop=center"
  },
  {
    id: 11,
    title: "Dashboards de Business Intelligence: Guía Completa para Tomar Decisiones Basadas en Datos",
    excerpt: "Aprende a crear dashboards de BI personalizados con análisis predictivo e IA. Mejora decisiones 60%, reduce tiempo de análisis 75%. Incluye comparativa de herramientas y casos de éxito.",
    slug: "dashboards-business-intelligence-guia-completa",
    category: "Business Intelligence",
    readTime: "28 min",
    publishDate: "2025-01-18",
    author: "Equipo Creativv",
    featured: true,
    tags: ["business intelligence", "dashboards", "BI", "datos", "analytics", "visualización"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop&crop=center"
  },
  {
    id: 1,
    title: "Cómo automatizar tu negocio con n8n y IA en 2024",
    excerpt: "Descubre las mejores estrategias para implementar automatizaciones inteligentes que reduzcan costos y aumenten la productividad de tu empresa.",
    slug: "automatizar-negocio-n8n-ia-2024",
    category: "Automatización",
    readTime: "8 min",
    publishDate: "2024-01-15",
    author: "Equipo Creativv",
    featured: false,
    tags: ["n8n", "IA", "automatización", "productividad"],
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop&crop=center",
    content: `...`
  },
  {
    id: 2,
    title: "Business Intelligence: Transformando datos en decisiones estratégicas",
    excerpt: "Aprende cómo implementar soluciones de BI que te permitan tomar decisiones basadas en datos y optimizar todos los procesos de tu organización.",
    slug: "business-intelligence-decisiones-estrategicas",
    category: "Business Intelligence",
    readTime: "12 min",
    publishDate: "2024-01-10",
    author: "Equipo Creativv",
    featured: false,
    tags: ["BI", "datos", "analytics", "decisiones"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop&crop=center",
    content: `...`
  },
  {
    id: 3,
    title: "Desarrollo web moderno: React vs Next.js para tu proyecto",
    excerpt: "Comparativa detallada entre React y Next.js para ayudarte a elegir la mejor tecnología para tu próximo proyecto web.",
    slug: "react-vs-nextjs-desarrollo-web",
    category: "Desarrollo Web",
    readTime: "10 min",
    publishDate: "2024-01-08",
    author: "Equipo Creativv",
    featured: false,
    tags: ["React", "Next.js", "desarrollo web", "frontend"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop&crop=center",
    content: `...`
  },
  {
    id: 4,
    title: "SEO técnico: Optimiza tu sitio web para los motores de búsqueda",
    excerpt: "Guía completa de SEO técnico para mejorar el posicionamiento de tu sitio web y aumentar el tráfico orgánico.",
    slug: "seo-tecnico-optimizacion-sitio-web",
    category: "Marketing Digital",
    readTime: "15 min",
    publishDate: "2024-01-05",
    author: "Equipo Creativv",
    featured: false,
    tags: ["SEO", "optimización", "tráfico", "posicionamiento"],
    image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=800&h=400&fit=crop&crop=center",
    content: `...`
  },
  {
    id: 5,
    title: "Integración de APIs: Conecta todas tus herramientas de negocio",
    excerpt: "Descubre cómo integrar diferentes APIs para crear un ecosistema digital cohesivo que automatice tus procesos de negocio.",
    slug: "integracion-apis-herramientas-negocio",
    category: "Automatización",
    readTime: "11 min",
    publishDate: "2024-01-03",
    author: "Equipo Creativv",
    featured: false,
    tags: ["APIs", "integración", "automatización", "herramientas"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop&crop=center",
    content: `...`
  },
  {
    id: 6,
    title: "Dashboards interactivos: Visualiza tus datos de manera efectiva",
    excerpt: "Aprende a crear dashboards interactivos que transformen datos complejos en insights accionables para tu equipo.",
    slug: "dashboards-interactivos-visualizacion-datos",
    category: "Business Intelligence",
    readTime: "9 min",
    publishDate: "2024-01-01",
    author: "Equipo Creativv",
    featured: false,
    tags: ["dashboards", "visualización", "datos", "BI"],
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=400&fit=crop&crop=center",
    content: `...`
  },
  {
    id: 7,
    title: "Machine Learning en el negocio: Casos de uso prácticos",
    excerpt: "Explora cómo el machine learning está transformando diferentes industrias y cómo puedes aplicarlo en tu empresa.",
    slug: "machine-learning-negocio-casos-uso",
    category: "Automatización",
    readTime: "14 min",
    publishDate: "2023-12-28",
    author: "Equipo Creativv",
    featured: false,
    tags: ["Machine Learning", "IA", "casos de uso", "negocios"],
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=400&fit=crop&crop=center",
    content: `...`
  },
  {
    id: 8,
    title: "Arquitectura de microservicios: Escalando tu aplicación",
    excerpt: "Descubre cómo la arquitectura de microservicios puede ayudar a tu aplicación a escalar y mantenerse ágil.",
    slug: "arquitectura-microservicios-escalando-aplicacion",
    category: "Desarrollo Web",
    readTime: "13 min",
    publishDate: "2023-12-25",
    author: "Equipo Creativv",
    featured: false,
    tags: ["microservicios", "arquitectura", "escalabilidad", "desarrollo"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop&crop=center",
    content: `...`
  },
  {
    id: 9,
    title: "Analytics avanzado: Más allá de Google Analytics",
    excerpt: "Descubre herramientas de analytics avanzadas que te darán insights más profundos sobre el comportamiento de tus usuarios.",
    slug: "analytics-avanzado-google-analytics",
    category: "Business Intelligence",
    readTime: "11 min",
    publishDate: "2023-12-20",
    author: "Equipo Creativv",
    featured: false,
    tags: ["analytics", "Google Analytics", "datos", "usuarios"],
    image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&h=400&fit=crop&crop=center",
    content: `...`
  }
];
