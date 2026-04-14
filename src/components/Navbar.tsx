import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import { useI18n } from "@/i18n/I18nProvider";
import LanguageSelector from "@/components/LanguageSelector";
import greenticLogo from "@/assets/greentic-logo.png";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { t } = useI18n();

  const navLinks = [
    
    { label: t.nav.demos, href: "https://demos.greentic.ai", external: true },
    { label: t.nav.useCases, href: "#use-cases" },
    { label: t.nav.howItWorks, href: "#how-it-works" },
    { label: t.nav.partners, href: "#sponsors" },
    { label: t.nav.docs, href: "https://docs.greentic.ai", external: true },
    { label: t.nav.blog, href: "https://greentic-ai.medium.com/", external: true },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <a href="#" className="flex items-center gap-2">
          <img src={greenticLogo} alt="Greentic.ai logo" className="h-8 w-8" />
          <span className="font-display text-xl font-bold text-foreground">
            Greentic<span className="text-primary">.ai</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <LanguageSelector />
          <button
            onClick={toggleTheme}
            className="rounded-lg border border-border p-2 text-muted-foreground transition-colors hover:text-foreground hover:border-primary/40"
            aria-label={t.nav.toggleTheme}
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a
            href="#cta"
            className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 glow-primary"
          >
            {t.nav.bookPilot}
          </a>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-b border-border bg-background md:hidden"
          >
            <div className="flex flex-col gap-4 p-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center gap-3">
                <LanguageSelector />
                <button
                  onClick={toggleTheme}
                  className="rounded-lg border border-border p-2 text-muted-foreground transition-colors hover:text-foreground hover:border-primary/40"
                  aria-label={t.nav.toggleTheme}
                >
                  {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                </button>
              </div>
              <a href="#cta" className="rounded-lg bg-primary px-4 py-2 text-center text-sm font-semibold text-primary-foreground">
                {t.nav.bookPilot}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
