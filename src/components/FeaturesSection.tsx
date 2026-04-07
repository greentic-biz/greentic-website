import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Radio, ShoppingCart, Cloud, Repeat } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";

const icons = [Radio, ShoppingCart, Cloud, Repeat];
const accents = [
  "from-emerald-500/20 to-teal-500/20",
  "from-blue-500/20 to-cyan-500/20",
  "from-violet-500/20 to-purple-500/20",
  "from-amber-500/20 to-orange-500/20",
];

const FeaturesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useI18n();

  return (
    <section id="features" className="py-24" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="text-3xl font-bold md:text-5xl">
            {t.features.title} <span className="text-gradient-primary">{t.features.titleHighlight}</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">{t.features.subtitle}</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {t.features.items.map((uc, i) => {
            const Icon = icons[i] || Radio;
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card/50 p-8 transition-all duration-300 hover:border-primary/40 hover:glow-primary">
                <div className={`absolute inset-0 bg-gradient-to-br ${accents[i]} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />
                <div className="relative">
                  <div className="mb-2 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                      <Icon size={24} />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary">{uc.industry}</span>
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-foreground">{uc.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{uc.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
