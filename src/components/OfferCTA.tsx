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
        <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl rounded-3xl border border-primary/30 bg-gradient-to-b from-primary/10 to-transparent p-12 text-center glow-primary-intense">
          <h2 className="text-3xl font-bold md:text-5xl">
            {t.cta.title} <span className="text-gradient-primary">{t.cta.titleHighlight}</span>
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {t.cta.benefits.map((b, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                <Check size={16} className="text-primary" />{b}
              </div>
            ))}
          </div>
          <a href="mailto:hello@greentic.ai" className="mt-10 inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground transition-all hover:brightness-110 glow-primary">
            <Rocket size={20} /> {t.cta.button}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default OfferCTA;
