<template>
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <!-- Workshop Not Found -->
    <div v-if="!workshop" class="text-center py-16">
      <h1 class="text-2xl font-bold text-clay-800 mb-4 font-display lowercase">
        workshop not found
      </h1>
      <router-link
        to="/workshops"
        class="inline-block text-warm-600 hover:text-warm-700 transition lowercase"
      >
        ← back to workshops
      </router-link>
    </div>

    <!-- Workshop Detail -->
    <div v-else class="bg-warm-50 border-l-4 border-clay-400 shadow-sm">
      <!-- Header Section -->
      <div class="p-6 sm:p-8 border-b border-clay-200">
        <div class="flex items-center gap-2 mb-3">
          <span class="text-xs font-mono text-clay-600 bg-clay-100 px-2 py-1 rounded-sm">
            {{ workshop.number }}/12
          </span>
          <span :class="['px-2 py-1 rounded-sm text-xs font-medium', workshop.categoryColor]">
            {{ workshop.category.toLowerCase() }}
          </span>
        </div>

        <h1 class="text-2xl sm:text-3xl font-bold text-clay-800 mb-3 font-serif leading-tight">
          {{ workshop.title.toLowerCase() }}
        </h1>

        <p class="text-clay-600 text-base leading-relaxed italic">
          {{ workshop.goal }}
        </p>

      </div>

      <!-- Sessions Section -->
      <div v-if="workshop.sessions && workshop.sessions.length" class="p-6 sm:p-8 border-b border-clay-200">
        <h2 class="text-sm font-semibold text-clay-600 lowercase mb-4 font-mono">
          {{ workshop.sessions.length > 1 ? 'sessions' : 'when & where' }}
        </h2>
        <div class="space-y-3">
          <div
            v-for="(session, idx) in workshop.sessions"
            :key="idx"
            class="p-4 bg-warm-100 border border-warm-300 rounded-sm"
          >
            <div class="flex flex-wrap gap-x-5 gap-y-2 text-sm text-clay-700 mb-3">
              <div v-if="session.date" class="flex items-center gap-2">
                <svg class="w-4 h-4 text-clay-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>{{ session.date }}</span>
              </div>
              <div v-if="session.location" class="flex items-center gap-2">
                <svg class="w-4 h-4 text-clay-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{{ session.location }}</span>
              </div>
            </div>
            <p v-if="session.note" class="text-xs text-clay-600 italic mb-3">
              {{ session.note }}
            </p>
            <a
              v-if="session.lumaEvent"
              :href="session.lumaEvent"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1.5 text-sm font-medium text-warm-700 hover:text-warm-800 transition lowercase"
            >
              luma event page
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Core Ideas Section -->
      <div class="p-6 sm:p-8 border-b border-clay-200">
        <h2 class="text-sm font-semibold text-clay-600 lowercase mb-4 font-mono">
          core ideas
        </h2>
        <ul class="space-y-2">
          <li
            v-for="(idea, idx) in workshop.coreIdeas"
            :key="idx"
            class="text-sm text-clay-700 flex items-start"
          >
            <span class="inline-block w-1 h-1 mt-2 mr-3 bg-clay-400 flex-shrink-0"></span>
            {{ idea }}
          </li>
        </ul>
      </div>

      <!-- Skills You Build Section -->
      <div v-if="workshop.benefits" class="p-6 sm:p-8 border-b border-clay-200">
        <h2 class="text-sm font-semibold text-clay-600 lowercase mb-4 font-mono">
          skills you build
        </h2>
        <ul class="space-y-2">
          <li
            v-for="(benefit, idx) in workshop.benefits"
            :key="idx"
            class="text-sm text-clay-700 flex items-start"
          >
            <span class="inline-block w-1 h-1 mt-2 mr-3 bg-sage-400 flex-shrink-0"></span>
            {{ benefit }}
          </li>
        </ul>
      </div>

      <!-- Resources Section -->
      <div v-if="workshop.resources" class="p-6 sm:p-8 bg-clay-50">
        <h2 class="text-lg font-semibold text-clay-800 lowercase mb-4 font-display">
          workshop resources
        </h2>

        <div class="space-y-3">
          <!-- YouTube Video Link -->
          <a
            v-if="workshop.resources.youtube"
            :href="workshop.resources.youtube"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-3 p-4 bg-warm-100 border border-warm-300 rounded-sm hover:bg-warm-200 transition-all duration-200 group"
          >
            <div class="flex-shrink-0 w-10 h-10 bg-warm-200 rounded-sm flex items-center justify-center group-hover:bg-warm-300 transition-colors">
              <svg class="w-5 h-5 text-warm-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <div class="flex-1">
              <div class="text-sm font-medium text-clay-800 lowercase">workshop recording</div>
              <div class="text-xs text-clay-600">watch on youtube</div>
            </div>
            <svg class="w-5 h-5 text-clay-400 group-hover:text-clay-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>

          <!-- Slides Link -->
          <a
            v-if="workshop.resources.slides"
            :href="workshop.resources.slides"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-3 p-4 bg-warm-100 border border-warm-300 rounded-sm hover:bg-warm-200 transition-all duration-200 group"
          >
            <div class="flex-shrink-0 w-10 h-10 bg-warm-200 rounded-sm flex items-center justify-center group-hover:bg-warm-300 transition-colors">
              <svg class="w-5 h-5 text-warm-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <div class="flex-1">
              <div class="text-sm font-medium text-clay-800 lowercase">workshop slides</div>
              <div class="text-xs text-clay-600">view presentation materials</div>
            </div>
            <svg class="w-5 h-5 text-clay-400 group-hover:text-clay-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>

      <!-- Back Navigation -->
      <div class="p-6 sm:p-8 border-t border-clay-200 bg-warm-50">
        <router-link
          to="/workshops"
          class="inline-flex items-center gap-2 text-sm text-warm-600 hover:text-warm-700 transition lowercase font-medium"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          back to workshops
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { workshops } from '@/data/workshops.js';

export default {
  data() {
    return {
      workshop: null,
    };
  },
  created() {
    this.loadWorkshop();
  },
  watch: {
    '$route.params.slug'() {
      this.loadWorkshop();
    }
  },
  methods: {
    loadWorkshop() {
      const slug = this.$route.params.slug;
      this.workshop = workshops.find(w => w.slug === slug);
    }
  }
};
</script>
