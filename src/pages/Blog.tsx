import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Calendar, 
  Clock, 
  ArrowRight, 
  Shield, 
  Code2, 
  Target, 
  Zap,
  Eye,
  MessageCircle 
} from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'The Evolution of Cyber Threats in 2024',
    excerpt: 'An in-depth analysis of emerging cybersecurity threats and how organizations can prepare for the next generation of attacks.',
    category: 'Cybersecurity',
    date: '2024-01-15',
    readTime: '8 min read',
    views: 2847,
    comments: 23,
    featured: true,
    icon: Shield,
    tags: ['Threat Intelligence', 'Risk Assessment', 'Security Strategy']
  },
  {
    id: 2,
    title: 'Building Secure APIs: A Developer\'s Guide',
    excerpt: 'Learn how to implement robust security measures in your APIs, from authentication to rate limiting and beyond.',
    category: 'Development',
    date: '2024-01-10',
    readTime: '12 min read',
    views: 1956,
    comments: 18,
    featured: true,
    icon: Code2,
    tags: ['API Security', 'Authentication', 'Best Practices']
  },
  {
    id: 3,
    title: 'Zero-Trust Architecture: Implementation Roadmap',
    excerpt: 'A comprehensive guide to implementing zero-trust principles in your organization, with real-world case studies.',
    category: 'Architecture',
    date: '2024-01-05',
    readTime: '15 min read',
    views: 3124,
    comments: 31,
    featured: false,
    icon: Target,
    tags: ['Zero Trust', 'Network Security', 'Implementation']
  },
  {
    id: 4,
    title: 'Automating Security Testing with CI/CD',
    excerpt: 'How to integrate security testing into your development pipeline for continuous security validation.',
    category: 'DevSecOps',
    date: '2023-12-28',
    readTime: '10 min read',
    views: 1687,
    comments: 14,
    featured: false,
    icon: Zap,
    tags: ['DevSecOps', 'Automation', 'CI/CD', 'Testing']
  },
  {
    id: 5,
    title: 'Machine Learning in Cybersecurity: Practical Applications',
    excerpt: 'Exploring how AI and ML are revolutionizing threat detection and incident response in modern security operations.',
    category: 'AI Security',
    date: '2023-12-20',
    readTime: '14 min read',
    views: 2341,
    comments: 27,
    featured: false,
    icon: Shield,
    tags: ['Machine Learning', 'AI', 'Threat Detection']
  },
  {
    id: 6,
    title: 'Secure Code Review: Finding Hidden Vulnerabilities',
    excerpt: 'Advanced techniques for identifying security flaws in code that automated tools might miss.',
    category: 'Code Security',
    date: '2023-12-15',
    readTime: '9 min read',
    views: 1543,
    comments: 12,
    featured: false,
    icon: Code2,
    tags: ['Code Review', 'SAST', 'Vulnerability Assessment']
  }
];

const categories = ['All', 'Cybersecurity', 'Development', 'Architecture', 'DevSecOps', 'AI Security', 'Code Security'];

export default function Blog() {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Cybersecurity': 'bg-neon-red/20 text-neon-red border-neon-red/30',
      'Development': 'bg-neon-green/20 text-neon-green border-neon-green/30',
      'Architecture': 'bg-neon-blue/20 text-neon-blue border-neon-blue/30',
      'DevSecOps': 'bg-primary/20 text-primary border-primary/30',
      'AI Security': 'bg-accent/20 text-accent border-accent/30',
      'Code Security': 'bg-neon-cyan/20 text-neon-cyan border-neon-cyan/30',
    };
    return colors[category] || 'bg-muted text-muted-foreground';
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
              <span className="text-gradient">Cyber Blog</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground animate-fade-in-up animation-delay-200">
              Insights from the frontlines of <span className="text-primary font-semibold">cybersecurity</span>
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant="outline"
                className="font-mono hover:neon-border hover:bg-primary/10"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="text-gradient">Featured Articles</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {featuredPosts.map((post, index) => (
              <Card 
                key={post.id} 
                className="cyber-card group overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="p-8">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                        <post.icon className="w-6 h-6 text-primary" />
                      </div>
                      <Badge 
                        variant="outline" 
                        className={`text-xs font-mono ${getCategoryColor(post.category)}`}
                      >
                        {post.category}
                      </Badge>
                    </div>
                    <Badge variant="secondary" className="bg-primary/20 text-primary">
                      Featured
                    </Badge>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{post.views.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="w-4 h-4" />
                        <span>{post.comments}</span>
                      </div>
                    </div>
                  </div>

                  {/* Read More Button */}
                  <Button variant="outline" className="w-full group hover:neon-border">
                    Read Full Article
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Regular Posts */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="text-gradient">Recent Posts</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <Card 
                key={post.id} 
                className="cyber-card group overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                      <post.icon className="w-5 h-5 text-primary" />
                    </div>
                    <Badge 
                      variant="outline" 
                      className={`text-xs font-mono ${getCategoryColor(post.category)}`}
                    >
                      {post.category}
                    </Badge>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {post.tags.length > 2 && (
                      <Badge variant="secondary" className="text-xs">
                        +{post.tags.length - 2}
                      </Badge>
                    )}
                  </div>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <div className="flex items-center space-x-1">
                      <Eye className="w-3 h-3" />
                      <span>{post.views.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageCircle className="w-3 h-3" />
                      <span>{post.comments}</span>
                    </div>
                  </div>

                  {/* Read More Button */}
                  <Button size="sm" variant="outline" className="w-full text-xs">
                    Read More
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="cyber-card p-8 text-center">
            <Shield className="w-16 h-16 text-primary mx-auto mb-6 animate-pulse-neon" />
            <h2 className="text-3xl font-bold mb-4">
              Stay <span className="text-gradient">Secure</span> & Informed
            </h2>
            <p className="text-muted-foreground mb-6">
              Get the latest cybersecurity insights and threat intelligence delivered to your inbox weekly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="neon-border bg-primary/20 text-primary hover:bg-primary hover:text-primary-foreground">
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              🔒 Your email is encrypted and never shared. Unsubscribe anytime.
            </p>
          </Card>
        </div>
      </section>
    </div>
  );
}
