import { useNavigate } from 'react-router-dom';

/**
 * Hook per gestire i handler della ricerca città
 */
export function useSearchHandlers(onCitySelect) {
  const navigate = useNavigate();

  const handleCitySelect = (city) => {
    // Gestione speciale per "california"
    if (city.name === 'california' && city.country === '...' && !city.latitude) {
      navigate('/media');
      return;
    }
    
    onCitySelect({
      latitude: city.latitude,
      longitude: city.longitude,
      name: city.name,
      country: city.country,
      admin1: city.admin1,
    });
  };

  const handleSearchSubmit = async (searchTerm, performSearch, setShowResults) => {
    if (searchTerm.trim().length === 0) return;

    setShowResults(false);
    const searchResults = await performSearch(searchTerm);
    
    if (searchResults && searchResults.length > 0) {
      // Cerca match esatto
      const exactMatch = searchResults.find(city => 
        city.name.toLowerCase() === searchTerm.toLowerCase().trim()
      );
      
      if (exactMatch) {
        handleCitySelect(exactMatch);
      } else {
        // Se non c'è match esatto, seleziona il primo risultato
        handleCitySelect(searchResults[0]);
      }
    }
  };

  const handleKeyPress = async (e, searchTerm, performSearch, setShowResults) => {
    if (e.key === 'Enter' && searchTerm.trim().length > 0) {
      e.preventDefault();
      await handleSearchSubmit(searchTerm, performSearch, setShowResults);
    }
  };

  return {
    handleCitySelect,
    handleSearchSubmit,
    handleKeyPress,
  };
}
