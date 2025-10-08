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
  metadataBase: new URL('https://servicioscreativos.online'),
  title: {
    default: "Automatización con IA y n8n | Business Intelligence | Creativv México",
    template: "%s | Creativv"
  },
  description: "Especialistas en automatización empresarial con IA y n8n, dashboards de Business Intelligence y desarrollo web. Reducimos tareas repetitivas hasta 80% y mejoramos tus decisiones de negocio. Consultoría gratuita.",
  keywords: [
    "automatización con n8n",
    "automatización IA empresas",
    "business intelligence dashboards",
    "flujos de trabajo automatizados",
    "dashboards interactivos México",
    "automatizar procesos empresariales",
    "consultoría automatización",
    "n8n México",
    "workflows inteligentes",
    "inteligencia artificial negocios",
    "análisis de datos empresarial",
    "desarrollo web automatizado",
    "integración APIs empresas"
  ],
  authors: [{ name: "Creativv" }],
  creator: "Creativv",
  publisher: "Creativv",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://servicioscreativos.online',
  },
  openGraph: {
    title: "Automatización con IA y n8n | Business Intelligence | Creativv",
    description: "Automatiza tu negocio con IA y n8n. Dashboards inteligentes de BI. Reducimos tareas repetitivas hasta 80%. Consultoría gratuita en México.",
    type: "website",
    locale: "es_MX",
    url: "https://servicioscreativos.online",
    siteName: "Creativv",
    images: [
      {
        url: "/creativv-lg.png",
        width: 1200,
        height: 630,
        alt: "Creativv - Automatización con IA y Business Intelligence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Automatización con IA y n8n | Business Intelligence | Creativv",
    description: "Automatiza tu negocio con IA y n8n. Dashboards inteligentes de BI. Reducimos tareas repetitivas hasta 80%.",
    images: ["/creativv-lg.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-9XW18QES1F"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-9XW18QES1F');
            `,
          }}
        />
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
