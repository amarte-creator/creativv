import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: [
      {
        url: "/creativv-lg.png",
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
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
