import { useState, useEffect } from 'react';

interface ConfigData {
  developer: {
    name: string;
    username: string;
    displayName: string;
    title: string;
    bio: string;
  };
  hero: {
    title: string;
    subtitle: string;
    primaryButton: string;
    secondaryButton: string;
  };
  about: {
    intro: string;
    experience: string;
    commitment: string;
  };
  skills: Array<{
    name: string;
    description: string;
    icon: string;
  }>;
  projects: Array<{
    title: string;
    description: string;
    technologies: string[];
    stats: string;
    category: string;
  }>;
  services: Array<{
    name: string;
    price: string;
    period: string;
    features: string[];
    popular: boolean;
  }>;
  stats: {
    projects: string;
    experience: string;
    satisfaction: string;
    languages: string;
  };
  trustedProjects: {
    title: string;
    subtitle: string;
    communities: Array<{
      name: string;
      players: string;
      icon: string;
    }>;
  };
  contact: {
    discord: string;
    roblox: string;
    github: string;
    twitter: string;
  };
}

export function useConfig() {
  const [config, setConfig] = useState<ConfigData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadConfig = async () => {
      try {
        const response = await fetch('/config.json');
        if (!response.ok) {
          throw new Error('Failed to load configuration');
        }
        const data = await response.json();
        setConfig(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load configuration');
      } finally {
        setLoading(false);
      }
    };

    loadConfig();
  }, []);

  return { config, loading, error };
}