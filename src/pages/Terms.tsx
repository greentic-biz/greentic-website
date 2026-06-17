import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Terms = () => {
  useEffect(() => {
    document.title = "Terms and Conditions | Greentic AI";

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
      "Terms and Conditions for Greentic AI Ltd websites, demos, resources and partner materials.",
    );

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://greentic.ai/terms");
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto max-w-4xl px-4 pt-28 pb-16">
        <header className="mb-10">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary">Legal</p>
          <h1 className="font-display text-4xl font-bold text-foreground md:text-5xl">
            Terms and Conditions
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">Last updated: 17 June 2026</p>
        </header>

        <Card className="mb-6 border-primary/30 bg-primary/5">
          <CardContent className="p-6 text-sm text-muted-foreground">
            <strong className="text-foreground">Note:</strong> These Terms and Conditions are intended to
            provide clear website terms for Greentic AI Ltd. They should be reviewed and finalised by
            legal counsel before publication.
          </CardContent>
        </Card>

        <p className="mb-4 text-base leading-relaxed text-muted-foreground">
          These Terms and Conditions explain the rules for accessing and using Greentic AI Ltd websites,
          resources, demos, marketing pages, partner materials and related online content that link to
          these terms.
        </p>

        <p className="mb-10 text-base leading-relaxed text-muted-foreground">
          If you enter into a separate written agreement with Greentic AI Ltd, that agreement may contain
          additional or different terms. In the event of a conflict, the separate written agreement will
          usually take priority for the products, services or relationship it covers.
        </p>

        {/* 1 */}
        <section className="mb-12">
          <h2 className="mb-4 font-display text-2xl font-bold text-foreground">1. Who we are</h2>
          <p className="mb-6 text-muted-foreground">
            Greentic AI Ltd operates the websites, resources and online materials described in these Terms
            and Conditions, unless stated otherwise.
          </p>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Company details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <div><span className="font-medium text-foreground">Company name:</span> Greentic AI Ltd</div>
              <div><span className="font-medium text-foreground">Registered office:</span> 63 Lynwood Road, Thames Ditton, KT70DJ, United Kingdom</div>
              <div><span className="font-medium text-foreground">Company registration number:</span> 16820640</div>
              <div><span className="font-medium text-foreground">VAT number:</span> [Insert VAT number if applicable]</div>
              <div><span className="font-medium text-foreground">Contact email:</span> privacy@greentic.ai</div>
            </CardContent>
          </Card>
        </section>

        {/* 2 */}
        <section className="mb-12">
          <h2 className="mb-4 font-display text-2xl font-bold text-foreground">
            2. Websites and resources covered by these terms
          </h2>
          <p className="mb-4 text-muted-foreground">These Terms and Conditions may apply to:</p>
          <ul className="mb-4 list-disc space-y-1 pl-6 text-muted-foreground">
            <li>greentic.ai</li>
            <li>partner.greentic.ai</li>
            <li>Greentic demo sites</li>
            <li>Greentic marketing pages</li>
            <li>Greentic partner resources</li>
            <li>Greentic online documentation or resources</li>
            <li>Greentic event, webinar or demo pages</li>
            <li>Other Greentic websites or online resources that link to these terms</li>
          </ul>
          <p className="mb-4 text-muted-foreground">
            These Terms and Conditions apply to Greentic AI Ltd websites, online resources and
            business-facing materials that link to these terms, unless separate terms, product terms,
            customer agreements, partner agreements or data processing terms apply.
          </p>
          <p className="text-muted-foreground">
            These website terms do not replace any separate written agreement you may have with Greentic
            AI Ltd.
          </p>
        </section>

        {/* 3 */}
        <section className="mb-12">
          <h2 className="mb-4 font-display text-2xl font-bold text-foreground">3. Acceptance of these terms</h2>
          <p className="mb-4 text-muted-foreground">
            By accessing or using a Greentic website, resource, demo, partner page or online material that
            links to these Terms and Conditions, you agree to comply with these terms.
          </p>
          <p className="mb-4 text-muted-foreground">
            If you do not agree with these terms, you should not use the relevant website, resource or
            online material.
          </p>
          <p className="text-muted-foreground">
            If you use the website or resources on behalf of an organisation, you confirm that you are
            authorised to do so.
          </p>
        </section>

        {/* 4 */}
        <section className="mb-12">
          <h2 className="mb-4 font-display text-2xl font-bold text-foreground">4. Business use</h2>
          <p className="mb-4 text-muted-foreground">
            Greentic websites and resources are intended primarily for business, professional and
            organisational users. They are not intended for consumer, personal household or children’s use
            unless we clearly state otherwise.
          </p>
          <p className="text-muted-foreground">
            You are responsible for ensuring that your access and use of Greentic websites and resources
            complies with laws and policies that apply to you or your organisation.
          </p>
        </section>

        {/* 5 */}
        <section className="mb-12">
          <h2 className="mb-4 font-display text-2xl font-bold text-foreground">5. Information on our websites</h2>
          <p className="mb-4 text-muted-foreground">
            We aim to keep information on our websites accurate, useful and up to date, but we do not
            guarantee that all content is complete, current or free from errors.
          </p>
          <p className="mb-4 text-muted-foreground">
            Content on our websites is provided for general information and business discussion purposes
            only. It should not be treated as legal, financial, technical, professional or other
            specialist advice.
          </p>
          <p className="text-muted-foreground">
            We may update, remove or change website content at any time without notice.
          </p>
        </section>

        {/* 6 */}
        <section className="mb-12">
          <h2 className="mb-4 font-display text-2xl font-bold text-foreground">
            6. Demos, examples and partner resources
          </h2>
          <p className="mb-4 text-muted-foreground">
            Our websites may include demos, example workflows, sample content, partner starter kits, sales
            materials, proof-of-value templates, training resources, use cases or other enablement
            materials.
          </p>
          <p className="mb-4 text-muted-foreground">
            These materials are provided for illustration, discussion and enablement purposes. They may
            need to be adapted, reviewed and validated before being used in a customer, production, legal,
            regulated or business-critical context.
          </p>
          <p className="text-muted-foreground">
            Any demo, sample data or example scenario should not be treated as a guarantee of product
            functionality, commercial outcome, regulatory compliance or customer result.
          </p>
        </section>

        {/* 7 */}
        <section className="mb-12">
          <h2 className="mb-4 font-display text-2xl font-bold text-foreground">
            7. Accounts, forms and submissions
          </h2>
          <p className="mb-4 text-muted-foreground">
            If a Greentic website or resource allows you to submit information, register interest, request
            a demo, access partner resources or create an account, you agree to provide accurate and
            appropriate information.
          </p>
          <p className="mb-4 text-muted-foreground">
            You must not submit information that is unlawful, misleading, confidential to a third party
            without permission, harmful, infringing, offensive or otherwise inappropriate.
          </p>
          <p className="text-muted-foreground">
            If login details or access credentials are provided, you are responsible for keeping them
            secure and for any activity carried out using them.
          </p>
        </section>

        {/* 8 */}
        <section className="mb-12">
          <h2 className="mb-4 font-display text-2xl font-bold text-foreground">8. Acceptable use</h2>
          <p className="mb-4 text-muted-foreground">
            You must use Greentic websites and resources lawfully, responsibly and in a way that does not
            damage, disrupt or misuse them.
          </p>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">You must not:</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                <li>Attempt to gain unauthorised access to any website, system, account, data or network</li>
                <li>Interfere with website security, availability or performance</li>
                <li>Introduce malware, harmful code or automated abuse</li>
                <li>Scrape, copy or extract content at scale without permission</li>
                <li>Use the websites or resources for unlawful, misleading or harmful purposes</li>
                <li>Submit content that infringes intellectual property or privacy rights</li>
                <li>Misrepresent your identity or affiliation</li>
                <li>Use Greentic names, logos or materials in a misleading way</li>
                <li>Reverse engineer, copy or misuse demos, resources or platform concepts except as permitted in writing</li>
                <li>Use the websites or resources in a way that breaches applicable laws or regulations</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* 9 */}
        <section className="mb-12">
          <h2 className="mb-4 font-display text-2xl font-bold text-foreground">9. Intellectual property</h2>
          <p className="mb-4 text-muted-foreground">
            Unless stated otherwise, Greentic AI Ltd or its licensors own the intellectual property rights
            in Greentic websites, branding, content, designs, text, graphics, demos, resources, materials,
            software, documentation and other online assets.
          </p>
          <p className="mb-4 text-muted-foreground">
            You may view and use website content for legitimate business evaluation, partner enablement or
            informational purposes, subject to these terms and any separate agreement that applies.
          </p>
          <p className="text-muted-foreground">
            You must not copy, modify, distribute, sell, sublicense, publish, reproduce or create
            derivative works from Greentic content without permission, except where expressly allowed by
            Greentic AI Ltd or by applicable law.
          </p>
        </section>

        {/* 10 */}
        <section className="mb-12">
          <h2 className="mb-4 font-display text-2xl font-bold text-foreground">
            10. Partner and marketing materials
          </h2>
          <p className="mb-4 text-muted-foreground">
            Some materials may be made available to prospective or approved partners for sales, marketing,
            demo, proof-of-value or training purposes.
          </p>
          <p className="mb-4 text-muted-foreground">
            Unless otherwise agreed in writing, partner materials are provided to help explain Greentic
            and should not be used in a misleading way, altered to make unsupported claims or presented as
            a binding commitment by Greentic AI Ltd.
          </p>
          <p className="text-muted-foreground">
            Use of Greentic branding, logos, names or marks may be subject to separate brand guidelines or
            partner agreement terms.
          </p>
        </section>

        {/* 11 */}
        <section className="mb-12">
          <h2 className="mb-4 font-display text-2xl font-bold text-foreground">11. User content and feedback</h2>
          <p className="mb-4 text-muted-foreground">
            If you provide comments, suggestions, feedback, ideas, use-case examples or other content to
            Greentic AI Ltd, you confirm that you have the right to provide it.
          </p>
          <p className="mb-4 text-muted-foreground">
            Unless otherwise agreed in writing, you grant Greentic AI Ltd a permission to use feedback and
            suggestions to improve its websites, products, services, materials and business activities
            without obligation to compensate you.
          </p>
          <p className="text-muted-foreground">
            Do not provide confidential information through public website forms or feedback channels
            unless we have agreed appropriate confidentiality arrangements.
          </p>
        </section>

        {/* 12 */}
        <section className="mb-12">
          <h2 className="mb-4 font-display text-2xl font-bold text-foreground">12. Confidentiality</h2>
          <p className="mb-4 text-muted-foreground">
            Information on public Greentic websites should not be treated as confidential unless clearly
            stated otherwise.
          </p>
          <p className="mb-4 text-muted-foreground">
            If confidential information is exchanged between you and Greentic AI Ltd, it should be
            governed by a separate non-disclosure agreement, customer agreement, partner agreement or
            written confidentiality arrangement.
          </p>
          <p className="text-muted-foreground">
            You should not submit confidential customer data, sensitive business information or personal
            data through website forms unless specifically requested and appropriate safeguards are in
            place.
          </p>
        </section>

        {/* 13 */}
        <section className="mb-12">
          <h2 className="mb-4 font-display text-2xl font-bold text-foreground">
            13. Third-party links and services
          </h2>
          <p className="mb-4 text-muted-foreground">
            Our websites may contain links to third-party websites, services, tools or resources. These
            links are provided for convenience only.
          </p>
          <p className="mb-4 text-muted-foreground">
            We are not responsible for the content, availability, security, privacy practices or terms of
            third-party websites or services.
          </p>
          <p className="text-muted-foreground">
            You should review the applicable third-party terms and privacy notices before using
            third-party websites or services.
          </p>
        </section>

        {/* 14 */}
        <section className="mb-12">
          <h2 className="mb-4 font-display text-2xl font-bold text-foreground">14. Privacy and cookies</h2>
          <p className="mb-4 text-muted-foreground">
            Our handling of personal data is described in our{" "}
            <Link to="/privacy" className="text-primary hover:underline">Privacy Notice</Link>{" "}
            (<a href="https://greentic.ai/privacy" className="text-primary hover:underline">https://greentic.ai/privacy</a>).
          </p>
          <p className="text-muted-foreground">
            Our websites may use cookies or similar technologies. Where required, further information
            should be provided in a Cookie Notice or cookie settings panel: [Insert Cookie Notice link if
            applicable].
          </p>
        </section>

        {/* 15 */}
        <section className="mb-12">
          <h2 className="mb-4 font-display text-2xl font-bold text-foreground">
            15. Website availability and changes
          </h2>
          <p className="mb-4 text-muted-foreground">
            We may update, suspend, withdraw, restrict or change any website, demo, resource or content at
            any time.
          </p>
          <p className="mb-4 text-muted-foreground">
            We do not guarantee that our websites or resources will always be available, uninterrupted,
            secure or free from errors.
          </p>
          <p className="text-muted-foreground">
            We may also update these Terms and Conditions from time to time. When we make changes, we will
            update the “Last updated” date.
          </p>
        </section>

        {/* 16-19 accordion */}
        <section className="mb-12">
          <h2 className="mb-4 font-display text-2xl font-bold text-foreground">
            16–19. Disclaimers, liability, indemnity and access
          </h2>
          <Accordion type="multiple" className="w-full">
            <AccordionItem value="disclaimers">
              <AccordionTrigger className="text-left">16. Disclaimers</AccordionTrigger>
              <AccordionContent className="space-y-3 text-muted-foreground">
                <p>
                  To the fullest extent permitted by law, Greentic websites, resources, demos and online
                  materials are provided on an “as is” and “as available” basis.
                </p>
                <p>
                  We do not guarantee that website content, demos, examples or resources will meet your
                  specific requirements, be suitable for a particular purpose, produce a particular
                  business outcome or be free from errors.
                </p>
                <p>Nothing in these terms excludes or limits liability where it would be unlawful to do so.</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="liability">
              <AccordionTrigger className="text-left">17. Limitation of liability</AccordionTrigger>
              <AccordionContent className="space-y-3 text-muted-foreground">
                <p>
                  To the fullest extent permitted by law, Greentic AI Ltd will not be liable for indirect,
                  incidental, special, consequential or punitive losses, or for loss of profits, revenue,
                  business, goodwill, data or anticipated savings arising from or relating to use of our
                  websites, demos, resources or online materials.
                </p>
                <p>
                  Our total liability in relation to use of our public websites and resources will be
                  limited to the extent permitted by applicable law.
                </p>
                <p>Different liability terms may apply under a separate written agreement with Greentic AI Ltd.</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="indemnity">
              <AccordionTrigger className="text-left">18. Indemnity</AccordionTrigger>
              <AccordionContent className="space-y-3 text-muted-foreground">
                <p>
                  To the extent permitted by law, you agree to be responsible for losses, claims, damages,
                  liabilities, costs or expenses arising from your misuse of Greentic websites or
                  resources, your breach of these terms, or your submission of unlawful, infringing or
                  inappropriate content.
                </p>
                <p>This section may be subject to limits under applicable law and any separate written agreement.</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="suspension">
              <AccordionTrigger className="text-left">19. Suspension or restriction of access</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We may suspend, restrict or terminate access to Greentic websites, resources, demos or
                materials where we reasonably believe there has been misuse, a security risk, breach of
                these terms, legal risk or other behaviour that may harm Greentic AI Ltd, users, partners
                or third parties.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* 20 */}
        <section className="mb-12">
          <h2 className="mb-4 font-display text-2xl font-bold text-foreground">
            20. Governing law and jurisdiction
          </h2>
          <p className="mb-4 text-muted-foreground">
            These Terms and Conditions are intended to be governed by the laws of [Insert governing law,
            e.g. England and Wales], unless mandatory laws in your location require otherwise.
          </p>
          <p className="mb-4 text-muted-foreground">
            The courts of [Insert jurisdiction, e.g. England and Wales] will have jurisdiction, subject to
            applicable law and any separate written agreement.
          </p>
          <Card className="border-primary/30 bg-primary/5">
            <CardContent className="p-4 text-sm text-muted-foreground">
              <strong className="text-foreground">Note:</strong> Legal counsel should confirm the
              appropriate governing law and jurisdiction before publication.
            </CardContent>
          </Card>
        </section>

        {/* 21 */}
        <section className="mb-12">
          <h2 className="mb-4 font-display text-2xl font-bold text-foreground">21. Contact us</h2>
          <p className="mb-6 text-muted-foreground">
            If you have questions about these Terms and Conditions, please contact us.
          </p>
          <Card>
            <CardContent className="space-y-2 p-6 text-sm text-muted-foreground">
              <div className="font-medium text-foreground">Greentic AI Ltd</div>
              <div><span className="font-medium text-foreground">Contact email:</span> privacy@greentic.ai</div>
              <div><span className="font-medium text-foreground">Registered office:</span> 63 Lynwood Road, Thames Ditton, KT70DJ, United Kingdom</div>
              <div><span className="font-medium text-foreground">Company registration number:</span> 16820640</div>
            </CardContent>
          </Card>
        </section>

        {/* 22 */}
        <section className="mb-12">
          <h2 className="mb-4 font-display text-2xl font-bold text-foreground">22. Last updated</h2>
          <p className="text-muted-foreground">Last updated: 17 June 2026</p>
        </section>

        <Separator className="my-10" />

        <p className="text-center text-xs italic text-muted-foreground">
          These Terms and Conditions are provided for transparency and should be reviewed periodically.
          Legal requirements may vary by jurisdiction and may change over time.
        </p>

        <div className="mt-6 text-center">
          <Link to="/" className="text-sm text-primary hover:underline">← Back to home</Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
