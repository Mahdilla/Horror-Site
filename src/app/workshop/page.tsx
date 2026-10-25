import { SectionLabel } from "@/components/shell";
import { Workshop } from "@/components/workshop";
export const metadata = { title: "The writer’s workshop" };
export default function Page() {
  return (
    <div className="page-wrap">
      <header className="page-heading">
        <SectionLabel>
          THE WRITER’S WORKSHOP / THEORY INTO INSTINCT
        </SectionLabel>
        <h1>
          A little ink.
          <br />
          <em>A lasting unease.</em>
        </h1>
        <p>
          Practice the mechanism, not the cliché. Five exercises, original
          examples,
          <br className="desktop-break" /> and a quiet place to work. Your
          drafts stay on this device.
        </p>
      </header>
      <Workshop />
    </div>
  );
}
