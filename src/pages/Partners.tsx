import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Compass,
  Rocket,
  Wrench,
  Plug,
  Package,
  LifeBuoy,
  Lightbulb,
  Truck,
  Network,
  Factory,
  Settings,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const helpItems = [
  { icon: Compass, title: "Discover opportunities", body: "Identify business processes where AI digital workers can reduce manual work, improve journeys and create measurable value." },
  { icon: Rocket, title: "Run proof-of-value projects", body: "Help customers start small with one process, realistic examples and clear success criteria." },
  { icon: Wrench, title: "Deliver implementations", body: "Support the design, validation and rollout of guided digital worker journeys." },
  { icon: Plug, title: "Integrate with systems", body: "Connect digital workers with the business tools, data and systems needed for production use." },
  { icon: Package, title: "Package industry solutions", body: "Create repeatable solutions for sectors, departments or common business processes." },
  { icon: LifeBuoy, title: "Support long-term success", body: "Help customers improve, expand and manage digital workers after launch." },
];

const partnerTypes = [
  { icon: Lightbulb, title: "Consulting partners", body: "Help customers identify opportunities, define business cases and shape transformation programmes." },
  { icon: Truck, title: "Delivery partners", body: "Support proof-of-value projects, implementation and customer rollout." },
  { icon: Network, title: "Integration partners", body: "Help connect Greentic-powered digital workers with business systems and data." },
  { icon: Factory, title: "Industry solution partners", body: "Package digital worker solutions around specific industries or business functions." },
  { icon: Settings, title: "Managed service partners", body: "Support customers after launch with monitoring, improvement and expansion." },
];

const Partners = () => {
  useEffect(() => {
    document.title = "Greentic Partners | Greentic AI";
    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };
    setMeta(
      "description",
      "Greentic partners help organisations move from AI ideas to practical digital worker solutions across discovery, delivery, integration and managed services.",
    );
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://greentic.ai/partners");
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto max-w-6xl px-4 pt-28 pb-16">
        <header className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary">Partners</p>
          <h1 className="font-display text-4xl font-bold text-foreground md:text-5xl">
            Greentic Partners
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Greentic partners help organisations move from AI ideas to practical digital worker solutions.
            They can support customers with discovery, proof-of-value projects, implementation,
            integration, managed services and industry-specific solutions.
          </p>
        </header>

        <section className="mb-16">
          <h2 className="mb-6 font-display text-2xl font-bold text-foreground md:text-3xl">
            How partners help customers
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {helpItems.map(({ icon: Icon, title, body }) => (
              <Card key={title} className="border-border">
                <CardHeader>
                  <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon size={20} />
                  </div>
                  <CardTitle className="text-lg">{title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">{body}</CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="mb-6 font-display text-2xl font-bold text-foreground md:text-3xl">
            Types of partners
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {partnerTypes.map(({ icon: Icon, title, body }) => (
              <Card key={title} className="border-border">
                <CardHeader>
                  <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon size={20} />
                  </div>
                  <CardTitle className="text-lg">{title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">{body}</CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-gradient-to-b from-primary/5 to-transparent p-8">
            <h2 className="font-display text-2xl font-bold text-foreground">For customers</h2>
            <p className="mt-3 text-muted-foreground">
              If you are a customer interested in working with Greentic and our partner ecosystem, contact
              us to discuss your goals, target process and preferred delivery approach.
            </p>
            <Link
              to="/#cta"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 glow-primary"
            >
              Contact Greentic <ArrowRight size={16} />
            </Link>
          </div>
          <div className="rounded-2xl border border-border bg-gradient-to-b from-primary/5 to-transparent p-8">
            <h2 className="font-display text-2xl font-bold text-foreground">For partners</h2>
            <p className="mt-3 text-muted-foreground">
              If you are a partner, or are interested in becoming one, the Greentic Partner Portal
              contains the starter kit, sales guidance, demo guidance, use cases, proof-of-value material,
              training and FAQs.
            </p>
            <a
              href="https://partner.greentic.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-lg border border-primary/40 px-5 py-2.5 text-sm font-semibold text-foreground transition-all hover:bg-primary/10"
            >
              Visit Partner Portal <ExternalLink size={16} />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Partners;
