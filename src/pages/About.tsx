import Navigation from '@/components/Navigation';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">About <span className="gradient-text">Me</span></h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Learn more about my background, skills, and passion for Roblox game development. I specialize in creating engaging, high-performance games using Lua, LuaU, and Python.
            </p>
          </div>
        </div>
        <AboutSection />
      </div>
      <Footer />
    </div>
  );
}
