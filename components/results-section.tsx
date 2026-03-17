import Image from "next/image"
import { Trophy, Calendar, Goal } from "lucide-react"
import { previousMatches } from "@/lib/data/matches"
import { Match } from "@/lib/data/types"

export function ResultsSection() {
  const getResultClass = (home: number, away: number) => {
    if (home > away) return "bg-green-500"
    if (home < away) return "bg-red-500"
    return "bg-yellow-500"
  }

  const getResultText = (home: number, away: number) => {
    if (home > away) return "Victoria"
    if (home < away) return "Derrota"
    return "Empate"
  }

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 text-sm font-medium mb-4">
            <Trophy className="w-4 h-4" />
            Historial
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Resultados Previos
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Revive los momentos más emocionantes de nuestra temporada.
          </p>
        </div>

        {/* Results grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {previousMatches.map((match: Match) => {
            const matchDate = new Date(match.date)
            const formattedDate = matchDate.toLocaleDateString("es-ES", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })

            return (
              <div
                key={match.id}
                className="group bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {/* Result badge */}
                <div className={`${getResultClass(match.score!.home, match.score!.away)} px-4 py-2`}>
                  <p className="text-white text-sm font-semibold text-center">
                    {getResultText(match.score!.home, match.score!.away)}
                  </p>
                </div>

                <div className="p-6">
                  {/* Teams and score */}
                  <div className="flex items-center justify-between gap-4 mb-4">
                    {/* Home team */}
                    <div className="flex items-center gap-3 flex-1">
                      <div className="relative w-12 h-12 flex-shrink-0">
                        <Image
                          src="/images/logo.jpeg"
                          alt="Only Circulo FC"
                          fill
                          className="object-contain rounded-full"
                        />
                      </div>
                      <span className="font-semibold text-card-foreground text-sm">Only Circulo</span>
                    </div>

                    {/* Score */}
                    <div className="flex items-center gap-2 bg-muted rounded-lg px-4 py-2">
                      <span className="text-2xl font-bold text-card-foreground">
                        {match.score!.home}
                      </span>
                      <span className="text-muted-foreground">-</span>
                      <span className="text-2xl font-bold text-card-foreground">
                        {match.score!.away}
                      </span>
                    </div>

                    {/* Away team */}
                    <div className="flex items-center gap-3 flex-1 justify-end">
                      <span className="font-semibold text-card-foreground text-sm text-right">
                        {match.opponent}
                      </span>
                      <div className="relative w-12 h-12 flex-shrink-0 rounded-full overflow-hidden">
                        <Image
                          src={match.opponentLogo}
                          alt={match.opponent}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Match info */}
                  <div className="flex items-center justify-between text-sm border-t border-border pt-4">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{formattedDate}</span>
                    </div>
                    
                    {match.scorers && match.scorers.length > 0 && (
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Goal className="w-4 h-4 text-primary" />
                        <span className="text-xs">{match.scorers.join(", ")}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
