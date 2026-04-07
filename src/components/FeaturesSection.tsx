import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Radio, ShoppingCart, Cloud, Repeat } from "lucide-react";

const useCases = [
  {
    icon: Radio,
    industry: "Telecom",
    title: "Chat with your network",
    description: "Let engineers ask AI to find the root cause of network issues — across logs, alarms, and topology — in seconds, not hours.",
    accent: "from-emerald-500/20 to-teal-500/20",
  },
  {
    icon: ShoppingCart,
    industry: "Retail",
    title: "Self-service that sells",
    description: "Customers browse, ask questions, and buy — all through an AI assistant that knows your catalog, pricing, and policies.",
    accent: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: Cloud,
    industry: "Cloud & IT",
    title: "Automate complex setup",
    description: "Provision environments, configure networks, and onboard tenants — repetitive infrastructure tasks, fully automated.",
    accent: "from-violet-500/20 to-purple-500/20",
  },
  {
    icon: Repeat,
    industry: "Any Industry",
    title: "Eliminate repetitive work",
    description: "Every business has boring, repetitive tasks. Greentic turns them into reliable, automated workflows — no matter the industry.",
    accent: "from-amber-500/20 to-orange-500/20",
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
          <p className="mt-4 text-muted-foreground text-lg">Industry-specific solutions, powered by Greentic</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {useCases.map((uc, i) => (
            <motion.div
              key={uc.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card/50 p-8 transition-all duration-300 hover:border-primary/40 hover:glow-primary"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${uc.accent} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />
              <div className="relative">
                <div className="mb-2 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                    <uc.icon size={24} />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">{uc.industry}</span>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">{uc.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{uc.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
