import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Share } from "lucide-react";

interface ResumePreviewProps {
  data: any;
}

const ResumePreview = ({ data }: ResumePreviewProps) => {
  const { personalInfo, experience, education, skills } = data;

  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { 
      year: "numeric", 
      month: "short" 
    });
  };

  return (
    <div className="space-y-4">
      {/* Action Buttons */}
      <div className="flex gap-2">
        <Button variant="hero" size="sm" className="flex-1">
          <Download className="h-4 w-4" />
          Download PDF
        </Button>
        <Button variant="outline" size="sm" className="flex-1">
          <Share className="h-4 w-4" />
          Share
        </Button>
      </div>

      {/* Resume Preview */}
      <div className="bg-white border border-border rounded-lg shadow-soft overflow-hidden">
        <div className="p-8 space-y-6 text-sm">
          {/* Header */}
          <div className="text-center border-b border-border pb-6">
            <h1 className="text-2xl font-bold text-foreground mb-2">
              {personalInfo?.fullName || "Your Name"}
            </h1>
            <div className="flex flex-wrap justify-center gap-4 text-muted-foreground text-xs">
              {personalInfo?.email && (
                <span>{personalInfo.email}</span>
              )}
              {personalInfo?.phone && (
                <span>{personalInfo.phone}</span>
              )}
              {personalInfo?.location && (
                <span>{personalInfo.location}</span>
              )}
              {personalInfo?.linkedIn && (
                <span className="text-primary">LinkedIn Profile</span>
              )}
            </div>
          </div>

          {/* Professional Summary */}
          {personalInfo?.summary && (
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-2 border-b border-muted pb-1">
                Professional Summary
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {personalInfo.summary}
              </p>
            </div>
          )}

          {/* Experience */}
          {experience && experience.length > 0 && (
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-3 border-b border-muted pb-1">
                Experience
              </h2>
              <div className="space-y-4">
                {experience.map((exp: any, index: number) => (
                  <div key={exp.id || index}>
                    <div className="flex justify-between items-start mb-1">
                      <div>
                        <h3 className="font-semibold text-foreground">
                          {exp.position || "Position Title"}
                        </h3>
                        <p className="text-primary font-medium">
                          {exp.company || "Company Name"}
                        </p>
                      </div>
                      <span className="text-xs text-muted-foreground whitespace-nowrap">
                        {formatDate(exp.startDate)} - {exp.current ? "Present" : formatDate(exp.endDate)}
                      </span>
                    </div>
                    {exp.description && (
                      <div className="text-muted-foreground text-xs leading-relaxed whitespace-pre-line mt-2">
                        {exp.description}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Education */}
          {education && education.length > 0 && (
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-3 border-b border-muted pb-1">
                Education
              </h2>
              <div className="space-y-3">
                {education.map((edu: any, index: number) => (
                  <div key={edu.id || index} className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-foreground">
                        {edu.degree || "Degree"} {edu.field && `in ${edu.field}`}
                      </h3>
                      <p className="text-primary font-medium">
                        {edu.school || "School Name"}
                      </p>
                      {edu.gpa && (
                        <p className="text-xs text-muted-foreground">GPA: {edu.gpa}</p>
                      )}
                    </div>
                    <span className="text-xs text-muted-foreground whitespace-nowrap">
                      {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Skills */}
          {skills && (skills.technical?.length > 0 || skills.soft?.length > 0 || skills.languages?.length > 0) && (
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-3 border-b border-muted pb-1">
                Skills
              </h2>
              <div className="space-y-2">
                {skills.technical?.length > 0 && (
                  <div>
                    <h4 className="font-medium text-foreground text-xs mb-1">Technical Skills:</h4>
                    <p className="text-muted-foreground text-xs">
                      {skills.technical.join(" • ")}
                    </p>
                  </div>
                )}
                {skills.soft?.length > 0 && (
                  <div>
                    <h4 className="font-medium text-foreground text-xs mb-1">Soft Skills:</h4>
                    <p className="text-muted-foreground text-xs">
                      {skills.soft.join(" • ")}
                    </p>
                  </div>
                )}
                {skills.languages?.length > 0 && (
                  <div>
                    <h4 className="font-medium text-foreground text-xs mb-1">Languages:</h4>
                    <p className="text-muted-foreground text-xs">
                      {skills.languages.join(" • ")}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Empty State */}
          {!personalInfo?.fullName && !experience?.length && !education?.length && (
            <div className="text-center py-12 text-muted-foreground">
              <p className="mb-2">Your resume preview will appear here</p>
              <p className="text-xs">Fill out the form to see your professional resume take shape</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResumePreview;