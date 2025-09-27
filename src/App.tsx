import { useState } from 'react';
import { Filters } from './types';
import { solutions } from './data/solutions';
import Header from './components/Header';
import FiltersComponent from './components/Filters';
import SolutionsGrid from './components/SolutionsGrid';
import Footer from './components/Footer';
import './style.css';

const App = () => {
  const [filters, setFilters] = useState<Filters>({
    theme: 'all',
    type: 'all',
    temperature: 'all'
  });

  const handleFilterChange = (filterType: keyof Filters, value: string) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  return (
    <div className="app">
      <Header />
      
      <main className="main-content">
        <div className="container">
          <div className="page-header">
            <h1>Explorer les solutions d'adaptation</h1>
          </div>

          <FiltersComponent 
            filters={filters} 
            onFilterChange={handleFilterChange} 
          />

          <SolutionsGrid 
            solutions={solutions} 
            filters={filters} 
          />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
