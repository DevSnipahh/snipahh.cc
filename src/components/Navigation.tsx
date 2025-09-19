import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useConfig } from '@/hooks/useConfig';

export default function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { config } = useConfig();

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      setScrollProgress(Math.min(scrolled, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/scripts', label: 'Scripts' },
    { href: '/premium', label: 'Premium' },
    { href: '/custom', label: 'Custom Development' },
    { href: '/support', label: 'Support' },
  ];

  return (
    <>
      <div className="scroll-indicator" style={{ width: `${scrollProgress}%` }} />
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Link href="/">
                <h1 className="text-2xl font-bold gradient-text cursor-pointer" data-testid="logo">
                  {config?.developer.displayName || 'Snipahh'}
                </h1>
              </Link>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <div className="flex space-x-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`transition-colors cursor-pointer ${
                      location.startsWith(link.href) && link.href !== '/' ? 'text-primary' : location === link.href
                        ? 'text-primary'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                    data-testid={`nav-${link.label.toLowerCase().trim().replace(/\s+/g, '-')}`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <Link href="/login">
                <Button
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6"
                  data-testid="button-login"
                >
                  Login
                </Button>
              </Link>
            </div>
            
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-muted-foreground hover:text-foreground"
                aria-label="Toggle mobile menu"
                data-testid="mobile-menu-button"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        
        {mobileMenuOpen && (
          <div className="md:hidden bg-card border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-3 py-2 transition-colors ${
                    location.startsWith(link.href) && link.href !== '/' ? 'text-primary' : location === link.href
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`mobile-nav-${link.label.toLowerCase().trim().replace(/\s+/g, '-')}`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Link href="/login">
                  <Button
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                    data-testid="mobile-button-login"
                  >
                    Login
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
