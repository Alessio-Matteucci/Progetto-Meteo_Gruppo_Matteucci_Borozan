import { useState, useEffect } from 'react';
import { getWeatherData } from '../services/weatherService';

/**
 * Hook per gestire il caricamento dei dati meteo
 */
export function useWeatherData(location) {
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (location && location.latitude && location.longitude) {
      setIsLoading(true);
      setError(null);
      
      const fetchWeather = async () => {
        try {
          const data = await getWeatherData(
            location.latitude,
            location.longitude
          );
          setWeatherData(data);
        } catch (err) {
          setError(err);
          setWeatherData(null);
        } finally {
          setIsLoading(false);
        }
      };

      fetchWeather();
    } else {
      setWeatherData(null);
      setIsLoading(false);
      setError(null);
    }
  }, [location]);

  return { weatherData, isLoading, error };
}
