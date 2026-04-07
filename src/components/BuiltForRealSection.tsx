import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Lock, Settings, Search, Puzzle } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";

const icons = [Lock, Settings, Search, Puzzle];

const BuiltForRealSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useI18n();

  return (
    <section className="py-24" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="text-3xl font-bold md:text-5xl">
            {t.builtForReal.title} <span className="text-gradient-primary">{t.builtForReal.titleHighlight}</span>{t.builtForReal.titleSuffix}
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {t.builtForReal.pillars.map((p, i) => {
            const Icon = icons[i] || Lock;
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl border border-border bg-card/50 p-6 text-center transition-all duration-300 hover:border-primary/30">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary"><Icon size={28} /></div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.sub}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BuiltForRealSection;
