<template>
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <!-- Header -->
    <div class="text-center mb-16">
      <h1 class="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
        Why These Workshops?
      </h1>
    </div>

    <!-- Main Content -->
    <div class="prose prose-lg max-w-none">
      <!-- The Context -->
      <section class="mb-16">
        <h2 class="text-3xl font-bold text-gray-900 mb-6">
          The Context We're In
        </h2>
        <p class="text-gray-700 leading-relaxed mb-4 text-justify">
          Our educational institutions have completely failed at teaching people
          how to think clearly or behave rationally. Despite decades of
          schooling, most of us graduate without any systematic training in
          decision-making, bias recognition, or evidence evaluation. The spaces
          where we form beliefs and make sense of the world are deteriorating
          rapidly.
        </p>
        <p class="text-gray-700 leading-relaxed mb-8 text-justify">
          We're navigating a fractured attention economy, polarized discourse,
          and increasing social isolation. The tools we need aren't just more
          information—they're better ways of thinking, feeling, and connecting.
        </p>
      </section>

      <!-- Our Motivation -->
      <section class="mb-16">
        <h2 class="text-3xl font-bold text-gray-900 mb-6">Our Motivation</h2>
        <p class="text-gray-700 leading-relaxed mb-6 text-justify">
          We're tired of the usual approach: read some books, watch some videos,
          and hope people magically change how they think and behave. That
          doesn't work. Real change requires deliberate practice, community
          support, and systematic reinforcement over time.
        </p>
        <p class="text-gray-700 leading-relaxed mb-6 text-justify">
          These workshops are our attempt to figure out what actually works for
          bringing about lasting changes in thinking and behavior. We're
          building both <strong>epistemic skills</strong> (noticing biases,
          updating beliefs, understanding evidence, recognizing polarized
          thinking, maintaining intellectual humility) and
          <strong>practical rationality techniques</strong> (decision-making,
          habit formation, creating achievable goals, resolving inner
          conflicts).
        </p>

        <div class="grid md:grid-cols-2 gap-12 mb-8">
          <div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">
              How We're Approaching This
            </h3>
            <ul class="text-gray-700 space-y-3">
              <li>
                90-minute sessions combining discussions with practical
                exercises
              </li>
              <li>Bi-weekly follow-ups for 3 months to track real changes</li>
              <li>
                Spaced repetition—concepts revisited in different contexts
              </li>
              <li>Community formation around systematic self-improvement</li>
            </ul>
          </div>

          <div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">
              What Makes This Different
            </h3>
            <ul class="text-gray-700 space-y-3">
              <li>
                Focus on actual behavior change, not just knowledge transfer
              </li>
              <li>Robust measurement beyond basic self-reporting</li>
              <li>Deliberate community building and accountability</li>
              <li>Long-term reinforcement, not just weekend workshops</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Portal Context -->
      <section class="mb-16">
        <h2 class="text-3xl font-bold text-gray-900 mb-6">
          The Larger Context: Portal
        </h2>
        <p class="text-gray-700 leading-relaxed mb-4 text-justify">
          These workshops are part of a larger experiment called
          <strong
            ><a
              href="https://www.enterportal.org"
              target="_blank"
              rel="noopener"
              class="text-blue-600 hover:text-blue-700 no-underline hover:underline"
              >Portal
            </a></strong
          >
          - a space that emerged from a hunger for deeper human connection,
          experiential learning, and meaningful collaboration.
        </p>
        <p class="text-gray-700 leading-relaxed mb-8 text-justify">
          Portal brings together curious minds and open hearts from diverse
          backgrounds, combining intellectual rigor with emotional wisdom. We're
          exploring how individual growth and collective flourishing can support
          each other, creating environments where people can learn and explore
          together rather than consuming standardized education in isolation.
        </p>
      </section>

      <!-- About Vatsal -->
      <section class="mb-16">
        <h2 class="text-3xl font-bold text-gray-900 mb-6">A Bit About Me</h2>
        <p class="text-gray-700 leading-relaxed mb-4 text-justify">
          I
          <a
            href="https://vatsalmehra.com"
            target="_blank"
            rel="noopener"
            class="text-blue-600 hover:text-blue-700 no-underline hover:underline"
            >spent over a decade</a
          >
          building software and solving genomics puzzles, but discovered that
          what really lit me up wasn't solving technical problems—it was helping
          people untangle the complexities of their lives.
        </p>
        <p class="text-gray-700 leading-relaxed mb-4 text-justify">
          My path began with a deep dive into rationality and critical thinking
          over a decade ago. As someone fascinated by how we make better
          decisions, I spent years exploring the tools of clear thinking. But
          through working with individuals and building communities, I
          discovered something crucial: addressing our current challenges
          requires integrating sharp thinking with emotional depth and wisdom.
        </p>
        <p class="text-gray-700 leading-relaxed mb-8 text-justify">
          I believe personal growth and collective flourishing reinforce each
          other. When we develop better ways of thinking and feeling, we become
          better equipped to address both our individual challenges and
          contribute to larger positive change.
        </p>
      </section>

      <!-- Call to Action -->
      <section class="text-center border-t border-gray-200 pt-12 mt-16">
        <p class="text-xl text-gray-600 mb-8 max-w-2xl mx-auto text-justify">
          Think clearer. Choose better. Connect deeply. That’s the path we’re
          on.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link
            to="/workshops"
            class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition transform hover:scale-105"
          >
            Explore Workshops
          </router-link>
          <router-link
            to="/community"
            class="inline-block border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-8 py-3 rounded-lg transition"
          >
            Join Community
          </router-link>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  mounted() {
    // Set page title
    document.title = "About | Rationality Workshop Series";
  },
};
</script>

<style scoped>
/* Custom prose styles for better readability */
.prose {
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    sans-serif;
  line-height: 1.7;
}

.prose h2 {
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.prose h3 {
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
}

.prose p {
  margin-bottom: 1.25rem;
}

.prose strong {
  font-weight: 600;
  color: #374151;
}
</style>
