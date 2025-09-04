import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, FileText, Zap, Star, ArrowRight, Brain } from "lucide-react";
import heroImage from "@/assets/hero-resume-builder.jpg";
import ResumeBuilder from "@/components/ResumeBuilder";

const Index = () => {
  const [showBuilder, setShowBuilder] = useState(false);

  if (showBuilder) {
    return <ResumeBuilder onBack={() => setShowBuilder(false)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Brain className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold text-foreground">ResumeAI</h1>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost">Sign In</Button>
            <Button variant="outline">Get Started</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-gradient-primary text-white px-4 py-2 rounded-full text-sm font-medium shadow-soft">
                <Sparkles className="h-4 w-4" />
                AI-Powered Resume Builder
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Create Your Perfect Resume in
                <span className="bg-gradient-hero bg-clip-text text-transparent"> Minutes</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Land your dream job with AI-powered resume optimization. Built for young graduates and professionals who want to stand out.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="xl" 
                onClick={() => setShowBuilder(true)}
                className="group"
              >
                Build My Resume Now
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl">
                See Examples
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">4.9/5 from 10,000+ users</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-hero blur-3xl opacity-20 rounded-full"></div>
            <img 
              src={heroImage} 
              alt="Professional resume builder interface" 
              className="relative z-10 rounded-2xl shadow-strong w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-foreground">Why Choose ResumeAI?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our AI-powered platform helps you create resumes that get noticed by employers and ATS systems.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-gradient-card border-0 shadow-medium hover:shadow-strong transition-all duration-300 hover:scale-105">
            <CardHeader>
              <div className="h-12 w-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <CardTitle>AI-Powered Optimization</CardTitle>
              <CardDescription>
                Our advanced AI analyzes job descriptions and optimizes your resume for maximum impact.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-gradient-card border-0 shadow-medium hover:shadow-strong transition-all duration-300 hover:scale-105">
            <CardHeader>
              <div className="h-12 w-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <CardTitle>Lightning Fast</CardTitle>
              <CardDescription>
                Create a professional resume in under 10 minutes with our intuitive builder.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-gradient-card border-0 shadow-medium hover:shadow-strong transition-all duration-300 hover:scale-105">
            <CardHeader>
              <div className="h-12 w-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <CardTitle>ATS-Friendly</CardTitle>
              <CardDescription>
                All our templates are designed to pass Applicant Tracking Systems with ease.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-gradient-hero rounded-3xl p-12 text-center text-white shadow-strong">
          <h2 className="text-4xl font-bold mb-4">Ready to Land Your Dream Job?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of professionals who've boosted their careers with ResumeAI.
          </p>
          <Button 
            variant="secondary" 
            size="xl"
            onClick={() => setShowBuilder(true)}
            className="bg-white text-primary hover:bg-white/90"
          >
            Start Building Now - It's Free
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 border-t border-border">
        <div className="text-center text-muted-foreground">
          <p>&copy; 2024 ResumeAI. All rights reserved. Built with ❤️ for job seekers.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;