import React, { CSSProperties } from 'react';
import { Solution, ThemeType } from '../types';

interface SolutionCardProps {
  solution: Solution;
}

const SolutionCard: React.FC<SolutionCardProps> = ({ solution }) => {
  const cardStyle = solutionThemeToCardStyleMap[solution.theme];
  return (
    <div className="solution-card" style={cardStyle}>
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

const solutionThemeToCardStyleMap : Record<ThemeType, CSSProperties> = {
  "température": {
    borderLeftColor: "#10b981"
  },
  "eau": {
    borderLeftColor: "#3b82f6"
  },
  "extérieur": {
    borderLeftColor: "#6b7280"
  },
  "alimentation": {
    borderLeftColor: "#f59e0b"
  },
  "énergie": {
    borderLeftColor: "#ef4444"
  },
  "all": {
    borderLeftColor: "#6b7280"
  }
}