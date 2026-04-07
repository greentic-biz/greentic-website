import { useI18n } from "@/i18n/I18nProvider";
import { Bot, Building2, Rocket, X, Check, AlertTriangle } from "lucide-react";

const ComparisonSection = () => {
  const { t } = useI18n();
  const c = t.comparison;

  const columns = [
    {
      icon: Bot,
      title: c.agents.title,
      subtitle: c.agents.subtitle,
      howItems: c.agents.how,
      resultItems: c.agents.result,
      resultType: "negative" as const,
      accent: "from-orange-500/20 to-orange-600/10",
      border: "border-orange-500/30",
      iconColor: "text-orange-400",
    },
    {
      icon: Building2,
      title: c.copilots.title,
      subtitle: c.copilots.subtitle,
      howItems: c.copilots.how,
      resultItems: c.copilots.result,
      resultType: "mixed" as const,
      accent: "from-yellow-500/20 to-yellow-600/10",
      border: "border-yellow-500/30",
      iconColor: "text-yellow-400",
    },
    {
      icon: Rocket,
      title: c.greentic.title,
      subtitle: c.greentic.subtitle,
      howItems: c.greentic.how,
      resultItems: c.greentic.result,
      resultType: "positive" as const,
      accent: "from-emerald-500/20 to-emerald-600/10",
      border: "border-emerald-500/30",
      iconColor: "text-emerald-400",
    },
  ];

  const ResultIcon = ({ type }: { type: string }) => {
    if (type === "negative") return <X className="w-4 h-4 text-red-400 shrink-0" />;
    if (type === "mixed") return <AlertTriangle className="w-4 h-4 text-yellow-400 shrink-0" />;
    return <Check className="w-4 h-4 text-emerald-400 shrink-0" />;
  };

  return (
    <section className="py-20 px-4 sm:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          {c.title} <span className="text-primary">{c.titleHighlight}</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">{c.subtitle}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {columns.map((col, i) => (
            <div
              key={i}
              className={`rounded-xl border ${col.border} bg-gradient-to-b ${col.accent} backdrop-blur-sm p-6 flex flex-col ${i === 2 ? "ring-2 ring-primary/40" : ""}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <col.icon className={`w-6 h-6 ${col.iconColor}`} />
                <div>
                  <h3 className="font-semibold text-foreground">{col.title}</h3>
                  <p className="text-xs text-muted-foreground">{col.subtitle}</p>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">{c.howLabel}</p>
                <ul className="space-y-1.5">
                  {col.howItems.map((item: string, j: number) => (
                    <li key={j} className="text-sm text-foreground/80 flex items-start gap-2">
                      <span className="text-muted-foreground mt-0.5">›</span> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto pt-4 border-t border-border/50">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">{c.resultLabel}</p>
                <ul className="space-y-1.5">
                  {col.resultItems.map((item: string, j: number) => (
                    <li key={j} className="text-sm text-foreground/80 flex items-start gap-2">
                      <ResultIcon type={col.resultType} /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
