'use client'

import * as React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calculator, TrendingUp, Clock, DollarSign, Users, Download, ChevronRight } from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export default function CalculadoraROIPage() {
  const [darkMode, setDarkMode] = React.useState(false)
  const [mounted, setMounted] = React.useState(false)

  // Calculator inputs
  const [employeeCount, setEmployeeCount] = React.useState(10)
  const [hoursPerWeek, setHoursPerWeek] = React.useState(5)
  const [avgSalary, setAvgSalary] = React.useState(25000)
  const [processCount, setProcessCount] = React.useState(3)

  React.useEffect(() => {
    setMounted(true)
    const savedMode = localStorage.getItem('darkMode')
    if (savedMode !== null) {
      setDarkMode(savedMode === 'true')
    }
  }, [])

  React.useEffect(() => {
    if (mounted) {
      if (darkMode) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
  }, [darkMode, mounted])

  const handleToggleDarkMode = () => {
    const newMode = !darkMode
    setDarkMode(newMode)
    localStorage.setItem('darkMode', newMode.toString())
  }

  // Calculations
  const monthlyHoursSaved = employeeCount * hoursPerWeek * 4
  const hourlyRate = avgSalary / 160 // Assuming 160 working hours per month
  const monthlySavings = monthlyHoursSaved * hourlyRate
  const yearlySavings = monthlySavings * 12

  // Automation cost estimate (conservative)
  const automationCost = processCount * 15000 // $15k per process
  const monthsToROI = automationCost / monthlySavings
  const yearOneROI = ((yearlySavings - automationCost) / automationCost) * 100

  return (
    <div className={`min-h-screen flex flex-col w-full ${mounted && darkMode ? 'dark' : ''}`}>
      <Header 
        darkMode={darkMode} 
        onToggleDarkMode={handleToggleDarkMode}
      />

      <main className="flex-grow w-full">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden w-full">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-transparent"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calculator className="h-10 w-10 text-primary" />
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl animate-fade-up">
                Calculadora de <span className="gradient-text">ROI</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground text-lg animate-fade-up animate-delay-150">
                Descubre cuánto tiempo y dinero puedes ahorrar automatizando tus procesos empresariales
              </p>
            </div>
          </div>
        </section>

        {/* Calculator */}
        <section className="py-20 w-full">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Input Section */}
              <div className="space-y-8">
                <div className="glass rounded-xl p-8">
                  <h2 className="text-2xl font-bold mb-6">Datos de tu Empresa</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Número de empleados afectados
                      </label>
                      <Input 
                        type="number" 
                        value={employeeCount}
                        onChange={(e) => setEmployeeCount(Number(e.target.value))}
                        min="1"
                        className="text-lg"
                      />
                      <p className="text-xs text-muted-foreground mt-1">
                        ¿Cuántas personas realizan tareas repetitivas?
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Horas semanales en tareas manuales (por persona)
                      </label>
                      <Input 
                        type="number" 
                        value={hoursPerWeek}
                        onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                        min="1"
                        className="text-lg"
                      />
                      <p className="text-xs text-muted-foreground mt-1">
                        Tiempo promedio en tareas automatizables
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Salario promedio mensual (MXN)
                      </label>
                      <Input 
                        type="number" 
                        value={avgSalary}
                        onChange={(e) => setAvgSalary(Number(e.target.value))}
                        min="1000"
                        step="1000"
                        className="text-lg"
                      />
                      <p className="text-xs text-muted-foreground mt-1">
                        Salario promedio de los empleados afectados
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Procesos a automatizar
                      </label>
                      <Input 
                        type="number" 
                        value={processCount}
                        onChange={(e) => setProcessCount(Number(e.target.value))}
                        min="1"
                        max="10"
                        className="text-lg"
                      />
                      <p className="text-xs text-muted-foreground mt-1">
                        Número de flujos de trabajo distintos
                      </p>
                    </div>
                  </div>
                </div>

                <div className="glass rounded-xl p-6 bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
                  <p className="text-sm font-medium mb-2">💡 Tip Profesional</p>
                  <p className="text-sm text-muted-foreground">
                    La mayoría de nuestros clientes subestiman las horas dedicadas a tareas manuales. 
                    Haz un seguimiento durante una semana para obtener cifras precisas.
                  </p>
                </div>
              </div>

              {/* Results Section */}
              <div className="space-y-6">
                <div className="glass rounded-xl p-8">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <TrendingUp className="h-6 w-6 text-primary" />
                    Tus Resultados
                  </h2>

                  <div className="space-y-6">
                    {/* Monthly Savings */}
                    <div className="border-l-4 border-primary pl-4">
                      <div className="flex items-center gap-2 mb-2">
                        <DollarSign className="h-5 w-5 text-primary" />
                        <p className="text-sm font-medium text-muted-foreground">Ahorro Mensual</p>
                      </div>
                      <p className="text-4xl font-bold text-primary">
                        ${monthlySavings.toLocaleString('es-MX', { maximumFractionDigits: 0 })}
                      </p>
                    </div>

                    {/* Yearly Savings */}
                    <div className="border-l-4 border-secondary pl-4">
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp className="h-5 w-5 text-secondary" />
                        <p className="text-sm font-medium text-muted-foreground">Ahorro Anual</p>
                      </div>
                      <p className="text-4xl font-bold text-secondary">
                        ${yearlySavings.toLocaleString('es-MX', { maximumFractionDigits: 0 })}
                      </p>
                    </div>

                    {/* Time Saved */}
                    <div className="border-l-4 border-green-500 pl-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="h-5 w-5 text-green-500" />
                        <p className="text-sm font-medium text-muted-foreground">Horas Ahorradas/Mes</p>
                      </div>
                      <p className="text-4xl font-bold text-green-500">
                        {monthlyHoursSaved.toLocaleString('es-MX')} hrs
                      </p>
                    </div>

                    {/* Investment */}
                    <div className="bg-muted/50 rounded-lg p-4">
                      <p className="text-sm font-medium mb-2">Inversión Estimada</p>
                      <p className="text-2xl font-bold mb-1">
                        ${automationCost.toLocaleString('es-MX')}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Incluye desarrollo, integración y capacitación
                      </p>
                    </div>

                    {/* ROI Metrics */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-background/50 backdrop-blur rounded-lg p-4 border border-border/40">
                        <p className="text-xs text-muted-foreground mb-1">Tiempo a ROI</p>
                        <p className="text-2xl font-bold text-primary">
                          {monthsToROI.toFixed(1)} meses
                        </p>
                      </div>
                      <div className="bg-background/50 backdrop-blur rounded-lg p-4 border border-border/40">
                        <p className="text-xs text-muted-foreground mb-1">ROI Año 1</p>
                        <p className="text-2xl font-bold text-green-500">
                          {yearOneROI > 0 ? '+' : ''}{yearOneROI.toFixed(0)}%
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="glass rounded-xl p-6 text-center bg-gradient-to-br from-primary/5 to-secondary/5">
                  <p className="font-semibold mb-2">¿Impresionado con los números?</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    Agenda una consulta gratuita y te mostraremos cómo lograr estos resultados
                  </p>
                  <Button 
                    className="w-full btn-primary"
                    onClick={() => window.open(process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/avilamolinaadrian/30min', '_blank')}
                  >
                    Agendar Consulta Gratuita <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>

                <Button variant="outline" className="w-full">
                  <Download className="mr-2 h-4 w-4" />
                  Descargar Reporte en PDF
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* What's Next */}
        <section className="py-20 bg-muted/30 w-full">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              ¿Qué sigue después de calcular tu ROI?
            </h2>

            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Auditoría Gratuita",
                  description: "Analizamos tus procesos específicos y validamos las estimaciones del calculador"
                },
                {
                  step: "2",
                  title: "Propuesta Personalizada",
                  description: "Diseñamos un plan de automatización adaptado a tu presupuesto y prioridades"
                },
                {
                  step: "3",
                  title: "Implementación Rápida",
                  description: "Empiezas a ver resultados en semanas, no meses. ROI desde la primera entrega"
                }
              ].map((phase) => (
                <div key={phase.step} className="glass rounded-xl p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-primary text-lg">
                    {phase.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{phase.title}</h3>
                    <p className="text-muted-foreground">{phase.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button 
                size="lg" 
                className="btn-primary text-lg px-8 py-6"
                onClick={() => window.open(process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/avilamolinaadrian/30min', '_blank')}
              >
                Comenzar mi Transformación Digital
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
