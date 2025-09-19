import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';
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
    { href: '/projects', label: 'Projects' },
    { href: '/premium', label: 'Premium' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <div className="scroll-indicator" style={{ width: `${scrollProgress}%` }} />
      <header className="fixed inset-x-0 top-0 z-50 p-4">
        <div className="mx-auto max-w-7xl">
          <nav className="flex items-center justify-between p-2 lg:px-6 rounded-full bg-black/20 backdrop-blur-lg border border-white/10 relative" aria-label="Global">
            <div className="flex lg:flex-1">
              <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
                <span className="text-xl font-bold text-white" data-testid="logo">
                  {config?.developer.displayName || 'Snipahh'}
                </span>
              </Link>
            </div>
            
            <div className="hidden lg:flex lg:gap-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-gray-300 hover:text-white text-sm font-semibold leading-6 transition-colors cursor-pointer ${
                    location.startsWith(link.href) && link.href !== '/' ? 'text-white' : location === link.href
                      ? 'text-white'
                      : ''
                  }`}
                  data-testid={`nav-${link.label.toLowerCase().trim().replace(/\s+/g, '-')}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            
            
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-300 hover:text-white"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle mobile menu"
                data-testid="mobile-menu-button"
              >
                <span className="sr-only">Open main menu</span>
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
            
            {mobileMenuOpen && (
              <div className="lg:hidden absolute top-full left-0 right-0 mt-2 mx-4">
                <div className="rounded-2xl bg-black/20 backdrop-blur-lg border border-white/10 p-4">
                  <div className="space-y-2">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={`block px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors ${
                          location.startsWith(link.href) && link.href !== '/' ? 'text-white bg-white/10' : location === link.href
                            ? 'text-white bg-white/10'
                            : ''
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                        data-testid={`mobile-nav-${link.label.toLowerCase().trim().replace(/\s+/g, '-')}`}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </nav>
        </div>
      </header>
    </>
  );
}
