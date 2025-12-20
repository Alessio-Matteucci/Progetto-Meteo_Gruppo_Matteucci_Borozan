import { Box, Typography, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Logo from '../Components/logo';

/**
 * Pagina di benvenuto/introduzione
 */
export default function WelcomePage() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
        px: 3,
      }}
    >
      <Container maxWidth="md" sx={{ px: { xs: 2, sm: 3 } }}>
        <Box sx={{ mb: { xs: 2, sm: 3, md: 4 } }}>
          <Logo />
        </Box>
        
        <Typography variant="h2" sx={{ 
          mb: { xs: 2, sm: 2.5, md: 3 }, 
          fontWeight: 'bold',
          fontSize: { xs: '2rem', sm: '3rem', md: '3.75rem' },
        }}>
          TerreMeteo
        </Typography>
        
        <Typography variant="h5" sx={{ 
          mb: { xs: 2, sm: 3, md: 4 }, 
          opacity: 0.9,
          fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' },
        }}>
          Esplora il meteo e il clima di qualsiasi località del mondo
        </Typography>
        
        <Typography variant="body1" sx={{ 
          mb: { xs: 4, sm: 5, md: 6 }, 
          opacity: 0.8, 
          maxWidth: 600, 
          mx: 'auto',
          fontSize: { xs: '0.875rem', sm: '1rem' },
          lineHeight: { xs: 1.6, sm: 1.75 },
        }}>
          Un'esperienza immersiva che ti permette di navigare un globo 3D interattivo,
          cercare qualsiasi città e visualizzare informazioni meteorologiche aggiornate
          in tempo reale.
        </Typography>
        
        <Button
          variant="contained"
          size="large"
          onClick={() => navigate('/explore')}
          sx={{
            px: { xs: 4, sm: 5, md: 6 },
            py: { xs: 1.25, sm: 1.5 },
            fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
            backgroundColor: 'white',
            color: '#667eea',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
            },
          }}
        >
          Inizia l'Esplorazione
        </Button>
      </Container>
    </Box>
  );
}

