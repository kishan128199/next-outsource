import {
  Users,
  Target,
  Heart,
  Award,
  Zap,
  Shield,
  Globe,
  Code,
  CheckCircle,
  ArrowRight,
  Lightbulb,
  TrendingUp,
  Coffee,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

export default function About() {
  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Client-Centric Approach",
      description:
        "Your success is our success. We treat every project as our own and work tirelessly to exceed your expectations.",
      gradient: "from-red-500 to-pink-500",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation First",
      description:
        "We stay ahead of technology trends and leverage cutting-edge tools to give you a competitive advantage.",
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Quality & Reliability",
      description:
        "We believe in doing things right the first time. Our rigorous testing ensures bug-free, reliable solutions.",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Transparency",
      description:
        "Open communication and clear processes. You'll always know exactly where your project stands.",
      gradient: "from-blue-500 to-cyan-500",
    },
  ];

  const teamStats = [
    {
      icon: <Code className="w-8 h-8" />,
      number: "50+",
      label: "Projects Delivered",
      description: "Successfully completed projects across various industries",
    },
    {
      icon: <Users className="w-8 h-8" />,
      number: "25+",
      label: "Happy Clients",
      description: "Businesses that trust us with their digital transformation",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      number: "10+",
      label: "Countries Served",
      description: "Global reach with local expertise and understanding",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      number: "24/7",
      label: "Support Available",
      description: "Round-the-clock support to keep your business running",
    },
  ];

  const journey = [
    {
      year: "2023",
      title: "Foundation",
      description:
        "TechFlow was founded with a vision to democratize access to high-quality software development.",
      icon: <Lightbulb className="w-6 h-6" />,
    },
    {
      year: "2023",
      title: "First Clients",
      description:
        "Delivered our first successful projects, establishing our reputation for quality and reliability.",
      icon: <Target className="w-6 h-6" />,
    },
    {
      year: "2024",
      title: "Rapid Growth",
      description:
        "Expanded our team and service offerings to meet growing demand from businesses worldwide.",
      icon: <TrendingUp className="w-6 h-6" />,
    },
    {
      year: "2024",
      title: "Innovation Hub",
      description:
        "Launched our AI and machine learning practice, helping clients leverage the latest technologies.",
      icon: <Zap className="w-6 h-6" />,
    },
  ];

  const expertise = [
    "Full-Stack Development",
    "Cloud Architecture",
    "Mobile Development",
    "DevOps & Automation",
    "AI & Machine Learning",
    "Data Analytics",
    "Cybersecurity",
    "UI/UX Design",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                About <span className="text-primary">TechFlow</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We&apos;re not just another development agency. We&apos;re your
                dedicated technology partner, committed to transforming your
                business vision into powerful digital solutions that drive real
                results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="text-lg px-8">
                  <Link href="/contact">
                    Work With Us
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="text-lg px-8 border-primary hover:border-primary text-primary hover:text-primary bg-transparent hover:bg-transparent"
                >
                  <Link href="/services">Our Services</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-3xl blur-xl opacity-75"></div>
              <Image
                src="/images/photo-1522202176988-66273c2fd55f.jpeg"
                alt="TechFlow team collaborating on innovative solutions"
                width={600}
                height={400}
                className="relative w-full h-auto rounded-2xl shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-gradient-to-br from-primary/5 to-blue-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our <span className="text-primary">Mission</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              To empower businesses of all sizes with cutting-edge technology
              solutions that drive growth, efficiency, and innovation. We
              believe that exceptional software should be accessible to
              everyone, not just Fortune 500 companies.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="text-center group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <Target className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Our Vision
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the go-to technology partner for businesses worldwide,
                  known for our innovation, reliability, and genuine care for
                  client success.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <Award className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Our Promise
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To deliver solutions that not only meet your requirements but
                  exceed your expectations, helping you achieve your business
                  goals faster.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <Coffee className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Our Culture
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  A collaborative environment where creativity thrives,
                  continuous learning is encouraged, and every team member
                  contributes to our collective success.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our <span className="text-primary">Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              These principles guide everything we do and shape how we approach
              every project and client relationship.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-0 bg-white/80 backdrop-blur-sm hover:bg-white/90 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                ></div>
                <CardContent className="p-8 relative z-10">
                  <div
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div className="text-white">{value.icon}</div>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-br from-primary/5 to-blue-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              By the <span className="text-primary">Numbers</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our track record speaks for itself. Here&apos;s what we&apos;ve
              accomplished since our inception.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamStats.map((stat, index) => (
              <Card
                key={index}
                className="text-center group hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <div className="text-primary">{stat.icon}</div>
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {stat.label}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our <span className="text-primary">Journey</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From a small startup to a trusted technology partner - here&apos;s
              how we&apos;ve grown and evolved to better serve our clients.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary/20 via-primary to-primary/20"></div>

            <div className="space-y-12">
              {journey.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className="flex-1 lg:max-w-lg">
                    <Card className="group hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-8">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
                            <div className="text-primary">{milestone.icon}</div>
                          </div>
                          <span className="text-2xl font-bold text-primary">
                            {milestone.year}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                          {milestone.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {milestone.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Central dot */}
                  <div className="flex-shrink-0 lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2">
                    <div className="w-6 h-6 rounded-full bg-primary shadow-lg"></div>
                  </div>

                  <div className="flex-1 lg:max-w-lg hidden lg:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-24 bg-gradient-to-br from-primary/5 to-blue-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our <span className="text-primary">Expertise</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We specialize in a wide range of technologies and methodologies to
              deliver comprehensive solutions for your business needs.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {expertise.map((skill, index) => (
              <div
                key={index}
                className="group text-center bg-white/80 backdrop-blur-sm rounded-xl p-6 hover:bg-white/90 hover:shadow-lg transition-all duration-300"
              >
                <CheckCircle className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {skill}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Ready to Work <span className="text-primary">Together</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Let&apos;s discuss how our expertise and passion can help bring your
            vision to life. Get in touch for a free consultation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="text-lg px-8">
              <Link href="/contact">
                Start a Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="text-lg px-8 border-primary hover:border-primary text-primary hover:text-primary bg-transparent hover:bg-transparent"
            >
              <Link href="/quote">Get a Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
