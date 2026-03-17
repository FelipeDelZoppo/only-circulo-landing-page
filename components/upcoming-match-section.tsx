import Image from "next/image"
import { Calendar, Clock, MapPin } from "lucide-react"
import { upcomingMatch } from "@/lib/data/nextMatch"

export function UpcomingMatchSection() {
  const matchDate = new Date(upcomingMatch.date)
  const formattedDate = matchDate.toLocaleDateString("es-ES", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground rounded-full px-4 py-2 text-sm font-medium mb-4">
            <Calendar className="w-4 h-4" />
            Próximo Partido
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            No Te Lo Pierdas
          </h2>
        </div>

        {/* Match card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-primary to-accent rounded-2xl overflow-hidden shadow-2xl">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24" />

            <div className="relative p-8 md:p-12">
              {/* Teams */}
              <div className="flex items-center justify-center gap-6 md:gap-12 mb-8">
                {/* Home team */}
                <div className="flex flex-col items-center gap-4">
                  <div className="relative w-24 h-24 md:w-32 md:h-32 bg-white rounded-full p-2 shadow-lg">
                    <Image
                      src="/images/logo.jpeg"
                      alt="Only Circulo FC"
                      fill
                      className="object-contain rounded-full"
                    />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-primary-foreground text-center">
                    Only Circulo FC
                  </h3>
                </div>

                {/* VS */}
                <div className="flex flex-col items-center">
                  <span className="text-4xl md:text-6xl font-black text-white/20">VS</span>
                </div>

                {/* Away team */}
                <div className="flex flex-col items-center gap-4">
                  <div className="relative w-24 h-24 md:w-32 md:h-32 bg-white rounded-full p-2 shadow-lg overflow-hidden">
                    <Image
                      src={upcomingMatch.opponentLogo}
                      alt={upcomingMatch.opponent}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-primary-foreground text-center">
                    {upcomingMatch.opponent}
                  </h3>
                </div>
              </div>

              {/* Match details */}
              <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-5 py-3 text-primary-foreground">
                  <Calendar className="w-5 h-5" />
                  <span className="font-medium capitalize">{formattedDate}</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-5 py-3 text-primary-foreground">
                  <Clock className="w-5 h-5" />
                  <span className="font-medium">{upcomingMatch.time} hrs</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-5 py-3 text-primary-foreground">
                  <MapPin className="w-5 h-5" />
                  <span className="font-medium">Cancha Almaroja</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
