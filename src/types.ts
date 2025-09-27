export interface Solution {
  id: number;
  title: string;
  type: 'verte' | 'bleue' | 'grise' | 'douce';
  description: string;
  temperature: 'faible' | 'moyenne' | 'forte';
  tempValue: string;
  tempType: string;
  duration: string;
  cost: string;
  spaces: string[];
}

export interface Filters {
  space: string;
  type: string;
  temperature: string;
}

export type SpaceType = 'all' | 'rond-point' | 'batiment' | 'parking' | 'rue' | 'place' | 'cour-ecole' | 'espaces-verts';
export type SolutionType = 'all' | 'verte' | 'bleue' | 'grise' | 'douce';
export type TemperatureType = 'all' | 'faible' | 'moyenne' | 'forte';
