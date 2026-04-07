import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ShoppingCart, Monitor, TrendingUp, Database } from "lucide-react";

const useCases = [
  {
    icon: ShoppingCart,
    title: "Customer Self-Service",
    input: "Customer request (any language)",
    action: "Identify → Execute → Confirm",
    output: "Order placed, account updated, issue resolved",
    systems: "Shopify, Salesforce, WhatsApp",
    deploy: "5 days",
  },
  {
    icon: Monitor,
    title: "IT Helpdesk Automation",
    input: "Employee ticket / chat",
    action: "Classify → Execute → Resolve",
    output: "Automated ticket resolution",
    systems: "ServiceNow, Jira, Slack",
    deploy: "7 days",
  },
  {
    icon: TrendingUp,
    title: "Sales Assistant",
    input: "Lead inquiry / form",
    action: "Qualify → Enrich → Route",
    output: "Qualified lead in CRM",
    systems: "HubSpot, Salesforce, Email",
    deploy: "5 days",
  },
  {
    icon: Database,
    title: "Data Workflows",
    input: "Data event / webhook",
    action: "Transform → Validate → Store",
    output: "Clean data in target system",
    systems: "APIs, Databases, S3",
    deploy: "3 days",
  },
];

const UseCasesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="use-cases" className="py-24" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold md:text-5xl">
            Real workflows, <span className="text-gradient-primary">real outcomes</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {useCases.map((uc, i) => (
            <motion.div
              key={uc.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl border border-border bg-card/50 p-6 transition-all duration-300 hover:border-primary/30"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <uc.icon size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground">{uc.title}</h3>
                  <div className="mt-3 space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-primary">Input →</span>
                      <span className="text-muted-foreground">{uc.input}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-primary">Action →</span>
                      <span className="text-muted-foreground">{uc.action}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-primary">Output →</span>
                      <span className="text-muted-foreground">{uc.output}</span>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                    <span>{uc.systems}</span>
                    <span className="rounded-full border border-primary/20 bg-primary/5 px-2 py-0.5 text-primary">
                      {uc.deploy}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
