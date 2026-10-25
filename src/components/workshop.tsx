"use client";
import { useState, useEffect } from "react";
import { concepts } from "@/lib/content";
import { Check, Download, ChevronDown, BookOpen } from "lucide-react";
export function Workshop({ initialSlug }: { initialSlug?: string }) {
  const [slug, setSlug] = useState(initialSlug || concepts[0].slug);
  const [text, setText] = useState("");
  const [status, setStatus] = useState("Loading local draft…");
  const [ready, setReady] = useState(false);
  const [compare, setCompare] = useState(false);
  const [reflection, setReflection] = useState("");
  const lesson = concepts.find((c) => c.slug === slug)!;
  useEffect(() => {
    setReady(false);
    try {
      const saved = localStorage.getItem(`fear-draft-${slug}`);
      setText(saved || "");
      setReflection(localStorage.getItem(`fear-reflection-${slug}`) || "");
      setStatus(saved ? "Saved on this device" : "Ready to write");
    } catch {
      setText("");
      setReflection("");
      setStatus("Local storage unavailable. Export to keep your work.");
    }
    setCompare(false);
    setReady(true);
  }, [slug]);
  function save(value: string, kind: "draft" | "reflection") {
    if (kind === "draft") setText(value);
    else setReflection(value);
    try {
      localStorage.setItem(`fear-${kind}-${slug}`, value);
      setStatus("Saved on this device");
    } catch {
      setStatus("Could not save. Export to keep your work.");
    }
  }
  function download() {
    const blob = new Blob(
      [
        `${lesson.title}\n\nEXERCISE\n${lesson.prompt}\n\nDRAFT\n${text}\n\nREFLECTION\n${reflection}`,
      ],
      { type: "text/plain" },
    );
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `anatomy-of-fear-${slug}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  }
  return (
    <div className="workshop">
      <aside className="workshop-sidebar">
        <span className="small-label">EXERCISE INDEX</span>
        {concepts.map((c, i) => (
          <button
            className={c.slug === slug ? "active" : ""}
            key={c.slug}
            onClick={() => setSlug(c.slug)}
          >
            <span>0{i + 1}</span>
            <div>
              {c.title}
              <small>{c.category}</small>
            </div>
            <span>↗</span>
          </button>
        ))}
        <p>
          Your drafts are stored only in this browser. No account, no upload.
          Export a copy before clearing browser data or changing devices.
        </p>
      </aside>
      <div className="writing-area">
        <span className="small-label crimson">
          EXPERIMENT 006 / THE WRITER’S WORKSHOP
        </span>
        <h2>{lesson.title}</h2>
        <p className="writing-prompt">{lesson.prompt}</p>
        <label className="small-label" htmlFor="writing-draft">
          YOUR DRAFT
        </label>
        <textarea
          id="writing-draft"
          value={text}
          disabled={!ready}
          onChange={(e) => save(e.target.value, "draft")}
          placeholder="Begin with something ordinary…"
        />
        <div className="editor-status">
          <span role="status">
            <Check size={12} />
            {status}
          </span>
          <span>{text.trim() ? text.trim().split(/\s+/).length : 0} WORDS</span>
        </div>
        <div className="writing-actions">
          <button
            className="button button-outline"
            onClick={() => setCompare(!compare)}
            aria-expanded={compare}
          >
            <BookOpen size={15} />
            {compare ? "Close example" : "Compare with an example"}
            <ChevronDown size={14} />
          </button>
          <button className="text-link" onClick={download}>
            <Download size={15} />
            Export draft
          </button>
        </div>
        {compare && (
          <div className="example-panel">
            <span className="small-label">
              ONE POSSIBLE APPROACH · NOT AN IDEAL ANSWER
            </span>
            <blockquote>{lesson.example}</blockquote>
            <p>{lesson.apply[0]}</p>
            <label htmlFor="reflection">
              What does your version let the reader infer? What could you leave
              unsaid?
            </label>
            <textarea
              id="reflection"
              value={reflection}
              onChange={(e) => save(e.target.value, "reflection")}
              placeholder="A note to your future self…"
            />
          </div>
        )}
      </div>
    </div>
  );
}
