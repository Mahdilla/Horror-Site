import { SectionLabel, ArrowLink } from "@/components/shell";
import { Sources } from "@/components/sources";
import { sources } from "@/lib/content";
export const metadata = { title: "About & methodology" };
export default function About() {
  return (
    <div className="page-wrap about-page">
      <header className="page-heading">
        <SectionLabel>PURPOSE / METHOD / SOURCES</SectionLabel>
        <h1>
          Understand the fear.
          <br />
          <em>Respect the uncertainty.</em>
        </h1>
        <p>
          A digital exhibition and writing workshop about how horror is
          constructed.
        </p>
      </header>
      <div className="about-intro">
        <p className="large-prose">
          Don’t just explain what makes something scary. Let someone experience
          the technique, then dissect why it worked.
        </p>
        <div className="article-prose">
          <p>
            The Anatomy of Fear connects psychological research, close reading,
            and creative practice. It is for writers, filmmakers, game
            designers, and curious people. The goal is a sharper set of
            questions, not a formula that guarantees fear.
          </p>
          <p>
            Each lesson moves through five stages: experience, understand,
            study, deconstruct, apply. Original diagrams and small experiments
            make the relationship between a creative choice and a possible
            interpretation visible.
          </p>
        </div>
      </div>
      <div className="method-grid">
        {[
          [
            "01",
            "Research findings",
            "Empirical work can support a claim under specific conditions. We link substantive claims to published sources and preserve limits on what they establish. Research on anxiety is not itself evidence that a particular movie frightens every viewer.",
          ],
          [
            "02",
            "Explanatory frameworks",
            "The uncanny valley, predictive expectations, and models of suspense offer useful lenses. Their scope and evidential support differ. A compelling theoretical explanation is not the same as a universal mechanism.",
          ],
          [
            "03",
            "Film interpretation",
            "Reading a pause, shadow, or movement is critical interpretation. Our original diagrams are conceptual, not frame-accurate reproductions. The alternative reply associated with The Others is hypothetical, not film dialogue.",
          ],
          [
            "04",
            "Practical craft",
            "Prompts, simulations, and examples are authored teaching tools. The tension score is illustrative and has no scientific validation. Your audience, medium, context, and execution will change the result.",
          ],
        ].map(([n, title, p]) => (
          <section key={n}>
            <span className="small-label crimson">
              {n} / KNOW WHAT KIND OF CLAIM YOU’RE READING
            </span>
            <h2>{title}</h2>
            <p>{p}</p>
          </section>
        ))}
      </div>
      <section className="editorial-note">
        An open research note: Obsession
        <p>
          The project owner identifies Curry Barker’s Obsession, 2026 release.
          The official distributor page could not be retrieved during
          implementation, and the bedroom sequence remains unverified. Its
          dossier provides a general original face study without asserting
          scene-specific details. A completed film analysis requires direct
          scene verification.
        </p>
      </section>
      <section className="article-prose">
        <h2>Control, privacy & access</h2>
        <p>
          No abrupt loud sounds, deceptive system messages, or flashing effects.
          Motion and sound controls are in the header. Reduced-motion system
          preferences are respected. Sound begins off and is used only in the
          breathing experiment after a choice.
        </p>
        <p>
          Writing drafts and reflections are stored in your browser’s local
          storage, not uploaded to a server. They do not sync across devices.
          Export them before clearing browser data. If storage is blocked or
          full, the workshop reports the failure and still allows export.
        </p>
        <p>
          All illustrations and example dialogue on this site are original. Film
          titles are used for educational criticism. No film footage, stills, or
          copied performances are included.
        </p>
      </section>
      <Sources ids={Object.keys(sources)} />
      <ArrowLink href="/concepts">Explore the concepts</ArrowLink>
    </div>
  );
}
