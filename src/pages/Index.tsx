import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Code2, 
  Shield, 
  ArrowDown, 
  Terminal, 
  Lock,
  Zap,
  Target,
  ChevronRight,
  Play
} from 'lucide-react';

const journeySteps = [
  {
    id: 'start',
    title: 'The Beginning',
    subtitle: 'First Line of Code',
    year: '2018',
    icon: Code2,
    content: 'It all started with a simple "Hello World". What began as curiosity about how websites work quickly became an obsession with clean, efficient code.',
    achievement: 'First web application deployed',
    color: 'neon-green'
  },
  {
    id: 'growth',
    title: 'Evolution',
    subtitle: 'Full-Stack Mastery',
    year: '2019-2020',
    icon: Zap,
    content: 'Mastering both frontend and backend technologies, building scalable applications while discovering the critical importance of secure coding practices.',
    achievement: '25+ production applications built',
    color: 'neon-cyan'
  },
  {
    id: 'security',
    title: 'The Pivot',
    subtitle: 'Security Awakening',
    year: '2021',
    icon: Lock,
    content: 'A security breach at a client site changed everything. I realized that building software isn\'t enough—it must be fortress-strong against attackers.',
    achievement: 'First penetration test conducted',
    color: 'neon-red'
  },
  {
    id: 'expertise',
    title: 'Specialization',
    subtitle: 'Cyber Guardian',
    year: '2022-Present',
    icon: Shield,
    content: 'Now I bridge development and security, creating applications that don\'t just work—they defend against sophisticated cyber threats.',
    achievement: '$50M+ in assets protected',
    color: 'primary'
  }
];

const stats = [
  { label: 'Projects Secured', value: '100+', icon: Shield },
  { label: 'Threats Mitigated', value: '1000+', icon: Target },
  { label: 'Years Experience', value: '6+', icon: Terminal },
  { label: 'Assets Protected', value: '$50M+', icon: Lock }
];

export default function Index() {
  const [activeStep, setActiveStep] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const journeyRef = useRef<HTMLElement>(null);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrolled / maxScroll) * 100;
      setScrollProgress(progress);

      // Update active journey step based on scroll position
      if (journeyRef.current) {
        const journeyTop = journeyRef.current.offsetTop;
        const journeyHeight = journeyRef.current.offsetHeight;
        const stepHeight = journeyHeight / journeySteps.length;
        
        if (scrolled >= journeyTop) {
          const step = Math.min(
            Math.floor((scrolled - journeyTop) / stepHeight),
            journeySteps.length - 1
          );
          setActiveStep(step);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToJourney = () => {
    journeyRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Scroll Progress Bar */}
      <div 
        className="scroll-progress"
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
      />

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-8">
            <Badge variant="outline" className="neon-border px-4 py-2 font-mono animate-pulse-neon">
              <Terminal className="w-4 h-4 mr-2" />
              CyberDev Portfolio v2.0
            </Badge>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in-up">
            <span className="text-gradient glitch" data-text="Securing">Securing</span>
            <br />
            <span className="text-foreground">the Digital</span>
            <br />
            <span className="text-gradient">Future</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in-up animation-delay-300">
            From <span className="text-primary font-semibold">programmer</span> to <span className="text-primary font-semibold">cybersecurity expert</span> — 
            building applications that don't just work, they defend.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up animation-delay-500">
            <Button 
              onClick={scrollToJourney}
              className="neon-border bg-primary/20 text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-4 text-lg"
            >
              <Play className="w-5 h-5 mr-2" />
              Start Journey
            </Button>
            <Button 
              variant="outline" 
              className="hover:neon-border font-semibold px-8 py-4 text-lg"
              asChild
            >
              <Link to="/portfolio">
                View Projects
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>

          <div className="animate-bounce cursor-pointer" onClick={scrollToJourney}>
            <ArrowDown className="w-8 h-8 text-primary mx-auto" />
          </div>
        </div>
      </section>

      {/* Journey Narrative */}
      <section ref={journeyRef} className="relative py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">
              <span className="text-gradient">The Journey</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Every expert was once a beginner. This is my story.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-neon-green via-neon-cyan via-neon-red to-primary h-full opacity-30" />
            
            {journeySteps.map((step, index) => (
              <div 
                key={step.id}
                className={`relative mb-32 transition-all duration-1000 ${
                  activeStep >= index ? 'opacity-100' : 'opacity-30'
                }`}
              >
                <div className={`flex flex-col lg:flex-row items-center gap-12 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}>
                  {/* Content */}
                  <div className="flex-1">
                    <Card className={`cyber-card p-8 ${
                      activeStep >= index ? 'neon-border' : ''
                    }`}>
                      <div className="flex items-center gap-4 mb-4">
                        <Badge variant="outline" className={`font-mono text-${step.color}`}>
                          {step.year}
                        </Badge>
                        <Badge variant="secondary">
                          {step.achievement}
                        </Badge>
                      </div>
                      <h3 className="text-3xl font-bold mb-2">{step.title}</h3>
                      <h4 className={`text-xl text-${step.color} mb-4 font-semibold`}>
                        {step.subtitle}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.content}
                      </p>
                    </Card>
                  </div>

                  {/* Timeline Icon */}
                  <div className="relative flex-shrink-0">
                    <div className={`w-20 h-20 rounded-full bg-background border-4 border-${step.color} flex items-center justify-center transition-all duration-500 ${
                      activeStep >= index ? 'animate-pulse-neon scale-110' : ''
                    }`}>
                      <step.icon className={`w-8 h-8 text-${step.color}`} />
                    </div>
                  </div>

                  {/* Visual Element */}
                  <div className="flex-1 hidden lg:block">
                    <div className={`w-full h-64 rounded-lg bg-gradient-to-br from-${step.color}/20 to-transparent border border-${step.color}/30 flex items-center justify-center`}>
                      <step.icon className={`w-24 h-24 text-${step.color} opacity-20`} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="text-gradient">Impact by Numbers</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card 
                key={index} 
                className="cyber-card p-6 text-center animate-fade-in-up hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <stat.icon className="w-12 h-12 text-primary mx-auto mb-4 animate-float" />
                <div className="text-3xl font-bold font-mono text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="cyber-card p-12">
            <Shield className="w-20 h-20 text-primary mx-auto mb-8 animate-pulse-neon" />
            <h2 className="text-4xl font-bold mb-6">
              Ready to Secure Your <span className="text-gradient">Digital Assets</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's build applications that stand strong against cyber threats while delivering exceptional user experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                className="neon-border bg-primary/20 text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-4"
                asChild
              >
                <Link to="/portfolio">
                  <Target className="w-5 h-5 mr-2" />
                  View My Work
                </Link>
              </Button>
              <Button 
                variant="outline" 
                className="hover:neon-border font-semibold px-8 py-4"
                asChild
              >
                <Link to="/contact">
                  <Shield className="w-5 h-5 mr-2" />
                  Secure My Project
                </Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};
