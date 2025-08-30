<template>
  <div class="relative">
    <!-- Main Content -->
    <div class="relative">
      <!-- Hero Section -->
      <section id="hero" class="py-16 md:py-24">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="max-w-3xl mx-auto">
            <div class="mb-8">
              <h1
                class="text-4xl md:text-5xl font-bold mb-6 font-display text-clay-800 leading-tight"
              >
                thinking clearer,<br />
                <span class="text-warm-600 italic">one workshop at a time</span>
              </h1>
              <p class="text-xl text-clay-600 mb-8 leading-relaxed">
                twelve weeks of practice-focused sessions to develop better
                reasoning, decision-making, and problem-solving habits
              </p>
            </div>

            <div class="flex flex-col sm:flex-row gap-4 mb-12">
              <router-link
                to="/workshops"
                class="inline-block bg-warm-600 hover:bg-warm-700 text-white font-semibold px-6 py-3 rounded-sm transition border border-warm-700 lowercase"
              >
                explore workshops
              </router-link>
              <router-link
                to="/interest"
                class="inline-block border border-clay-400 text-clay-700 hover:bg-clay-50 font-semibold px-6 py-3 rounded-sm transition lowercase"
              >
                sign up for updates
              </router-link>
            </div>

            <div class="text-sm text-clay-500 italic font-serif">
              running in bangalore & hyderabad • supported by Effective Altruism
              Infrastructure Fund & Effective Ventures
            </div>
          </div>
        </div>
      </section>

      <!-- Workshops Preview Section -->
      <section id="workshops" class="bg-clay-50 py-16">
        <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="mb-12">
            <h2
              class="text-2xl md:text-3xl font-bold font-display text-clay-800 mb-4 lowercase"
            >
              a sample of what we cover
            </h2>
            <p class="text-clay-600 leading-relaxed max-w-2xl">
              each session combines discussion with hands-on practice. topics
              build on each other but individual sessions are valuable on their
              own.
            </p>
          </div>

          <div class="space-y-8">
            <div
              v-for="(workshop, index) in featuredWorkshops"
              :key="workshop.slug"
              class="bg-warm-50 border-l-4 border-clay-400 p-6 hover:bg-warm-100 transition-colors duration-200"
            >
              <div class="flex flex-col md:flex-row md:items-start gap-4">
                <div class="flex-shrink-0">
                  <span
                    class="text-xs font-mono text-clay-600 bg-clay-200 px-2 py-1 rounded-sm"
                  >
                    {{ workshop.number }}/12
                  </span>
                </div>
                <div class="flex-1">
                  <h3
                    class="text-lg font-semibold text-clay-800 mb-2 font-serif leading-tight"
                  >
                    {{ workshop.title.toLowerCase() }}
                  </h3>
                  <p class="text-clay-600 text-sm mb-3 italic">
                    {{ workshop.goal }}
                  </p>
                  <div class="text-sm text-clay-700">
                    <span
                      class="font-mono text-xs text-clay-500 uppercase tracking-wide"
                      >key ideas:</span
                    >
                    {{
                      workshop.coreIdeas.slice(0, 2).join(" • ").toLowerCase()
                    }}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="text-center mt-12">
            <router-link
              to="/workshops"
              class="inline-block bg-warm-600 hover:bg-warm-700 text-white font-semibold px-6 py-3 rounded-sm transition border border-warm-700 lowercase"
            >
              see all workshops
            </router-link>
          </div>
        </div>
      </section>

      <!-- What You'll Develop Section -->
      <section id="features" class="py-16">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="mb-12">
            <h2
              class="text-2xl md:text-3xl font-bold font-display text-clay-800 mb-6 lowercase"
            >
              what we work on
            </h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            <div
              v-for="(feature, index) in features"
              :key="index"
              class="border-l-2 border-clay-300 pl-4 py-2"
            >
              <h3 class="text-base font-semibold font-serif text-clay-800 mb-2">
                {{ feature.title.toLowerCase() }}
              </h3>
              <p class="text-clay-600 text-sm leading-relaxed">
                {{ feature.description }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Interest Signup Section -->
      <section id="interest" class="bg-warm-100 py-16">
        <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            class="text-2xl md:text-3xl font-bold font-display text-clay-800 mb-4 lowercase"
          >
            interested? get workshop updates
          </h2>
          <p class="text-clay-600 mb-8 leading-relaxed">
            We will message only when there's something useful.
          </p>
          <router-link
            to="/interest"
            class="inline-block bg-warm-600 hover:bg-warm-700 text-white font-semibold px-6 py-3 rounded-sm transition border border-warm-700 lowercase"
          >
            sign up for updates
          </router-link>
        </div>
      </section>

      <!-- FAQ Section -->
      <section id="faq" class="bg-clay-50 py-16">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="mb-12">
            <h2
              class="text-2xl md:text-3xl font-bold font-display text-clay-800 mb-4 lowercase"
            >
              faqs
            </h2>
          </div>

          <div class="space-y-8">
            <div class="border-l-4 border-sage-400 bg-sage-50 p-6 mb-6">
              <h3
                class="text-lg font-semibold mb-3 text-clay-800 font-serif lowercase"
              >
                how often will these workshops happen?
              </h3>
              <p class="text-clay-700 leading-relaxed">
                workshops are held once every couple of weeks, giving you time
                to practice and internalize the concepts between sessions. if
                you have signed up for a particular workshop, you will receive a
                calendar invite with the date and time.
              </p>
            </div>

            <div class="border-l-4 border-sage-400 bg-sage-50 p-6 mb-6">
              <h3
                class="text-lg font-semibold mb-3 text-clay-800 font-serif lowercase"
              >
                Where do the workshops happen?
              </h3>
              <p class="text-clay-700 leading-relaxed">
                We're running in <strong>Hyderabad</strong> and
                <strong>Bangalore</strong>. On the
                <router-link
                  to="/workshops"
                  class="text-warm-600 hover:text-warm-700 no-underline hover:underline"
                  >workshops page</router-link
                >
                you can pick your city and mark the sessions you're interested
                in. We use venues across both cities, including
                <a
                  href="https://enterportal.org"
                  target="_blank"
                  rel="noopener"
                  class="text-warm-600 hover:text-warm-700 no-underline hover:underline"
                  >Portal</a
                >
                in Bangalore and other accessible locations.
              </p>
            </div>

            <div class="border-l-4 border-sage-400 bg-sage-50 p-6 mb-6">
              <h3
                class="text-lg font-semibold mb-3 text-clay-800 font-serif lowercase"
              >
                Can I join online?
              </h3>
              <p class="text-clay-700 leading-relaxed">
                The first run will be <strong>offline</strong>. If there’s
                enough interest, we’ll open an online track. To signal interest,
                go to the
                <router-link
                  to="/interest"
                  class="text-warm-600 hover:text-warm-700 no-underline hover:underline"
                  >signup form</router-link
                >
                and enter <strong>“online”</strong> in the city field.
              </p>
            </div>

            <div class="border-l-4 border-sage-400 bg-sage-50 p-6 mb-6">
              <h3
                class="text-lg font-semibold mb-3 text-clay-800 font-serif lowercase"
              >
                What's the cost?
              </h3>
              <p class="text-clay-700 leading-relaxed">
                Thanks to support from the Effective Altruism Infrastructure
                Fund (EAIF) and Effective Ventures, these workshops are free to
                attend. If you find value in them and would like to support
                future sessions, voluntary donations are welcome.
              </p>
            </div>

            <div class="border-l-4 border-sage-400 bg-sage-50 p-6 mb-6">
              <h3
                class="text-lg font-semibold mb-3 text-clay-800 font-serif lowercase"
              >
                Can I attend a single workshop or do I have to attend all of
                them?
              </h3>
              <p class="text-clay-700 leading-relaxed">
                You can attend individual workshops, but we encourage taking as
                many as possible for maximum benefit. Our pedagogy uses spaced
                repetition to recall ideas from previous workshops, so attending
                multiple sessions reinforces your learning.
              </p>
            </div>

            <div class="border-l-4 border-sage-400 bg-sage-50 p-6 mb-6">
              <h3
                class="text-lg font-semibold mb-3 text-clay-800 font-serif lowercase"
              >
                Will it be lecture style?
              </h3>
              <p class="text-clay-700 leading-relaxed">
                Our workshops are a mix of theory and interactive activities
                with a heavy focus on the latter. You will be actively
                participating, practicing techniques, and working through real
                scenarios with other participants.
              </p>
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
      formLink:
        "https://docs.google.com/forms/d/e/1FAIpQLSehIdx4majRu8hARjXAFTGrEWNljs3Ut60yWh6eFfEuqrfEwA/viewform",
      features: [
        {
          title: "Systematic Reasoning",
          description:
            "Break down complex problems into manageable pieces and think through them step by step",
          bgColor: "bg-sky-50",
          borderColor: "border-sky-200",
        },
        {
          title: "Cognitive Biases",
          description:
            "Recognize the mental shortcuts that trip you up and learn to question your assumptions",
          bgColor: "bg-rose-50",
          borderColor: "border-rose-200",
        },
        {
          title: "Practical Tools",
          description:
            "Learn concrete techniques and build thinking habits you can use daily for clearer choices",
          bgColor: "bg-amber-50",
          borderColor: "border-amber-200",
        },
        {
          title: "Community Learning",
          description:
            "Practice with supportive peers who challenge your thinking in constructive ways",
          bgColor: "bg-emerald-50",
          borderColor: "border-emerald-200",
        },
        {
          title: "Real-World Application",
          description:
            "Apply rationality principles to career decisions, relationships and personal goals",
          bgColor: "bg-purple-50",
          borderColor: "border-purple-200",
        },
        {
          title: "Ongoing Growth",
          description:
            "Build a foundation for lifelong learning and continuous improvement of your thinking",
          bgColor: "bg-green-50",
          borderColor: "border-green-200",
        },
      ],
    };
  },
  computed: {
    featuredWorkshops() {
      return [
        {
          number: 1,
          emoji: "🤔",
          title: "Noticing Confusion",
          goal: "Tune into moments of confusion and use them as a signal to explore further.",
          coreIdeas: [
            "Confusion as a clue",
            "Intellectual honesty",
            "Noticing vs. ignoring",
          ],
          category: "Foundations",
          slug: "noticing-uncertainty",
        },
        {
          number: 3,
          emoji: "🧠",
          title: "Catching Self-Deception",
          goal: "Notice when you're protecting a belief because it's comfortable, not because it's true.",
          coreIdeas: [
            "Emotional investment in beliefs",
            "Mental blind spots",
            "Clarity over comfort",
          ],
          category: "Self-Awareness",
          slug: "catching-self-deception",
        },
        {
          number: 5,
          emoji: "🎯",
          title: "Untangling Goals & Trade-offs",
          goal: "Get clarity on what you truly care about and notice when your goals are working against each other.",
          coreIdeas: [
            "Digging below surface goals",
            "Resolving internal tensions",
            "Choosing wisely",
          ],
          category: "Decision Making",
          slug: "goals-and-tradeoffs",
        },
      ];
    },
  },
  mounted() {
    // Empty mounted hook
  },
  methods: {
    // Empty methods
  },
};
</script>

<style>
/* Only keep basic transitions for UI feedback */
.group:hover {
  transform: translateY(-5px);
}
</style>
