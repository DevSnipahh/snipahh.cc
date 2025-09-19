import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useConfig } from '@/hooks/useConfig';
import { ExternalLink, MessageCircle } from 'lucide-react';
import { SiDiscord, SiGithub, SiRoblox } from 'react-icons/si';

const socialIcons = {
  discord: SiDiscord,
  github: SiGithub, 
  twitter: MessageCircle,
  roblox: SiRoblox
};

export default function Contact() {
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

  const contact = config?.contact;

  const socialLinks = [
    {
      name: config?.ui?.pages?.contact?.socialLabels?.discord || 'Discord',
      value: contact?.discord || '',
      icon: socialIcons.discord,
      color: 'from-indigo-500 to-purple-600',
      isUrl: false
    },
    {
      name: config?.ui?.pages?.contact?.socialLabels?.github || 'GitHub',
      value: contact?.github || '',
      icon: socialIcons.github,
      color: 'from-gray-700 to-gray-900',
      isUrl: true
    },
    {
      name: config?.ui?.pages?.contact?.socialLabels?.twitter || 'Twitter',
      value: contact?.twitter || '',
      icon: socialIcons.twitter,
      color: 'from-blue-400 to-blue-600',
      isUrl: true
    },
    {
      name: config?.ui?.pages?.contact?.socialLabels?.roblox || 'Roblox',
      value: contact?.roblox || '',
      icon: socialIcons.roblox,
      color: 'from-green-500 to-emerald-600',
      isUrl: true
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">{config?.ui?.pages?.contact?.title?.replace(config?.ui?.pages?.contact?.titleHighlight || '', '') || 'Get in'} <span className="gradient-text">{config?.ui?.pages?.contact?.titleHighlight || 'Touch'}</span></h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {config?.ui?.pages?.contact?.description || 'Ready to start your next project? Reach out through any of these platforms.'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              
              return (
                <div
                  key={social.name}
                  className="glass-card p-6 rounded-xl hover:scale-105 transition-all duration-300 group cursor-pointer"
                  data-testid={`social-card-${social.name.toLowerCase()}`}
                >
                  <div className="text-center">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${social.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-lg font-semibold text-white mb-2">{social.name}</h3>
                    
                    <div className="text-sm text-gray-300 mb-4 break-all">
                      {social.isUrl ? (
                        <span>{social.value.replace('https://', '').replace('http://', '')}</span>
                      ) : (
                        <span>@{social.value}</span>
                      )}
                    </div>

                    {social.isUrl ? (
                      <a
                        href={social.value}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                        data-testid={`social-link-${social.name.toLowerCase()}`}
                      >
                        <span>{config?.ui?.pages?.contact?.socialLabels?.visitProfile || 'Visit Profile'}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <div className="inline-flex items-center gap-2 text-sm text-gray-400">
                        <MessageCircle className="w-3 h-3" />
                        <span>{config?.ui?.pages?.contact?.socialLabels?.sendMessage || 'Send Message'}</span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <div className="glass-card p-8 rounded-xl max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-4">{config?.ui?.pages?.contact?.projectInquiries?.title || 'Project Inquiries'}</h2>
              <p className="text-gray-300 leading-relaxed">
                {config?.ui?.pages?.contact?.projectInquiries?.description || 'Looking for custom development? Drop me a message and let\'s discuss your project.'}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}