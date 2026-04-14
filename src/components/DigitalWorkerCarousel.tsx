import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight, Receipt, BarChart3, Package, Cloud, Headphones } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";

const workerIcons = [Receipt, BarChart3, Package, Cloud, Headphones];
const workerAccents = [
  { from: "from-emerald-400", to: "to-teal-500" },
  { from: "from-blue-400", to: "to-cyan-500" },
  { from: "from-violet-400", to: "to-purple-500" },
  { from: "from-amber-400", to: "to-orange-500" },
  { from: "from-rose-400", to: "to-pink-500" },
];

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
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % workers.length);
    }, 5000);
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

  const scrollPrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + workers.length) % workers.length);
  }, [workers.length]);
  const scrollNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % workers.length);
  }, [workers.length]);

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
            {t.digitalWorkers.title}{" "}
            <span className="text-gradient-primary">{t.digitalWorkers.titleHighlight}</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.digitalWorkers.subtitle}
          </p>
        </motion.div>

        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 hidden md:flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/80 text-foreground backdrop-blur-sm transition-all hover:border-primary/40 hover:bg-card -translate-x-1/2"
            aria-label={t.digitalWorkers.prevWorker}
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 hidden md:flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/80 text-foreground backdrop-blur-sm transition-all hover:border-primary/40 hover:bg-card translate-x-1/2"
            aria-label={t.digitalWorkers.nextWorker}
          >
            <ChevronRight size={20} />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {workers.map((worker: any, i: number) => {
              const Icon = workerIcons[i] || Receipt;
              const isActive = i === activeIndex;
              const accent = workerAccents[i] || workerAccents[0];

              return (
                <motion.div
                  key={i}
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
                  {isActive && (
                    <div
                      className={`absolute -inset-px rounded-2xl bg-gradient-to-br ${accent.from} ${accent.to} opacity-10 blur-sm -z-10`}
                    />
                  )}
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-xl transition-colors ${
                        isActive ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground"
                      }`}
                    >
                      <Icon size={22} />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{worker.title}</h3>
                  </div>

                  {/* Video demo */}
                  <div className="mb-4 rounded-lg overflow-hidden border border-border/50 bg-muted/30">
                    <video
                      src={worker.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-auto"
                    />
                  </div>

                  <div className="rounded-lg border border-border/50 bg-muted/30 px-4 py-3">
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      <span className="font-semibold text-foreground/80">
                        {t.digitalWorkers.inputLabel}
                      </span>{" "}
                      {worker.input}
                      <br />
                      <span className="font-semibold text-foreground/80">
                        {t.digitalWorkers.actionLabel}
                      </span>{" "}
                      {worker.action}
                      <br />
                      <span className="font-semibold text-foreground/80">
                        {t.digitalWorkers.outcomeLabel}
                      </span>{" "}
                      {worker.outcome}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {workers.map((_: any, i: number) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === activeIndex
                    ? "w-8 bg-primary"
                    : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`${t.digitalWorkers.goToWorker} ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalWorkerCarousel;
