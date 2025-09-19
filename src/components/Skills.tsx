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
            return (
              <div 
                key={skill.name}
                className="glass-card p-6 rounded-xl hover:scale-105 transition-all duration-300"
                data-testid={`skill-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                    <img 
                      src={skill.icon} 
                      alt={skill.name}
                      className="w-8 h-8 text-primary"
                      style={{ filter: 'hue-rotate(260deg) saturate(1.5) brightness(1.2)' }}
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">{skill.name}</h3>
                  <p className="text-primary/80">{skill.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}