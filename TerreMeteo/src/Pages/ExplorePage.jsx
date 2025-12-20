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
      <Container maxWidth="xl" sx={{ py: { xs: 2, sm: 3, md: 4 }, px: { xs: 1, sm: 2, md: 3 } }}>
        {/* Barra di ricerca - posizionata sopra la mappa in modo assoluto */}
        <Box 
          sx={{ 
            position: { xs: 'relative', sm: 'absolute' },
            top: { xs: 'auto', sm: 20 },
            left: { xs: 'auto', sm: '50%' },
            transform: { xs: 'none', sm: 'translateX(-50%)' },
            width: '100%',
            maxWidth: { xs: '100%', sm: 600 },
            zIndex: 10,
            px: { xs: 1, sm: 2 },
            mb: { xs: 2, sm: 0 },
          }}
        >
          <SearchBar onCitySelect={handleLocationSelect} />
        </Box>

        {/* Globo 3D */}
        <Box
          sx={{
            height: { xs: '40vh', sm: '50vh', md: '60vh' },
            minHeight: { xs: 300, sm: 400, md: 500 },
            position: 'relative',
            mb: { xs: 2, sm: 3, md: 4 },
            mt: { xs: 2, sm: 8, md: 10 },
            borderRadius: { xs: '8px', sm: '12px' },
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

