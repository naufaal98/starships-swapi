export interface StarshipItem {
  id: string;
  name: string;
  crew: string;
  model: string;
}

export interface AllStarships {
  allStarships: {
    starships: StarshipItem[];
  };
}
