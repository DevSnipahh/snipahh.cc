import * as React from 'react';
import { 
  Code2, 
  Database, 
  Shield, 
  Gamepad2,
  Server,
  Wrench,
  Brain,
  Lock
} from 'lucide-react';
import { useConfig } from '@/hooks/useConfig';

const iconMap = {
  code: Code2,
  python: Server,
  gamepad: Gamepad2,
  database: Database,
  shield: Lock,
  cogs: Wrench,
  lua: Brain,
  security: Shield,
};

export default function Skills() {
  const { config } = useConfig();

  if (!config) return null;

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{config?.ui?.sections?.skills?.title || 'Development Skills'}</h2>
          <p className="text-xl text-muted-foreground">{config?.ui?.sections?.skills?.subtitle || 'Everything you need for the perfect project'}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {config.skills.map((skill) => {
            const IconComponent = iconMap[skill.icon as keyof typeof iconMap] || Code2;
            return (
              <div key={skill.title} className="glass-card p-8 rounded-xl text-center group hover:scale-105 transition-transform">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-purple-100" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">{skill.title}</h3>
                <p className="text-primary/80">{skill.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}