import { createFileRoute } from "@tanstack/react-router";
import { Article, OutLink } from "@/components/site-chrome";
import { MAIL, ORG } from "@/lib/links";

export const Route = createFileRoute("/registrars")({
  head: () => ({
    meta: [
      { title: "For registrars — cryptographic transcript checks | metaCAMPUS" },
      {
        name: "description",
        content:
          "A note for university registrars: replace weeks of paper and PDF transcript handling with a cryptographic check on Algorand, and spend less on third-party verification fees.",
      },
    ],
  }),
  component: RegistrarsPage,
});

function RegistrarsPage() {
  return (
    <Article
      eyebrow="For registrars"
      title="Stop paying a second office to say the file is yours"
      lede="The expensive part of a transcript is rarely the printing. It is the labor of proving, again, a record your office already attested — and the fraud that moves faster than that proof."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <section className="rounded-card border border-line bg-panel p-6">
          <h2 className="font-display text-2xl">Paper and PDF</h2>
          <ul className="mt-4 space-y-3 text-muted">
            <li>A hold, a queue, and a certified copy that takes days or weeks.</li>
            <li>A PDF that can be edited while the official copy is still in transit.</li>
            <li>A per-record fee to an ordering desk or a verification bureau for a question your seal was supposed to settle.</li>
          </ul>
        </section>
        <section className="rounded-card border border-brass bg-ink p-6">
          <h2 className="font-display text-2xl">A cryptographic check</h2>
          <ul className="mt-4 space-y-3 text-muted">
            <li>Your office still attests. The chain stores the fingerprint of what you attested.</li>
            <li>A later campus or employer compares the file to that fingerprint. It matches, or it does not.</li>
            <li>Third-party verification fees shrink when the integrity check no longer requires a middle desk.</li>
          </ul>
        </section>
      </div>
      <p className="mt-8 max-w-2xl text-muted">
        This is an invitation to look at the public work, not a customer list. There are no logos
        here because none have been earned on this page.
      </p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <a className="btn btn-brass" href={MAIL}>
          info@metacampus.org
        </a>
        <OutLink href={ORG}>GitHub org</OutLink>
      </div>
    </Article>
  );
}
