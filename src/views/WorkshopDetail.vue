<template>
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div v-if="workshop" class="bg-white rounded-xl shadow-lg p-8">
      <!-- Workshop Header -->
      <div class="mb-8">
        <h1 class="text-3xl font-bold mb-4 font-display">
          {{ workshop.number }}. {{ workshop.title }}
        </h1>
        <p class="text-xl text-gray-600">{{ workshop.goal }}</p>
      </div>

      <!-- Core Ideas -->
      <div class="mb-8">
        <h2 class="text-xl font-semibold mb-4 font-display">Core Ideas</h2>
        <ul class="space-y-2">
          <li
            v-for="(idea, index) in workshop.ideas"
            :key="index"
            class="flex items-start"
          >
            <span class="inline-block w-2 h-2 mt-2 mr-3 bg-blue-400 rounded-full"></span>
            <span>{{ idea }}</span>
          </li>
        </ul>
      </div>

      <!-- Activities -->
      <div class="mb-8">
        <h2 class="text-xl font-semibold mb-4 font-display">Activities</h2>
        <ul class="space-y-4">
          <li
            v-for="(activity, index) in workshop.activities"
            :key="index"
            class="flex items-start"
          >
            <span class="inline-flex items-center justify-center w-6 h-6 mr-3 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold">
              {{ index + 1 }}
            </span>
            <span class="flex-1">{{ activity }}</span>
          </li>
        </ul>
      </div>

      <!-- Interest Button -->
      <div class="mt-12 text-center space-y-4">
        <a
          :href="generateInterestLink(workshop.title)"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition transform hover:scale-105"
        >
          I'm Interested in This Workshop
        </a>
        <div>
          <router-link
            to="/workshops"
            class="inline-block text-blue-600 hover:underline mt-4"
          >
            ← Back to Workshops
          </router-link>
        </div>
      </div>
    </div>

    <!-- Not Found -->
    <div v-else class="text-center">
      <h1 class="text-2xl font-bold mb-4">Workshop Not Found</h1>
      <router-link
        to="/workshops"
        class="text-blue-600 hover:underline"
      >
        Back to Workshops
      </router-link>
    </div>
  </div>
</template>

<script>
const workshopData = {
  'noticing-uncertainty': {
    number: 1,
    title: 'Noticing Uncertainty',
    goal: 'Learn to recognize and navigate moments of confusion as valuable signals for deeper exploration.',
    ideas: [
      'Confusion as a valuable clue',
      'The difference between intellectual honesty and overconfidence',
      'Techniques for noticing vs. ignoring uncertainty',
      'Using uncertainty as a trigger for curiosity'
    ],
    activities: [
      'Spot the Fog: Recall and analyze recent decisions where you felt sure but turned out wrong',
      'Body Awareness: Guided reflection on how confusion manifests physically',
      'Video Analysis: Watch clips and practice pausing when something feels "off"',
      'Group Discussion: Share experiences of productive uncertainty'
    ]
  },
  // Add more workshops here...
}

export default {
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      workshop: null,
      baseFormUrl: 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?usp=pp_url&entry.ENTRY_ID='
    }
  },
  created() {
    this.workshop = workshopData[this.slug]
  },
  methods: {
    generateInterestLink(workshopTitle) {
      return `${this.baseFormUrl}${encodeURIComponent(workshopTitle)}`
    }
  }
}
</script> 