import { Link } from "react-router-dom";
import { Handshake, ArrowRight, ExternalLink } from "lucide-react";

const PartnersSection = () => {
  return (
    <section id="partners" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl rounded-2xl border border-border bg-gradient-to-b from-primary/5 to-transparent p-8 md:p-12">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center">
            <div className="rounded-xl border border-primary/30 bg-primary/10 p-4">
              <Handshake size={28} className="text-primary" />
            </div>
            <div className="flex-1">
              <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">
                Delivered with partners
              </h2>
              <p className="mt-3 text-muted-foreground">
                Greentic works with partners who help organisations discover, demo, deliver and scale AI
                digital worker solutions. Partners can support discovery workshops, proof-of-value
                projects, implementation, integration and industry-specific solutions.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Link
                  to="/partners"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 glow-primary"
                >
                  Learn about Greentic partners <ArrowRight size={16} />
                </Link>
                <a
                  href="https://partner.greentic.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  Already a partner or want to become one? Visit the Partner Portal
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
