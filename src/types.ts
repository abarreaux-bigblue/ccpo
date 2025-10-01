export interface Solution {
  title: string;
  description: string;
  temperature: 'faible' | 'moyenne' | 'forte';
  tempValue: string;
  tempType: string;
  duration: string;
  cost: string;
  theme: ThemeType;
}

export interface Filters {
  theme: string;
  type: string;
  temperature: string;
}

export type ThemeType = 'all' | 'température' | 'eau' | 'extérieur' | 'alimentation' | 'énergie';
export type SolutionType = 'all' | 'verte' | 'bleue' | 'grise' | 'douce';
export type TemperatureType = 'all' | 'faible' | 'moyenne' | 'forte';
