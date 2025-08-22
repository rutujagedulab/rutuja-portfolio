import { useEffect, useRef } from 'react';
import { Database, Globe } from 'lucide-react';

const skills = [
  {
    name: 'Frontend',
    icon: Globe,
    skills: [
      'Angular',
      'TypeScript',
      'CSS',
      'JavaScript',
      'HTML5',
      'PrimeNG',
      'CSS3',
    ],
    progress: 95,
  },
  {
    name: 'Backend',
    icon: Database,
    skills: ['Node.js', 'MySQL', 'TypeORM', 'Express.js', 'REST APIs', 'Git'],
    progress: 90,
  },
];

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.progress-bar');
            progressBars.forEach((bar, index) => {
              setTimeout(() => {
                bar.classList.add('animate-progress');
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-primary bg-clip-text text-transparent">
              About
            </span>{' '}
            Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate full stack developer with expertise in modern web
            technologies. I love creating efficient, scalable solutions and
            bringing innovative ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed">
              With 2.4 years of professional experience in software development,
              I've been working at Edulab, a leading educational technology
              company, where I've contributed to building innovative learning
              solutions that impact thousands of students and educators.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              At Edulab, I specialize in full stack development within the
              educational domain, creating user-centric applications that solve
              real-world learning challenges. I'm passionate about leveraging
              technology to enhance educational experiences and staying
              up-to-date with both educational trends and industry best
              practices.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                'Angular',
                'Node.js',
                'JavaScript',
                'TypeScript',
                'Postman',
                'git',
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 glass-card rounded-full text-sm font-medium text-primary border border-primary/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div key={skill.name} className="glass-card p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <Icon className="w-8 h-8 text-primary mr-4" />
                    <div>
                      <h4 className="text-xl font-semibold text-foreground">
                        {skill.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {skill.skills.join(' • ')}
                      </p>
                    </div>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className={`progress-bar h-2 gradient-primary rounded-full transition-all duration-1000 ease-out`}
                      style={{
                        width: '0%',
                      }}
                      data-progress={skill.progress}
                    />
                  </div>
                  <span className="text-sm text-muted-foreground mt-2 block">
                    {skill.progress}% Proficiency
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
