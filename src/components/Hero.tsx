import * as React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { useConfig } from '@/hooks/useConfig';

export default function Hero() {
  const { config } = useConfig();

  if (!config) return null;

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 relative">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
          {config.hero.titleHighlight ? (
            <>
              {config.hero.title.replace(config.hero.titleHighlight, '').trim()}
              <br />
              <span className="gradient-text">{config.hero.titleHighlight}.</span>
            </>
          ) : (
            <>
              {config.hero.title.split(' ').slice(0, -2).join(' ')}{' '}
              <span className="gradient-text">
                {config.hero.title.split(' ').slice(-2).join(' ')}
              </span>
            </>
          )}
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          {config.hero.subtitle}
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300"
            data-testid="button-primary-action"
          >
            <Link href={config.hero.primaryUrl || '/services'}>
              {config.hero.primaryButton}
            </Link>
          </Button>
          <Button
            asChild
            variant="ghost"
            size="lg"
            className="text-gray-300 hover:text-white px-8 py-4 text-lg font-semibold rounded-full hover:bg-white/10"
            data-testid="button-secondary-action"
          >
            <Link href={config.hero.secondaryUrl || '/projects'}>
              {config.hero.secondaryButton}
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
        </div>
      </div>
      
      {/* Trust indicator at bottom */}
      <div className="absolute bottom-16 w-full">
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 text-sm text-gray-400 bg-white/5 backdrop-blur-sm rounded-full px-6 py-3 border border-white/10" data-testid="trust-indicator">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>{config.hero.trustText || 'Trusted by amazing developers.'}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
