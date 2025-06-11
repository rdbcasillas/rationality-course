<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h1
      class="text-3xl md:text-4xl font-bold mb-6 text-center font-display bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent"
    >
      Workshop Series
    </h1>
    
    <!-- A/B Testing Note -->
    <div class="max-w-3xl mx-auto mb-12 text-center">
      <p class="text-gray-700 text-base font-semibold bg-blue-50 px-6 py-4 rounded-lg border border-blue-100 leading-relaxed">
        <span class="text-blue-700">Note:</span> We're experimenting with different workshop sequences in Bangalore and Hyderabad to discover which learning progression is most effective for developing rationality skills. Choose the toggle below based on your city.
      </p>
    </div>

    <!-- City Toggle -->
    <div class="mb-8">
      <div class="flex justify-center">
        <div class="bg-gray-100 p-1 rounded-full">
          <button
            @click="selectedCity = 'bangalore'"
            :class="[
              'px-6 py-2 rounded-full text-sm font-medium transition-all duration-300',
              selectedCity === 'bangalore'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-600 hover:text-gray-900',
            ]"
          >
            Bangalore
          </button>
          <button
            @click="selectedCity = 'hyderabad'"
            :class="[
              'px-6 py-2 rounded-full text-sm font-medium transition-all duration-300',
              selectedCity === 'hyderabad'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-600 hover:text-gray-900',
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
        v-for="workshop in orderedWorkshops"
        :key="workshop.slug"
        class="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden animate-fade-in border border-gray-100/40 backdrop-blur-sm flex flex-col"
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
              >Workshop {{ getWorkshopNumber(workshop) }}/12</span
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
        <div class="p-6 bg-gray-50/50 flex-1 flex flex-col">
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

          <!-- Cart Actions -->
          <div class="mt-auto pt-6 flex items-center justify-between">
            <button
              @click="toggleCart(workshop)"
              :class="[
                'px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 inline-flex items-center',
                isInCart(workshop)
                  ? 'bg-green-100 text-green-700 hover:bg-green-200'
                  : 'bg-primary-600 text-white hover:bg-primary-700'
              ]"
            >
              <svg 
                class="w-4 h-4 mr-2" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  v-if="!isInCart(workshop)"
                  stroke-linecap="round" 
                  stroke-linejoin="round" 
                  stroke-width="2" 
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 11-4 0v-6m4 0V9a2 2 0 10-4 0v4.01"
                />
                <path 
                  v-else
                  stroke-linecap="round" 
                  stroke-linejoin="round" 
                  stroke-width="2" 
                  d="M5 13l4 4L19 7"
                />
              </svg>
              {{ isInCart(workshop) ? 'Added' : 'Add to Cart' }}
            </button>
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

    <!-- Floating Cart -->
    <div 
      v-if="cart.length > 0"
      class="fixed bottom-6 right-6 z-50"
    >
      <button
        @click="showCheckout = true"
        class="bg-primary-600 hover:bg-primary-700 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 relative group"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 11-4 0v-6m4 0V9a2 2 0 10-4 0v4.01"/>
        </svg>
        <span class="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold">
          {{ cart.length }}
        </span>
        <span class="absolute right-full mr-3 bg-gray-900 text-white px-2 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          View Cart ({{ cart.length }} {{ cart.length === 1 ? 'workshop' : 'workshops' }})
        </span>
      </button>
    </div>

    <!-- Checkout Modal -->
    <div 
      v-if="showCheckout"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      @click.self="showCheckout = false"
    >
      <div class="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div class="p-6">
          <div class="flex justify-between items-center mb-6">
            <h2 class="text-2xl font-bold text-gray-900">Your Workshop Selection</h2>
            <button 
              @click="showCheckout = false"
              class="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
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
                  <h3 class="font-semibold text-gray-900">{{ workshop.title }}</h3>
                  <p class="text-sm text-gray-600">{{ workshop.city.charAt(0).toUpperCase() + workshop.city.slice(1) }} - Workshop {{ workshop.addedOrder }}/12</p>
                </div>
              </div>
              <button
                @click="toggleCart(workshop)"
                class="text-red-500 hover:text-red-700 transition-colors"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                </svg>
              </button>
            </div>
          </div>

          <!-- Checkout Form -->
          <form @submit.prevent="submitInterest" class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Name *</label>
              <input
                v-model="checkoutForm.name"
                type="text"
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Your full name"
              >
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Email *</label>
              <input
                v-model="checkoutForm.email"
                type="email"
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="your@email.com"
              >
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
                {{ isSubmitting ? 'Submitting...' : 'Submit Interest' }}
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
          <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
            </svg>
          </div>
          <h2 class="text-2xl font-bold text-gray-900 mb-2">Thank You!</h2>
          <p class="text-gray-600 leading-relaxed">
            We've received your workshop interest and will be in touch soon with next steps.
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
        name: '',
        email: ''
      },
      bangaloreOrder: [
        "How Sure Are You? — Thinking in Bets & Bayes",
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
        "Integration & Reflection"
      ],
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
            "Heed the hunch",
            "Intellectual honesty",
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
          goal: "Put numbers on hunches and nudge your thinking when new facts roll in.",
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
    orderedWorkshops() {
      let workshopsToOrder = this.filteredWorkshops;
      
      if (this.selectedCity === 'bangalore') {
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
    getWorkshopNumber(workshop) {
      const orderedList = this.orderedWorkshops;
      return orderedList.findIndex(w => w.slug === workshop.slug) + 1;
    },
    isInCart(workshop) {
      return this.cart.some(item => item.slug === workshop.slug);
    },
    toggleCart(workshop) {
      const index = this.cart.findIndex(item => item.slug === workshop.slug);
      if (index >= 0) {
        this.cart.splice(index, 1);
      } else {
        this.cart.push({
          ...workshop,
          addedOrder: this.getWorkshopNumber(workshop),
          city: this.selectedCity
        });
      }
      this.saveCartToStorage();
    },
    saveCartToStorage() {
      localStorage.setItem('workshop-cart', JSON.stringify(this.cart));
    },
    loadCartFromStorage() {
      const saved = localStorage.getItem('workshop-cart');
      if (saved) {
        this.cart = JSON.parse(saved);
      }
    },
    async submitInterest() {
      this.isSubmitting = true;
      try {
        // Prepare data for Airtable
        const airtableData = {
          records: [{
            fields: {
              "Name": this.checkoutForm.name,
              "Email": this.checkoutForm.email,
              "Selected Workshops": this.cart.map(w => w.title).join(', '),
              "Workshop Count": this.cart.length,
              "Primary City": this.getPrimaryCity(),
              "Submitted At": new Date().toISOString(),
              "Cart Details": JSON.stringify(this.cart.map(w => ({
                title: w.title,
                city: w.city,
                orderNumber: w.addedOrder
              })))
            }
          }]
        };

        // Submit to Airtable
        const response = await fetch(`https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/Submissions`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(airtableData)
        });

        if (!response.ok) {
          throw new Error(`Airtable API error: ${response.status}`);
        }

        const result = await response.json();
        console.log('Successfully submitted to Airtable:', result);
        
        // Success - clear cart and form
        this.cart = [];
        this.saveCartToStorage();
        this.checkoutForm = { name: '', email: '' };
        this.showCheckout = false;
        this.showSuccessModal = true;
        
      } catch (error) {
        console.error('Submission error:', error);
        alert('Sorry, there was an error submitting your interest. Please try again.');
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
      
      return Object.keys(cityCount).reduce((a, b) => 
        cityCount[a] > cityCount[b] ? a : b
      ) || this.selectedCity;
    },
  },
  mounted() {
    this.loadCartFromStorage();
  },
};
</script>
