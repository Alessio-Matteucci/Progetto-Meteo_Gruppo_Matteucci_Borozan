import { useState, useEffect } from 'react';

/**
 * Hook per gestire la selezione della location e l'animazione del globo
 */
export function useLocationSelection() {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (selectedLocation) {
      // Avvia animazione
      setIsAnimating(true);
      
      // Ferma animazione dopo un po'
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 2000);

      return () => clearTimeout(timer);
    } else {
      setIsAnimating(false);
    }
  }, [selectedLocation]);

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
  };

  const handleResetView = () => {
    setSelectedLocation(null);
  };

  const handleGlobePickLocation = (latitude, longitude) => {
    handleLocationSelect({
      latitude,
      longitude,
      name: 'Punto selezionato',
      country: 'Coordinate',
      admin1: null,
    });
  };

  return {
    selectedLocation,
    isAnimating,
    handleLocationSelect,
    handleResetView,
    handleGlobePickLocation,
  };
}
