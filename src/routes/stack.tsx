import { createFileRoute } from "@tanstack/react-router";
import { Article, OutLink } from "@/components/site-chrome";
import { PROTOTYPE } from "@/lib/links";

export const Route = createFileRoute("/stack")({
  head: () => ({
    meta: [
      { title: "Developer stack — Next.js, PyTeal, AlgoSDK, Pera | metaCAMPUS" },
      {
        name: "description",
        content:
          "metaCAMPUS prototype stack: Next.js 15.2.4, TypeScript, Tailwind, shadcn/ui, AlgoSDK v3, PyTeal on the Algorand AVM, Pera Wallet, TestNet now, MainNet later, IPFS planned.",
      },
    ],
  }),
  component: StackPage,
});

const layers = [
  { name: "Pera Wallet", note: "Students and admins sign. TestNet transactions are free." },
  { name: "Next.js 15.2.4", note: "TypeScript, Tailwind, shadcn/ui, React context. App Router." },
  { name: "AlgoSDK v3", note: "The browser talks to Algod and the indexer. No custom chain." },
  { name: "PyTeal / AVM", note: "One contract for roles. One for badge issuance." },
  { name: "The file", note: "localStorage in development. Blockchain plus IPFS is the planned production store." },
];

function StackPage() {
  return (
    <Article
      eyebrow="For builders"
      title="The prototype is a registrar’s desk on a public chain"
      lede="easy-a-hackathon is the reference build: a Next.js app, two PyTeal applications, and a wallet. TestNet is where it was published. MainNet is a configuration path, not a network this README claims to have launched."
    >
      <div className="max-w-3xl" aria-label="Architecture from wallet to file">
        <ol>
          {layers.map((layer, index) => (
            <li key={layer.name} className="grid grid-cols-[auto_1fr] gap-4">
              <div className="flex flex-col items-center">
                <span className="grid size-8 place-items-center rounded-full border border-brass font-display text-sm text-brass">
                  {index + 1}
                </span>
                {index < layers.length - 1 ? <span aria-hidden="true" className="w-px flex-1 bg-brass" /> : null}
              </div>
              <div className={index < layers.length - 1 ? "pb-6" : ""}>
                <h2 className="font-display text-2xl">{layer.name}</h2>
                <p className="mt-1 text-muted">{layer.note}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
      <p className="mt-10 max-w-2xl text-muted">
        Roles in the auth contract are student 0, university admin 1, and super admin 2. Transcript
        and badge services live beside an Algorand client in the repo’s lib directory. Clone that
        tree rather than this explainer if you want the contracts.
      </p>
      <div className="mt-6">
        <OutLink href={PROTOTYPE}>easy-a-hackathon</OutLink>
      </div>
    </Article>
  );
}
