import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Projects } from './sections/Projects';
import { Skills } from './sections/Skills';
import { Contact } from './sections/Contact';

// 1. IMPORT YOUR LOGO HERE
import logo from './assets/Images/Studio-Project.png';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <main className="antialiased selection:bg-primary/30">
        
        {/* Navigation Bar */}
        <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-white/5 px-6 py-4 flex justify-between items-center">
          
          {/* 2. FIXED LOGO SECTION */}
          <div className="font-bold text-xl text-primary flex items-center gap-3">
             <img 
               src={logo} 
               alt="Nexo-0 Logo" 
               className="h-8 w-auto object-contain" // Controls height
             /> 
             Nexo-0
          </div>

          <div className="hidden md:flex gap-8 text-sm font-medium text-secondary">
             <a href="#about" className="hover:text-primary transition-colors">About</a>
             <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
             <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
             <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
        </nav>

        {/* Section Order */}
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        
        {/* Footer */}
        <footer className="py-8 text-center text-secondary text-sm border-t border-white/5 bg-surface/20">
          <p>© 2026 Kunal Petare. All Rights Reserved.</p>
        </footer>

      </main>
    </QueryClientProvider>
  );
}

export default App;