import { Player } from "@/lib/data/types"
import { PlayerCard } from "./player-card"
import { CoachCard } from "./coach-card"
import { Users } from "lucide-react"
import { coach, players } from "@/lib/data/players"

export function SquadSection() {
  return (
    <section id="nosotros" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 text-sm font-medium mb-4">
            <Users className="w-4 h-4" />
            Nuestro Equipo
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Conoce a Nuestros Jugadores
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Un equipo comprometido con la excelencia, unidos por la pasión al fútbol 
            y la determinación de alcanzar la gloria.
          </p>
        </div>

        {/* Players grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {players.map((player: Player) => (
            <PlayerCard key={player.id} player={player} />
          ))}
        </div>

        {/* Coach card */}
        <div className="mt-12">
          <CoachCard coach={coach} />
        </div>
      </div>
    </section>
  )
}
