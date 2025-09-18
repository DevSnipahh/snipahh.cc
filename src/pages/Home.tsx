import * as React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import TrustedProjects from '@/components/TrustedProjects';
import Skills from '@/components/Skills';
import ProjectsShowcase from '@/components/ProjectsShowcase';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';
import { useConfig } from '@/hooks/useConfig';

export default function Home() {
  const { config, loading, error } = useConfig();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin w-8 h-8 border-2 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading configuration...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-destructive mb-4">Failed to load configuration</p>
          <p className="text-muted-foreground">{error}</p>
        </div>
      </div>
    );
  }

  if (!config) return null;

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <TrustedProjects />
      <Skills />
      <ProjectsShowcase />
      <ServicesSection />
      <AboutSection />
      <Footer />
    </div>
  );
}
