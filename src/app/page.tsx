import {
  ArrowRight,
  CheckCircle,
  Users,
  Zap,
  Shield,
  Code,
  Smartphone,
  Globe,
  Database,
  Cloud,
  MessageCircle,
  Lightbulb,
  Target,
  Rocket,
  Headphones,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

export default function Index() {
  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      image: "/images/photo-1551434678-e076c223a692.jpeg",
      title: "Fast Development",
      description:
        "We deliver working software quickly using modern development practices and agile methodologies.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      image: "/images/photo-1563986768609-322da13575f3.jpeg",
      title: "Secure & Reliable",
      description:
        "Your applications are built with security best practices and tested thoroughly before deployment.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      image: "/images/photo-1600880292203-757bb62b4baf.jpeg",
      title: "Your Extended Team",
      description:
        "We work closely with you as if we're part of your company, understanding your goals and priorities.",
    },
  ];

  const capabilities = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Rapid Development",
      description: "Quick turnaround times",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Latest Technologies",
      description: "Modern tech stack",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Dedicated Team",
      description: "Focused on your success",
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Quality Assured",
      description: "Rigorous testing process",
    },
  ];

  const offerings = [
    {
      icon: <Lightbulb className="w-12 h-12" />,
      title: "Innovation-Driven Solutions",
      description:
        "We don't just follow trends—we create them. Our team leverages cutting-edge technologies to build solutions that give you a competitive edge.",
      benefits: [
        "AI/ML Integration",
        "Blockchain Solutions",
        "IoT Development",
      ],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: "Results That Matter",
      description:
        "Every line of code we write serves a purpose. We focus on delivering measurable business outcomes, not just technical features.",
      benefits: [
        "ROI-Focused Development",
        "Performance Optimization",
        "User Experience Excellence",
      ],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Rocket className="w-12 h-12" />,
      title: "Scale & Accelerate",
      description:
        "From startup MVPs to enterprise solutions, we build systems that grow with your business and accelerate your time-to-market.",
      benefits: [
        "Scalable Architecture",
        "Rapid Prototyping",
        "Enterprise Integration",
      ],
      gradient: "from-green-500 to-emerald-500",
    },
  ];

  const workProcess = [
    {
      step: "01",
      title: "Discovery & Strategy",
      description:
        "We dive deep into your business goals, understand your challenges, and develop a comprehensive strategy tailored to your vision.",
      icon: <MessageCircle className="w-8 h-8" />,
      details: [
        "Requirements Analysis",
        "Market Research",
        "Technical Planning",
      ],
    },
    {
      step: "02",
      title: "Design & Architecture",
      description:
        "Our experts create intuitive designs and robust architecture that ensures your solution is both beautiful and scalable.",
      icon: <Lightbulb className="w-8 h-8" />,
      details: ["UI/UX Design", "System Architecture", "Database Design"],
    },
    {
      step: "03",
      title: "Development & Testing",
      description:
        "Using agile methodologies, we build your solution with continuous testing, ensuring quality at every step of the process.",
      icon: <Code className="w-8 h-8" />,
      details: [
        "Agile Development",
        "Quality Assurance",
        "Performance Testing",
      ],
    },
    {
      step: "04",
      title: "Launch & Support",
      description:
        "We ensure a smooth deployment and provide ongoing support to keep your solution running optimally as your business grows.",
      icon: <Rocket className="w-8 h-8" />,
      details: ["Deployment", "Monitoring", "Ongoing Support"],
    },
  ];

  const serviceTypes = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Development",
      description:
        "Modern, responsive web applications built with the latest frameworks and technologies.",
      technologies: ["React", "Next.js", "Node.js", "TypeScript"],
      featured: true,
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Development",
      description:
        "Native and cross-platform mobile apps that deliver exceptional user experiences.",
      technologies: ["React Native", "Flutter", "iOS", "Android"],
      featured: true,
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Solutions",
      description:
        "Scalable cloud infrastructure and DevOps solutions for modern applications.",
      technologies: ["AWS", "Azure", "Docker", "Kubernetes"],
      featured: false,
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Backend Development",
      description:
        "Robust APIs and backend systems that power your applications reliably.",
      technologies: ["Python", "Node.js", "PostgreSQL", "MongoDB"],
      featured: false,
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security Solutions",
      description:
        "Comprehensive security audits and implementation of best practices.",
      technologies: ["OAuth", "JWT", "SSL/TLS", "Penetration Testing"],
      featured: false,
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Consulting & Support",
      description:
        "Strategic guidance and ongoing technical support for your projects.",
      technologies: [
        "Architecture Review",
        "Code Audit",
        "Performance Optimization",
        "Training",
      ],
      featured: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="pt-32 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <div className="space-y-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                Your Dedicated{" "}
                <span className="text-primary">Software Development Team</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Get a skilled development team that works as an extension of
                your business. We build web apps, mobile apps, and custom
                software solutions while you focus on growing your company.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="text-lg px-8">
                  <Link href="#contact">
                    Contact Us
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="text-lg px-8 border-primary hover:border-primary hover:!text-white  hover:text-primary hover:bg-primary bg-transparent"
                >
                  <Link href="#services">View Our Services</Link>
                </Button>
              </div>
            </div>

            {/* Right side - Hero Image */}
            <Image
              src="/images/photo-1522071820081-009f0129c71c.jpeg"
              alt="Professional team working together on software development projects"
              width={800}
              height={533}
              className="w-full h-auto rounded-2xl"
              style={{
                filter:
                  "drop-shadow(0 25px 50px rgba(44, 122, 123, 0.25)) drop-shadow(0 10px 25px rgba(44, 122, 123, 0.15))",
              }}
              priority
            />
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              What We <span className="text-primary">Offer</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We don&apos;t just build software—we craft digital experiences
              that transform businesses and drive growth. Here&apos;s what sets
              us apart in today&apos;s competitive landscape.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {offerings.map((offering, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden border-0 bg-white/80 backdrop-blur-sm hover:bg-white/90 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${offering.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                ></div>
                <CardContent className="p-8 relative z-10">
                  <div
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${offering.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div className="text-white">{offering.icon}</div>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {offering.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {offering.description}
                  </p>
                  <div className="space-y-2">
                    {offering.benefits.map((benefit, benefitIndex) => (
                      <div
                        key={benefitIndex}
                        className="flex items-center text-sm"
                      >
                        <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              How We <span className="text-primary">Work</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our proven methodology ensures every project delivers exceptional
              results. From initial concept to final deployment, we&apos;re with
              you every step of the way.
            </p>
          </div>

          <div className="relative">
            {/* Progress Line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary/20 via-primary to-primary/20"></div>

            <div className="space-y-16">
              {workProcess.map((process, index) => (
                <div
                  key={index}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content */}
                  <div className="flex-1 lg:max-w-lg">
                    <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-primary">
                      <CardContent className="p-8">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
                            <div className="text-primary">{process.icon}</div>
                          </div>
                          <span className="text-3xl font-bold text-primary/30">
                            {process.step}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                          {process.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          {process.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {process.details.map((detail, detailIndex) => (
                            <span
                              key={detailIndex}
                              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary"
                            >
                              {detail}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Central Circle */}
                  <div className="flex-shrink-0 lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2">
                    <div className="w-16 h-16 rounded-full bg-white border-4 border-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-primary font-bold text-lg">
                        {process.step}
                      </span>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="flex-1 lg:max-w-lg hidden lg:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Types of Services Section */}
      <section className="py-24 bg-gradient-to-br from-primary/5 to-blue-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Types of Services We <span className="text-primary">Provide</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From cutting-edge web applications to enterprise solutions, we
              cover the full spectrum of digital services to help your business
              thrive in the digital age.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceTypes.map((service, index) => (
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

          <div className="text-center mt-12">
            <Button size="lg" asChild className="text-lg px-8">
              <Link href="#services">
                Explore All Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              What We Bring to Your Project
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              As a fresh and innovative startup, we combine cutting-edge
              expertise with agile methodologies
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md group-hover:shadow-lg transition-shadow border border-slate-100">
                  <div className="text-primary">{capability.icon}</div>
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {capability.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose TechFlow Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(61,102,102,0.03)_50%,transparent_75%)] bg-[length:20px_20px]"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why Choose <span className="text-primary">TechFlow</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Experience the difference of working with a team that combines
              technical excellence with genuine care for your success.
              Here&apos;s what sets us apart.
            </p>
          </div>

          <div className="space-y-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content Side */}
                <div className="flex-1 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <div className="text-primary">{feature.icon}</div>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="flex items-center text-primary font-medium">
                    <span>Learn more about our approach</span>
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </div>
                </div>

                {/* Image Side */}
                <div className="flex-1 max-w-lg">
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <Card className="relative overflow-hidden border-0 shadow-xl group-hover:shadow-2xl transition-all duration-500 py-0">
                      <div className="aspect-[4/3] overflow-hidden">
                        <Image
                          src={feature.image}
                          alt={feature.title}
                          width={500}
                          height={375}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </Card>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-20">
            <div className="inline-flex items-center gap-3 bg-primary/5 rounded-full px-6 py-3 mb-6">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span className="text-primary font-medium">
                Ready to experience the TechFlow difference?
              </span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-lg px-8 py-4">
                <Link href="#contact">
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="text-lg px-8 py-4"
              >
                <Link href="#services">View Our Process</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary/5 to-blue-50/50 relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(61,102,102,0.1),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(61,102,102,0.08),transparent_70%)]"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Ready to Transform Your{" "}
            <span className="text-primary">Business Vision</span>?
          </h2>

          {/* Enhanced Description */}
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Partner with a dedicated team that treats your success as our own.
            Let&apos;s turn your vision into a powerful digital solution that
            drives real business results.
          </p>

          {/* Value Propositions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center group">
              <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <Zap className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Fast Delivery
              </h3>
              <p className="text-muted-foreground">
                Quick turnaround without compromising quality
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <Users className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Dedicated Team
              </h3>
              <p className="text-muted-foreground">
                Your extended development team, focused on your goals
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <Shield className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Quality Assured
              </h3>
              <p className="text-muted-foreground">
                Rigorous testing and modern best practices
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              asChild
              className="group text-lg px-10 py-6 bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <Link href="#quote">
                <span className="flex items-center">
                  Start Your Project
                  <Rocket className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              asChild
              className="group text-lg px-10 py-6 border-primary hover:border-primary text-primary  hover:text-primary bg-transparent hover:bg-transparent shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <Link href="#contact">
                <span className="flex items-center">
                  Book Free Consultation
                  <MessageCircle className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
                </span>
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
