import React from 'react';
import { Solution, Filters } from '../types';
import SolutionCard from './SolutionCard';

interface SolutionsGridProps {
  solutions: Solution[];
  filters: Filters;
}

const SolutionsGrid: React.FC<SolutionsGridProps> = ({ solutions, filters }) => {
  const filteredSolutions = solutions.filter(solution => {
    const themeMatch = filters.theme === 'all' || solution.theme === filters.theme;
    const tempMatch = filters.temperature === 'all' || solution.temperature === filters.temperature;
    
    return themeMatch && tempMatch;
  });

  return (
    <div className="solutions-grid">
      {filteredSolutions.map((solution: Solution, index: number) => (
        <SolutionCard key={index} solution={solution} />
      ))}
    </div>
  );
};

export default SolutionsGrid;
