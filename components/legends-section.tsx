"use client"

import Image from "next/image"
import { Trophy, Target, Handshake, Calendar } from "lucide-react"
import { legends } from "@/lib/data/legends"

export function LegendsSection() {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <Trophy className="w-6 h-6 text-primary-foreground/80" />
            <span className="text-primary-foreground/80 font-medium uppercase tracking-wider text-sm">
              Hall of Fame
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground text-balance">
            Leyendas Retiradas del Club
          </h2>
          <p className="text-primary-foreground/70 mt-3 max-w-2xl mx-auto text-pretty">
            Jugadores que dejaron su huella imborrable en la historia de Only Circulo FC
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {legends.map((legend) => (
            <div
              key={legend.id}
              className="group bg-primary-foreground/10 backdrop-blur-sm rounded-xl overflow-hidden border border-primary-foreground/20 hover:border-primary-foreground/40 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={legend.image}
                  alt={legend.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-primary-foreground font-bold text-lg leading-tight">
                    {legend.name}
                  </p>
                  <p className="text-primary-foreground/70 text-sm">
                    {legend.position}
                  </p>
                </div>
              </div>
              
              <div className="p-4 space-y-3">
                <div className="flex items-center gap-2 text-primary-foreground/60 text-xs">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{legend.years}</span>
                </div>
                
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-primary-foreground/5 rounded-lg p-2 text-center">
                    <div className="flex items-center justify-center gap-1 text-primary-foreground/60 mb-1">
                      <Trophy className="w-3 h-3" />
                    </div>
                    <p className="text-primary-foreground font-bold text-lg">
                      {legend.stats.matches}
                    </p>
                    <p className="text-primary-foreground/50 text-xs">Partidos</p>
                  </div>
                  
                  <div className="bg-primary-foreground/5 rounded-lg p-2 text-center">
                    <div className="flex items-center justify-center gap-1 text-primary-foreground/60 mb-1">
                      <Target className="w-3 h-3" />
                    </div>
                    <p className="text-primary-foreground font-bold text-lg">
                      {legend.stats.goals}
                    </p>
                    <p className="text-primary-foreground/50 text-xs">Goles</p>
                  </div>
                  
                  <div className="bg-primary-foreground/5 rounded-lg p-2 text-center">
                    <div className="flex items-center justify-center gap-1 text-primary-foreground/60 mb-1">
                      <Handshake className="w-3 h-3" />
                    </div>
                    <p className="text-primary-foreground font-bold text-lg">
                      {legend.stats.assists}
                    </p>
                    <p className="text-primary-foreground/50 text-xs">Asistencias</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
