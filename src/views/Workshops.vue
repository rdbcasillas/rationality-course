<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h1
      class="text-3xl md:text-4xl font-bold mb-6 text-center font-display text-clay-800 lowercase"
    >
      workshop series
    </h1>

    <!-- A/B Testing Note -->
    <div class="max-w-3xl mx-auto mb-12 text-center">
      <p
        class="text-clay-700 text-base font-normal bg-warm-100 px-6 py-4 rounded-sm border-l-4 border-warm-500 leading-relaxed"
      >
        <span class="text-warm-700">note:</span> we're experimenting with
        different workshop sequences in Bangalore and Hyderabad to discover
        which learning progression is most effective for developing rationality
        skills. Choose the toggle below based on your city.
      </p>
    </div>

    <!-- City Toggle -->
    <div class="mb-8">
      <div class="flex justify-center">
        <div class="bg-clay-100 p-1 rounded-sm border border-clay-200">
          <button
            @click="selectedCity = 'bangalore'"
            :class="[
              'px-6 py-2 rounded-sm text-sm font-medium transition-all duration-300 lowercase',
              selectedCity === 'bangalore'
                ? 'bg-white text-clay-900 shadow-sm border border-clay-200'
                : 'text-clay-600 hover:text-clay-900',
            ]"
          >
            Bangalore
          </button>
          <button
            @click="selectedCity = 'hyderabad'"
            :class="[
              'px-6 py-2 rounded-sm text-sm font-medium transition-all duration-300 lowercase',
              selectedCity === 'hyderabad'
                ? 'bg-white text-clay-900 shadow-sm border border-clay-200'
                : 'text-clay-600 hover:text-clay-900',
            ]"
          >
            Hyderabad
          </button>
        </div>
      </div>
    </div>

    <!-- Category Filters -->
    <div class="mb-8">
      <div class="flex flex-wrap gap-2 justify-center">
        <button
          @click="activeCategory = ''"
          :class="[
            'px-4 py-2 rounded-sm text-sm font-medium transition-all duration-300 lowercase',
            !activeCategory
              ? 'bg-clay-800 text-warm-100 border border-clay-700'
              : 'bg-clay-100 text-clay-600 hover:bg-clay-200 border border-clay-300',
          ]"
        >
          All Workshops
        </button>
        <button
          v-for="category in uniqueCategories"
          :key="category"
          @click="activeCategory = category"
          :class="[
            'px-4 py-2 rounded-sm text-sm font-medium transition-all duration-300 lowercase',
            activeCategory === category
              ? getCategoryActiveStyle(category)
              : getCategoryInactiveStyle(category),
          ]"
        >
          {{ category }}
        </button>
      </div>
    </div>

    <!-- Selection Helpers -->
    <div class="mb-6 max-w-3xl mx-auto text-center">
      <p class="text-clay-700 text-sm mb-3">
        mark interest on individual workshop, then submit from the floating
        button.
      </p>
      <div class="flex items-center justify-center gap-3">
        <button
          @click="addAllVisibleToCart"
          class="px-4 py-2 rounded-sm border border-clay-300 text-clay-700 hover:bg-clay-50 transition lowercase"
        >
          Add all
        </button>
        <button
          @click="removeAllVisibleFromCart"
          class="px-4 py-2 rounded-sm border border-clay-300 text-clay-700 hover:bg-clay-50 transition lowercase"
        >
          Remove all
        </button>
      </div>
    </div>

    <!-- Workshop Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        v-for="workshop in orderedWorkshops"
        :key="workshop.slug"
        class="group bg-warm-50 border-l-4 border-clay-400 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col"
      >
        <!-- Card Header -->
        <div class="p-4 border-b border-clay-200">
          <div class="flex items-start justify-between mb-2">
            <div class="flex-1">
              <div class="flex items-center gap-2 mb-2">
                <span
                  class="text-xs font-mono text-clay-600 bg-clay-100 px-2 py-1 rounded-sm"
                  >{{ getWorkshopNumber(workshop) }}/12</span
                >
                <span
                  :class="[
                    'px-2 py-1 rounded-sm text-xs font-medium',
                    workshop.categoryColor,
                  ]"
                >
                  {{ workshop.category.toLowerCase() }}
                </span>
              </div>
              <h3
                class="text-lg font-semibold text-clay-800 mb-1 font-serif leading-tight"
              >
                {{ workshop.title.toLowerCase() }}
              </h3>
              <p class="text-clay-600 text-sm leading-relaxed italic">
                {{ workshop.goal }}
              </p>
            </div>
          </div>
        </div>

        <!-- Card Content -->
        <div class="p-4 flex-1 flex flex-col">
          <!-- Core Ideas -->
          <div class="mb-4">
            <h4
              class="text-sm font-semibold text-clay-600 lowercase mb-3 font-mono"
            >
              core ideas
            </h4>
            <ul class="space-y-1">
              <li
                v-for="(idea, idx) in workshop.coreIdeas"
                :key="idx"
                class="text-sm text-clay-700 flex items-start"
              >
                <span class="inline-block w-1 h-1 mt-2 mr-3 bg-clay-400"></span>
                {{ idea }}
              </li>
            </ul>
          </div>

          <!-- Real-Life Benefits -->
          <div class="mb-4" v-if="workshop.benefits">
            <h4
              class="text-sm font-semibold text-clay-600 lowercase mb-3 font-mono"
            >
              skills you build
            </h4>
            <ul class="space-y-1">
              <li
                v-for="(benefit, idx) in workshop.benefits"
                :key="idx"
                class="text-sm text-clay-700 flex items-start"
              >
                <span class="inline-block w-1 h-1 mt-2 mr-3 bg-sage-400"></span>
                {{ benefit }}
              </li>
            </ul>
          </div>

          <!-- Interest Toggle -->
          <div class="mt-auto pt-4 border-t border-clay-200">
            <button
              @click="toggleCart(workshop)"
              :aria-label="
                isInCart(workshop) ? 'Marked as interested' : 'Mark interest'
              "
              :class="[
                'w-full py-2 px-3 text-sm font-medium transition-all duration-200 border rounded-sm flex items-center justify-center gap-2',
                isInCart(workshop)
                  ? 'bg-sage-100 text-sage-800 border-sage-300 hover:bg-sage-200'
                  : 'bg-warm-100 text-warm-800 border-warm-300 hover:bg-warm-200',
              ]"
            >
              <span class="text-base">
                {{ isInCart(workshop) ? "✓" : "+" }}
              </span>
              <span class="lowercase">
                {{ isInCart(workshop) ? "interested" : "mark interest" }}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Floating Cart -->
    <div v-if="cart.length > 0" class="fixed bottom-6 right-6 z-50">
      <button
        @click="openCheckout"
        class="bg-warm-600 hover:bg-warm-700 text-white rounded-sm p-3 shadow-md hover:shadow-lg transition-all duration-200 relative group border border-warm-700"
      >
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 11-4 0v-6m4 0V9a2 2 0 10-4 0v4.01"
          />
        </svg>
        <span
          class="absolute -top-2 -right-2 bg-clay-700 text-warm-100 text-xs rounded-sm h-5 w-5 flex items-center justify-center font-bold font-mono"
        >
          {{ cart.length }}
        </span>
        <span
          class="absolute right-full mr-3 bg-clay-800 text-warm-100 px-2 py-1 rounded-sm text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 lowercase font-mono"
        >
          view cart ({{ cart.length }}
          {{ cart.length === 1 ? "workshop" : "workshops" }})
        </span>
      </button>
    </div>

    <!-- Checkout Modal -->
    <div
      v-if="showCheckout"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      @click.self="showCheckout = false"
    >
      <div
        class="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
      >
        <div class="p-6">
          <div class="flex justify-between items-center mb-6">
            <h2 class="text-2xl font-bold text-gray-900">
              Your Workshop Selection
            </h2>
            <button
              @click="showCheckout = false"
              class="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <!-- Cart Items -->
          <div class="mb-6">
            <div
              v-for="workshop in cart"
              :key="workshop.slug"
              class="flex items-center justify-between p-4 border border-gray-200 rounded-lg mb-3"
            >
              <div class="flex items-center">
                <span class="text-2xl mr-3">{{ workshop.emoji }}</span>
                <div>
                  <h3 class="font-semibold text-gray-900">
                    {{ workshop.title }}
                  </h3>
                  <p class="text-sm text-gray-600">
                    {{
                      workshop.city.charAt(0).toUpperCase() +
                      workshop.city.slice(1)
                    }}
                    - Workshop {{ workshop.addedOrder }}/12
                  </p>
                </div>
              </div>
              <button
                @click="toggleCart(workshop)"
                class="text-red-500 hover:text-red-700 transition-colors"
              >
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
            </div>
          </div>

          <!-- Checkout Form -->
          <form @submit.prevent="submitInterest" class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2"
                >Name *</label
              >
              <input
                v-model="checkoutForm.name"
                type="text"
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2"
                >Email *</label
              >
              <input
                v-model="checkoutForm.email"
                type="email"
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2"
                >City *</label
              >
              <input
                v-model="checkoutForm.city"
                type="text"
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Your city"
              />
              <p class="text-xs text-gray-500 mt-1">
                Feel free to change the city so we can understand interest and
                notify you about future workshops in your area
              </p>
            </div>
            <div class="flex gap-4 pt-4">
              <button
                type="button"
                @click="showCheckout = false"
                class="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Continue Browsing
              </button>
              <button
                type="submit"
                :disabled="isSubmitting"
                class="flex-1 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors disabled:opacity-50"
              >
                {{ isSubmitting ? "Submitting..." : "Submit Interest" }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <!-- Success Modal -->
    <div
      v-if="showSuccessModal"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      @click.self="showSuccessModal = false"
    >
      <div class="bg-white rounded-2xl max-w-md w-full p-8 text-center">
        <div class="mb-6">
          <div
            class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <svg
              class="w-8 h-8 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h2 class="text-2xl font-bold text-gray-900 mb-2">Thank You!</h2>
          <p class="text-gray-600 leading-relaxed">
            We've received your workshop interest and will be in touch soon with
            next steps.
          </p>
        </div>
        <button
          @click="showSuccessModal = false"
          class="w-full px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
        >
          Continue Exploring
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedCity: "bangalore",
      activeCategory: "",
      cart: [],
      showCheckout: false,
      showSuccessModal: false,
      isSubmitting: false,
      checkoutForm: {
        name: "",
        email: "",
        city: "",
      },
      bangaloreOrder: [
        "Thinking in Bets & Bayes",
        "Noticing Confusion",
        "Planning Without the Lies",
        "Good Reasons & Rent-Paying Beliefs",
        "Arguing Without Breaking Things",
        "Catching Self-Deception",
        "Untangling Goals & Trade-offs",
        "Getting Unstuck",
        "From Intention to Habit",
        "Finding the Bottleneck",
        "Thinking Together",
        "Integration & Reflection",
      ],
      categoryStyles: {
        Foundations: {
          active: "bg-clay-600 text-warm-100 border border-clay-700",
          inactive: "bg-clay-100 text-clay-700 hover:bg-clay-200 border border-clay-300",
        },
        "Self-Awareness": {
          active: "bg-sage-600 text-warm-100 border border-sage-700",
          inactive: "bg-sage-100 text-sage-700 hover:bg-sage-200 border border-sage-300",
        },
        "Critical Thinking": {
          active: "bg-warm-600 text-white border border-warm-700",
          inactive: "bg-warm-100 text-warm-700 hover:bg-warm-200 border border-warm-300",
        },
        "Decision Making": {
          active: "bg-clay-700 text-warm-100 border border-clay-800",
          inactive: "bg-clay-200 text-clay-800 hover:bg-clay-300 border border-clay-400",
        },
        Implementation: {
          active: "bg-sage-700 text-warm-100 border border-sage-800",
          inactive: "bg-sage-200 text-sage-800 hover:bg-sage-300 border border-sage-400",
        },
        Communication: {
          active: "bg-warm-700 text-white border border-warm-800",
          inactive: "bg-warm-200 text-warm-800 hover:bg-warm-300 border border-warm-400",
        },
        Integration: {
          active: "bg-clay-800 text-warm-100 border border-clay-900",
          inactive: "bg-clay-300 text-clay-900 hover:bg-clay-400 border border-clay-500",
        },
      },
      workshops: [
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
        },
        {
          number: 4,
          emoji: "🔍",
          title: "Good Reasons & Rent-Paying Beliefs",
          subtitle: "Turning arguments into checkable predictions",
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
    orderedWorkshops() {
      let workshopsToOrder = this.filteredWorkshops;

      if (this.selectedCity === "bangalore") {
        // Create a mapping of titles to their desired order
        const orderMap = {};
        this.bangaloreOrder.forEach((title, index) => {
          orderMap[title] = index;
        });

        // Sort workshops based on the Bangalore order
        workshopsToOrder = [...workshopsToOrder].sort((a, b) => {
          const orderA = orderMap[a.title] ?? 999;
          const orderB = orderMap[b.title] ?? 999;
          return orderA - orderB;
        });
      }

      return workshopsToOrder;
    },
    uniqueCategories() {
      // Preserve order based on first appearance in workshop sequence
      const seen = new Set();
      const orderedCategories = [];
      
      for (const workshop of this.workshops) {
        if (!seen.has(workshop.category)) {
          seen.add(workshop.category);
          orderedCategories.push(workshop.category);
        }
      }
      
      return orderedCategories;
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
    addAllVisibleToCart() {
      const list = this.orderedWorkshops;
      let added = 0;
      list.forEach((w) => {
        if (!this.cart.some((item) => item.slug === w.slug)) {
          this.cart.push({
            ...w,
            addedOrder: this.getWorkshopNumber(w),
            city: this.selectedCity,
          });
          added += 1;
        }
      });
      if (added > 0) this.saveCartToStorage();
    },
    removeAllVisibleFromCart() {
      const slugs = new Set(this.orderedWorkshops.map((w) => w.slug));
      const originalLen = this.cart.length;
      this.cart = this.cart.filter((item) => !slugs.has(item.slug));
      if (this.cart.length !== originalLen) this.saveCartToStorage();
    },
    getWorkshopNumber(workshop) {
      // City-specific canonical order
      if (this.selectedCity === "bangalore") {
        const idx = this.bangaloreOrder.findIndex(
          (title) => title === workshop.title
        );
        if (idx !== -1) return idx + 1;
      }
      // Fallback to the workshop's defined number for other cities
      return workshop.number || 999;
    },
    isInCart(workshop) {
      return this.cart.some((item) => item.slug === workshop.slug);
    },
    toggleCart(workshop) {
      const index = this.cart.findIndex((item) => item.slug === workshop.slug);
      if (index >= 0) {
        this.cart.splice(index, 1);
      } else {
        this.cart.push({
          ...workshop,
          addedOrder: this.getWorkshopNumber(workshop),
          city: this.selectedCity,
        });
      }
      this.saveCartToStorage();
    },
    saveCartToStorage() {
      localStorage.setItem("workshop-cart", JSON.stringify(this.cart));
    },
    loadCartFromStorage() {
      const saved = localStorage.getItem("workshop-cart");
      if (saved) {
        this.cart = JSON.parse(saved);
      }
    },
    async submitInterest() {
      this.isSubmitting = true;
      try {
        // Prepare data for Airtable
        const airtableData = {
          records: [
            {
              fields: {
                Name: this.checkoutForm.name,
                Email: this.checkoutForm.email,
                "User City": this.checkoutForm.city,
                "Selected Workshops": this.cart.map((w) => w.title).join(", "),
                "Workshop Count": this.cart.length,
                "Primary City": this.getPrimaryCity(),
                "Submitted At": new Date().toISOString(),
                "Cart Details": JSON.stringify(
                  this.cart.map((w) => ({
                    title: w.title,
                    city: w.city,
                    orderNumber: w.addedOrder,
                  }))
                ),
              },
            },
          ],
        };

        // Submit to Airtable
        const response = await fetch(
          `https://api.airtable.com/v0/${
            import.meta.env.VITE_AIRTABLE_BASE_ID
          }/Submissions`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${
                import.meta.env.VITE_AIRTABLE_API_TOKEN
              }`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify(airtableData),
          }
        );

        if (!response.ok) {
          throw new Error(`Airtable API error: ${response.status}`);
        }

        const result = await response.json();
        console.log("Successfully submitted to Airtable:", result);

        // Success - clear cart and form
        this.cart = [];
        this.saveCartToStorage();
        this.checkoutForm = { name: "", email: "", city: "" };
        this.showCheckout = false;
        this.showSuccessModal = true;
      } catch (error) {
        console.error("Submission error:", error);
        alert(
          "Sorry, there was an error submitting your interest. Please try again."
        );
      } finally {
        this.isSubmitting = false;
      }
    },
    getPrimaryCity() {
      // Determine primary city based on most workshops selected from that city
      const cityCount = this.cart.reduce((acc, workshop) => {
        acc[workshop.city] = (acc[workshop.city] || 0) + 1;
        return acc;
      }, {});

      return (
        Object.keys(cityCount).reduce((a, b) =>
          cityCount[a] > cityCount[b] ? a : b
        ) || this.selectedCity
      );
    },
    openCheckout() {
      this.checkoutForm.city =
        this.selectedCity.charAt(0).toUpperCase() + this.selectedCity.slice(1);
      this.showCheckout = true;
    },
  },
  mounted() {
    this.loadCartFromStorage();
  },
};
</script>
