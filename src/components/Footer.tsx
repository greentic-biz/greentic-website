const Footer = () => (
  <footer className="border-t border-border py-12">
    <div className="container mx-auto px-4">
      <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <span className="text-sm font-bold text-primary-foreground">G</span>
          </div>
          <span className="font-display text-lg font-bold text-foreground">
            Greentic<span className="text-primary">.ai</span>
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
          <a href="https://docs.greentic.ai" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-primary">Docs</a>
          <a href="https://github.com/greentic" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-primary">GitHub</a>
          <a href="mailto:hello@greentic.ai" className="transition-colors hover:text-primary">Contact</a>
          <a href="#sponsors" className="transition-colors hover:text-primary">Partners</a>
          <a href="https://linkedin.com/company/greentic" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-primary">LinkedIn</a>
        </div>
      </div>

      <div className="mt-8 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Greentic.ai — AI automation for real business systems.
      </div>
    </div>
  </footer>
);

export default Footer;
