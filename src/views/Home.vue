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
      <section id="features" class="bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div class="border-t border-gray-200/70 pt-16">
            <h2 class="text-2xl md:text-3xl font-bold text-center mb-12 font-display">
              Skills That Transform How You Think
            </h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div
                v-for="(feature, index) in features"
                :key="index"
                class="group rounded-xl p-6 shadow-md transition transform duration-200 hover:-translate-y-1 hover:shadow-lg border-l-4"
                :class="[feature.bgColor, feature.borderColor]"
              >
                <div class="mb-4">
                  <h3 class="text-lg font-semibold mb-3">{{ feature.title }}</h3>
                  <p class="text-gray-700 text-sm leading-relaxed">{{ feature.description }}</p>
                </div>
              </div>
            </div>
            <div class="text-center mt-8">
              <router-link
                to="/workshops"
                class="text-blue-600 hover:underline inline-block"
              >
                See all 12 workshops →
              </router-link>
            </div>
          </div>
        </div>
      </section>

      <!-- Workshops Preview Section -->
      <section id="workshops">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div class="text-center mb-12">
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
      <section id="community" class="bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div class="text-center max-w-3xl mx-auto mb-12">
            <h2 class="text-3xl md:text-4xl font-bold font-display mb-4">
              Join Our Community
            </h2>
            <p class="text-xl text-gray-600">
              Connect with fellow rationality practitioners
            </p>
          </div>

          <div class="max-w-3xl mx-auto">
            <div class="bg-white rounded-2xl shadow-sm p-8 text-center">
              <h3 class="text-2xl font-semibold mb-6">Why Join Our Community?</h3>
              <ul class="space-y-4 text-left mb-8">
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
                <li class="flex items-start">
                  <div class="flex-shrink-0">
                    <span class="inline-block w-2 h-2 mt-2 bg-blue-400 rounded-full"></span>
                  </div>
                  <span class="ml-4 text-gray-600">Get updates on upcoming workshops and events</span>
                </li>
                <li class="flex items-start">
                  <div class="flex-shrink-0">
                    <span class="inline-block w-2 h-2 mt-2 bg-blue-400 rounded-full"></span>
                  </div>
                  <span class="ml-4 text-gray-600">Access exclusive learning resources and discussions</span>
                </li>
              </ul>
              <p class="text-gray-600 mb-8">
                Join our WhatsApp community and start your journey with fellow practitioners.
              </p>
              <router-link
                to="/community"
                class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition transform hover:scale-105"
              >
                Join Community
              </router-link>
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
          description: 'Break down complex problems into manageable pieces and think through them step by step',
          bgColor: 'bg-sky-50',
          borderColor: 'border-sky-200'
        },
        {
          title: 'Cognitive Biases',
          description: 'Recognize the mental shortcuts that trip you up and learn to question your assumptions',
          bgColor: 'bg-rose-50',
          borderColor: 'border-rose-200'
        },
        {
          title: 'Practical Tools',
          description: 'Master concrete techniques and build thinking habits you can use daily for clearer choices',
          bgColor: 'bg-amber-50',
          borderColor: 'border-amber-200'
        },
        {
          title: 'Community Learning',
          description: 'Practice with supportive peers who challenge your thinking in constructive ways',
          bgColor: 'bg-emerald-50',
          borderColor: 'border-emerald-200'
        },
        {
          title: 'Real-World Application',
          description: 'Apply rationality principles to career decisions, relationships, and personal goals',
          bgColor: 'bg-purple-50',
          borderColor: 'border-purple-200'
        },
        {
          title: 'Ongoing Growth',
          description: 'Build a foundation for lifelong learning and continuous improvement of your thinking',
          bgColor: 'bg-green-50',
          borderColor: 'border-green-200'
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
