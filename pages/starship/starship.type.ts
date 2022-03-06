export interface Startship {
  name: string;
  model: string;
  id: string;
  starshipClass: string;
  crew: string;
  passengers: string;
  manufacturers: string;
  cargoCapacity: string;
}

export interface StarshipPageProps {
  starship: Startship;
}
