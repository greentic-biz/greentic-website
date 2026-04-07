import { motion } from "framer-motion";
import { Rocket, Globe, Phone } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden pt-16">
      {/* Background image — subtle, decorative */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroBg}
          alt=""
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-background/40" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Glow orbs */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/5 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/3 -right-40 h-[400px] w-[400px] rounded-full bg-primary/8 blur-[100px]" />

      <div className="container mx-auto flex flex-col items-center px-4 pt-20 pb-12 lg:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary"
        >
          <span className="h-2 w-2 animate-glow-pulse rounded-full bg-primary" />
          Live AI Automation Platform
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-4xl text-center text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl"
        >
          Connect AI to your business systems —{" "}
          <span className="text-gradient-primary">serve every customer in their own language</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-2xl text-center text-lg text-muted-foreground md:text-xl"
        >
          Automate your core business processes with multilingual AI assistants — reducing cost, increasing speed, and ensuring full auditability.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a href="#demos" className="flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all hover:brightness-110 glow-primary">
            <Rocket size={18} /> See Live Demos
          </a>
          <a href="#multilingual" className="flex items-center gap-2 rounded-lg border border-border bg-secondary px-6 py-3 font-semibold text-secondary-foreground transition-all hover:border-primary/40">
            <Globe size={18} /> Try Multilingual Assistant
          </a>
          <a href="#cta" className="flex items-center gap-2 rounded-lg border border-border px-6 py-3 font-semibold text-muted-foreground transition-all hover:border-primary/40 hover:text-foreground">
            <Phone size={18} /> Book a Pilot
          </a>
        </motion.div>

        {/* Animated workflow diagram */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 w-full max-w-4xl"
        >
          <div className="rounded-2xl border border-border bg-card/50 p-6 backdrop-blur-sm glow-primary">
            <div className="flex flex-col items-center gap-4 md:flex-row md:gap-0">
              {[
                { label: "Input", sub: "Multi-language", icon: "🌍" },
                { label: "Workflow", sub: "Deterministic", icon: "⚡" },
                { label: "MCP Tools", sub: "API + OAuth", icon: "🔧" },
                { label: "AI Layer", sub: "Optional LLM", icon: "🧠" },
                { label: "Output", sub: "Any language", icon: "✅" },
              ].map((step, i) => (
                <div key={step.label} className="flex items-center">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.7 + i * 0.15 }}
                    className="flex flex-col items-center rounded-xl border border-border bg-secondary/50 px-5 py-4 text-center min-w-[110px]"
                  >
                    <span className="text-2xl mb-1">{step.icon}</span>
                    <span className="text-sm font-semibold text-foreground">{step.label}</span>
                    <span className="text-xs text-muted-foreground">{step.sub}</span>
                  </motion.div>
                  {i < 4 && (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 0.8 + i * 0.15 }}
                      className="hidden md:block h-px w-8 bg-primary/40 mx-1"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
