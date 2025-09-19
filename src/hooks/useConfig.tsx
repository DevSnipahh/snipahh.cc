
import { useState, useEffect } from 'react';

interface Developer {
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
  title: string;
  description: string;
  icon: string;
}

interface Project {
  title: string;
  description: string;
  technologies: string[];
  stats: string;
  category: string;
  thumbnail?: string;
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

interface UI {
  loading: {
    configurationText: string;
    errorText: string;
  };
  navigation: {
    projects: string;
    services: string;
    about: string;
    contact: string;
    mobileMenuToggle: string;
    openMainMenu: string;
  };
  pages: {
    projects: {
      title: string;
      titleHighlight: string;
      description: string;
    };
    services: {
      title: string;
      titleHighlight: string;
      description: string;
    };
    about: {
      title: string;
      titleHighlight: string;
      description: string;
    };
    contact: {
      title: string;
      titleHighlight: string;
      description: string;
      projectInquiries: {
        title: string;
        description: string;
      };
      socialLabels: {
        discord: string;
        github: string;
        twitter: string;
        roblox: string;
        visitProfile: string;
        sendMessage: string;
      };
    };
  };
  sections: {
    skills: {
      title: string;
      subtitle: string;
    };
    projects: {
      title: string;
      subtitle: string;
    };
    services: {
      popularLabel: string;
    };
    about: {
      skillsTitle: string;
      skillsList: string[];
      contactDiscord: string;
      viewRobloxProfile: string;
      statsLabels: {
        projects: string;
        experience: string;
        satisfaction: string;
        languages: string;
      };
    };
  };
  footer: {
    copyright: string;
    privacyPolicy: string;
    termsOfService: string;
  };
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
  ui: UI;
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
