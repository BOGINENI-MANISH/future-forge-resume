import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

interface PersonalInfoFormProps {
  data: any;
  onUpdate: (section: string, data: any) => void;
}

const PersonalInfoForm = ({ data, onUpdate }: PersonalInfoFormProps) => {
  const personalInfo = data.personalInfo || {};

  const handleChange = (field: string, value: string) => {
    onUpdate("personalInfo", {
      ...personalInfo,
      [field]: value,
    });
  };

  const generateSummary = () => {
    // Simple AI simulation - in real app would call AI service
    const suggestions = [
      "Results-driven professional with expertise in modern web technologies and a passion for creating innovative solutions.",
      "Motivated graduate with strong analytical skills and experience in full-stack development using React, JavaScript, and modern frameworks.",
      "Detail-oriented developer with a proven track record of delivering high-quality software solutions and excellent problem-solving abilities.",
    ];
    
    const randomSummary = suggestions[Math.floor(Math.random() * suggestions.length)];
    handleChange("summary", randomSummary);
  };

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="fullName">Full Name *</Label>
          <Input
            id="fullName"
            placeholder="Enter your full name"
            value={personalInfo.fullName || ""}
            onChange={(e) => handleChange("fullName", e.target.value)}
            className="border-border focus:ring-primary"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email">Email Address *</Label>
          <Input
            id="email"
            type="email"
            placeholder="your.email@example.com"
            value={personalInfo.email || ""}
            onChange={(e) => handleChange("email", e.target.value)}
            className="border-border focus:ring-primary"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            placeholder="+1 (555) 123-4567"
            value={personalInfo.phone || ""}
            onChange={(e) => handleChange("phone", e.target.value)}
            className="border-border focus:ring-primary"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="location">Location</Label>
          <Input
            id="location"
            placeholder="City, State"
            value={personalInfo.location || ""}
            onChange={(e) => handleChange("location", e.target.value)}
            className="border-border focus:ring-primary"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="linkedIn">LinkedIn Profile</Label>
        <Input
          id="linkedIn"
          placeholder="https://linkedin.com/in/yourprofile"
          value={personalInfo.linkedIn || ""}
          onChange={(e) => handleChange("linkedIn", e.target.value)}
          className="border-border focus:ring-primary"
        />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="summary">Professional Summary</Label>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={generateSummary}
            className="text-primary hover:text-primary-foreground hover:bg-primary"
          >
            <Sparkles className="h-4 w-4 mr-1" />
            AI Generate
          </Button>
        </div>
        <Textarea
          id="summary"
          placeholder="Write a compelling summary of your professional background and key strengths..."
          value={personalInfo.summary || ""}
          onChange={(e) => handleChange("summary", e.target.value)}
          className="min-h-[100px] border-border focus:ring-primary resize-none"
        />
        <p className="text-sm text-muted-foreground">
          2-3 sentences highlighting your key qualifications and career goals.
        </p>
      </div>
    </div>
  );
};

export default PersonalInfoForm;