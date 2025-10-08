'use client'

import * as React from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Download, Mail, CheckCircle, Loader2 } from 'lucide-react'

interface DownloadModalProps {
  isOpen: boolean
  onClose: () => void
  resourceTitle: string
  resourceType: string
  resourceFile: string
}

export function DownloadModal({ isOpen, onClose, resourceTitle, resourceType, resourceFile }: DownloadModalProps) {
  const [email, setEmail] = React.useState('')
  const [name, setName] = React.useState('')
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [isSuccess, setIsSuccess] = React.useState(false)
  const [error, setError] = React.useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsSubmitting(true)

    try {
      // Send email to API
      const response = await fetch('/api/download', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          name,
          resourceTitle,
          resourceType,
          resourceFile
        }),
      })

      if (!response.ok) {
        throw new Error('Error al procesar la descarga')
      }

      setIsSuccess(true)

      // Trigger download
      setTimeout(() => {
        const link = document.createElement('a')
        link.href = `/api/download/${resourceFile}`
        link.download = resourceFile
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)

        // Close modal after short delay
        setTimeout(() => {
          onClose()
          setIsSuccess(false)
          setEmail('')
          setName('')
        }, 2000)
      }, 500)

    } catch (err) {
      setError('Hubo un error al procesar tu descarga. Por favor intenta de nuevo.')
      console.error('Download error:', err)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        {!isSuccess ? (
          <>
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <Download className="h-5 w-5 text-primary" />
                Descargar: {resourceTitle}
              </DialogTitle>
              <DialogDescription>
                Ingresa tu email para recibir este {resourceType} y recursos exclusivos adicionales.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nombre *
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Tu nombre"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email *
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="tu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isSubmitting}
                />
              </div>

              {error && (
                <div className="text-sm text-red-500 bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
                  {error}
                </div>
              )}

              <div className="bg-primary/10 rounded-lg p-3">
                <p className="text-xs text-muted-foreground flex items-start gap-2">
                  <Mail className="h-4 w-4 flex-shrink-0 mt-0.5" />
                  <span>
                    También recibirás tips semanales de automatización y recursos gratuitos. 
                    Sin spam, cancela cuando quieras.
                  </span>
                </p>
              </div>

              <div className="flex gap-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={onClose}
                  className="flex-1"
                  disabled={isSubmitting}
                >
                  Cancelar
                </Button>
                <Button
                  type="submit"
                  className="flex-1 btn-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Procesando...
                    </>
                  ) : (
                    <>
                      <Download className="mr-2 h-4 w-4" />
                      Descargar
                    </>
                  )}
                </Button>
              </div>
            </form>
          </>
        ) : (
          <div className="text-center py-8">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">¡Descarga Iniciada!</h3>
            <p className="text-muted-foreground">
              Revisa tu email para más recursos exclusivos
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}

