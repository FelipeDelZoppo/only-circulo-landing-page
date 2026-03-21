import Image from "next/image"
import { Instagram, Twitter, Facebook, Youtube } from "lucide-react"

export function Footer() {
  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/onlycirculo_fc?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ]

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center gap-8">
          {/* Logo and name */}
          <div className="flex flex-col items-center gap-4">
            <div className="relative w-20 h-20 rounded-full overflow-hidden ring-2 ring-white/20">
              <Image
                src="/images/logo.jpeg"
                alt="Only Circulo FC"
                fill
                className="object-contain"
              />
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold">Only Circulo FC</h3>
              <p className="text-primary-foreground/70 text-sm">Navegando hacia la victoria</p>
            </div>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-primary-foreground/60 border-t border-white/10 pt-8 w-full">
            <p>© 2026 Only Circulo FC. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
