'use client'

import { useState } from "react";
import { BlogCard } from "./blog-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Filter, Grid, List } from "lucide-react";

// Sample blog data
const blogPosts = [
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
    image: "/blog-images/automatizacion-n8n-ia.svg"
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
    image: "/blog-images/business-intelligence.svg"
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
    image: "/blog-images/desarrollo-web.svg"
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
    image: "/blog-images/seo-tecnico.svg"
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
    image: "/blog-images/api-integration.svg"
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
    image: "/blog-images/dashboards.svg"
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
    image: "/blog-images/machine-learning.svg"
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
    image: "/blog-images/microservices.svg"
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
    image: "/blog-images/analytics.svg"
  }
];

const categories = [
  "Todos",
  "Automatización",
  "Business Intelligence", 
  "Desarrollo Web",
  "Marketing Digital"
];

export function BlogList() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "Todos" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Filters and Controls */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="rounded-full"
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Artículos Destacados
            </h2>
            <div className={`grid gap-8 ${
              viewMode === "grid" 
                ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" 
                : "grid-cols-1"
            }`}>
              {featuredPosts.map((post) => (
                <BlogCard 
                  key={post.id} 
                  post={post} 
                  viewMode={viewMode}
                  featured={true}
                />
              ))}
            </div>
          </div>
        )}

        {/* Regular Posts */}
        {regularPosts.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              {selectedCategory === "Todos" ? "Todos los Artículos" : `Artículos de ${selectedCategory}`}
            </h2>
            <div className={`grid gap-8 ${
              viewMode === "grid" 
                ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" 
                : "grid-cols-1"
            }`}>
              {regularPosts.map((post) => (
                <BlogCard 
                  key={post.id} 
                  post={post} 
                  viewMode={viewMode}
                  featured={false}
                />
              ))}
            </div>
          </div>
        )}

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-500 dark:text-gray-400 mb-4">
              <Filter className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <h3 className="text-xl font-semibold mb-2">No se encontraron artículos</h3>
              <p>Intenta ajustar los filtros o buscar con otros términos.</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
