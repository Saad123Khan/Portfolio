import { motion } from "framer-motion";
import { useState } from "react";
import image from "@/assets/Saad up.png";

// Fade up animation
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// Stats for About section
const stats = [
  { label: "Projects Completed", value: "500+" },
  { label: "Years of Experience", value: "6+" },
  { label: "Happy Clients", value: "100+" },
];

const tabs = ["Education", "Experience", "Interests"];

const About = () => {
  const [activeTab, setActiveTab] = useState("Experience");

  return (
    <section id="about" className="py-20 bg-card overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-5xl font-bold mb-2 text-gradient">
            About Me
          </h2>
          <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
            Things you should know before starting!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <motion.img
              src={image}
              alt="Muneeb Khan Profile"
              className="w-80 h-80 object-cover rounded-full border-8 border-primary shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            />
          </motion.div>

          {/* Content */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Tabs */}
            <div className="flex space-x-6 border-b border-muted-foreground">
              {tabs.map((tab) => (
                <motion.button
                  key={tab}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  className={`pb-2 text-sm md:text-base font-medium ${
                    activeTab === tab
                      ? "text-primary border-b-2 border-primary"
                      : "text-muted-foreground"
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </motion.button>
              ))}
            </div>

            {/* Tab Content */}
            <motion.div variants={fadeUp} className="space-y-4 text-muted-foreground">
              {activeTab === "Experience" && (
                <p>
                  I have an experience of over 6+ months working on MERN stack
                  projects, delivering responsive and modern web applications.
                  I specialize in React.js, Tailwind CSS, Node.js, and Express.js.
                </p>
              )}
              {activeTab === "Education" && (
                <p>
                  Completed Bachelor's in Computer Science. Learned core web
                  development skills and specialized in full-stack development.
                </p>
              )}
              {activeTab === "Interests" && (
                <p>
                  I enjoy building web apps, learning new technologies, exploring
                  open-source projects, and contributing to online developer
                  communities.
                </p>
              )}
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-6 pt-6 text-center"
            >
              {stats.map((stat, i) => (
                <motion.div
                  variants={fadeUp}
                  key={stat.label}
                  whileHover={{ y: -6 }}
                  className="p-4 bg-secondary rounded-lg"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.08 }}
                    className="text-2xl md:text-3xl font-bold text-primary"
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm md:text-base text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Buttons */}
          {/* Buttons */}
            <motion.div variants={fadeUp} className="flex space-x-4 pt-6">
              <motion.a
                href="/path-to-Mohammad_Saad_Resume.pdf"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition"
              >
                Download CV
              </motion.a>
              <motion.a
                href="https://github.com/Saad123Khan"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition"
              >
                GitHub
              </motion.a>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
