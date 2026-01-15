import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppBar, Toolbar, Button, Box, Typography, Container } from '@mui/material'; // MUI Imports

import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Projects } from './sections/Projects';
import { Skills } from './sections/Skills';
import { Contact } from './sections/Contact';

// IMPORT YOUR LOGO
import logo from './assets/Images/Studio-Project.png';

const queryClient = new QueryClient();

// Define Colors to match your theme
const themeColors = {
  background: 'rgba(10, 10, 10, 0.8)', // Dark background
  border: 'rgba(255, 255, 255, 0.05)',  // Subtle border
  textSecondary: '#8892b0',             // Gray text
  primary: '#0aff9d',                   // Neon Green (Adjust to match your specific primary color)
  glassBlur: 'blur(12px)',              // Glass effect
};

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <main className="antialiased selection:bg-primary/30">
        
        {/* --- MATERIAL UI NAVBAR --- */}
        <AppBar 
          position="fixed" 
          elevation={0}
          sx={{
            backgroundColor: themeColors.background,
            backdropFilter: themeColors.glassBlur,
            borderBottom: `1px solid ${themeColors.border}`,
            zIndex: 50
          }}
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters sx={{ justifyContent: 'space-between', minHeight: '70px' }}>
              
              {/* Logo Section */}
              <Box display="flex" alignItems="center" gap={2}>
                 <img 
                   src={logo} 
                   alt="Nexo-0 Logo" 
                   style={{ height: '32px', width: 'auto', objectFit: 'contain' }} 
                 />
                 <Typography 
                   variant="h6" 
                   component="div" 
                   sx={{ 
                     fontWeight: 'bold', 
                     color: themeColors.primary,
                     letterSpacing: '0.5px'
                   }}
                 >
                   Nexo-0
                 </Typography>
              </Box>

              {/* Desktop Menu Links */}
              <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4 }}>
                {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
                  <Button
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    sx={{
                      color: themeColors.textSecondary,
                      textTransform: 'capitalize',
                      fontWeight: 500,
                      fontSize: '0.9rem',
                      '&:hover': {
                        color: themeColors.primary,
                        backgroundColor: 'transparent'
                      }
                    }}
                  >
                    {item}
                  </Button>
                ))}
              </Box>

            </Toolbar>
          </Container>
        </AppBar>

        {/* --- MAIN SECTIONS --- */}
        {/* We keep these as they are since they contain complex logic */}
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        
        {/* --- MATERIAL UI FOOTER --- */}
        <Box 
          component="footer" 
          sx={{
            py: 4,
            textAlign: 'center',
            backgroundColor: 'rgba(255,255,255,0.02)',
            borderTop: `1px solid ${themeColors.border}`
          }}
        >
          <Typography variant="body2" sx={{ color: themeColors.textSecondary }}>
            © 2026 Kunal Petare. All Rights Reserved.
          </Typography>
        </Box>

      </main>
    </QueryClientProvider>
  );
}

export default App;