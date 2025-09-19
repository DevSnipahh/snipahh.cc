import { useConfig } from '@/hooks/useConfig';
import { CheckCircle, Users, Gamepad2, Sword, Rocket, Crown, Car, Building2 } from 'lucide-react';

const iconMap = {
  gamepad: Gamepad2,
  sword: Sword,
  rocket: Rocket,
  crown: Crown,
  car: Car,
  building: Building2,
  users: Users
};

export default function TrustedProjects() {
  const { config } = useConfig();

  if (!config) return null;

  const { trustedProjects } = config;
  
  // Safe data handling with defaults
  const communities = Array.isArray(trustedProjects?.communities) ? trustedProjects.communities : [];
  
  // If no communities, show simple trust indicator
  if (communities.length === 0) {
    return (
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 text-sm text-gray-400 bg-white/5 backdrop-blur-sm rounded-full px-6 py-3 border border-white/10">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span data-testid="trust-text">{trustedProjects?.subtitle || 'Trusted by amazing developers.'}</span>
          </div>
        </div>
      </section>
    );
  }

  // Create duplicate array for seamless scrolling
  const duplicatedCommunities = [...communities, ...communities];

  return (
    <section id="communities" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-green-900/50 border border-green-400/50 px-4 py-2 mb-4" data-testid="trust-badge">
            <CheckCircle className="h-5 w-5 text-green-400" aria-hidden="true" />
            <span className="text-sm font-medium text-green-300">Trusted by Amazing Developers</span>
          </div>
          <p className="text-2xl text-gray-300" data-testid="trust-text">Trusted by over 100 developers.</p>
        </div>
        
        <div className="relative w-full overflow-hidden mt-12 trusted-scroll-container">
          <div className="flex gap-8 animate-scroll will-change-transform" style={{ minWidth: 'calc(260px * 12 + 2rem * 11)' }}>
            {duplicatedCommunities.map((community, index) => {
              const IconComponent = iconMap[community.icon as keyof typeof iconMap] || Users;
              return (
                <div
                  key={`${community.name}-${index}`}
                  className="flex-shrink-0 w-[260px] bg-[#1c1d1f] border border-white/10 rounded-xl p-4 flex items-center gap-4"
                  data-testid={`community-card-${community.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="text-white font-semibold">{community.name}</p>
                    </div>
                    <div className="flex items-center gap-1.5 text-gray-400 text-sm">
                      <Users className="w-4 h-4" aria-hidden="true" />
                      <span>{community.players}</span>
                    </div>
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
