'use client'

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, Share2, Bookmark, MessageCircle, Eye, ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface BlogPostData {
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
  content: string;
}

interface BlogPostProps {
  post: BlogPostData;
}

export function BlogPost({ post }: BlogPostProps) {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      // You could add a toast notification here
    }
  };

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    // You could add logic to save to localStorage or send to backend
  };

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Back Button */}
      <div className="mb-8">
        <Link href="/blog">
          <Button variant="ghost" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al blog
          </Button>
        </Link>
      </div>

      {/* Header */}
      <header className="mb-8">
        <div className="flex items-center gap-4 mb-6">
          <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
            {post.category}
          </Badge>
          {post.featured && (
            <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-0">
              Destacado
            </Badge>
          )}
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
          {post.title}
        </h1>

        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
          {post.excerpt}
        </p>

        {/* Meta Information */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              {post.author}
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {formatDate(post.publishDate)}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </div>
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4" />
              2.5K lecturas
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={handleShare}
              className="flex items-center gap-2"
            >
              <Share2 className="w-4 h-4" />
              Compartir
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={toggleBookmark}
              className={`flex items-center gap-2 ${isBookmarked ? 'bg-blue-50 border-blue-200 text-blue-700' : ''}`}
            >
              <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
              {isBookmarked ? 'Guardado' : 'Guardar'}
            </Button>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-sm">
              #{tag}
            </Badge>
          ))}
        </div>
      </header>

      {/* Featured Image */}
      <div className="relative aspect-video mb-12 rounded-2xl overflow-hidden shadow-2xl">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-strong:text-gray-900 dark:prose-strong:text-white prose-ul:text-gray-700 dark:prose-ul:text-gray-300 prose-li:text-gray-700 dark:prose-li:text-gray-300">
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>

      {/* Author Bio */}
      <div className="mt-16 p-8 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl">
        <div className="flex items-start gap-6">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
            C
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Equipo Creativv
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Expertos en transformación digital especializados en automatización, business intelligence y desarrollo web. 
              Ayudamos a empresas a escalar sus operaciones mediante soluciones tecnológicas innovadoras.
            </p>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                Ver más artículos
              </Button>
              <Button variant="outline" size="sm">
                Contactar
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Engagement Section */}
      <div className="mt-12 p-6 bg-white dark:bg-slate-800 rounded-2xl border border-gray-200 dark:border-slate-700">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            ¿Te gustó este artículo?
          </h3>
          <div className="flex items-center justify-center gap-6">
            <Button className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4" />
              Dejar comentario
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Share2 className="w-4 h-4" />
              Compartir
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
