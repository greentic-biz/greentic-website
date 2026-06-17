import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Privacy = () => {
  useEffect(() => {
    document.title = "Privacy Notice | Greentic AI";

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
      "Privacy Notice for Greentic AI Ltd: how we collect, use, share and protect personal data across Greentic websites and services.",
    );

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://greentic.ai/privacy");
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto max-w-4xl px-4 pt-28 pb-16">
        <header className="mb-10">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary">
            Legal
          </p>
          <h1 className="font-display text-4xl font-bold text-foreground md:text-5xl">
            Privacy Notice
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Last updated: 17 June 2026
          </p>
        </header>

        <Card className="mb-8 border-primary/30 bg-primary/5">
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Note:</strong> This Privacy Notice is intended to explain
              our privacy practices in a clear and transparent way. It should be reviewed and finalised by
              legal counsel before publication.
            </p>
          </CardContent>
        </Card>

        <p className="mb-10 text-base leading-relaxed text-muted-foreground">
          This Privacy Notice explains how Greentic AI Ltd collects, uses, shares and protects personal
          data when you visit our websites, interact with us, request information, use our resources,
          register interest in Greentic, communicate with our team or otherwise engage with Greentic AI Ltd.
        </p>

        {/* Section 1 */}
        <section className="mb-12">
          <h2 className="mb-4 font-display text-2xl font-bold text-foreground">1. Who we are</h2>
          <p className="mb-6 text-muted-foreground">
            Greentic AI Ltd is responsible for the personal data described in this Privacy Notice, unless
            stated otherwise.
          </p>
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-lg">Company details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <div><span className="text-foreground font-medium">Company name:</span> Greentic AI Ltd</div>
              <div><span className="text-foreground font-medium">Registered office:</span> 63 Lynwood Road, Thames Ditton, KT70DJ, United Kingdom</div>
              <div><span className="text-foreground font-medium">Company registration number:</span> 16820640</div>
              <div><span className="text-foreground font-medium">Privacy contact email:</span> privacy@greentic.ai</div>
              <div><span className="text-foreground font-medium">Data protection contact:</span> privacy@greentic.ai</div>
            </CardContent>
          </Card>
          <p className="text-muted-foreground">
            For the purposes of UK GDPR, EU GDPR and similar privacy laws where applicable, Greentic AI Ltd
            may act as a data controller for personal data collected through our websites and related
            business interactions.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-12">
          <h2 className="mb-4 font-display text-2xl font-bold text-foreground">
            2. Websites and services covered by this notice
          </h2>
          <p className="mb-4 text-muted-foreground">This Privacy Notice may apply when someone interacts with Greentic AI Ltd through:</p>
          <ul className="mb-4 list-disc space-y-1 pl-6 text-muted-foreground">
            <li>greentic.ai</li>
            <li>partner.greentic.ai</li>
            <li>Greentic demo sites</li>
            <li>Greentic marketing pages</li>
            <li>Greentic partner resources</li>
            <li>Greentic product or service enquiry forms</li>
            <li>Greentic webinars, demos or events</li>
            <li>Greentic sales, partner, support or business communications</li>
          </ul>
          <p className="mb-4 text-muted-foreground">
            This Privacy Notice applies to Greentic AI Ltd websites, resources and business interactions
            that link to this notice, unless a separate privacy notice, customer agreement or data
            processing agreement applies.
          </p>
          <p className="text-muted-foreground">
            If a Greentic product, customer deployment, proof of value, integration, partner agreement or
            service contract has its own privacy terms or data processing agreement, those terms may also
            apply.
          </p>
        </section>

        {/* Section 3 */}
        <section className="mb-12">
          <h2 className="mb-4 font-display text-2xl font-bold text-foreground">
            3. When this Privacy Notice applies
          </h2>
          <p className="mb-4 text-muted-foreground">This notice applies when someone:</p>
          <ul className="mb-4 list-disc space-y-1 pl-6 text-muted-foreground">
            <li>Visits Greentic websites</li>
            <li>Submits a contact form</li>
            <li>Requests product, partner or demo information</li>
            <li>Registers interest in becoming a partner</li>
            <li>Views or uses Greentic resources</li>
            <li>Communicates with Greentic by email, phone, web form or online meeting</li>
            <li>Attends a Greentic event, webinar or demo</li>
            <li>Interacts with Greentic marketing campaigns</li>
            <li>Uses partner or demo resources where personal data is collected</li>
          </ul>
          <p className="text-muted-foreground">
            This Privacy Notice does not replace any separate agreement, data processing agreement,
            customer contract, product-specific privacy notice or service-specific terms that may apply.
          </p>
        </section>

        {/* Section 4 */}
        <section className="mb-12">
          <h2 className="mb-4 font-display text-2xl font-bold text-foreground">
            4. Personal data we may collect
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                title: "Contact and identity information",
                items: [
                  "Name",
                  "Business email address",
                  "Phone number",
                  "Job title",
                  "Company name",
                  "Country or region",
                  "Professional profile information provided by you",
                ],
              },
              {
                title: "Partner and business information",
                items: [
                  "Partner application details",
                  "Organisation type",
                  "Areas of interest",
                  "Use-case interests",
                  "Customer opportunity information shared with us",
                  "Training or enablement interests",
                  "Communication preferences",
                ],
              },
              {
                title: "Website and usage information",
                items: [
                  "IP address",
                  "Browser type",
                  "Device information",
                  "Pages visited",
                  "Referring website",
                  "Approximate location derived from technical data",
                  "Date and time of visit",
                  "Interactions with website pages, forms or resources",
                ],
              },
              {
                title: "Communications information",
                items: [
                  "Messages sent to us",
                  "Meeting notes or follow-up actions",
                  "Email correspondence",
                  "Demo or event registrations",
                  "Support, sales or partner enablement requests",
                ],
              },
              {
                title: "Marketing preferences",
                items: [
                  "Newsletter preferences",
                  "Event registration preferences",
                  "Consent records where applicable",
                  "Opt-in and opt-out choices",
                ],
              },
            ].map((cat) => (
              <Card key={cat.title}>
                <CardHeader>
                  <CardTitle className="text-base">{cat.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                    {cat.items.map((i) => <li key={i}>{i}</li>)}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="mt-6 text-muted-foreground">
            We do not intentionally collect special category personal data through our websites unless you
            choose to provide it or unless it is specifically required and legally appropriate. Please
            avoid submitting sensitive personal data through website forms unless specifically requested.
          </p>
        </section>

        {/* Section 5 */}
        <section className="mb-12">
          <h2 className="mb-4 font-display text-2xl font-bold text-foreground">
            5. How we collect personal data
          </h2>
          <p className="mb-4 text-muted-foreground">Greentic may collect data:</p>
          <ul className="mb-4 list-disc space-y-1 pl-6 text-muted-foreground">
            <li>Directly from you</li>
            <li>Through website forms</li>
            <li>Through email or business communications</li>
            <li>Through event, webinar or demo registrations</li>
            <li>Through partner onboarding conversations</li>
            <li>Through website analytics and cookies</li>
            <li>From publicly available business sources</li>
            <li>From partners, customers, suppliers or referral contacts where appropriate</li>
          </ul>
          <p className="text-muted-foreground">
            If you provide personal data about another person, you should ensure you have the right to do
            so and, where required, that the person has been informed.
          </p>
        </section>

        {/* Section 6 */}
        <section className="mb-12">
          <h2 className="mb-4 font-display text-2xl font-bold text-foreground">
            6. How we use personal data
          </h2>
          <Accordion type="multiple" className="w-full">
            {[
              ["To respond to enquiries", "We use contact information to respond to questions, requests, demo enquiries, partner interest and other business communications."],
              ["To manage business and partner relationships", "We use business and partner information to assess, develop and manage potential or existing customer, partner, supplier or business relationships."],
              ["To provide resources and information", "We may use personal data to provide access to Greentic resources, partner materials, demos, training resources, proof-of-value guidance and related content."],
              ["To arrange demos, meetings and events", "We may use personal data to schedule meetings, provide webinar access, follow up after events and manage attendance."],
              ["To improve our websites and content", "We may use website and usage information to understand how visitors use our websites and improve the content, navigation and user experience."],
              ["To send marketing communications", "We may send relevant updates, event invitations, partner information or marketing communications where permitted by law and in line with your preferences."],
              ["To protect our business, websites and users", "We may use personal data to maintain security, prevent misuse, protect our rights and investigate suspicious or unauthorised activity."],
              ["To comply with legal obligations", "We may process personal data where necessary to comply with applicable laws, regulations, legal processes or enforceable requests."],
            ].map(([title, body], i) => (
              <AccordionItem key={title} value={`use-${i}`}>
                <AccordionTrigger className="text-left">{title}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{body}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* Section 7 */}
        <section className="mb-12">
          <h2 className="mb-4 font-display text-2xl font-bold text-foreground">
            7. Our legal bases for using personal data
          </h2>
          <p className="mb-6 text-muted-foreground">
            Where UK GDPR, EU GDPR or similar laws apply, Greentic relies on one or more legal bases.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              ["Consent", "We may rely on consent where you choose to receive certain marketing communications or where consent is required for cookies or similar technologies."],
              ["Contract or pre-contractual steps", "We may process personal data where necessary to take steps before entering into a contract or to perform a contract with you or your organisation."],
              ["Legitimate interests", "We may process personal data for our legitimate business interests, such as responding to business enquiries, developing partner and customer relationships, improving our websites, promoting relevant services and protecting our business, provided those interests are not overridden by your rights and freedoms."],
              ["Legal obligation", "We may process personal data where necessary to comply with legal or regulatory obligations."],
            ].map(([title, body]) => (
              <Card key={title}>
                <CardHeader>
                  <CardTitle className="text-base">{title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">{body}</CardContent>
              </Card>
            ))}
          </div>
          <p className="mt-6 text-muted-foreground">
            The legal basis used may depend on the context, your location and the specific purpose of
            processing.
          </p>
        </section>

        {/* Section 8 */}
        <section className="mb-12">
          <h2 className="mb-4 font-display text-2xl font-bold text-foreground">
            8. Cookies and analytics
          </h2>
          <p className="mb-4 text-muted-foreground">
            Our websites may use cookies, analytics tools or similar technologies to operate the websites,
            understand usage, improve content and support marketing activities.
          </p>
          <p className="mb-4 text-muted-foreground">
            Where required by law, we will ask for your consent before using non-essential cookies or
            similar technologies.
          </p>
          <p className="text-muted-foreground">
            More information about cookies, analytics providers and your choices should be provided in a
            separate Cookie Notice or cookie settings panel: [Insert Cookie Notice link if applicable].
          </p>
        </section>

        {/* Section 9 */}
        <section className="mb-12">
          <h2 className="mb-4 font-display text-2xl font-bold text-foreground">
            9. When we share personal data
          </h2>
          <p className="mb-4 font-medium text-foreground">We do not sell personal data.</p>
          <p className="mb-4 text-muted-foreground">Data may be shared with:</p>
          <ul className="mb-4 list-disc space-y-1 pl-6 text-muted-foreground">
            <li>Service providers that help operate websites, email, CRM, analytics, events, hosting, communications or security</li>
            <li>Professional advisers such as lawyers, accountants, insurers or auditors</li>
            <li>Technology providers used to support demos, resources, communications or business operations</li>
            <li>Affiliates, contractors, suppliers or partners where necessary for legitimate business purposes</li>
            <li>Authorities, regulators or law enforcement where required by law</li>
            <li>Potential buyers, investors, acquirers or successors in the context of a business transaction</li>
          </ul>
          <p className="text-muted-foreground">
            When we use service providers, we expect them to protect personal data and process it only for
            authorised purposes.
          </p>
        </section>

        {/* Section 10 */}
        <section className="mb-12">
          <h2 className="mb-4 font-display text-2xl font-bold text-foreground">
            10. International transfers
          </h2>
          <p className="text-muted-foreground">
            Personal data may be processed in countries outside your own country, including outside the
            United Kingdom or European Economic Area. Where required by applicable law, we will use
            appropriate safeguards for international transfers, such as adequacy decisions, standard
            contractual clauses or other legally recognised mechanisms.
          </p>
        </section>

        {/* Section 11 */}
        <section className="mb-12">
          <h2 className="mb-4 font-display text-2xl font-bold text-foreground">
            11. How long we keep personal data
          </h2>
          <p className="mb-4 text-muted-foreground">
            We keep personal data only for as long as reasonably necessary for the purposes described in
            this Privacy Notice, unless a longer retention period is required or permitted by law.
          </p>
          <p className="mb-4 text-muted-foreground">
            Retention periods may depend on the type of data, the nature of the relationship, legal
            requirements, business needs, dispute resolution, security requirements and whether you have
            asked us to delete the data.
          </p>
          <p className="text-muted-foreground">
            When personal data is no longer needed, we will delete it, anonymise it or securely retain it
            only where legally appropriate.
          </p>
        </section>

        {/* Section 12 */}
        <section className="mb-12">
          <h2 className="mb-4 font-display text-2xl font-bold text-foreground">
            12. How we protect personal data
          </h2>
          <p className="mb-4 text-muted-foreground">
            We use reasonable technical and organisational measures designed to protect personal data
            against unauthorised access, loss, misuse, alteration or disclosure.
          </p>
          <p className="text-muted-foreground">
            No website, system or transmission method is completely secure. If you believe your
            interaction with us is no longer secure, please contact us.
          </p>
        </section>

        {/* Section 13 */}
        <section className="mb-12">
          <h2 className="mb-4 font-display text-2xl font-bold text-foreground">
            13. Your privacy rights
          </h2>
          <p className="mb-4 text-muted-foreground">
            Depending on your location and applicable law, you may have rights such as:
          </p>
          <ul className="mb-4 list-disc space-y-1 pl-6 text-muted-foreground">
            <li>Right to access personal data</li>
            <li>Right to correct inaccurate data</li>
            <li>Right to delete personal data</li>
            <li>Right to restrict processing</li>
            <li>Right to object to processing</li>
            <li>Right to data portability</li>
            <li>Right to withdraw consent</li>
            <li>Right to complain to a data protection authority</li>
          </ul>
          <p className="mb-4 text-muted-foreground">
            To exercise your rights, please contact us using the details in the “Contact us” section. We
            may need to verify your identity before responding.
          </p>
          <p className="text-muted-foreground">
            If you are in the United Kingdom, you may have the right to complain to the Information
            Commissioner’s Office. If you are in the European Economic Area, you may have the right to
            complain to your local supervisory authority.
          </p>
        </section>

        {/* Section 14 */}
        <section className="mb-12">
          <h2 className="mb-4 font-display text-2xl font-bold text-foreground">
            14. Marketing choices
          </h2>
          <p className="text-muted-foreground">
            You can opt out of marketing communications at any time by using the unsubscribe link in our
            emails or by contacting us. Even if you opt out of marketing, we may still send non-marketing
            communications where necessary, such as messages about an active business relationship, legal
            notices or service-related matters.
          </p>
        </section>

        {/* Section 15 */}
        <section className="mb-12">
          <h2 className="mb-4 font-display text-2xl font-bold text-foreground">
            15. Children’s privacy
          </h2>
          <p className="text-muted-foreground">
            Our websites, resources and business services are intended for business users and are not
            directed at children. We do not knowingly collect personal data from children through our
            websites.
          </p>
        </section>

        {/* Section 16 */}
        <section className="mb-12">
          <h2 className="mb-4 font-display text-2xl font-bold text-foreground">
            16. Third-party websites
          </h2>
          <p className="text-muted-foreground">
            Our websites may contain links to third-party websites, services or resources. We are not
            responsible for the privacy practices, content or security of third-party websites. You should
            review their privacy notices before providing personal data.
          </p>
        </section>

        {/* Section 17 */}
        <section className="mb-12">
          <h2 className="mb-4 font-display text-2xl font-bold text-foreground">
            17. Changes to this Privacy Notice
          </h2>
          <p className="mb-4 text-muted-foreground">
            We may update this Privacy Notice from time to time. When we make changes, we will update the
            “Last updated” date. Significant changes may be highlighted where appropriate.
          </p>
          <p className="text-muted-foreground">Last updated: [Insert date]</p>
        </section>

        {/* Section 18 */}
        <section className="mb-12">
          <h2 className="mb-4 font-display text-2xl font-bold text-foreground">18. Contact us</h2>
          <p className="mb-6 text-muted-foreground">
            If you have questions about this Privacy Notice or how Greentic AI Ltd handles personal data,
            please contact us.
          </p>
          <Card>
            <CardContent className="space-y-2 p-6 text-sm text-muted-foreground">
              <div className="text-foreground font-medium">Greentic AI Ltd</div>
              <div><span className="text-foreground font-medium">Privacy contact email:</span> [Insert privacy contact email]</div>
              <div><span className="text-foreground font-medium">Registered office:</span> [Insert registered office address]</div>
              <div><span className="text-foreground font-medium">Company registration number:</span> [Insert company registration number]</div>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-10" />

        <p className="text-center text-xs italic text-muted-foreground">
          This Privacy Notice is provided for transparency and should be reviewed periodically. Legal
          requirements may vary by jurisdiction and may change over time.
        </p>

        <div className="mt-6 text-center">
          <Link to="/" className="text-sm text-primary hover:underline">
            ← Back to home
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
