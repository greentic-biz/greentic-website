import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight, Globe, Headphones, Wrench, FileCheck, Package } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useI18n } from "@/i18n/I18nProvider";

const workerIcons = [Globe, Headphones, Wrench, FileCheck, Package];
const workerTags = [
  ["Multilingual", "API Integration", "MCP"],
  ["OAuth", "MCP", "CRM Integration"],
  ["Messaging", "API Integration", "OAuth"],
  ["MCP", "API Integration", "Audit"],
  ["Multilingual", "API Integration", "Messaging"],
];
const workerAccents = [
  { from: "from-emerald-400", to: "to-teal-500" },
  { from: "from-blue-400", to: "to-cyan-500" },
  { from: "from-violet-400", to: "to-purple-500" },
  { from: "from-amber-400", to: "to-orange-500" },
  { from: "from-rose-400", to: "to-pink-500" },
];
const stepTypes = [
  ["input", "process", "system", "process", "output"],
  ["input", "system", "system", "process", "output"],
  ["input", "system", "process", "system", "output"],
  ["input", "process", "system", "process", "output"],
  ["input", "system", "system", "process", "output"],
];

const StepAnimation = ({ steps, types, isActive, t }: { steps: string[]; types: string[]; isActive: boolean; t: any }) => {
  const [activeStep, setActiveStep] = useState(-1);

  useEffect(() => {
    if (!isActive) { setActiveStep(-1); return; }
    let current = 0;
    const interval = setInterval(() => {
      setActiveStep(current);
      current++;
      if (current >= steps.length) { current = 0; setActiveStep(-1); setTimeout(() => setActiveStep(0), 600); }
    }, 1200);
    setActiveStep(0);
    return () => clearInterval(interval);
  }, [isActive, steps.length]);

  const typeColor = (type: string) => {
    switch (type) {
      case "input": return "border-blue-500/50 bg-blue-500/10 text-blue-400 dark:text-blue-300";
      case "process": return "border-primary/50 bg-primary/10 text-primary";
      case "system": return "border-amber-500/50 bg-amber-500/10 text-amber-400 dark:text-amber-300";
      case "output": return "border-emerald-500/50 bg-emerald-500/10 text-emerald-400 dark:text-emerald-300";
      default: return "border-border bg-muted text-muted-foreground";
    }
  };

  const typeLabel = (type: string) => {
    switch (type) {
      case "input": return t.digitalWorkers.input;
      case "process": return t.digitalWorkers.process;
      case "system": return t.digitalWorkers.system;
      case "output": return t.digitalWorkers.output;
      default: return "";
    }
  };

  return (
    <div className="flex flex-col gap-2">
      {steps.map((step, i) => (
        <div key={i} className={`flex items-center gap-3 rounded-lg border px-3 py-2 text-sm transition-all duration-500 ${
          i <= activeStep ? typeColor(types[i]) + " opacity-100 translate-x-0" : "border-border/30 bg-muted/20 text-muted-foreground/40 opacity-40 translate-x-2"
        }`}>
          <span className="shrink-0 w-16 text-[10px] font-bold tracking-wider opacity-70">{typeLabel(types[i])}</span>
          <span className={`${i === activeStep ? "font-medium" : ""}`}>{i <= activeStep ? step : "•••"}</span>
          {i === activeStep && <span className="ml-auto h-2 w-2 shrink-0 animate-pulse rounded-full bg-current" />}
        </div>
      ))}
    </div>
  );
};

const DigitalWorkerCarousel = () => {
  const ref = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const { t } = useI18n();

  const workers = t.digitalWorkers.workers;

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => { setActiveIndex((prev) => (prev + 1) % workers.length); }, 5000);
    return () => clearInterval(interval);
  }, [isHovered, workers.length]);

  useEffect(() => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const card = container.children[activeIndex] as HTMLElement | undefined;
    if (card) {
      const scrollLeft = card.offsetLeft - container.offsetWidth / 2 + card.offsetWidth / 2;
      container.scrollTo({ left: scrollLeft, behavior: "smooth" });
    }
  }, [activeIndex]);

  const scrollPrev = useCallback(() => { setActiveIndex((prev) => (prev - 1 + workers.length) % workers.length); }, [workers.length]);
  const scrollNext = useCallback(() => { setActiveIndex((prev) => (prev + 1) % workers.length); }, [workers.length]);

  return (
    <section id="digital-workers" className="py-20 overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-12">
          <h2 className="text-3xl font-bold md:text-5xl">
            {t.digitalWorkers.title}{" "}<span className="text-gradient-primary">{t.digitalWorkers.titleHighlight}</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">{t.digitalWorkers.subtitle}</p>
        </motion.div>

        <div className="relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
          <button onClick={scrollPrev} className="absolute left-0 top-1/2 -translate-y-1/2 z-20 hidden md:flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/80 text-foreground backdrop-blur-sm transition-all hover:border-primary/40 hover:bg-card -translate-x-1/2" aria-label={t.digitalWorkers.prevWorker}>
            <ChevronLeft size={20} />
          </button>
          <button onClick={scrollNext} className="absolute right-0 top-1/2 -translate-y-1/2 z-20 hidden md:flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/80 text-foreground backdrop-blur-sm transition-all hover:border-primary/40 hover:bg-card translate-x-1/2" aria-label={t.digitalWorkers.nextWorker}>
            <ChevronRight size={20} />
          </button>

          <div ref={scrollRef} className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
            {workers.map((worker, i) => {
              const Icon = workerIcons[i] || Globe;
              const isActive = i === activeIndex;
              const accent = workerAccents[i] || workerAccents[0];

              return (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.1 }}
                  onClick={() => setActiveIndex(i)}
                  className={`group relative flex-shrink-0 w-[340px] md:w-[420px] snap-center cursor-pointer rounded-2xl border p-6 transition-all duration-500 ${
                    isActive ? "border-primary/50 bg-card glow-primary scale-[1.02]" : "border-border/50 bg-card/30 hover:border-border hover:bg-card/50"
                  }`}>
                  {isActive && <div className={`absolute -inset-px rounded-2xl bg-gradient-to-br ${accent.from} ${accent.to} opacity-10 blur-sm -z-10`} />}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`flex h-11 w-11 items-center justify-center rounded-xl transition-colors ${isActive ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground"}`}>
                      <Icon size={22} />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{worker.title}</h3>
                  </div>
                  <div className="mb-4 min-h-[220px]">
                    <StepAnimation steps={worker.steps} types={stepTypes[i] || stepTypes[0]} isActive={isActive} t={t} />
                  </div>
                  <div className="mb-4 rounded-lg border border-border/50 bg-muted/30 px-4 py-3">
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      <span className="font-semibold text-foreground/80">{t.digitalWorkers.inputLabel}</span> {worker.input}<br />
                      <span className="font-semibold text-foreground/80">{t.digitalWorkers.actionLabel}</span> {worker.action}<br />
                      <span className="font-semibold text-foreground/80">{t.digitalWorkers.outcomeLabel}</span> {worker.outcome}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {workerTags[i]?.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-[10px] font-medium border-border/50 text-muted-foreground">{tag}</Badge>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {workers.map((_, i) => (
              <button key={i} onClick={() => setActiveIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${i === activeIndex ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"}`}
                aria-label={`${t.digitalWorkers.goToWorker} ${i + 1}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalWorkerCarousel;
