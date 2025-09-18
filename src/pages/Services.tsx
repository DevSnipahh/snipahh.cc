import Navigation from '@/components/Navigation';
import ServicesSection from '@/components/ServicesSection';
import Footer from '@/components/Footer';

export default function Services() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">Development <span className="gradient-text">Services</span></h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional Roblox development services tailored to your specific needs. From simple scripts to complete game development, I provide high-quality solutions with ongoing support.
            </p>
          </div>
        </div>
        <ServicesSection />
      </div>
      <Footer />
    </div>
  );
}
