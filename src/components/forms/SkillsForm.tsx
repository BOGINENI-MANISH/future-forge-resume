import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, X, Sparkles } from "lucide-react";

interface SkillsFormProps {
  data: any;
  onUpdate: (section: string, data: any) => void;
}

const SkillsForm = ({ data, onUpdate }: SkillsFormProps) => {
  const skills = data.skills || { technical: [], soft: [], languages: [] };
  const [newSkill, setNewSkill] = useState({ technical: "", soft: "", languages: "" });

  const addSkill = (category: keyof typeof skills, skill: string) => {
    if (!skill.trim()) return;
    
    const updatedSkills = {
      ...skills,
      [category]: [...skills[category], skill.trim()],
    };
    
    onUpdate("skills", updatedSkills);
    setNewSkill({ ...newSkill, [category]: "" });
  };

  const removeSkill = (category: keyof typeof skills, index: number) => {
    const updatedSkills = {
      ...skills,
      [category]: skills[category].filter((_: any, i: number) => i !== index),
    };
    
    onUpdate("skills", updatedSkills);
  };

  const generateSkills = (category: keyof typeof skills) => {
    const skillSuggestions = {
      technical: [
        "JavaScript", "Python", "React", "Node.js", "TypeScript", "HTML/CSS",
        "Git", "SQL", "AWS", "Docker", "Linux", "REST APIs"
      ],
      soft: [
        "Leadership", "Communication", "Problem Solving", "Team Collaboration",
        "Time Management", "Critical Thinking", "Adaptability", "Project Management"
      ],
      languages: [
        "English (Native)", "Spanish (Conversational)", "French (Basic)",
        "Mandarin (Intermediate)", "German (Fluent)"
      ]
    };

    const suggestions = skillSuggestions[category];
    const randomSkills = suggestions
      .sort(() => Math.random() - 0.5)
      .slice(0, 5)
      .filter(skill => !skills[category].includes(skill));

    const updatedSkills = {
      ...skills,
      [category]: [...skills[category], ...randomSkills],
    };
    
    onUpdate("skills", updatedSkills);
  };

  const handleKeyPress = (e: React.KeyboardEvent, category: keyof typeof skills) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addSkill(category, newSkill[category]);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold">Skills & Competencies</h3>
        <p className="text-sm text-muted-foreground">
          Highlight your key skills to help employers understand your capabilities.
        </p>
      </div>

      {/* Technical Skills */}
      <Card className="border-border shadow-soft">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <CardTitle className="text-base">Technical Skills</CardTitle>
            <Button
              variant="outline"
              size="sm"
              onClick={() => generateSkills("technical")}
              className="text-primary hover:text-primary-foreground hover:bg-primary"
            >
              <Sparkles className="h-4 w-4 mr-1" />
              AI Suggest
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Input
              placeholder="e.g., JavaScript, Python, React..."
              value={newSkill.technical}
              onChange={(e) => setNewSkill({ ...newSkill, technical: e.target.value })}
              onKeyPress={(e) => handleKeyPress(e, "technical")}
              className="flex-1"
            />
            <Button
              onClick={() => addSkill("technical", newSkill.technical)}
              variant="outline"
              size="sm"
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {skills.technical.map((skill: string, index: number) => (
              <Badge
                key={index}
                variant="secondary"
                className="flex items-center gap-1 px-3 py-1 bg-gradient-primary text-white hover:bg-primary/90"
              >
                {skill}
                <button
                  onClick={() => removeSkill("technical", index)}
                  className="ml-1 hover:bg-white/20 rounded-full p-0.5"
                >
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Soft Skills */}
      <Card className="border-border shadow-soft">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <CardTitle className="text-base">Soft Skills</CardTitle>
            <Button
              variant="outline"
              size="sm"
              onClick={() => generateSkills("soft")}
              className="text-primary hover:text-primary-foreground hover:bg-primary"
            >
              <Sparkles className="h-4 w-4 mr-1" />
              AI Suggest
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Input
              placeholder="e.g., Leadership, Communication..."
              value={newSkill.soft}
              onChange={(e) => setNewSkill({ ...newSkill, soft: e.target.value })}
              onKeyPress={(e) => handleKeyPress(e, "soft")}
              className="flex-1"
            />
            <Button
              onClick={() => addSkill("soft", newSkill.soft)}
              variant="outline"
              size="sm"
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {skills.soft.map((skill: string, index: number) => (
              <Badge
                key={index}
                variant="secondary"
                className="flex items-center gap-1 px-3 py-1 bg-accent text-accent-foreground hover:bg-accent/80"
              >
                {skill}
                <button
                  onClick={() => removeSkill("soft", index)}
                  className="ml-1 hover:bg-white/20 rounded-full p-0.5"
                >
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Languages */}
      <Card className="border-border shadow-soft">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <CardTitle className="text-base">Languages</CardTitle>
            <Button
              variant="outline"
              size="sm"
              onClick={() => generateSkills("languages")}
              className="text-primary hover:text-primary-foreground hover:bg-primary"
            >
              <Sparkles className="h-4 w-4 mr-1" />
              AI Suggest
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Input
              placeholder="e.g., English (Native), Spanish (Fluent)..."
              value={newSkill.languages}
              onChange={(e) => setNewSkill({ ...newSkill, languages: e.target.value })}
              onKeyPress={(e) => handleKeyPress(e, "languages")}
              className="flex-1"
            />
            <Button
              onClick={() => addSkill("languages", newSkill.languages)}
              variant="outline"
              size="sm"
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {skills.languages.map((skill: string, index: number) => (
              <Badge
                key={index}
                variant="outline"
                className="flex items-center gap-1 px-3 py-1 border-primary text-primary hover:bg-primary hover:text-white"
              >
                {skill}
                <button
                  onClick={() => removeSkill("languages", index)}
                  className="ml-1 hover:bg-white/20 rounded-full p-0.5"
                >
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="bg-muted/50 rounded-lg p-4 border border-border">
        <h4 className="font-medium mb-2 text-foreground">Skills Tips:</h4>
        <ul className="text-sm text-muted-foreground space-y-1">
          <li>• Focus on skills relevant to your target job</li>
          <li>• Use industry-standard terminology</li>
          <li>• Include proficiency levels for languages</li>
          <li>• Balance technical and soft skills</li>
        </ul>
      </div>
    </div>
  );
};

export default SkillsForm;