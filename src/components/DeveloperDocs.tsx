import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const codeSnippet = `# Install Greentic
cargo binstall gtc
gtc install

# Create a new solution
gtc wizard --answers https://...

# Setup the solution
gtc setup ./name-bundle --answers https://...

# Deploy to production
gtc start ./name-bundle`;

const DeveloperDocs = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-grid" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold md:text-5xl">
            Start <span className="text-gradient-primary">building</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto max-w-2xl"
        >
          <div className="rounded-2xl border border-border bg-card/80 overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50 bg-secondary/30">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-destructive/60" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
                <div className="h-3 w-3 rounded-full bg-primary/60" />
              </div>
              <span className="text-xs text-muted-foreground ml-2">terminal</span>
            </div>
            <pre className="p-6 text-sm text-foreground/90 overflow-x-auto font-mono leading-relaxed">
              {codeSnippet}
            </pre>
          </div>

          <div className="mt-8 text-center">
            <a
              href="https://docs.greentic.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-6 py-3 font-semibold text-secondary-foreground transition-all hover:border-primary/40"
            >
              <ExternalLink size={18} /> Read the Docs
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DeveloperDocs;
