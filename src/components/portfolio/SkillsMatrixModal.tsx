import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { Shield, Server, Code, Bug } from 'lucide-react';

interface SkillsMatrixModalProps {
  onClose: () => void;
}

const roles = [
  {
    name: "Foundational",
    icon: Code,
    skills: [
      { subject: "Algorithms & Data Structures", A: 70, fullMark: 100 },
      { subject: "Object-Oriented Programming", A: 80, fullMark: 100 },
      { subject: "Databases (SQL/NoSQL)", A: 85, fullMark: 100 },
      { subject: "Networking Basics", A: 65, fullMark: 100 },
      { subject: "Code Quality & Best Practices", A: 80, fullMark: 100 },
      { subject: "Design Patterns", A: 75, fullMark: 100 },
    ],
  },

  {
    name: "Web Frontend",
    icon: Code,
    skills: [
      { subject: "React", A: 65, fullMark: 100 },
      { subject: "Angular", A: 60, fullMark: 100 },
      { subject: "Next.js", A: 70, fullMark: 100 },
      { subject: "Flutter", A: 85, fullMark: 100 },
      { subject: "HTML&CSS", A: 75, fullMark: 100 },
    ],
  },

  {
    name: "Backend",
    icon: Server,
    skills: [
      { subject: "NestJS", A: 85, fullMark: 100 },
      { subject: "Node.js / Express", A: 80, fullMark: 100 },
      { subject: "Spring Boot", A: 90, fullMark: 100 },
      { subject: "Python (FastAPI/Flask)", A: 70, fullMark: 100 },
      { subject: "Symfony", A: 90, fullMark: 100 },
      { subject: "ASP .NET", A: 60, fullMark: 100 },
    ],
  },

  {
    name: "Mobile",
    icon: Code,
    skills: [
      { subject: "Flutter", A: 90, fullMark: 100 },
      { subject: "React Native", A: 60, fullMark: 100 },
      { subject: "Kotlin (Android)", A: 80, fullMark: 100 },
      { subject: "Swift & SwiftUI", A: 75, fullMark: 100 },
      { subject: "Kotlin Multiplatform (KMP)", A: 60, fullMark: 100 },
    ],
  },

  {
    name: "DevOps",
    icon: Server,
    skills: [
      { subject: "Docker / Compose", A: 85, fullMark: 100 },
      { subject: "CI/CD (GitLab/Jenkins)", A: 80, fullMark: 100 },
      { subject: "Linux & Shell", A: 70, fullMark: 100 },
      { subject: "Monitoring (Grafana/Prometheus)", A: 75, fullMark: 100 },
      { subject: "Version Control (Git)", A: 90, fullMark: 100 },
      { subject: "Cloud Deployment", A: 65, fullMark: 100 },
    ],
  },

  {
    name: "AI & Automation",
    icon: Code,
    skills: [
      { subject: "Python Automation", A: 75, fullMark: 100 },
      { subject: "CrewAI / Agent Orchestration", A: 80, fullMark: 100 },
      { subject: "Prompt Engineering", A: 85, fullMark: 100 },
      { subject: "Chatbot Design", A: 90, fullMark: 100 },
      { subject: "Testing Automation", A: 70, fullMark: 100 },
      { subject: "Data Processing", A: 65, fullMark: 100 },
    ],
  },
];


const SkillsMatrixModal: React.FC<SkillsMatrixModalProps> = ({ onClose }) => {
  const [selectedRole, setSelectedRole] = useState(roles[2]); // Default to Penetration Tester

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-6xl h-[90vh] flex flex-col relative">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-2xl text-primary">Skills Matrix</CardTitle>
            <Button variant="ghost" size="icon" onClick={onClose} className="absolute top-4 right-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </Button>
          </div>
        </CardHeader>
        <CardContent className="flex-grow flex flex-col md:flex-row gap-6 mt-6">
          {/* Left Panel: Role Selector */}
          <div className="w-full md:w-1/4 space-y-2">
            {roles.map((role) => (
              <Button
                key={role.name}
                variant={selectedRole.name === role.name ? "default" : "outline"}
                className="w-full justify-start gap-2"
                onClick={() => setSelectedRole(role)}
              >
                <role.icon className="h-5 w-5" />
                {role.name}
              </Button>
            ))}
          </div>

          {/* Right Panel: Radar Chart */}
          <div className="w-full md:w-3/4 h-full">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={selectedRole.skills}>
                <PolarGrid stroke="hsl(var(--muted-foreground) / 0.2)" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: 'hsl(var(--foreground))', fontSize: 14 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                <Radar name={selectedRole.name} dataKey="A" stroke="hsl(var(--primary))" fill="hsl(var(--primary) / 0.4)" fillOpacity={0.6} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SkillsMatrixModal;
