import * as React from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useConfig } from '@/hooks/useConfig';

export default function ServicesSection() {
  const { config } = useConfig();

  if (!config) return null;

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {config.services.map((service) => (
            <div 
              key={service.name}
              className={`glass-card p-8 rounded-xl ${
                service.popular ? 'border-2 border-primary relative' : ''
              }`}
              data-testid={`service-${service.name.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{service.name}</h3>
                <div className="text-4xl font-bold gradient-text mb-4">
                  {service.price}<span className="text-lg text-muted-foreground">{service.period}</span>
                </div>
              </div>
              
              <ul className="space-y-3 mb-8">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="text-primary mr-3 flex-shrink-0" size={20} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
