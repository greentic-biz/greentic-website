import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Plug, Shield, GitBranch, Bot } from "lucide-react";

const features = [
  {
    icon: Plug,
    title: "Connect AI to APIs via MCP",
    description: "Use the Model Context Protocol to integrate with any system — CRMs, ticketing, ERPs, and more.",
  },
  {
    icon: Shield,
    title: "Secure access with OAuth",
    description: "Enterprise-grade authentication for every integration. No API keys floating around.",
  },
  {
    icon: GitBranch,
    title: "Build deterministic workflows",
    description: "Define exact execution paths. No hallucinations, no black boxes — just reliable automation.",
  },
  {
    icon: Bot,
    title: "Deploy customer-facing assistants",
    description: "Ship multilingual AI assistants on web, WhatsApp, Slack, and any messaging channel.",
  },
];

const FeaturesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="py-24" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold md:text-5xl">
            From AI to <span className="text-gradient-primary">real business automation</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">What you can do today with Greentic</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl border border-border bg-card/50 p-6 transition-all duration-300 hover:border-primary/40 hover:glow-primary"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                <feature.icon size={24} />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
