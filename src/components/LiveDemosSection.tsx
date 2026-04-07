import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const demos = [
  {
    title: "Multilingual Website Assistant",
    description: "AI assistant that speaks your customers' language, deployed on any website.",
    systems: ["Web Chat", "MCP", "Translation"],
    iframeSrc: "https://store-demo.greentic.ai/",
  },
  {
    title: "Platform Architecture Explorer",
    description: "Explore Greentic's five-layer architecture — from foundation to developer experience.",
    systems: ["Runtime", "MCP Exec", "OAuth"],
    iframeSrc: "https://paulhale.github.io/3Point-Greentic-Tutorials/platform/",
  },
];

const LiveDemosSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="demos" className="relative py-24 overflow-hidden" ref={ref}>
      <div className="pointer-events-none absolute top-1/2 right-0 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-primary/5 blur-[140px]" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm text-primary">
            ⚡ Interactive
          </span>
          <h2 className="mt-4 text-3xl font-bold md:text-5xl">
            See it <span className="text-gradient-primary">in action</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">Experience Greentic directly — no signup required</p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {demos.map((demo, i) => (
            <motion.div
              key={demo.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="rounded-2xl border border-border bg-card/50 overflow-hidden transition-all duration-300 hover:border-primary/30"
            >
              <div className="p-5 border-b border-border/50">
                <h3 className="text-xl font-semibold text-foreground">{demo.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{demo.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {demo.systems.map((sys) => (
                    <span key={sys} className="rounded-full border border-primary/20 bg-primary/5 px-2.5 py-0.5 text-xs text-primary">
                      {sys}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-secondary/20">
                <iframe
                  src={demo.iframeSrc}
                  className="w-full h-[450px] md:h-[500px]"
                  title={demo.title}
                  allow="clipboard-write"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveDemosSection;
