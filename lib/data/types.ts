export interface Player {
  id: number
  name: string
  position: string
  number: number
  image: string
  stats: {
    goals: number
    assists: number
  }
}

export interface Match {
  id: number
  opponent: string
  opponentLogo: string
  date: string
  time?: string
  score?: {
    home: number
    away: number
  }
  scorers?: string[]
  isUpcoming?: boolean
}

export interface Legend {
  id: number
  name: string
  position: string
  image: string
  stats: {
    matches: number
    goals: number
    assists: number
  }
  years: string
}

export interface Coach {
  name: string;
  image: string;
  stats: {
    matchesManaged: number;
    victories: number;
  };
}

export interface GalleryImage {
  id: number
  src: string
  date: string
  description: string,
  objectPosition?: string
}