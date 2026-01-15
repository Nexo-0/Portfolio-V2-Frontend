import { SectionWrapper } from '../components/ui/SectionWrapper';

const skills = [
  "React JS", "JavaScript", "Python", "Tailwind CSS", 
  "HTML5 "," CSS3", "Bootstrap", "Material UI", 
  "Linux Basics", "UI/UX Design", "GitHub","Git", "RESTful APIs", "Responsive Design",
  "DevOps Basics", "CI/CD Concepts", "Cloud Fundamentals", "Problem Solving","CentOS", "Ubuntu", "VS Code", "Canva",
  "cPanel", "Render", "Netlify","C", "C++", "PHP", "MySQL","PHPMyAdmin","PHP","Core Java","Core Python", "Datastructure & Algorithms",

];

export const Skills = () => {
  return (
    <SectionWrapper id="skills">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-3">
        <span className="text-primary">03.</span> Tech Stack
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className="p-4 bg-surface border border-white/5 rounded-lg text-center font-medium hover:border-primary/50 hover:text-primary transition-all cursor-default"
          >
            {skill}
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};