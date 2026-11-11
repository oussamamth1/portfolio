import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { Code, Server } from 'lucide-react';
import { getSkills, type SkillContent } from "@/lib/api";

interface SkillsMatrixModalProps {
  onClose: () => void;
}

const CATEGORY_ICONS: Record<string, typeof Code> = {
  code: Code,
  server: Server,
};

interface Role {
  name: string;
  icon: typeof Code;
  skills: { subject: string; A: number; fullMark: number }[];
}

function groupByCategory(skills: SkillContent[]): Role[] {
  const order: string[] = [];
  const byCategory = new Map<string, SkillContent[]>();
  for (const skill of skills) {
    if (!byCategory.has(skill.category)) {
      order.push(skill.category);
      byCategory.set(skill.category, []);
    }
    byCategory.get(skill.category)!.push(skill);
  }
  return order.map((category) => {
    const categorySkills = byCategory.get(category)!;
    return {
      name: category,
      icon: CATEGORY_ICONS[categorySkills[0]?.icon_key ?? ""] ?? Code,
      skills: categorySkills
        .sort((a, b) => a.sort_order - b.sort_order)
        .map((s) => ({ subject: s.subject, A: s.level, fullMark: 100 })),
    };
  });
}

const SkillsMatrixModal: React.FC<SkillsMatrixModalProps> = ({ onClose }) => {
  const [roles, setRoles] = useState<Role[]>([]);
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);

  useEffect(() => {
    getSkills()
      .then((skills) => {
        const grouped = groupByCategory(skills);
        setRoles(grouped);
        setSelectedRole(grouped[0] ?? null);
      })
      .catch((error) => console.error("Failed to load skills", error));
  }, []);

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
                variant={selectedRole?.name === role.name ? "default" : "outline"}
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
            {selectedRole && (
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={selectedRole.skills}>
                  <PolarGrid stroke="hsl(var(--muted-foreground) / 0.2)" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: 'hsl(var(--foreground))', fontSize: 14 }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                  <Radar name={selectedRole.name} dataKey="A" stroke="hsl(var(--primary))" fill="hsl(var(--primary) / 0.4)" fillOpacity={0.6} />
                </RadarChart>
              </ResponsiveContainer>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SkillsMatrixModal;
