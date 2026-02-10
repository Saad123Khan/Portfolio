import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const Footer = () => {
  const socialLinks = [
    {
      icon: <Github />,
      href: "https://github.com/Saad123Khan",
      label: "GitHub",
    },
    {
      icon: <Linkedin />,
      href: "https://www.linkedin.com/in/mohammad-saad-017aa9228",
      label: "LinkedIn",
    },
    {
      icon: <Mail />,
      href: "mailto:sk5908774@gmail.com",
      label: "Email",
    },
  ];

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (id) => {
    document
      .getElementById(id.replace("#", ""))
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.footer
      className="bg-card border-t border-border"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6 py-14">
        <motion.div
          className="grid md:grid-cols-3 gap-10 mb-10"
          variants={stagger}
        >
          {/* Brand */}
          <motion.div variants={fadeUp} className="space-y-4">
            <h3 className="text-2xl font-bold text-gradient">
              Saad Khan
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Full Stack Developer crafting modern, performant &
              delightful web experiences.
            </p>

            <div className="flex gap-4">
              {socialLinks.map((link, i) => (
                <motion.a
                  key={i}
                  href={link.href}
                  target="_blank"
                  aria-label={link.label}
                  whileHover={{ y: -6, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-xl bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition shadow-md"
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeUp} className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {quickLinks.map((link, i) => (
                <motion.button
                  key={i}
                  onClick={() => scrollToSection(link.href)}
                  whileHover={{ x: 6 }}
                  className="text-left text-muted-foreground hover:text-primary transition"
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>
          </motion.div>

          {/* Contact */}
          <motion.div variants={fadeUp} className="space-y-4">
            <h4 className="text-lg font-semibold">Get In Touch</h4>
            <div className="text-muted-foreground space-y-1">
              <p>📍 Karachi, Pakistan</p>
              <p>✉️ sk5908774@gmail.com</p>
              <p>📞 +92 313 8668469</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom */}
        <motion.div
          className="pt-8 border-t border-border text-center"
          variants={fadeUp}
        >
          <p className="text-sm text-muted-foreground">
            © 2024 Saad Khan — Built with ❤️ & React
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
