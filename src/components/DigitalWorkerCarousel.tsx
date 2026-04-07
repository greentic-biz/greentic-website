import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight, Globe, Headphones, Wrench, FileCheck, Package } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const digitalWorkers = [
  {
    icon: Globe,
    title: "Multilingual Website Assistant",
    input: "Customer asks a question in French",
    action: "Retrieves product data via API, translates response",
    outcome: "Answers fluently in French with accurate info",
    tags: ["Multilingual", "API Integration", "MCP"],
    accentFrom: "from-emerald-400",
    accentTo: "to-teal-500",
    steps: [
      { label: "Bonjour, quel est le prix?", type: "input" },
      { label: "Language detected: FR", type: "process" },
      { label: "Query product API", type: "system" },
      { label: "Translate & format", type: "process" },
      { label: "Le prix est 49€ — livraison gratuite", type: "output" },
    ],
  },
  {
    icon: Headphones,
    title: "Customer Self-Service",
    input: "Customer submits support request via chat",
    action: "Fetches CRM data, checks knowledge base, drafts response",
    outcome: "Issue resolved, ticket updated, customer satisfied",
    tags: ["OAuth", "MCP", "CRM Integration"],
    accentFrom: "from-blue-400",
    accentTo: "to-cyan-500",
    steps: [
      { label: "My order hasn't arrived", type: "input" },
      { label: "Lookup customer in CRM", type: "system" },
      { label: "Check shipping provider API", type: "system" },
      { label: "Generate resolution", type: "process" },
      { label: "Shipped today — tracking: TRK829", type: "output" },
    ],
  },
  {
    icon: Wrench,
    title: "IT Helpdesk Automation",
    input: "Employee sends Teams message about access issue",
    action: "Checks identity provider, triggers provisioning API",
    outcome: "Access granted, employee notified, audit logged",
    tags: ["Messaging", "API Integration", "OAuth"],
    accentFrom: "from-violet-400",
    accentTo: "to-purple-500",
    steps: [
      { label: "Can't access the reporting tool", type: "input" },
      { label: "Verify identity via SSO", type: "system" },
      { label: "Check role permissions", type: "process" },
      { label: "Provision access via API", type: "system" },
      { label: "Access granted ✓ — logged", type: "output" },
    ],
  },
  {
    icon: FileCheck,
    title: "Invoice Approval Workflow",
    input: "Invoice received from supplier",
    action: "Validates amount, routes to approver, records decision",
    outcome: "Invoice approved, payment scheduled, audit trail complete",
    tags: ["MCP", "API Integration", "Audit"],
    accentFrom: "from-amber-400",
    accentTo: "to-orange-500",
    steps: [
      { label: "Invoice #4821 — €12,400", type: "input" },
      { label: "Match to purchase order", type: "process" },
      { label: "Route to finance manager", type: "system" },
      { label: "Approved by J. Smith", type: "process" },
      { label: "Payment scheduled — logged", type: "output" },
    ],
  },
  {
    icon: Package,
    title: "Order Status Assistant",
    input: "Customer asks: Where is my order?",
    action: "Queries order system and logistics provider",
    outcome: "Real-time status with estimated delivery",
    tags: ["Multilingual", "API Integration", "Messaging"],
    accentFrom: "from-rose-400",
    accentTo: "to-pink-500",
    steps: [
      { label: "Where is order #9182?", type: "input" },
      { label: "Query order database", type: "system" },
      { label: "Check logistics API", type: "system" },
      { label: "Format delivery ETA", type: "process" },
      { label: "Out for delivery — ETA 2pm", type: "output" },
    ],
  },
];

const StepAnimation = ({ steps, isActive }: { steps: typeof digitalWorkers[0]["steps"]; isActive: boolean }) => {
  const [activeStep, setActiveStep] = useState(-1);

  useEffect(() => {
    if (!isActive) {
      setActiveStep(-1);
      return;
    }
    let current = 0;
    const interval = setInterval(() => {
      setActiveStep(current);
      current++;
      if (current >= steps.length) {
        current = 0;
        setActiveStep(-1);
        setTimeout(() => setActiveStep(0), 600);
      }
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
      case "input": return "INPUT";
      case "process": return "PROCESS";
      case "system": return "SYSTEM";
      case "output": return "OUTPUT";
      default: return "";
    }
  };

  return (
    <div className="flex flex-col gap-2">
      {steps.map((step, i) => (
        <div
          key={i}
          className={`flex items-center gap-3 rounded-lg border px-3 py-2 text-sm transition-all duration-500 ${
            i <= activeStep
              ? typeColor(step.type) + " opacity-100 translate-x-0"
              : "border-border/30 bg-muted/20 text-muted-foreground/40 opacity-40 translate-x-2"
          }`}
        >
          <span className="shrink-0 w-16 text-[10px] font-bold tracking-wider opacity-70">
            {typeLabel(step.type)}
          </span>
          <span className={`${i === activeStep ? "font-medium" : ""}`}>
            {i <= activeStep ? step.label : "•••"}
          </span>
          {i === activeStep && (
            <span className="ml-auto h-2 w-2 shrink-0 animate-pulse rounded-full bg-current" />
          )}
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

  // Auto-scroll
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % digitalWorkers.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered]);

  // Scroll to active card
  useEffect(() => {
    if (!scrollRef.current) return;
    const cards = scrollRef.current.children;
    if (cards[activeIndex]) {
      (cards[activeIndex] as HTMLElement).scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [activeIndex]);

  const scrollPrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + digitalWorkers.length) % digitalWorkers.length);
  }, []);

  const scrollNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % digitalWorkers.length);
  }, []);

  return (
    <section id="digital-workers" className="py-20 overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold md:text-5xl">
            See digital workers{" "}
            <span className="text-gradient-primary">in action</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            Real business processes automated — across systems, channels, and languages
          </p>
        </motion.div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Navigation arrows */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 hidden md:flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/80 text-foreground backdrop-blur-sm transition-all hover:border-primary/40 hover:bg-card -translate-x-1/2"
            aria-label="Previous worker"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 hidden md:flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/80 text-foreground backdrop-blur-sm transition-all hover:border-primary/40 hover:bg-card translate-x-1/2"
            aria-label="Next worker"
          >
            <ChevronRight size={20} />
          </button>

          {/* Cards container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {digitalWorkers.map((worker, i) => {
              const Icon = worker.icon;
              const isActive = i === activeIndex;

              return (
                <motion.div
                  key={worker.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  onClick={() => setActiveIndex(i)}
                  className={`group relative flex-shrink-0 w-[340px] md:w-[420px] snap-center cursor-pointer rounded-2xl border p-6 transition-all duration-500 ${
                    isActive
                      ? "border-primary/50 bg-card glow-primary scale-[1.02]"
                      : "border-border/50 bg-card/30 hover:border-border hover:bg-card/50"
                  }`}
                >
                  {/* Accent glow */}
                  {isActive && (
                    <div className={`absolute -inset-px rounded-2xl bg-gradient-to-br ${worker.accentFrom} ${worker.accentTo} opacity-10 blur-sm -z-10`} />
                  )}

                  {/* Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`flex h-11 w-11 items-center justify-center rounded-xl transition-colors ${
                      isActive ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground"
                    }`}>
                      <Icon size={22} />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{worker.title}</h3>
                  </div>

                  {/* Animated workflow steps */}
                  <div className="mb-4 min-h-[220px]">
                    <StepAnimation steps={worker.steps} isActive={isActive} />
                  </div>

                  {/* Flow description */}
                  <div className="mb-4 rounded-lg border border-border/50 bg-muted/30 px-4 py-3">
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      <span className="font-semibold text-foreground/80">Input:</span> {worker.input}
                      <br />
                      <span className="font-semibold text-foreground/80">Action:</span> {worker.action}
                      <br />
                      <span className="font-semibold text-foreground/80">Outcome:</span> {worker.outcome}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {worker.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="text-[10px] font-medium border-border/50 text-muted-foreground"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {digitalWorkers.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === activeIndex ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to worker ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalWorkerCarousel;
