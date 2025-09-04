import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Trash2, Sparkles } from "lucide-react";

interface ExperienceFormProps {
  data: any;
  onUpdate: (section: string, data: any) => void;
}

const ExperienceForm = ({ data, onUpdate }: ExperienceFormProps) => {
  const experience = data.experience || [];
  const [editingId, setEditingId] = useState<string | null>(null);

  const addExperience = () => {
    const newExperience = {
      id: Date.now().toString(),
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      current: false,
      description: "",
    };
    
    onUpdate("experience", [...experience, newExperience]);
    setEditingId(newExperience.id);
  };

  const updateExperience = (id: string, field: string, value: any) => {
    const updated = experience.map((exp: any) =>
      exp.id === id ? { ...exp, [field]: value } : exp
    );
    onUpdate("experience", updated);
  };

  const removeExperience = (id: string) => {
    const filtered = experience.filter((exp: any) => exp.id !== id);
    onUpdate("experience", filtered);
    if (editingId === id) {
      setEditingId(null);
    }
  };

  const generateDescription = (position: string, company: string) => {
    if (!position || !company) return;
    
    // Simple AI simulation
    const templates = [
      `• Developed and maintained web applications using modern frameworks and technologies
• Collaborated with cross-functional teams to deliver high-quality software solutions
• Implemented best practices for code quality, testing, and deployment processes`,
      `• Led project initiatives resulting in improved efficiency and user experience
• Worked closely with stakeholders to gather requirements and deliver solutions
• Contributed to team success through mentoring and knowledge sharing`,
      `• Designed and implemented scalable software solutions for business challenges
• Participated in agile development processes and code reviews
• Continuously learned new technologies to stay current with industry trends`
    ];
    
    const randomTemplate = templates[Math.floor(Math.random() * templates.length)];
    updateExperience(editingId!, "description", randomTemplate);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">Work Experience</h3>
          <p className="text-sm text-muted-foreground">
            Add your professional experience, starting with the most recent.
          </p>
        </div>
        <Button onClick={addExperience} variant="outline" className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Add Experience
        </Button>
      </div>

      {experience.length === 0 ? (
        <Card className="border-dashed border-2 border-border">
          <CardContent className="flex flex-col items-center justify-center py-12 text-center">
            <div className="rounded-full bg-muted p-3 mb-4">
              <Plus className="h-6 w-6 text-muted-foreground" />
            </div>
            <h3 className="font-semibold mb-2">No experience added yet</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Add your work experience to showcase your professional background.
            </p>
            <Button onClick={addExperience} variant="hero">
              Add Your First Experience
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {experience.map((exp: any, index: number) => (
            <Card key={exp.id} className="border-border shadow-soft">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <div className="flex items-center gap-2">
                  <CardTitle className="text-sm font-medium">
                    Experience #{index + 1}
                  </CardTitle>
                  {exp.position && exp.company && (
                    <span className="text-sm text-muted-foreground">
                      - {exp.position} at {exp.company}
                    </span>
                  )}
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeExperience(exp.id)}
                  className="text-destructive hover:text-destructive-foreground hover:bg-destructive"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Company *</Label>
                    <Input
                      placeholder="Company name"
                      value={exp.company}
                      onChange={(e) => updateExperience(exp.id, "company", e.target.value)}
                      onFocus={() => setEditingId(exp.id)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Position *</Label>
                    <Input
                      placeholder="Job title"
                      value={exp.position}
                      onChange={(e) => updateExperience(exp.id, "position", e.target.value)}
                      onFocus={() => setEditingId(exp.id)}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label>Start Date *</Label>
                    <Input
                      type="month"
                      value={exp.startDate}
                      onChange={(e) => updateExperience(exp.id, "startDate", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>End Date</Label>
                    <Input
                      type="month"
                      value={exp.endDate}
                      onChange={(e) => updateExperience(exp.id, "endDate", e.target.value)}
                      disabled={exp.current}
                    />
                  </div>
                  <div className="flex items-center space-x-2 pt-8">
                    <Checkbox
                      id={`current-${exp.id}`}
                      checked={exp.current}
                      onCheckedChange={(checked) => {
                        updateExperience(exp.id, "current", checked);
                        if (checked) {
                          updateExperience(exp.id, "endDate", "");
                        }
                      }}
                    />
                    <Label htmlFor={`current-${exp.id}`} className="text-sm">
                      Current position
                    </Label>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label>Job Description *</Label>
                    {editingId === exp.id && (
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => generateDescription(exp.position, exp.company)}
                        className="text-primary hover:text-primary-foreground hover:bg-primary"
                      >
                        <Sparkles className="h-4 w-4 mr-1" />
                        AI Generate
                      </Button>
                    )}
                  </div>
                  <Textarea
                    placeholder="• Describe your key responsibilities and achievements
• Use bullet points for better readability
• Focus on quantifiable results and impact"
                    value={exp.description}
                    onChange={(e) => updateExperience(exp.id, "description", e.target.value)}
                    onFocus={() => setEditingId(exp.id)}
                    className="min-h-[120px] resize-none"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExperienceForm;