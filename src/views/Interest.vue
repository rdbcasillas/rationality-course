<template>
  <div class="min-h-screen bg-warm-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-lg w-full mx-auto">
      <!-- Success State -->
      <div
        v-if="submitted"
        class="bg-sage-50 border-l-4 border-sage-400 p-8 text-center"
      >
        <div class="mb-6">
          <div class="text-3xl mb-4">✓</div>
          <h2
            class="text-2xl font-bold text-clay-800 mb-2 font-display lowercase"
          >
            thanks!
          </h2>
          <p class="text-clay-600">we will send you updates soon.</p>
        </div>
        <router-link
          to="/workshops"
          class="text-warm-600 hover:text-warm-700 font-medium lowercase"
        >
          explore workshops →
        </router-link>
      </div>

      <!-- Form State -->
      <div v-else class="bg-warm-100 border-l-4 border-clay-400 p-8">
        <div class="mb-8">
          <h1
            class="text-3xl font-bold text-clay-800 mb-4 font-display lowercase"
          >
            interested in rationality workshops?
          </h1>
          <p class="text-clay-600 leading-relaxed">
            We are running 12 interactive workshops in bangalore & hyderabad.
            just tell us you're curious, no commitment yet.
          </p>
        </div>

        <form @submit.prevent="submitInterest" class="space-y-6">
          <div>
            <label
              class="block text-sm font-medium text-clay-700 mb-2 font-mono lowercase"
              >name *</label
            >
            <input
              v-model="form.name"
              type="text"
              required
              class="w-full px-4 py-3 border border-clay-300 rounded-sm focus:ring-2 focus:ring-warm-500 focus:border-warm-500"
              placeholder="your full name"
            />
          </div>

          <div>
            <label
              class="block text-sm font-medium text-clay-700 mb-2 font-mono lowercase"
              >email *</label
            >
            <input
              v-model="form.email"
              type="email"
              required
              class="w-full px-4 py-3 border border-clay-300 rounded-sm focus:ring-2 focus:ring-warm-500 focus:border-warm-500"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label
              class="block text-sm font-medium text-clay-700 mb-2 font-mono lowercase"
              >city *</label
            >
            <input
              v-model="form.city"
              type="text"
              required
              class="w-full px-4 py-3 border border-clay-300 rounded-sm focus:ring-2 focus:ring-warm-500 focus:border-warm-500"
              placeholder="your city"
            />
            <p class="text-xs text-clay-500 mt-1">
              Write 'online' if you can't attend offline ones or prefer virtual workshops
            </p>
          </div>

          <button
            type="submit"
            :disabled="isSubmitting"
            class="w-full bg-warm-600 hover:bg-warm-700 text-white font-semibold py-3 px-4 rounded-sm transition-colors disabled:opacity-50 border border-warm-700 lowercase"
          >
            {{ isSubmitting ? "submitting..." : "yes, i'm interested!" }}
          </button>
        </form>

        <div class="mt-8 text-center">
          <router-link
            to="/workshops"
            class="text-warm-600 hover:text-warm-700 text-sm lowercase"
          >
            want to see the workshop details first? →
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Interest",
  data() {
    return {
      submitted: false,
      isSubmitting: false,
      form: {
        name: "",
        email: "",
        city: "",
      },
    };
  },
  mounted() {
    document.title = "Show Interest | Rationality Workshop Series";
  },
  methods: {
    async submitInterest() {
      this.isSubmitting = true;
      try {
        // Prepare data for Airtable
        const airtableData = {
          records: [
            {
              fields: {
                Name: this.form.name,
                Email: this.form.email,
                City: this.form.city,
                //Submitted: new Date().toISOString(),
              },
            },
          ],
        };

        // Submit to Airtable using existing Submissions table
        const response = await fetch(
          `https://api.airtable.com/v0/${
            import.meta.env.VITE_AIRTABLE_BASE_ID
          }/Interest`,
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

        this.submitted = true;
      } catch (error) {
        console.error("Submission error:", error);
        alert("Sorry, there was an error. Please try again.");
      } finally {
        this.isSubmitting = false;
      }
    },
    resetForm() {
      this.form = {
        name: "",
        email: "",
        city: "",
      };
    },
  },
};
</script>
