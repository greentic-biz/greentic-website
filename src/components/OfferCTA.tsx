import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Rocket, Check } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";

const OfferCTA = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useI18n();

  return (
    <section id="cta" className="py-24" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-5xl text-center"
        >
          <h2 className="text-3xl font-bold md:text-5xl">
            {t.cta.title}{" "}
            <span className="text-gradient-primary">{t.cta.titleHighlight}</span>
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {t.cta.phases.map((phase: { name: string; items: string[] }, i: number) => (
              <motion.div
                key={phase.name}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
                className="rounded-2xl border border-primary/20 bg-gradient-to-b from-primary/5 to-transparent p-8 text-left"
              >
                <div className="mb-1 text-sm font-semibold uppercase tracking-wider text-primary">
                  0{i + 1}
                </div>
                <h3 className="mb-4 text-2xl font-bold">{phase.name}</h3>
                <ul className="space-y-3">
                  {phase.items.map((item: string, j: number) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check size={16} className="mt-0.5 shrink-0 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <a
            href="mailto:hello@greentic.ai"
            className="mt-12 inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground transition-all hover:brightness-110 glow-primary"
          >
            <Rocket size={20} /> {t.cta.button}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default OfferCTA;
