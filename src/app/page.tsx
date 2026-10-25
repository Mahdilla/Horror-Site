import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  MoveRight,
  FlaskConical,
  ScanLine,
} from "lucide-react";
import { Artwork } from "@/components/artwork";
import { SectionLabel, ArrowLink } from "@/components/shell";
import { concepts, cases } from "@/lib/content";
export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <SectionLabel>ENTER THE ARCHIVE</SectionLabel>
          <h1>
            Fear is not
            <br />
            an accident.
            <br />
            <em>It is constructed.</em>
          </h1>
          <p>
            Behind every held breath, every glance into the dark,
            <br className="desktop-break" /> there is a mechanism. Let’s take it
            apart.
          </p>
          <div className="hero-actions">
            <Link className="button button-light" href="/concepts">
              Explore the anatomy <ArrowUpRight size={17} />
            </Link>
            <Link className="quiet-link" href="/laboratory">
              <FlaskConical size={16} /> Enter the laboratory
            </Link>
          </div>
          <div className="hero-note">
            <span>PSYCHOLOGY</span>
            <b>×</b>
            <span>CINEMA</span>
            <b>×</b>
            <span>THE CRAFT OF HORROR</span>
          </div>
        </div>
        <div className="hero-image">
          <Artwork />
          <div className="image-topline">
            <span>EXHIBIT 001 / THE UNSEEN</span>
            <ScanLine size={16} />
          </div>
          <div className="image-cross cross-a">+</div>
          <div className="image-cross cross-b">+</div>
          <div className="hero-image-caption">
            <span>
              What frightens you more?
              <br />
              <strong>What you see. Or what you don’t.</strong>
            </span>
            <span className="vertical-code">FIG. 01 — ANTICIPATION</span>
          </div>
        </div>
      </section>
      <div className="intro-strip">
        <span className="archive-code">
          A STUDY IN UNEASE <ArrowDown size={13} />
        </span>
        <p>
          Not a collection of scares.
          <br />
          <strong>An understanding of how they work.</strong>
        </p>
        <p>
          An interactive archive for writers, filmmakers, and curious minds.
          <br className="desktop-break" /> Experience the technique. Examine the
          psychology. Make it your own.
        </p>
      </div>
      <section className="section-wrap concepts-home">
        <div className="section-heading">
          <div>
            <SectionLabel>01 / THE FOUNDATIONS</SectionLabel>
            <h2>
              The mechanisms of fear<span>.</span>
            </h2>
            <p>Five ways a story gets under your skin.</p>
          </div>
          <ArrowLink href="/concepts">Explore all concepts</ArrowLink>
        </div>
        <div className="concept-grid">
          {concepts.slice(0, 4).map((c, i) => (
            <Link
              className="concept-card"
              key={c.slug}
              href={`/concepts/${c.slug}`}
            >
              <div className="card-number">
                {c.number}
                <ArrowUpRight size={15} />
              </div>
              <div className={`concept-symbol symbol-${i}`} aria-hidden="true">
                {i === 0 ? (
                  <>
                    <i />
                    <i />
                  </>
                ) : i === 1 ? (
                  <>
                    <span>→</span>
                    <span>↳</span>
                  </>
                ) : i === 2 ? (
                  <svg viewBox="0 0 200 75">
                    <path d="M0 65L40 65L61 46L80 57L115 25L133 38L170 4L186 34L200 34" />
                  </svg>
                ) : (
                  <>
                    <span className="unseen-door" />
                    <span className="unseen-shadow" />
                  </>
                )}
              </div>
              <span className="small-label">{c.category}</span>
              <h3>{c.title}</h3>
              <p>{c.subtitle}</p>
              <span className="card-explore">
                Examine the concept <MoveRight size={15} />
              </span>
            </Link>
          ))}
        </div>
        <Link className="fifth-concept" href="/concepts/dramatic-irony">
          <span>05</span>
          <p>
            Sometimes the most frightening thing is{" "}
            <em>what you already know.</em>
          </p>
          <span>
            Dramatic irony <MoveRight size={17} />
          </span>
        </Link>
      </section>
      <section className="section-wrap case-home">
        <div className="section-heading">
          <div>
            <SectionLabel>02 / UNDER THE LENS</SectionLabel>
            <h2>
              Scenes that stay with you<span>.</span>
            </h2>
            <p>Look closer. The fear is in the details.</p>
          </div>
          <ArrowLink href="/case-studies">View the case studies</ArrowLink>
        </div>
        <div className="case-grid">
          {cases.slice(0, 3).map((c) => (
            <Link
              className="case-card"
              href={`/case-studies/${c.slug}`}
              key={c.slug}
            >
              <div className="case-image">
                <Artwork kind={c.art} />
                <span className="case-image-number">
                  CASE FILE / {c.number}
                </span>
                <span className="round-arrow">
                  <ArrowUpRight size={20} />
                </span>
              </div>
              <div className="case-meta">
                <span>{c.tag}</span>
                <span>{c.year}</span>
              </div>
              <h3>{c.title}</h3>
              <p>{c.summary}</p>
            </Link>
          ))}
        </div>
      </section>
      <section className="lab-feature">
        <div className="lab-feature-art">
          <div className="sound-wave">
            {Array.from({ length: 43 }, (_, i) => (
              <i
                key={i}
                style={{
                  height: `${12 + Math.sin(i * 2.1) ** 2 * 55 + Math.sin(i * 0.24) ** 2 * 65}px`,
                }}
              />
            ))}
          </div>
          <span>EXPERIMENT 001 — THE BREATHING</span>
        </div>
        <div className="lab-feature-copy">
          <SectionLabel>03 / LEARN BY FEELING</SectionLabel>
          <h2>
            Don’t just study fear.
            <br />
            <em>Experience it.</em>
          </h2>
          <p>
            Change a line of dialogue. Reveal what’s under the table. Watch a
            familiar movement become something else.
          </p>
          <ArrowLink href="/laboratory">Step inside the laboratory</ArrowLink>
          <div className="lab-footnote">
            <i className="status-dot" /> SIX INTERACTIVE EXPERIMENTS · YOU’RE IN
            CONTROL
          </div>
        </div>
      </section>
      <section className="workshop-invite section-wrap">
        <div>
          <SectionLabel>04 / FROM OBSERVER TO AUTHOR</SectionLabel>
          <h2>
            Now, make them
            <br />
            <em>hold their breath.</em>
          </h2>
        </div>
        <div>
          <p>
            A blank page. A little uncertainty. The beginning of something
            unsettling. Put the techniques to work with guided writing
            exercises.
          </p>
          <Link className="button button-outline" href="/workshop">
            Open the writer’s workshop <ArrowUpRight size={17} />
          </Link>
          <span className="local-note">
            YOUR WORDS STAY YOURS. DRAFTS SAVE ON THIS DEVICE.
          </span>
        </div>
      </section>
    </>
  );
}
