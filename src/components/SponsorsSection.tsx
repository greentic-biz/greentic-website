import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const SponsorsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sponsors" className="py-24 bg-grid" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold md:text-5xl">
            Backed by <span className="text-gradient-primary">industry leaders</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground text-lg">
            Greentic is supported by leading technology partners. We are actively looking for additional sponsors — get in touch to join us.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-border bg-card/50 p-8 text-center transition-all hover:border-primary/30"
          >
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-2xl font-bold text-primary font-display">
              3P
            </div>
            <h3 className="text-xl font-semibold text-foreground">3Point.ai</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Get help launching AI solutions with positive ROI. Strategic consulting and implementation partner.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-2xl border border-border bg-card/50 p-8 text-center transition-all hover:border-primary/30"
          >
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-2xl font-bold text-primary font-display">
              DA
            </div>
            <h3 className="text-xl font-semibold text-foreground">DataArt</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Get Greentic certified experts. Global technology consultancy with deep engineering talent.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 mx-auto max-w-2xl rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center"
        >
          <h3 className="text-xl font-semibold text-foreground mb-3">3AIgent Ecosystem</h3>
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
