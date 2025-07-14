"use client";
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  MessageCircle,
  Calendar,
  Users,
  Globe,
  Linkedin,
  Twitter,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    project: "",
    budget: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: "hello@techflow.com",
      description: "Send us an email and we&apos;ll respond within 24 hours",
      action: "mailto:hello@techflow.com",
      actionText: "Send Email",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      description: "Speak with our team during business hours",
      action: "tel:+15551234567",
      actionText: "Call Now",
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Live Chat",
      details: "Available 24/7",
      description: "Get instant answers to your questions",
      action: "#",
      actionText: "Start Chat",
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Schedule Meeting",
      details: "Free Consultation",
      description: "Book a 30-minute discovery call with our experts",
      action: "#",
      actionText: "Book Now",
    },
  ];

  const officeInfo = [
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Main Office",
      address: "123 Business Street, Suite 100",
      city: "New York, NY 10001",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM EST",
    },
    {
      icon: <Globe className="w-5 h-5" />,
      title: "Global Reach",
      address: "Serving clients worldwide",
      city: "Remote-first company",
      hours: "24/7 Support Available",
    },
  ];

  const faqs = [
    {
      question: "How quickly can you start on my project?",
      answer:
        "We typically begin new projects within 1-2 weeks of contract signing, depending on project scope and our current capacity.",
    },
    {
      question: "Do you work with startups or only established companies?",
      answer:
        "We work with businesses of all sizes, from early-stage startups to Fortune 500 companies. Our flexible approach adapts to your needs and budget.",
    },
    {
      question: "What is your development process?",
      answer:
        "We follow an agile methodology with regular communication, iterative development, and continuous feedback to ensure your project meets expectations.",
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer:
        "Yes, we offer various support packages including maintenance, updates, and technical support to keep your solution running smoothly.",
    },
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex items-center justify-center px-4">
        <Card className="max-w-lg w-full text-center">
          <CardContent className="p-12">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-2xl font-bold text-foreground mb-4">
              Thank You!
            </h1>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              We&apos;ve received your message and will get back to you within
              24 hours. In the meantime, feel free to explore our services or
              check out our latest projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link href="/services">View Our Services</Link>
              </Button>
              <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                Send Another Message
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12">
            Ready to start your project? Have questions about our services?
            We&apos;d love to hear from you. Choose the best way to reach us
            below.
          </p>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <div className="text-primary">{info.icon}</div>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {info.title}
                  </h3>
                  <p className="text-primary font-medium mb-2">
                    {info.details}
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    {info.description}
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <a href={info.action}>{info.actionText}</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-24 bg-gradient-to-br from-primary/5 to-blue-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <Card className="bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground">
                    Send Us a Message
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we&apos;ll get back to you
                    within 24 hours.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-background"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-background"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="company"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-background"
                          placeholder="Your company name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-background"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="project"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          Project Type
                        </label>
                        <select
                          id="project"
                          name="project"
                          value={formData.project}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-background"
                        >
                          <option value="">Select project type</option>
                          <option value="web-development">
                            Web Development
                          </option>
                          <option value="mobile-app">Mobile App</option>
                          <option value="cloud-solutions">
                            Cloud Solutions
                          </option>
                          <option value="data-analytics">
                            Data & Analytics
                          </option>
                          <option value="ai-ml">AI & Machine Learning</option>
                          <option value="consulting">Consulting</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label
                          htmlFor="budget"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          Budget Range
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-background"
                        >
                          <option value="">Select budget range</option>
                          <option value="under-10k">Under $10,000</option>
                          <option value="10k-25k">$10,000 - $25,000</option>
                          <option value="25k-50k">$25,000 - $50,000</option>
                          <option value="50k-100k">$50,000 - $100,000</option>
                          <option value="over-100k">Over $100,000</option>
                          <option value="discuss">Let&apos;s discuss</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Project Description *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-background resize-none"
                        placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full text-lg"
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 w-5 h-5" />
                        </>
                      )}
                    </Button>

                    <p className="text-sm text-muted-foreground text-center">
                      By submitting this form, you agree to our privacy policy
                      and terms of service.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Office Information */}
              <Card className="bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground flex items-center">
                    <MapPin className="w-6 h-6 text-primary mr-2" />
                    Our Offices
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {officeInfo.map((office, index) => (
                    <div
                      key={index}
                      className="border-l-4 border-l-primary pl-4"
                    >
                      <div className="flex items-start space-x-3">
                        <div className="text-primary mt-1">{office.icon}</div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">
                            {office.title}
                          </h3>
                          <p className="text-muted-foreground text-sm">
                            {office.address}
                          </p>
                          <p className="text-muted-foreground text-sm">
                            {office.city}
                          </p>
                          <div className="flex items-center mt-2">
                            <Clock className="w-4 h-4 text-primary mr-1" />
                            <span className="text-sm text-muted-foreground">
                              {office.hours}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground flex items-center">
                    <Users className="w-6 h-6 text-primary mr-2" />
                    Connect With Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    Follow us on social media for updates, insights, and
                    behind-the-scenes content.
                  </p>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                    >
                      <Globe className="w-5 h-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* FAQ Section */}
              <Card className="bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground">
                    Frequently Asked Questions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div
                      key={index}
                      className="border-b border-border pb-4 last:border-b-0 last:pb-0"
                    >
                      <h4 className="font-semibold text-foreground mb-2">
                        {faq.question}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
