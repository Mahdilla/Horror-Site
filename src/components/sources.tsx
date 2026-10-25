import { sources } from "@/lib/content";
import { ArrowUpRight } from "lucide-react";
export function Sources({ ids }: { ids: string[] }) {
  return (
    <section className="sources">
      <span className="small-label">SOURCES & FURTHER READING</span>
      <ol>
        {ids.map((id) => {
          const s = sources[id as keyof typeof sources];
          return (
            <li key={id}>
              <a href={s.href} target="_blank" rel="noreferrer">
                {s.label}
                <ArrowUpRight size={13} />
              </a>
              <p>{s.note}</p>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
