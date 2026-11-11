import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, ExternalLink, Calendar, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getCertifications, type CertificationContent } from "@/lib/api";

const CertificationsSection = () => {
  const [certifications, setCertifications] = useState<CertificationContent[]>([]);

  useEffect(() => {
    getCertifications()
      .then(setCertifications)
      .catch((error) => console.error("Failed to load certifications", error));
  }, []);

  return (
    <section id="certifications" className="py-24 bg-surface-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-primary mb-4">
            <Award className="h-6 w-6" />
            <span className="text-sm uppercase tracking-wide">Professional Credentials</span>
          </div>
          <h2 className="text-4xl font-bold mb-6">Certifications</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Industry-recognized certifications demonstrating expertise in cybersecurity domains
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert) => (
            <Card key={cert.id} className="group bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {cert.name}
                    </CardTitle>
                    <p className="text-primary font-semibold mt-1">{cert.issuer}</p>
                  </div>
                  <Badge 
                    variant={cert.status === "Active" ? "default" : "secondary"}
                    className={cert.status === "Active" ? "bg-primary text-primary-foreground" : ""}
                  >
                    <CheckCircle className="h-3 w-3 mr-1" />
                    {cert.status}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{cert.description}</p>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {cert.date}
                  </div>
                  <div>ID: {cert.credential_id}</div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>

                <a href={cert.url} target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button variant="outline" size="sm" className="w-full mt-4 group">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Verify Credential
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;