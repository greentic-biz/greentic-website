import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Maximize2, Minimize2 } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import demoVideo from "@/assets/greentic-acme-demo.mp4.asset.json";

const MultilingualSection = () => {
  const ref = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useI18n();
  const [expanded, setExpanded] = useState(false);



  return (
    <section id="multilingual" className="relative py-24 overflow-hidden" ref={ref}>
      <div className="pointer-events-none absolute top-0 left-0 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[120px]" />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm text-primary">
            {t.multilingual.badge}
          </span>
          <h2 className="mt-4 text-3xl font-bold md:text-5xl">
            {t.multilingual.title} <span className="text-gradient-primary">{t.multilingual.titleHighlight}</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">{t.multilingual.subtitle}</p>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">{t.multilingual.subtitle2}</p>
        </motion.div>

        <div className="mt-12 grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <ol className="space-y-4">
              {(t.multilingual.steps ?? []).map((step, i) => (
                <li key={step.title} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-sm font-semibold text-primary">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold text-foreground">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className={
              expanded
                ? "fixed inset-0 z-50 flex items-center justify-center bg-background/95 p-4"
                : "relative"
            }
          >
            <div className={expanded ? "w-full max-w-6xl" : "w-full"}>
              <div className="relative overflow-hidden rounded-2xl border border-primary/30 bg-card/50 shadow-2xl glow-primary">
                <div className="relative aspect-video w-full">
                  <video
                    ref={videoRef}
                    src={demoVideo.url}
                    className="absolute inset-0 h-full w-full cursor-pointer object-cover motion-reduce:[animation:none]"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    onClick={() => setExpanded((e) => !e)}
                  />
                  <div className="absolute bottom-3 right-3 flex gap-2">
                    <button
                      type="button"
                      onClick={() => setExpanded((e) => !e)}
                      aria-label={expanded ? "Shrink video" : "Expand video"}
                      className="rounded-full bg-background/70 p-2 text-foreground backdrop-blur-sm transition-colors hover:text-primary"
                    >
                      {expanded ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
                    </button>
                  </div>
                </div>
              </div>
              <p className="mt-3 text-center text-sm text-muted-foreground">{t.multilingual.videoCaption}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MultilingualSection;
