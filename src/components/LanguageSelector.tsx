import { useState, useRef, useEffect } from "react";
import { Globe } from "lucide-react";
import { useI18n, SUPPORTED_LOCALES, LOCALE_NAMES } from "@/i18n/I18nProvider";

const LanguageSelector = () => {
  const { locale, setLocale } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 rounded-lg border border-border px-2.5 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground hover:border-primary/40"
        aria-label="Select language"
      >
        <Globe size={16} />
        <span className="uppercase text-xs font-semibold">{locale}</span>
      </button>
      {open && (
        <div className="absolute right-0 top-full mt-2 z-50 max-h-80 w-48 overflow-y-auto rounded-xl border border-border bg-card shadow-xl backdrop-blur-xl">
          {SUPPORTED_LOCALES.map((loc) => (
            <button
              key={loc}
              onClick={() => { setLocale(loc); setOpen(false); }}
              className={`flex w-full items-center gap-2 px-3 py-2 text-sm transition-colors hover:bg-primary/10 ${
                loc === locale ? "text-primary font-semibold bg-primary/5" : "text-foreground"
              }`}
            >
              <span className="uppercase text-xs w-6 text-muted-foreground">{loc}</span>
              <span>{LOCALE_NAMES[loc]}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
