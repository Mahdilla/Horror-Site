export type Lesson = {
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  intro: string;
  experiment: string;
  understand: string[];
  study: string[];
  deconstruct: string[];
  apply: string[];
  prompt: string;
  example: string;
  sources: string[];
};
export const sources = {
  mori: {
    label:
      "Mori, M. (1970/2012). The Uncanny Valley. IEEE Robotics & Automation Magazine, 19(2), 98–100.",
    href: "https://doi.org/10.1109/MRA.2012.2192811",
    note: "The original hypothesis, translated by MacDorman and Kageki; not a universal law.",
  },
  review: {
    label:
      "Kätsyri et al. (2015). A review of empirical evidence on different uncanny valley hypotheses. Frontiers in Psychology, 6, 390.",
    href: "https://doi.org/10.3389/fpsyg.2015.00390",
    note: "Reviews competing accounts; perceptual mismatch has support, but effects depend on stimuli and methods.",
  },
  anxiety: {
    label:
      "Grupe & Nitschke (2013). Uncertainty and anticipation in anxiety. Nature Reviews Neuroscience, 14, 488–501.",
    href: "https://doi.org/10.1038/nrn3524",
    note: "Research on anxiety and uncertain threat; applying it to fiction is an interpretation, not a direct experimental result.",
  },
  suspense: {
    label:
      "Lehne & Koelsch (2015). Toward a general psychological model of tension and suspense. Frontiers in Psychology, 6, 79.",
    href: "https://doi.org/10.3389/fpsyg.2015.00079",
    note: "A theoretical model connecting conflict, instability, expectation, and prediction.",
  },
  hitchcock: {
    label:
      "Truffaut, F. (1966; revised edition 1985). Hitchcock. Simon & Schuster.",
    href: "https://www.simonandschuster.com/books/Hitchcock/Francois-Truffaut/9780671604295",
    note: "Primary interview source for the bomb-under-the-table explanation. Our dialogue and drawings are original.",
  },
  pulse: {
    label: "Pulse / Kairo (2001), directed by Kiyoshi Kurosawa.",
    href: "https://www.imdb.com/title/tt0286751/",
    note: "Primary work for the movement analysis. Interpretive commentary; diagrams are conceptual, not film frames.",
  },
  others: {
    label: "The Others (2001), directed by Alejandro Amenábar.",
    href: "https://www.imdb.com/title/tt0230600/",
    note: "Primary work. The alternative reply used in this archive is hypothetical and is not a quotation from the film.",
  },
  obsession: {
    label: "Obsession — official film information, Focus Features.",
    href: "https://www.focusfeatures.com/obsession",
    note: "Curry Barker; 2026 release identified by the project owner. Official page could not be retrieved during implementation; scene details remain unverified.",
  },
};
export const concepts: Lesson[] = [
  {
    slug: "the-uncanny",
    number: "01",
    title: "The uncanny valley",
    subtitle: "Almost human. Not quite right.",
    category: "PERCEPTION",
    intro:
      "Recognition offers a promise: this is a person. A small contradiction can make that promise difficult to trust.",
    experiment: "movement",
    understand: [
      "Masahiro Mori proposed that affinity for a humanlike entity may drop as it approaches, but fails to attain, convincing human likeness. This “valley” is a hypothesis about responses to particular representations, not a reliable scale for every face or viewer. Empirical findings vary with the stimuli, measures, and context.",
      "One explanatory account is perceptual mismatch: realistic eyes paired with implausible skin, or a familiar body with incompatible motion, create conflicting cues. Predictive processing offers a useful theoretical lens—we anticipate coherent human behavior and notice a violation—but it is not a complete, established explanation of every uncanny response.",
      "An expression held too long, a smile arriving before the eyes change, or a head turning independently of the shoulders can disturb familiar expectations. Makeup and prosthetics work through relationships between features, lighting, texture, and performance; no isolated feature guarantees fear. Do not equate visible difference, disability, or unfamiliar faces with danger.",
    ],
    study: [
      "In Pulse (Kairo, 2001), a ghost encounter makes the human silhouette itself uncertain. Our reading emphasizes the contrast between a recognizable approach and disrupted bodily rhythm. The film’s restraint leaves room to inspect the movement rather than immediately classifying a monster.",
      "Mary Shelley’s Frankenstein also distinguishes an observer’s reaction to appearance from the being’s moral character. For writers, that distinction matters: an unsettling viewpoint need not be the story’s objective judgment.",
    ],
    deconstruct: [
      "Establish a bodily rule before breaking it: footsteps match weight, a glance precedes a turn, and a smile changes several muscles together. Then change one relationship. If everything is strange at once, there is no familiar baseline to violate.",
      "Lighting can obscure the information that would settle an expression. Hold the viewpoint at a distance where the reader cannot decide whether a detail was seen correctly. Uncertainty, rather than an inventory of deformities, does the work.",
    ],
    apply: [
      "Describe a sequence, not a label. Replace “she moved creepily” with an observable disagreement between intention and motion. Let a familiar gesture end in an unfamiliar way.",
      "Use one precise anomaly, followed by a character’s ordinary attempt to explain it. Leave the explanation provisional. A subtle contradiction can outlast a paragraph of monstrous description.",
    ],
    prompt:
      "Describe someone crossing a room. Make one part of their movement violate expectation. Do not use “creepy,” “scary,” or “unnatural.”",
    example:
      "She took three careful steps. Her reflection took four. Then both of them stopped.",
    sources: ["mori", "review"],
  },
  {
    slug: "subverted-expectations",
    number: "02",
    title: "Subverted expectations",
    subtitle: "The danger was there all along.",
    category: "NARRATIVE",
    intro:
      "A frightening reveal does more than add information. It changes the meaning of information we already had.",
    experiment: "breathing",
    understand: [
      "Audiences actively assign causes to sensations: a creak is the house settling; breathing belongs to the person beside us. A story can encourage a plausible cause, then remove it without providing a reassuring replacement. The earlier sensation remains, but now demands a different explanation.",
      "This is retroactive reinterpretation. Its force comes from a fair relationship between the original clue and the revelation. A twist that contradicts established facts can feel arbitrary. A twist that exposes an unexamined assumption invites the audience to reconstruct the scene.",
    ],
    study: [
      "Our alternative to the closet exchange associated with The Others (2001) is explicitly hypothetical: Girl: “Stop breathing like that.” Boy: “That isn’t me breathing.” This reply is not dialogue from the actual film. It is an original teaching variation.",
      "The first line encourages a two-person model of the scene. The second removes the boy as the cause of the sound. An unseen third presence becomes possible without any new image. The audience supplies the threatening explanation.",
    ],
    deconstruct: [
      "1. Establish two children in an enclosed space. 2. Introduce breathing with no confirmed source. 3. Let one child attribute it to the other. 4. Deny that attribution. 5. Hold on the absence of an explanation.",
      "The key distinction is between an assumption and a fact. If a narrator confirms that the boy is breathing, denying it later is a continuity problem unless the narrator’s unreliability has been established.",
    ],
    apply: [
      "Plant a sensory fact that supports at least two causes. Encourage the ordinary cause through context rather than an authoritative explanation. Then disqualify it.",
      "Delay the next piece of information long enough for the reader to make the inference. Explaining the creature immediately can close the interpretive space you just opened.",
    ],
    prompt:
      "Write four lines of dialogue in which an ordinary sound acquires a threatening new source. Keep the source unseen.",
    example:
      "“Your phone keeps buzzing.”\n“It’s downstairs.”\nThe vibration came again, from inside the wall.",
    sources: ["suspense", "others"],
  },
  {
    slug: "building-tension",
    number: "03",
    title: "Building & releasing tension",
    subtitle: "Make the waiting mean something.",
    category: "PACING",
    intro:
      "A long scene is not necessarily a tense scene. Suspense needs a valued outcome that remains unresolved.",
    experiment: "tension",
    understand: [
      "Tension involves anticipation, competing possibilities, and emotional investment. A character’s goal gives the audience an outcome to care about; an obstacle makes it uncertain. Theoretical models of suspense emphasize instability and prediction, not simply elapsed time.",
      "Delay works when it changes what could happen. A key catches in a lock; a light stops working; a character must choose between silence and speed. Repeating an unchanged threat may lead to habituation or impatience. Variation renews attention.",
      "Silence and negative space can direct attention toward an expected event. They are effective in relation to a baseline: a sudden absence of a familiar sound can carry more information than continuous ominous noise.",
    ],
    study: [
      "Hitchcock’s table example gives ordinary conversation a second meaning because the audience anticipates a danger the characters cannot see. A slow approach in Pulse offers another form of delay: the visible event is simple, but its implications stay unresolved.",
      "A false alarm briefly releases one prediction. It is most useful when it also changes the situation or exposes vulnerability. Repeated harmless noises with no consequence can teach the audience to disengage.",
    ],
    deconstruct: [
      "Separate the scene into promise, complication, provisional relief, and renewed pressure. Each beat should alter a possible outcome. Let a temporary success carry a cost: the door opens, but the sound stops.",
      "Vulnerability makes stakes concrete. A sleeping child, an injured hand, or a need to remain quiet can make an ordinary task precarious. Avoid treating vulnerability as helplessness in every beat; meaningful choices sustain investment.",
    ],
    apply: [
      "Before extending a scene, identify what the reader is waiting to learn. Change a condition during the delay. Release one uncertainty while preserving another.",
      "A reveal can release tension, transform it into immediate danger, or expose a larger question. Choose deliberately. A chapter ending does not have to increase intensity if the reader needs room to recover.",
    ],
    prompt:
      "Turn “She opened the door and saw someone” into five beats of suspense, including one temporary release.",
    example:
      "The key turned. Relief. Then the chain caught. She had never installed a chain on this side.",
    sources: ["suspense", "anxiety"],
  },
  {
    slug: "fear-of-the-unseen",
    number: "04",
    title: "Fear of the unseen",
    subtitle: "An empty room is never quite empty.",
    category: "UNCERTAINTY",
    intro:
      "An implied threat creates a question the audience cannot safely finish answering.",
    experiment: "breathing",
    understand: [
      "A partial cue invites mental completion: a sound implies a source; a gaze implies something looked at. Horror can leave the source unresolved while making its consequences increasingly specific. Imagination is not always scarier than an image, but ambiguity permits several threatening interpretations at once.",
      "Research links uncertain threat with anticipatory anxiety. Applying this to a fictional offscreen presence is a creative interpretation of that research. Viewers differ, and some find clear threats more affecting than ambiguous ones.",
      "Uncertainty needs boundaries. A disturbance with no possible relation to the character may feel meaningless. Establish where the sound could be, what the character cannot check, and what would be lost by checking.",
    ],
    study: [
      "The hypothetical breathing exchange removes the reassuring attribution of an ordinary sound. Its effectiveness depends on the closeness of the unseen source. A similar principle appears in games when an audio cue gives direction without confirming distance.",
      "Darkness is useful because it limits inspection, not because black pixels are intrinsically frightening. A lit corridor with one door beyond the viewpoint can create a more precise unseen space than an entirely dark room.",
    ],
    deconstruct: [
      "Map the scene into visible, inferred, and inaccessible spaces. Give the reader one dependable landmark. Move a sound relative to it. When the sound is suddenly closer without an intervening footstep, the missing event becomes significant.",
      "The feeling of being observed can emerge from a response: a light goes out only when the character looks away. Keep the pattern consistent enough to invite an inference, but avoid declaring a watcher before the scene earns it.",
    ],
    apply: [
      "Describe the effect before the cause. A mattress depresses. A conversation stops. Something interrupts a beam of light. Let the character choose whether to investigate.",
      "Do not indefinitely withhold every answer. Confirm enough consequences to show that the threat matters. Leave uncertainty about identity or intention rather than uncertainty about whether the story has stakes at all.",
    ],
    prompt:
      "Create dread in a well-lit room without showing a monster or switching the lights off.",
    example:
      "Every chair faced the window except hers. When she returned with the tea, hers did too.",
    sources: ["anxiety", "suspense"],
  },
  {
    slug: "dramatic-irony",
    number: "05",
    title: "Dramatic irony",
    subtitle: "You know. They don’t.",
    category: "AUDIENCE KNOWLEDGE",
    intro:
      "Horror is not always about what happens. Sometimes it is about what the audience knows might happen.",
    experiment: "bomb",
    understand: [
      "Dramatic irony is a gap between audience knowledge and character knowledge. When the audience understands a danger that the characters do not, harmless choices become consequential. Asking for another cup of tea can become a decision to remain in danger.",
      "In Hitchcock’s bomb-under-the-table thought experiment, an unannounced explosion produces surprise. Showing the bomb before the conversation allows the audience to anticipate it. The conversation can remain identical while its emotional meaning changes.",
      "Information alone is insufficient: the audience must care about an outcome, perceive a plausible threat, and remain uncertain about its resolution. Even a known outcome can sustain suspense through uncertainty about how and when it will occur.",
    ],
    study: [
      "Hitchcock explained the table example in interviews with François Truffaut. Our version is an original conceptual reconstruction, not a scene from a particular Hitchcock film. Both versions use exactly the same conversation.",
      "A game may show a player a threat through a camera feed while a companion walks toward it. A novel may alternate viewpoints to let the reader connect clues that no single character possesses. These are applications of information asymmetry.",
    ],
    deconstruct: [
      "Track three columns: what the protagonist knows, what the audience knows, and what neither knows. Give the audience one useful advantage, not omniscience. Then let the protagonist make a reasonable decision based on incomplete information.",
      "Audience helplessness comes from understanding what should change without being able to make it change. Stretching this indefinitely can become frustrating. Introduce credible opportunities for discovery or escape.",
    ],
    apply: [
      "Keep ordinary dialogue ordinary. Its new meaning comes from context. If every line winks at the danger, the characters can begin to seem implausibly oblivious.",
      "Choose the point at which the information gap closes. Discovery can release suspense or turn it into a new problem: they find the bomb but cannot leave without someone else.",
    ],
    prompt:
      "Write a conversation about an everyday subject. Give the reader one fact that makes staying in the room dangerous, while keeping the speakers unaware.",
    example:
      "Before they sat down, the reader saw the wet paint on the emergency exit. Now he was explaining why they should stay for dessert.",
    sources: ["hitchcock", "suspense"],
  },
];
export type CaseStudy = {
  slug: string;
  number: string;
  title: string;
  year: string;
  director: string;
  tag: string;
  summary: string;
  art: "corridor" | "closet" | "table" | "face";
  concept: string;
  sections: { title: string; text: string }[];
  beats: {
    label: string;
    sensory: string;
    character: string;
    audience: string;
    assumption: string;
    technique: string;
    change: string;
    lesson: string;
  }[];
  sources: string[];
};
export const cases: CaseStudy[] = [
  {
    slug: "pulse",
    number: "01",
    title: "Pulse",
    year: "2001",
    director: "Kiyoshi Kurosawa",
    tag: "THE UNCANNY IN MOTION",
    summary: "A familiar silhouette. A movement that refuses to be human.",
    art: "corridor",
    concept: "the-uncanny",
    sections: [
      {
        title: "A body you cannot quite read",
        text: "In the ghost encounter in Kairo, a humanlike figure approaches with an unsettling bodily rhythm. This analysis treats the figure’s recognizability as essential: an ordinary-looking body establishes expectations of balance and intention. The movement disrupts those expectations without replacing the body with an easily classified creature.",
      },
      {
        title: "Slow does not mean safe",
        text: "A deliberate approach gives the spectator time to look. Instead of using speed to overwhelm perception, the sequence makes observation itself uncomfortable. Our interpretation is that pauses and changes in balance interrupt an otherwise legible action. This is a critical reading, not a measured claim about every viewer’s response.",
      },
      {
        title: "Space does part of the work",
        text: "The figure does not need to fill the image to dominate it. Unoccupied space allows the approach to become an event before proximity becomes a threat. Visual ambiguity leaves the spectator checking whether the bodily disturbance was as strange as it first appeared. Minimalism concentrates attention on a small number of cues.",
      },
      {
        title: "Translate it into prose",
        text: "Establish an ordinary gait, then disrupt one relationship: the torso arrives before the feet appear ready; a pause occurs where balance seems to require motion. Keep the description anchored to a witness and avoid cataloguing impossible anatomy. The writer’s tool is the order in which a gesture becomes understandable.",
      },
    ],
    beats: [
      {
        label: "Recognition",
        sensory: "An abstract human figure is visible at a distance.",
        character: "Someone—or something—is present.",
        audience: "A familiar outline is available, but intent is unknown.",
        assumption: "A human body will move with familiar timing.",
        technique: "Baseline / negative space",
        change: "Distance becomes a space that could be crossed.",
        lesson: "Give the reader a stable expectation before violating it.",
      },
      {
        label: "Approach",
        sensory: "The figure begins moving; the surrounding space stays still.",
        character: "The distance is closing.",
        audience: "There is time to inspect the movement.",
        assumption: "Each step will resolve into the next.",
        technique: "Anticipation / delay",
        change: "Waiting becomes an active part of the encounter.",
        lesson: "A small action can support dread when its outcome matters.",
      },
      {
        label: "Disruption",
        sensory: "Our conceptual figure pauses off-balance, then resumes.",
        character: "The movement resists a reassuring explanation.",
        audience: "The outline is familiar; its timing is not.",
        assumption: "Appearance and movement will agree.",
        technique: "Perceptual mismatch",
        change: "The category “person” no longer settles the scene.",
        lesson: "Make the contradiction precise and leave its meaning open.",
      },
    ],
    sources: ["pulse", "mori", "review"],
  },
  {
    slug: "the-others",
    number: "02",
    title: "The Others",
    year: "2001",
    director: "Alejandro Amenábar",
    tag: "THE THREAT YOU CANNOT SEE",
    summary: "One reply changes everything you thought you heard.",
    art: "closet",
    concept: "subverted-expectations",
    sections: [
      {
        title: "A sound with an assumed owner",
        text: "The closet exchange provides a teaching premise: two children share a confined space, and breathing is attributed to one of them. This archive explores an alternative response rather than presenting a transcript or claiming to reproduce the film’s exact scene.",
      },
      {
        title: "The hypothetical alternative",
        text: "Girl: “Stop breathing like that.” Boy: “That isn’t me breathing.” The boy’s reply here is hypothetical, not actual film dialogue. Its narrative function is to cancel a cause while leaving its effect audible. The room now seems to contain more than the two people we counted.",
      },
      {
        title: "Reconstructing the room",
        text: "No creature needs to enter. The audience must revise a mental model: if neither child owns the breath, something else may already be nearby. The threat feels retrospective. The children may have been listening to it before they understood it.",
      },
      {
        title: "Let the inference land",
        text: "A writer can repeat a neutral sensory detail after its meaning changes. The breath can stay the same length and volume. The audience does the transformation. Naming an intruder immediately would answer the question at the very moment uncertainty becomes productive.",
      },
    ],
    beats: [
      {
        label: "Two children",
        sensory: "An original illustration suggests a closed, dark enclosure.",
        character: "They are hiding together.",
        audience: "Two people have been established.",
        assumption: "Nearby breathing belongs to one of them.",
        technique: "Ordinary attribution",
        change: "A neutral sound gains a plausible source.",
        lesson: "Let context suggest a cause without confirming it.",
      },
      {
        label: "The question",
        sensory: "“Stop breathing like that.”",
        character: "The girl assigns the sound to the boy.",
        audience: "The attribution matches the simplest explanation.",
        assumption: "He will apologize or quieten his breath.",
        technique: "Expectation",
        change: "The assumption is made explicit by a character.",
        lesson: "Dialogue can reveal the model the audience has adopted.",
      },
      {
        label: "The alternative",
        sensory: "Hypothetical reply: “That isn’t me breathing.”",
        character: "The boy denies being the source.",
        audience: "An unseen third presence becomes possible.",
        assumption: "Only the children occupy the enclosure.",
        technique: "Retroactive reinterpretation",
        change: "The same breath now suggests proximity and danger.",
        lesson: "Remove reassurance before adding explanation.",
      },
    ],
    sources: ["others", "suspense"],
  },
  {
    slug: "hitchcock",
    number: "03",
    title: "The bomb under the table",
    year: "A thought experiment",
    director: "Alfred Hitchcock",
    tag: "THE ARCHITECTURE OF SUSPENSE",
    summary: "Same conversation. Same room. One devastating difference.",
    art: "table",
    concept: "dramatic-irony",
    sections: [
      {
        title: "Two versions, one conversation",
        text: "Hitchcock’s famous example distinguishes an unexpected explosion from a conversation watched with prior knowledge of a hidden bomb. Our original table scene keeps character behavior identical. The experimental variable is what the spectator is told before the conversation.",
      },
      {
        title: "When the ordinary becomes urgent",
        text: "Without advance information, a discussion about tea is only a discussion about tea. With knowledge of the danger, every additional sentence consumes a possible chance to escape. This is dramatic irony: the audience understands a consequential fact the speakers do not.",
      },
      {
        title: "The audience cannot intervene",
        text: "The spectator’s advantage is informational, not practical. Knowing what ought to happen while being unable to make it happen can produce helpless anticipation. Emotional investment and credible stakes matter: a ticking device alone is not a substitute for characters worth caring about.",
      },
      {
        title: "Use the gap deliberately",
        text: "Reveal enough to establish the threat while leaving its resolution open. Maintain believable character behavior. Close or transform the gap before frustration replaces suspense. The concept can apply to a locked exit, a contaminated drink, or a message the protagonist has not read; it does not require an explosive device.",
      },
    ],
    beats: [
      {
        label: "Information",
        sensory:
          "In aware mode, the audience sees a diagram of the hidden danger.",
        character: "The room appears ordinary.",
        audience: "A threat is present in one mode; concealed in the other.",
        assumption: "A conversation is safe to continue.",
        technique: "Information asymmetry",
        change: "The audience has a reason to want the characters to leave.",
        lesson: "A small advantage in knowledge can change an entire scene.",
      },
      {
        label: "Conversation",
        sensory: "“Another cup?” / “Only if you’re having one.”",
        character: "There is no apparent reason to hurry.",
        audience: "Each line delays a possible escape in aware mode.",
        assumption: "Everyday courtesy has no serious cost.",
        technique: "Dramatic irony",
        change: "Ordinary dialogue acquires a second meaning.",
        lesson: "Let context do the work; preserve natural dialogue.",
      },
      {
        label: "Resolution",
        sensory: "A silent graphic marks the scene’s fictional outcome.",
        character: "The hidden danger becomes apparent.",
        audience:
          "Surprise or anticipated consequence, depending on prior knowledge.",
        assumption: "The scene could continue indefinitely.",
        technique: "Release",
        change: "The knowledge gap closes.",
        lesson: "Resolve or transform the question that sustained the wait.",
      },
    ],
    sources: ["hitchcock", "suspense"],
  },
  {
    slug: "obsession",
    number: "04",
    title: "Obsession",
    year: "2026 release · verification pending",
    director: "Curry Barker",
    tag: "THE ALMOST-FAMILIAR FACE",
    summary: "An inquiry into faces, familiarity, and perceptual doubt.",
    art: "face",
    concept: "the-uncanny",
    sections: [
      {
        title: "What is verified—and what is not",
        text: "The project owner identified the requested film as Curry Barker’s Obsession (2026 release). The official distributor page could not be retrieved during implementation, and the requested bedroom scene has not been independently verified. No scene-specific action, makeup detail, shot, or quotation is asserted here. This entry is a research dossier, not a completed film analysis.",
      },
      {
        title: "An original study of facial expectations",
        text: "The face lab below is an original illustration, independent of the film. It varies feature alignment, eye proportions, symmetry, surface treatment, and expression to invite careful observation. These manipulations illustrate possible perceptual conflicts; they neither reproduce a performer nor predict a universal response.",
      },
      {
        title: "Uncanny is not the same as grotesque",
        text: "Grotesque imagery may announce its departure from ordinary anatomy. Uncanny discomfort can instead preserve recognizability while introducing a conflict between familiar cues. Lighting and framing influence how readily a viewer can resolve that conflict. This is a general design distinction, not a claim about this film’s bedroom scene.",
      },
      {
        title: "Research required before publication as an analysis",
        text: "Confirm the release metadata against a retrievable distributor source, view the identified bedroom sequence, and record the actual lighting, framing, facial performance, and makeup. Separate directly observable features from interpretations of their effect. Until then, use the original lab and general writing exercise without attributing them to the film.",
      },
    ],
    beats: [
      {
        label: "Baseline",
        sensory: "An original illustrated face with aligned features.",
        character: "No film character is represented.",
        audience: "This is an educational diagram.",
        assumption: "The features belong to a coherent face.",
        technique: "Familiarity",
        change: "A baseline is available for comparison.",
        lesson: "Establish a coherent design before modifying a cue.",
      },
      {
        label: "Mismatch",
        sensory: "The lab offsets one eye and changes the expression.",
        character: "No film scene is reconstructed.",
        audience: "Individual visual cues can disagree.",
        assumption: "Expression and alignment will remain consistent.",
        technique: "Perceptual mismatch",
        change: "Recognition may feel less stable, depending on the viewer.",
        lesson: "Describe an observable relationship, not a “scary” face.",
      },
      {
        label: "Context",
        sensory: "A shadow obscures part of the original illustration.",
        character: "This is not an account of the bedroom scene.",
        audience: "Less information is available to settle the appearance.",
        assumption: "Inspection will explain the discrepancy.",
        technique: "Visual ambiguity",
        change: "Certainty is delayed rather than disproved.",
        lesson: "Distinguish what the narrator sees from what they infer.",
      },
    ],
    sources: ["obsession", "review", "mori"],
  },
];
export function getConcept(slug: string) {
  return concepts.find((c) => c.slug === slug);
}
export function getCase(slug: string) {
  return cases.find((c) => c.slug === slug);
}
