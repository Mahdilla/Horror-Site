"use client";
import { useState } from "react";
import { CaseStudy } from "@/lib/content";
import { Artwork } from "./artwork";
import { ChevronLeft, ChevronRight } from "lucide-react";
export function SceneBreakdown({ study }: { study: CaseStudy }) {
  const [step, setStep] = useState(0);
  const beat = study.beats[step];
  return (
    <div className="breakdown">
      <div className="breakdown-visual">
        <Artwork kind={study.art} />
        <div>
          <span className="small-label">
            CONCEPTUAL ILLUSTRATION · NOT AN EXACT FILM FRAME
          </span>
          <h3>{beat.label}</h3>
          <p>{beat.sensory}</p>
        </div>
      </div>
      <div className="breakdown-copy">
        <div className="breakdown-tabs" aria-label="Scene moments">
          {study.beats.map((b, i) => (
            <button
              aria-pressed={step === i}
              key={b.label}
              onClick={() => setStep(i)}
            >
              <span>0{i + 1}</span>
              {b.label}
            </button>
          ))}
        </div>
        <dl aria-live="polite">
          {[
            ["Characters know", beat.character],
            ["Audience knows", beat.audience],
            ["The assumption", beat.assumption],
            ["The technique", beat.technique],
            ["What changes", beat.change],
            ["Take it to the page", beat.lesson],
          ].map(([label, value]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
        <div className="breakdown-navigation">
          <button
            className="text-link"
            disabled={step === 0}
            onClick={() => setStep(step - 1)}
          >
            <ChevronLeft size={14} /> Previous
          </button>
          <span>
            0{step + 1} / 0{study.beats.length}
          </span>
          <button
            className="text-link"
            disabled={step === study.beats.length - 1}
            onClick={() => setStep(step + 1)}
          >
            Next <ChevronRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
