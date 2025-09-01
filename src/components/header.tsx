'use client'

import * as React from 'react'
import { Button } from "@/components/ui/button"
import { Moon, Sun, Menu } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

interface HeaderProps {
  darkMode: boolean
  onToggleDarkMode: () => void
  scrollToSection?: (sectionId: string) => void
}

export function Header({ darkMode, onToggleDarkMode, scrollToSection }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <Image 
              src="/creativv-lg.png" 
              alt="Creativv" 
              width={40} 
              height={40}
              className="rounded-lg"
            />
            <span className="text-xl font-bold gradient-text">Creativv</span>
          </Link>
          <nav className="hidden md:flex space-x-6">
            {scrollToSection ? (
              <>
                <Button variant="ghost" onClick={() => scrollToSection('servicios')} className="normal-case">
                  servicios
                </Button>
                <Link href="/blog">
                  <Button variant="ghost" className="normal-case">
                    blog
                  </Button>
                </Link>
                <Button variant="ghost" onClick={() => scrollToSection('contacto')} className="normal-case">
                  contacto
                </Button>
              </>
            ) : (
              <>
                <Button variant="ghost" asChild className="normal-case">
                  <Link href="/#servicios">servicios</Link>
                </Button>
                <Link href="/blog">
                  <Button variant="ghost" className="normal-case">
                    blog
                  </Button>
                </Link>
                <Button variant="ghost" asChild className="normal-case">
                  <Link href="/#contacto">contacto</Link>
                </Button>
              </>
            )}
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={onToggleDarkMode}
          >
            {darkMode ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px]">
              <nav className="flex flex-col space-y-4 mt-8">
                {scrollToSection ? (
                  <>
                    <Button variant="ghost" onClick={() => scrollToSection('servicios')} className="normal-case">
                      servicios
                    </Button>
                    <Link href="/blog">
                      <Button variant="ghost" className="normal-case">
                        blog
                      </Button>
                    </Link>
                    <Button variant="ghost" onClick={() => scrollToSection('contacto')} className="normal-case">
                      contacto
                    </Button>
                  </>
                ) : (
                  <>
                    <Button variant="ghost" asChild className="normal-case">
                      <Link href="/#servicios">servicios</Link>
                    </Button>
                    <Link href="/blog">
                      <Button variant="ghost" className="normal-case">
                        blog
                      </Button>
                    </Link>
                    <Button variant="ghost" asChild className="normal-case">
                      <Link href="/#contacto">contacto</Link>
                    </Button>
                  </>
                )}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
