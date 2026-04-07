import { useI18n } from "@/i18n/I18nProvider";
import greenticLogo from "@/assets/greentic-logo.png";

const Footer = () => {
  const { t } = useI18n();

  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex items-center gap-2">
            <img src={greenticLogo} alt="Greentic.ai logo" className="h-8 w-8" />
            <span className="font-display text-lg font-bold text-foreground">
              Greentic<span className="text-primary">.ai</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <a href="https://docs.greentic.ai" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-primary">{t.footer.docs}</a>
            <a href="https://github.com/greenticai" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-primary">{t.footer.github}</a> target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-primary">{t.footer.github}</a> target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-primary">{t.footer.github}</a>
            <a href="mailto:hello@greentic.ai" className="transition-colors hover:text-primary">{t.footer.contact}</a>
            <a href="#sponsors" className="transition-colors hover:text-primary">{t.footer.partners}</a>
            <a href="https://linkedin.com/company/greentic" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-primary">{t.footer.linkedin}</a>
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-muted-foreground">
          {t.footer.copyright.replace("{year}", String(new Date().getFullYear()))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
