import Link from "next/link";
import { concepts } from "@/lib/content";
import { SectionLabel } from "@/components/shell";
import { ArrowUpRight } from "lucide-react";
export const metadata = { title: "Concepts library" };
export default function Concepts() {
  return (
    <div className="page-wrap">
      <header className="page-heading">
        <SectionLabel>THE FOUNDATIONS / FIVE MECHANISMS</SectionLabel>
        <h1>
          The architecture
          <br />
          <em>of unease.</em>
        </h1>
        <p>
          Fear has a grammar. Learn to recognize it, then use it.
          <br />
          Begin with an experience. Leave with a technique.
        </p>
      </header>
      <div className="library-list">
        {concepts.map((c) => (
          <Link
            className="library-row"
            href={`/concepts/${c.slug}`}
            key={c.slug}
          >
            <span className="library-number">{c.number}</span>
            <div>
              <span className="small-label crimson">{c.category}</span>
              <h2>{c.title}</h2>
              <p>{c.intro}</p>
            </div>
            <span className="library-cta">
              Open the lesson <ArrowUpRight size={22} />
            </span>
          </Link>
        ))}
      </div>
      <div className="editorial-note">
        A note on the science
        <p>
          These lessons distinguish research findings, explanatory theories,
          film interpretation, and practical craft advice. No technique
          guarantees a response in every reader.
        </p>
      </div>
    </div>
  );
}
