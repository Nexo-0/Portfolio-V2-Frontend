import { SectionWrapper } from '../components/ui/SectionWrapper';
import { Server, GitBranch, Cloud, ShieldCheck } from 'lucide-react';

export const About = () => {
  return (
    <SectionWrapper id="about" className="my-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-3">
        <span className="text-primary">02.</span> About The Craft
      </h2>
      
      {/* Main Narrative */}
      <div className="text-secondary text-lg leading-relaxed space-y-6 max-w-4xl mb-16">
        <p>
          I’m a frontend-focused developer who values <strong className="text-white">clean fundamentals, solid structure, and code that actually lasts</strong>. I’ve been coding since school, so for me this isn’t a trend—it’s a craft. I believe if the basics are strong, scaling up becomes natural.
        </p>
        <p>
          My core stack is HTML, CSS, JavaScript, Bootstrap, and React, but I care a lot about how things are built under the hood. Clear architecture, predictable behavior, and interfaces that feel effortless to use are my standard.
        </p>
        <p>
          Lately, I've expanded beyond just UI. I’m actively diving into <strong className="text-white">DevOps, CI/CD, and Linux environments</strong>. I enjoy the full journey: building it, deploying it, breaking it, fixing it. Shipping code is important, but understanding how it runs in the real world matters more.
        </p>
      </div>

      {/* Two Column Grid for Learning & Infrastructure */}
      <div className="grid md:grid-cols-2 gap-8">
        
        {/* Currently Learning */}
        <div className="bg-surface/30 p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-colors">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-primary/10 rounded-lg text-primary"><Server size={24} /></div>
            <h3 className="text-xl font-bold text-white">Currently Learning</h3>
          </div>
          <p className="text-secondary mb-6">
            Expanding beyond frontend into DevOps and cloud fundamentals. My goal is to build confidence across the full stack.
          </p>
          <ul className="space-y-3 text-secondary text-sm">
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary"></div> Linux fundamentals & Server environments</li>
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary"></div> CI/CD pipelines & Deployment strategies</li>
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary"></div> Monitoring & Failure handling</li>
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary"></div> Cloud platforms & Scalability</li>
          </ul>
        </div>

        {/* Deployment & Infra */}
        <div className="bg-surface/30 p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-colors">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-accent/10 rounded-lg text-accent"><GitBranch size={24} /></div>
            <h3 className="text-xl font-bold text-white">Deployment & Infra</h3>
          </div>
          <p className="text-secondary mb-6">
            Code isn’t finished until it’s running reliably in production. I treat deployment as part of development.
          </p>
          <ul className="space-y-3 text-secondary text-sm">
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent"></div> GitHub-driven deployments</li>
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent"></div> Render / Cloud hosting platforms</li>
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent"></div> Environment-based configurations</li>
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent"></div> Static & Dynamic app deployments</li>
          </ul>
        </div>

      </div>
    </SectionWrapper>
  );
};