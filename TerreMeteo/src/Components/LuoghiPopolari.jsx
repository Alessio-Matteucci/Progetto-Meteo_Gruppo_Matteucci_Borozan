import { Box, Typography, Button } from '@mui/material';

/**
 * Componente per mostrare luoghi popolari da selezionare rapidamente
 */
export default function PopularLocations({ onLocationSelect }) {
  const popularCities = [
    { name: 'Roma', country: 'Italia', lat: 41.9028, lon: 12.4964 },
    { name: 'Milano', country: 'Italia', lat: 45.4642, lon: 9.1900 },
    { name: 'Parigi', country: 'Francia', lat: 48.8566, lon: 2.3522 },
    { name: 'Londra', country: 'Regno Unito', lat: 51.5074, lon: -0.1278 },
    { name: 'New York', country: 'USA', lat: 40.7128, lon: -74.0060 },
    { name: 'Tokyo', country: 'Giappone', lat: 35.6762, lon: 139.6503 },
    { name: 'Sydney', country: 'Australia', lat: -33.8688, lon: 151.2093 },
    { name: 'Dubai', country: 'Emirati Arabi', lat: 25.2048, lon: 55.2708 },
  ];

  const handleClick = (city) => {
    onLocationSelect({
      latitude: city.lat,
      longitude: city.lon,
      name: city.name,
      country: city.country,
    });
  };

  return (
    <Box 
      sx={{ 
        mt: 4, 
        mb: 4,
        backgroundColor: '#E9EEF3',
        borderRadius: '12px',
        padding: '16px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      {/* Parte superiore con div più opaco */}
      <Box
        sx={{
          mb: 2,
        }}
      >
        <Box
          sx={{
            backgroundColor: 'rgba(216, 225, 234, 0.8)',
            borderRadius: '12px',
            padding: '12px 16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography 
            sx={{ 
              color: '#101828',
              fontSize: '16px',
              fontWeight: 500,
              textAlign: 'center',
            }}
          >
            i posti piu cercati
          </Typography>
        </Box>
      </Box>

      {/* Lista dei chip delle città */}
      <Box
        sx={{
          display: 'flex',
          gap: '12px',
          padding: '12px',
          overflowX: 'auto',
          WebkitOverflowScrolling: 'touch',
          alignItems: 'center',
          justifyContent: 'flex-start',
          '&::-webkit-scrollbar': {
            height: '6px',
          },
          '&::-webkit-scrollbar-track': {
            background: 'rgba(0, 0, 0, 0.1)',
            borderRadius: '3px',
          },
          '&::-webkit-scrollbar-thumb': {
            background: 'rgba(0, 0, 0, 0.3)',
            borderRadius: '3px',
          },
        }}
      >
        {popularCities.map((city, index) => (
          <Button
            key={index}
            onClick={() => handleClick(city)}
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 14px',
              borderRadius: '9999px',
              background: '#D8E1EA',
              border: '1px solid rgba(16, 24, 40, 0.06)',
              fontSize: '14px',
              fontWeight: 500,
              whiteSpace: 'nowrap',
              color: '#101828',
              textTransform: 'none',
              transition: 'transform 160ms ease, box-shadow 160ms ease',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 6px 18px rgba(16, 24, 40, 0.06)',
                backgroundColor: '#D8E1EA',
              },
            }}
          >
            {city.name}
          </Button>
        ))}
      </Box>
    </Box>
  );
}

