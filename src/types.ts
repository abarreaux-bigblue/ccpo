export interface Solution {
  title: string;
  type: 'verte' | 'bleue' | 'grise' | 'douce';
  description: string;
  temperature: 'faible' | 'moyenne' | 'forte';
  tempValue: string;
  tempType: string;
  duration: string;
  cost: string;
  theme: 'alimentation' | 'eau' | 'habitat';
}

export interface Filters {
  theme: string;
  type: string;
  temperature: string;
}

export type ThemeType = 'all' | 'alimentation' | 'eau' | 'habitat';
export type SolutionType = 'all' | 'verte' | 'bleue' | 'grise' | 'douce';
export type TemperatureType = 'all' | 'faible' | 'moyenne' | 'forte';
