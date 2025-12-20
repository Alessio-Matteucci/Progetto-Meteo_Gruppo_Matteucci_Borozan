import { useState, useEffect } from 'react';
import { searchCity } from '../services/geocodingService';

/**
 * Hook per gestire la ricerca di città con debounce
 */
export function useCitySearch(searchTerm, debounceDelay = 300) {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (searchTerm.trim().length > 2) {
        performSearch(searchTerm);
      } else {
        setResults([]);
      }
    }, debounceDelay);

    return () => clearTimeout(delayDebounce);
  }, [searchTerm, debounceDelay]);

  const performSearch = async (term) => {
    setIsLoading(true);
    const cities = await searchCity(term);
    const lowerTerm = term.toLowerCase().trim();
    
    let finalResults = [...cities];
    if (lowerTerm.length > 0 && (lowerTerm.includes('california') || lowerTerm.startsWith('calif') || lowerTerm === 'c' || lowerTerm === 'ca' || lowerTerm === 'cal')) {
      finalResults = [{
        name: 'california',
        country: '...',
        latitude: null,
        longitude: null,
      }, ...cities];
    }
    
    setResults(finalResults);
    setIsLoading(false);
    return finalResults;
  };

  return { results, isLoading, performSearch };
}
