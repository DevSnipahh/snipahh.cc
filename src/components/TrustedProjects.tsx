import { useConfig } from '@/hooks/useConfig';

export default function TrustedProjects() {
  const { config } = useConfig();

  if (!config) return null;

  const { trustedProjects } = config;

  return (
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center space-x-2 text-sm text-gray-400 bg-white/5 backdrop-blur-sm rounded-full px-6 py-3 border border-white/10">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span data-testid="trust-text">{trustedProjects.subtitle}</span>
        </div>
      </div>
    </section>
  );
}
