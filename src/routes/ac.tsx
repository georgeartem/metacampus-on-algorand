import { createFileRoute } from "@tanstack/react-router";
import { SiteFrame } from "@/components/site-chrome";
import { X402, X402_CHALLENGE, X402_HOST } from "@/lib/links";

export const Route = createFileRoute("/ac")({
  head: () => ({
    meta: [
      { title: "Agentic Credentialing | metaCAMPUS" },
      {
        name: "description",
        content:
          "AC is the agentic credentialing splash for metaCAMPUS. Paid hash checks are stubbed to a Vercel x402 service that can be spun up later. The marketing site does not serve the API.",
      },
    ],
  }),
  component: AcPage,
});

function AcPage() {
  return (
    <SiteFrame>
      <article className="mx-auto max-w-6xl px-5 pt-14 pb-16 md:pt-20 md:pb-24">
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="text-sm font-medium tracking-widest text-brass uppercase">
              AC · Agentic Credentialing
            </p>
            <h1 className="mt-4 max-w-3xl font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
              A paid check for an agent, not another office queue.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-paper">
              metaCAMPUS still anchors only a fingerprint. Agentic Credentialing is the x402 door on
              that fingerprint: an unpaid request gets HTTP 402, a settled MainNet USDC payment gets
              a credential-hash result.
            </p>
            <p className="mt-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1.5 text-sm text-brass">
                <span aria-hidden="true" className="size-2 rounded-full bg-brass" />
                Vercel service stubbed · spin up later
              </span>
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a className="btn btn-brass" href={X402} target="_blank" rel="noreferrer">
                x402 repository
              </a>
              <a className="btn btn-line" href={`${X402_HOST}/health`} target="_blank" rel="noreferrer">
                Planned health stub
              </a>
            </div>
          </div>
          <aside className="rounded-card border border-line bg-panel p-6 lg:col-span-4">
            <p className="text-xs tracking-widest text-muted uppercase">Planned host</p>
            <p className="mt-3 font-mono text-sm break-all text-paper">metacampus-x402-verify.vercel.app</p>
            <p className="mt-3 text-sm text-muted">
              Import-ready in the repo. No Vercel project has been created, so these URLs are stubs,
              not a live verifier.
            </p>
          </aside>
        </div>

        <section className="mt-16" aria-labelledby="adds-heading">
          <h2 id="adds-heading" className="font-display text-3xl">
            What the new repo adds
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <article className="rounded-card border border-line bg-panel p-6">
              <p className="text-xs tracking-widest text-muted uppercase">Route</p>
              <p className="mt-3 font-mono text-sm text-paper">POST /v1/credential/verify</p>
              <p className="mt-3 text-sm text-muted">
                Body takes a credential hash. Optional credential id, issuer id, and transaction
                reference.
              </p>
            </article>
            <article className="rounded-card border border-line bg-panel p-6">
              <p className="text-xs tracking-widest text-muted uppercase">Payment</p>
              <p className="mt-3 text-paper">HTTP 402 until USDC settles.</p>
              <p className="mt-3 text-sm text-muted">
                Algorand MainNet USDC ASA 31566704. Default price 0.01. Facilitator is GoPlausible.
              </p>
            </article>
            <article className="rounded-card border border-line bg-panel p-6">
              <p className="text-xs tracking-widest text-muted uppercase">Boundary</p>
              <p className="mt-3 text-paper">This site is not the API.</p>
              <p className="mt-3 text-sm text-muted">
                The product page stays here. The paid route belongs on Vercel.
              </p>
            </article>
          </div>
        </section>

        <section className="mt-16" aria-labelledby="stubs-heading">
          <h2 id="stubs-heading" className="font-display text-3xl">
            Stubs for the service that is not up
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <article className="rounded-card border border-line bg-panel p-6">
              <p className="text-xs tracking-widest text-muted uppercase">Free health</p>
              <p className="mt-3 font-mono text-sm break-all text-brass">GET {X402_HOST}/health</p>
              <p className="mt-3 text-sm text-muted">
                Expect later: ok, payTo configured, no secrets. Today: host not spun up.
              </p>
            </article>
            <article className="rounded-card border border-line bg-panel p-6">
              <p className="text-xs tracking-widest text-muted uppercase">Unpaid verify</p>
              <p className="mt-3 font-mono text-sm break-all text-brass">
                POST {X402_HOST}/v1/credential/verify
              </p>
              <p className="mt-3 text-sm text-muted">
                Expect later: 402, scheme exact, extra.tag x402-global-challenge, payTo the public
                merchant address.
              </p>
            </article>
            <article className="rounded-card border border-line bg-panel p-6">
              <p className="text-xs tracking-widest text-muted uppercase">Paid result</p>
              <p className="mt-3 text-paper">valid, hash, anchoredHash, txId, network, verifiedAt.</p>
              <p className="mt-3 text-sm text-muted">
                The repo still returns a scaffold result after payment. A real registry lookup is
                not wired.
              </p>
            </article>
            <article className="rounded-card border border-line bg-panel p-6">
              <p className="text-xs tracking-widest text-muted uppercase">Still human</p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted">
                <li>Create the Vercel project and set production env.</li>
                <li>One real MainNet settle through GoPlausible.</li>
                <li>Bazaar listing after that first settle.</li>
              </ul>
            </article>
          </div>
        </section>

        <p className="mt-12 max-w-2xl text-sm text-muted">
          AC splash for this build. Service content follows{" "}
          <a className="text-paper hover:text-brass" href={X402} target="_blank" rel="noreferrer">
            metacampus-org/metacampus-x402-verify
          </a>
          . Challenge:{" "}
          <a className="text-paper hover:text-brass" href={X402_CHALLENGE} target="_blank" rel="noreferrer">
            Algorand Global x402
          </a>
          .
        </p>
      </article>
    </SiteFrame>
  );
}
