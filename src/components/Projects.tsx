import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Learning Management System',
    description:
      'Comprehensive LMS platform with course management, student progress tracking, interactive quizzes, and video streaming capabilities.',
    tech: [
      'Angular',
      'Node.js',
      'MySQL',
      'Sequelize',
      'Core-UI',
      'Biometric Attendance',
    ],
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&crop=center',
    github: '#',
    live: '#',
  },
  {
    title: 'Certification Management System',
    description:
      'Digital certification platform for issuing, verifying, and managing professional certificates with blockchain integration.',
    tech: [
      'Angular',
      'Node.js',
      'MySQL',
      'TypeORM',
      'PrimeNG',
      'Payment Gateway',
    ],
    image:
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop&crop=center',
    github: '#',
    live: '#',
  },
  {
    title: 'ERP Alumni System',
    description:
      'Enterprise resource planning system for alumni management with networking features, event management, and donation tracking.',
    tech: ['Angular', 'Node.js', 'Typescript', 'MySQL', 'TypeORM', 'PrimeNG'],
    image:
      'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop&crop=center',
    github: '#',
    live: '#',
  },
  {
    title: 'E-Commerce Platform',
    description:
      'Full-featured e-commerce platform with advanced inventory management, multi-vendor support, and analytics dashboard.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center',
    github: '#',
    live: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured{' '}
            <span className="gradient-primary bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            experience in full stack development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group glass-card rounded-xl overflow-hidden hover:glow-subtle transition-smooth animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.github}
                    className="p-2 glass-card rounded-full hover:glow-subtle transition-smooth"
                    aria-label="View source code"
                  >
                    <Github className="w-4 h-4 text-foreground" />
                  </a>
                  <a
                    href={project.live}
                    className="p-2 glass-card rounded-full hover:glow-subtle transition-smooth"
                    aria-label="View live project"
                  >
                    <ExternalLink className="w-4 h-4 text-foreground" />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-smooth">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  {/* <Button
                    variant="outline"
                    size="sm"
                    className="border-primary/50 text-primary hover:bg-primary/10 transition-smooth"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="gradient-primary text-primary-foreground hover:opacity-90 transition-smooth"
                    asChild
                  >
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
