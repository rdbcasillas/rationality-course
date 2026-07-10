<template>
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
    <!-- Header -->
    <div class="mb-14 relative">
      <BlinkingLogo
        aria-hidden="true"
        class="absolute top-0 right-0 w-40 md:w-64 opacity-30 pointer-events-none select-none hidden sm:block"
      />
      <p class="font-mono text-xs tracking-[0.25em] text-clay-500 mb-4 lowercase">
        the curriculum
      </p>
      <h1 class="text-4xl md:text-6xl font-display font-medium text-ink lowercase mb-5">
        twelve workshops
      </h1>
      <p class="text-lg text-clay-600 max-w-xl leading-relaxed">
        each session pairs a big idea with hands-on practice. attend any — mark
        the ones you're interested in and we'll write to you when they're
        scheduled.
      </p>
      <p class="font-hand text-2xl text-accent -rotate-1 inline-block mt-3">
        they build on each other, but each stands alone
      </p>
    </div>

    <!-- Category Filters -->
    <div class="mb-10 flex flex-wrap items-baseline gap-x-6 gap-y-2 border-b border-clay-300 pb-4">
      <button
        @click="activeCategory = ''"
        :class="[
          'font-mono text-sm lowercase transition',
          !activeCategory ? 'text-accent squiggle' : 'text-clay-500 hover:text-ink',
        ]"
      >
        all <span class="text-clay-400">({{ workshops.length }})</span>
      </button>
      <button
        v-for="category in uniqueCategories"
        :key="category"
        @click="activeCategory = activeCategory === category ? '' : category"
        :class="[
          'font-mono text-sm lowercase transition',
          activeCategory === category ? 'text-accent squiggle' : 'text-clay-500 hover:text-ink',
        ]"
      >
        {{ category.toLowerCase() }}
      </button>
    </div>

    <!-- Workshop Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <router-link
        v-for="workshop in filteredWorkshops"
        :key="workshop.slug"
        :to="{ name: 'WorkshopDetail', params: { slug: workshop.slug } }"
        class="group relative bg-warm-50 border border-clay-300 hover:border-ink transition-colors duration-300 p-6 flex flex-col overflow-hidden"
      >
        <p class="font-mono text-[11px] tracking-[0.2em] text-clay-500 mb-4 lowercase">
          {{ workshop.category.toLowerCase() }}
        </p>

        <h3 class="font-display text-2xl text-ink leading-snug mb-1 lowercase group-hover:text-accent transition-colors">
          {{ workshop.title.toLowerCase() }}
        </h3>
        <p class="text-sm italic text-clay-500 mb-4 lowercase">
          {{ workshop.subtitle.toLowerCase() }}
        </p>

        <p class="text-sm text-clay-600 leading-relaxed mb-6">
          {{ workshop.goal }}
        </p>

        <!-- Card footer -->
        <div class="mt-auto pt-4 border-t border-dotted border-clay-400 flex items-center justify-between gap-3">
          <span class="font-mono text-xs text-clay-500 lowercase">
            <template v-if="workshop.sessions && workshop.sessions.length">
              <span class="inline-block w-1.5 h-1.5 rounded-full bg-sage-500 mr-1.5 align-middle"></span>held ×{{ workshop.sessions.length }}
            </template>
            <template v-else>
              <span class="inline-block w-1.5 h-1.5 rounded-full border border-clay-400 mr-1.5 align-middle"></span>upcoming
            </template>
          </span>

          <button
            @click.prevent.stop="toggleCart(workshop)"
            :aria-label="isInCart(workshop) ? 'Marked as interested' : 'Mark interest'"
            :class="[
              'font-mono text-xs px-3 py-1.5 border transition lowercase',
              isInCart(workshop)
                ? 'bg-sage-100 text-sage-800 border-sage-400'
                : 'text-clay-600 border-clay-300 hover:border-accent hover:text-accent',
            ]"
          >
            {{ isInCart(workshop) ? "✓ interested" : "+ interested" }}
          </button>
        </div>
      </router-link>
    </div>

    <!-- Floating Cart -->
    <div v-if="cart.length > 0" class="fixed bottom-6 right-6 z-50">
      <button
        @click="openCheckout"
        class="bg-ink hover:bg-ink-700 text-warm-100 p-3.5 shadow-lg hover:shadow-xl transition-all duration-200 relative group"
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
            d="M4 4v16h12l4-4V4H4z M16 20v-4h4"
          />
        </svg>
        <span
          class="absolute -top-2 -right-2 bg-accent text-warm-50 text-xs h-5 w-5 flex items-center justify-center font-bold font-mono"
        >
          {{ cart.length }}
        </span>
        <span
          class="absolute right-full mr-3 bg-ink-900 text-warm-100 px-2 py-1 text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 lowercase font-mono"
        >
          submit interest ({{ cart.length }})
        </span>
      </button>
    </div>

    <!-- Checkout Modal -->
    <div
      v-if="showCheckout"
      class="fixed inset-0 bg-ink-900 bg-opacity-60 flex items-center justify-center z-50 p-4"
      @click.self="showCheckout = false"
    >
      <div
        class="bg-warm-50 max-w-2xl w-full max-h-[90vh] overflow-y-auto border-t-4 border-ink"
      >
        <div class="p-6 sm:p-8">
          <div class="flex justify-between items-center mb-6">
            <h2 class="text-2xl font-display font-medium text-ink lowercase">
              your workshop selection
            </h2>
            <button
              @click="showCheckout = false"
              aria-label="Close"
              class="text-clay-400 hover:text-ink transition-colors"
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
              class="flex items-center justify-between py-3 border-b border-dotted border-clay-400"
            >
              <div class="flex items-baseline gap-3">
                <span class="font-mono text-xs text-clay-400">
                  {{ String(workshop.number).padStart(2, "0") }}
                </span>
                <h3 class="font-display text-lg text-ink lowercase">
                  {{ workshop.title.toLowerCase() }}
                </h3>
              </div>
              <button
                @click="toggleCart(workshop)"
                aria-label="Remove"
                class="font-mono text-xs text-clay-500 hover:text-accent transition-colors lowercase"
              >
                remove
              </button>
            </div>
          </div>

          <!-- Checkout Form -->
          <form @submit.prevent="submitInterest" class="space-y-4">
            <div>
              <label class="block text-sm text-clay-700 mb-2 font-mono lowercase"
                >name *</label
              >
              <input
                v-model="checkoutForm.name"
                type="text"
                required
                class="w-full px-4 py-2 bg-warm-50 border border-clay-300 focus:ring-1 focus:ring-ink focus:border-ink"
                placeholder="your full name"
              />
            </div>
            <div>
              <label class="block text-sm text-clay-700 mb-2 font-mono lowercase"
                >email *</label
              >
              <input
                v-model="checkoutForm.email"
                type="email"
                required
                class="w-full px-4 py-2 bg-warm-50 border border-clay-300 focus:ring-1 focus:ring-ink focus:border-ink"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label class="block text-sm text-clay-700 mb-2 font-mono lowercase"
                >city *</label
              >
              <input
                v-model="checkoutForm.city"
                type="text"
                required
                class="w-full px-4 py-2 bg-warm-50 border border-clay-300 focus:ring-1 focus:ring-ink focus:border-ink"
                placeholder="your city"
              />
              <p class="text-xs text-clay-500 mt-1">
                write 'online' for virtual workshops or any city to signal interest
              </p>
            </div>
            <div class="flex gap-4 pt-4">
              <button
                type="button"
                @click="showCheckout = false"
                class="flex-1 px-6 py-3 border border-clay-300 text-clay-700 hover:border-ink hover:text-ink transition-colors lowercase"
              >
                continue browsing
              </button>
              <button
                type="submit"
                :disabled="isSubmitting"
                class="flex-1 px-6 py-3 bg-ink text-warm-50 hover:bg-ink-700 transition-colors disabled:opacity-50 lowercase"
              >
                {{ isSubmitting ? "submitting..." : "submit interest" }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <!-- Success Modal -->
    <div
      v-if="showSuccessModal"
      class="fixed inset-0 bg-ink-900 bg-opacity-60 flex items-center justify-center z-50 p-4"
      @click.self="showSuccessModal = false"
    >
      <div class="bg-warm-50 max-w-md w-full p-8 text-center border-t-4 border-sage-500">
        <div class="mb-6">
          <div class="text-3xl mb-4 text-sage-600">✓</div>
          <h2 class="text-2xl font-display font-medium text-ink mb-2 lowercase">thanks!</h2>
          <p class="text-clay-600 leading-relaxed">
            we have received your workshop interest and will be in touch soon with
            next steps.
          </p>
        </div>
        <button
          @click="showSuccessModal = false"
          class="w-full px-6 py-3 bg-ink text-warm-50 hover:bg-ink-700 transition-colors lowercase"
        >
          continue exploring
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { workshops, sortChronologically } from "@/data/workshops.js";
import BlinkingLogo from "@/components/BlinkingLogo.vue";

export default {
  components: { BlinkingLogo },
  data() {
    return {
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
      workshops,
    };
  },
  computed: {
    filteredWorkshops() {
      const list = this.activeCategory
        ? this.workshops.filter(
            (workshop) => workshop.category === this.activeCategory
          )
        : this.workshops;

      return sortChronologically(list);
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
          addedOrder: workshop.number,
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
                "Primary City": this.checkoutForm.city,
                "Submitted At": new Date().toISOString(),
                "Cart Details": JSON.stringify(
                  this.cart.map((w) => ({
                    title: w.title,
                    orderNumber: w.number,
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
    openCheckout() {
      this.showCheckout = true;
    },
  },
  mounted() {
    this.loadCartFromStorage();
  },
};
</script>
