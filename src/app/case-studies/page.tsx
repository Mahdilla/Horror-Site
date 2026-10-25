import Link from "next/link";
import { cases } from "@/lib/content";
import { Artwork } from "@/components/artwork";
import { SectionLabel } from "@/components/shell";
import { ArrowUpRight } from "lucide-react";
export const metadata = { title: "Case studies" };
export default function CaseStudies() {
  return (
    <div className="page-wrap">
      <header className="page-heading">
        <SectionLabel>UNDER THE LENS / THE CASE FILES</SectionLabel>
        <h1>
          Look closer.
          <br />
          <em>Feel everything.</em>
        </h1>
        <p>
          Not plot summaries. A dissection of the choices that make a scene
          <br className="desktop-break" /> linger—and how to bring those choices
          to your own work.
        </p>
      </header>
      <div className="case-grid all-cases">
        {cases.map((c) => (
          <Link
            className="case-card"
            href={`/case-studies/${c.slug}`}
            key={c.slug}
          >
            <div className="case-image">
              <Artwork kind={c.art} />
              <span className="case-image-number">CASE FILE / {c.number}</span>
              <span className="round-arrow">
                <ArrowUpRight size={20} />
              </span>
            </div>
            <div className="case-meta">
              <span>{c.tag}</span>
              <span>{c.year}</span>
            </div>
            <h2>{c.title}</h2>
            <p>{c.summary}</p>
            {c.slug === "obsession" && (
              <span className="research-badge">
                RESEARCH DOSSIER · SCENE VERIFICATION PENDING
              </span>
            )}
          </Link>
        ))}
      </div>
      <div className="editorial-note">
        A frame is not a fact.
        <p>
          All artwork is original. Step-by-step diagrams are conceptual
          reconstructions, not exact film frames. Interpretations are labeled;
          unverified scene details are left unclaimed.
        </p>
      </div>
    </div>
  );
}
