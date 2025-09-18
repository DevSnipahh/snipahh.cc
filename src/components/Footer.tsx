import * as React from 'react';
import { SiDiscord, SiRoblox, SiGithub, SiX } from 'react-icons/si';
import { useConfig } from '@/hooks/useConfig';

export default function Footer() {
  const { config } = useConfig();

  if (!config) return null;

  return (
    <>
      {/* Contact CTA */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Let {config.developer.displayName} bring your vision to life.
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join the developers already creating amazing Roblox experiences.
          </p>
          <button 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            data-testid="button-start-project"
          >
            Start Your Project Today
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold gradient-text mb-4">{config.developer.displayName}</h3>
            <p className="text-muted-foreground">{config.developer.bio}</p>
          </div>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href={`https://discord.com/users/${config.contact.discord}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="link-discord"
            >
              <SiDiscord size={32} />
            </a>
            <a 
              href={config.contact.roblox}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="link-roblox"
            >
              <SiRoblox size={32} />
            </a>
            <a 
              href={config.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="link-github"
            >
              <SiGithub size={32} />
            </a>
            <a 
              href={config.contact.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="link-twitter"
            >
              <SiX size={32} />
            </a>
          </div>
          
          <div className="text-muted-foreground">
            <p>
              &copy; 2024 {config.developer.displayName}. All rights reserved. |{' '}
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a> |{' '}
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
