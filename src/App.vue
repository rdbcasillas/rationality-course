<template>
  <div class="min-h-screen bg-sky-50 font-sans text-gray-800">
    <!-- Header -->
    <header class="bg-white shadow-sm">
      <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <!-- Logo/Brand -->
          <div class="flex items-center">
            <router-link to="/" class="flex items-center space-x-1">
              <img
                src="/logo.png"
                alt="Rationality Workshops Logo"
                class="h-8 w-8"
              />
              <span class="text-xl font-bold text-blue-600">
                Rationality Workshops
              </span>
            </router-link>
          </div>

          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center space-x-8">
            <router-link
              v-for="item in navItems"
              :key="item.path"
              :to="item.path"
              class="text-gray-600 hover:text-blue-600 transition"
              active-class="text-blue-600"
            >
              {{ item.name }}
            </router-link>
          </div>

          <!-- Mobile menu button -->
          <div class="flex items-center md:hidden">
            <button
              @click="mobileMenuOpen = !mobileMenuOpen"
              class="text-gray-600 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-md p-2"
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
      <div v-show="mobileMenuOpen" class="md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <router-link
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            class="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50"
            active-class="text-blue-600 bg-gray-50"
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
    <footer class="bg-gray-900 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- About Section -->
          <div>
            <h3 class="text-lg font-semibold mb-4">
              Rationality Workshop Series
            </h3>
            <p class="text-gray-300 text-sm leading-relaxed text-justify">
              A 12-week journey to develop clearer thinking, better
              decision-making, and more effective problem-solving skills through
              practical rationality techniques.
            </p>
          </div>

          <!-- Quick Links -->
          <div class="ml-12">
            <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
            <ul class="space-y-2">
              <li>
                <router-link
                  to="/workshops"
                  class="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  Workshop Series
                </router-link>
              </li>
              <li>
                <router-link
                  to="/community"
                  class="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  Join Community
                </router-link>
              </li>
              <li>
                <a
                  href="https://www.lesswrong.com"
                  target="_blank"
                  rel="noopener"
                  class="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  LessWrong
                </a>
              </li>
            </ul>
          </div>

          <!-- Contact -->
          <div>
            <h3 class="text-lg font-semibold mb-4">Get in Touch</h3>
            <p class="text-gray-300 text-sm mb-3">
              Have questions about the workshops or want to learn more?
            </p>
            <div class="text-sm">
              <p class="text-gray-300">Reach out to:</p>
              <a
                href="mailto:contact@rationalityworkshops.com"
                class="text-blue-400 hover:text-blue-300 transition-colors"
              >
                contact@rationalityworkshops.com
              </a>
            </div>
          </div>
        </div>

        <!-- Bottom Bar -->
        <!-- <div class="border-t border-gray-800 mt-8 pt-8 text-center">
          <p class="text-gray-400 text-sm">
            © {{ new Date().getFullYear() }} Rationality Workshop Series. Building better thinking, one workshop at a time.
          </p>
        </div> -->
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mobileMenuOpen: false,
      navItems: [
        { name: "About", path: "/about" },
        { name: "Workshops", path: "/workshops" },
        { name: "Community", path: "/community" },
        { name: "Signup", path: "/interest" },
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
