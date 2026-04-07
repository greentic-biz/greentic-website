import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  MessageSquare,
  Zap,
  Workflow,
  Wrench,
  Brain,
  LayoutGrid,
  Shield,
  Eye,
  Globe,
  ArrowDown,
  ChevronRight,
} from "lucide-react";

const featureGroups = [
  {
    icon: MessageSquare,
    title: "Engage customers everywhere",
    description:
      "Support Microsoft Teams, Slack, WhatsApp, Webex, website chat, and more — messaging channels become entry points for business processes.",
    tag: "Messaging & Channels",
    accent: "from-blue-500/15 to-cyan-500/15",
    iconBg: "bg-blue-500/10 text-blue-400",
  },
  {
    icon: Zap,
    title: "Trigger workflows from anywhere",
    description:
      "Webhooks, scheduled jobs, SMS, external system events, and API triggers — real-time and event-driven automation at scale.",
    tag: "Events & Triggers",
    accent: "from-amber-500/15 to-yellow-500/15",
    iconBg: "bg-amber-500/10 text-amber-400",
  },
  {
    icon: Workflow,
    title: "Controlled execution, every time",
    description:
      "Explicit workflow steps with predictable execution paths. Deterministic by design — no unpredictable agent behaviour. Built for business-critical processes.",
    tag: "Workflow Engine",
    accent: "from-primary/15 to-emerald-500/15",
    iconBg: "bg-primary/10 text-primary",
  },
  {
    icon: Wrench,
    title: "Connect to real business systems",
    description:
      "MCP-based integrations, APIs, OpenAPI services, CRM, ERP, and internal systems — secured via OAuth. AI doesn't just answer — it acts.",
    tag: "MCP Tools & Integrations",
    accent: "from-violet-500/15 to-purple-500/15",
    iconBg: "bg-violet-500/10 text-violet-400",
  },
  {
    icon: Brain,
    title: "AI where it adds value",
    description:
      "Natural language understanding, content generation, classification, and routing — all within controlled workflows. AI is optional — control is mandatory.",
    tag: "AI Components",
    accent: "from-pink-500/15 to-rose-500/15",
    iconBg: "bg-pink-500/10 text-pink-400",
  },
  {
    icon: LayoutGrid,
    title: "Rich user interactions",
    description:
      "Adaptive Cards, structured responses, and guided workflows with multi-channel UI consistency — delivering polished experiences everywhere.",
    tag: "Adaptive UI",
    accent: "from-cyan-500/15 to-teal-500/15",
    iconBg: "bg-cyan-500/10 text-cyan-400",
  },
  {
    icon: Shield,
    title: "Governance built in",
    description:
      "Policy enforcement, routing rules, access control, and business logic constraints. Ensure the right actions happen, every time.",
    tag: "Control Extensions",
    accent: "from-emerald-500/15 to-green-500/15",
    iconBg: "bg-emerald-500/10 text-emerald-400",
  },
  {
    icon: Eye,
    title: "Full visibility and auditability",
    description:
      "Execution tracking, audit logs, monitoring, and analytics hooks. Every action is observable and traceable.",
    tag: "Observer Extensions",
    accent: "from-orange-500/15 to-red-500/15",
    iconBg: "bg-orange-500/10 text-orange-400",
  },
  {
    icon: Globe,
    title: "Global from day one",
    description:
      "50+ languages supported with input and output in any language. Consistent workflows, localised customer experiences. One workflow. Every language.",
    tag: "Multilingual",
    accent: "from-indigo-500/15 to-blue-500/15",
    iconBg: "bg-indigo-500/10 text-indigo-400",
  },
];

const flowSteps = [
  "Messaging / Events",
  "Deterministic Workflow",
  "MCP Tools / APIs",
  "AI Components",
  "Control + Observer",
  "System Updates",
];

const HowItWorksSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="how-it-works" className="py-24 bg-grid relative" ref={ref}>
      {/* Subtle radial glow behind the section */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/[0.03] blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold md:text-5xl">
            Enterprise-ready{" "}
            <span className="text-gradient-primary">AI automation</span>{" "}
            platform
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-3xl mx-auto">
            Automate real business processes across messaging, events, and
            systems — with full control, auditability, and multilingual support.
          </p>
        </motion.div>

        {/* Flow Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="mx-auto max-w-4xl flex flex-wrap items-center justify-center gap-2 rounded-2xl border border-border bg-card/60 backdrop-blur-sm p-4 md:p-6">
            {flowSteps.map((step, i) => (
              <div key={step} className="flex items-center gap-2">
                <motion.div
                  initial={{ scale: 0.85, opacity: 0 }}
                  animate={inView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="rounded-lg border border-border bg-secondary/60 px-3 py-2 text-xs font-semibold text-foreground whitespace-nowrap"
                >
                  {step}
                </motion.div>
                {i < flowSteps.length - 1 && (
                  <ChevronRight
                    size={14}
                    className="text-primary/60 hidden sm:block"
                  />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featureGroups.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.15 + i * 0.06 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card/50 p-6 transition-all duration-300 hover:border-primary/40 hover:glow-primary"
            >
              {/* Hover gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.accent} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
              />

              <div className="relative">
                {/* Tag */}
                <span className="mb-3 inline-block rounded-full border border-border bg-secondary/50 px-3 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                  {feature.tag}
                </span>

                {/* Icon + Title */}
                <div className="mb-3 flex items-center gap-3">
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${feature.iconBg} transition-colors duration-300`}
                  >
                    <feature.icon size={20} />
                  </div>
                  <h3 className="text-base font-semibold text-foreground leading-tight">
                    {feature.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
