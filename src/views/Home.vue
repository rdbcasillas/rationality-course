<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <!-- Hero Section -->
    <div class="text-center max-w-3xl mx-auto">
      <h1 class="text-4xl md:text-5xl font-bold mb-4 font-display">
        Portal Workshop Series
      </h1>
      <p class="text-xl md:text-2xl text-gray-600 mb-8">
        A 12-week journey to sharpen your rationality skills
      </p>
      
      <!-- Hero Illustration -->
      <div class="mb-12">
        <img
          src="/hero-illustration.svg"
          alt="Portal Workshop Series Illustration"
          class="w-full max-w-lg mx-auto"
          loading="lazy"
        />
      </div>

      <!-- CTA Button -->
      <router-link
        to="/workshops"
        class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition transform hover:scale-105"
      >
        Explore Workshops
      </router-link>
    </div>

    <!-- Series Teaser -->
    <div class="mt-24">
      <h2 class="text-2xl md:text-3xl font-bold text-center mb-8 font-display">
        What You'll Learn
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
          v-for="(feature, index) in features"
          :key="index"
          class="bg-white rounded-xl p-6 shadow-md"
      >
          <h3 class="text-lg font-semibold mb-2">{{ feature.title }}</h3>
          <p class="text-gray-600">{{ feature.description }}</p>
        </div>
      </div>
        </div>

    <!-- Interest Form CTA -->
    <div class="mt-24 text-center">
      <h2 class="text-2xl md:text-3xl font-bold mb-4 font-display">
        Ready to Level Up?
      </h2>
      <p class="text-xl text-gray-600 mb-8">
        Express interest in the full series or individual workshops
      </p>
          <a
        :href="formLink"
            target="_blank"
        rel="noopener noreferrer"
        class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition transform hover:scale-105"
          >
        Express Interest
          </a>
        </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formLink: 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform',
      features: [
        {
          title: 'Systematic Reasoning',
          description: 'Learn to analyze problems and make decisions with clarity and precision.'
        },
        {
          title: 'Cognitive Biases',
          description: 'Identify and overcome common thinking traps that cloud judgment.'
        },
        {
          title: 'Practical Tools',
          description: 'Master concrete techniques for better thinking and decision-making.'
        },
        {
          title: 'Community Learning',
          description: 'Join a supportive group of rationality practitioners.'
        },
        {
          title: 'Real-World Application',
          description: 'Apply rationality skills to your personal and professional life.'
        },
        {
          title: 'Ongoing Growth',
          description: 'Access resources and support for continued development.'
        }
      ]
    }
  }
}
</script>
