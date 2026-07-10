<template>
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <!-- Workshop Not Found -->
    <div v-if="!workshop" class="text-center py-16">
      <h1 class="text-3xl font-display font-medium text-ink mb-4 lowercase">
        workshop not found
      </h1>
      <router-link
        to="/workshops"
        class="inline-block font-mono text-sm text-accent hover:text-accent-700 transition lowercase"
      >
        ← back to the twelve
      </router-link>
    </div>

    <!-- Workshop Detail -->
    <article v-else class="relative">
      <!-- oversized chapter numeral (fallback when no poster) -->
      <div
        v-if="!workshop.image"
        class="ghost-num absolute -top-8 right-0 text-[10rem] md:text-[16rem] opacity-60 pointer-events-none"
        aria-hidden="true"
      >
        {{ String(workshop.number).padStart(2, "0") }}
      </div>

      <!-- event poster, clipped into the journal -->
      <figure
        v-if="workshop.image"
        class="relative md:absolute md:top-8 md:right-0 md:w-64 lg:w-72 w-56 mx-auto md:mx-0 mb-10 md:mb-0 rotate-2 hover:rotate-0 transition-transform duration-500"
      >
        <img
          :src="workshop.image"
          :alt="`${workshop.title} event poster`"
          class="w-full border-8 border-white shadow-lg"
        />
        <figcaption class="font-hand text-lg text-clay-500 text-center mt-2">
          from the event
        </figcaption>
      </figure>

      <!-- Breadcrumb -->
      <router-link
        to="/workshops"
        class="inline-block font-mono text-xs text-clay-500 hover:text-accent transition lowercase mb-10"
      >
        ← the twelve
      </router-link>

      <!-- Header -->
      <header :class="['relative mb-14', workshop.image ? 'md:pr-80' : 'max-w-2xl']">
        <p class="font-mono text-xs tracking-[0.25em] text-clay-500 mb-5 lowercase">
          workshop {{ workshop.number }} of 12 · {{ workshop.category.toLowerCase() }}
        </p>

        <h1 class="text-4xl md:text-6xl font-display font-medium text-ink leading-[1.05] tracking-tight mb-6 lowercase">
          {{ workshop.title.toLowerCase() }}
        </h1>

        <p class="font-hand text-2xl text-accent -rotate-1 inline-block mb-6 lowercase">
          {{ workshop.subtitle.toLowerCase() }}
        </p>

        <p class="text-xl text-clay-600 leading-relaxed font-display italic border-l-2 border-ink pl-5">
          {{ workshop.goal }}
        </p>
      </header>

      <!-- Sessions — field log -->
      <section v-if="workshop.sessions && workshop.sessions.length" class="mb-14">
        <h2 class="font-mono text-xs tracking-[0.25em] text-clay-500 lowercase border-b border-clay-300 pb-3 mb-2">
          field log — {{ workshop.sessions.length > 1 ? `${workshop.sessions.length} sessions` : "1 session" }}
        </h2>
        <div
          v-for="(session, idx) in workshop.sessions"
          :key="idx"
          class="py-5 border-b border-dotted border-clay-400 flex flex-wrap items-baseline gap-x-6 gap-y-2"
        >
          <div class="min-w-0">
            <p class="font-display text-lg text-ink lowercase">
              {{ session.date }}
            </p>
            <p class="text-sm text-clay-600">
              {{ session.location }}
            </p>
            <p v-if="session.note" class="font-hand text-lg text-accent mt-1">
              {{ session.note }}
            </p>
          </div>
          <a
            v-if="session.lumaEvent"
            :href="session.lumaEvent"
            target="_blank"
            rel="noopener noreferrer"
            class="ml-auto font-mono text-xs text-clay-600 hover:text-accent border border-clay-300 hover:border-accent px-3 py-1.5 transition lowercase whitespace-nowrap"
          >
            event page ↗
          </a>
        </div>
      </section>

      <!-- Core Ideas & Skills -->
      <section class="grid grid-cols-1 md:grid-cols-2 gap-10 mb-14">
        <div class="border-t-2 border-ink pt-5">
          <h2 class="font-mono text-xs tracking-[0.25em] text-clay-500 lowercase mb-5">
            core ideas
          </h2>
          <ul class="space-y-3">
            <li
              v-for="(idea, idx) in workshop.coreIdeas"
              :key="idx"
              class="text-clay-700 flex items-start leading-relaxed"
            >
              <span class="text-accent mr-3 flex-shrink-0" aria-hidden="true">✳</span>
              {{ idea }}
            </li>
          </ul>
        </div>

        <div v-if="workshop.benefits" class="border-t-2 border-ink pt-5">
          <h2 class="font-mono text-xs tracking-[0.25em] text-clay-500 lowercase mb-5">
            skills you build
          </h2>
          <ul class="space-y-3">
            <li
              v-for="(benefit, idx) in workshop.benefits"
              :key="idx"
              class="text-clay-700 flex items-start leading-relaxed"
            >
              <span class="text-sage-600 mr-3 flex-shrink-0" aria-hidden="true">→</span>
              {{ benefit }}
            </li>
          </ul>
        </div>
      </section>

      <!-- Resources Section -->
      <section v-if="workshop.resources" class="mb-14">
        <h2 class="font-mono text-xs tracking-[0.25em] text-clay-500 lowercase border-b border-clay-300 pb-3 mb-6">
          materials
        </h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <!-- YouTube Video Link -->
          <a
            v-if="workshop.resources.youtube"
            :href="workshop.resources.youtube"
            target="_blank"
            rel="noopener noreferrer"
            class="group flex items-center gap-4 p-5 border border-clay-300 hover:border-ink hover:bg-warm-100 transition-all duration-200"
          >
            <span class="font-display text-3xl text-clay-400 group-hover:text-accent transition-colors" aria-hidden="true">▶</span>
            <span>
              <span class="block font-display text-lg text-ink lowercase">recording</span>
              <span class="block font-mono text-xs text-clay-500 lowercase">watch on youtube ↗</span>
            </span>
          </a>

          <!-- Slides Link -->
          <a
            v-if="workshop.resources.slides"
            :href="workshop.resources.slides"
            target="_blank"
            rel="noopener noreferrer"
            class="group flex items-center gap-4 p-5 border border-clay-300 hover:border-ink hover:bg-warm-100 transition-all duration-200"
          >
            <span class="font-display text-3xl text-clay-400 group-hover:text-accent transition-colors" aria-hidden="true">▤</span>
            <span>
              <span class="block font-display text-lg text-ink lowercase">slides</span>
              <span class="block font-mono text-xs text-clay-500 lowercase">view presentation ↗</span>
            </span>
          </a>
        </div>
      </section>

      <!-- Prev / Next navigation -->
      <nav class="border-t border-clay-300 pt-8 flex justify-between gap-6">
        <router-link
          v-if="prevWorkshop"
          :to="{ name: 'WorkshopDetail', params: { slug: prevWorkshop.slug } }"
          class="group max-w-[45%]"
        >
          <span class="block font-mono text-xs text-clay-500 lowercase mb-1">
            ← previous
          </span>
          <span class="font-display text-lg text-ink group-hover:text-accent transition-colors lowercase">
            {{ prevWorkshop.title.toLowerCase() }}
          </span>
        </router-link>
        <span v-else></span>

        <router-link
          v-if="nextWorkshop"
          :to="{ name: 'WorkshopDetail', params: { slug: nextWorkshop.slug } }"
          class="group max-w-[45%] text-right ml-auto"
        >
          <span class="block font-mono text-xs text-clay-500 lowercase mb-1">
            next →
          </span>
          <span class="font-display text-lg text-ink group-hover:text-accent transition-colors lowercase">
            {{ nextWorkshop.title.toLowerCase() }}
          </span>
        </router-link>
      </nav>
    </article>
  </div>
</template>

<script>
import { workshops, sortChronologically } from "@/data/workshops.js";

const orderedWorkshops = sortChronologically(workshops);

export default {
  data() {
    return {
      workshop: null,
    };
  },
  computed: {
    prevWorkshop() {
      if (!this.workshop) return null;
      const idx = orderedWorkshops.findIndex((w) => w.slug === this.workshop.slug);
      return idx > 0 ? orderedWorkshops[idx - 1] : null;
    },
    nextWorkshop() {
      if (!this.workshop) return null;
      const idx = orderedWorkshops.findIndex((w) => w.slug === this.workshop.slug);
      return idx >= 0 && idx < orderedWorkshops.length - 1
        ? orderedWorkshops[idx + 1]
        : null;
    },
  },
  created() {
    this.loadWorkshop();
  },
  watch: {
    "$route.params.slug"() {
      this.loadWorkshop();
    },
  },
  methods: {
    loadWorkshop() {
      const slug = this.$route.params.slug;
      this.workshop = workshops.find((w) => w.slug === slug);
    },
  },
};
</script>
