import { createFileRoute } from "@tanstack/react-router";
import { Article, OutLink } from "@/components/site-chrome";
import { DAO, DEMO, SITE } from "@/lib/links";

export const Route = createFileRoute("/mooa")({
  head: () => ({
    meta: [
      { title: "MOOA — Massively Open Online Administration | metaCAMPUS" },
      {
        name: "description",
        content:
          "MOOA is the multi-tenant administration layer metaCAMPUS describes around decentralized transcripts. The public notes say the work is ahead of a launch. metaCAMPUS.org is still a contact form.",
      },
    ],
  }),
  component: MooaPage,
});

const services = [
  "EQ2 smart-contract application",
  "EQ2 derivative tokenomics application",
  "Key management (Intermezzo)",
  "Pawn server — Algorand API (Intermezzo)",
  "Authentication service",
];

function MooaPage() {
  return (
    <Article
      eyebrow="For higher-ed IT"
      title="MOOA is the administration, not the transcript"
      lede="Massively Open Online Administration is the layer that would let more than one institution run decentralized transcripts without each standing up a private bunker. The public writing calls it a platform going to market. It also says there is a lot of work to do."
    >
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl">What demo-repository actually describes</h2>
          <p className="mt-4 text-muted">
            The README is an internal go-to-market note for the MOOA platform, “as determined by
            the metaCAMPUS DAO.” For demonstration it simulates a multi-tenant architecture: one
            pipeline, repurposed into dedicated environments per client. The intended services,
            talking REST inside one container cluster, are:
          </p>
          <ul className="mt-4 space-y-2 text-paper">
            {services.map((service) => (
              <li key={service} className="border-t border-line py-3">
                {service}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-muted">
            Institutional EQ2 governance, in that note, assumes an in-spec Algod node. The open-source
            intent is an alpha for Algorand TestNet pilot customers, then a later main-net step. None
            of that is a running console on this website.
          </p>
        </div>
        <aside className="rounded-card border border-brass bg-panel p-6">
          <p className="text-xs tracking-widest text-brass uppercase">Launching soon</p>
          <h2 className="mt-3 font-display text-3xl">The public site is still a placeholder</h2>
          <p className="mt-4 text-muted">
            metaCAMPUS.org presents a contact form, not an administration product. metacampus-dao
            holds the EQ2 name and a MOOA directory; it does not ship the multi-tenant layer. Read
            the demo repository as a sketch and a status, including the sentence that there is a lot
            of work left.
          </p>
          <div className="mt-6 flex flex-col items-start gap-3">
            <OutLink href={DEMO}>demo-repository</OutLink>
            <OutLink href={DAO}>metacampus-dao</OutLink>
            <a className="text-sm hover:text-brass" href={SITE} target="_blank" rel="noreferrer">
              metaCAMPUS.org
            </a>
          </div>
        </aside>
      </div>
    </Article>
  );
}
