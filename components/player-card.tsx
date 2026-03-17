"use client"

import Image from "next/image"
import type { Player } from "@/lib/data/types"
import { Goal, Handshake } from "lucide-react"

interface PlayerCardProps {
  player: Player
}

export function PlayerCard({ player }: PlayerCardProps) {
  return (
    <div className="group relative bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      {/* Player number badge */}
      <div className="absolute top-4 right-4 z-10 bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
        {player.number}
      </div>

      {/* Player image */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={player.image}
          alt={player.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
      </div>

      {/* Player info */}
      <div className="p-5 space-y-4">
        <div>
          <h3 className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors">
            {player.name}
          </h3>
          <p className="text-muted-foreground text-sm font-medium uppercase tracking-wide">
            {player.position}
          </p>
        </div>

        {/* Stats */}
        <div className="flex gap-4 pt-2 border-t border-border">
          <div className="flex items-center gap-2">
            <div className="bg-primary/10 p-2 rounded-lg">
              <Goal className="w-4 h-4 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-bold text-card-foreground">{player.stats.goals}</p>
              <p className="text-xs text-muted-foreground">Goles</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-accent/10 p-2 rounded-lg">
              <Handshake className="w-4 h-4 text-accent" />
            </div>
            <div>
              <p className="text-2xl font-bold text-card-foreground">{player.stats.assists}</p>
              <p className="text-xs text-muted-foreground">Asistencias</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
