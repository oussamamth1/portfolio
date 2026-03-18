import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, Award, BookOpen } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      degree: "Master's Degree in Software Engineering",
      institution: "Université ISET",
      location: "Tunisia",
      period: "2017 - 2022",
      status: "Graduated",
      description:
        "Specialized in software engineering principles and rapid application development.",
      coursework: [
        "Software Engineering",
        "Mobile Development",
        "Web Development",
        "Databases",
        "Software Architecture",
      ],
      achievements: [
        "Built multiple cross-platform applications with Flutter",
        "Strong foundation in software architecture and delivery",
      ],
    },
    {
      degree: "Bachelor's Degree in Technology",
      institution: "Université Salem Ben Hmida",
      location: "Tunisia",
      period: "2012 - 2016",
      status: "Graduated",
      description:
        "Foundation in technology and computer science.",
      coursework: [
        "Computer Science Fundamentals",
        "Mathematics",
        "Problem Solving",
        "Algorithms",
        "Networks",
      ],
      achievements: [
        "Solid base in computing and engineering fundamentals",
      ],
    },
  ];

  return (
    <section id="education" className="py-24 bg-surface-dark">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-primary mb-4">
            <GraduationCap className="h-6 w-6" />
            <span className="text-sm uppercase tracking-wide">
              Academic Background
            </span>
          </div>
          <h2 className="text-4xl font-bold mb-6">Education</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Academic background supporting mobile and backend engineering.
          </p>
        </div>

        {/* Education cards */}
        <div className="space-y-8 mb-12">
          {education.map((edu, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300"
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl text-foreground">
                      {edu.degree}
                    </CardTitle>
                    <p className="text-primary font-semibold">
                      {edu.institution}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {edu.location}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2 justify-end">
                      <Calendar className="h-4 w-4" />
                      {edu.period}
                    </div>
                    <Badge className="bg-primary text-primary-foreground">
                      {edu.status}
                    </Badge>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-muted-foreground">{edu.description}</p>

                <div>
                  <h4 className="font-semibold mb-3 text-foreground">
                    Key coursework:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course, courseIndex) => (
                      <Badge
                        key={courseIndex}
                        variant="outline"
                        className="text-xs"
                      >
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-foreground flex items-center gap-2">
                    <Award className="h-4 w-4 text-primary" />
                    Achievements:
                  </h4>
                  <ul className="space-y-1">
                    {edu.achievements.map(
                      (achievement: string, achievementIndex: number) => (
                        <li
                          key={achievementIndex}
                          className="text-sm text-muted-foreground flex items-center gap-2"
                        >
                          <div className="w-1 h-1 bg-primary rounded-full" />
                          {achievement}
                        </li>
                      ),
                    )}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

       
      </div>
    </section>
  );
};

export default EducationSection;
