import { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Initialize EmailJS with your public key (replace with your actual key)
      emailjs.init('YOUR_PUBLIC_KEY');

      const result = await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Your Name', // Your name
        },
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );

      console.log('Email sent successfully:', result);
      toast({
        title: 'Message sent!',
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: 'Error',
        description: 'Failed to send message. Please try again.',
        variant: 'destructive',
      });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In{' '}
            <span className="gradient-primary bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project
            and how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Let's Connect
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always interested in hearing about new opportunities and
                exciting projects. Whether you have a question or just want to
                say hi, feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: Mail,
                  label: 'Email',
                  value: 'rutujagherade2000@gmail.com',
                  href: 'mailto:rutujagherade2000@gmail.com',
                },
                {
                  icon: Phone,
                  label: 'Phone',
                  value: '+91 7977315862',
                  href: 'tel:+917977315862',
                },
                {
                  icon: MapPin,
                  label: 'Location',
                  value: 'Navi Mumbai',
                  href: '#',
                },
              ].map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center space-x-4 p-4 glass-card rounded-xl hover:glow-subtle transition-smooth group"
                >
                  <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-smooth">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{label}</h4>
                    <p className="text-muted-foreground">{value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="pt-8 border-t border-border/20">
              <h4 className="text-xl font-semibold text-foreground mb-4">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {[
                  { icon: Github, href: '#', name: 'GitHub' },
                  { icon: Linkedin, href: '#', name: 'LinkedIn' },
                  { icon: Twitter, href: '#', name: 'Twitter' },
                ].map(({ icon: Icon, href, name }) => (
                  <a
                    key={name}
                    href={href}
                    className="p-3 glass-card rounded-full hover:glow-subtle transition-smooth group"
                    aria-label={name}
                  >
                    <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-smooth" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-8 rounded-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-background/50 border-border/50 focus:border-primary transition-smooth"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Email *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-background/50 border-border/50 focus:border-primary transition-smooth"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="bg-background/50 border-border/50 focus:border-primary transition-smooth resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full gradient-primary text-primary-foreground hover:opacity-90 transition-smooth glow-primary"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
