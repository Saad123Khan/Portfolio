import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import emailjs from "emailjs-com";

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

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_hpgs3cg",
        "template_zen6gfh",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "5gd40AHOsGuxBLUr7"
      )
      .then(() => {
        toast({
          title: "Message Sent 🚀",
          description: "I’ll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
        setLoading(false);
      })
      .catch(() => {
        toast({
          title: "Failed ❌",
          description: "Something went wrong.",
          variant: "destructive",
        });
        setLoading(false);
      });
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const contactInfo = [
    {
      icon: <Mail />,
      title: "Email",
      value: "sk5908774@gmail.com",
      link: "mailto:sk5908774@gmail.com",
    },
    {
      icon: <Phone />,
      title: "Phone",
      value: "+92 313 8668469",
      link: "tel:+923138668469",
    },
    {
      icon: <MapPin />,
      title: "Location",
      value: "Karachi, Pakistan",
      link: "#",
    },
  ];

  return (
    <motion.section
      id="contact"
      className="py-20 bg-background"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          variants={fadeUp}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let’s build something amazing together 🚀
          </p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-12"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Left Info */}
          <motion.div variants={fadeUp} className="space-y-8">
            <h3 className="text-2xl font-semibold">
              Start a Conversation
            </h3>

            <div className="space-y-6">
              {contactInfo.map((info, i) => (
                <motion.a
                  key={i}
                  href={info.link}
                  variants={fadeUp}
                  whileHover={{ y: -5 }}
                  className="flex items-center gap-4 p-4 rounded-xl border bg-card hover:shadow-lg transition"
                >
                  <div className="p-3 bg-primary/10 text-primary rounded-lg">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      {info.title}
                    </p>
                    <p className="font-medium">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div variants={fadeUp}>
            <Card className="shadow-xl border-border">
              <CardHeader>
                <CardTitle className="text-2xl">
                  Send Message ✉️
                </CardTitle>
              </CardHeader>

              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />

                  <motion.div whileTap={{ scale: 0.95 }}>
                    <Button
                      disabled={loading}
                      className="w-full glow-effect"
                      size="lg"
                    >
                      {loading ? "Sending..." : "Send Message"}
                      <Send className="ml-2 w-5 h-5" />
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
