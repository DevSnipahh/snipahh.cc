import * as React from 'react';
import { User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SiDiscord, SiRoblox } from 'react-icons/si';
import { useConfig } from '@/hooks/useConfig';

export default function AboutSection() {
  const { config } = useConfig();

  if (!config) return null;

  const skills = config?.ui?.sections?.about?.skillsList || ['Lua/LuaU', 'Python', 'Roblox Studio', 'Game Design', 'UI/UX', 'DataStore'];
  const skillColors = [
    'bg-primary/20 text-primary',
    'bg-secondary/20 text-secondary',
    'bg-accent/20 text-accent',
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              About <span className="gradient-text">{config.developer.displayName}</span>
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>{config.about.intro}</p>
              <p>{config.about.experience}</p>
              <p>{config.about.commitment}</p>
            </div>
            
            <div className="mt-8">
              <h3 className="text-2xl font-semibold mb-4">{config?.ui?.sections?.about?.skillsTitle || 'Skills & Technologies'}</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => {
                  return (
                    <span key={skill} className="px-4 py-2 bg-primary/20 text-primary rounded-full">
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 font-semibold"
                data-testid="button-contact-discord"
              >
                <a 
                  href={`https://discord.com/users/${config.contact.discord}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiDiscord className="mr-2" size={20} />
                  {config?.ui?.sections?.about?.contactDiscord || 'Contact on Discord'}
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-border hover:bg-muted text-foreground px-6 py-3 font-semibold"
                data-testid="button-view-roblox-profile"
              >
                <a 
                  href={config.contact.roblox}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiRoblox className="mr-2" size={20} />
                  {config?.ui?.sections?.about?.viewRobloxProfile || 'View Profile'}
                </a>
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="glass-card p-8 rounded-2xl">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-secondary p-1">
                  <div className="w-full h-full bg-card rounded-full flex items-center justify-center">
                    <User className="text-4xl text-primary" size={48} />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2" data-testid="text-username">
                  {config.developer.username}
                </h3>
                <p className="text-muted-foreground mb-6">{config.developer.title}</p>
                
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold gradient-text" data-testid="text-projects-count">
                      {config.stats.projects}
                    </div>
                    <div className="text-muted-foreground">{config?.ui?.sections?.about?.statsLabels?.projects || 'Projects'}</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold gradient-text" data-testid="text-experience-years">
                      {config.stats.experience}
                    </div>
                    <div className="text-muted-foreground">{config?.ui?.sections?.about?.statsLabels?.experience || 'Years Experience'}</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold gradient-text" data-testid="text-satisfaction-rate">
                      {config.stats.satisfaction}
                    </div>
                    <div className="text-muted-foreground">{config?.ui?.sections?.about?.statsLabels?.satisfaction || 'Client Satisfaction'}</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold gradient-text" data-testid="text-languages-count">
                      {config.stats.languages}
                    </div>
                    <div className="text-muted-foreground">{config?.ui?.sections?.about?.statsLabels?.languages || 'Languages'}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
