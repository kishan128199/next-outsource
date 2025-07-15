import {
  Code,
  Database,
  Shield,
  Headphones,
  Users,
  CheckCircle,
  ArrowRight,
  Lightbulb,
  Settings,
  BarChart3,
  Layers,
  Cpu,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Services() {
  const allServices = [
    {
      icon: <Database className="w-8 h-8" />,
      title: "Backend Development",
      description:
        "Robust APIs and backend systems that power your applications with reliability and performance.",
      features: [
        "RESTful & GraphQL APIs",
        "Frontend Integration & UI Development",
        "Database Design & Optimization",
        "Microservices Architecture",
        "Real-time Data Processing",
      ],
      technologies: [
        "Python",
        "Node.js",
        "JavaScript",
        "TypeScript",
        "React",
        "Vue.js",
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "Express.js",
        "FastAPI",
        "Django",
        "Figma",
      ],
      image: "/images/be.jpg",
      accent: "from-primary to-primary/80",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security & Compliance",
      description:
        "Comprehensive security audits and implementation of industry best practices.",
      features: [
        "Security Audits & Testing",
        "Frontend Security Implementation",
        "GDPR & HIPAA Compliance",
        "OAuth & Authentication",
        "Penetration Testing",
      ],
      technologies: [
        "OAuth",
        "JWT",
        "SSL/TLS",
        "React",
        "Next.js",
        "TypeScript",
        "Encryption",
        "Security Protocols",
        "Auth0",
        "Figma",
        "OWASP",
      ],
      image: "/images/security.png",
      accent: "from-primary/90 to-primary/70",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Data Analytics",
      description:
        "Transform your data into actionable insights with advanced analytics and visualization.",
      features: [
        "Business Intelligence",
        "Frontend Dashboard Development",
        "Real-time Dashboards",
        "Data Warehousing",
        "Machine Learning Integration",
      ],
      technologies: [
        "Python",
        "R",
        "JavaScript",
        "TypeScript",
        "React",
        "D3.js",
        "Chart.js",
        "Tableau",
        "Power BI",
        "Apache Spark",
        "Pandas",
        "NumPy",
        "Figma",
      ],
      image: "/images/data.jpg",
      accent: "from-primary to-primary/80",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "AI & Machine Learning",
      description:
        "Leverage artificial intelligence to automate processes and gain competitive advantages.",
      features: [
        "Custom AI Models",
        "Frontend AI Integration",
        "Natural Language Processing",
        "Computer Vision",
        "Predictive Analytics",
      ],
      technologies: [
        "TensorFlow",
        "PyTorch",
        "OpenAI",
        "Python",
        "JavaScript",
        "React",
        "TypeScript",
        "Scikit-learn",
        "Hugging Face",
        "Keras",
        "Figma",
      ],
      image: "/images/ai.jpg",
      accent: "from-primary/70 to-primary/50",
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "DevOps & Automation",
      description:
        "Streamline your development pipeline with modern DevOps practices and automation.",
      features: [
        "CI/CD Pipelines",
        "Frontend Build Automation",
        "Infrastructure as Code",
        "Automated Testing",
        "Monitoring & Alerting",
      ],
      technologies: [
        "Jenkins",
        "GitHub Actions",
        "Docker",
        "Kubernetes",
        "Terraform",
        "AWS",
        "Azure",
        "React",
        "Next.js",
        "Webpack",
        "Vite",
        "Prometheus",
        "Figma",
      ],
      image: "/images/devops.jpg",
      accent: "from-primary to-primary/80",
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "System Integration",
      description:
        "Seamlessly connect your existing systems and third-party services for optimal workflow.",
      features: [
        "API Integration",
        "Frontend System Connectivity",
        "Legacy System Modernization",
        "Third-party Connectors",
        "Data Migration",
      ],
      technologies: [
        "REST APIs",
        "GraphQL",
        "JavaScript",
        "TypeScript",
        "React",
        "Vue.js",
        "Node.js",
        "Webhooks",
        "ETL",
        "Message Queues",
        "Zapier",
        "Figma",
      ],
      image: "/images/systemIntegration.jpg",
      accent: "from-primary/80 to-primary/60",
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "IoT Solutions",
      description:
        "Connect, monitor, and control smart devices with scalable Internet of Things solutions. Build intelligent systems that bridge the physical and digital worlds for smarter operations.",
      features: [
        "Smart Device Connectivity & Management",
        "Frontend IoT Dashboards & Controls",
        "Real-time Sensor Data Processing",
        "Edge Computing & Analytics",
        "Remote Monitoring & Automation",
      ],
      technologies: [
        "MQTT",
        "Arduino",
        "Raspberry Pi",
        "AWS IoT",
        "Azure IoT",
        "React",
        "TypeScript",
        "Node.js",
        "Python",
        "InfluxDB",
        "Grafana",
        "Docker",
        "Figma",
      ],
      image: "/images/iot.jpg",
      accent: "from-primary/70 to-primary/50",
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
              We don&apos;t just build software – we solve real business
              problems with measurable impact. From startups achieving their
              first $1M ARR to enterprises saving millions through automation,
              our solutions deliver tangible results.
            </p>
          </div>

          {/* Technology Banner */}
          <div className="relative mb-20 overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 via-blue-50/50 to-purple-50/30 p-8 lg:p-12">
            {/* Background Images */}

            {/* Content */}
            <div className="relative z-10 text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Full-Stack{" "}
                <span className="text-primary">Technology Expertise</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-4xl mx-auto">
                From Frontend Development to Backend Systems, Mobile Apps to
                Cloud Infrastructure - We deliver complete solutions with modern
                technologies and expert design.
              </p>

              {/* Technology Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
                {[
                  { name: "React", color: "from-primary to-primary/80" },
                  { name: "Next.js", color: "from-primary/90 to-primary/70" },
                  {
                    name: "TypeScript",
                    color: "from-primary/80 to-primary/60",
                  },
                  { name: "Node.js", color: "from-primary/70 to-primary/50" },
                  { name: "Python", color: "from-primary to-primary/80" },
                  {
                    name: "React Native",
                    color: "from-primary/60 to-primary/40",
                  },
                  { name: "AWS", color: "from-primary/90 to-primary/70" },
                  { name: "Docker", color: "from-primary/80 to-primary/60" },
                  { name: "PostgreSQL", color: "from-primary to-primary/80" },
                  { name: "MongoDB", color: "from-primary/70 to-primary/50" },
                  { name: "Figma", color: "from-primary/60 to-primary/40" },
                  { name: "Vue.js", color: "from-primary/80 to-primary/60" },
                ].map((tech, index) => (
                  <div
                    key={index}
                    className={`bg-gradient-to-br ${tech.color} text-white rounded-lg p-3 text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
                  >
                    {tech.name}
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                  <div className="text-3xl font-bold text-primary mb-2">
                    50+
                  </div>
                  <div className="text-muted-foreground font-medium">
                    Technologies Mastered
                  </div>
                </div>
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                  <div className="text-3xl font-bold text-primary mb-2">
                    100%
                  </div>
                  <div className="text-muted-foreground font-medium">
                    Full-Stack Coverage
                  </div>
                </div>
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                  <div className="text-3xl font-bold text-primary mb-2">
                    24/7
                  </div>
                  <div className="text-muted-foreground font-medium">
                    Design & Development
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="text-lg px-8">
                  <Link href="/quote">
                    Get Started Today
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="text-lg px-8 border-primary hover:border-primary text-primary hover:text-primary bg-white/80 hover:bg-white/90"
                >
                  <Link href="/contact">View Portfolio</Link>
                </Button>
              </div>
            </div>
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

          <div className="space-y-16">
            {allServices.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
                } gap-12 items-center`}
              >
                {/* Image Section */}
                <div className="flex-1 lg:max-w-lg">
                  <div className="relative group">
                    <div
                      className={`absolute -inset-4 bg-gradient-to-r ${service.accent} rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500`}
                    ></div>
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={500}
                        height={350}
                        className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-t ${service.accent} opacity-20`}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 lg:max-w-lg space-y-6">
                  <div
                    className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${service.accent} text-white shadow-lg`}
                  >
                    {service.icon}
                  </div>

                  <div>
                    <h3 className="text-3xl font-bold text-foreground mb-4">
                      {service.title}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-start text-sm bg-white/60 backdrop-blur-sm rounded-lg p-3 hover:bg-white/80 transition-colors"
                      >
                        <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground font-medium">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-foreground mb-3 uppercase tracking-wide">
                      Tech Stack:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r ${service.accent} text-white shadow-sm hover:shadow-md transition-shadow`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-50/30"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our <span className="text-primary">Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our battle-tested process has delivered 100+ successful projects
              across industries, with an average 95% on-time delivery rate and
              4.9/5 client satisfaction.
            </p>
          </div>

          <div className="relative">
            {/* Progress Bar */}
            <div className="hidden lg:block absolute top-12 left-0 right-0 h-2 bg-gradient-to-r from-primary/30 via-primary to-primary/30 rounded-full mx-20"></div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="text-center group relative h-full">
                    <div className="bg-white backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-primary/10 h-full flex flex-col">
                      <div className="relative mb-6">
                        <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-all duration-300">
                          <div className="text-white">{step.icon}</div>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-sm flex-grow">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
            Join 100+ companies who&apos;ve transformed their operations with
            our solutions. Get a detailed project estimate and timeline within
            48 hours of your consultation.
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
