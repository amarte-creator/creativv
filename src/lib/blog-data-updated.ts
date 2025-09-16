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
    id: 1,
    title: "Cómo automatizar tu negocio con n8n y IA en 2024",
    excerpt: "Descubre las mejores estrategias para implementar automatizaciones inteligentes que reduzcan costos y aumenten la productividad de tu empresa.",
    slug: "automatizar-negocio-n8n-ia-2024",
    category: "Automatización",
    readTime: "8 min",
    publishDate: "2024-01-15",
    author: "Equipo Creativv",
    featured: true,
    tags: ["n8n", "IA", "automatización", "productividad"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop&crop=center",
    content: `...`,
    hidden: true
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
    featured: true,
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
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop&crop=center",
    content: `...`,
    hidden: true
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
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop&crop=center",
    content: `...`,
    hidden: true
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
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop&crop=center",
    content: `...`,
    hidden: true
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
    image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&h=400&fit=crop&crop=center",
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
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop&crop=center",
    content: `...`,
    hidden: true
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
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop&crop=center",
    content: `...`,
    hidden: true
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
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop&crop=center",
    content: `...`,
    hidden: true
  }
];
