import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Github } from "lucide-react";
import type { ReactNode } from "react";
import { BLOG, MAIL, ORG, SITE } from "@/lib/links";

const pages = [
  { to: "/", label: "Home" },
  { to: "/hash", label: "Hash" },
  { to: "/badges", label: "Badges" },
  { to: "/outcomes", label: "Outcomes" },
  { to: "/registrars", label: "Registrars" },
  { to: "/check", label: "Check" },
  { to: "/stack", label: "Stack" },
  { to: "/story", label: "Story" },
  { to: "/mooa", label: "MOOA" },
  { to: "/ac", label: "AC" },
] as const;

const linkClass = "inline-flex min-h-11 items-center text-muted hover:text-paper";

function NavLinks({ stacked = false }: { stacked?: boolean }) {
  return (
    <>
      {pages.map((page) => (
        <Link
          key={page.to}
          to={page.to}
          className={stacked ? `${linkClass} justify-between` : linkClass}
          activeOptions={{ exact: true }}
          activeProps={{ className: stacked ? "inline-flex min-h-11 items-center justify-between text-paper" : "inline-flex min-h-11 items-center text-paper" }}
        >
          {page.label}
        </Link>
      ))}
    </>
  );
}

export function SiteFrame({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-ink text-paper">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-brass focus:px-4 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <header className="sticky top-0 z-40 border-b border-line/80 bg-ink/95 backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex items-center justify-between gap-4 py-3">
            <Link to="/" className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="grid size-9 shrink-0 place-items-center rounded-md border border-brass font-display text-lg leading-none text-brass"
              >
                mC
              </span>
              <span className="font-display text-xl tracking-tight">metaCAMPUS</span>
            </Link>
            <a className="btn btn-brass text-sm" href={ORG} target="_blank" rel="noreferrer">
              <Github className="size-4" aria-hidden="true" />
              GitHub
            </a>
          </div>
          <nav aria-label="Pages" className="hidden flex-wrap gap-x-5 border-t border-line md:flex">
            <NavLinks />
          </nav>
          <details className="border-t border-line py-3 md:hidden">
            <summary className="btn btn-line w-full">Pages</summary>
            <nav aria-label="Pages" className="mt-2 flex flex-col">
              <NavLinks stacked />
            </nav>
          </details>
        </div>
      </header>
      <main id="main">{children}</main>
      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-10">
          <nav aria-label="All pages" className="flex flex-wrap gap-x-5 gap-y-1">
            <NavLinks />
          </nav>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-display text-xl">metaCAMPUS</p>
              <p className="mt-2 max-w-xl text-sm text-muted">
                Decentralized transcripting on Algorand. Hashes illustrate integrity. They are not a
                FERPA certification, a legal opinion, or a promise that every repository is
                production-ready.
              </p>
            </div>
            <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
              <li>
                <a className="hover:text-brass" href={ORG} target="_blank" rel="noreferrer">
                  GitHub org
                </a>
              </li>
              <li>
                <a className="hover:text-brass" href={SITE} target="_blank" rel="noreferrer">
                  metaCAMPUS.org
                </a>
              </li>
              <li>
                <a className="hover:text-brass" href={BLOG} target="_blank" rel="noreferrer">
                  Blog
                </a>
              </li>
              <li>
                <a className="hover:text-brass" href={MAIL}>
                  info@metacampus.org
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export function Article({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow: string;
  title: string;
  lede: string;
  children: ReactNode;
}) {
  return (
    <SiteFrame>
      <article className="mx-auto max-w-6xl px-5 pt-14 pb-16 md:pt-20 md:pb-24">
        <p className="text-sm font-medium tracking-widest text-brass uppercase">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl leading-tight sm:text-5xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg text-muted">{lede}</p>
        <div className="mt-12">{children}</div>
      </article>
    </SiteFrame>
  );
}

export function Steps({ items }: { items: { title: string; body: string }[] }) {
  return (
    <ol>
      {items.map((step, index) => (
        <li key={step.title} className="relative grid grid-cols-[2.5rem_1fr] gap-4 pb-8 last:pb-0">
          {index < items.length - 1 ? (
            <span aria-hidden="true" className="absolute top-8 left-4 h-[calc(100%-1rem)] w-px bg-line" />
          ) : null}
          <span className="relative z-10 grid size-8 place-items-center rounded-full border border-brass bg-ink font-display text-brass">
            {index + 1}
          </span>
          <div>
            <h2 className="font-display text-2xl">{step.title}</h2>
            <p className="mt-2 text-muted">{step.body}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function OutLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a className="btn btn-brass" href={href} target="_blank" rel="noreferrer">
      {children}
      <ArrowUpRight className="size-4" aria-hidden="true" />
    </a>
  );
}
