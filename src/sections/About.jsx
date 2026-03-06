
import { SectionWrapper } from '../components/ui/SectionWrapper';
import { Server, GitBranch } from 'lucide-react';

export const About = () => {
  return (
    <SectionWrapper id="about" className="my-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-3">
        <span className="text-primary">02.</span> About The Craft
      </h2>

      {/* Main Narrative */}
      <div className="text-secondary text-lg leading-relaxed space-y-6 max-w-4xl mb-16">
        <p>
          I’m a developer who believes <strong className="text-white">strong fundamentals, clean architecture, and reliable systems</strong> create software that lasts. I’ve been coding since school, so for me this isn’t a trend it’s a craft built through curiosity and continuous learning.
        </p>

        <p>
          My foundation started with HTML, CSS, JavaScript, Bootstrap, and React, but my focus has grown beyond building interfaces. I care deeply about how software behaves under the hood clear structure, predictable systems, and applications that run reliably in real environments.
        </p>

        <p>
          Lately, I’ve been exploring <strong className="text-white">DevOps, CI/CD pipelines, Linux environments, and deployment workflows</strong>. I enjoy the full lifecycle of software: building it, deploying it, breaking it, and improving it until it runs smoothly in production.
        </p>
      </div>

      {/* Two Column Grid */}
      <div className="grid md:grid-cols-2 gap-8">

        {/* Currently Learning */}
        <div className="bg-surface/30 p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-colors">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-primary/10 rounded-lg text-primary">
              <Server size={24} />
            </div>
            <h3 className="text-xl font-bold text-white">Currently Learning</h3>
          </div>

          <p className="text-secondary mb-6">
            Expanding deeper into DevOps, cloud infrastructure, and modern deployment workflows.
          </p>

          <ul className="space-y-3 text-secondary text-sm">
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
              Linux fundamentals & server environments
            </li>

            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
              CI/CD pipelines & deployment strategies
            </li>

            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
              Monitoring & failure handling
            </li>

            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
              Cloud platforms & scalability
            </li>
          </ul>
        </div>

        {/* Deployment & Infrastructure */}
        <div className="bg-surface/30 p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-colors">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-accent/10 rounded-lg text-accent">
              <GitBranch size={24} />
            </div>
            <h3 className="text-xl font-bold text-white">Deployment & Infra</h3>
          </div>

          <p className="text-secondary mb-6">
            Code isn’t finished until it’s running reliably in production. I treat deployment as part of development.
          </p>

          <ul className="space-y-3 text-secondary text-sm">
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
              GitHub-driven deployments
            </li>

            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
              Render / cloud hosting platforms
            </li>

            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
              Environment-based configurations
            </li>

            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
              Static & dynamic application deployments
            </li>
          </ul>
        </div>

      </div>
    </SectionWrapper>
  );
};

