
import { useState, useEffect } from 'react';

interface Developer {
  name: string;
  username: string;
  displayName: string;
  title: string;
  bio: string;
}

interface Hero {
  title: string;
  titleHighlight?: string;
  subtitle: string;
  primaryButton: string;
  secondaryButton: string;
  primaryUrl?: string;
  secondaryUrl?: string;
  trustText?: string;
}

interface About {
  intro: string;
  experience: string;
  commitment: string;
}

interface Skill {
  name: string;
  description: string;
  icon: string;
}

interface Project {
  title: string;
  description: string;
  technologies: string[];
  stats: string;
  category: string;
}

interface Service {
  name: string;
  price: string;
  period: string;
  features: string[];
  popular: boolean;
}

interface Stats {
  projects: string;
  experience: string;
  satisfaction: string;
  languages: string;
}

interface Community {
  name: string;
  players: string;
  icon: string;
}

interface TrustedProjects {
  title: string;
  subtitle: string;
  communities: Community[];
}

interface Contact {
  discord: string;
  roblox: string;
  github: string;
  twitter: string;
}

interface Config {
  developer: Developer;
  hero: Hero;
  about: About;
  skills: Skill[];
  projects: Project[];
  services: Service[];
  stats: Stats;
  trustedProjects: TrustedProjects;
  contact: Contact;
}

export function useConfig() {
  const [config, setConfig] = useState<Config | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const response = await fetch('/config.json');
        if (!response.ok) {
          throw new Error('Failed to fetch config');
        }
        const data = await response.json();
        setConfig(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchConfig();
  }, []);

  return { config, loading, error };
}
