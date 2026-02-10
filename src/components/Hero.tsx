import profile from "@/assets/Saad up.png";
import { Button } from "@/components/ui/button";
import { Database, FileCode, Terminal, Zap, Layers, Code } from "lucide-react";
import image from "@/assets/imge2.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-background">
      <div className="container mx-auto px-6 py-16">
        <div className="relative bg-white rounded-3xl shadow-md p-10 md:p-16 max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)] active:shadow-[0_24px_80px_rgba(0,0,0,0.6)] transition-shadow duration-300 cursor-pointer">
          {/* Background image behind card content */}
          <div
            className="absolute inset-0 rounded-3xl -z-10"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "brightness(0.94)",
            }}
          />

          {/* Left: Copy */}
          <div className="text-left">
              <div className="flex gap-3 mb-4 animate-fade-up" style={{ animationDelay: "0.05s" }}>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Full Stack Developer</span>
                {/* <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Developer</span> */}
              </div>

              <p className="text-sm text-slate-500 mb-2 animate-fade-up" style={{ animationDelay: "0.12s" }}>Hey! 👋</p>

              <h1 className="text-3xl md:text-3xl font-extrabold leading-tight text-slate-900 mb-4 animate-fade-up" style={{ animationDelay: "0.18s" }}>
                I am <span className="text-gradient">Muhammad Saad</span>
              </h1>

              <p className="text-lg text-slate-700 max-w-xl mb-6 animate-fade-up" style={{ animationDelay: "0.26s" }}>
                I have an experience of over 4+ years of working on different
                stacks. I helped clients to get more than $50+ Million for their
                business.
              </p>

              <div className="flex flex-wrap items-center gap-4 animate-fade-up" style={{ animationDelay: "0.34s" }}>
                <Button
                  className="bg-sky-600 hover:bg-sky-700 text-white rounded-full px-6 py-3 flex items-center"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get Started
                </Button>

                <Button
                  variant="outline"
                  className="border-slate-200 text-slate-700 rounded-full px-5 py-3"
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Projects
                </Button>
              </div>

            {/* Trust chips */}
            {/* <div className="flex gap-4 mt-6">
              <div className="bg-white border border-slate-100 p-4 rounded-lg shadow-sm flex items-center gap-3 animate-pop chip-hover" style={{ animationDelay: "0.36s" }}>
                <div className="text-sm font-semibold">5.0</div>
                <div className="text-xs text-slate-500">Top Rated Seller</div>
              </div>

              <div className="bg-white border border-slate-100 p-4 rounded-lg shadow-sm flex items-center gap-3 animate-pop chip-hover" style={{ animationDelay: "0.42s" }}>
                <div className="text-sm font-semibold">5.0</div>
                <div className="text-xs text-slate-500">Top Rated</div>
              </div>
            </div> */}
          </div>

          {/* Right: Profile / Visual */}
          <div className="flex items-center justify-center relative animate-slide-in-right" style={{ animationDelay: "0.28s" }}>
            <div className="w-80 h-80 md:w-96 md:h-96 bg-sky-50 rounded-full flex items-center justify-center relative animate-float">
              <div className="absolute -inset-2 rounded-full border-8 border-white shadow-lg" />
              <img src={profile} alt="profile" className="relative w-64 h-64 md:w-72 md:h-72 rounded-full object-cover border-4 border-sky-500" />
            </div>
          </div>

          {/* Tech logos row (full width under card on small screens) */}
          <div className="md:col-span-2 mt-8 flex items-center justify-center gap-8 flex-wrap">
            <div className="flex items-center gap-3 text-slate-600 transition-colors transition-transform animate-pop hover:text-sky-600 hover:-translate-y-2 hover:scale-105 px-3 py-1" style={{ animationDelay: "0.46s" }}>
              <Database className="w-6 h-6" />
              <span className="text-sm">MongoDB</span>
            </div>

            <div className="flex items-center gap-3 text-slate-600 transition-colors transition-transform animate-pop hover:text-sky-600 hover:-translate-y-2 hover:scale-105 px-3 py-1" style={{ animationDelay: "0.50s" }}>
              <FileCode className="w-6 h-6" />
              <span className="text-sm">HTML</span>
            </div>

            <div className="flex items-center gap-3 text-slate-600 transition-colors transition-transform animate-pop hover:text-sky-600 hover:-translate-y-2 hover:scale-105 px-3 py-1" style={{ animationDelay: "0.54s" }}>
              <Terminal className="w-6 h-6" />
              <span className="text-sm">Python</span>
            </div>

            <div className="flex items-center gap-3 text-slate-600 transition-colors transition-transform animate-pop hover:text-sky-600 hover:-translate-y-2 hover:scale-105 px-3 py-1" style={{ animationDelay: "0.58s" }}>
              <Zap className="w-6 h-6" />
              <span className="text-sm">JavaScript</span>
            </div>

            <div className="flex items-center gap-3 text-slate-600 transition-colors transition-transform animate-pop hover:text-sky-600 hover:-translate-y-2 hover:scale-105 px-3 py-1" style={{ animationDelay: "0.62s" }}>
              <Code className="w-6 h-6" />
              <span className="text-sm">CSS</span>
            </div>

            <div className="flex items-center gap-3 text-slate-600 transition-colors transition-transform animate-pop hover:text-sky-600 hover:-translate-y-2 hover:scale-105 px-3 py-1" style={{ animationDelay: "0.66s" }}>
              <Layers className="w-6 h-6" />
              <span className="text-sm">Laravel</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
