<template>
  <div
    class="min-h-screen bg-sky-50 flex items-center justify-center px-4 sm:px-6 lg:px-8"
  >
    <div class="max-w-md w-full">
      <!-- Success State -->
      <div v-if="submitted" class="text-center">
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
          <h2 class="text-2xl font-bold text-gray-900 mb-2">Thanks!</h2>
          <p class="text-gray-600">We'll send you updates soon.</p>
        </div>
        <router-link
          to="/workshops"
          class="text-blue-600 hover:text-blue-700 font-medium"
        >
          Explore Workshops →
        </router-link>
      </div>

      <!-- Form State -->
      <div v-else class="bg-white rounded-2xl shadow-lg p-8">
        <div class="text-center mb-8">
          <h1 class="text-3xl font-bold text-gray-900 mb-4">
            Interested in rationality workshops?
          </h1>
          <p class="text-gray-600 leading-relaxed">
            We're running 12 interactive workshops in Bangalore & Hyderabad.
            Just tell us you're curious, no commitment yet.
          </p>
        </div>

        <form @submit.prevent="submitInterest" class="space-y-6">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2"
              >Name *</label
            >
            <input
              v-model="form.name"
              type="text"
              required
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2"
              >Email *</label
            >
            <input
              v-model="form.email"
              type="email"
              required
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2"
              >City *</label
            >
            <input
              v-model="form.city"
              type="text"
              required
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Your city"
            />
          </div>

          <button
            type="submit"
            :disabled="isSubmitting"
            class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors disabled:opacity-50"
          >
            {{ isSubmitting ? "Submitting..." : "Yes, I'm interested!" }}
          </button>
        </form>

        <div class="mt-8 text-center">
          <router-link
            to="/workshops"
            class="text-blue-600 hover:text-blue-700 text-sm"
          >
            Want to see the workshop details first? →
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
