import React from 'react';
import { Solution } from '../types';

interface SolutionCardProps {
  solution: Solution;
}

const SolutionCard: React.FC<SolutionCardProps> = ({ solution }) => {
  return (
    <div className="solution-card" data-type={solution.type}>
      <div className="solution-header">
        <span className={`solution-type ${solution.type}`}>
          Solution {solution.type}
        </span>
        <h3 className="solution-title">{solution.title}</h3>
      </div>
      <p className="solution-description">{solution.description}</p>
      <div className="solution-stats">
        <div className="stat">
          <span className="stat-label">
            Baisse {solution.tempType ? solution.tempType : ''} de la température
          </span>
          <span className={`stat-value temp-${solution.temperature}`}>
            {solution.tempValue}
          </span>
        </div>
        <div className="stat">
          <span className="stat-label">Délai des travaux</span>
          <span className="stat-value">{solution.duration}</span>
        </div>
        <div className="stat">
          <span className="stat-label">Coût</span>
          <span className="stat-value">{solution.cost}</span>
        </div>
      </div>
    </div>
  );
};

export default SolutionCard;
