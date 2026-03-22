"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Camera, Calendar } from "lucide-react"
import { galleryImages } from "@/lib/data/galleryImages"

export function PicturesSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const images = [...galleryImages].reverse()

  const goToPrevious = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? images.length - 1 : prev - 1
    )
  }

  const goToNext = () => {
    setCurrentIndex((prev) => 
      prev === images.length - 1 ? 0 : prev + 1
    )
  }

  const currentImage = images[currentIndex]

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("es-ES", {
      day: "numeric",
      month: "long",
      year: "numeric"
    })
  }

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 text-sm font-medium mb-4">
            <Camera className="w-4 h-4" />
            Galería
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Momentos Memorables
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Revive los mejores momentos de Only Circulo FC a través de nuestra galería fotográfica.
          </p>
        </div>

        {/* Gallery carousel */}
        <div className="relative max-w-4xl mx-auto">
          <Card className="overflow-hidden border-0 shadow-xl">
            <CardContent className="p-0">
              {/* Image container */}
              <div className="relative aspect-video">
                <Image
                  src={currentImage.src}
                  alt={currentImage.description}
                  fill
                  className={`object-cover ${currentImage.objectPosition ?? "object-center"} transition-opacity duration-300`}
                />
                
                {/* Navigation arrows */}
                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-background/80 hover:bg-background shadow-lg"
                  onClick={goToPrevious}
                  aria-label="Imagen anterior"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                
                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-background/80 hover:bg-background shadow-lg"
                  onClick={goToNext}
                  aria-label="Siguiente imagen"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>

                {/* Image counter */}
                <div className="absolute bottom-4 right-4 bg-foreground/80 text-background px-3 py-1 rounded-full text-sm font-medium">
                  {currentIndex + 1} / {images.length}
                </div>
              </div>

              {/* Image info */}
              <div className="p-6 bg-card">
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(currentImage.date)}</span>
                </div>
                <p className="text-foreground font-medium text-lg">
                  {currentImage.description}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Thumbnail indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? "bg-primary w-8" 
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Ir a imagen ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
