import { Code, Database, GitBranch } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code className="w-8 h-8" />,
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "Next.js",
        "Tailwind CSS",
        "Bootstrap",
        "TypeScript",
      ],
    },
    {
      title: "Backend Development",
      icon: <Database className="w-8 h-8" />,
      skills: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "REST APIs",
        "WebSockets",
        "JWT",
        "bcrypt",
        "supabase",
      ],
    },
    {
      title: "Version Control & Tools",
      icon: <GitBranch className="w-8 h-8" />,
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "Postman",
        "Figma",
        "Axios",
        "Redux",
        "TanStack Query",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of the technologies and tools I work with
            to build responsive and scalable web applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group p-6 bg-background rounded-xl border border-border hover:shadow-glow smooth-transition hover:-translate-y-2"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground smooth-transition">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold ml-4 text-foreground">
                  {category.title}
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="px-3 py-2 bg-white rounded-lg text-center text-secondary-foreground text-sm hover:bg-primary hover:text-primary-foreground smooth-transition cursor-default"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        {/* <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8 text-foreground">
            Other Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Postman",
              "Axios",
              "Redux",
              "Context API",
              "LocalStorage",
              "REST APIs",
            ].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gradient-primary text-primary-foreground rounded-full text-sm hover:scale-105 smooth-transition cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Skills;
