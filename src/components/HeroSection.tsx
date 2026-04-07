import { motion } from "framer-motion";
import { Rocket, Globe, Phone } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative isolate min-h-screen overflow-hidden pt-16">
      {/* Background image */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <img
          src={heroBg}
          alt=""
          width={1920}
          height={1080}
          className="h-full w-full object-cover object-center opacity-45 dark:opacity-100"
        />
        <div className="absolute inset-0 bg-background/0 dark:bg-background/50" />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background via-background/85 to-transparent" />
      </div>

      {/* Glow orbs */}
      <div className="pointer-events-none absolute -top-40 left-1/2 z-[1] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/5 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/3 -right-40 z-[1] h-[400px] w-[400px] rounded-full bg-primary/8 blur-[100px]" />

      <div className="container relative z-10 mx-auto flex flex-col items-center px-4 pt-20 pb-12 lg:pt-32">
        <div className="relative flex w-full max-w-5xl flex-col items-center">
          <div className="pointer-events-none absolute inset-x-4 top-2 -z-10 h-[430px] rounded-[2.5rem] bg-background/70 blur-3xl md:inset-x-10 md:h-[470px] dark:bg-background/55" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background/60 px-4 py-1.5 text-sm text-primary backdrop-blur-sm"
          >
            <span className="h-2 w-2 animate-glow-pulse rounded-full bg-primary" />
            Live AI Automation Platform
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-4xl text-center text-4xl font-bold leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl"
          >
            Connect AI to your business systems —{" "}
            <span className="text-gradient-primary">serve every customer in their own language</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-2xl text-center text-lg text-foreground/80 md:text-xl"
          >
            Automate your core business processes with multilingual AI assistants — reducing cost, increasing speed, and ensuring full auditability.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <a href="#demos" className="flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all hover:brightness-110 glow-primary ring-1 ring-background/20">
              <Rocket size={18} /> See Live Demos
            </a>
            <a href="#multilingual" className="flex items-center gap-2 rounded-lg border border-border/70 bg-background/80 px-6 py-3 font-semibold text-foreground backdrop-blur-sm transition-all hover:border-primary/40">
              <Globe size={18} /> Try Multilingual Assistant
            </a>
            <a href="#cta" className="flex items-center gap-2 rounded-lg border border-border/70 bg-background/72 px-6 py-3 font-semibold text-foreground backdrop-blur-sm transition-all hover:border-primary/40 hover:text-foreground">
              <Phone size={18} /> Book a Pilot
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
