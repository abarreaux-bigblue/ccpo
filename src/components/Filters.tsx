import React from 'react';
import { Filters as FiltersType } from '../types';

interface FiltersProps {
  filters: FiltersType;
  onFilterChange: (filterType: keyof FiltersType, value: string) => void;
}

const Filters: React.FC<FiltersProps> = ({ filters, onFilterChange }) => {
  const themeOptions = [
    { value: 'all', label: 'Tous thèmes' },
    { value: 'alimentation', label: 'Alimentation' },
    { value: 'eau', label: 'Eau' },
    { value: 'habitat', label: 'Habitat' }
  ];

  const typeOptions = [
    { value: 'all', label: 'Tous types' },
    { value: 'verte', label: 'Solution verte' },
    { value: 'bleue', label: 'Solution bleue' },
    { value: 'grise', label: 'Solution grise' },
    { value: 'douce', label: 'Solution douce' }
  ];

  const temperatureOptions = [
    { value: 'all', label: 'Toutes températures' },
    { value: 'faible', label: 'Faible (< 1°C)' },
    { value: 'moyenne', label: 'Moyenne (Entre 1 et 3°C)' },
    { value: 'forte', label: 'Forte (>= 3°C)' }
  ];

  return (
    <div className="filters-section">
      <div className="filter-group">
        <h3>Thèmes</h3>
        <div className="filter-options">
          {themeOptions.map(option => (
            <button
              key={option.value}
              className={`filter-btn ${filters.theme === option.value ? 'active' : ''}`}
              onClick={() => onFilterChange('theme', option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      <div className="filter-group">
        <h3>Types de solution</h3>
        <div className="filter-options">
          {typeOptions.map(option => (
            <button
              key={option.value}
              className={`filter-btn ${filters.type === option.value ? 'active' : ''}`}
              onClick={() => onFilterChange('type', option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      <div className="filter-group">
        <h3>Baisse de la température</h3>
        <div className="filter-options">
          {temperatureOptions.map(option => (
            <button
              key={option.value}
              className={`filter-btn ${filters.temperature === option.value ? 'active' : ''}`}
              onClick={() => onFilterChange('temperature', option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filters;
