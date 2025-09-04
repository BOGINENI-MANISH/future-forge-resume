import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Trash2, GraduationCap } from "lucide-react";

interface EducationFormProps {
  data: any;
  onUpdate: (section: string, data: any) => void;
}

const EducationForm = ({ data, onUpdate }: EducationFormProps) => {
  const education = data.education || [];

  const addEducation = () => {
    const newEducation = {
      id: Date.now().toString(),
      school: "",
      degree: "",
      field: "",
      startDate: "",
      endDate: "",
      gpa: "",
    };
    
    onUpdate("education", [...education, newEducation]);
  };

  const updateEducation = (id: string, field: string, value: string) => {
    const updated = education.map((edu: any) =>
      edu.id === id ? { ...edu, [field]: value } : edu
    );
    onUpdate("education", updated);
  };

  const removeEducation = (id: string) => {
    const filtered = education.filter((edu: any) => edu.id !== id);
    onUpdate("education", filtered);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">Education</h3>
          <p className="text-sm text-muted-foreground">
            Add your educational background, starting with the most recent.
          </p>
        </div>
        <Button onClick={addEducation} variant="outline" className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Add Education
        </Button>
      </div>

      {education.length === 0 ? (
        <Card className="border-dashed border-2 border-border">
          <CardContent className="flex flex-col items-center justify-center py-12 text-center">
            <div className="rounded-full bg-muted p-3 mb-4">
              <GraduationCap className="h-6 w-6 text-muted-foreground" />
            </div>
            <h3 className="font-semibold mb-2">No education added yet</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Add your educational qualifications to strengthen your profile.
            </p>
            <Button onClick={addEducation} variant="hero">
              Add Your Education
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {education.map((edu: any, index: number) => (
            <Card key={edu.id} className="border-border shadow-soft">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <div className="flex items-center gap-2">
                  <CardTitle className="text-sm font-medium">
                    Education #{index + 1}
                  </CardTitle>
                  {edu.degree && edu.field && (
                    <span className="text-sm text-muted-foreground">
                      - {edu.degree} in {edu.field}
                    </span>
                  )}
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeEducation(edu.id)}
                  className="text-destructive hover:text-destructive-foreground hover:bg-destructive"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>School/University *</Label>
                  <Input
                    placeholder="University or school name"
                    value={edu.school}
                    onChange={(e) => updateEducation(edu.id, "school", e.target.value)}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Degree *</Label>
                    <Input
                      placeholder="e.g., Bachelor's, Master's, PhD"
                      value={edu.degree}
                      onChange={(e) => updateEducation(edu.id, "degree", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Field of Study *</Label>
                    <Input
                      placeholder="e.g., Computer Science, Engineering"
                      value={edu.field}
                      onChange={(e) => updateEducation(edu.id, "field", e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label>Start Date</Label>
                    <Input
                      type="month"
                      value={edu.startDate}
                      onChange={(e) => updateEducation(edu.id, "startDate", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>End Date</Label>
                    <Input
                      type="month"
                      value={edu.endDate}
                      onChange={(e) => updateEducation(edu.id, "endDate", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>GPA (Optional)</Label>
                    <Input
                      placeholder="e.g., 3.8/4.0"
                      value={edu.gpa}
                      onChange={(e) => updateEducation(edu.id, "gpa", e.target.value)}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      <div className="bg-muted/50 rounded-lg p-4 border border-border">
        <h4 className="font-medium mb-2 text-foreground">Tips for Education Section:</h4>
        <ul className="text-sm text-muted-foreground space-y-1">
          <li>• List your most recent education first</li>
          <li>• Include relevant coursework, honors, or achievements</li>
          <li>• Only include GPA if it's 3.5 or higher</li>
          <li>• For recent graduates, education should come before experience</li>
        </ul>
      </div>
    </div>
  );
};

export default EducationForm;