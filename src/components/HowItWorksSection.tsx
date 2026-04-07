import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MessageSquare, Zap, Workflow, Wrench, Brain, LayoutGrid, Shield, Eye, Globe, ChevronRight } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";

const featureIcons = [MessageSquare, Zap, Workflow, Wrench, Brain, LayoutGrid, Shield, Eye, Globe];
const featureAccents = [
  "from-blue-500/15 to-cyan-500/15", "from-amber-500/15 to-yellow-500/15", "from-primary/15 to-emerald-500/15",
  "from-violet-500/15 to-purple-500/15", "from-pink-500/15 to-rose-500/15", "from-cyan-500/15 to-teal-500/15",
  "from-emerald-500/15 to-green-500/15", "from-orange-500/15 to-red-500/15", "from-indigo-500/15 to-blue-500/15",
];
const featureIconBgs = [
  "bg-blue-500/10 text-blue-400", "bg-amber-500/10 text-amber-400", "bg-primary/10 text-primary",
  "bg-violet-500/10 text-violet-400", "bg-pink-500/10 text-pink-400", "bg-cyan-500/10 text-cyan-400",
  "bg-emerald-500/10 text-emerald-400", "bg-orange-500/10 text-orange-400", "bg-indigo-500/10 text-indigo-400",
];

const HowItWorksSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { t } = useI18n();

  return (
    <section id="how-it-works" className="py-24 bg-grid relative" ref={ref}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/[0.03] blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-8">
          <h2 className="text-3xl font-bold md:text-5xl">
            {t.howItWorks.title}{" "}<span className="text-gradient-primary">{t.howItWorks.titleHighlight}</span>{" "}{t.howItWorks.titleSuffix}
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-3xl mx-auto">{t.howItWorks.subtitle}</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="mb-16">
          <div className="mx-auto max-w-4xl flex flex-wrap items-center justify-center gap-2 rounded-2xl border border-border bg-card/60 backdrop-blur-sm p-4 md:p-6">
            {t.howItWorks.flowSteps.map((step, i) => (
              <div key={i} className="flex items-center gap-2">
                <motion.div initial={{ scale: 0.85, opacity: 0 }} animate={inView ? { scale: 1, opacity: 1 } : {}} transition={{ delay: 0.3 + i * 0.08 }}
                  className="rounded-lg border border-border bg-secondary/60 px-3 py-2 text-xs font-semibold text-foreground whitespace-nowrap">
                  {step}
                </motion.div>
                {i < t.howItWorks.flowSteps.length - 1 && <ChevronRight size={14} className="text-primary/60 hidden sm:block" />}
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.howItWorks.features.map((feature, i) => {
            const Icon = featureIcons[i] || MessageSquare;
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.45, delay: 0.15 + i * 0.06 }}
                onMouseEnter={() => setHoveredIndex(i)} onMouseLeave={() => setHoveredIndex(null)}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card/50 p-6 transition-all duration-300 hover:border-primary/40 hover:glow-primary">
                <div className={`absolute inset-0 bg-gradient-to-br ${featureAccents[i]} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />
                <div className="relative">
                  <span className="mb-3 inline-block rounded-full border border-border bg-secondary/50 px-3 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">{feature.tag}</span>
                  <div className="mb-3 flex items-center gap-3">
                    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${featureIconBgs[i]} transition-colors duration-300`}><Icon size={20} /></div>
                    <h3 className="text-base font-semibold text-foreground leading-tight">{feature.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
