import { createFileRoute } from "@tanstack/react-router";
import { Article, OutLink } from "@/components/site-chrome";
import { DAO, PROTOTYPE, SITE } from "@/lib/links";

export const Route = createFileRoute("/story")({
  head: () => ({
    meta: [
      { title: "From the EasyA prototype toward EQ2 | metaCAMPUS" },
      {
        name: "description",
        content:
          "The easy-a-hackathon credential MVP, the EQ2 DAO repository, and the road toward MOOA.",
      },
    ],
  }),
  component: StoryPage,
});

function StoryPage() {
  return (
    <Article
      eyebrow="The public record"
      title="An MVP with a name, then a longer ambition"
      lede="The credential prototype is published as easy-a-hackathon. EQ2 DAO and MOOA are the names of the work that follows it."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <section className="rounded-card border border-line bg-panel p-6">
          <h2 className="font-display text-2xl">What the hackathon repo is</h2>
          <p className="mt-3 text-muted">
            easy-a-hackathon is the credential MVP: transcripts and course-completion badges on
            Algorand, with a student, a university admin, a super admin, Pera Wallet, and PyTeal.
          </p>
          <div className="mt-6">
            <OutLink href={PROTOTYPE}>easy-a-hackathon</OutLink>
          </div>
        </section>
        <section className="rounded-card border border-line bg-panel p-6">
          <h2 className="font-display text-2xl">What EQ2 DAO currently is</h2>
          <p className="mt-3 text-muted">
            metacampus-dao is titled metaCAMPUS EQ2 DAO. Its README is a geometric note — a fifth
            axis of thought, a transcendence constant — not a deployed governance contract, a
            token, or a voting app. A MOOA directory is in the tree. The repository does not
            describe that directory.
          </p>
          <div className="mt-6">
            <OutLink href={DAO}>metacampus-dao</OutLink>
          </div>
        </section>
      </div>
      <p className="mt-8 max-w-2xl text-muted">
        Read the two together as a direction, not a launched administration. The operational
        sketch of MOOA lives in demo-repository. metaCAMPUS.org, today, is still a contact form.
      </p>
      <p className="mt-4">
        <a className="text-sm hover:text-brass" href={SITE} target="_blank" rel="noreferrer">
          metaCAMPUS.org
        </a>
      </p>
    </Article>
  );
}
