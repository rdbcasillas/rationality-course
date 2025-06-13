<template>
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="text-center mb-12">
      <h1 class="text-3xl md:text-4xl font-bold mb-4 font-display">
        Learning Resources
      </h1>
      <p class="text-xl text-gray-600">
        A curated collection of books, articles, and tools to support your
        rationality practice.
      </p>
    </div>
    <div class="mx-auto text-center">
      <p class="text-xl">Coming Soon</p>
    </div>
    <!-- <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div v-for="(category, index) in categories" :key="index">
        <div class="bg-white rounded-xl shadow-lg p-6">
          <h2 class="text-2xl font-semibold mb-6 font-display text-blue-600">
            {{ category.title }}
          </h2>
          <ul class="space-y-4">
            <li v-for="(resource, rIndex) in category.resources" :key="rIndex">
              <a
                :href="resource.url"
                target="_blank"
                rel="noopener noreferrer"
                class="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition"
              >
                <h3 class="font-semibold mb-1">{{ resource.title }}</h3>
                <p class="text-sm text-gray-600">{{ resource.description }}</p>
                <div class="mt-2 flex items-center text-sm text-blue-600">
                  <span>{{ resource.type }}</span>
                  <svg
                    class="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div> -->

    <!-- Additional Resources CTA -->
    <!-- <div class="mt-12 text-center">
      <p class="text-gray-600 mb-4">
        Looking for more? Check out our community for additional
        recommendations.
      </p>
      <router-link
        to="/community"
        class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition transform hover:scale-105"
      >
        Join the Community
      </router-link>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        {
          title: "Core Reading",
          resources: [
            {
              title: "Rationality: From AI to Zombies",
              description:
                "A comprehensive introduction to rationality concepts and techniques.",
              url: "https://www.lesswrong.com/rationality",
              type: "Book Series",
            },
            {
              title: "Thinking, Fast and Slow",
              description:
                "Understanding the two systems that drive the way we think.",
              url: "#",
              type: "Book",
            },
            {
              title: "The Scout Mindset",
              description: "How to see things clearly and work toward truth.",
              url: "#",
              type: "Book",
            },
          ],
        },
        {
          title: "Practice Tools",
          resources: [
            {
              title: "Calibration Training App",
              description:
                "Improve your ability to assess probabilities accurately.",
              url: "#",
              type: "Interactive Tool",
            },
            {
              title: "Cognitive Bias Codex",
              description: "A comprehensive map of cognitive biases.",
              url: "#",
              type: "Reference",
            },
            {
              title: "Double Crux Framework",
              description: "A structured approach to productive disagreement.",
              url: "#",
              type: "Guide",
            },
          ],
        },
        {
          title: "Community Content",
          resources: [
            {
              title: "LessWrong",
              description:
                "A community blog devoted to refining the art of rationality.",
              url: "https://www.lesswrong.com",
              type: "Forum",
            },
            {
              title: "CFAR Handbook",
              description: "Applied rationality techniques and workshops.",
              url: "#",
              type: "Guide",
            },
            {
              title: "Clearer Thinking",
              description: "Interactive tools and training programs.",
              url: "#",
              type: "Platform",
            },
          ],
        },
        {
          title: "Advanced Topics",
          resources: [
            {
              title: "Good Judgment Project",
              description:
                "Research and training in forecasting and decision making.",
              url: "#",
              type: "Research",
            },
            {
              title: "Replacing Guilt Series",
              description: "Understanding and improving motivation.",
              url: "#",
              type: "Article Series",
            },
            {
              title: "Focusing Technique",
              description: "A method for accessing embodied knowledge.",
              url: "#",
              type: "Guide",
            },
          ],
        },
      ],
    };
  },
};
</script>
