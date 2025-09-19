import { useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code2, Shield, Zap, Target } from 'lucide-react';

const skills = [
  { name: 'Python', level: 95, color: 'neon-cyan' },
  { name: 'JavaScript/TypeScript', level: 90, color: 'neon-green' },
  { name: 'Cybersecurity', level: 85, color: 'neon-red' },
  { name: 'Penetration Testing', level: 80, color: 'neon-blue' },
  { name: 'Network Security', level: 88, color: 'neon-cyan' },
  { name: 'React/Node.js', level: 92, color: 'neon-green' },
];

const experiences = [
  {
    icon: Shield,
    title: 'Senior Cybersecurity Analyst',
    company: 'SecureTech Corp',
    period: '2022 - Present',
    description: 'Led penetration testing initiatives, implemented security protocols, and developed automated threat detection systems.',
    achievements: ['Reduced security incidents by 75%', 'Built AI-powered threat detection', 'Managed team of 8 specialists']
  },
  {
    icon: Code2,
    title: 'Full-Stack Developer',
    company: 'TechFlow Solutions',
    period: '2020 - 2022',
    description: 'Developed scalable web applications with focus on security and performance optimization.',
    achievements: ['Built 15+ production applications', 'Implemented zero-trust architecture', 'Reduced load times by 60%']
  },
  {
    icon: Zap,
    title: 'Junior Developer',
    company: 'StartupLab',
    period: '2018 - 2020',
    description: 'Started my journey building secure, efficient applications while learning cybersecurity fundamentals.',
    achievements: ['Shipped 25+ features', 'Learned security best practices', 'Contributed to open source']
  }
];

export default function About() {
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillBars = entry.target.querySelectorAll('.skill-progress');
            skillBars.forEach((bar, index) => {
              setTimeout(() => {
                (bar as HTMLElement).style.width = skills[index].level + '%';
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            <span className="text-gradient">About Me</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in-up animation-delay-200">
            Transforming code into <span className="text-primary font-semibold">secure</span> digital experiences
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="cyber-card p-8 mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">
              <span className="text-gradient">My Journey</span>
            </h2>
            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p className="mb-6">
                What started as curiosity about how websites work evolved into a passion for both creating and protecting digital systems. My journey from programmer to cybersecurity expert has been driven by a simple belief: <span className="text-primary font-semibold">technology should empower, not endanger</span>.
              </p>
              <p className="mb-6">
                After years of building applications, I realized that creating secure code wasn't just about following best practices—it required understanding how attackers think. This led me to dive deep into cybersecurity, earning certifications and leading security initiatives that protect millions of users.
              </p>
              <p>
                Today, I bridge the gap between development and security, creating robust applications while helping organizations build their cyber resilience. Every line of code I write is crafted with both functionality and security in mind.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" ref={skillsRef}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="text-gradient">Technical Arsenal</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={skill.name} className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-lg">{skill.name}</span>
                  <Badge variant="secondary" className="font-mono">
                    {skill.level}%
                  </Badge>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress"
                    style={{ width: '0%', transitionDelay: `${index * 100}ms` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="text-gradient">Professional Journey</span>
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="cyber-card p-6 hover:scale-[1.02] transition-transform duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                      <exp.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <Badge variant="outline" className="font-mono w-fit">
                        {exp.period}
                      </Badge>
                    </div>
                    <p className="text-primary font-medium mb-3">{exp.company}</p>
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.achievements.map((achievement, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {achievement}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="cyber-card p-8">
            <Target className="w-16 h-16 text-primary mx-auto mb-6 animate-float" />
            <h2 className="text-3xl font-bold mb-4">
              Ready to Build Something <span className="text-gradient">Secure</span>?
            </h2>
            <p className="text-muted-foreground mb-6">
              Let's create applications that are not just functional, but fortress-strong.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="neon-border px-6 py-3 rounded-lg font-semibold hover:bg-primary/10 transition-all">
                View My Work
              </button>
              <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all">
                Get In Touch
              </button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
