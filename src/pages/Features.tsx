import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  ArrowLeft, 
  Zap, 
  FileText, 
  Target, 
  CheckCircle, 
  Sparkles, 
  TrendingUp,
  Users,
  Award,
  Clock,
  Shield
} from "lucide-react";

const Features = () => {
  const navigate = useNavigate();
  const [activeFeature, setActiveFeature] = useState<string | null>(null);

  const aiFeatures = [
    {
      id: "smart-content",
      icon: Brain,
      title: "Smart Content Generation",
      description: "AI analyzes your background and generates compelling resume content tailored to your industry.",
      details: [
        "Industry-specific language optimization",
        "Action verb suggestions",
        "Achievement quantification",
        "Keyword optimization for ATS"
      ],
      benefit: "Save 3+ hours on content creation"
    },
    {
      id: "job-matching",
      icon: Target,
      title: "Job Description Matching",
      description: "Upload any job posting and our AI will optimize your resume to match the requirements perfectly.",
      details: [
        "Skill gap analysis",
        "Requirement alignment",
        "Keyword integration",
        "Relevance scoring"
      ],
      benefit: "3x higher callback rates"
    },
    {
      id: "ats-optimization",
      icon: Shield,
      title: "ATS System Bypass",
      description: "Ensure your resume passes through Applicant Tracking Systems with our advanced optimization.",
      details: [
        "Format compatibility check",
        "Section structure optimization",
        "Font and spacing analysis",
        "Parsing validation"
      ],
      benefit: "95% ATS compatibility rate"
    },
    {
      id: "instant-feedback",
      icon: Zap,
      title: "Real-time Feedback",
      description: "Get instant suggestions and improvements as you build your resume.",
      details: [
        "Grammar and spelling checks",
        "Content strength analysis",
        "Format recommendations",
        "Industry best practices"
      ],
      benefit: "Professional quality guaranteed"
    },
    {
      id: "smart-templates",
      icon: FileText,
      title: "AI-Powered Templates",
      description: "Choose from templates that adapt to your experience level and target role.",
      details: [
        "Role-specific layouts",
        "Experience level optimization",
        "Industry-tailored designs",
        "Modern, professional aesthetics"
      ],
      benefit: "Stand out from 90% of applicants"
    },
    {
      id: "performance-tracking",
      icon: TrendingUp,
      title: "Success Analytics",
      description: "Track your resume's performance and get insights on how to improve your job search.",
      details: [
        "Application tracking",
        "Response rate analysis",
        "A/B testing suggestions",
        "Market trend insights"
      ],
      benefit: "Data-driven job search strategy"
    }
  ];

  const handleStartBuilding = () => {
    // Check if user is signed in
    const userData = localStorage.getItem('resumeai_user');
    if (userData) {
      navigate('/builder');
    } else {
      navigate('/signin');
    }
  };

  const handleFeatureClick = (featureId: string) => {
    setActiveFeature(activeFeature === featureId ? null : featureId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
          <div className="flex items-center gap-2">
            <Brain className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold text-foreground">ResumeAI</h1>
          </div>
          <Button variant="outline" onClick={() => navigate('/signin')}>
            Sign In
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-primary text-white px-4 py-2 rounded-full text-sm font-medium shadow-soft">
            <Sparkles className="h-4 w-4" />
            Advanced AI Technology
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            The Power of AI
            <span className="bg-gradient-hero bg-clip-text text-transparent"> in Your Hands</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover how our cutting-edge AI transforms the way you create resumes. Each feature is designed to give you a competitive edge in today's job market.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <Card className="bg-gradient-card border-0 shadow-medium text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
              <div className="text-sm text-muted-foreground">Resumes Created</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-card border-0 shadow-medium text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">95%</div>
              <div className="text-sm text-muted-foreground">ATS Pass Rate</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-card border-0 shadow-medium text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">3x</div>
              <div className="text-sm text-muted-foreground">Higher Callbacks</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-card border-0 shadow-medium text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">5 min</div>
              <div className="text-sm text-muted-foreground">Average Build Time</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* AI Features Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">AI-Powered Features</h2>
          <p className="text-xl text-muted-foreground">
            Click on any feature to see how our AI works its magic
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {aiFeatures.map((feature, index) => {
            const Icon = feature.icon;
            const isActive = activeFeature === feature.id;
            
            return (
              <Card 
                key={feature.id}
                className={`bg-gradient-card border-0 shadow-medium hover:shadow-strong transition-all duration-300 cursor-pointer ${
                  isActive ? 'ring-2 ring-primary shadow-strong scale-105' : 'hover:scale-102'
                }`}
                onClick={() => handleFeatureClick(feature.id)}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{feature.title}</CardTitle>
                        <Badge variant="secondary" className="mt-1">
                          {feature.benefit}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-base mt-4">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                
                {isActive && (
                  <CardContent className="pt-0">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground">How it works:</h4>
                      <ul className="space-y-2">
                        {feature.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                )}
              </Card>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-gradient-hero rounded-3xl p-12 text-center text-white shadow-strong">
          <h2 className="text-4xl font-bold mb-4">Ready to Experience AI-Powered Resume Building?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands who've already transformed their job search with ResumeAI
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="secondary" 
              size="xl"
              onClick={handleStartBuilding}
              className="bg-white text-primary hover:bg-white/90"
            >
              Start Building Your Resume
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              onClick={() => navigate('/signin')}
              className="border-white text-white hover:bg-white/10"
            >
              Sign In to Continue
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;