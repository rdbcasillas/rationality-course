// Parse human-readable session dates like "Sunday, 28 September 2025"
// and return the earliest session's timestamp, or null if never held.
export function firstSessionTime(workshop) {
  if (!workshop.sessions || !workshop.sessions.length) return null;
  const months = {
    january: 0, february: 1, march: 2, april: 3, may: 4, june: 5,
    july: 6, august: 7, september: 8, october: 9, november: 10, december: 11,
  };
  const times = workshop.sessions
    .map((s) => {
      const m = /(\d{1,2})\s+([a-z]+)\s+(\d{4})/i.exec(s.date || "");
      if (!m || !(m[2].toLowerCase() in months)) return null;
      return new Date(+m[3], months[m[2].toLowerCase()], +m[1]).getTime();
    })
    .filter((t) => t !== null);
  return times.length ? Math.min(...times) : null;
}

// Held workshops first (by earliest session date), then upcoming (by number)
export function sortChronologically(list) {
  return [...list].sort((a, b) => {
    const dateA = firstSessionTime(a);
    const dateB = firstSessionTime(b);
    if (dateA !== null && dateB !== null) return dateA - dateB;
    if (dateA !== null) return -1;
    if (dateB !== null) return 1;
    return a.number - b.number;
  });
}

export const workshops = [
  {
    number: 1,
    emoji: "🤔",
    title: "Noticing Confusion",
    subtitle: "When something feels off",
    goal: "Learn to catch the 'Wait, what?' moments and use them to dig deeper.",
    coreIdeas: [
      "Confusion as a clue",
      "Heed the hunch",
      "Intellectual honesty",
    ],
    benefits: [
      "Paying attention to and naming the confusion",
      "Turn 'Something's off' into the first clue on a discovery trail",
    ],
    category: "Foundations",
    categoryColor: "bg-clay-100 text-clay-700",
    slug: "noticing-uncertainty",
    image: "/images/workshops/noticing-uncertainty.jpg",
    sessions: [
      {
        date: "Sunday, 28 September 2025",
        location: "Portal, Bangalore",
        lumaEvent: "https://luma.com/96tjjs6f",
      },
    ],
  },
  {
    number: 2,
    emoji: "📊",
    title: "Thinking in Bets & Bayes",
    subtitle: "Tuning your inner odds-maker",
    goal: "Quantify your intuitions and update your thinking when new facts come in.",
    coreIdeas: [
      "Priors and likelihoods",
      "Honest probability bets",
      "Calibration & fast updating",
    ],
    benefits: [
      "Put a number on hunches so choices feel less like coin-flips",
      "Check over-confidence before it trips you up",
    ],
    category: "Foundations",
    categoryColor: "bg-clay-100 text-clay-700",
    slug: "bets-and-bayes",
    image: "/images/workshops/bets-and-bayes.jpg",
    sessions: [
      {
        date: "Sunday, 26 October 2025",
        location: "Portal, Bangalore",
        lumaEvent: "https://luma.com/flbwbo49",
      },
    ],
  },
  {
    number: 3,
    emoji: "🧠",
    title: "Catching Self-Deception",
    subtitle: "Spotting the stories that fool you",
    goal: "Notice the comfortable narratives you protect and look at what's really underneath.",
    coreIdeas: [
      "Emotional investment in beliefs",
      "Mental blind spots",
      "Clarity over comfort",
    ],
    benefits: [
      "Spot the comfy stories you tell yourself before they steer you wrong",
      "Trace actions back to the real motives underneath",
    ],
    category: "Self-Awareness",
    categoryColor: "bg-sage-100 text-sage-700",
    slug: "catching-self-deception",
    image: "/images/workshops/catching-self-deception.jpg",
    sessions: [
      {
        date: "Sunday, 31 May 2026",
        location: "TreeHouse, Indiranagar, Bangalore",
        lumaEvent: "https://luma.com/4mgrntf2",
      },
      {
        date: "Sunday, 7 June 2026",
        location: "Online (Google Meet)",
        lumaEvent: "https://luma.com/mpddd55b",
      },
    ],
  },
  {
    number: 4,
    emoji: "🔍",
    title: "Is Your Evidence Any Good?",
    subtitle: "When good reasons rest on bad evidence",
    goal: "Spot 'evidence' that just sounds nice and rewrite claims so they turn into something measurable.",
    coreIdeas: [
      "Evidence quality",
      "Signal vs. noise",
      "Beliefs that risk being wrong",
    ],
    benefits: [
      "Separate solid evidence from nice-sounding fluff",
      "Test ideas against reality and drop the ones that flop",
    ],
    category: "Critical Thinking",
    categoryColor: "bg-warm-100 text-warm-700",
    slug: "good-reasons",
    image: "/images/workshops/good-reasons.jpg",
    sessions: [
      {
        date: "Saturday, 24 January 2026",
        location: "CSTEP, Bangalore",
        lumaEvent: "https://luma.com/ofunogez",
      },
      {
        date: "Sunday, 25 January 2026",
        location: "The Yard — Co-working Space, Bangalore",
        lumaEvent: "https://luma.com/vyyn3io2",
      },
      {
        date: "Sunday, 8 February 2026",
        location: "Vibrant Living Jubilee Hills — Shop & Café, Hyderabad",
        lumaEvent: "https://luma.com/aqfazuka",
        note: "Part of “An Afternoon of Rationality & AI”",
      },
    ],
  },
  {
    number: 5,
    emoji: "🎯",
    title: "Untangling Goals & Trade-offs",
    subtitle: "Figuring out what you actually want",
    goal: "Unpack clashing goals and pick the trade-offs you can live with.",
    coreIdeas: [
      "Digging below surface goals",
      "Resolving internal tensions",
      "Choosing wisely",
    ],
    benefits: [
      "Set goals that fit what you truly value, not what sounds good",
      "Make peace with trade-offs so you can act without lingering doubt",
    ],
    category: "Decision Making",
    categoryColor: "bg-clay-200 text-clay-800",
    slug: "goals-and-tradeoffs",
  },
  {
    number: 6,
    emoji: "🔁",
    title: "From Intention to Habit",
    subtitle: "Making tiny habits that stick",
    goal: "Swap vague intentions for cue-based micro-actions that run on autopilot.",
    coreIdeas: [
      "Behavior change",
      "Triggers and cues",
      "Consistency over willpower",
    ],
    benefits: [
      "Turn small cues into automatic, stick-around habits",
      "Automate the small stuff so your mental energy stays fresh for the decisions that truly matter.",
    ],
    category: "Implementation",
    categoryColor: "bg-sage-200 text-sage-800",
    slug: "habit-formation",
  },
  {
    number: 7,
    emoji: "🛠️",
    title: "Planning Without the Lies",
    subtitle: "Planning that survives reality",
    goal: "Catch over-optimistic assumptions, run a pre-mortem, and build plans with room for things to go wrong.",
    coreIdeas: [
      "Planning fallacy",
      "Mental rehearsal",
      "Pre-hindsight/Backplanning",
    ],
    benefits: [
      "Build plans that survive real-world bumps",
      "Avoid the trap of over-optimism and unrealistic timelines",
    ],
    category: "Implementation",
    categoryColor: "bg-sage-200 text-sage-800",
    slug: "realistic-planning",
    image: "/images/workshops/realistic-planning.jpg",
    sessions: [
      {
        date: "Saturday, 29 November 2025",
        location: "Portal, Bangalore",
        lumaEvent: "https://luma.com/edikvxcz",
      },
      {
        date: "Sunday, 30 November 2025",
        location: "Underline Center, Bangalore",
        lumaEvent: "https://luma.com/spma0b8u",
      },
    ],
  },
  {
    number: 8,
    emoji: "🔑",
    title: "Finding the Bottleneck",
    subtitle: "Hamming questions for leverage",
    goal: "Identify the one thing holding everything back that, if solved, would move the whole project (or life area) forward.",
    coreIdeas: [
      "The Hamming question: “What’s the key obstacle?”",
      "Leverage vs. busywork",
      "Designing experiments to unblock progress",
    ],
    benefits: [
      "Zero-in on the one blocker holding everything back",
      "Channel effort toward moves with the biggest payoff",
    ],
    category: "Decision Making",
    categoryColor: "bg-clay-200 text-clay-800",
    slug: "finding-bottleneck",
  },
  {
    number: 9,
    emoji: "🧩",
    title: "Getting Unstuck",
    subtitle: "Listening to the voices inside",
    goal: "Listen to your conflicting impulses, sort them out, and move forward.",
    coreIdeas: [
      "Inner clarity",
      "Internal disagreement",
      "Self-alignment",
    ],
    benefits: [
      "Decode procrastination so you can nudge yourself forward",
      "Turn inner tug-of-war into a clear, doable next step",
    ],
    category: "Self-Awareness",
    categoryColor: "bg-sage-100 text-sage-700",
    slug: "internal-alignment",
  },
  {
    number: 10,
    emoji: "🗣️",
    title: "Arguing Without Breaking Things",
    subtitle: "Disagreeing without the wreckage",
    goal: "Find the crux of disagreement, stay curious under fire, and leave conversations smarter than you entered.",
    coreIdeas: [
      "Double-crux",
      "Listening generously",
      "Curiosity over correctness",
    ],
    benefits: [
      "Hold tough conversations without damaging trust",
      "Replace quick comebacks with questions that actually change minds",
    ],
    category: "Communication",
    categoryColor: "bg-warm-200 text-warm-800",
    slug: "productive-disagreement",
    image: "/images/workshops/productive-disagreement.jpg",
    sessions: [
      {
        date: "Sunday, 8 March 2026",
        location: "Portal, Bangalore",
        lumaEvent: "https://luma.com/qt4l4tls",
      },
    ],
  },
  {
    number: 11,
    emoji: "🌱",
    title: "Thinking Together",
    subtitle: "Thinking better together",
    goal: "Think better as a group: steelman different views, discover assumptions, avoid confirmation bias.",
    coreIdeas: [
      "Collective intelligence",
      "Reducing groupthink",
      "Mutual accountability",
    ],
    benefits: [
      "Run meetings that surface honest dissent, not polite echoes",
      "Turn diverse viewpoints into sharper, shared decisions",
    ],
    category: "Communication",
    categoryColor: "bg-warm-200 text-warm-800",
    slug: "group-rationality",
  },
  {
    number: 12,
    emoji: "🔄",
    title: "Integration & Reflection",
    subtitle: "Weaving it all into life",
    goal: "Look back, harvest what stuck, and design gentle reminders to keep growing.",
    coreIdeas: ["Reflection", "Integration", "Designing for continuity"],
    benefits: [
      "Keep using the tools long after the series ends",
      "Build gentle reminders that nudge steady, lifelong growth",
    ],
    category: "Integration",
    categoryColor: "bg-clay-300 text-clay-900",
    slug: "integration",
  },
];
