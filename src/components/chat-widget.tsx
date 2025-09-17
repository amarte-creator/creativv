'use client'

import * as React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { MessageCircle, X, Send } from 'lucide-react'

interface ChatMessage {
  text: string
  isBot: boolean
}

export function ChatWidget() {
  const [isChatOpen, setIsChatOpen] = React.useState(false)
  const [messages, setMessages] = React.useState<ChatMessage[]>([
    { text: "¡Hola! Soy tu asistente Creativv. ¿En qué puedo ayudarte a transformar tu negocio hoy?", isBot: true }
  ])
  const [inputMessage, setInputMessage] = React.useState('')
  const [isLoading, setIsLoading] = React.useState(false)

  const toggleChat = () => setIsChatOpen(!isChatOpen)

  const sendMessage = async () => {
    if (inputMessage.trim() === '' || isLoading) return

    const userMessage = inputMessage
    setInputMessage('')
    setIsLoading(true)

    setMessages(prev => [...prev, { text: userMessage, isBot: false }])

    try {
      const apiMessages = messages
        .filter(msg => !msg.isBot || msg.text !== "¡Hola! Soy tu asistente Creativv. ¿En qué puedo ayudarte a transformar tu negocio hoy?")
        .map(msg => ({
          role: msg.isBot ? 'assistant' as const : 'user' as const,
          content: msg.text
        }))

      apiMessages.push({ role: 'user' as const, content: userMessage })

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: apiMessages })
      })

      if (!response.ok) {
        throw new Error('Failed to get response')
      }

      const data = await response.json()
      setMessages(prev => [...prev, { text: data.response, isBot: true }])
    } catch (error) {
      console.error('Chat error:', error)
      setMessages(prev => [...prev, { 
        text: 'Lo siento, tuve un problema procesando tu mensaje. ¿Podrías intentarlo de nuevo o contactarnos directamente?', 
        isBot: true 
      }])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={`fixed bottom-4 right-4 z-50 ${isChatOpen ? 'w-80' : 'w-auto'} transition-all duration-300`}>
      {isChatOpen ? (
        <div className="glass rounded-xl shadow-2xl overflow-hidden animate-fade-up">
          <div className="bg-primary text-primary-foreground p-4 flex justify-between items-center">
            <h3 className="font-semibold">Asistente Creativv</h3>
            <Button variant="ghost" size="icon" onClick={toggleChat}>
              <X className="h-5 w-5" />
            </Button>
          </div>
          <div className="h-80 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                <div className={`rounded-lg p-3 max-w-[80%] ${msg.isBot ? 'bg-muted' : 'bg-primary text-primary-foreground'} animate-fade-in`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 border-t border-border/40">
            <div className="flex space-x-2 mb-3">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Escribe tu mensaje..."
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                className="flex-1"
                disabled={isLoading}
              />
              <Button onClick={sendMessage} size="icon" disabled={isLoading}>
                {isLoading ? (
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                ) : (
                  <Send className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <Button onClick={toggleChat} size="icon" className="rounded-full w-14 h-14 btn-primary animate-bounce">
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}
    </div>
  )
}

export default ChatWidget


