"use client";
import { useState } from "react";
import {
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Calculator,
  Clock,
  Send,
  Calendar,
  FileText,
  Code,
  Smartphone,
  Globe,
  Database,
  Cloud,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

type FormData = {
  // Step 1: Project Type
  projectType: string;

  // Step 2: Project Details
  platform: string[];
  features: string[];
  complexity: string;
  timeline: string;

  // Step 3: Team & Budget
  teamSize: string;
  budget: string;
  support: string;

  // Step 4: Contact Info
  name: string;
  email: string;
  company: string;
  phone: string;
  description: string;
};

export default function Quote() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    // Step 1: Project Type
    projectType: "",

    // Step 2: Project Details
    platform: [],
    features: [],
    complexity: "",
    timeline: "",

    // Step 3: Team & Budget
    teamSize: "",
    budget: "",
    support: "",

    // Step 4: Contact Info
    name: "",
    email: "",
    company: "",
    phone: "",
    description: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const projectTypes = [
    {
      id: "web-app",
      icon: <Globe className="w-8 h-8" />,
      title: "Web Application",
      description: "Custom web applications, SaaS platforms, dashboards",
      examples: [
        "E-commerce platforms",
        "Business dashboards",
        "SaaS applications",
      ],
    },
    {
      id: "mobile-app",
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile App",
      description: "Native and cross-platform mobile applications",
      examples: ["iOS apps", "Android apps", "React Native apps"],
    },
    {
      id: "backend",
      icon: <Database className="w-8 h-8" />,
      title: "Backend System",
      description: "APIs, databases, server infrastructure",
      examples: ["REST APIs", "GraphQL", "Database design"],
    },
    {
      id: "cloud",
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Solution",
      description: "Cloud migration, DevOps, infrastructure",
      examples: ["AWS/Azure setup", "CI/CD pipelines", "Cloud migration"],
    },
    {
      id: "ai-ml",
      icon: <Code className="w-8 h-8" />,
      title: "AI & Machine Learning",
      description: "Custom AI models, data analytics, automation",
      examples: ["Chatbots", "Recommendation systems", "Data analysis"],
    },
    {
      id: "consulting",
      icon: <Shield className="w-8 h-8" />,
      title: "Consulting",
      description: "Technical consulting, code reviews, architecture",
      examples: ["Architecture review", "Code audit", "Technology strategy"],
    },
  ];

  const platforms = [
    { id: "web", label: "Web Browser" },
    { id: "ios", label: "iOS" },
    { id: "android", label: "Android" },
    { id: "desktop", label: "Desktop" },
    { id: "api", label: "API/Backend" },
    { id: "cloud", label: "Cloud Platform" },
  ];

  const features = [
    { id: "auth", label: "User Authentication" },
    { id: "payments", label: "Payment Processing" },
    { id: "analytics", label: "Analytics & Reporting" },
    { id: "notifications", label: "Push Notifications" },
    { id: "search", label: "Search Functionality" },
    { id: "messaging", label: "Real-time Messaging" },
    { id: "integration", label: "Third-party Integrations" },
    { id: "admin", label: "Admin Dashboard" },
    { id: "api", label: "API Development" },
    { id: "ai", label: "AI/ML Features" },
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleArrayChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field as keyof typeof prev].includes(value)
        ? (prev[field as keyof typeof prev] as string[]).filter(
            (item: string) => item !== value
          )
        : [...(prev[field as keyof typeof prev] as string[]), value],
    }));
  };

  const nextStep = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const getEstimate = () => {
    let basePrice = 0;

    // Base price by project type
    const typeMultipliers = {
      "web-app": 15000,
      "mobile-app": 25000,
      backend: 12000,
      cloud: 18000,
      "ai-ml": 30000,
      consulting: 5000,
    };

    basePrice =
      typeMultipliers[formData.projectType as keyof typeof typeMultipliers] ||
      15000;

    // Complexity multiplier
    const complexityMultipliers = {
      simple: 0.7,
      medium: 1.0,
      complex: 1.5,
      enterprise: 2.0,
    };

    basePrice *=
      complexityMultipliers[
        formData.complexity as keyof typeof complexityMultipliers
      ] || 1.0;

    // Platform count multiplier
    if (formData.platform.length > 1) {
      basePrice *= 1 + (formData.platform.length - 1) * 0.3;
    }

    // Features multiplier
    basePrice += formData.features.length * 2000;

    return {
      min: Math.round(basePrice * 0.8),
      max: Math.round(basePrice * 1.2),
    };
  };

  if (isSubmitted) {
    const estimate = getEstimate();

    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex items-center justify-center px-4">
        <Card className="max-w-2xl w-full">
          <CardContent className="p-12 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-4">
              Quote Request Submitted!
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Thank you for your detailed project information. Based on your
              requirements, here&apos;s our preliminary estimate:
            </p>

            <div className="bg-primary/5 rounded-xl p-8 mb-8">
              <div className="text-4xl font-bold text-primary mb-2">
                ${estimate.min.toLocaleString()} - $
                {estimate.max.toLocaleString()}
              </div>
              <p className="text-muted-foreground">Estimated project cost</p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-8 text-sm">
              <div className="flex items-center justify-center space-x-2">
                <Clock className="w-4 h-4 text-primary" />
                <span>24-hour response</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Calendar className="w-4 h-4 text-primary" />
                <span>Free consultation</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <FileText className="w-4 h-4 text-primary" />
                <span>Detailed proposal</span>
              </div>
            </div>

            <p className="text-muted-foreground mb-8">
              Our team will review your requirements and send you a detailed
              proposal within 24 hours. This will include a more accurate
              estimate, timeline, and next steps.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link href="/services">Explore Our Services</Link>
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  setIsSubmitted(false);
                  setCurrentStep(1);
                  setFormData({
                    projectType: "",
                    platform: [],
                    features: [],
                    complexity: "",
                    timeline: "",
                    teamSize: "",
                    budget: "",
                    support: "",
                    name: "",
                    email: "",
                    company: "",
                    phone: "",
                    description: "",
                  });
                }}
              >
                Request Another Quote
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
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-6">
            Get Your <span className="text-primary">Project Quote</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Tell us about your project and get a detailed quote within 24 hours.
            Our transparent pricing ensures no surprises.
          </p>

          {/* Progress Bar */}
          <div className="flex items-center justify-center space-x-2 mb-8">
            {[1, 2, 3, 4].map(step => (
              <div key={step} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all ${
                    step <= currentStep
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {step}
                </div>
                {step < 4 && (
                  <div
                    className={`w-8 h-1 mx-2 transition-all ${
                      step < currentStep ? "bg-primary" : "bg-muted"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8">
              {/* Step 1: Project Type */}
              {currentStep === 1 && (
                <div className="space-y-8">
                  <div className="text-center">
                    <h2 className="text-2xl font-bold text-foreground mb-4">
                      What type of project do you need?
                    </h2>
                    <p className="text-muted-foreground">
                      Select the option that best describes your project
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projectTypes.map(type => (
                      <Card
                        key={type.id}
                        className={`cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                          formData.projectType === type.id
                            ? "ring-2 ring-primary bg-primary/5"
                            : "hover:bg-primary/5"
                        }`}
                        onClick={() =>
                          handleInputChange("projectType", type.id)
                        }
                      >
                        <CardContent className="p-6 text-center">
                          <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                            <div className="text-primary">{type.icon}</div>
                          </div>
                          <h3 className="font-semibold text-foreground mb-2">
                            {type.title}
                          </h3>
                          <p className="text-sm text-muted-foreground mb-4">
                            {type.description}
                          </p>
                          <div className="text-xs text-muted-foreground space-y-1">
                            {type.examples.map((example, index) => (
                              <div key={index}>• {example}</div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Project Details */}
              {currentStep === 2 && (
                <div className="space-y-8">
                  <div className="text-center">
                    <h2 className="text-2xl font-bold text-foreground mb-4">
                      Project Details
                    </h2>
                    <p className="text-muted-foreground">
                      Help us understand your specific requirements
                    </p>
                  </div>

                  <div className="space-y-8">
                    {/* Platforms */}
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-4">
                        Target Platforms
                      </h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {platforms.map(platform => (
                          <button
                            key={platform.id}
                            type="button"
                            onClick={() =>
                              handleArrayChange("platform", platform.id)
                            }
                            className={`p-4 rounded-lg border text-left transition-all ${
                              formData.platform.includes(platform.id)
                                ? "border-primary bg-primary/10 text-primary"
                                : "border-border hover:border-primary/50"
                            }`}
                          >
                            {platform.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-4">
                        Required Features
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {features.map(feature => (
                          <button
                            key={feature.id}
                            type="button"
                            onClick={() =>
                              handleArrayChange("features", feature.id)
                            }
                            className={`p-4 rounded-lg border text-left transition-all ${
                              formData.features.includes(feature?.id)
                                ? "border-primary bg-primary/10 text-primary"
                                : "border-border hover:border-primary/50"
                            }`}
                          >
                            {feature.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Complexity */}
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-4">
                        Project Complexity
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                          {
                            id: "simple",
                            label: "Simple",
                            desc: "Basic functionality, minimal custom features",
                          },
                          {
                            id: "medium",
                            label: "Medium",
                            desc: "Standard features, some customization",
                          },
                          {
                            id: "complex",
                            label: "Complex",
                            desc: "Advanced features, heavy customization",
                          },
                          {
                            id: "enterprise",
                            label: "Enterprise",
                            desc: "Large scale, multiple integrations",
                          },
                        ].map(complexity => (
                          <Card
                            key={complexity.id}
                            className={`cursor-pointer transition-all ${
                              formData.complexity === complexity.id
                                ? "ring-2 ring-primary bg-primary/5"
                                : "hover:bg-primary/5"
                            }`}
                            onClick={() =>
                              handleInputChange("complexity", complexity.id)
                            }
                          >
                            <CardContent className="p-4 text-center">
                              <h4 className="font-semibold text-foreground mb-2">
                                {complexity.label}
                              </h4>
                              <p className="text-xs text-muted-foreground">
                                {complexity.desc}
                              </p>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>

                    {/* Timeline */}
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-4">
                        Desired Timeline
                      </h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                          { id: "urgent", label: "ASAP (Rush)" },
                          { id: "month", label: "1-2 Months" },
                          { id: "quarter", label: "2-3 Months" },
                          { id: "flexible", label: "Flexible" },
                        ].map(timeline => (
                          <button
                            key={timeline.id}
                            type="button"
                            onClick={() =>
                              handleInputChange("timeline", timeline.id)
                            }
                            className={`p-4 rounded-lg border transition-all ${
                              formData.timeline === timeline.id
                                ? "border-primary bg-primary/10 text-primary"
                                : "border-border hover:border-primary/50"
                            }`}
                          >
                            {timeline.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Team & Budget */}
              {currentStep === 3 && (
                <div className="space-y-8">
                  <div className="text-center">
                    <h2 className="text-2xl font-bold text-foreground mb-4">
                      Team & Budget
                    </h2>
                    <p className="text-muted-foreground">
                      Help us recommend the right team size and approach
                    </p>
                  </div>

                  <div className="space-y-8">
                    {/* Team Size */}
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-4">
                        Preferred Team Size
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                          {
                            id: "solo",
                            label: "Solo Developer",
                            desc: "1 dedicated developer",
                          },
                          {
                            id: "small",
                            label: "Small Team",
                            desc: "2-3 team members",
                          },
                          {
                            id: "full",
                            label: "Full Team",
                            desc: "4+ specialists",
                          },
                        ].map(team => (
                          <Card
                            key={team.id}
                            className={`cursor-pointer transition-all ${
                              formData.teamSize === team.id
                                ? "ring-2 ring-primary bg-primary/5"
                                : "hover:bg-primary/5"
                            }`}
                            onClick={() =>
                              handleInputChange("teamSize", team.id)
                            }
                          >
                            <CardContent className="p-6 text-center">
                              <h4 className="font-semibold text-foreground mb-2">
                                {team.label}
                              </h4>
                              <p className="text-sm text-muted-foreground">
                                {team.desc}
                              </p>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>

                    {/* Budget */}
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-4">
                        Budget Range
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[
                          { id: "under-10k", label: "Under $10,000" },
                          { id: "10k-25k", label: "$10,000 - $25,000" },
                          { id: "25k-50k", label: "$25,000 - $50,000" },
                          { id: "50k-100k", label: "$50,000 - $100,000" },
                          { id: "100k-250k", label: "$100,000 - $250,000" },
                          { id: "over-250k", label: "Over $250,000" },
                        ].map(budget => (
                          <button
                            key={budget.id}
                            type="button"
                            onClick={() =>
                              handleInputChange("budget", budget.id)
                            }
                            className={`p-4 rounded-lg border transition-all ${
                              formData.budget === budget.id
                                ? "border-primary bg-primary/10 text-primary"
                                : "border-border hover:border-primary/50"
                            }`}
                          >
                            {budget.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Support */}
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-4">
                        Ongoing Support Needed?
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                          {
                            id: "none",
                            label: "No Support",
                            desc: "One-time delivery",
                          },
                          {
                            id: "basic",
                            label: "Basic Support",
                            desc: "Bug fixes & updates",
                          },
                          {
                            id: "full",
                            label: "Full Support",
                            desc: "Ongoing development",
                          },
                        ].map(support => (
                          <Card
                            key={support.id}
                            className={`cursor-pointer transition-all ${
                              formData.support === support.id
                                ? "ring-2 ring-primary bg-primary/5"
                                : "hover:bg-primary/5"
                            }`}
                            onClick={() =>
                              handleInputChange("support", support.id)
                            }
                          >
                            <CardContent className="p-6 text-center">
                              <h4 className="font-semibold text-foreground mb-2">
                                {support.label}
                              </h4>
                              <p className="text-sm text-muted-foreground">
                                {support.desc}
                              </p>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Contact Information */}
              {currentStep === 4 && (
                <div className="space-y-8">
                  <div className="text-center">
                    <h2 className="text-2xl font-bold text-foreground mb-4">
                      Contact Information
                    </h2>
                    <p className="text-muted-foreground">
                      We&apos;ll use this information to send you a detailed
                      quote
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
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
                        value={formData.name}
                        onChange={e =>
                          handleInputChange("name", e.target.value)
                        }
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
                        value={formData.email}
                        onChange={e =>
                          handleInputChange("email", e.target.value)
                        }
                        required
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-background"
                        placeholder="your@email.com"
                      />
                    </div>

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
                        value={formData.company}
                        onChange={e =>
                          handleInputChange("company", e.target.value)
                        }
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
                        value={formData.phone}
                        onChange={e =>
                          handleInputChange("phone", e.target.value)
                        }
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-background"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="description"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Additional Project Details
                    </label>
                    <textarea
                      id="description"
                      value={formData.description}
                      onChange={e =>
                        handleInputChange("description", e.target.value)
                      }
                      rows={5}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-background resize-none"
                      placeholder="Provide any additional details about your project, specific requirements, or questions..."
                    />
                  </div>

                  {/* Preliminary Estimate */}
                  {formData.projectType && formData.complexity && (
                    <Card className="bg-primary/5 border-primary/20">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          <Calculator className="w-6 h-6 text-primary mr-2" />
                          <h3 className="text-lg font-semibold text-foreground">
                            Preliminary Estimate
                          </h3>
                        </div>
                        <div className="text-2xl font-bold text-primary mb-2">
                          ${getEstimate().min.toLocaleString()} - $
                          {getEstimate().max.toLocaleString()}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          This is a rough estimate based on your selections. The
                          final quote will be more detailed and accurate.
                        </p>
                      </CardContent>
                    </Card>
                  )}
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between items-center mt-8 pt-8 border-t border-border">
                <Button
                  variant="outline"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className="flex items-center"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Previous
                </Button>

                <div className="text-sm text-muted-foreground">
                  Step {currentStep} of 4
                </div>

                {currentStep < 4 ? (
                  <Button
                    onClick={nextStep}
                    disabled={
                      (currentStep === 1 && !formData.projectType) ||
                      (currentStep === 2 &&
                        (!formData.platform.length || !formData.complexity)) ||
                      (currentStep === 3 &&
                        (!formData.teamSize || !formData.budget))
                    }
                    className="flex items-center"
                  >
                    Next
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                ) : (
                  <Button
                    onClick={handleSubmit}
                    disabled={!formData.name || !formData.email || isSubmitting}
                    className="flex items-center"
                  >
                    {isSubmitting ? (
                      "Submitting..."
                    ) : (
                      <>
                        Submit Quote Request
                        <Send className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
