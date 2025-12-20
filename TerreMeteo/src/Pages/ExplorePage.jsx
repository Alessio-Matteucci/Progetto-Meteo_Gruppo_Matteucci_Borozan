import { Box, Container } from '@mui/material';
import SearchBar from '../Components/SearchBar';
import Globe3D from '../Components/Globo3D';
import WeatherPanel from '../Components/panneloMeteo';
import PopularLocations from '../Components/LuoghiPopolari';
import LoadingSpinner from '../Components/CaricamentoAPI';
import { useLocationSelection } from '../hooks/useLocationSelection';
import { useWeatherData } from '../hooks/useWeatherData';

/**
 * Pagina principale con globo 3D, ricerca e dati meteo
 */
export default function ExplorePage() {
  const {
    selectedLocation,
    isAnimating,
    handleLocationSelect,
    handleResetView,
    handleGlobePickLocation,
  } = useLocationSelection();

  const { weatherData, isLoading: isLoadingWeather } = useWeatherData(selectedLocation);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #0a0a0a 0%, #1a1a2e 40%, #16213e 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="xl" sx={{ py: 4 }}>
        {/* Barra di ricerca - posizionata sopra la mappa in modo assoluto */}
        <Box 
          sx={{ 
            position: 'absolute',
            top: 20,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '100%',
            maxWidth: 600,
            zIndex: 10,
            px: 2,
          }}
        >
          <SearchBar onCitySelect={handleLocationSelect} />
        </Box>

        {/* Globo 3D */}
        <Box
          sx={{
            height: '60vh',
            minHeight: 500,
            position: 'relative',
            mb: 4,
            mt: 10,
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
          }}
        >
          <Globe3D
            targetLat={selectedLocation?.latitude || null}
            targetLon={selectedLocation?.longitude || null}
            isAnimating={isAnimating}
            onPickLocation={handleGlobePickLocation}
            weatherData={weatherData}
            locationData={selectedLocation}
            onResetView={handleResetView}
          />
        </Box>

        {/* Luoghi popolari */}
        <PopularLocations onLocationSelect={handleLocationSelect} />

        {/* Pannello meteo */}
        {selectedLocation && (
          <>
            {isLoadingWeather ? (
              <LoadingSpinner message="Caricamento dati meteo..." />
            ) : (
              <WeatherPanel
                weatherData={weatherData}
                locationData={selectedLocation}
              />
            )}
          </>
        )}
      </Container>
    </Box>
  );
}

