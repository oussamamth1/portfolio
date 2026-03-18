import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, ExternalLink, Calendar, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const CertificationsSection = () => {
  const certifications = [
    {
      name: "Fundamentals of Deep Learning",
      issuer: "NVIDIA",
      date: "2025",
      status: "Active",
      credentialId: "1tO0Ys3ITkGJkXM3sgBKrQ",
      description: "Deep learning fundamentals and practical implementation using Python",
      skills: ["Deep Learning", "Python", "Neural Networks", "AI Development"],
      url: "https://learn.nvidia.com/certificates?id=1tO0Ys3ITkGJkXM3sgBKrQ"
    },
    {
      name: "Evaluation and Light Customization of Large Language Models",
      issuer: "NVIDIA",
      date: "2025",
      status: "Active",
      credentialId: "M9kdR7yQQ5WiuvosdW_R4g",
      description: "Evaluation and light customization of large language models",
      skills: ["Large Language Models", "Evaluation", "Customization"],
      url: "https://learn.nvidia.com/certificates?id=M9kdR7yQQ5WiuvosdW_R4g"
    },
    {
      name: "AppSec (CAP)",
      issuer: "The SECOPS GROUP",
      date: "2025",
      status: "Active",
      credentialId: "10087776",
      description: "Application security fundamentals and secure development practices",
      skills: ["Application Security", "Secure Coding", "OWASP", "Vulnerability Assessment"],
      url: "https://pentestingexams.com/certificate-validation/"
    },
    {
      name: "Scrum Foundation",
      issuer: "CertiProf",
      date: "2024",
      status: "Active",
      credentialId: "8440a79c-603f-485b-9f98-8fca213a817c",
      description: "Agile project management and Scrum methodology fundamentals",
      skills: ["Agile Development", "Scrum", "Project Management", "Team Collaboration"],
      url: "https://www.credly.com/badges/8440a79c-603f-485b-9f98-8fca213a817c/public_url"
    },
    {
      name: "Hashgraph Developer",
      issuer: "The Hashgraph Association",
      date: "2025",
      status: "Active",
      credentialId: "2d0ed167-0b26-41b3-a16d-5d373cd4463b",
      description: "Hashgraph development and implementation",
      skills: ["Hashgraph", "Development", "Implementation", "Smart Contracts"],
      url: "https://certs.hashgraphdev.com/2d0ed167-0b26-41b3-a16d-5d373cd4463b.pdf"
    },
    {
      name: "Oracle AI Vector Search Certified Professional",
      issuer: "Oracle",
      date: "2025",
      status: "Active",
      credentialId: "3E1FD1803CC8A032863018AAA3A21D25C6D09345062A6BFB2848FF12D7C94AAE",
      description: "AI vector search implementation and optimization",
      skills: ["AI", "Vector Search", "Implementation", "Optimization"],
      url: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=3E1FD1803CC8A032863018AAA3A21D25C6D09345062A6BFB2848FF12D7C94AAE"
    },
    {
      name: "Cisco Cybersecurity",
      issuer: "Cisco",
      date: "2024",
      status: "Active",
      credentialId: "a48a3270-e587-47a0-ad30-9a183c5c4c42",
      description: "Network security fundamentals and Cisco security technologies",
      skills: ["Network Security", "Cisco Technologies", "Threat Detection", "Security Protocols"],
      url: "https://www.credly.com/badges/a48a3270-e587-47a0-ad30-9a183c5c4c42/public_url"
    },
    {
      name: "Github Foundation",
      issuer: "GitHub",
      date: "2025",
      status: "Active",
      credentialId: "2307d695-4e5c-4488-8578-7cda57c82d0a",
      description: "Version control and collaborative development with Git and GitHub",
      skills: ["Version Control", "Git", "GitHub", "Collaborative Development"],
      url: "https://www.credly.com/badges/2307d695-4e5c-4488-8578-7cda57c82d0a/public_url"
    },
    {
      name: "TryHackMe Pre Security",
      issuer: "TryHackMe",
      date: "2025",
      status: "Active",
      credentialId: "THM-PRESEC-001",
      description: "Cybersecurity fundamentals and ethical hacking basics",
      skills: ["Cybersecurity Basics", "Ethical Hacking", "Network Security", "Linux"],
      url: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-YALUUJOW4H.pdf"
    },
    {
      name: "IBM Data Visualization",
      issuer: "IBM",
      date: "2024",
      status: "Active",
      credentialId: "3e8597df-085b-4c34-be6a-a47a657f93b6",
      description: "Data visualization techniques and business intelligence",
      skills: ["Data Visualization", "Business Intelligence", "Analytics", "Dashboard Design"],
      url: "https://www.credly.com/badges/3e8597df-085b-4c34-be6a-a47a657f93b6/public_url"
    },
    {
      name: "DevSecOps Learning",
      issuer: "TryHackMe",
      date: "2024",
      status: "Active",
      credentialId: "DEVSECOPS-001",
      description: "Security integration in DevOps pipelines and secure development",
      skills: ["DevSecOps", "CI/CD Security", "Infrastructure as Code", "Security Automation"],
      url: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-YALUUJOW4H.pdf"
    }
  ];

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
          {certifications.map((cert, index) => (
            <Card key={index} className="group bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow">
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
                  <div>ID: {cert.credentialId}</div>
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