import { createFileRoute } from "@tanstack/react-router";
import { LedgerCheck } from "@/components/ledger-check";
import { Article, OutLink } from "@/components/site-chrome";
import { ORG, SITE } from "@/lib/links";

export const Route = createFileRoute("/check")({
  head: () => ({
    meta: [
      { title: "Verify a transcript hash on Algorand | metaCAMPUS" },
      {
        name: "description",
        content:
          "Employers and other institutions can paste a metaCAMPUS transcript hash and check it against Algorand without calling the registrar.",
      },
    ],
  }),
  component: CheckPage,
});

function CheckPage() {
  return (
    <Article
      eyebrow="For employers and other institutions"
      title="Check the hash. Don’t call the registrar."
      lede="If a student has already shared the file and the fingerprint, the question is whether they still match what was anchored. That question belongs to the ledger, not to a phone queue in another time zone."
    >
      <LedgerCheck />
      <p className="mt-8 max-w-2xl text-sm text-muted">
        A hit means a transaction note starts with the value you pasted. It does not grade the
        student, and it does not replace the institution that attested the record. A miss means this
        lookup did not find the note.
      </p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <OutLink href={ORG}>GitHub org</OutLink>
        <OutLink href={SITE}>metaCAMPUS.org</OutLink>
      </div>
    </Article>
  );
}
