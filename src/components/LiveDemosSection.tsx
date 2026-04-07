import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Box, ArrowRight, Layers, PackageCheck, Bot, Plug, Workflow, Boxes } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";

const stepIcons = [Box, Workflow, Layers, Bot];
const stepColors = [
  { color: "from-emerald-500/20 to-emerald-500/5", border: "border-emerald-500/30", glow: "bg-emerald-500/10" },
  { color: "from-blue-500/20 to-blue-500/5", border: "border-blue-500/30", glow: "bg-blue-500/10" },
  { color: "from-violet-500/20 to-violet-500/5", border: "border-violet-500/30", glow: "bg-violet-500/10" },
  { color: "from-amber-500/20 to-amber-500/5", border: "border-amber-500/30", glow: "bg-amber-500/10" },
];

const visualData = [
  [
    { label: "component", type: "core" },
    { label: "crm", type: "system" },
    { label: "erp", type: "system" },
    { label: "ticketing", type: "system" },
    { label: "database", type: "system" },
  ],
  [
    { label: "receiveRequest", type: "component" },
    { label: "lookUpCustomer", type: "component" },
    { label: "checkInventory", type: "component" },
    { label: "sendResponse", type: "component" },
  ],
  [
    { label: "onboardingFlow", type: "flow" },
    { label: "verificationFlow", type: "flow" },
    { label: "notificationFlow", type: "flow" },
    { label: "authComponent", type: "component" },
  ],
  [
    { label: "customerSupportAppPack", type: "apppack" },
    { label: "salesAppPack", type: "apppack" },
    { label: "multilingualExtPack", type: "extension" },
    { label: "analyticsExtPack", type: "extension" },
  ],
];

const typeStyles: Record<string, string> = {
  core: "border-emerald-500/50 bg-emerald-500/10 text-emerald-400",
  system: "border-muted-foreground/30 bg-secondary/50 text-muted-foreground",
  component: "border-emerald-500/30 bg-emerald-500/5 text-emerald-400",
  flow: "border-blue-500/30 bg-blue-500/5 text-blue-400",
  apppack: "border-violet-500/30 bg-violet-500/5 text-violet-400",
  extension: "border-amber-500/30 bg-amber-500/5 text-amber-400",
};

const typeIcons: Record<string, typeof Box> = {
  core: Box, system: Plug, component: Box, flow: Workflow, apppack: Layers, extension: PackageCheck,
};

const LiveDemosSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeStep, setActiveStep] = useState(0);
  const { t } = useI18n();

  const steps = t.platform.steps;
  const step = steps[activeStep];
  const sc = stepColors[activeStep];

  return (
    <section id="demos" className="relative py-24 overflow-hidden" ref={ref}>
      <div className="pointer-events-none absolute top-1/2 right-0 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-primary/5 blur-[140px]" />
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm text-primary">{t.platform.badge}</span>
          <h2 className="mt-4 text-3xl font-bold md:text-5xl">
            {t.platform.title} <span className="text-gradient-primary">{t.platform.titleHighlight}</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">{t.platform.subtitle}</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 }} className="flex flex-wrap items-center justify-center gap-2 md:gap-0 mb-12">
          {steps.map((s, i) => {
            const Icon = stepIcons[i];
            const isActive = i === activeStep;
            const ssc = stepColors[i];
            return (
              <div key={i} className="flex items-center">
                <button onClick={() => setActiveStep(i)} className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
                  isActive ? `border ${ssc.border} bg-gradient-to-b ${ssc.color} text-foreground shadow-lg` : "border border-transparent text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                }`}>
                  <Icon size={16} />
                  <span className="hidden sm:inline">{s.label}</span>
                </button>
                {i < steps.length - 1 && <ArrowRight size={14} className="mx-1 text-muted-foreground/40 hidden md:block" />}
              </div>
            );
          })}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div key={activeStep} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}
            className={`rounded-2xl border ${sc.border} bg-gradient-to-br ${sc.color} p-8 md:p-12`}>
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <div>
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 }}>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs text-muted-foreground mb-4">
                    {t.platform.stepOf.replace("{current}", String(activeStep + 1)).replace("{total}", String(steps.length))}
                  </span>
                  <h3 className="text-2xl font-bold md:text-3xl text-foreground mb-4">{step.headline}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">{step.description}</p>
                  <div className="mt-8 flex gap-3">
                    <button onClick={() => setActiveStep(Math.max(0, activeStep - 1))} disabled={activeStep === 0}
                      className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-muted-foreground transition-all hover:text-foreground hover:border-primary/40 disabled:opacity-30 disabled:cursor-not-allowed">
                      {t.platform.prev}
                    </button>
                    <button onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))} disabled={activeStep === steps.length - 1}
                      className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all hover:brightness-110 disabled:opacity-30 disabled:cursor-not-allowed">
                      {t.platform.next}
                    </button>
                  </div>
                </motion.div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-md">
                  {activeStep === 0 ? <ComponentVisual items={visualData[0]} vl={t.platform.visualLabels} /> :
                   activeStep === 1 ? <FlowVisual items={visualData[1]} vl={t.platform.visualLabels} /> :
                   activeStep === 2 ? <AppPackVisual items={visualData[2]} vl={t.platform.visualLabels} /> :
                   <BundleVisual items={visualData[3]} vl={t.platform.visualLabels} />}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

interface VisualItem { label: string; type: string; }

const ComponentVisual = ({ items, vl }: { items: VisualItem[]; vl: any }) => {
  const core = items[0];
  const systems = items.slice(1);
  return (
    <div className="flex flex-col items-center gap-6">
      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", delay: 0.2 }}
        className={`flex items-center gap-2 rounded-xl border px-6 py-4 text-base font-semibold ${typeStyles[core.type]}`}>
        <Box size={20} />{vl[core.label]}
      </motion.div>
      <div className="grid grid-cols-2 gap-3">
        {systems.map((s, i) => (
          <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + i * 0.1 }} className="relative">
            <div className="absolute -top-3 left-1/2 w-px h-3 bg-emerald-500/30" />
            <div className={`flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm ${typeStyles[s.type]}`}>
              <Plug size={14} />{vl[s.label]}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const FlowVisual = ({ items, vl }: { items: VisualItem[]; vl: any }) => (
  <div className="flex flex-col gap-3">
    {items.map((item, i) => (
      <motion.div key={item.label} initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 + i * 0.12 }} className="flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-full border border-blue-500/30 bg-blue-500/10 text-xs font-bold text-blue-400">{i + 1}</div>
        <div className={`flex-1 rounded-lg border px-4 py-2.5 text-sm font-medium ${typeStyles[item.type]}`}>{vl[item.label]}</div>
      </motion.div>
    ))}
  </div>
);

const AppPackVisual = ({ items, vl }: { items: VisualItem[]; vl: any }) => (
  <div className="rounded-xl border border-violet-500/20 bg-violet-500/5 p-5">
    <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-violet-400"><Layers size={16} /> {vl.applicationPack}</div>
    <div className="grid grid-cols-2 gap-3">
      {items.map((item, i) => {
        const Icon = typeIcons[item.type] || Box;
        return (
          <motion.div key={item.label} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 + i * 0.1, type: "spring" }}
            className={`flex items-center gap-2 rounded-lg border px-3 py-2.5 text-xs font-medium ${typeStyles[item.type]}`}>
            <Icon size={14} />{vl[item.label]}
          </motion.div>
        );
      })}
    </div>
  </div>
);

const BundleVisual = ({ items, vl }: { items: VisualItem[]; vl: any }) => (
  <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-5">
    <div className="mb-4 flex items-center gap-2 text-base font-bold text-amber-400"><Bot size={20} /> {vl.digitalWorker}</div>
    <div className="space-y-3">
      {items.map((item, i) => {
        const Icon = typeIcons[item.type] || Boxes;
        return (
          <motion.div key={item.label} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 + i * 0.1 }}
            className={`flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium ${typeStyles[item.type]}`}>
            <Icon size={14} />{vl[item.label]}
          </motion.div>
        );
      })}
    </div>
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
      className="mt-4 flex items-center justify-center gap-2 rounded-lg border border-amber-500/30 bg-amber-500/10 px-4 py-2 text-sm font-semibold text-amber-400">
      <Bot size={16} className="animate-pulse" /> {vl.deployedRunning}
    </motion.div>
  </div>
);

export default LiveDemosSection;
