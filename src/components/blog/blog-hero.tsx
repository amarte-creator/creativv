'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, TrendingUp, Rocket, Lightbulb, Sparkles, BookOpen, Zap } from "lucide-react";
import { useState } from "react";

export function BlogHero() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality
    console.log("Searching for:", searchQuery);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 dark:from-slate-950 dark:via-indigo-950 dark:to-purple-950">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.04%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      {/* Animated background elements with enhanced visuals */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-gradient-to-l from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '0.5s'}}></div>
      </div>
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28">
        <div className="text-center">
          {/* Badge with enhanced styling */}
          <div className="mb-8 animate-fade-up">
            <span className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold bg-gradient-to-r from-purple-500/20 to-indigo-500/20 text-white backdrop-blur-sm border border-white/30 hover:border-white/50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
              <Sparkles className="w-4 h-4 mr-2 text-purple-300 animate-pulse" />
              Innovación y Transformación Digital
            </span>
          </div>
          
          {/* Enhanced Title with better gradient */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-8 leading-tight tracking-tight animate-fade-up animate-delay-150">
            <span className="block mb-2">Ideas que</span>
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent drop-shadow-2xl">
              Impulsan el Futuro
            </span>
            <span className="block text-3xl md:text-4xl lg:text-5xl mt-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              de tu Negocio
            </span>
          </h1>
          
          {/* Enhanced description */}
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-4xl mx-auto leading-relaxed font-light animate-fade-up animate-delay-300">
            Explora estrategias prácticas sobre <span className="font-semibold text-cyan-300">IA y automatización</span>, 
            <span className="font-semibold text-blue-300"> Business Intelligence</span> y 
            <span className="font-semibold text-purple-300"> desarrollo web</span> que transforman empresas
          </p>

          {/* Enhanced Search Bar */}
          <form onSubmit={handleSearch} className="max-w-3xl mx-auto mb-16 animate-fade-up animate-delay-500">
            <div className="relative group">
              <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6 group-focus-within:text-purple-500 transition-colors z-10" />
              <Input
                type="text"
                placeholder="¿Qué quieres aprender hoy? Automatización, IA, dashboards, n8n..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-14 pr-32 py-6 text-lg bg-white/98 backdrop-blur-md border-0 rounded-2xl shadow-2xl focus:ring-4 focus:ring-purple-500/50 focus:ring-offset-4 focus:ring-offset-purple-900 transition-all duration-300 hover:bg-white hover:shadow-[0_20px_60px_rgba(168,85,247,0.4)]"
              />
              <Button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-3 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 font-semibold"
              >
                Buscar
              </Button>
            </div>
          </form>

          {/* Enhanced Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto animate-fade-up animate-delay-700">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:-translate-y-2">
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                    <Rocket className="w-7 h-7 text-white" />
                  </div>
                  <p className="text-lg font-bold text-white mb-1">Casos Prácticos</p>
                  <p className="text-sm text-white/70">Implementaciones reales</p>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:-translate-y-2">
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                    <Lightbulb className="w-7 h-7 text-white" />
                  </div>
                  <p className="text-lg font-bold text-white mb-1">Ideas Innovadoras</p>
                  <p className="text-sm text-white/70">Tendencias actuales</p>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:-translate-y-2">
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                    <BookOpen className="w-7 h-7 text-white" />
                  </div>
                  <p className="text-lg font-bold text-white mb-1">Guías Completas</p>
                  <p className="text-sm text-white/70">Paso a paso detallado</p>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:-translate-y-2">
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                    <Zap className="w-7 h-7 text-white" />
                  </div>
                  <p className="text-lg font-bold text-white mb-1">ROI Demostrado</p>
                  <p className="text-sm text-white/70">Resultados medibles</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
