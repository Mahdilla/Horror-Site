import { SectionLabel, ArrowLink } from "@/components/shell";
import { Lab } from "@/components/experiments";
export const metadata = { title: "The horror laboratory" };
export default function Laboratory() {
  return (
    <div className="page-wrap">
      <header className="page-heading">
        <SectionLabel>THE HORROR LABORATORY / LEARN BY FEELING</SectionLabel>
        <h1>
          A controlled study
          <br />
          <em>in losing control.</em>
        </h1>
        <p>
          Change one thing. Feel the difference. Then look at why it worked.
          <br />
          No jump scares. No flashing. Sound is optional.
        </p>
      </header>
      <Lab />
      <div className="lab-workshop-link">
        <span className="small-label">EXPERIMENT 006</span>
        <h2>
          Now you’re the one
          <br />
          behind the feeling.
        </h2>
        <p>Apply what you’ve discovered in the writer’s workshop.</p>
        <ArrowLink href="/workshop">Begin a writing experiment</ArrowLink>
      </div>
    </div>
  );
}
