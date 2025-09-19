import { ArrowRight, Image } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useConfig } from '@/hooks/useConfig';

export default function ProjectsShowcase() {
  const { config } = useConfig();

  if (!config) return null;

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground">A showcase of my best Roblox development work</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {config.projects.map((project, index) => {
            const gradients = [
              'from-primary to-secondary',
              'from-accent to-primary',
              'from-secondary to-accent',
            ];
            const gradient = gradients[index % 3];

            return (
              <div 
                key={project.title}
                className="glass-card rounded-xl overflow-hidden group hover:scale-105 transition-transform"
                data-testid={`project-${project.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className={`h-48 bg-gradient-to-br ${gradient} flex items-center justify-center relative overflow-hidden`}>
                  {project.thumbnail ? (
                    <img 
                      src={project.thumbnail} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <Image className="text-4xl text-white/50" size={48} />
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-primary">{project.title}</h3>
                  <p className="text-primary/80 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => {
                      return (
                        <span 
                          key={tech}
                          className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      );
                    })}
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="text-primary/70">{project.stats}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
