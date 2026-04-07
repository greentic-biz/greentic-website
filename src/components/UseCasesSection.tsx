import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ShoppingCart, Monitor, TrendingUp, Database } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";

const icons = [ShoppingCart, Monitor, TrendingUp, Database];

const UseCasesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useI18n();

  return (
    <section id="use-cases" className="py-24" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="text-3xl font-bold md:text-5xl">
            {t.useCases.title} <span className="text-gradient-primary">{t.useCases.titleHighlight}</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {t.useCases.items.map((uc, i) => {
            const Icon = icons[i] || ShoppingCart;
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group rounded-2xl border border-border bg-card/50 p-6 transition-all duration-300 hover:border-primary/30">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary"><Icon size={24} /></div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground">{uc.title}</h3>
                    <div className="mt-3 space-y-2 text-sm">
                      <div className="flex items-center gap-2"><span className="font-medium text-primary">{t.useCases.inputLabel}</span><span className="text-muted-foreground">{uc.input}</span></div>
                      <div className="flex items-center gap-2"><span className="font-medium text-primary">{t.useCases.actionLabel}</span><span className="text-muted-foreground">{uc.action}</span></div>
                      <div className="flex items-center gap-2"><span className="font-medium text-primary">{t.useCases.outputLabel}</span><span className="text-muted-foreground">{uc.output}</span></div>
                    </div>
                    <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                      <span>{uc.systems}</span>
                      <span className="rounded-full border border-primary/20 bg-primary/5 px-2 py-0.5 text-primary">{uc.deploy}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
