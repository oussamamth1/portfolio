import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Target, Lightbulb, Shield, Globe, Users, Zap, BookOpen } from "lucide-react";

const MotivationSection = () => {
 const motivations = [
  {
    icon: Lightbulb,
    title: "Building Meaningful Digital Experiences",
    description:
      "What motivates me most is creating mobile products that genuinely help people. I enjoy building apps that make booking, communication, and everyday tasks easier — with a focus on great UX and reliability."
  },
  {
    icon: Zap,
    title: "Turning Ideas Into Scalable Systems",
    description:
      "I love transforming ideas into production-ready applications. From Flutter architecture and state management to backend APIs (NestJS), I enjoy building clean, scalable systems built for long-term growth."
  },
  {
    icon: Globe,
    title: "Solving Real-World Problems Through Technology",
    description:
      "I’m driven by shipping features that solve real business problems: booking flows, push notifications, real-time data, performance improvements, and stable releases through CI/CD."
  },
  {
    icon: Users,
    title: "Empowering Teams & Clients",
    description:
      "I value collaboration and clear communication. I enjoy working with product, UX/UI and QA to deliver features end-to-end and help teams move faster with reusable components and automation."
  }
];

const values = [
  {
    icon: Heart,
    title: "User-Centered Mindset",
    description:
      "Every feature I build starts with one question: does this improve the user’s experience? Great products are born from empathy, clarity, and a deep understanding of how people interact with software."
  },
  {
    icon: Target,
    title: "Continuous Improvement",
    description:
      "I am committed to learning every day — new frameworks, new architectures, new tools, new design principles. Technology evolves quickly, and I love growing with it."
  },
  {
    icon: Shield,
    title: "Security & Reliability First",
    description:
      "From secure authentication to stable releases, I prioritize reliability and protection of user data. Quality isn't optional — it’s a responsibility."
  },
  {
    icon: BookOpen,
    title: "Knowledge Sharing",
    description:
      "I believe in giving back: documenting solutions, mentoring, and helping teams adopt better practices. Sharing knowledge creates stronger teams and better products."
  }
];

const personalStory = {
  title: "My Journey Into Software Engineering",
  content: `My passion for software started with a simple curiosity: how something written on a screen could come to life and impact people. Over the years, I focused on mobile development with Flutter, learned how to build reliable backend APIs with NestJS, and integrated cloud services like Firebase to deliver end-to-end products.

What shaped me most is the continuous cycle of shipping, learning, and improving — iterating based on feedback, optimizing performance, and building cleaner architectures. I enjoy the discipline of delivering stable releases through CI/CD and the creativity of crafting user-friendly interfaces.

Today, what drives me is building mobile apps that feel natural, dependable, and thoughtful — products that users enjoy and teams can maintain. For me, being a developer is not just about writing code — it's about understanding people, solving real problems, and delivering technology that genuinely matters.`
};


  return (
    <section id="motivation" className="py-24 bg-surface-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-primary mb-4">
            <Heart className="h-6 w-6" />
            <span className="text-sm uppercase tracking-wide">What Drives Me</span>
          </div>
          <h2 className="text-4xl font-bold mb-6">Motivation & Values</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The passion and principles that guide my work as a mobile developer.
          </p>
        </div>

        {/* Personal Story */}
        <Card className="mb-16 bg-card border-border">
          <CardHeader>
            <CardTitle className="text-2xl text-center">{personalStory.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose prose-lg prose-invert max-w-none">
              {personalStory.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-muted-foreground leading-relaxed mb-4 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* What Motivates Me */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">What Motivates Me</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {motivations.map((motivation, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <motivation.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                        {motivation.title}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {motivation.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Core Values */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8">Core Values</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                        {value.title}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quote */}
        <Card className="mt-16 bg-gradient-dark border-border text-center">
  <CardContent className="p-8">
    <blockquote className="text-xl italic text-foreground mb-4">
      "Progress happens step by step. I believe in improving consistently, learning constantly, and building things that make a real difference."
    </blockquote>
    <cite className="text-primary font-semibold">- My Personal Philosophy</cite>
  </CardContent>
</Card>

      </div>
    </section>
  );
};

export default MotivationSection;