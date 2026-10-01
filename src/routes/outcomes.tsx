import { createFileRoute } from "@tanstack/react-router";
import { Article, OutLink } from "@/components/site-chrome";
import { ORG, PROTOTYPE } from "@/lib/links";

export const Route = createFileRoute("/outcomes")({
  head: () => ({
    meta: [
      { title: "SLO-level verification, not only course grades | metaCAMPUS" },
      {
        name: "description",
        content:
          "metaCAMPUS aims to verify Student Learning Outcomes, not only a course grade. Outcome-level credentials matter for transfer credit, employers, and micro-credentials.",
      },
    ],
  }),
  component: OutcomesPage,
});

function OutcomesPage() {
  return (
    <Article
      eyebrow="Finer than a grade"
      title="Verify the outcome, not only the letter"
      lede="A course grade says a student finished under a catalog number. A Student Learning Outcome says what they can do. The org describes metaCAMPUS at that granularity. The public prototype still mints course-completion badges."
    >
      <div className="grid gap-6 md:grid-cols-3">
        <section className="rounded-card border border-line p-6">
          <h2 className="font-display text-2xl">Transfer credit</h2>
          <p className="mt-3 text-muted">
            Another campus does not need the whole dossier to decide whether a single outcome
            matches its own. A grade of B is a poor map of that question.
          </p>
        </section>
        <section className="rounded-card border border-line p-6">
          <h2 className="font-display text-2xl">Employers</h2>
          <p className="mt-3 text-muted">
            Hiring asks for a skill, not a semester. An outcome credential can be shown without
            opening every other course on the transcript.
          </p>
        </section>
        <section className="rounded-card border border-line p-6">
          <h2 className="font-display text-2xl">Micro-credentials</h2>
          <p className="mt-3 text-muted">
            A badge that names the outcome can stand alone. It can also stack. The unit of trust
            is the claim, not the institution’s PDF template.
          </p>
        </section>
      </div>
      <p className="mt-8 max-w-2xl text-muted">
        The org’s public description is the source of the SLO theme: verification with granularity
        to individual Student Learning Outcomes. easy-a-hackathon’s badge flow is coarser — course
        name, grade, credits, semester — and should be read as the first mint path, not as a
        finished outcome registry.
      </p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <OutLink href={ORG}>GitHub org</OutLink>
        <OutLink href={PROTOTYPE}>Prototype README</OutLink>
      </div>
    </Article>
  );
}
