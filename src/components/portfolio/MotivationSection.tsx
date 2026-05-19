import { motion } from "framer-motion";
import { Heart, Target, Lightbulb, Shield, Globe, Users, Zap, BookOpen, Quote } from "lucide-react";

const motivations = [
  {
    icon: Lightbulb,
    title: "Building Meaningful Digital Experiences",
    description:
      "What motivates me most is creating mobile products that genuinely help people. I enjoy building apps that make booking, communication, and everyday tasks easier — with a focus on great UX and reliability.",
  },
  {
    icon: Zap,
    title: "Turning Ideas Into Scalable Systems",
    description:
      "I love transforming ideas into production-ready applications. From Flutter architecture and state management to backend APIs (NestJS), I enjoy building clean, scalable systems built for long-term growth.",
  },
  {
    icon: Globe,
    title: "Solving Real-World Problems Through Technology",
    description:
      "I'm driven by shipping features that solve real business problems: booking flows, push notifications, real-time data, performance improvements, and stable releases through CI/CD.",
  },
  {
    icon: Users,
    title: "Empowering Teams & Clients",
    description:
      "I value collaboration and clear communication. I enjoy working with product, UX/UI and QA to deliver features end-to-end and help teams move faster with reusable components and automation.",
  },
];

const values = [
  {
    icon: Heart,
    title: "User-Centered Mindset",
    description:
      "Every feature I build starts with one question: does this improve the user's experience? Great products are born from empathy, clarity, and a deep understanding of how people interact with software.",
  },
  {
    icon: Target,
    title: "Continuous Improvement",
    description:
      "I am committed to learning every day — new frameworks, new architectures, new tools, new design principles. Technology evolves quickly, and I love growing with it.",
  },
  {
    icon: Shield,
    title: "Security & Reliability First",
    description:
      "From secure authentication to stable releases, I prioritize reliability and protection of user data. Quality isn't optional — it's a responsibility.",
  },
  {
    icon: BookOpen,
    title: "Knowledge Sharing",
    description:
      "I believe in giving back: documenting solutions, mentoring, and helping teams adopt better practices. Sharing knowledge creates stronger teams and better products.",
  },
];

const personalStory = {
  title: "My Journey Into Software Engineering",
  paragraphs: [
    "My passion for software started with a simple curiosity: how something written on a screen could come to life and impact people. Over the years, I focused on mobile development with Flutter, learned how to build reliable backend APIs with NestJS, and integrated cloud services like Firebase to deliver end-to-end products.",
    "What shaped me most is the continuous cycle of shipping, learning, and improving — iterating based on feedback, optimizing performance, and building cleaner architectures. I enjoy the discipline of delivering stable releases through CI/CD and the creativity of crafting user-friendly interfaces.",
    "Today, what drives me is building mobile apps that feel natural, dependable, and thoughtful — products that users enjoy and teams can maintain. For me, being a developer is not just about writing code — it's about understanding people, solving real problems, and delivering technology that genuinely matters.",
  ],
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

const MotivationSection = () => (
  <section id="motivation" className="relative py-24 overflow-hidden">
    {/* Background */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background: [
          "radial-gradient(ellipse 60% 45% at 15% 20%, hsl(262 83% 68% / 0.07) 0%, transparent 70%)",
          "radial-gradient(ellipse 50% 40% at 85% 80%, hsl(230 68% 62% / 0.06) 0%, transparent 65%)",
        ].join(", "),
      }}
    />

    <div className="relative container mx-auto px-6">
      {/* Section header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="section-label">
          <Heart className="h-4 w-4" />
          What Drives Me
        </span>
        <h2 className="font-display text-4xl font-bold mt-3 tracking-tight">Motivation & Values</h2>
        <div className="section-heading-line" />
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
          The passion and principles that guide my work as a mobile developer.
        </p>
      </motion.div>

      {/* Personal story card */}
      <motion.div
        className="relative rounded-2xl border border-border/60 p-8 mb-14 overflow-hidden"
        style={{ background: "linear-gradient(135deg, hsl(243 22% 10%) 0%, hsl(245 20% 8%) 100%)" }}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Watermark quote mark */}
        <span
          className="absolute top-2 right-6 font-display font-bold text-[8rem] leading-none select-none pointer-events-none"
          style={{ color: "hsl(262 83% 68% / 0.05)" }}
        >
          "
        </span>

        {/* Left accent */}
        <div
          className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-2xl"
          style={{ background: "var(--gradient-violet)" }}
        />

        <div className="flex items-start gap-3 mb-6">
          <div className="p-2.5 rounded-xl border border-violet/25 bg-violet/8">
            <Quote className="h-5 w-5 text-violet" />
          </div>
          <h3 className="font-display text-xl font-semibold text-foreground mt-1">{personalStory.title}</h3>
        </div>

        <div className="space-y-4">
          {personalStory.paragraphs.map((para, i) => (
            <p key={i} className="text-muted-foreground leading-relaxed">{para}</p>
          ))}
        </div>
      </motion.div>

      {/* What Motivates Me */}
      <motion.h3
        className="font-display text-2xl font-bold text-center mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        What Motivates Me
      </motion.h3>
      <div className="grid md:grid-cols-2 gap-4 mb-14">
        {motivations.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              whileHover={{ y: -4, boxShadow: "0 16px 40px hsl(240 25% 2% / 0.6), 0 0 20px hsl(262 83% 68% / 0.08)" }}
              className="group relative rounded-2xl border border-border/60 p-5 overflow-hidden transition-shadow duration-300"
              style={{ background: "linear-gradient(135deg, hsl(243 22% 10%) 0%, hsl(245 20% 8%) 100%)" }}
            >
              <div className="card-top-accent" />
              <div
                className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "var(--gradient-violet)" }}
              />
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl border border-violet/20 bg-violet/8 group-hover:bg-violet/14 group-hover:border-violet/35 transition-all duration-300 shrink-0">
                  <Icon className="h-5 w-5 text-violet" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1.5 group-hover:text-violet transition-colors duration-200">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Core Values */}
      <motion.h3
        className="font-display text-2xl font-bold text-center mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        Core Values
      </motion.h3>
      <div className="grid md:grid-cols-2 gap-4 mb-14">
        {values.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              whileHover={{ y: -4, boxShadow: "0 16px 40px hsl(240 25% 2% / 0.6), 0 0 20px hsl(262 83% 68% / 0.08)" }}
              className="group relative rounded-2xl border border-border/60 p-5 overflow-hidden transition-shadow duration-300"
              style={{ background: "linear-gradient(135deg, hsl(243 22% 10%) 0%, hsl(245 20% 8%) 100%)" }}
            >
              <div className="card-top-accent" />
              <div
                className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "var(--gradient-violet)" }}
              />
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl border border-violet/20 bg-violet/8 group-hover:bg-violet/14 group-hover:border-violet/35 transition-all duration-300 shrink-0">
                  <Icon className="h-5 w-5 text-violet" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1.5 group-hover:text-violet transition-colors duration-200">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Closing quote */}
      <motion.div
        className="relative rounded-2xl border border-violet/20 p-8 text-center overflow-hidden"
        style={{ background: "linear-gradient(135deg, hsl(262 83% 68% / 0.06) 0%, hsl(230 68% 62% / 0.04) 100%)" }}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="card-top-accent" style={{ opacity: 1 }} />
        <blockquote className="text-xl italic text-foreground/90 mb-3 max-w-2xl mx-auto leading-relaxed">
          "Progress happens step by step. I believe in improving consistently, learning constantly, and building things that make a real difference."
        </blockquote>
        <cite className="text-sm font-semibold text-gradient not-italic">— My Personal Philosophy</cite>
      </motion.div>
    </div>
  </section>
);

export default MotivationSection;
