import { createFileRoute } from "@tanstack/react-router";
import { Article, OutLink, Steps } from "@/components/site-chrome";
import { PROTOTYPE } from "@/lib/links";

export const Route = createFileRoute("/badges")({
  head: () => ({
    meta: [
      { title: "Course completion badges on Algorand | metaCAMPUS" },
      {
        name: "description",
        content:
          "metaCAMPUS course badges are requested by a student, approved by a university admin, and minted on Algorand.",
      },
    ],
  }),
  component: BadgesPage,
});

function BadgesPage() {
  return (
    <Article
      eyebrow="Course completion"
      title="A badge is a smaller claim than a transcript"
      lede="metaBADGES began as a way to show a competency without mailing the whole file. In the public prototype, a course-completion badge follows a registrar’s pen: the student requests it, a university admin approves it, and only then is it minted."
    >
      <div className="grid gap-12 lg:grid-cols-2">
        <Steps
          items={[
            {
              title: "Student requests",
              body: "The student asks, from a wallet, for a badge tied to a completed course. The request is not itself the credential.",
            },
            {
              title: "University admin approves",
              body: "An authorized admin reviews the request. Approval is a separate act from minting, so the institution still says what is true.",
            },
            {
              title: "Mint on Algorand",
              body: "The badge is minted and shows on the student profile. A super admin admits the university. They do not grade the course.",
            },
          ]}
        />
        <aside className="rounded-card border border-line bg-panel p-6">
          <p className="text-xs tracking-widest text-brass uppercase">Who signs</p>
          <h2 className="mt-3 font-display text-3xl">Student and university admin</h2>
          <p className="mt-4 text-muted">
            The student holds the request. The university admin holds the approval. Issuance follows
            that approval, on Algorand, and the badge is the claim a verifier can check.
          </p>
          <div className="mt-6">
            <OutLink href={PROTOTYPE}>easy-a-hackathon on GitHub</OutLink>
          </div>
        </aside>
      </div>
    </Article>
  );
}
