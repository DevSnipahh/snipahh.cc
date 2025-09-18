import { Code, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useConfig } from '@/hooks/useConfig';

export default function Hero() {
  const { config } = useConfig();

  if (!config) return null;

  return (
    <section className="pt-20 pb-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-8 floating">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-secondary p-1">
            <div className="w-full h-full bg-card rounded-full flex items-center justify-center">
              <Code className="text-4xl text-primary" size={48} />
            </div>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          {config.hero.title.split(' ').slice(0, -2).join(' ')}{' '}
          <span className="gradient-text">
            {config.hero.title.split(' ').slice(-2).join(' ')}
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto">
          {config.hero.subtitle}
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-16">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold"
            data-testid="button-view-work"
          >
            {config.hero.primaryButton}
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-border hover:bg-muted text-foreground px-8 py-4 text-lg font-semibold"
            data-testid="button-contact"
          >
            {config.hero.secondaryButton}
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
}
