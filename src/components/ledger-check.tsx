import { useEffect, useState } from "react";
import { INDEXER } from "@/lib/links";

function bytesToBase64(bytes: Uint8Array) {
  let binary = "";
  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });
  return btoa(binary);
}

function prefixCandidates(raw: string) {
  const trimmed = raw.trim();
  const candidates = [new TextEncoder().encode(trimmed)];
  const hex = trimmed.replace(/\s+/g, "");
  if (/^[0-9a-fA-F]+$/.test(hex) && hex.length % 2 === 0 && hex.length > 0) {
    const bytes = new Uint8Array(hex.length / 2);
    for (let i = 0; i < bytes.length; i += 1) bytes[i] = Number.parseInt(hex.slice(i * 2, i * 2 + 2), 16);
    candidates.push(bytes);
  }
  return candidates.map(bytesToBase64);
}

async function notesFor(prefix: string) {
  const url = new URL(`${INDEXER}/v2/transactions`);
  url.searchParams.set("note-prefix", prefix);
  url.searchParams.set("limit", "5");
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Indexer answered ${response.status}`);
  const data = (await response.json()) as { transactions?: { id: string }[] };
  return data.transactions ?? [];
}

export function LedgerCheck() {
  const [value, setValue] = useState("");
  const [busy, setBusy] = useState(false);
  const [report, setReport] = useState("");
  const [txIds, setTxIds] = useState<string[]>([]);

  useEffect(() => {
    const fromUrl = new URLSearchParams(window.location.search).get("hash");
    if (fromUrl) setValue(fromUrl);
  }, []);

  async function check() {
    const needle = value.trim();
    if (!needle) {
      setReport("Paste a student hash or a transaction note first.");
      setTxIds([]);
      return;
    }
    setBusy(true);
    setReport("");
    setTxIds([]);
    try {
      const found: string[] = [];
      for (const prefix of prefixCandidates(needle)) {
        const txs = await notesFor(prefix);
        txs.forEach((tx) => found.push(tx.id));
      }
      const unique = [...new Set(found)];
      setTxIds(unique);
      setReport(
        unique.length
          ? "A transaction note on Algorand begins with what you pasted. That is a hit on the public ledger, not a phone call to a registrar."
          : "No public note begins with this value. That means this lookup did not find it.",
      );
    } catch {
      setReport("The ledger did not answer the note search.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="max-w-2xl rounded-card border border-line bg-panel p-6">
      <h2 className="font-display text-2xl">Paste a hash</h2>
      <p className="mt-3 text-muted">
        Employers and other institutions can open a verify link or paste the fingerprint here. The
        browser asks the public ledger. It does not contact a campus.
      </p>
      <label htmlFor="claim-hash" className="mt-6 block text-sm font-medium">
        Student hash or note
      </label>
      <textarea
        id="claim-hash"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        rows={4}
        spellCheck={false}
        suppressHydrationWarning
        className="mt-3 w-full resize-y rounded-xl border border-line bg-ink px-4 py-3 text-paper"
        placeholder="Hex fingerprint, or the note text a student shared"
      />
      <button type="button" className="btn btn-brass mt-4" onClick={check} disabled={busy}>
        {busy ? "Checking…" : "Check the ledger"}
      </button>
      <p className="mt-4 min-h-12 text-sm" aria-live="polite">
        {report || "Waiting for a hash. A shareable link is this page plus ?hash= and the value."}
      </p>
      {txIds.length ? (
        <ul className="mt-2 space-y-2 text-sm break-all text-brass">
          {txIds.map((id) => (
            <li key={id}>{id}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
