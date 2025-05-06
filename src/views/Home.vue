<template>
  <div
    class="bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen text-gray-800"
  >
    <!-- Hero -->
    <header class="text-center py-16 px-4">
      <h1 class="text-5xl font-extrabold mb-4 tracking-tight">
        The Rationality Journey
      </h1>
      <p class="text-xl text-gray-600">
        A 12-session path to clearer thinking & intentional living
      </p>
    </header>

    <!-- Sessions -->
    <section class="max-w-4xl mx-auto px-6 py-10 space-y-8">
      <div
        v-for="(session, i) in sessions"
        :key="i"
        class="bg-white rounded-2xl border-l-4 border-blue-400 shadow-md p-6 hover:shadow-xl hover:scale-[1.01] transition duration-300 ease-in-out transform"
      >
        <div class="flex items-center mb-2">
          <span class="text-2xl mr-2">{{ session.icon }}</span>
          <h2 class="text-xl font-semibold leading-tight">
            {{ session.title }}
          </h2>
        </div>
        <p class="italic text-gray-500 mb-3">{{ session.goal }}</p>

        <div class="mb-2">
          <p class="font-medium text-gray-700 mb-1">Core ideas:</p>
          <ul class="list-disc ml-5 text-gray-700">
            <li v-for="(idea, j) in session.ideas" :key="j">{{ idea }}</li>
          </ul>
        </div>

        <div>
          <p class="font-medium text-gray-700 mb-1">Activities:</p>
          <ul class="list-disc ml-5 text-gray-700">
            <li v-for="(activity, k) in session.activities" :key="k">
              {{ activity }}
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Interest Form -->
    <section class="bg-slate-100 py-20 px-6">
      <InterestForm />
    </section>
  </div>
</template>

<script>
import InterestForm from "../components/InterestForm.vue";

export default {
  components: { InterestForm },
  data() {
    return {
      sessions: [
        {
          icon: "🧭",
          title: "1. When You’re Not Sure: Learning to Notice Uncertainty",
          goal: "Help participants tune into moments of confusion and use them as a signal to explore further.",
          ideas: [
            "Confusion as a clue",
            "Intellectual honesty",
            "Noticing vs. ignoring",
          ],
          activities: [
            "Spot the Fog: Participants recall recent decisions where they felt sure but turned out wrong",
            "Guided reflection: What does confusion feel like in the body?",
            "Mini-practice: Watch short video clips and pause when something feels “off”",
          ],
        },
        {
          icon: "📊",
          title: "2. How Sure Are You? Making Better Guesses About the World",
          goal: "Build better intuitions around confidence, uncertainty, and updating beliefs.",
          ideas: ["Being honestly unsure", "Matching confidence to reality"],
          activities: [
            "Guess & Gauge: Predict answers to questions, then rate confidence",
            "Calibrate: Plot over/underconfidence visually",
            "Debrief: Why do we overestimate our certainty? When is it useful to say “I don’t know”?",
          ],
        },
        {
          icon: "🧠",
          title: "3. Stories We Tell Ourselves: Catching Self-Deception",
          goal: "Train people to notice when they’re protecting a belief because it’s comfortable, not because it’s true.",
          ideas: [
            "Emotional investment in beliefs",
            "Mental blind spots",
            "Clarity over comfort",
          ],
          activities: [
            "The Disagreement That Got Under Your Skin: Reflect on a disagreement",
            "Practice: Reframe a belief you feel strongly about from the other side",
            "Group dialogue: Public vs. private belief defense",
          ],
        },
        {
          icon: "🔍",
          title: "4. What Counts as a Good Reason?",
          goal: "Teach participants to identify different types of reasons and whether they actually support a conclusion.",
          ideas: [
            "Evidence quality",
            "Signal vs. noise",
            "Being clear about “why”",
          ],
          activities: [
            "Strong or Weak?: Sort examples into good/bad reasons",
            "Exercise: Back up your opinion on a current issue with reasons",
            "Reflection: What “reasons” do we most easily fall for? Why?",
          ],
        },
        {
          icon: "🎯",
          title: "5. What Do You Really Want? Untangling Goals and Trade-offs",
          goal: "Help participants get clarity on what they truly care about and notice when their goals conflict.",
          ideas: [
            "Surface vs. deep goals",
            "Internal tensions",
            "Choosing wisely",
          ],
          activities: [
            "Why Do You Want That?: 5-whys exercise on a current goal",
            "Trade-off map: Visualize conflicting goals",
            "Group dialogue: Real-life goal conflicts",
          ],
        },
        {
          icon: "🔁",
          title: "6. From Intention to Habit: Designing Tiny Nudges That Stick",
          goal: "Teach how to turn vague good intentions into specific habits using natural cues and structure.",
          ideas: ["Behavior change", "Triggers", "Consistency over willpower"],
          activities: [
            "Reflect: Habit you failed to build — what got in the way?",
            "Cue-and-action practice: “When X happens, I’ll do Y”",
            "Group brainstorm: Small habit experiments",
          ],
        },
        {
          icon: "🛠️",
          title:
            "7. Planning Without the Lies: Seeing the Gaps Before They Hurt",
          goal: "Spot unrealistic expectations in plans and build more honest, flexible ones.",
          ideas: ["Planning fallacy", "Mental rehearsal", "Pre-hindsight"],
          activities: [
            "Plan Your Week: Build and evaluate a weekly plan",
            "Run a “pre-mortem”: Imagine failure, list reasons",
            "Group sharing: Recurring underestimations",
          ],
        },
        {
          icon: "🤔",
          title: "8. Choosing Well When the Stakes Are High",
          goal: "Offer tools to weigh tough decisions clearly, without falling into paralysis or anxiety.",
          ideas: [
            "Trade-offs",
            "Clarity under pressure",
            "Acting under uncertainty",
          ],
          activities: [
            "Value sort: What matters most in a specific decision?",
            "Two Futures: Visualize paths from A vs. B",
            "Pair practice: Swap dilemmas and ask clarifying questions",
          ],
        },
        {
          icon: "🧩",
          title: "9. Getting Unstuck: Listening to Yourself More Clearly",
          goal: "Untangle internal conflicts and self-sabotage by learning to hear different “parts” of yourself.",
          ideas: ["Inner clarity", "Internal disagreement", "Self-alignment"],
          activities: [
            "What’s Pulling Me?: Name voices in a torn decision",
            "Guided writing: Dialogue between two parts",
            "Partner exercise: Reflective listening",
          ],
        },
        {
          icon: "🗣️",
          title:
            "10. Arguing Without Breaking Things: Better Conversations with Disagreement",
          goal: "Teach how to disagree productively without defensiveness or derailment.",
          ideas: [
            "Generous listening",
            "Curiosity over correctness",
            "Tension navigation",
          ],
          activities: [
            "Reflect: When did a disagreement change your mind?",
            "Steelman First: Express another’s view better than they did",
            "Roleplay: Use dialogue norms in mock disagreements",
          ],
        },
        {
          icon: "🌱",
          title: "11. Thinking Together: Building Clarity in Groups",
          goal: "Show how rationality becomes stronger when practiced with others.",
          ideas: [
            "Collective intelligence",
            "Reducing groupthink",
            "Mutual accountability",
          ],
          activities: [
            "Group Truth Hunt: Teams evaluate claims with a checklist",
            "Circle norms: Notice dominance and silence",
            "Meta-checks: Did we actually think together?",
          ],
        },
        {
          icon: "🔄",
          title:
            "12. Living What You Learn: Integrating Rationality into Real Life",
          goal: "Reflect on the journey, notice shifts, and design ways to continue growing.",
          ideas: ["Reflection", "Integration", "Continuity"],
          activities: [
            "Timeline reflection: How has your thinking changed?",
            "What Stuck?: Pick 2 key ideas to carry forward",
            "Group ritual: One insight, one habit, one release",
          ],
        },
      ],
    };
  },
};
</script>
