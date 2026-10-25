import { concepts, getConcept } from "@/lib/content";
import { notFound } from "next/navigation";
import { Experiment } from "@/components/experiments";
import { SectionLabel, ArrowLink } from "@/components/shell";
import { Sources } from "@/components/sources";
import { Workshop } from "@/components/workshop";
export function generateStaticParams() {
  return concepts.map((c) => ({ slug: c.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return { title: getConcept(slug)?.title || "Lesson not found" };
}
export default async function Concept({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = getConcept(slug);
  if (!c) notFound();
  const stages = [
    ["02", "Understand it", "THE MECHANISM", c.understand],
    ["03", "Study it", "CRITICAL INTERPRETATION", c.study],
    ["04", "Deconstruct it", "FROM SCENE TO STRUCTURE", c.deconstruct],
  ];
  return (
    <div className="page-wrap lesson-page">
      <header className="page-heading">
        <SectionLabel>
          CONCEPT {c.number} / {c.category}
        </SectionLabel>
        <h1>
          {c.title}
          <span>.</span>
        </h1>
        <p>{c.intro}</p>
        <nav className="stage-nav" aria-label="Lesson stages">
          {["Experience", "Understand", "Study", "Deconstruct", "Apply"].map(
            (s, i) => (
              <a href={`#stage-${i + 1}`} key={s}>
                <span>0{i + 1}</span>
                {s}
              </a>
            ),
          )}
        </nav>
      </header>
      <section id="stage-1" className="lesson-stage">
        <div className="stage-title">
          <span>01</span>
          <div>
            <SectionLabel>FEEL IT BEFORE YOU NAME IT</SectionLabel>
            <h2>Experience it.</h2>
          </div>
        </div>
        <Experiment type={c.experiment} />
      </section>
      {stages.map(([num, title, label, paragraphs]) => (
        <section
          id={`stage-${Number(num)}`}
          className="lesson-stage prose-stage"
          key={num as string}
        >
          <div className="stage-title">
            <span>{num}</span>
            <div>
              <SectionLabel>{label}</SectionLabel>
              <h2>{title}.</h2>
            </div>
          </div>
          <div className="article-prose">
            {(paragraphs as string[]).map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </section>
      ))}
      <section id="stage-5" className="lesson-stage">
        <div className="stage-title">
          <span>05</span>
          <div>
            <SectionLabel>TAKE IT TO THE PAGE</SectionLabel>
            <h2>Apply it.</h2>
          </div>
        </div>
        <div className="article-prose">
          {c.apply.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <Workshop initialSlug={slug} />
      </section>
      <Sources ids={c.sources} />
      <ArrowLink href="/concepts">Back to the concepts library</ArrowLink>
    </div>
  );
}
