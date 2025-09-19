import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Mail, 
  MapPin, 
  Clock, 
  Shield, 
  Lock, 
  CheckCircle,
  Send,
  Github,
  Linkedin,
  Twitter
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    projectType: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '', projectType: '' });
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const socialLinks = [
    { name: 'GitHub', icon: Github, url: '#', color: 'text-foreground' },
    { name: 'LinkedIn', icon: Linkedin, url: '#', color: 'text-neon-blue' },
    { name: 'Twitter', icon: Twitter, url: '#', color: 'text-neon-cyan' },
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@cyberdev.security',
      href: 'mailto:hello@cyberdev.security'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'San Francisco, CA',
      href: null
    },
    {
      icon: Clock,
      label: 'Response Time',
      value: 'Within 24 hours',
      href: null
    }
  ];

  const projectTypes = [
    'Security Assessment',
    'Penetration Testing',
    'Web Application Development',
    'Security Consulting',
    'Code Review',
    'Other'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            <span className="text-gradient">Get In Touch</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground animate-fade-in-up animation-delay-200">
            Let's build something <span className="text-primary font-semibold">secure</span> together
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="cyber-card p-6 animate-fade-in-left" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm text-muted-foreground">{info.label}</h3>
                      {info.href ? (
                        <a href={info.href} className="text-primary hover:neon-text transition-all">
                          {info.value}
                        </a>
                      ) : (
                        <p className="font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Security Notice */}
            <Card className="cyber-card p-6">
              <div className="flex items-start space-x-4">
                <Shield className="w-8 h-8 text-primary flex-shrink-0 animate-pulse-neon" />
                <div>
                  <h3 className="font-semibold mb-2 text-primary">Secure Communication</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    All communications are encrypted and handled with military-grade security protocols.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="text-xs">
                      <Lock className="w-3 h-3 mr-1" />
                      End-to-End Encrypted
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      GDPR Compliant
                    </Badge>
                  </div>
                </div>
              </div>
            </Card>

            {/* Social Links */}
            <Card className="cyber-card p-6">
              <h3 className="font-semibold mb-4">Connect with me</h3>
              <div className="space-y-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-primary/10 transition-colors group"
                  >
                    <social.icon className={`w-5 h-5 ${social.color} group-hover:animate-pulse`} />
                    <span className="group-hover:text-primary transition-colors">{social.name}</span>
                  </a>
                ))}
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="cyber-card p-8">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold mb-2">
                      <span className="text-gradient">Start a Project</span>
                    </h2>
                    <p className="text-muted-foreground">
                      Tell me about your project and security requirements
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Project Type</label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      >
                        <option value="">Select a service</option>
                        {projectTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Subject *</label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                        placeholder="Project inquiry"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                      placeholder="Tell me about your project requirements, timeline, and any specific security concerns..."
                    />
                  </div>

                  <div className="flex items-start space-x-3 p-4 bg-primary/10 rounded-lg border border-primary/20">
                    <Lock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <p className="text-primary font-medium mb-1">Your data is secure</p>
                      <p className="text-muted-foreground">
                        This form uses end-to-end encryption. Your information is processed securely and never shared with third parties.
                      </p>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full neon-border bg-primary/20 text-primary hover:bg-primary hover:text-primary-foreground font-semibold py-3"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
                        Encrypting & Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Secure Message
                      </>
                    )}
                  </Button>
                </form>
              ) : (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-neon-green mx-auto mb-6 animate-pulse" />
                  <h3 className="text-2xl font-bold mb-4 text-neon-green">Message Sent Successfully!</h3>
                  <p className="text-muted-foreground mb-6">
                    Your message has been encrypted and delivered securely. I'll get back to you within 24 hours.
                  </p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                    className="hover:neon-border"
                  >
                    Send Another Message
                  </Button>
                </div>
              )}
            </Card>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="text-gradient">Frequently Asked Questions</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                q: "What types of projects do you work on?",
                a: "I specialize in cybersecurity assessments, secure web development, penetration testing, and security consulting for businesses of all sizes."
              },
              {
                q: "How quickly can you start a project?",
                a: "Typically within 1-2 weeks depending on project scope and current workload. Emergency security assessments can be prioritized."
              },
              {
                q: "Do you work with remote teams?",
                a: "Yes! I work with distributed teams globally and use secure communication channels for all project collaboration."
              },
              {
                q: "What are your security certifications?",
                a: "I hold CISSP, CEH, OSCP, and other industry certifications, with continuous education to stay current with threats."
              }
            ].map((faq, index) => (
              <Card key={index} className="cyber-card p-6">
                <h3 className="font-semibold mb-2 text-primary">{faq.q}</h3>
                <p className="text-sm text-muted-foreground">{faq.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
