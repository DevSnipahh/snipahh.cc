import * as React from 'react';
import { 
  Code, 
  Database, 
  Shield, 
  Settings,
  Gamepad2
} from 'lucide-react';
import { SiPython } from 'react-icons/si';
import { useConfig } from '@/hooks/useConfig';

const iconMap = {
  code: Code,
  python: SiPython,
  gamepad: Gamepad2,
  database: Database,
  shield: Shield,
  cogs: Settings,
};

export default function Skills() {
  const { config } = useConfig();

  if (!config) return null;

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Development Skills</h2>
          <p className="text-xl text-muted-foreground">Everything you need for the perfect Roblox game</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {config.skills.map((skill, index) => {
            const IconComponent = iconMap[skill.icon as keyof typeof iconMap] || Code;

            return (
              <div 
                key={skill.name}
                className="glass-card p-8 rounded-xl hover:bg-muted/20 transition-colors group"
                data-testid={`skill-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="w-16 h-16 bg-primary/20 text-primary rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <IconComponent size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">{skill.name}</h3>
                <p className="text-primary/80">{skill.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
