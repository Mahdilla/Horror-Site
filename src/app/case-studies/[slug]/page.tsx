import { cases, getCase } from "@/lib/content";
import { notFound } from "next/navigation";
import { SectionLabel, ArrowLink } from "@/components/shell";
import { Artwork } from "@/components/artwork";
import { SceneBreakdown } from "@/components/scene-breakdown";
import { Experiment } from "@/components/experiments";
import { Sources } from "@/components/sources";
export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return { title: getCase(slug)?.title || "Case not found" };
}
export default async function Case({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = getCase(slug);
  if (!c) notFound();
  return (
    <div className="page-wrap">
      <header className="case-detail-heading">
        <div>
          <SectionLabel>
            CASE FILE {c.number} / {c.tag}
          </SectionLabel>
          <h1>
            {c.title}
            <span>.</span>
          </h1>
          <p>{c.summary}</p>
          <div className="small-label">
            {c.director} / {c.year}
          </div>
        </div>
        <Artwork kind={c.art} />
      </header>
      {slug === "obsession" && (
        <div className="research-notice">
          <strong>Scene analysis pending verification.</strong>
          <p>
            This dossier identifies the requested film from the project owner’s
            clarification. The bedroom sequence is not independently verified.
            The following face study is original and is not attributed to the
            film.
          </p>
        </div>
      )}
      <div className="case-content">
        {c.sections.map((s, i) => (
          <section key={s.title} className="case-article-section">
            <span className="small-label crimson">
              0{i + 1} /{" "}
              {i === 0
                ? "THE PREMISE"
                : i === 1
                  ? "THE MECHANISM"
                  : i === 2
                    ? "THE DISSECTION"
                    : "THE WRITER’S TAKEAWAY"}
            </span>
            <h2>{s.title}</h2>
            <p>{s.text}</p>
          </section>
        ))}
      </div>
      <section className="lesson-stage">
        <div className="section-heading">
          <div>
            <SectionLabel>READ THE MOMENTS</SectionLabel>
            <h2>A scene, taken apart.</h2>
            <p>
              {slug === "obsession"
                ? "An original face-perception study, not a reconstruction of the film."
                : "A conceptual sequence. Move through the changes in audience knowledge."}
            </p>
          </div>
        </div>
        <SceneBreakdown study={c} />
      </section>
      <section className="lesson-stage">
        <SectionLabel>EXPERIENCE THE PRINCIPLE</SectionLabel>
        <h2 className="section-title">
          Change a variable. Notice the difference.
        </h2>
        <Experiment
          type={
            slug === "pulse"
              ? "movement"
              : slug === "the-others"
                ? "breathing"
                : slug === "hitchcock"
                  ? "bomb"
                  : "face"
          }
        />
      </section>
      <Sources ids={c.sources} />
      <div className="inline-actions">
        <ArrowLink href={`/concepts/${c.concept}`}>
          Study the underlying concept
        </ArrowLink>
        <ArrowLink href="/workshop">Try it in your writing</ArrowLink>
      </div>
    </div>
  );
}
