import { createFileRoute } from "@tanstack/react-router";
import { Article, OutLink, Steps } from "@/components/site-chrome";
import { ORG, PROTOTYPE } from "@/lib/links";

export const Route = createFileRoute("/hash")({
  head: () => ({
    meta: [
      { title: "Student hash IDs — portable identity on Algorand | metaCAMPUS" },
      {
        name: "description",
        content:
          "A metaCAMPUS student hash is a cryptographic identifier on Algorand. Personal data stays off-chain. Students create the hash, receive badges, and share a verify link.",
      },
    ],
  }),
  component: HashPage,
});

function HashPage() {
  return (
    <Article
      eyebrow="Portable identity"
      title="The student hash is the thing you carry"
      lede="A student hash is not a student-information record. It is a cryptographic name for one. The person keeps the file. The chain keeps the identifier. Anyone the student chooses can ask whether a presented credential still matches."
    >
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <h2 className="font-display text-3xl">What is on the chain, and what is not</h2>
          <p className="mt-4 text-muted">
            On-chain sits the hash: a fingerprint that does not reverse into a name, a birth date,
            or a home address. Off-chain sits the education file, with the student or the
            institution allowed to hold it. The org’s public FAQ frames FERPA around that cut —
            students control sharing of transcript hashes. This page repeats the design, not a
            legal certification.
          </p>
          <p className="mt-4 text-muted">
            The easy-a-hackathon README is more literal about the prototype. A university admin
            onboards a student, the system generates a unique student hash as the blockchain
            identifier, and a student record is stored on-chain. Treat that record as the
            identifier and the attested claims the prototype writes. The portable object the
            student owns is still the hash, opened with their wallet, not a portal password.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <OutLink href={PROTOTYPE}>easy-a-hackathon</OutLink>
            <OutLink href={ORG}>metacampus-org</OutLink>
          </div>
        </div>
        <div className="lg:col-span-5">
          <h2 className="font-display text-3xl">How a student is onboarded</h2>
          <div className="mt-6">
            <Steps
              items={[
                {
                  title: "Create the hash",
                  body: "A university admin onboards the student. The system generates the student hash. That identifier, not a Social Security number, is what later lookups use.",
                },
                {
                  title: "Receive badges",
                  body: "The student asks for a course credential from their wallet. An authorized admin approves. The badge is minted against the same hash.",
                },
                {
                  title: "Share a verify link",
                  body: "The student carries the hash the way they would carry a diploma, except a verifier can check it without waiting on the office that printed it.",
                },
              ]}
            />
          </div>
        </div>
      </div>
    </Article>
  );
}
