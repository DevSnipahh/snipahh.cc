import Navigation from '@/components/Navigation';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';
import { useConfig } from '@/hooks/useConfig';

export default function About() {
  const { config, loading, error } = useConfig();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin w-8 h-8 border-2 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-muted-foreground">{config?.ui?.loading?.configurationText || 'Loading...'}</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-destructive mb-4">{config?.ui?.loading?.errorText || 'Failed to load configuration'}</p>
          <p className="text-muted-foreground">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">{config?.ui?.pages?.about?.title?.replace(config?.ui?.pages?.about?.titleHighlight || '', '') || 'About'} <span className="gradient-text">{config?.ui?.pages?.about?.titleHighlight || 'Me'}</span></h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {config?.ui?.pages?.about?.description || 'Learn more about my background and skills.'}
            </p>
          </div>
        </div>
        <AboutSection />
      </div>
      <Footer />
    </div>
  );
}
