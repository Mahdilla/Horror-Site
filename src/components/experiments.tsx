"use client";
import { useEffect, useState, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  RotateCcw,
  Play,
  Pause,
  Check,
  Eye,
  EyeOff,
} from "lucide-react";
export const experimentNames = [
  ["breathing", "The breathing", "A single line. A different room."],
  ["bomb", "Under the table", "What you know changes everything."],
  ["tension", "Tension simulator", "Build the anticipation."],
  ["movement", "Uncanny movement", "A familiar body. An unfamiliar rhythm."],
  ["face", "The almost-human face", "Find the point where familiarity slips."],
];
export function Experiment({ type }: { type: string }) {
  return type === "breathing" ? (
    <Breathing />
  ) : type === "bomb" ? (
    <Bomb />
  ) : type === "tension" ? (
    <Tension />
  ) : type === "movement" ? (
    <Movement />
  ) : (
    <Face />
  );
}
export function Lab() {
  const [active, setActive] = useState("breathing");
  return (
    <>
      <div
        className="experiment-tabs"
        role="tablist"
        aria-label="Choose an experiment"
      >
        {experimentNames.map(([id, name], i) => (
          <button
            key={id}
            id={`tab-${id}`}
            role="tab"
            aria-selected={active === id}
            aria-controls="experiment-panel"
            tabIndex={active === id ? 0 : -1}
            onKeyDown={(e) => {
              if (["ArrowRight", "ArrowLeft", "Home", "End"].includes(e.key)) {
                e.preventDefault();
                const n =
                  e.key === "Home"
                    ? 0
                    : e.key === "End"
                      ? 4
                      : (i + (e.key === "ArrowRight" ? 1 : 4)) % 5;
                setActive(experimentNames[n][0]);
                document
                  .getElementById(`tab-${experimentNames[n][0]}`)
                  ?.focus();
              }
            }}
            onClick={() => setActive(id)}
          >
            <span>00{i + 1}</span>
            {name}
          </button>
        ))}
      </div>
      <div
        id="experiment-panel"
        role="tabpanel"
        aria-labelledby={`tab-${active}`}
      >
        <Experiment key={active} type={active} />
      </div>
    </>
  );
}
function breathSound() {
  if (document.documentElement.dataset.sound !== "on") return;
  const ctx = new AudioContext();
  const buffer = ctx.createBuffer(1, ctx.sampleRate * 1.8, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < data.length; i++)
    data[i] =
      (Math.random() * 2 - 1) * Math.sin((Math.PI * i) / data.length) * 0.09;
  const src = ctx.createBufferSource();
  src.buffer = buffer;
  const filter = ctx.createBiquadFilter();
  filter.type = "lowpass";
  filter.frequency.value = 450;
  src.connect(filter);
  filter.connect(ctx.destination);
  src.start();
  src.onended = () => void ctx.close();
}
function Breathing() {
  const [choice, setChoice] = useState<string | null>(null);
  return (
    <div className="experiment-layout">
      <div
        className={`breathing-scene ${choice === "subverted" ? "third-presence" : ""}`}
      >
        <span className="small-label">AN ORIGINAL, HYPOTHETICAL SCENE</span>
        <div className="closet-lines" aria-hidden="true" />
        <div className="scene-dialogue">
          <span>Two children. A dark closet. A sound between them.</span>
          <p>
            “Stop breathing
            <br />
            like that.”
          </p>
          <div className="breath-line" aria-hidden="true">
            {Array.from({ length: 29 }, (_, i) => (
              <i key={i} style={{ height: 8 + Math.sin(i * 0.5) ** 2 * 27 }} />
            ))}
          </div>
          <strong aria-live="polite">
            {choice === "expected"
              ? "“Sorry. I’m trying.”"
              : choice === "subverted"
                ? "“That isn’t me breathing.”"
                : "How does the boy respond?"}
          </strong>
        </div>
        <span className="scene-bottom">
          NO SUDDEN SOUNDS. ONLY A SHIFT IN MEANING.
        </span>
      </div>
      <div className="experiment-controls">
        <span className="small-label crimson">
          EXPERIMENT 001 / EXPECTATION
        </span>
        <h3>Who owns the sound?</h3>
        <p>
          You assume the breathing belongs to the boy. Change his response and
          notice what happens to the space around them.
        </p>
        <button
          className={`choice ${choice === "expected" ? "selected" : ""}`}
          onClick={() => {
            setChoice("expected");
            breathSound();
          }}
        >
          <span>
            01 / THE EXPECTED RESPONSE<strong>“Sorry. I’m trying.”</strong>
          </span>
          {choice === "expected" ? (
            <Check size={18} />
          ) : (
            <ArrowRight size={18} />
          )}
        </button>
        <button
          className={`choice ${choice === "subverted" ? "selected" : ""}`}
          onClick={() => {
            setChoice("subverted");
            breathSound();
          }}
        >
          <span>
            02 / THE SUBVERTED RESPONSE
            <strong>“That isn’t me breathing.”</strong>
          </span>
          {choice === "subverted" ? (
            <Check size={18} />
          ) : (
            <ArrowRight size={18} />
          )}
        </button>
        <div className="dissection" aria-live="polite">
          <span className="small-label">
            {choice ? "THE DISSECTION" : "BEFORE YOU CHOOSE"}
          </span>
          <p>
            {choice === "expected"
              ? "The boy confirms the assumed cause. The sound is uncomfortable, but accounted for. The scene remains a two-person encounter."
              : choice === "subverted"
                ? "The sound has not changed. Its meaning has. Removing the boy as its source forces a new possibility: an unseen third presence, already close enough to hear."
                : "Listen with your imagination. The effect comes from assigning a cause to an ordinary sound, then losing that explanation."}
          </p>
        </div>
        <p className="experiment-note">
          Inspired by a teaching premise associated with The Others (2001). Both
          choices are original variations; the subverted reply is not actual
          film dialogue. Sound is optional and off by default.
        </p>
      </div>
    </div>
  );
}
const conversation = [
  "“Did you leave the window open?”",
  "“A little. It was warm in here.”",
  "“Another cup?”",
  "“Only if you’re having one.”",
  "“We have time.”",
];
function Bomb() {
  const [aware, setAware] = useState(false);
  const [step, setStep] = useState(-1);
  const [playing, setPlaying] = useState(false);
  useEffect(() => {
    if (!playing) return;
    const t = setInterval(
      () =>
        setStep((s) => {
          if (s >= conversation.length) {
            setPlaying(false);
            return s;
          }
          return s + 1;
        }),
      1800,
    );
    return () => clearInterval(t);
  }, [playing]);
  function reset() {
    setStep(-1);
    setPlaying(false);
  }
  return (
    <div className="experiment-layout">
      <div className="bomb-scene">
        <span className="small-label">
          CONCEPTUAL RECONSTRUCTION / IDENTICAL CONVERSATION
        </span>
        <svg
          viewBox="0 0 600 300"
          role="img"
          aria-label={
            aware
              ? "Two unaware people at a table; the audience can see a concealed bomb"
              : "Two people talking at a table; the underside is concealed"
          }
        >
          <g stroke="#8a8d79" strokeWidth="3" fill="none">
            <circle cx="155" cy="76" r="24" />
            <path d="M130 174V116Q155 96 180 116V161L223 169M470 174V116Q445 96 420 116V161L377 169" />
            <circle cx="445" cy="76" r="24" />
            <path d="M117 189H483M130 189V282M470 189V282" strokeWidth="8" />
            <path d="M255 170V153H274V170M326 170V153H345V170" />
          </g>
          {aware ? (
            <g>
              <rect x="266" y="206" width="69" height="36" fill="#71463c" />
              <text
                x="300"
                y="230"
                textAnchor="middle"
                fontSize="15"
                fill="#eee7d6"
                fontFamily="monospace"
              >
                {Math.max(0, 6 - step)}
              </text>
            </g>
          ) : (
            <rect x="126" y="197" width="348" height="70" fill="#101410" />
          )}
        </svg>
        <div className="conversation" aria-live="polite">
          {step < 0 ? (
            <p className="muted">The room is quiet. Begin the scene.</p>
          ) : step >= conversation.length ? (
            <p className="outcome">
              The hidden danger is revealed.
              <span>A silent outcome marker—no flash or sudden sound.</span>
            </p>
          ) : (
            <p>{conversation[step]}</p>
          )}
        </div>
        <span className="scene-bottom">
          {aware
            ? "AUDIENCE: KNOWS / CHARACTERS: UNAWARE"
            : "AUDIENCE: UNAWARE / CHARACTERS: UNAWARE"}
        </span>
      </div>
      <div className="experiment-controls">
        <span className="small-label crimson">
          EXPERIMENT 002 / DRAMATIC IRONY
        </span>
        <h3>
          The same room.
          <br />A different experience.
        </h3>
        <div className="segmented">
          <button
            aria-pressed={!aware}
            className={!aware ? "selected" : ""}
            onClick={() => {
              setAware(false);
              reset();
            }}
          >
            <EyeOff size={14} /> Unaware
          </button>
          <button
            aria-pressed={aware}
            className={aware ? "selected" : ""}
            onClick={() => {
              setAware(true);
              reset();
            }}
          >
            <Eye size={14} /> Aware
          </button>
        </div>
        <p>
          {aware
            ? "You know about the danger beneath the table. They don’t. Notice how their ordinary conversation now delays an escape."
            : "You see an ordinary conversation. The concealed danger will be disclosed only when the scene ends."}
        </p>
        <div className="inline-actions">
          <button
            className="button button-light"
            disabled={step >= conversation.length}
            onClick={() => {
              if (step < 0) setStep(0);
              setPlaying(!playing);
            }}
          >
            {playing ? <Pause size={14} /> : <Play size={14} />}{" "}
            {playing ? "Pause" : "Play scene"}
          </button>
          <button
            className="icon-button"
            aria-label="Restart scene"
            onClick={reset}
          >
            <RotateCcw size={17} />
          </button>
          <button
            className="text-link"
            disabled={step >= conversation.length}
            onClick={() => {
              setPlaying(false);
              setStep((s) => s + 1);
            }}
          >
            Next beat <ArrowRight size={15} />
          </button>
        </div>
        <div className="beat-track">
          {Array.from({ length: 6 }, (_, i) => (
            <i key={i} className={step >= i ? "filled" : ""} />
          ))}
        </div>
        <div className="dissection">
          <span className="small-label">THE DISSECTION</span>
          <p>
            Only your information changes. The speakers use the same words in
            both modes. Advance knowledge turns delay into risk; the final
            disclosure either surprises you or resolves an anticipated threat.
          </p>
        </div>
        <p className="experiment-note">
          Based on Hitchcock’s thought experiment, recorded in Truffaut’s
          interviews. Original dialogue and illustration. This is not a scene
          from a particular film.
        </p>
      </div>
    </div>
  );
}
function Range({
  label,
  value,
  onChange,
  min = 0,
  max = 100,
  ends = ["LESS", "MORE"],
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  min?: number;
  max?: number;
  ends?: string[];
}) {
  const id = label.toLowerCase().replaceAll(" ", "-");
  return (
    <label className="range-field" htmlFor={id}>
      <span>
        {label}
        <output>{value}</output>
      </span>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
      <span className="range-ends">
        <small>{ends[0]}</small>
        <small>{ends[1]}</small>
      </span>
    </label>
  );
}
function Tension() {
  const [values, setValues] = useState([65, 55, 55, 70, 45]);
  const labels = [
    "Anticipation of danger",
    "Uncertainty",
    "Delay before reveal",
    "Character vulnerability",
    "Audience information",
  ];
  const [a, u, d, v, info] = values;
  const intensity = Math.round(
    (a * 0.32 + v * 0.3 + u * 0.23 + (100 - Math.abs(info - 60)) * 0.15) *
      (0.6 + Math.min(d, 65) / 162),
  );
  const peak = 80 + d * 3.5;
  const height = 160 - intensity * 1.15;
  const path = `M30 170 C ${peak * 0.4} 170, ${peak * 0.6} ${height + 50}, ${peak} ${height} S ${peak + 30} 150, 470 167`;
  return (
    <div className="experiment-layout">
      <div className="tension-display">
        <span className="small-label">
          A NARRATIVE SKETCH, NOT A MEASUREMENT
        </span>
        <svg
          viewBox="0 0 500 220"
          role="img"
          aria-label={`Illustrative tension curve, relative intensity ${intensity} of 100`}
        >
          <defs>
            <linearGradient id="curveFill" x2="0" y2="1">
              <stop stopColor="#9e6052" stopOpacity=".4" />
              <stop offset="1" stopColor="#9e6052" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[40, 80, 120, 160].map((y) => (
            <path key={y} d={`M30 ${y}H470`} stroke="#343a30" />
          ))}
          <path d={`${path}L470 180H30Z`} fill="url(#curveFill)" />
          <path d={path} fill="none" stroke="#b77966" strokeWidth="2.5" />
          <circle cx={peak} cy={height} r="5" fill="#d1a18e" />
          <text x="30" y="210" fill="#939788" fontSize="10">
            SETUP
          </text>
          <text x="210" y="210" fill="#939788" fontSize="10">
            ANTICIPATION
          </text>
          <text x="418" y="210" fill="#939788" fontSize="10">
            RELEASE
          </text>
        </svg>
        <div className="tension-reading">
          <strong>
            {intensity}
            <small>/100</small>
          </strong>
          <span>
            ILLUSTRATIVE INTENSITY
            <br />
            NOT A VALIDATED PSYCHOLOGICAL SCORE
          </span>
        </div>
        <p aria-live="polite">
          {d > 75
            ? "A long delay risks stagnation. Add a changed condition or a moment of relief."
            : u > 75
              ? "High uncertainty can sustain unease, but confirm the stakes so the threat does not feel arbitrary."
              : info < 25
                ? "With little audience information, the scene leans toward mystery or surprise. Give one clue to invite anticipation."
                : v > 65
                  ? "Vulnerability gives the delay a cost. Let the character still make meaningful choices."
                  : "Tension depends on a possible outcome the audience values. Vary pressure instead of simply extending the scene."}
        </p>
      </div>
      <div className="experiment-controls">
        <span className="small-label crimson">
          EXPERIMENT 003 / THE SHAPE OF WAITING
        </span>
        <h3>Compose the pressure.</h3>
        <p>
          Imagine a character trying to unlock a door while footsteps approach.
          Change the conditions of their wait.
        </p>
        {labels.map((label, i) => (
          <Range
            key={label}
            label={label}
            value={values[i]}
            onChange={(n) =>
              setValues((x) => x.map((val, j) => (i === j ? n : val)))
            }
          />
        ))}
        <p className="experiment-note">
          An intentionally simplified teaching model. Slider relationships and
          numbers are authored illustrations, not empirical predictions. Longer
          does not automatically mean more suspense.
        </p>
      </div>
    </div>
  );
}
function Humanoid({ offset = 0 }: { offset?: number }) {
  return (
    <g stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round">
      <ellipse cx={100 + offset * 0.13} cy="45" rx="15" ry="20" />
      <path
        d={`M${100 + offset * 0.1} 67L${100 - offset * 0.15} 141M100 82L${67 - offset * 0.3} ${115 + offset * 0.2}L${60 + offset * 0.15} 150M100 82L${132 + offset * 0.5} 114L${139 + offset * 0.4} 149M100 141L${77 - offset * 0.2} 194L${71 - offset * 0.5} 236M100 141L${122 + offset * 0.1} 193L${130 + offset * 0.6} 236`}
      />
    </g>
  );
}
function Movement() {
  const [vals, setVals] = useState([45, 75, 20, 35, 25]);
  const [running, setRunning] = useState(false);
  const [phase, setPhase] = useState(0);
  const reduced = useReducedMotion();
  const ref = useRef(0);
  useEffect(() => {
    if (!running) return;
    const timer = setInterval(() => {
      ref.current += 1;
      setPhase(ref.current % 5);
    }, 700);
    return () => clearInterval(timer);
  }, [running]);
  const [speed, smooth, pauses, irregularity, asymmetry] = vals;
  const x = [0, 12, -4, 18, 0][phase] * (irregularity / 45);
  return (
    <div className="experiment-layout">
      <div className="movement-display">
        <span className="small-label">
          ORIGINAL ABSTRACT FIGURES / NO FILM FOOTAGE
        </span>
        <div className="figures">
          <div>
            <svg
              viewBox="0 0 200 280"
              role="img"
              aria-label="Ordinary, symmetrical human figure"
            >
              <motion.g
                animate={
                  running && !reduced
                    ? { y: [0, -5, 0], rotate: [-1, 1, -1] }
                    : { y: 0, rotate: 0 }
                }
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Humanoid />
              </motion.g>
              <path d="M25 250H175" stroke="#49513f" />
            </svg>
            <span>BASELINE</span>
          </div>
          <div>
            <svg
              viewBox="0 0 200 280"
              role="img"
              aria-label={`Modified figure with ${asymmetry} percent posture asymmetry`}
            >
              <motion.g
                animate={
                  running && !reduced
                    ? {
                        x,
                        y: phase === 2 && pauses > 40 ? -12 : 0,
                        rotate: x / 3,
                      }
                    : { x: 0, y: 0, rotate: 0 }
                }
                transition={{
                  duration: Math.max(0.1, (100 - speed) / 70),
                  ease: smooth > 50 ? "easeInOut" : "linear",
                  delay: phase === 2 ? pauses / 150 : 0,
                }}
              >
                <Humanoid offset={asymmetry} />
              </motion.g>
              <path d="M25 250H175" stroke="#49513f" />
            </svg>
            <span>MODIFIED</span>
          </div>
        </div>
        <button
          className="button button-outline"
          onClick={() => setRunning(!running)}
        >
          {running ? <Pause size={14} /> : <Play size={14} />}{" "}
          {running ? "Pause comparison" : "Run comparison"}
        </button>
        {reduced && (
          <p className="experiment-note">
            Reduced motion is active. Compare the static posture; temporal
            changes are disabled.
          </p>
        )}
        <p>
          Watch the relationship between the head, torso, and limbs—not just the
          speed.
        </p>
      </div>
      <div className="experiment-controls">
        <span className="small-label crimson">
          EXPERIMENT 004 / THE BODY’S GRAMMAR
        </span>
        <h3>Break one expectation.</h3>
        {[
          "Movement speed",
          "Smoothness",
          "Pauses",
          "Timing irregularity",
          "Posture asymmetry",
        ].map((label, i) => (
          <Range
            key={label}
            label={label}
            value={vals[i]}
            onChange={(n) => setVals((x) => x.map((v, j) => (i === j ? n : v)))}
          />
        ))}
        <div className="dissection">
          <span className="small-label">THE DISSECTION</span>
          <p>
            {asymmetry > 60
              ? "A recognizable body is now organized around unequal limb positions. Compare this with a symmetrical baseline before deciding how it feels."
              : irregularity > 60
                ? "Timing becomes harder to predict when adjacent movements do not share a rhythm. That mismatch, rather than slowness alone, is the experiment."
                : "A recognizable baseline makes deviations legible. Increase one control at a time to identify the relationship that changes your response."}{" "}
            Perceptual responses vary; this is a design demonstration, not a
            diagnostic test.
          </p>
        </div>
      </div>
    </div>
  );
}
function Face() {
  const [vals, setVals] = useState([35, 10, 30, 30, 15]);
  const [baseline, setBaseline] = useState(false);
  const [eyes, symmetry, expression, skin, alignment] = baseline
    ? [35, 0, 30, 30, 0]
    : vals;
  return (
    <div className="experiment-layout">
      <div className="face-display">
        <span className="small-label">
          ORIGINAL ILLUSTRATION / NOT A FILM CHARACTER
        </span>
        <svg
          viewBox="0 0 400 400"
          role="img"
          aria-label={
            baseline
              ? "Baseline illustrated face"
              : "Illustrated face with adjustable eye proportions, symmetry, expression, skin, and alignment"
          }
        >
          <defs>
            <radialGradient id="faceSkin">
              <stop stopColor={`hsl(44 10% ${60 - skin * 0.17}%)`} />
              <stop offset="1" stopColor="#282e26" />
            </radialGradient>
          </defs>
          <ellipse cx="200" cy="190" rx="104" ry="144" fill="url(#faceSkin)" />
          <path
            d="M200 46Q320 70 300 220L238 330L200 334Z"
            fill="#111c16"
            opacity=".36"
          />
          <g fill="#171e17">
            <ellipse
              cx="157"
              cy="168"
              rx={16 + eyes * 0.12}
              ry={6 + eyes * 0.13}
            />
            <ellipse
              cx={243 + alignment * 0.12}
              cy={168 + alignment * 0.14}
              rx={16 + eyes * 0.12}
              ry={6 + eyes * 0.13}
            />
          </g>
          <g fill="#777e66">
            <circle cx="158" cy="168" r="6" />
            <circle
              cx={242 + alignment * 0.12}
              cy={168 + alignment * 0.14}
              r="6"
            />
          </g>
          <g stroke="#323d2c" strokeWidth="5" fill="none">
            <path
              d={`M126 145Q154 ${124 + symmetry * 0.15} 183 145M218 145Q247 ${124 - symmetry * 0.2} 274 145`}
            />
            <path d="M201 179L188 225L209 229" />
            <path
              d={`M156 ${270 - expression * 0.23}Q200 ${255 + expression * 0.36} ${243 + symmetry * 0.08} ${270 - expression * 0.35}`}
            />
          </g>
          {Array.from({ length: 40 }, (_, i) => (
            <circle
              key={i}
              cx={126 + ((i * 37) % 150)}
              cy={105 + ((i * 19) % 170)}
              r={skin / 70}
              fill="#c2bea4"
              opacity={skin / 180}
            />
          ))}
        </svg>
        <button
          className="button button-outline"
          aria-pressed={baseline}
          onClick={() => setBaseline(!baseline)}
        >
          {baseline ? "Return to modified face" : "Compare with baseline"}
        </button>
        <p>
          {baseline
            ? "A consistent starting point for comparison."
            : "Change one feature at a time. Does the face feel less familiar, or merely different?"}
        </p>
      </div>
      <div className="experiment-controls">
        <span className="small-label crimson">
          EXPERIMENT 005 / PERCEPTUAL EXPECTATIONS
        </span>
        <h3>Almost familiar.</h3>
        {[
          "Eye proportions",
          "Facial asymmetry",
          "Expression",
          "Skin texture",
          "Feature misalignment",
        ].map((label, i) => (
          <Range
            key={label}
            label={label}
            value={vals[i]}
            onChange={(n) => {
              setBaseline(false);
              setVals((x) => x.map((v, j) => (i === j ? n : v)));
            }}
          />
        ))}
        <p className="experiment-note">
          The uncanny valley is a hypothesis, not a universal response curve.
          Visible difference does not imply danger or character. This lab
          explores cue consistency, not a standard of normal appearance.
        </p>
      </div>
    </div>
  );
}
