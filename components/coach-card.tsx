"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ClipboardList, Trophy } from "lucide-react"
import type { Coach } from "@/lib/data/types"

interface CoachCardProps {
  coach: Coach
}

export function CoachCard({ coach }: CoachCardProps) {
  return (
    <Card className="overflow-hidden border-2 border-primary/20 bg-card shadow-lg">
      <CardContent className="p-0">
        <div className="flex flex-col md:flex-row items-center gap-6 p-6">
          {/* Coach image */}
          <div className="relative w-32 h-32 md:w-40 md:h-40 shrink-0">
            <div className="absolute inset-0 rounded-full bg-primary/10" />
            <Image
              src={coach.image}
              alt={coach.name}
              fill
              className="object-cover rounded-full ring-4 ring-primary/30"
            />
          </div>

          {/* Coach info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left flex-1">
            <Badge variant="secondary" className="mb-2 bg-primary/10 text-primary border-0">
              Director Técnico
            </Badge>
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
              {coach.name}
            </h3>

            {/* Stats */}
            <div className="flex gap-6">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <ClipboardList className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{coach.stats.matchesManaged}</p>
                  <p className="text-xs text-muted-foreground">Partidos</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Trophy className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{coach.stats.victories}</p>
                  <p className="text-xs text-muted-foreground">Victorias</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
