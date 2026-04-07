import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  { label: "Message / Event", emoji: "📨", color: "text-blue-400" },
  { label: "Deterministic Workflow", emoji: "⚙️", color: "text-foreground" },
  { label: "MCP Tools / APIs", emoji: "🔧", color: "text-primary" },
  { label: "Optional AI", emoji: "🧠", color: "text-purple-400" },
  { label: "System Update", emoji: "💾", color: "text-yellow-400" },
  { label: "Response", emoji: "✅", color: "text-primary" },
];

const HowItWorksSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" className="py-24 bg-grid" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold md:text-5xl">
            Simple, controlled, <span className="text-gradient-primary">powerful</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">No black-box agents. Full control. Real integrations.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto max-w-4xl"
        >
          <div className="flex flex-col items-center gap-3 md:flex-row md:gap-0 md:justify-between">
            {steps.map((step, i) => (
              <div key={step.label} className="flex items-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={inView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex flex-col items-center rounded-xl border border-border bg-card/80 px-4 py-5 text-center min-w-[120px] transition-all hover:border-primary/40"
                >
                  <span className="text-3xl mb-2">{step.emoji}</span>
                  <span className="text-xs font-semibold text-foreground leading-tight">{step.label}</span>
                </motion.div>
                {i < steps.length - 1 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={inView ? { scaleX: 1 } : {}}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="hidden md:block h-px w-6 bg-primary/40 mx-1"
                  />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground"
        >
          {["No black-box agents", "Full control over execution", "Real system integrations"].map((msg) => (
            <div key={msg} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              {msg}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
