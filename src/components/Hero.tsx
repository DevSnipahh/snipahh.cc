import * as React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'wouter';
import { useConfig } from '@/hooks/useConfig';

export default function Hero() {
  const { config } = useConfig();

  if (!config) return null;

  return (
    <section className="relative isolate px-6 pt-14 lg:px-8 min-h-screen flex items-center justify-center">
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
      </div>
      
      <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl leading-tight">
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
          
          <p className="mt-6 text-lg leading-8 text-gray-300 max-w-2xl mx-auto">
            {config.hero.subtitle}
          </p>
        
          <div className="mt-10 flex items-center justify-center gap-x-4">
            <Link 
              href={config.hero.primaryUrl || '/services'}
              className="btn-gradient text-sm font-semibold leading-6 text-white px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300"
              data-testid="button-primary-action"
            >
              {config.hero.primaryButton}
            </Link>
            <Link 
              href={config.hero.secondaryUrl || '/projects'}
              className="text-sm font-semibold leading-6 text-gray-300 hover:text-white transition-colors flex items-center gap-2"
              data-testid="button-secondary-action"
            >
              {config.hero.secondaryButton}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
      
      
    </section>
  );
}
