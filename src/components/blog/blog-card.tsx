'use client'

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ArrowRight, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface BlogPost {
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

interface BlogCardProps {
  post: BlogPost;
  viewMode: "grid" | "list";
  featured: boolean;
}

export function BlogCard({ post, viewMode, featured }: BlogCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (viewMode === "list") {
    return (
      <article className="group relative bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-slate-700">
        <div className="flex flex-col lg:flex-row">
          {/* Image */}
          <div className="lg:w-1/3 relative">
            <div className="aspect-video lg:aspect-square relative overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {featured && (
                <div className="absolute top-4 left-4">
                  <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-0">
                    <Star className="w-3 h-3 mr-1" />
                    Destacado
                  </Badge>
                </div>
              )}
              <div className="absolute top-4 right-4">
                <Badge variant="secondary" className="bg-white/90 dark:bg-slate-800/90">
                  {post.category}
                </Badge>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-2/3 p-6 lg:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {formatDate(post.publishDate)}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </div>
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  {post.author}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {post.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {post.excerpt}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {post.tags.slice(0, 3).map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <Link href={`/blog/${post.slug}`}>
                <Button className="group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  Leer más
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </article>
    );
  }

  // Grid view
  return (
    <article className="group relative bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-slate-700">
      {/* Image */}
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {featured && (
          <div className="absolute top-4 left-4">
            <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-0">
              <Star className="w-3 h-3 mr-1" />
              Destacado
            </Badge>
          </div>
        )}
        <div className="absolute top-4 right-4">
          <Badge variant="secondary" className="bg-white/90 dark:bg-slate-800/90">
            {post.category}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {formatDate(post.publishDate)}
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {post.readTime}
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
          {post.title}
        </h3>

        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed line-clamp-3">
          {post.excerpt}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {post.tags.slice(0, 2).map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
            <User className="w-4 h-4" />
            {post.author}
          </div>
          <Link href={`/blog/${post.slug}`}>
            <Button size="sm" className="group-hover:bg-blue-600 group-hover:text-white transition-colors">
              Leer más
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </article>
  );
}
