import Navigation from '@/components/Navigation';
import ProjectsShowcase from '@/components/ProjectsShowcase';
import Footer from '@/components/Footer';

export default function Projects() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">My <span className="gradient-text">Projects</span></h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore my portfolio of Roblox games and development projects. Each project showcases different aspects of game development, from simple scripts to complex multiplayer systems.
            </p>
          </div>
        </div>
        <ProjectsShowcase />
      </div>
      <Footer />
    </div>
  );
}
