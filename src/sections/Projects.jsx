import { SectionWrapper } from '../components/ui/SectionWrapper';
import { ExternalLink, Star, GitFork, Github, Folder } from 'lucide-react';
import { useGithubRepos } from '../hooks/useGithubRepos';

// Import Images
import amazonImg from '../assets/Images/projects/amazon.png';
import weatherImg from '../assets/Images/projects/Weather.jpg';
import carImg from '../assets/Images/projects/CarVilla.png';
import codeImg from '../assets/Images/projects/CodeCrafters.png';
// 1. IMPORT THE EXPENSE IMAGE
import expenseImg from '../assets/Images/projects/ExpenseTracker.png';

export const Projects = () => {
  
  const { data: repos, isLoading } = useGithubRepos();

  const featuredProjects = [
    {
      title: "Expense Tracker",
      desc: "Full-stack financial dashboard with secure JWT authentication, transaction history, and graphical data visualization. Built with the MERN stack.",
      tags: ["MERN Stack", "Chart.js", "JWT"],
      image: expenseImg, // 2. Uses correct image
      status: "New", 
      link: "https://expense-tracker-ui-m6bi.onrender.com/" // 3. Updated Link
    },
    {
      title: "Amazon Clone",
      desc: "A fully functional e-commerce clone featuring dynamic routing, cart management, and product details. Built to understand complex React state.",
      tags: ["React", "Bootstrap", "Routing"],
      image: amazonImg,
      status: "Showcase", 
      link: "https://amazon-project-react-js.onrender.com/"
    },
    {
      title: "Weather App",
      desc: "Real-time weather dashboard fetching live data via WeatherAPI. Focuses on asynchronous JS, error handling, and responsive layout.",
      tags: ["JavaScript", "API", "Bootstrap"],
      image: weatherImg,
      status: "Live",
      link: "https://weather-app-cxbj.onrender.com/"
    },
    {
      title: "CodeCrafters",
      desc: "A modern web development agency site built with semantic HTML and CSS. Focuses on clean design, responsiveness, and branding.",
      tags: ["HTML5", "CSS3", "Design"],
      image: codeImg,
      status: "Offline",
      link: null
    },
    {
      title: "CarVilla",
      desc: "A car showroom web portal managing inventory and user inquiries. My first dive into backend logic using PHP connected to a frontend UI.",
      tags: ["PHP", "Backend", "Bootstrap"],
      image: carImg,
      status: "Offline",
      link: null
    }
  ];

  return (
    <SectionWrapper id="projects">
      
      {/* PART 1: FEATURED SHOWCASE */}
      <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-3">
        <span className="text-primary">01.</span> Selected Works
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        {featuredProjects.map((project, index) => (
          <div 
            key={index}
            className="group bg-surface/40 backdrop-blur-sm border border-white/5 rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 flex flex-col"
          >
            {/* Image Area */}
            <div className="h-48 overflow-hidden relative">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-3 right-3">
                <span className={`text-xs font-bold px-3 py-1 rounded-full border ${
                  project.status === 'New'
                    ? 'bg-blue-500/20 text-blue-400 border-blue-500/30'
                    : project.status.includes('Live') 
                    ? 'bg-green-500/20 text-green-400 border-green-500/30' 
                    : project.status.includes('Showcase')
                    ? 'bg-primary/20 text-primary border-primary/30'
                    : 'bg-red-500/20 text-red-400 border-red-500/30'
                }`}>
                  {project.status}
                </span>
              </div>
            </div>

            {/* Content Area */}
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noreferrer" className="text-secondary hover:text-white transition-colors">
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
              
              <p className="text-secondary text-sm mb-6 leading-relaxed flex-grow">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-xs font-medium px-3 py-1 bg-white/5 rounded-full text-primary">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* PART 2: LIVE GITHUB FEED */}
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
           <span className="text-primary">02.</span> Recent Activity
        </h3>
        <a href="https://github.com/Nexo-0" target="_blank" rel="noreferrer" className="text-sm font-bold text-primary hover:underline flex items-center gap-2">
           View GitHub <Github size={16} />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {repos?.map((repo) => (
          <a 
            href={repo.html_url} 
            target="_blank" 
            rel="noreferrer"
            key={repo.id}
            className="group bg-surface/30 border border-white/5 p-6 rounded-xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-primary/10 rounded-lg text-primary">
                <Folder size={20} />
              </div>
              <div className="flex gap-3 text-secondary text-xs">
                 <span className="flex items-center gap-1"><Star size={14} /> {repo.stargazers_count}</span>
                 <span className="flex items-center gap-1"><GitFork size={14} /> {repo.forks_count}</span>
              </div>
            </div>

            <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors truncate">
              {repo.name}
            </h3>
            
            <p className="text-secondary text-sm mb-4 line-clamp-2">
              {repo.description || "No description provided."}
            </p>

            <div className="mt-auto flex items-center justify-between text-xs">
               {repo.language ? (
                 <span className="text-primary">{repo.language}</span>
               ) : <span>Code</span>}
               <span className="text-secondary/50">Last push: {new Date(repo.pushed_at).toLocaleDateString()}</span>
            </div>
          </a>
        ))}
      </div>

    </SectionWrapper>
  );
};