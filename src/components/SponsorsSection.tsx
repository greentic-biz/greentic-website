import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useI18n } from "@/i18n/I18nProvider";
import threePointLogo from "@/assets/3point-logo.jpeg";
import dataartLogo from "@/assets/dataart-logo.png";

const SponsorsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useI18n();

  return (
    <section id="sponsors" className="py-24 bg-grid" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="text-3xl font-bold md:text-5xl">
            {t.sponsors.title} <span className="text-gradient-primary">{t.sponsors.titleHighlight}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground text-lg">{t.sponsors.subtitle}</p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-border bg-card/50 p-8 text-center transition-all hover:border-primary/30">
            <div className="mx-auto mb-4 flex h-12 w-40 items-center justify-center rounded-xl overflow-hidden">
              <img src={threePointLogo} alt="3Point.ai logo" className="h-full w-full object-cover" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">{t.sponsors.threePoint.name}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{t.sponsors.threePoint.description}</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-2xl border border-border bg-card/50 p-8 text-center transition-all hover:border-primary/30">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl overflow-hidden bg-white">
              <img src={dataartLogo} alt="DataArt logo" className="h-full w-full object-contain p-1" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">{t.sponsors.dataArt.name}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{t.sponsors.dataArt.description}</p>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 mx-auto max-w-2xl rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center">
          <h3 className="text-xl font-semibold text-foreground mb-3">{t.sponsors.ecosystem.title}</h3>
          <p className="text-muted-foreground leading-relaxed">
            <span className="text-primary font-medium">3AIgent</span>, built by 3Point.ai and powered by Greentic, is bringing these capabilities to market.
            3AIgent will soon be resold by <span className="text-foreground font-medium">Cisco</span>, <span className="text-foreground font-medium">Nutanix</span>, and other global partners.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SponsorsSection;
