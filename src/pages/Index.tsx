import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 bg-muted/50 border-t border-border/10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2024 Full Stack Developer. Built with React, TypeScript & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
