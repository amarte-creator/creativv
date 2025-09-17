import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
// import { ChatWidget } from "@/components/chat-widget";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Creativv - Transformamos ideas en impacto digital",
  description: "Expertos en transformación digital. Automatizaciones con IA, desarrollo BI y desarrollo web para escalar tu negocio.",
  keywords: "transformación digital, automatización, IA, business intelligence, desarrollo web, n8n",
  authors: [{ name: "Creativv" }],
  creator: "Creativv",
  openGraph: {
    title: "Creativv - Transformamos ideas en impacto digital",
    description: "Expertos en transformación digital. Automatizaciones con IA, desarrollo BI y desarrollo web para escalar tu negocio.",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Creativv - Transformamos ideas en impacto digital",
    description: "Expertos en transformación digital. Automatizaciones con IA, desarrollo BI y desarrollo web para escalar tu negocio.",
  },
  icons: {
    icon: [
      {
        url: "/favicon-32x32.png?v=3",
        type: "image/png",
        sizes: "32x32",
      },
      {
        url: "/creativv-lg.png?v=3",
        type: "image/png",
        sizes: "192x192",
      },
    ],
    shortcut: "/favicon-32x32.png?v=3",
    apple: [
      {
        url: "/creativv-lg.png?v=3",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const timestamp = Date.now();
  return (
    <html lang="es">
      <head>
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
        <link rel="icon" href={`/favicon-32x32.png?v=${timestamp}`} />
        <link rel="icon" type="image/png" sizes="16x16" href={`/favicon-32x32.png?v=${timestamp}`} />
        <link rel="icon" type="image/png" sizes="32x32" href={`/favicon-32x32.png?v=${timestamp}`} />
        <link rel="icon" type="image/png" sizes="48x48" href={`/favicon-32x32.png?v=${timestamp}`} />
        <link rel="icon" type="image/png" sizes="192x192" href={`/creativv-lg.png?v=${timestamp}`} />
        <link rel="shortcut icon" href={`/favicon-32x32.png?v=${timestamp}`} />
        <link rel="apple-touch-icon" sizes="180x180" href={`/creativv-lg.png?v=${timestamp}`} />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        {/* <ChatWidget /> */}
      </body>
    </html>
  );
}
