import React, { CSSProperties } from 'react';
import { Solution, ThemeType } from '../types';

interface SolutionCardProps {
  solution: Solution;
}

const SolutionCard: React.FC<SolutionCardProps> = ({ solution }) => {
  const cardStyle = solutionThemeToCardStyleMap.get(solution.theme) || {};
  const headerStyle = solutionThemeToHeaderStyleMap.get(solution.theme) || {};
  return (
    <div className="solution-card" style={cardStyle}>
      <div className="solution-header">
        <span className="solution-type" style={headerStyle}>
          {solution.theme}
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

const solutionThemeToCardStyleMap = new Map<ThemeType, CSSProperties>([
  ["température", { borderLeftColor: "#f79c1d" }],
  ["eau", { borderLeftColor: "#3489f0" }],
  ["extérieur", { borderLeftColor: "#15ad18" }],
  ["alimentation", { borderLeftColor: "#f3fb0c" }],
  ["énergie", { borderLeftColor: "#b8b9b2" }],
  ["all", { borderLeftColor: "#ffffff" }]
]);

const solutionThemeToHeaderStyleMap = new Map<ThemeType, CSSProperties>([
  ["température", { background: "#f79c1d" }],
  ["eau", { background: "#3489f0" }],
  ["extérieur", { background: "#15ad18" }],
  ["alimentation", { background: "#f3fb0c" }],
  ["énergie", { background: "#b8b9b2" }],
  ["all", { background: "#ffffff" }]
]);