import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, User, Briefcase, GraduationCap, Award, Eye } from "lucide-react";
import PersonalInfoForm from "./forms/PersonalInfoForm";
import ExperienceForm from "./forms/ExperienceForm";
import EducationForm from "./forms/EducationForm";
import SkillsForm from "./forms/SkillsForm";
import ResumePreview from "./ResumePreview";

interface ResumeBuilderProps {
  onBack: () => void;
}

interface ResumeData {
  personalInfo: {
    fullName: string;
    email: string;
    phone: string;
    location: string;
    linkedIn: string;
    summary: string;
  };
  experience: Array<{
    id: string;
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    current: boolean;
    description: string;
  }>;
  education: Array<{
    id: string;
    school: string;
    degree: string;
    field: string;
    startDate: string;
    endDate: string;
    gpa?: string;
  }>;
  skills: {
    technical: string[];
    soft: string[];
    languages: string[];
  };
}

const initialResumeData: ResumeData = {
  personalInfo: {
    fullName: "",
    email: "",
    phone: "",
    location: "",
    linkedIn: "",
    summary: "",
  },
  experience: [],
  education: [],
  skills: {
    technical: [],
    soft: [],
    languages: [],
  },
};

const steps = [
  { id: 1, title: "Personal Info", icon: User, component: PersonalInfoForm },
  { id: 2, title: "Experience", icon: Briefcase, component: ExperienceForm },
  { id: 3, title: "Education", icon: GraduationCap, component: EducationForm },
  { id: 4, title: "Skills", icon: Award, component: SkillsForm },
  { id: 5, title: "Preview", icon: Eye, component: ResumePreview },
];

const ResumeBuilder = ({ onBack }: ResumeBuilderProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [resumeData, setResumeData] = useState<ResumeData>(initialResumeData);
  const [showPreview, setShowPreview] = useState(false);

  const updateResumeData = (section: keyof ResumeData, data: any) => {
    setResumeData(prev => ({
      ...prev,
      [section]: data,
    }));
  };

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const currentStepData = steps.find(step => step.id === currentStep);
  const CurrentFormComponent = currentStepData?.component;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
      {/* Header */}
      <header className="border-b border-border bg-white/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" onClick={onBack}>
                <ArrowLeft className="h-4 w-4" />
                Back
              </Button>
              <h1 className="text-2xl font-bold text-foreground">Resume Builder</h1>
            </div>
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                onClick={() => setShowPreview(!showPreview)}
                className="hidden lg:flex"
              >
                <Eye className="h-4 w-4" />
                {showPreview ? "Hide Preview" : "Show Preview"}
              </Button>
              <div className="text-sm text-muted-foreground">
                Step {currentStep} of {steps.length}
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Form Section */}
          <div className={`${showPreview ? "lg:col-span-7" : "lg:col-span-8 mx-auto max-w-4xl"}`}>
            {/* Progress Steps */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                {steps.map((step, index) => (
                  <div key={step.id} className="flex items-center">
                    <div
                      className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300 ${
                        step.id <= currentStep
                          ? "bg-gradient-primary text-white border-transparent shadow-soft"
                          : "border-border text-muted-foreground"
                      }`}
                    >
                      <step.icon className="h-5 w-5" />
                    </div>
                    {index < steps.length - 1 && (
                      <div
                        className={`h-1 w-12 mx-2 rounded-full transition-all duration-300 ${
                          step.id < currentStep ? "bg-gradient-primary" : "bg-border"
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>
              <div className="text-center">
                <h2 className="text-2xl font-bold text-foreground">{currentStepData?.title}</h2>
                <p className="text-muted-foreground mt-1">
                  Fill in the information below to build your professional resume
                </p>
              </div>
            </div>

            {/* Form Content */}
            <Card className="shadow-medium border-0 bg-gradient-card">
              <CardContent className="p-8">
                {CurrentFormComponent && (
                  <CurrentFormComponent
                    data={resumeData}
                    onUpdate={updateResumeData}
                  />
                )}
              </CardContent>
            </Card>

            {/* Navigation */}
            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 1}
                className="w-32"
              >
                <ArrowLeft className="h-4 w-4" />
                Previous
              </Button>
              <Button
                variant="hero"
                onClick={nextStep}
                disabled={currentStep === steps.length}
                className="w-32"
              >
                {currentStep === steps.length ? "Complete" : "Next"}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Preview Section */}
          {showPreview && (
            <div className="lg:col-span-5">
              <div className="sticky top-24">
                <Card className="shadow-strong border-0 bg-white">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Eye className="h-5 w-5" />
                      Live Preview
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResumePreview data={resumeData} />
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;