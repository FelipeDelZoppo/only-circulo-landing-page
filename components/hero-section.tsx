"use client"

import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { teamStats } from "@/lib/data/teamStats"

export function HeroSection() {
  const scrollToSection = () => {
    document.getElementById("nosotros")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-accent" />
      
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <div className="relative w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 animate-in fade-in zoom-in duration-700">
            <Image
              src="/images/logo.jpeg"
              alt="Only Circulo FC Logo"
              fill
              className="object-contain rounded-full shadow-2xl ring-4 ring-white/20"
              priority
              loading="eager"
            />
          </div>

          {/* Team name */}
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground tracking-tight text-balance">
              Only Circulo FC
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/80 font-medium">
              Navegando hacia la victoria desde 2024
            </p>
          </div>

          {/* Stats badges */}
          <div className="flex flex-col items-center gap-4 mt-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 text-primary-foreground">
                <span className="font-bold">{teamStats.matchesPlayed}</span> Partidos Jugados
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 text-primary-foreground">
                <span className="font-bold">{teamStats.wins}</span> Victorias
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 text-primary-foreground">
                <span className="font-bold">{teamStats.losses}</span> Derrotas
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 text-primary-foreground">
                <span className="font-bold">{teamStats.goalsScored}</span> Goles
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 text-primary-foreground">
                <span className="font-bold">{teamStats.position}</span> Posición
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Scroll indicator */}
      <button 
        onClick={scrollToSection}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-primary-foreground/70 hover:text-primary-foreground transition-colors animate-bounce cursor-pointer"
        aria-label="Scroll to content"
      >
        <ChevronDown className="w-10 h-10" />
      </button>
    </section>
  )
}
