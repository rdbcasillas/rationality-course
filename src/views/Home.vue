<template>
  <div class="relative">
    <!-- Main Content -->
    <div class="relative">
      <!-- Hero Section -->
      <section id="hero" class="min-h-screen flex items-center relative">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <!-- Hero Section -->
          <div class="text-center max-w-3xl mx-auto">
            <h1 class="text-4xl md:text-5xl font-bold mb-4 font-display">
              Rationality Workshop Series
            </h1>
            <p class="text-xl md:text-2xl text-gray-600 mb-8">
              A 12-week journey to sharpen your rationality skills
            </p>
            
            <!-- Hero Illustration -->
            <div class="mb-12">
              <img
                src="/hero-illustration.svg"
                alt="Rationality Workshop Series Illustration"
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
        </div>
      </section>

      <!-- Features Section -->
      <section id="features" class="min-h-screen flex items-center bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h2 class="text-2xl md:text-3xl font-bold text-center mb-16 font-display">
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
      </section>

      <!-- Workshops Preview Section -->
      <section id="workshops" class="min-h-screen flex items-center">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold font-display mb-4">
              Featured Workshops
            </h2>
            <p class="text-xl text-gray-600">
              Preview our most popular workshops from the series
            </p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              v-for="workshop in featuredWorkshops"
              :key="workshop.slug"
              class="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden animate-fade-in border border-gray-100/40 backdrop-blur-sm"
            >
              <!-- Card Header with Emoji and Number -->
              <div class="p-6 border-b border-gray-100/60">
                <div class="flex items-center justify-between mb-4">
                  <span class="text-4xl filter drop-shadow-sm transition-transform duration-300 group-hover:scale-110">{{ workshop.emoji }}</span>
                  <span class="text-sm font-medium text-gray-400 bg-gray-50 px-3 py-1 rounded-full">Workshop {{ workshop.number }}/12</span>
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                  {{ workshop.title }}
                </h3>
                <p class="text-gray-600 text-sm mb-4 leading-relaxed">{{ workshop.goal }}</p>
              </div>

              <!-- Card Content -->
              <div class="p-6 bg-gray-50/50">
                <div class="mb-4">
                  <h4 class="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                    Core Ideas
                  </h4>
                  <ul class="space-y-2">
                    <li
                      v-for="(idea, idx) in workshop.coreIdeas"
                      :key="idx"
                      class="text-sm text-gray-600 flex items-start"
                    >
                      <span class="inline-block w-1.5 h-1.5 mt-1.5 mr-2 bg-primary-400 rounded-full"></span>
                      {{ idea }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="text-center mt-12">
            <router-link
              to="/workshops"
              class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition transform hover:scale-105"
            >
              View All Workshops
            </router-link>
          </div>
        </div>
      </section>

      <!-- Community Preview Section -->
      <section id="community" class="min-h-screen flex items-center bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div class="text-center max-w-3xl mx-auto mb-16">
            <h2 class="text-3xl md:text-4xl font-bold font-display mb-4">
              Join Our Community
            </h2>
            <p class="text-xl text-gray-600">
              Connect with fellow rationality practitioners
            </p>
          </div>

          <div class="max-w-5xl mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <!-- Why Join Card -->
              <div class="bg-white rounded-2xl shadow-sm p-8">
                <h3 class="text-2xl font-semibold mb-6">Why Join?</h3>
                <ul class="space-y-4">
                  <li class="flex items-start">
                    <div class="flex-shrink-0">
                      <span class="inline-block w-2 h-2 mt-2 bg-blue-400 rounded-full"></span>
                    </div>
                    <span class="ml-4 text-gray-600">Practice rationality techniques with supportive peers</span>
                  </li>
                  <li class="flex items-start">
                    <div class="flex-shrink-0">
                      <span class="inline-block w-2 h-2 mt-2 bg-blue-400 rounded-full"></span>
                    </div>
                    <span class="ml-4 text-gray-600">Share experiences and learn from others' insights</span>
                  </li>
                </ul>
              </div>

              <!-- Ready to Join Card -->
              <div class="bg-white rounded-2xl shadow-sm p-8">
                <h3 class="text-2xl font-semibold mb-6">Ready to Join?</h3>
                <p class="text-gray-600 mb-8">
                  Join our community on Discord and start your journey with fellow practitioners.
                </p>
                <router-link
                  to="/community"
                  class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition transform hover:scale-105"
                >
                  Learn More
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formLink: 'https://docs.google.com/forms/d/e/1FAIpQLSehIdx4majRu8hARjXAFTGrEWNljs3Ut60yWh6eFfEuqrfEwA/viewform',
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
  },
  computed: {
    featuredWorkshops() {
      return [
        {
          number: 1,
          emoji: '🤔',
          title: 'Noticing Confusion',
          goal: 'Help participants tune into moments of confusion and use them as a signal to explore further.',
          coreIdeas: [
            'Confusion as a clue',
            'Intellectual honesty',
            'Noticing vs. ignoring'
          ],
          category: 'Foundations',
          slug: 'noticing-uncertainty'
        },
        {
          number: 3,
          emoji: '🧠',
          title: 'Catching Self-Deception',
          goal: 'Train people to notice when they\'re protecting a belief because it\'s comfortable, not because it\'s true.',
          coreIdeas: [
            'Emotional investment in beliefs',
            'Mental blind spots',
            'Clarity over comfort'
          ],
          category: 'Self-Awareness',
          slug: 'catching-self-deception'
        },
        {
          number: 5,
          emoji: '🎯',
          title: 'Untangling Goals & Trade-offs',
          goal: 'Help participants get clarity on what they truly care about and notice when their goals are working against each other.',
          coreIdeas: [
            'Digging below surface goals',
            'Resolving internal tensions',
            'Choosing wisely'
          ],
          category: 'Decision Making',
          slug: 'goals-and-tradeoffs'
        }
      ];
    }
  },
  mounted() {
    // Empty mounted hook
  },
  methods: {
    // Empty methods
  }
}
</script>

<style>
/* Only keep basic transitions for UI feedback */
.group:hover {
  transform: translateY(-5px);
}
</style>
