import React from 'react';
import { Solution, Filters } from '../types';
import SolutionCard from './SolutionCard';

interface SolutionsGridProps {
  solutions: Solution[];
  filters: Filters;
}

const SolutionsGrid: React.FC<SolutionsGridProps> = ({ solutions, filters }) => {
  const filteredSolutions = solutions.filter(solution => {
    const spaceMatch = filters.space === 'all' || solution.spaces.includes(filters.space);
    const typeMatch = filters.type === 'all' || solution.type === filters.type;
    const tempMatch = filters.temperature === 'all' || solution.temperature === filters.temperature;
    
    return spaceMatch && typeMatch && tempMatch;
  });

  return (
    <div className="solutions-grid">
      {filteredSolutions.map(solution => (
        <SolutionCard key={solution.id} solution={solution} />
      ))}
    </div>
  );
};

export default SolutionsGrid;
