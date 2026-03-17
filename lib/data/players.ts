import { Coach, Player } from "./types";

export const players: Player[] = [
  {
    id: 1,
    name: "Lucas Cordero",
    position: "Delantero",
    number: 9,
    image:
      "/images/Lucas.jpeg",
    stats: { goals: 6, assists: 0 },
  },
  {
    id: 2,
    name: "Facundo Secondino",
    position: "Mediocampista",
    number: 10,
    image:
      "/images/Facu.jpeg",
    stats: { goals: 0, assists: 0 },
  },
  {
    id: 3,
    name: "Nacho Luisetti",
    position: "Defensa",
    number: 6,
    image:
      "/images/Nacho.jpeg",
    stats: { goals: 0, assists: 0 },
  },
  {
    id: 4,
    name: "Ramiro Quintero",
    position: "Arquero",
    number: 1,
    image:
      "/images/Rama.jpeg",
    stats: { goals: 0, assists: 1 },
  },
  {
    id: 5,
    name: "Ezequiel Sosa",
    position: "Mediocampista",
    number: 8,
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
    stats: { goals: 0, assists: 1 },
  },
  {
    id: 6,
    name: "Juan Tleye",
    position: "Defensa",
    number: 5,
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face",
    stats: { goals: 2, assists: 0 },
  },
  {
    id: 7,
    name: "Manuel Namuncura",
    position: "Mediocampista",
    number: 11,
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
    stats: { goals: 0, assists: 0 },
  },
  {
    id: 8,
    name: "Tomas Volpato",
    position: "Delantero",
    number: 7,
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
    stats: { goals: 0, assists: 0 },
  },
  {
    id: 9,
    name: "Facundo Luisetti",
    position: "Defensa",
    number: 2,
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
    stats: { goals: 0, assists: 0 },
  },
  {
    id: 10,
    name: "Santiago Pedri",
    position: "Defensa",
    number: 14,
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
    stats: { goals: 0, assists: 0 },
  },
];

export const coach: Coach = {
  name: "Felipe 'El ingeniero' Del Zoppo",
  image:
    "/images/felipe-traje.jpeg",
  stats: { matchesManaged: 3, victories: 2 },
};
