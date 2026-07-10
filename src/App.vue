<template>
  <div class="min-h-screen bg-warm-50 font-sans text-clay-800 relative">
    <!-- Header -->
    <header class="bg-warm-50/90 backdrop-blur-sm sticky top-0 z-40 rule-double">
      <nav class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <!-- Logo/Brand -->
          <router-link to="/" class="flex items-center gap-2 group">
            <BlinkingLogo
              class="h-8 w-8 transition-transform duration-300 group-hover:-rotate-12"
            />
            <span class="text-xl font-semibold text-ink font-display lowercase tracking-tight">
              rationality workshops
            </span>
          </router-link>

          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center gap-8">
            <router-link
              v-for="item in navItems"
              :key="item.path"
              :to="item.path"
              class="font-mono text-sm text-clay-600 hover:text-accent transition lowercase"
              active-class="text-accent squiggle"
            >
              {{ item.name }}
            </router-link>
          </div>

          <!-- Mobile menu button -->
          <div class="flex items-center md:hidden">
            <button
              @click="mobileMenuOpen = !mobileMenuOpen"
              aria-label="Toggle menu"
              class="text-clay-600 hover:text-accent focus:outline-none focus:ring-2 focus:ring-warm-300 rounded-md p-2"
            >
              <svg
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  v-if="!mobileMenuOpen"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
                <path
                  v-else
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <!-- Mobile Navigation -->
      <div v-show="mobileMenuOpen" class="md:hidden border-t border-clay-200 bg-warm-50">
        <div class="px-4 pt-2 pb-4 space-y-1">
          <router-link
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            class="block px-3 py-2 font-mono text-sm text-clay-600 hover:text-accent lowercase"
            active-class="text-accent"
            @click="mobileMenuOpen = false"
          >
            {{ item.name }}
          </router-link>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <!-- Footer -->
    <footer class="bg-ink-900 text-warm-100">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <p class="font-display text-3xl md:text-4xl text-warm-100 mb-10 lowercase">
          think clearer<span class="text-accent">.</span>
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
          <!-- About Section -->
          <div>
            <h3 class="font-mono text-xs tracking-widest text-warm-400 mb-3 lowercase">the series</h3>
            <p class="text-warm-200 text-sm leading-relaxed">
              A 12-week journey to develop clearer thinking, better
              decision-making, and more effective problem-solving skills through
              practical rationality techniques.
            </p>
          </div>

          <!-- Contact -->
          <div>
            <h3 class="font-mono text-xs tracking-widest text-warm-400 mb-3 lowercase">get in touch</h3>
            <p class="text-warm-200 text-sm mb-2">
              Have questions about the workshops or want to learn more?
            </p>
            <a
              href="mailto:contact@rationalityworkshops.com"
              class="font-mono text-sm text-warm-400 hover:text-warm-300 transition-colors"
            >
              contact@rationalityworkshops.com
            </a>
          </div>
        </div>

        <div class="border-t border-ink-700 mt-10 pt-8">
          <p class="text-warm-300/70 text-xs font-mono leading-relaxed">
            made possible through support from the Effective Altruism
            Infrastructure Fund (EAIF) and Effective Ventures.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import BlinkingLogo from "@/components/BlinkingLogo.vue";

export default {
  components: { BlinkingLogo },
  data() {
    return {
      mobileMenuOpen: false,
      navItems: [
        { name: "about", path: "/about" },
        { name: "workshops", path: "/workshops" },
        { name: "signup", path: "/interest" },
      ],
    };
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
