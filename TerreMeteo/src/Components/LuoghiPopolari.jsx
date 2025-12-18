import { Box, Typography, Button, Grid } from '@mui/material';

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
    <Box sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h6" sx={{ color: 'white', mb: 2, textAlign: 'center' }}>
        Luoghi Popolari
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {popularCities.map((city, index) => (
          <Grid item key={index}>
            <Button
              variant="outlined"
              onClick={() => handleClick(city)}
              sx={{
                color: 'white',
                borderColor: 'rgba(255, 255, 255, 0.3)',
                '&:hover': {
                  borderColor: 'rgba(255, 255, 255, 0.6)',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              {city.name}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

