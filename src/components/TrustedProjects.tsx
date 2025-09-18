import { 
  Gamepad2, 
  Sword, 
  Rocket, 
  Crown, 
  Car, 
  Building 
} from 'lucide-react';
import { useConfig } from '@/hooks/useConfig';

const iconMap = {
  gamepad: Gamepad2,
  sword: Sword,
  rocket: Rocket,
  crown: Crown,
  car: Car,
  building: Building,
};

export default function TrustedProjects() {
  const { config } = useConfig();

  if (!config) return null;

  const { trustedProjects } = config;
  const duplicatedCommunities = [...trustedProjects.communities, ...trustedProjects.communities];

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-muted-foreground text-lg mb-8">{trustedProjects.title}</p>
          <p className="text-3xl font-bold mb-8">
            {trustedProjects.subtitle.split(' ').slice(0, -4).join(' ')}{' '}
            <span className="gradient-text">
              {trustedProjects.subtitle.split(' ').slice(-4).join(' ')}
            </span>
          </p>
        </div>
        
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll space-x-8" style={{ width: 'calc(200%)' }}>
            {duplicatedCommunities.map((community, index) => {
              const IconComponent = iconMap[community.icon as keyof typeof iconMap] || Gamepad2;
              return (
                <div 
                  key={`${community.name}-${index}`}
                  className="flex-shrink-0 flex items-center space-x-4 glass-card p-4 rounded-lg min-w-[300px]"
                  data-testid={`community-${community.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                    <IconComponent className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold">{community.name}</h3>
                    <p className="text-muted-foreground text-sm">{community.players}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
