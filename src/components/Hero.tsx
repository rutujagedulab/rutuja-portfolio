import { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-bg.jpg';
import profileImage from '@/assets/profile-placeholder1.jpg';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen pt-16 relative flex items-center justify-center overflow-hidden"
      style={{
        background: `linear-gradient(135deg, hsl(220 27% 4% / 0.9), hsl(270 50% 8% / 0.8)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Animated background elements */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, hsl(190 100% 50% / 0.1) 0%, transparent 50%)`,
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-primary/30 rounded-full animate-float`}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="animate-slide-up">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-foreground">Hi, I'm </span>
              <span className="gradient-primary bg-clip-text text-transparent">
                Rutuja Gherade
              </span>
              <br />
              <span className="text-foreground">Full Stack Developer</span>
            </h1>
          </div>

          {/* Profile Image - positioned after title */}
          <div
            className="animate-slide-up mb-6 sm:mb-8"
            style={{ animationDelay: '0.1s' }}
          >
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 mx-auto mb-4 sm:mb-6">
              <div className="absolute inset-0 gradient-primary rounded-full p-1 animate-glow">
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-full h-full rounded-full object-cover glass-card"
                />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-green-500 rounded-full border-2 sm:border-3 border-background animate-pulse" />
            </div>
          </div>

          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Crafting digital experiences with modern technologies.
              <br />
              Turning ideas into scalable, beautiful applications.
            </p>
          </div>

          <div
            className="animate-slide-up flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12"
            style={{ animationDelay: '0.4s' }}
          >
            <Button
              size="lg"
              className="gradient-primary text-primary-foreground hover:opacity-90 transition-smooth glow-primary text-base sm:text-lg px-6 sm:px-8 py-2.5 sm:py-3 w-full sm:w-auto"
              onClick={() =>
                document
                  .getElementById('projects')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary/50 text-primary hover:bg-primary/10 transition-smooth text-base sm:text-lg px-6 sm:px-8 py-2.5 sm:py-3 w-full sm:w-auto"
              onClick={() =>
                document
                  .getElementById('contact')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              Get In Touch
            </Button>
          </div>

          {/* <div className="animate-slide-up flex justify-center space-x-4 sm:space-x-6" style={{ animationDelay: '0.6s' }}>
            {[
              { icon: Github, href: '#', name: 'GitHub' },
              { icon: Linkedin, href: '#', name: 'LinkedIn' },
              { icon: Mail, href: '#', name: 'Email' }
            ].map(({ icon: Icon, href, name }) => (
              <a
                key={name}
                href={href}
                className="p-2.5 sm:p-3 glass-card rounded-full hover:glow-subtle transition-smooth group"
                aria-label={name}
              >
                <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-muted-foreground group-hover:text-primary transition-smooth" />
              </a>
            ))}
          </div> */}
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20"
      >
        <ChevronDown className="w-8 h-8 text-primary" />
      </button>
    </section>
  );
};

export default Hero;
