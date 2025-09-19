"use client"

import Link from 'next/link'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between gap-6 py-10 md:h-24 md:flex-row md:gap-4 md:py-0">
        <div className="flex items-center space-x-2">
          <Image 
            src="/creativv-lg.png" 
            alt="Creativv" 
            width={32} 
            height={32}
            className="rounded-lg"
          />
          <span className="text-lg font-bold gradient-text">Creativv</span>
        </div>
        <div className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          © 2025 Creativv. Todos los derechos reservados.
        </div>
        <div className="flex flex-col items-center gap-3 md:flex-row md:gap-6">
          <div className="flex gap-6">
            <Link href="/terminos" className="text-sm font-medium hover:underline underline-offset-4">Términos</Link>
            <Link href="/privacidad" className="text-sm font-medium hover:underline underline-offset-4">Privacidad</Link>
          </div>
          <a href="mailto:contacto@servicioscreativos.online" className="text-sm font-medium hover:underline underline-offset-4 text-center break-all md:break-normal">
            contacto@servicioscreativos.online
          </a>
        </div>
      </div>
    </footer>
  )
}


