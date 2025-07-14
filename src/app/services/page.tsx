import {
  Code,
  Smartphone,
  Globe,
  Database,
  Cloud,
  Shield,
  Headphones,
  Users,
  CheckCircle,
  ArrowRight,
  Lightbulb,
  Settings,
  BarChart3,
  Layers,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

export default function Services() {
  const heroServices = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Development",
      description:
        "Modern, responsive web applications built with cutting-edge frameworks like React, Next.js, and TypeScript.",
      technologies: [
        "React",
        "Next.js",
        "Node.js",
        "TypeScript",
        "Tailwind CSS",
      ],
      featured: true,
      image: "/images/photo-1461749280684-dccba630e2f6.jpeg",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Development",
      description:
        "Native and cross-platform mobile applications that deliver exceptional user experiences across iOS and Android.",
      technologies: ["React Native", "Flutter", "iOS", "Android", "Expo"],
      featured: true,
      image: "/images/photo-1512941937669-90a1b58e7e9c.jpeg",
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Solutions",
      description:
        "Scalable cloud infrastructure and DevOps solutions that grow with your business needs.",
      technologies: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform"],
      featured: false,
      image: "/images/photo-1451187580459-43490279c0fa.jpeg",
    },
  ];

  const allServices = [
    {
      icon: <Database className="w-8 h-8" />,
      title: "Backend Development",
      description:
        "Robust APIs and backend systems that power your applications with reliability and performance.",
      features: [
        "RESTful & GraphQL APIs",
        "Database Design & Optimization",
        "Microservices Architecture",
        "Real-time Data Processing",
      ],
      technologies: ["Python", "Node.js", "PostgreSQL", "MongoDB", "Redis"],
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security & Compliance",
      description:
        "Comprehensive security audits and implementation of industry best practices.",
      features: [
        "Security Audits & Testing",
        "GDPR & HIPAA Compliance",
        "OAuth & Authentication",
        "Penetration Testing",
      ],
      technologies: [
        "OAuth",
        "JWT",
        "SSL/TLS",
        "Encryption",
        "Security Protocols",
      ],
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Data Analytics",
      description:
        "Transform your data into actionable insights with advanced analytics and visualization.",
      features: [
        "Business Intelligence",
        "Real-time Dashboards",
        "Data Warehousing",
        "Machine Learning Integration",
      ],
      technologies: ["Python", "R", "Tableau", "Power BI", "Apache Spark"],
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "AI & Machine Learning",
      description:
        "Leverage artificial intelligence to automate processes and gain competitive advantages.",
      features: [
        "Custom AI Models",
        "Natural Language Processing",
        "Computer Vision",
        "Predictive Analytics",
      ],
      technologies: [
        "TensorFlow",
        "PyTorch",
        "OpenAI",
        "Scikit-learn",
        "Hugging Face",
      ],
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "DevOps & Automation",
      description:
        "Streamline your development pipeline with modern DevOps practices and automation.",
      features: [
        "CI/CD Pipelines",
        "Infrastructure as Code",
        "Automated Testing",
        "Monitoring & Alerting",
      ],
      technologies: [
        "Jenkins",
        "GitHub Actions",
        "Docker",
        "Kubernetes",
        "Prometheus",
      ],
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "System Integration",
      description:
        "Seamlessly connect your existing systems and third-party services for optimal workflow.",
      features: [
        "API Integration",
        "Legacy System Modernization",
        "Third-party Connectors",
        "Data Migration",
      ],
      technologies: [
        "REST APIs",
        "GraphQL",
        "Webhooks",
        "ETL",
        "Message Queues",
      ],
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description:
        "We analyze your requirements and create a comprehensive strategy.",
      icon: <Users className="w-6 h-6" />,
    },
    {
      step: "02",
      title: "Design & Planning",
      description: "Create detailed architecture and user experience designs.",
      icon: <Lightbulb className="w-6 h-6" />,
    },
    {
      step: "03",
      title: "Development & Testing",
      description:
        "Build your solution with rigorous testing and quality assurance.",
      icon: <Code className="w-6 h-6" />,
    },
    {
      step: "04",
      title: "Deployment & Support",
      description:
        "Launch your project and provide ongoing maintenance and support.",
      icon: <Headphones className="w-6 h-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From custom software development to cloud solutions, we provide
              comprehensive technology services that drive your business
              forward. Our expert team delivers results that matter.
            </p>
          </div>

          {/* Featured Services */}
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {heroServices.map((service, index) => (
              <Card
                key={index}
                className={`group relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                  service.featured
                    ? "ring-2 ring-primary/20 bg-gradient-to-br from-white to-primary/5"
                    : "bg-white/80 backdrop-blur-sm hover:bg-white/90"
                }`}
              >
                {service.featured && (
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                    POPULAR
                  </div>
                )}
                <div className="aspect-[4/3] overflow-hidden rounded-t-xl">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <CardContent className="p-8">
                  <div
                    className={`w-16 h-16 rounded-xl ${
                      service.featured
                        ? "bg-primary text-primary-foreground"
                        : "bg-primary/10 text-primary"
                    } flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-foreground mb-3">
                      Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${
                            service.featured
                              ? "bg-primary/20 text-primary"
                              : "bg-slate-100 text-slate-600"
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Services Section */}
      <section className="py-24 bg-gradient-to-br from-primary/5 to-blue-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Complete{" "}
              <span className="text-primary">Technology Solutions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We offer end-to-end technology services to support every aspect of
              your digital transformation journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service, index) => (
              <Card
                key={index}
                className="group bg-white/80 backdrop-blur-sm hover:bg-white/90 transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center text-sm"
                      >
                        <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-foreground mb-3">
                      Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-slate-100 text-slate-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our <span className="text-primary">Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We follow a proven methodology that ensures every project delivers
              exceptional results, on time and within budget.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <Card
                key={index}
                className="text-center group hover:shadow-xl transition-all duration-300 border-l-4 border-l-primary"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                    <div className="text-primary">{step.icon}</div>
                  </div>
                  <div className="text-3xl font-bold text-primary/30 mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary/5 to-blue-50/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Ready to Start Your <span className="text-primary">Project</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Let&apos;s discuss how our expertise can help transform your
            business vision into reality. Get a free consultation with our team
            today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="text-lg px-8">
              <Link href="/quote">
                Get Free Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="text-lg px-8 border-primary hover:border-primary text-primary hover:text-primary bg-transparent hover:bg-transparent"
            >
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
