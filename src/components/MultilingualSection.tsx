import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useI18n } from "@/i18n/I18nProvider";

const MultilingualSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useI18n();

  return (
    <section id="multilingual" className="relative py-24 overflow-hidden" ref={ref}>
      <div className="pointer-events-none absolute top-0 left-0 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[120px]" />
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-12">
          <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm text-primary">{t.multilingual.badge}</span>
          <h2 className="mt-4 text-3xl font-bold md:text-5xl">
            {t.multilingual.title} <span className="text-gradient-primary">{t.multilingual.titleHighlight}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground text-lg">{t.multilingual.subtitle}</p>
          <p className="mx-auto mt-3 max-w-2xl text-primary font-medium italic">{t.multilingual.quote}</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 }} className="mx-auto max-w-4xl">
          <div className="rounded-2xl border border-border bg-card/50 p-2 glow-primary overflow-hidden">
            <div className="rounded-xl bg-secondary/30 p-1">
              <div className="flex items-center gap-2 px-3 py-2 border-b border-border/50">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-destructive/60" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
                  <div className="h-3 w-3 rounded-full bg-primary/60" />
                </div>
                <span className="text-xs text-muted-foreground ml-2">{t.multilingual.demoTitle}</span>
              </div>
              <iframe src="https://store-demo.greentic.ai/" className="w-full h-[500px] md:h-[600px] rounded-b-xl" title="Greentic Multilingual Assistant" allow="clipboard-write" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MultilingualSection;
