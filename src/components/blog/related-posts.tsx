'use client'

import { BlogCard } from "./blog-card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface RelatedPost {
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
}

interface RelatedPostsProps {
  posts: RelatedPost[];
}

export function RelatedPosts({ posts }: RelatedPostsProps) {
  if (posts.length === 0) {
    return null;
  }

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Artículos Relacionados
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Descubre más contenido sobre transformación digital
            </p>
          </div>
          <Link href="/blog">
            <Button variant="outline" className="hidden sm:flex">
              Ver todos los artículos
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard
              key={post.id}
              post={post}
              viewMode="grid"
              featured={post.featured}
            />
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-12 text-center sm:hidden">
          <Link href="/blog">
            <Button variant="outline" className="w-full sm:w-auto">
              Ver todos los artículos
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
