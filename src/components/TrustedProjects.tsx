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

  // Helper function to determine if icon is a URL or file path
  const isImageUrl = (icon: string) => {
    return icon.startsWith('http://') || icon.startsWith('https://') || icon.startsWith('/');
  };

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
            <span className="text-sm font-medium text-green-300">{trustedProjects?.title || 'Trusted by Amazing Developers'}</span>
          </div>
          <p className="text-2xl text-gray-300" data-testid="trust-text">{trustedProjects?.subtitle || 'Trusted by over 100 developers.'}</p>
        </div>

        <div className="relative w-full overflow-hidden mt-12 trusted-scroll-container">
          <div className="flex gap-8 animate-scroll will-change-transform" style={{ minWidth: 'calc(260px * 12 + 2rem * 11)' }}>
            {duplicatedCommunities.map((community, index) => {
              const isImage = isImageUrl(community.icon) && community.icon !== 'filepath';
              const IconComponent = iconMap[community.icon as keyof typeof iconMap] || Users;
              
              return (
                <div
                  key={`${community.name}-${index}`}
                  className="flex-shrink-0 w-[260px] glass-card rounded-xl p-4 flex items-center gap-4"
                  data-testid={`community-card-${community.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                    {isImage ? (
                      <img 
                        src={community.icon} 
                        alt={`${community.name} icon`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback to default icon if image fails to load
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.parentElement!.innerHTML = '<div class="w-6 h-6 text-white flex items-center justify-center"><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.9 1 3 1.9 3 3V21C3 22.1 3.9 23 5 23H19C20.1 23 21 22.1 21 21V9H21ZM19 21H5V3H13V9H19V21Z"/></svg></div>';
                        }}
                      />
                    ) : (
                      <IconComponent className="w-6 h-6 text-white" />
                    )}
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