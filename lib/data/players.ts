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
      "/images/facu-camiseta.jpeg",
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
      "/images/Rama-bandera.jpeg",
    stats: { goals: 0, assists: 1 },
  },
  {
    id: 5,
    name: "Ezequiel Sosa",
    position: "Mediocampista",
    number: 8,
    image:
      "/images/Eze.jpeg",
    stats: { goals: 0, assists: 1 },
  },
  {
    id: 6,
    name: "Juan Tleye",
    position: "Defensa",
    number: 5,
    image:
      "/images/Juan.jpeg",
    stats: { goals: 2, assists: 0 },
  },
  {
    id: 7,
    name: "Manuel Namuncura",
    position: "Mediocampista",
    number: 11,
    image:
      "/images/Manu.jpeg",
    stats: { goals: 0, assists: 0 },
  },
  {
    id: 8,
    name: "Tomas Volpato",
    position: "Delantero",
    number: 7,
    image:
      "/images/Volpa.jpeg",
    stats: { goals: 0, assists: 0 },
  },
  {
    id: 9,
    name: "Facundo Luisetti",
    position: "Defensa",
    number: 2,
    image:
      "/images/luigi.jpeg",
    stats: { goals: 0, assists: 0 },
  },
  {
    id: 10,
    name: "Santiago Pedri",
    position: "Defensa",
    number: 14,
    image:
      "https://vipdeportivo.es/wp-content/uploads/2025/01/fc-barcelona-v-atletico-de-madrid-la-liga-ea-sports-min-1-scaled.jpg",
    stats: { goals: 0, assists: 0 },
  },
];

export const coach: Coach = {
  name: "Felipe 'El ingeniero' Del Zoppo",
  image:
    "/images/felipe-traje.jpeg",
  stats: { matchesManaged: 3, victories: 2 },
};
