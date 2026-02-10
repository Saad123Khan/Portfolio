import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import logo from "@/assets/logo2.webp";
import logo1 from "@/assets/logo3.png";
import logo2 from "@/assets/logo4.webp";
import logo3 from "@/assets/logo5.webp";
import log4 from "@/assets/hr.png";

// Animations
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const Projects = () => {
  const webProjects = [
    {
      title: "Java Times Caffe",
      description: "Investment platform with dashboard and portfolio management.",
      technologies: ["React", "Node.js", "Tailwind CSS", "MongoDB"],
      githubUrl: "#",
      demoUrl: "https://investin.javatimescaffe.com/",
      image: logo
    },
    {
      title: "Aeon Assistify",
      description: "Healthcare management system for Australian clients.",
      technologies: ["React", "Node.js", "Tailwind CSS", "Firebase"],
      githubUrl: "#",
      demoUrl: "https://aeon.assistifycare.com.au/",
      image: logo1
    },
    {
      title: "Clikkle HR",
      description: "HR management platform with employee dashboard and admin tools.",
      technologies: ["React", "Node.js", "Tailwind CSS"],
      githubUrl: "#",
      demoUrl: "https://hr.clikkle.com/",
      image: log4
    }
  ];

  const mobileApps = [
    {
      title: "Fixie Provider",
      description: "App for service providers to manage tasks and jobs efficiently.",
      technologies: ["React Native", "Firebase", "Expo"],
      githubUrl: "#",
      demoUrl: "https://play.google.com/store/apps/details?id=com.fixieprovider",
      image: logo2
    },
    {
      title: "Fixie Consumer",
      description: "App for consumers to request and track services easily.",
      technologies: ["React Native", "Firebase", "Expo"],
      githubUrl: "#",
      demoUrl: "https://play.google.com/store/apps/details?id=com.fixieconsumer",
      image: logo2 
    },
    {
      title: "Scrub Art",
      description: "iOS app for artistic content creation and management.",
      technologies: ["Swift", "Firebase", "CoreData"],
      githubUrl: "#",
      demoUrl: "https://apps.apple.com/pk/app/scrub-art/id675290276",
      image: logo3
    }
  ];

  return (
    <section id="projects" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gradient">
            Featured Projects & Apps
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
            My live web projects and mobile apps with their logos, tech stack, and demo links.
          </p>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          {[...webProjects, ...mobileApps].map((item, index) => (
            <motion.div key={index} variants={fadeUp}>
              <Card
                className="group bg-card border border-border rounded-xl shadow-sm hover:shadow-md transition-transform transform hover:-translate-y-1 hover:scale-105 overflow-hidden"
              >
              <div className="flex justify-center items-center h-36 bg-card/10">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-24 md:h-28 object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <CardHeader className="px-4 pt-4 pb-2">
                <CardTitle className="text-lg md:text-xl font-semibold text-foreground">
                  {item.title}
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  {item.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="px-4 pb-4 space-y-2">
                <div className="flex flex-wrap gap-1.5">
                  {item.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-0.5 text-[10px] md:text-xs bg-secondary text-secondary-foreground rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2 pt-2">
                  {item.githubUrl !== "#" && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      onClick={() => window.open(item.githubUrl, "_blank")}
                    >
                      <Github className="w-4 h-4 mr-1.5" />
                      Code
                    </Button>
                  )}
                  <Button
                    size="sm"
                    className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                    onClick={() => window.open(item.demoUrl, "_blank")}
                  >
                    <ExternalLink className="w-4 h-4 mr-1.5" />
                    Demo
                  </Button>
                </div>
              </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
