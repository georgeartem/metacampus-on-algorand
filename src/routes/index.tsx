import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowUpRight,
  Award,
  Clock,
  FileWarning,
  Fingerprint,
  Github,
  Globe,
  KeyRound,
  Receipt,
  ShieldCheck,
} from "lucide-react";
import { SiteFrame } from "@/components/site-chrome";
import { BLOG, ORG as GITHUB, PROTOTYPE, SITE } from "@/lib/links";

export const Route = createFileRoute("/")({ component: Home });

const samples = [
  {
    id: "grade",
    label: "Grade line",
    text: "COMP-318 · Distributed Ledgers · A− · Spring 2026 · SLO: explain finality without publishing a classmate’s record",
  },
  {
    id: "badge",
    label: "Badge request",
    text: "Badge request · Research Methods II · outcome met · term 2025F · institution attestation pending",
  },
  {
    id: "identity",
    label: "Withheld identity",
    text: "Student reference: [withheld] · program: M.Ed. · catalog year: 2024 · campus file stays off-chain",
  },
] as const;

function Home() {
  return (
    <SiteFrame>
      <Hero />
      <Weeks />
      <Principles />
      <Path />
      <Desk />
      <OpenWork />
      <Reading />
    </SiteFrame>
  );
}

function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl items-end gap-12 px-5 pt-14 pb-16 md:grid-cols-12 md:pt-20 md:pb-24">
      <div className="md:col-span-7">
        <p className="rise text-sm font-medium tracking-widest text-brass uppercase">
          Academic records · public chain
        </p>
        <h1 className="rise rise-2 mt-4 font-display text-4xl leading-tight text-paper sm:text-5xl lg:text-6xl">
          Decentralized Transcripting on Algorand
        </h1>
        <p className="rise rise-3 mt-6 max-w-xl text-lg text-muted">
          Paper transcripts still move at the speed of an office. A seal can be copied. A PDF can be
          edited. And the student who did the work usually cannot produce the record without asking
          the institution that filed it.
        </p>
        <p className="rise rise-3 mt-4 max-w-xl text-lg text-paper">
          metaCAMPUS keeps the education file with the student and writes only a cryptographic
          fingerprint to Algorand. Registrars still attest. Anyone can check that the fingerprint
          still matches — in seconds, without a fax or a fee that looks like tuition.
        </p>
        <div className="rise rise-4 mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a className="btn btn-brass" href={GITHUB} target="_blank" rel="noreferrer">
            <Github className="size-4" aria-hidden="true" />
            Explore the GitHub org
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
          <a className="btn btn-line" href={SITE} target="_blank" rel="noreferrer">
            metaCAMPUS.org
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
          <a className="btn btn-line" href={BLOG} target="_blank" rel="noreferrer">
            The blog
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </div>
        <nav aria-label="On this page" className="rise rise-4 mt-4 flex flex-wrap gap-x-5 text-sm text-muted">
          <a className="inline-flex min-h-11 items-center hover:text-paper" href="#weeks">
            Weeks
          </a>
          <a className="inline-flex min-h-11 items-center hover:text-paper" href="#record">
            Record
          </a>
          <a className="inline-flex min-h-11 items-center hover:text-paper" href="#ledger">
            Ledger
          </a>
          <a className="inline-flex min-h-11 items-center hover:text-paper" href="#verify">
            Verify
          </a>
          <a className="inline-flex min-h-11 items-center hover:text-paper" href="#badges">
            Badges
          </a>
          <a className="inline-flex min-h-11 items-center hover:text-paper" href="#desk">
            Desk
          </a>
        </nav>
      </div>
      <RecordCard />
    </section>
  );
}

function RecordCard() {
  return (
    <aside className="rise rise-4 md:col-span-5" aria-label="What a public ledger is allowed to see">
      <div className="rounded-card border border-line bg-panel p-6">
        <div className="flex items-baseline justify-between gap-4 border-b border-line pb-4">
          <p className="font-display text-lg">Record excerpt</p>
          <p className="text-xs tracking-widest text-brass uppercase">Redacted</p>
        </div>
        <dl className="mt-5 space-y-4 text-sm">
          <Row term="Student" detail="withheld · held off-chain" />
          <Row term="Institution" detail="withheld · registrar’s file" />
          <Row term="Assertion" detail="Inference II · outcome met" />
          <Row term="On-chain note" detail="SHA-256 fingerprint only" mono />
          <Row term="Status" detail="anchored · Algorand" />
        </dl>
        <p className="mt-6 border-t border-line pt-4 text-sm text-muted">
          The chain can prove a statement was not altered. It does not need the statement, the name,
          or the file.
        </p>
      </div>
    </aside>
  );
}

function Row({ term, detail, mono = false }: { term: string; detail: string; mono?: boolean }) {
  return (
    <div className="grid grid-cols-3 gap-3">
      <dt className="text-muted">{term}</dt>
      <dd className={mono ? "col-span-2 tracking-wide text-paper" : "col-span-2 text-paper"}>{detail}</dd>
    </div>
  );
}

const principles = [
  {
    id: "record",
    index: "01",
    icon: KeyRound,
    title: "Student-owned records",
    body: "Ownership is not a slogan on a portal. The student keeps the education file and the means to present it — a wallet, not a password issued by last semester’s student-information system. Institutions onboard and attest. They do not remain the only door.",
  },
  {
    id: "ledger",
    index: "02",
    icon: Fingerprint,
    title: "Hashes on-chain. Names off-chain.",
    body: "Algorand should never become a second student-information system. What belongs on the public ledger is a digest: proof that a particular statement existed, in a particular form, at a particular time. Names, birth dates, addresses, and the narrative of a course stay off-chain.",
  },
  {
    id: "verify",
    index: "03",
    icon: Globe,
    title: "Instant global verification",
    body: "A verifier in another country should not wait on business hours, a wet signature, or a fee schedule. They compare the document the student chose to share with the fingerprint already anchored. It matches, or it does not. Finality is a few seconds, not a term.",
  },
  {
    id: "badges",
    index: "04",
    icon: Award,
    title: "Course badges",
    body: "A full transcript is a dossier. Sometimes the claim is smaller: this course, this outcome, this term. The student requests the badge; an authorized registrar mints it. metaBADGES began as competency tokens you could show without mailing an entire file. Course badges give that idea an approval step and an Algorand issuance path.",
  },
] as const;

const frictions = [
  {
    icon: Receipt,
    title: "The cost is staff time",
    body: "An official copy is labor. Someone confirms identity, clears a hold, pulls the academic history, certifies it, and answers the message that asks where it went. That work is real. It does not scale to every graduate school, employer, and licensing board that asks the same question.",
  },
  {
    icon: FileWarning,
    title: "Fraud fills the gap",
    body: "The certified channel is slow, so unofficial files travel faster. A PDF can be edited. A seal can be copied. The office that needs the record either waits or accepts a document it cannot prove. A chain does not stop a registrar from attesting something false. It does stop a silent edit after the attestation.",
  },
  {
    icon: Clock,
    title: "A third desk in the middle",
    body: "Ordering portals such as Parchment, enrollment checks through the National Student Clearinghouse, and international evaluations from World Education Services each do a real job. They also add another login, another fee, and another queue. The student holds a tracking number, not the record.",
  },
] as const;

function Weeks() {
  return (
    <section id="weeks" className="border-t border-line bg-panel" aria-labelledby="weeks-heading">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-12 md:py-24">
        <div className="md:col-span-7">
          <p className="text-sm font-medium tracking-widest text-brass uppercase">
            For registrars and students
          </p>
          <h2 id="weeks-heading" className="mt-3 font-display text-3xl text-paper sm:text-4xl">
            Why transfers still take weeks
          </h2>
          <p className="mt-4 text-lg text-muted">
            A registrar does not lose a week because the record is hard to read. The week is the
            queue: a request, a hold, a vendor, a second institution, and a fee schedule between a
            student and a yes or no.
          </p>
          <ul className="mt-10 space-y-8">
            {frictions.map((item) => (
              <li key={item.title} className="grid grid-cols-[2.5rem_1fr] gap-4">
                <span className="grid size-10 place-items-center rounded-full border border-line text-brass">
                  <item.icon className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display text-xl">{item.title}</h3>
                  <p className="mt-2 text-muted">{item.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <aside className="md:col-span-5">
          <div className="rounded-card border border-brass bg-ink p-6 md:sticky md:top-24">
            <p className="text-xs tracking-widest text-brass uppercase">The same question, on Algorand</p>
            <h3 className="mt-3 font-display text-3xl">Under five seconds</h3>
            <p className="mt-4 text-muted">
              The student presents the file they already hold. Whoever needs it — another campus, an
              employer, a licensing board — checks that file against the fingerprint on Algorand.
              Finality on the network is under five seconds. A write costs a fraction of a cent, not
              a transcript fee. It matches, or it does not.
            </p>
            <dl className="mt-6 space-y-4 border-t border-line pt-6 text-sm">
              <div className="flex items-baseline justify-between gap-4">
                <dt className="text-muted">Official transfer</dt>
                <dd className="text-right">days to weeks</dd>
              </div>
              <div className="flex items-baseline justify-between gap-4">
                <dt className="text-muted">Anchored check</dt>
                <dd className="text-right text-brass">under 5 seconds</dd>
              </div>
              <div className="flex items-baseline justify-between gap-4">
                <dt className="text-muted">Ledger fee</dt>
                <dd className="text-right">a fraction of a cent</dd>
              </div>
            </dl>
            <a className="btn btn-brass mt-6 w-full" href={PROTOTYPE} target="_blank" rel="noreferrer">
              <Github className="size-4" aria-hidden="true" />
              Prototype on GitHub
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
            <p className="mt-4 text-sm text-muted">
              Registrars still attest. Parchment, the Clearinghouse, and WES are not the villain of
              this page. metaCAMPUS takes the wait out of the integrity check. The reference build
              is easy-a-hackathon.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}

function Principles() {
  return (
    <section className="border-t border-line" aria-labelledby="principles-heading">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-medium tracking-widest text-brass uppercase">The cut</p>
          <h2 id="principles-heading" className="mt-3 font-display text-3xl text-paper sm:text-4xl">
            A public chain that refuses to hold the file
          </h2>
          <p className="mt-4 text-lg text-muted">
            The Family Educational Rights and Privacy Act is wary of education records escaping into
            the open. A hash is not the record. It cannot be reversed into a transcript. It can only
            confirm one. That split is FERPA-minded design — not a certification, and not a legal
            opinion.
          </p>
        </div>
        <div className="mt-12 grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2">
          {principles.map((item) => (
            <article key={item.id} id={item.id} className="bg-ink p-6 sm:p-8">
              <div className="flex items-center justify-between">
                <item.icon className="size-5 text-brass" aria-hidden="true" />
                <span className="font-display text-2xl text-brass">{item.index}</span>
              </div>
              <h3 className="mt-6 font-display text-2xl text-paper">{item.title}</h3>
              <p className="mt-3 text-muted">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  {
    n: "1",
    title: "Anchor a student hash",
    body: "A registrar creates a blockchain identifier. The person it points to stays unnamed on-chain.",
  },
  {
    n: "2",
    title: "Keep coursework off the ledger",
    body: "Grades and learning outcomes live with the student or the institution. A fingerprint can be committed when someone attests.",
  },
  {
    n: "3",
    title: "Request the badge",
    body: "The student asks, from their own wallet, for a discrete claim: one course, one outcome, one term.",
  },
  {
    n: "4",
    title: "Approve, then mint",
    body: "An authorized approver signs. Issuance is a separate act from the request — the institution still says what is true.",
  },
  {
    n: "5",
    title: "Let a stranger check",
    body: "A third party verifies the fingerprint. The underlying file appears only if the student chooses to show it.",
  },
];

function Path() {
  return (
    <section className="border-t border-line bg-panel" aria-labelledby="path-heading">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="text-sm font-medium tracking-widest text-brass uppercase">The path</p>
            <h2 id="path-heading" className="mt-3 font-display text-3xl sm:text-4xl">
              Five moves, none of them a fax
            </h2>
            <p className="mt-4 text-muted">
              Roles stay distinct: student, university admin, and a super admin who admits
              institutions. The reference contracts separate authentication from badge management, so
              approval is not the same keystroke as issuance.
            </p>
            <p className="mt-4 text-muted">
              Algorand is the ledger because outsiders can audit it, settlement takes seconds, and the
              fee does not impersonate tuition. A private chain would only hide the fingerprint again.
            </p>
          </div>
          <ol className="md:col-span-8">
            {steps.map((step, i) => (
              <li key={step.n} className="relative grid grid-cols-[2.5rem_1fr] gap-4 pb-8 last:pb-0">
                {i < steps.length - 1 ? (
                  <span aria-hidden="true" className="absolute top-8 left-4 h-[calc(100%-1rem)] w-px bg-line" />
                ) : null}
                <span className="relative z-10 grid size-8 place-items-center rounded-full border border-brass bg-panel font-display text-brass">
                  {step.n}
                </span>
                <div>
                  <h3 className="font-display text-xl">{step.title}</h3>
                  <p className="mt-1 text-muted">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

async function sha256(text: string) {
  const data = new TextEncoder().encode(text);
  const buf = await crypto.subtle.digest("SHA-256", data);
  return [...new Uint8Array(buf)].map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

function Desk() {
  const [text, setText] = useState<string>(samples[0].text);
  const [digest, setDigest] = useState("");
  const [probe, setProbe] = useState("");
  const [busy, setBusy] = useState(false);
  const [verdict, setVerdict] = useState<"idle" | "match" | "miss" | "empty">("idle");
  const [copied, setCopied] = useState(false);

  async function fingerprint() {
    const line = text.trim();
    if (!line) {
      setDigest("");
      setVerdict("empty");
      return;
    }
    setBusy(true);
    try {
      const next = await sha256(line);
      setDigest(next);
      setVerdict("idle");
      setCopied(false);
    } finally {
      setBusy(false);
    }
  }

  async function check() {
    const line = text.trim();
    const claimed = probe.trim().toLowerCase().replace(/\s+/g, "");
    if (!line || !claimed) {
      setVerdict("empty");
      return;
    }
    setBusy(true);
    try {
      const next = await sha256(line);
      setDigest(next);
      setVerdict(next === claimed ? "match" : "miss");
    } finally {
      setBusy(false);
    }
  }

  async function copyDigest() {
    if (!digest) return;
    try {
      await navigator.clipboard.writeText(digest);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section id="desk" className="border-t border-line" aria-labelledby="desk-heading">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-medium tracking-widest text-brass uppercase">The desk</p>
          <h2 id="desk-heading" className="mt-3 font-display text-3xl sm:text-4xl">
            Fingerprint a line you would not publish
          </h2>
          <p className="mt-4 text-lg text-muted">
            Nothing on this page talks to Algorand. The desk runs in your browser. Write a sentence
            you would never put on a public ledger, then take its SHA-256 digest. That digest — not
            the sentence — is the kind of thing metaCAMPUS is willing to anchor.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-card border border-line bg-panel p-6">
            <label htmlFor="record-line" className="text-sm font-medium text-paper">
              Off-chain line
            </label>
            <textarea
              id="record-line"
              value={text}
              suppressHydrationWarning
              onChange={(event) => {
                setText(event.target.value);
                setVerdict("idle");
                setCopied(false);
              }}
              rows={5}
              className="mt-3 w-full resize-y rounded-xl border border-line bg-ink px-4 py-3 text-paper placeholder:text-muted"
              placeholder="A grade, a name, an address — anything that should stay off the chain"
            />
            <div className="mt-3 flex flex-wrap gap-2">
              {samples.map((sample) => (
                <button
                  key={sample.id}
                  type="button"
                  className="btn btn-line min-h-11 px-3 text-sm"
                  onClick={() => {
                    setText(sample.text);
                    setVerdict("idle");
                    setCopied(false);
                  }}
                >
                  {sample.label}
                </button>
              ))}
            </div>
            <button type="button" className="btn btn-brass mt-5" onClick={fingerprint} disabled={busy}>
              <Fingerprint className="size-4" aria-hidden="true" />
              {busy ? "Hashing…" : "Take the fingerprint"}
            </button>
            <div className="mt-5 min-h-24 rounded-xl border border-line bg-ink p-4" aria-live="polite">
              {digest ? (
                <>
                  <p className="text-xs tracking-widest text-brass uppercase">Digest · not the record</p>
                  <p className="mt-2 break-all text-sm tracking-wide text-paper">{digest}</p>
                  <button type="button" className="btn btn-line mt-3 min-h-11 px-3 text-sm" onClick={copyDigest}>
                    {copied ? "Copied" : "Copy fingerprint"}
                  </button>
                </>
              ) : (
                <p className="text-sm text-muted">
                  The digest appears here. Change one character in the line and the fingerprint will
                  not survive the edit.
                </p>
              )}
            </div>
          </div>

          <div className="rounded-card border border-line bg-panel p-6">
            <div className="flex items-center gap-2">
              <ShieldCheck className="size-5 text-brass" aria-hidden="true" />
              <h3 className="font-display text-2xl">Check a claimed fingerprint</h3>
            </div>
            <p className="mt-3 text-muted">
              Paste a digest and compare it with the line on the left. Edit the line after you copy
              the hash — a verifier should fail closed when the file and the anchor disagree.
            </p>
            <label htmlFor="probe" className="mt-6 block text-sm font-medium">
              Claimed fingerprint
            </label>
            <textarea
              id="probe"
              value={probe}
              suppressHydrationWarning
              onChange={(event) => {
                setProbe(event.target.value);
                setVerdict("idle");
              }}
              rows={4}
              spellCheck={false}
              className="mt-3 w-full resize-y rounded-xl border border-line bg-ink px-4 py-3 tracking-wide text-paper"
              placeholder="Paste a SHA-256 hex digest"
            />
            <div className="mt-4 flex flex-wrap gap-2">
              <button type="button" className="btn btn-brass" onClick={check} disabled={busy}>
                Check against the line
              </button>
              <button
                type="button"
                className="btn btn-line"
                disabled={!digest}
                onClick={() => {
                  setProbe(digest);
                  setVerdict("idle");
                }}
              >
                Use last fingerprint
              </button>
            </div>
            <p className="mt-5 min-h-12 text-sm" aria-live="polite">
              {verdict === "match" ? (
                <span className="text-brass-hot">Match. The line and the fingerprint agree.</span>
              ) : null}
              {verdict === "miss" ? (
                <span className="text-paper">No match. The line was altered, or the digest belongs to something else.</span>
              ) : null}
              {verdict === "empty" ? (
                <span className="text-muted">Add both a line and a fingerprint before checking.</span>
              ) : null}
              {verdict === "idle" ? (
                <span className="text-muted">Waiting on a comparison. This check never leaves the browser.</span>
              ) : null}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const doors = [
  {
    href: GITHUB,
    kicker: "Mechanism",
    title: "GitHub · metacampus-org",
    body: "The transcripting prototype — student, university admin, and super admin, with Pera Wallet and PyTeal contracts on Algorand TestNet — plus the EQ2 DAO notes and the intermezzo governance layer.",
  },
  {
    href: SITE,
    kicker: "Institution",
    title: "metaCAMPUS.org",
    body: "The public front door. Reach the people behind the work, rather than inferring the project only from a repository tree.",
  },
  {
    href: BLOG,
    kicker: "Argument",
    title: "The metaCAMPUS blog",
    body: "A longer case, older than this chain: metaBADGES as competency tokens, digital administration, and credentials that move with a person instead of a campus.",
  },
];

function OpenWork() {
  return (
    <section className="border-t border-line bg-panel" aria-labelledby="open-heading">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <p className="text-sm font-medium tracking-widest text-brass uppercase">In the open</p>
        <h2 id="open-heading" className="mt-3 max-w-2xl font-display text-3xl sm:text-4xl">
          The code is public. The argument is older than the chain.
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {doors.map((door) => (
            <a
              key={door.href}
              href={door.href}
              target="_blank"
              rel="noreferrer"
              className="group flex min-h-44 flex-col rounded-card border border-line bg-ink p-6 transition-colors duration-200 hover:border-brass"
            >
              <span className="text-xs tracking-widest text-brass uppercase">{door.kicker}</span>
              <span className="mt-3 flex items-start justify-between gap-3 font-display text-2xl">
                {door.title}
                <ArrowUpRight
                  className="mt-1 size-5 shrink-0 text-muted transition-colors duration-200 group-hover:text-brass"
                  aria-hidden="true"
                />
              </span>
              <span className="mt-3 text-sm text-muted">{door.body}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reading() {
  const pieces = [
    { to: "/hash", title: "Student hash IDs", body: "Portable identity: hash on-chain, personal data off-chain, then a verify link." },
    { to: "/badges", title: "Course badges", body: "Request, university approval, then mint on Algorand." },
    { to: "/outcomes", title: "SLO-level checks", body: "Why an outcome is a better unit than a course grade." },
    { to: "/registrars", title: "For registrars", body: "Fraud, paper, and third-party fees. A note, not a logo wall." },
    { to: "/check", title: "Employer check", body: "Paste a hash and check the ledger. Don’t call the office." },
    { to: "/stack", title: "Developer stack", body: "Next.js, PyTeal, AlgoSDK, Pera, and the path toward IPFS." },
    { to: "/story", title: "EasyA to EQ2", body: "Only what the public repos actually contain." },
    { to: "/mooa", title: "MOOA", body: "Massively Open Online Administration — sketched, not launched." },
    { to: "/ac", title: "AC", body: "Agentic credentialing: a paid hash check, stubbed until the x402 host is up." },
  ] as const;

  return (
    <section className="border-t border-line" aria-labelledby="reading-heading">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <p className="text-sm font-medium tracking-widest text-brass uppercase">The file</p>
        <h2 id="reading-heading" className="mt-3 font-display text-3xl sm:text-4xl">
          Nine pages past the front door
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {pieces.map((piece) => (
            <Link
              key={piece.to}
              to={piece.to}
              className="rounded-card border border-line p-6 hover:border-brass"
            >
              <span className="font-display text-2xl">{piece.title}</span>
              <span className="mt-2 block text-sm text-muted">{piece.body}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

