<template>
  <div class="max-w-xl mx-auto px-6">
    <h2 class="text-3xl font-semibold text-center mb-6">
      Interested in joining?
    </h2>
    <form class="space-y-4">
      <input
        class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring focus:ring-blue-200 focus:outline-none"
        placeholder="Your Name"
      />
      <input
        class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring focus:ring-blue-200 focus:outline-none"
        placeholder="Email Address"
        type="email"
      />
      <textarea
        class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring focus:ring-blue-200 focus:outline-none"
        placeholder="Why are you interested?"
        rows="3"
      ></textarea>
      <div class="text-center">
        <button
          type="submit"
          class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>
