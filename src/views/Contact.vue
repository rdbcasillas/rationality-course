<template>
  <div class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="text-center mb-12">
      <h1 class="text-3xl md:text-4xl font-bold mb-4 font-display">
        Contact Us
      </h1>
      <p class="text-xl text-gray-600">
        Have questions? We're here to help.
      </p>
    </div>

    <div class="bg-white rounded-xl shadow-lg p-8">
      <form @submit.prevent="handleSubmit" class="space-y-6">
        <!-- Name -->
        <div>
          <label
            for="name"
            class="block text-sm font-medium text-gray-700 mb-1"
          >
            Name
          </label>
          <input
            id="name"
            v-model="form.name"
            type="text"
            required
            class="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <!-- Email -->
        <div>
          <label
            for="email"
            class="block text-sm font-medium text-gray-700 mb-1"
          >
            Email
          </label>
          <input
            id="email"
            v-model="form.email"
            type="email"
            required
            class="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <!-- Message -->
        <div>
          <label
            for="message"
            class="block text-sm font-medium text-gray-700 mb-1"
          >
            Message
          </label>
          <textarea
            id="message"
            v-model="form.message"
            rows="4"
            required
            class="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          ></textarea>
        </div>

        <!-- Submit Button -->
        <div class="text-right">
          <button
            type="submit"
            class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition transform hover:scale-105"
            :disabled="isSubmitting"
          >
            {{ isSubmitting ? 'Sending...' : 'Send Message' }}
          </button>
        </div>
      </form>

      <!-- Success Message -->
      <div
        v-if="showSuccess"
        class="mt-6 p-4 bg-green-50 text-green-700 rounded-lg"
      >
        Thank you for your message! We'll get back to you soon.
      </div>

      <!-- Error Message -->
      <div
        v-if="error"
        class="mt-6 p-4 bg-red-50 text-red-700 rounded-lg"
      >
        {{ error }}
      </div>
    </div>

    <!-- Alternative Contact -->
    <div class="mt-12 text-center">
      <p class="text-gray-600">
        Prefer email?
        <a
          :href="'mailto:' + contactEmail"
          class="text-blue-600 hover:underline"
        >
          {{ contactEmail }}
        </a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      },
      isSubmitting: false,
      showSuccess: false,
      error: null,
      contactEmail: 'contact@portalworkshops.com' // Replace with actual email
    }
  },
  methods: {
    async handleSubmit() {
      this.isSubmitting = true
      this.error = null
      this.showSuccess = false

      try {
        // Here you would typically make an API call to your backend
        // For now, we'll simulate a successful submission
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        this.showSuccess = true
        this.form.name = ''
        this.form.email = ''
        this.form.message = ''
      } catch (err) {
        this.error = 'Something went wrong. Please try again or email us directly.'
      } finally {
        this.isSubmitting = false
      }
    }
  }
}
</script> 