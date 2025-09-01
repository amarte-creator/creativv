import { Metadata } from "next";
import { BlogList } from "@/components/blog/blog-list";
import { BlogHero } from "@/components/blog/blog-hero";
import { BlogLayout } from "@/components/blog-layout";

export const metadata: Metadata = {
  title: "Blog - Creativv | Insights sobre Transformación Digital",
  description: "Descubre las últimas tendencias en transformación digital, automatización con IA, business intelligence y desarrollo web. Artículos expertos para escalar tu negocio.",
  keywords: "blog transformación digital, automatización IA, business intelligence, desarrollo web, n8n, SEO, marketing digital",
  openGraph: {
    title: "Blog - Creativv | Insights sobre Transformación Digital",
    description: "Descubre las últimas tendencias en transformación digital, automatización con IA, business intelligence y desarrollo web.",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog - Creativv | Insights sobre Transformación Digital",
    description: "Descubre las últimas tendencias en transformación digital, automatización con IA, business intelligence y desarrollo web.",
  },
};

export default function BlogPage() {
  return (
    <BlogLayout>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-blue-900/20 dark:to-purple-900/20">
        <BlogHero />
        <BlogList />
      </div>
    </BlogLayout>
  );
}
