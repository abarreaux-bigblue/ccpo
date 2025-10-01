export interface Solution {
  title: string;
  description: string;
  impact: 'faible' | 'moyen' | 'important';
  tempValue: string;
  tempType: string;
  duration: string;
  cost: string;
  theme: ThemeType;
}

export interface Filters {
  theme: string;
  type: string;
  impact: string;
}

export type ThemeType = 'all' | 'température' | 'eau' | 'extérieur' | 'alimentation' | 'énergie';
export type SolutionType = 'all' | 'verte' | 'bleue' | 'grise' | 'douce';
export type ImpactType = 'all' | 'faible' | 'moyen' | 'important';
