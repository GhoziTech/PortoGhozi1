import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Shield, 
  Globe, 
  Database, 
  Lock, 
  Network, 
  ExternalLink, 
  Github,
  Award,
  Zap
} from 'lucide-react';

const categories = ['All', 'Cybersecurity', 'Web Development', 'Network Security', 'Research'];

const projects = [
  {
    id: 1,
    title: 'Advanced Threat Detection System',
    category: 'Cybersecurity',
    description: 'AI-powered system that detects and mitigates sophisticated cyber threats in real-time using machine learning algorithms.',
    image: '/api/placeholder/600/400',
    tech: ['Python', 'TensorFlow', 'Docker', 'Elasticsearch', 'Redis'],
    features: ['Real-time threat analysis', 'ML-based detection', 'Automated response', 'Custom alerting'],
    status: 'Production',
    icon: Shield,
    link: '#',
    github: '#',
    impact: '75% reduction in false positives'
  },
  {
    id: 2,
    title: 'Secure E-Commerce Platform',
    category: 'Web Development',
    description: 'Full-stack e-commerce solution with military-grade security, featuring encrypted transactions and fraud detection.',
    image: '/api/placeholder/600/400',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
    features: ['End-to-end encryption', 'Fraud detection', 'PCI compliance', 'Real-time analytics'],
    status: 'Live',
    icon: Globe,
    link: '#',
    github: '#',
    impact: '10k+ secure transactions'
  },
  {
    id: 3,
    title: 'Network Vulnerability Scanner',
    category: 'Network Security',
    description: 'Automated network scanning tool that identifies vulnerabilities and provides remediation recommendations.',
    image: '/api/placeholder/600/400',
    tech: ['Python', 'Nmap', 'SQLite', 'React', 'FastAPI'],
    features: ['Automated scanning', 'CVE mapping', 'Report generation', 'Risk scoring'],
    status: 'Open Source',
    icon: Network,
    link: '#',
    github: '#',
    impact: '500+ vulnerabilities identified'
  },
  {
    id: 4,
    title: 'Encrypted Communication App',
    category: 'Cybersecurity',
    description: 'Secure messaging application with end-to-end encryption and zero-knowledge architecture.',
    image: '/api/placeholder/600/400',
    tech: ['React Native', 'Signal Protocol', 'WebRTC', 'Node.js'],
    features: ['E2E encryption', 'Forward secrecy', 'Anonymous messaging', 'Self-destructing messages'],
    status: 'Beta',
    icon: Lock,
    link: '#',
    github: '#',
    impact: 'NSA-level security'
  },
  {
    id: 5,
    title: 'Zero-Trust Database Gateway',
    category: 'Research',
    description: 'Research project implementing zero-trust principles for database access with behavioral analysis.',
    image: '/api/placeholder/600/400',
    tech: ['Go', 'PostgreSQL', 'Redis', 'Prometheus', 'Grafana'],
    features: ['Zero-trust access', 'Behavioral analysis', 'Query monitoring', 'Anomaly detection'],
    status: 'Research',
    icon: Database,
    link: '#',
    github: '#',
    impact: 'Published in IEEE Security'
  },
  {
    id: 6,
    title: 'Blockchain Security Audit Tool',
    category: 'Cybersecurity',
    description: 'Automated smart contract auditing platform that identifies vulnerabilities in blockchain applications.',
    image: '/api/placeholder/600/400',
    tech: ['Solidity', 'Web3.js', 'Python', 'React', 'IPFS'],
    features: ['Smart contract analysis', 'Vulnerability detection', 'Gas optimization', 'Audit reports'],
    status: 'Production',
    icon: Award,
    link: '#',
    github: '#',
    impact: '$10M+ in assets secured'
  }
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Production':
      case 'Live':
        return 'bg-neon-green/20 text-neon-green border-neon-green/30';
      case 'Beta':
        return 'bg-neon-blue/20 text-neon-blue border-neon-blue/30';
      case 'Research':
        return 'bg-neon-red/20 text-neon-red border-neon-red/30';
      case 'Open Source':
        return 'bg-primary/20 text-primary border-primary/30';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
              <span className="text-gradient">Portfolio</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground animate-fade-in-up animation-delay-200">
              Securing the digital world, one project at a time
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className={`font-mono ${
                  activeCategory === category 
                    ? 'neon-border bg-primary/20 text-primary' 
                    : 'hover:neon-border hover:bg-primary/10'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card 
                key={project.id} 
                className="cyber-card group overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                        <project.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <Badge 
                          variant="outline" 
                          className={`text-xs font-mono ${getStatusColor(project.status)}`}
                        >
                          {project.status}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tech.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.tech.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{project.tech.length - 3}
                      </Badge>
                    )}
                  </div>

                  {/* Features */}
                  <div className="space-y-2 mb-4">
                    {project.features.slice(0, 2).map((feature) => (
                      <div key={feature} className="flex items-center text-xs text-muted-foreground">
                        <Zap className="w-3 h-3 text-primary mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Impact */}
                  <div className="mb-6">
                    <div className="text-xs text-primary font-mono bg-primary/10 rounded px-2 py-1">
                      Impact: {project.impact}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline" className="flex-1 text-xs">
                      <ExternalLink className="w-3 h-3 mr-1" />
                      View
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 text-xs">
                      <Github className="w-3 h-3 mr-1" />
                      Code
                    </Button>
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Card className="cyber-card p-8">
            <h2 className="text-3xl font-bold text-center mb-8">
              <span className="text-gradient">Impact Metrics</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary font-mono">50+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-accent font-mono">99.9%</div>
                <div className="text-muted-foreground">Security Uptime</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-neon-red font-mono">1000+</div>
                <div className="text-muted-foreground">Threats Mitigated</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-neon-green font-mono">$50M+</div>
                <div className="text-muted-foreground">Assets Protected</div>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
