<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h1
      class="text-3xl md:text-4xl font-bold mb-12 text-center font-display bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent"
    >
      Workshop Series
    </h1>

    <!-- Category Filters -->
    <div class="mb-8">
      <div class="flex flex-wrap gap-2 justify-center">
        <button
          @click="activeCategory = ''"
          :class="[
            'px-4 py-2 rounded-full text-sm font-medium transition-all duration-300',
            !activeCategory
              ? 'bg-gray-900 text-white shadow-md'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200',
          ]"
        >
          All Workshops
        </button>
        <button
          v-for="category in uniqueCategories"
          :key="category"
          @click="activeCategory = category"
          :class="[
            'px-4 py-2 rounded-full text-sm font-medium transition-all duration-300',
            activeCategory === category
              ? getCategoryActiveStyle(category)
              : getCategoryInactiveStyle(category),
          ]"
        >
          {{ category }}
        </button>
      </div>
    </div>

    <!-- Workshop Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        v-for="workshop in filteredWorkshops"
        :key="workshop.slug"
        class="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden animate-fade-in border border-gray-100/40 backdrop-blur-sm"
      >
        <!-- Card Header with Emoji and Number -->
        <div class="p-6 border-b border-gray-100/60">
          <div class="flex items-center justify-between mb-4">
            <span
              class="text-4xl filter drop-shadow-sm transition-transform duration-300 group-hover:scale-110"
              >{{ workshop.emoji }}</span
            >
            <span
              class="text-sm font-medium text-gray-400 bg-gray-50 px-3 py-1 rounded-full"
              >Workshop {{ workshop.number }}/12</span
            >
          </div>
          <h3
            class="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-300"
          >
            {{ workshop.title }}
          </h3>
          <p class="text-gray-600 text-sm mb-4 leading-relaxed">
            {{ workshop.goal }}
          </p>
        </div>

        <!-- Card Content -->
        <div class="p-6 bg-gray-50/50">
          <!-- Core Ideas -->
          <div class="mb-4">
            <h4
              class="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3"
            >
              Core Ideas
            </h4>
            <ul class="space-y-2">
              <li
                v-for="(idea, idx) in workshop.coreIdeas"
                :key="idx"
                class="text-sm text-gray-600 flex items-start animate-slide-up"
                :style="{ animationDelay: `${idx * 100}ms` }"
              >
                <span
                  class="inline-block w-1.5 h-1.5 mt-1.5 mr-2 bg-primary-400 rounded-full"
                ></span>
                {{ idea }}
              </li>
            </ul>
          </div>

          <!-- Learn More Link -->
          <div class="mt-6 flex items-center justify-between">
            <!-- <router-link
              :to="{ name: 'WorkshopDetail', params: { slug: workshop.slug }}"
              class="text-primary-600 hover:text-primary-700 font-medium text-sm inline-flex items-center group/link"
            >
              Learn more
              <svg 
                class="w-4 h-4 ml-1 transform transition-transform duration-300 group-hover/link:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  stroke-linecap="round" 
                  stroke-linejoin="round" 
                  stroke-width="2" 
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </router-link> -->
            <span
              :class="[
                'px-3 py-1 rounded-full text-xs font-medium transition-colors duration-300',
                workshop.categoryColor,
              ]"
            >
              {{ workshop.category }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeCategory: "",
      categoryStyles: {
        Foundations: {
          active: "bg-blue-600 text-white shadow-md",
          inactive: "bg-blue-100 text-blue-700 hover:bg-blue-200",
        },
        "Self-Awareness": {
          active: "bg-purple-600 text-white shadow-md",
          inactive: "bg-purple-100 text-purple-700 hover:bg-purple-200",
        },
        "Critical Thinking": {
          active: "bg-indigo-600 text-white shadow-md",
          inactive: "bg-indigo-100 text-indigo-700 hover:bg-indigo-200",
        },
        "Decision Making": {
          active: "bg-green-600 text-white shadow-md",
          inactive: "bg-green-100 text-green-700 hover:bg-green-200",
        },
        Implementation: {
          active: "bg-yellow-600 text-white shadow-md",
          inactive: "bg-yellow-100 text-yellow-700 hover:bg-yellow-200",
        },
      },
      workshops: [
        {
          number: 1,
          emoji: "🤔",
          title: "Noticing Confusion",
          subtitle: "Turn confusion into a trailhead",
          goal: "Learn to catch the “Wait, what?” moments and use them as launch-pads for discovery.",
          coreIdeas: [
            "Confusion as a clue",
            "Intellectual honesty",
            "Noticing vs. ignoring",
          ],
          category: "Foundations",
          categoryColor: "bg-blue-100 text-blue-700",
          slug: "noticing-uncertainty",
        },
        {
          number: 2,
          emoji: "📊",
          title: "How Sure Are You? — Thinking in Bets & Bayes",
          subtitle: "Tuning your inner odds-maker",
          goal: "Practice stating priors, weighing evidence, and updating like a friendly Bayesian bookie.",
          coreIdeas: [
            "Priors and likelihoods",
            "Honest probability bets",
            "Calibration & fast updating",
          ],
          category: "Foundations",
          categoryColor: "bg-blue-100 text-blue-700",
          slug: "bets-and-bayes",
        },
        {
          number: 3,
          emoji: "🧠",
          title: "Catching Self-Deception",
          subtitle: "Spotting the stories that fool you",
          goal: "Notice the comfy narratives you protect and peek at what's really underneath.",
          coreIdeas: [
            "Emotional investment in beliefs",
            "Mental blind spots",
            "Clarity over comfort",
          ],
          category: "Self-Awareness",
          categoryColor: "bg-purple-100 text-purple-700",
          slug: "catching-self-deception",
        },
        {
          number: 4,
          emoji: "🔍",
          title: "Good Reasons & Rent-Paying Beliefs",
          subtitle: "Turning arguments into checkable predictions",
          goal: "Spot “evidence” that just sounds nice and rewrite claims so they cash out in observable results.",
          coreIdeas: [
            "Evidence quality",
            "Signal vs. noise",
            "Beliefs that risk being wrong",
          ],
          category: "Critical Thinking",
          categoryColor: "bg-indigo-100 text-indigo-700",
          slug: "good-reasons",
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
          category: "Decision Making",
          categoryColor: "bg-green-100 text-green-700",
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
          category: "Implementation",
          categoryColor: "bg-yellow-100 text-yellow-700",
          slug: "habit-formation",
        },
        {
          number: 7,
          emoji: "🛠️",
          title: "Planning Without the Lies",
          subtitle: "Planning that survives reality",
          goal: "Spot rosy assumptions, run a pre-mortem, and build plans with margin for chaos.",
          coreIdeas: [
            "Planning fallacy",
            "Mental rehearsal",
            "Pre-hindsight/Backplanning",
          ],
          category: "Implementation",
          categoryColor: "bg-yellow-100 text-yellow-700",
          slug: "realistic-planning",
        },
        {
          number: 8,
          emoji: "🔑",
          title: "Finding the Bottleneck",
          subtitle: "Hamming questions for leverage",
          goal: "Zero-in on the single constraint that, if solved, would move the whole project (or life area) forward.",
          coreIdeas: [
            "The Hamming question: “What’s the key obstacle?”",
            "Leverage vs. busywork",
            "Designing experiments to unblock progress",
          ],
          category: "Decision Making",
          categoryColor: "bg-green-100 text-green-700",
          slug: "finding-bottleneck",
        },
        {
          number: 9,
          emoji: "🧩",
          title: "Getting Unstuck",
          subtitle: "Listening to the voices inside",
          goal: "Give your inner parts airtime, resolve their tug-of-war, and get moving again.",
          coreIdeas: [
            "Inner clarity",
            "Internal disagreement",
            "Self-alignment",
          ],
          category: "Self-Awareness",
          categoryColor: "bg-purple-100 text-purple-700",
          slug: "internal-alignment",
        },
        {
          number: 10,
          emoji: "🗣️",
          title: "Arguing Without Breaking Things",
          subtitle: "Disagreeing without the wreckage",
          goal: "Stay curious under fire and leave conversations smarter than you entered.",
          coreIdeas: [
            "Listening generously",
            "Curiosity over correctness",
            "Navigating tension",
          ],
          category: "Communication",
          categoryColor: "bg-rose-100 text-rose-700",
          slug: "productive-disagreement",
        },
        {
          number: 11,
          emoji: "🌱",
          title: "Thinking Together",
          subtitle: "Thinking better together",
          goal: "Level-up group brains: surface dissent, share evidence, dodge echo chambers.",
          coreIdeas: [
            "Collective intelligence",
            "Reducing groupthink",
            "Mutual accountability",
          ],
          category: "Communication",
          categoryColor: "bg-rose-100 text-rose-700",
          slug: "group-rationality",
        },
        {
          number: 12,
          emoji: "🔄",
          title: "Integration & Reflection",
          subtitle: "Weaving it all into life",
          goal: "Look back, harvest what stuck, and design gentle reminders to keep growing.",
          coreIdeas: ["Reflection", "Integration", "Designing for continuity"],
          category: "Integration",
          categoryColor: "bg-teal-100 text-teal-700",
          slug: "integration",
        },
      ],
    };
  },
  computed: {
    filteredWorkshops() {
      if (!this.activeCategory) {
        return this.workshops;
      }
      return this.workshops.filter(
        (workshop) => workshop.category === this.activeCategory
      );
    },
    uniqueCategories() {
      return [
        ...new Set(this.workshops.map((workshop) => workshop.category)),
      ].sort();
    },
  },
  methods: {
    getCategoryActiveStyle(category) {
      return (
        this.categoryStyles[category]?.active ||
        "bg-gray-600 text-white shadow-md"
      );
    },
    getCategoryInactiveStyle(category) {
      return (
        this.categoryStyles[category]?.inactive ||
        "bg-gray-100 text-gray-700 hover:bg-gray-200"
      );
    },
  },
};
</script>
