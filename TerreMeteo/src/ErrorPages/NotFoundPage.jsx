import { Box, Typography, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Logo from '../Components/logo';

/**
 * Pagina 404 - Pagina non trovata
 */
export default function NotFoundPage() {
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
        
        <Typography variant="h1" sx={{ 
          mb: { xs: 2, sm: 2.5, md: 3 }, 
          fontWeight: 'bold', 
          fontSize: { xs: '3rem', sm: '5rem', md: '8rem' },
          lineHeight: 1,
        }}>
          404
        </Typography>
        
        <Typography variant="h4" sx={{ 
          mb: { xs: 1.5, sm: 2 }, 
          fontWeight: 'bold',
          fontSize: { xs: '1.5rem', sm: '2rem', md: '2.125rem' },
        }}>
          Pagina Non Trovata
        </Typography>
        
        <Typography variant="h6" sx={{ 
          mb: { xs: 2, sm: 3, md: 4 }, 
          opacity: 0.9,
          fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
        }}>
          Sembra che tu abbia perso la strada...
        </Typography>
        
        <Typography variant="body1" sx={{ 
          mb: { xs: 4, sm: 5, md: 6 }, 
          opacity: 0.8, 
          maxWidth: 600, 
          mx: 'auto',
          fontSize: { xs: '0.875rem', sm: '1rem' },
          lineHeight: { xs: 1.6, sm: 1.75 },
        }}>
          La pagina che stai cercando non esiste o è stata spostata.
          Torna alla home per continuare l'esplorazione del meteo mondiale.
          l'importante è non cercare mai la californai 
        </Typography>
        
        <Box sx={{ 
          display: 'flex', 
          gap: { xs: 1.5, sm: 2 }, 
          justifyContent: 'center', 
          flexWrap: 'wrap',
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: 'stretch',
        }}>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate('/')}
            sx={{
              px: { xs: 4, sm: 5, md: 6 },
              py: { xs: 1.25, sm: 1.5 },
              fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
              backgroundColor: 'white',
              color: '#667eea',
              width: { xs: '100%', sm: 'auto' },
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
              },
            }}
          >
            Torna alla Home
          </Button>
          
          <Button
            variant="outlined"
            size="large"
            onClick={() => navigate('/explore')}
            sx={{
              px: { xs: 4, sm: 5, md: 6 },
              py: { xs: 1.25, sm: 1.5 },
              fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
              borderColor: 'white',
              color: 'white',
              width: { xs: '100%', sm: 'auto' },
              '&:hover': {
                borderColor: 'rgba(255, 255, 255, 0.8)',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              },
            }}
          >
            Vai all'Esplorazione
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

