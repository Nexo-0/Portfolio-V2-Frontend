import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Projects } from './sections/Projects';
import { Skills } from './sections/Skills';
import { Contact } from './sections/Contact';
import logo from './assets/Images/projects/Studio-Project.png';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <main className="antialiased selection:bg-primary/30 selection:text-black">
        
        {/* Navbar with GOLD GLOW */}
        <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-white/5 shadow-[0_5px_30px_-10px_rgba(255,215,0,0.15)] px-6 py-4 flex justify-between items-center">
          
          <div className="font-bold text-xl text-primary flex items-center gap-3 drop-shadow-[0_0_10px_rgba(255,215,0,0.6)]">
             <img src={logo} alt="Nexo-0 Logo" className="h-8 w-auto object-contain" /> 
             Nexo-0
          </div>

          <div className="hidden md:flex gap-8 text-sm font-medium text-secondary">
             {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
               <a 
                 key={item}
                 href={`#${item.toLowerCase()}`} 
                 className="hover:text-primary transition-colors hover:drop-shadow-[0_0_10px_rgba(255,215,0,0.8)]"
               >
                 {item}
               </a>
             ))}
          </div>
        </nav>

        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        
        <footer className="py-8 text-center text-secondary text-sm border-t border-white/5 bg-surface/20">
          <p>© 2026 Kunal Petare. All Rights Reserved.</p>
        </footer>

      </main>
    </QueryClientProvider>
  );
}

export default App;