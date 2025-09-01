import { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogPost } from "@/components/blog/blog-post";
import { RelatedPosts } from "@/components/blog/related-posts";
import { BlogLayout } from "@/components/blog-layout";
import { blogPosts } from "@/lib/blog-data";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = blogPosts.find(p => p.slug === params.slug);
  
  if (!post) {
    return {
      title: "Artículo no encontrado - Creativv",
      description: "El artículo que buscas no existe.",
    };
  }

  return {
    title: `${post.title} - Blog Creativv`,
    description: post.excerpt,
    keywords: post.tags.join(", "),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishDate,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find(p => p.slug === params.slug);
  
  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  return (
    <BlogLayout>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <BlogPost post={post} />
        <RelatedPosts posts={relatedPosts} />
      </div>
    </BlogLayout>
  );
}
