import { ArrowRight, CheckCircle, Users, Zap, Shield } from "lucide-react";
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
      image: "/images/photo-1551434678-e076c223a692.jpeg",
      title: "Secure & Reliable",
      description:
        "Your applications are built with security best practices and tested thoroughly before deployment.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      image: "/images/photo-1551434678-e076c223a692.jpeg",
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
                <Button size="lg" asChild className="text-lg px-8 py-6">
                  <Link href="/contact">
                    Contact Us
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="text-lg px-8 py-6"
                >
                  <Link href="/services">View Our Services</Link>
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

      {/* Capabilities Section */}
      <section className="py-16 bg-primary/5">
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
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md group-hover:shadow-lg transition-shadow">
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

      {/* Features Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose TechFlow?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We deliver exceptional results through our proven expertise and
              commitment to your success.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden pt-0"
              >
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={400}
                    height={225}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary/10 to-primary/5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of companies that trust TechFlow to deliver
            exceptional IT solutions. Let&#39;s discuss your project today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="text-lg px-8 py-6">
              <Link href="/quote">
                Get Free Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="text-lg px-8 py-6"
            >
              <Link href="/contact">Schedule a Call</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
