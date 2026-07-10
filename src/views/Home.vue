<template>
  <div class="relative overflow-x-clip">
    <!-- Hero Section -->
    <section id="hero" class="relative py-20 md:py-28">
      <!-- logo watermark (blinks) -->
      <BlinkingLogo
        aria-hidden="true"
        class="absolute top-8 right-4 md:right-16 w-48 md:w-80 opacity-30 pointer-events-none select-none"
      />

      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div class="max-w-3xl">
          <p class="reveal font-mono text-xs tracking-[0.25em] text-clay-500 mb-6 lowercase" style="animation-delay: 0.05s">
            a workshop series · bangalore · hyderabad · online
          </p>

          <h1
            class="reveal text-5xl md:text-7xl font-display font-medium text-ink leading-[1.05] tracking-tight mb-8"
            style="animation-delay: 0.15s"
          >
            thinking clearer,<br />
            <span class="italic font-light text-clay-700">one workshop at a time</span>
          </h1>

          <p class="reveal text-xl text-clay-600 mb-4 leading-relaxed max-w-xl" style="animation-delay: 0.3s">
            twelve practice-focused sessions to develop better reasoning,
            decision-making, and problem-solving habits.
          </p>

          <p
            class="reveal font-hand text-2xl text-accent -rotate-2 inline-block mb-10"
            style="animation-delay: 0.45s"
          >
            no lectures — you practice.
          </p>

          <div class="reveal flex flex-col sm:flex-row gap-4 mb-12" style="animation-delay: 0.55s">
            <router-link
              to="/workshops"
              class="inline-block bg-ink hover:bg-ink-700 text-warm-50 font-medium px-7 py-3.5 transition lowercase"
            >
              explore the twelve →
            </router-link>
            <router-link
              to="/interest"
              class="inline-block border border-clay-400 text-clay-700 hover:border-accent hover:text-accent font-medium px-7 py-3.5 transition lowercase"
            >
              sign up for updates
            </router-link>
          </div>

          <p class="reveal text-xs font-mono text-clay-500 lowercase" style="animation-delay: 0.65s">
            free to attend · supported by the effective altruism infrastructure
            fund &amp; effective ventures
          </p>
        </div>
      </div>
    </section>

    <!-- The Twelve — table of contents -->
    <section id="workshops" class="bg-warm-100/70 py-20 border-y border-clay-200">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-wrap items-baseline justify-between gap-4 mb-12">
          <h2 class="text-3xl md:text-5xl font-display font-medium text-ink lowercase">
            the twelve
          </h2>
          <p class="font-hand text-2xl text-accent -rotate-1">
            each stands alone; together they compound
          </p>
        </div>

        <ol>
          <li v-for="(workshop, index) in workshops" :key="workshop.slug">
            <router-link
              :to="{ name: 'WorkshopDetail', params: { slug: workshop.slug } }"
              class="group flex flex-wrap items-baseline gap-x-4 gap-y-1 py-4 border-b border-dotted border-clay-400 hover:border-solid hover:border-accent transition-colors"
            >
              <span class="font-mono text-sm text-clay-400 group-hover:text-accent transition-colors w-8">
                {{ String(index + 1).padStart(2, "0") }}
              </span>
              <span class="font-display text-xl md:text-2xl text-ink group-hover:translate-x-1.5 transition-transform duration-300 lowercase">
                {{ workshop.title.toLowerCase() }}
              </span>
              <span class="hidden sm:inline text-sm italic text-clay-500 lowercase">
                — {{ workshop.subtitle.toLowerCase() }}
              </span>
              <span class="ml-auto font-mono text-xs text-clay-500 lowercase whitespace-nowrap">
                <template v-if="workshop.sessions && workshop.sessions.length">
                  <span class="inline-block w-1.5 h-1.5 rounded-full bg-sage-500 mr-1.5 align-middle"></span>held ×{{ workshop.sessions.length }}
                </template>
                <template v-else>
                  <span class="inline-block w-1.5 h-1.5 rounded-full border border-clay-400 mr-1.5 align-middle"></span>upcoming
                </template>
              </span>
            </router-link>
          </li>
        </ol>
      </div>
    </section>

    <!-- What You Develop Section -->
    <section id="features" class="py-20">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl md:text-5xl font-display font-medium text-ink mb-12 lowercase">
          what we work on
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
          <div
            v-for="(feature, index) in features"
            :key="index"
            class="border-t-2 border-ink pt-4"
          >
            <p class="font-mono text-xs text-clay-400 mb-2">
              {{ String(index + 1).padStart(2, "0") }}
            </p>
            <h3 class="text-lg font-display font-semibold text-ink mb-2 lowercase">
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
    <section id="interest" class="bg-ink-900 py-20 relative overflow-hidden">
      <div
        class="ghost-num absolute -bottom-16 -left-4 text-[16rem] pointer-events-none opacity-20"
        aria-hidden="true"
        style="-webkit-text-stroke-color: #564540"
      >
        ✳
      </div>
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <h2 class="text-3xl md:text-5xl font-display font-medium text-warm-100 mb-4 lowercase">
          interested? get workshop updates
        </h2>
        <p class="font-hand text-2xl text-warm-400 mb-10 rotate-1 inline-block">
          we write only when there's something useful
        </p>
        <div>
          <router-link
            to="/interest"
            class="inline-block bg-warm-100 hover:bg-white text-ink font-medium px-8 py-3.5 transition lowercase"
          >
            sign up for updates
          </router-link>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section id="faq" class="py-20">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl md:text-5xl font-display font-medium text-ink mb-12 lowercase">
          questions, answered
        </h2>

        <div>
          <details
            v-for="(faq, index) in faqs"
            :key="index"
            class="group border-b border-dotted border-clay-400 py-5"
          >
            <summary class="flex items-baseline gap-4 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
              <span class="font-mono text-sm text-clay-400">
                {{ String(index + 1).padStart(2, "0") }}
              </span>
              <span class="font-display text-lg md:text-xl text-ink lowercase flex-1">
                {{ faq.q }}
              </span>
              <span class="font-mono text-accent text-xl transition-transform duration-300 group-open:rotate-45">+</span>
            </summary>
            <div class="pl-12 pt-3 text-clay-600 leading-relaxed text-[15px]" v-html="faq.a"></div>
          </details>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { workshops, sortChronologically } from "@/data/workshops.js";
import BlinkingLogo from "@/components/BlinkingLogo.vue";

export default {
  components: { BlinkingLogo },
  data() {
    return {
      workshops: sortChronologically(workshops),
      features: [
        {
          title: "Systematic Reasoning",
          description:
            "Break down complex problems into manageable pieces and think through them step by step",
        },
        {
          title: "Cognitive Biases",
          description:
            "Recognize the mental shortcuts that trip you up and learn to question your assumptions",
        },
        {
          title: "Practical Tools",
          description:
            "Learn concrete techniques and build thinking habits you can use daily for clearer choices",
        },
        {
          title: "Community Learning",
          description:
            "Practice with supportive peers who challenge your thinking in constructive ways",
        },
        {
          title: "Real-World Application",
          description:
            "Apply rationality principles to career decisions, relationships and personal goals",
        },
        {
          title: "Ongoing Growth",
          description:
            "Build a foundation for lifelong learning and continuous improvement of your thinking",
        },
      ],
      faqs: [
        {
          q: "how often do these workshops happen?",
          a: "Workshops are held once every couple of weeks, giving you time to practice and internalize the concepts between sessions. If you have signed up for a particular workshop, you will receive a calendar invite with the date and time.",
        },
        {
          q: "where do the workshops happen?",
          a: 'We\'ve run them in <strong>Bangalore</strong> and <strong>Hyderabad</strong>, at venues like <a href="https://enterportal.org" target="_blank" rel="noopener" class="text-accent hover:underline">Portal</a>, and some sessions run <strong>online</strong>. Each workshop\'s page lists where and when it has happened, with event links.',
        },
        {
          q: "can i join online?",
          a: 'Yes — some sessions run online over Google Meet. To hear about upcoming online sessions, use the <a href="/interest" class="text-accent hover:underline">signup form</a> and enter <strong>"online"</strong> in the city field.',
        },
        {
          q: "what's the cost?",
          a: "Thanks to support from the Effective Altruism Infrastructure Fund (EAIF) and Effective Ventures, these workshops are free to attend. If you find value in them and would like to support future sessions, voluntary donations are welcome.",
        },
        {
          q: "do i have to attend all of them?",
          a: "You can attend individual workshops, but we encourage taking as many as possible for maximum benefit. Our pedagogy uses spaced repetition to recall ideas from previous workshops, so attending multiple sessions reinforces your learning.",
        },
        {
          q: "will it be lecture style?",
          a: "Our workshops are a mix of theory and interactive activities with a heavy focus on the latter. You will be actively participating, practicing techniques, and working through real scenarios with other participants.",
        },
      ],
    };
  },
};
</script>
