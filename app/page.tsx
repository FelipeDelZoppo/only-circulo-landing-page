import { HeroSection } from "@/components/hero-section"
import { SquadSection } from "@/components/squad-section"
import { UpcomingMatchSection } from "@/components/upcoming-match-section"
import { ResultsSection } from "@/components/results-section"
import { LegendsSection } from "@/components/legends-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <SquadSection />
      <UpcomingMatchSection />
      <ResultsSection />
      <LegendsSection />
      <Footer />
    </main>
  )
}
