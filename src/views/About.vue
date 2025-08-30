<template>
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <!-- Header -->
    <div class="text-center mb-16">
      <h1 class="text-4xl md:text-5xl font-bold mb-6 text-clay-800 font-display lowercase">
        why these workshops?
      </h1>
    </div>

    <!-- Main Content -->
    <div class="prose prose-lg max-w-none">
      <!-- The Context -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold text-clay-800 mb-6 font-display lowercase">
          the context we're in
        </h2>
        <p class="text-clay-700 leading-relaxed mb-4 ">
          Most of our schooling focuses on subjects and facts, but rarely on how
          to think well. We graduate without a clear toolkit for making
          decisions, weighing evidence, or spotting our own biases. That gap
          becomes obvious in today’s environment - constant notifications,
          endless headlines and quick opinions competing for our attention.
        </p>
        <p class="text-clay-700 leading-relaxed mb-8 ">
          What’s missing isn’t another flood of information. It’s the habits and
          mental skills that help us pause when we’re confused, look deeper
          instead of rushing past, and connect with people who are also
          practising deliberate, clear thinking.
        </p>
      </section>

      <!-- Our Motivation -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold text-clay-800 mb-6 font-display lowercase">building skills that stick</h2>
        <p class="text-clay-700 leading-relaxed mb-6 ">
          We’re not doing “read a book and hope it sticks.” Change comes from
          practice, feedback, and repetition in a supportive group.
        </p>
        <p class="text-clay-700 leading-relaxed mb-6 ">
          This series builds two things: <strong class="text-warm-700">epistemic skills</strong> —
          noticing biases, updating beliefs, evaluating evidence, staying humble
          — and <strong class="text-warm-700">practical tools</strong> — making decisions, forming
          habits, setting realistic goals, resolving inner conflicts.
        </p>

        <div class="grid md:grid-cols-2 gap-12 mb-8">
          <div>
            <h3 class="text-lg font-semibold text-clay-800 mb-4 font-serif lowercase">
              how we're approaching this
            </h3>
            <ul class="text-clay-700 space-y-3">
              <li>90‑minute sessions with discussion + exercises</li>
              <li>Follow‑ups every two weeks for 3 months</li>
              <li>Spaced repetition: ideas revisited in new contexts</li>
              <li>A small community focused on steady improvement</li>
            </ul>
          </div>

          <div>
            <h3 class="text-lg font-semibold text-clay-800 mb-4 font-serif lowercase">
              what makes this different
            </h3>
            <ul class="text-clay-700 space-y-3">
              <li>Behaviour change over information dumps</li>
              <li>Light‑weight measurements beyond self‑reports</li>
              <li>Built‑in accountability</li>
              <li>Long‑term reinforcement, not a one‑off</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- About Vatsal -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold text-clay-800 mb-6 font-display lowercase">a bit about me</h2>
        <p class="text-clay-700 leading-relaxed mb-4 ">
          I
          <a
            href="https://vatsalmehra.com"
            target="_blank"
            rel="noopener"
            class="text-warm-600 hover:text-warm-700 no-underline hover:underline"
            >spent over a decade</a
          >
          working in software and genomics—solving technical puzzles, leading
          projects, and building tools. Over time, I noticed the moments I found
          most rewarding weren’t the ones where I cracked a tough code problem,
          but where I could help someone see a situation more clearly or
          untangle a difficult choice.
        </p>
        <p class="text-clay-700 leading-relaxed mb-4 ">
          I've been exploring rationality and decision‑making for more than ten
          years, not just as abstract ideas but as practices you can integrate
          into daily life. Through my own work and with groups I've been part
          of, I've learned that sharp thinking alone isn't enough—it becomes far
          more effective when paired with deliberate practice and emotional awareness.
        </p>
        <p class="text-clay-700 leading-relaxed mb-8 ">
          My focus now is on helping people strengthen personal clarity, develop agency, and contribute to collective well‑being. In my experience, when you develop clearer thinking and stronger agency, you naturally strengthen your ability to do meaningful work.
        </p>
      </section>

      <!-- Call to Action -->
      <section class="text-center border-t border-clay-200 pt-12 mt-16">
        <p class="text-xl text-clay-600 mb-8 max-w-2xl mx-auto ">
          think clearer. choose better. connect with care. that's the path here.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link
            to="/workshops"
            class="inline-block bg-warm-600 hover:bg-warm-700 text-white font-semibold px-6 py-3 rounded-sm transition border border-warm-700 lowercase"
          >
            explore workshops
          </router-link>
          <router-link
            to="/interest"
            class="inline-block border-2 border-clay-400 text-warm-600 hover:bg-warm-600 hover:text-white font-semibold px-6 py-3 rounded-sm transition lowercase"
          >
            sign up for updates
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
