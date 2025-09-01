import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: 'https://openrouter.ai/api/v1',
})

const SYSTEM_PROMPT = `Eres un asistente experto de Creativv, una agencia de transformación digital especializada en:

1. **Automatizaciones con IA y n8n**: Automatización de procesos complejos con inteligencia artificial
2. **Desarrollo BI (Business Intelligence)**: Dashboards interactivos y análisis predictivo
3. **Desarrollo Web**: Sitios web modernos y aplicaciones escalables

Tu objetivo es:
- Entender las necesidades específicas del cliente
- Proporcionar soluciones personalizadas
- Guiar al cliente hacia la agenda de una consulta gratuita en Calendly
- Ser profesional, empático y orientado a resultados

IMPORTANTE:
- Siempre pregunta por detalles específicos del negocio del cliente
- Sugiere soluciones concretas basadas en los servicios de Creativv
- Al final de cada conversación, invita a agendar una consulta gratuita
- Mantén un tono profesional pero cercano
- Enfócate en generar valor y confianza

Ejemplo de respuesta final:
"Basado en lo que me has contado, creo que podríamos ayudarte con [solución específica]. Te invito a agendar una consulta gratuita de 30 minutos donde podremos profundizar en tu proyecto y diseñar una solución personalizada. ¿Te parece bien?"

Responde en español y mantén las respuestas concisas pero informativas.`

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json()

    if (!process.env.OPENROUTER_API_KEY) {
      return NextResponse.json(
        { error: 'OpenRouter API key not configured' },
        { status: 500 }
      )
    }

    const completion = await openai.chat.completions.create({
      model: 'deepseek/deepseek-chat-v3.1:free',
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        ...messages
      ],
      max_tokens: 500,
      temperature: 0.7,
    })

    const response = completion.choices[0]?.message?.content || 'Lo siento, no pude procesar tu mensaje. ¿Podrías intentarlo de nuevo?'

    return NextResponse.json({ response })
  } catch (error) {
    console.error('Chat API error:', error)
    return NextResponse.json(
      { error: 'Error processing chat message' },
      { status: 500 }
    )
  }
}
