<template>
  <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="text-center mb-12">
      <h1 class="text-3xl md:text-4xl font-bold mb-4 font-display">
        Join Our Community
      </h1>
      <p class="text-xl text-gray-600">
        Connect with fellow rationality practitioners and continue your growth journey together.
      </p>
    </div>

    <div class="bg-white rounded-xl shadow-lg p-8 mb-12">
      <div class="prose prose-lg mx-auto">
        <h2 class="text-2xl font-semibold mb-4 font-display">Why Join?</h2>
        <ul class="space-y-4">
          <li class="flex items-start">
            <span class="inline-block w-2 h-2 mt-3 mr-3 bg-blue-400 rounded-full"></span>
            <span>Practice rationality techniques with supportive peers</span>
          </li>
          <li class="flex items-start">
            <span class="inline-block w-2 h-2 mt-3 mr-3 bg-blue-400 rounded-full"></span>
            <span>Share experiences and learn from others' insights</span>
          </li>
          <li class="flex items-start">
            <span class="inline-block w-2 h-2 mt-3 mr-3 bg-blue-400 rounded-full"></span>
            <span>Access exclusive resources and discussion threads</span>
          </li>
          <li class="flex items-start">
            <span class="inline-block w-2 h-2 mt-3 mr-3 bg-blue-400 rounded-full"></span>
            <span>Participate in regular community events and challenges</span>
          </li>
        </ul>

        <h2 class="text-2xl font-semibold mt-8 mb-4 font-display">Community Guidelines</h2>
        <ul class="space-y-4">
          <li class="flex items-start">
            <span class="inline-block w-2 h-2 mt-3 mr-3 bg-blue-400 rounded-full"></span>
            <span>Be curious and open to new perspectives</span>
          </li>
          <li class="flex items-start">
            <span class="inline-block w-2 h-2 mt-3 mr-3 bg-blue-400 rounded-full"></span>
            <span>Engage respectfully and assume good faith</span>
          </li>
          <li class="flex items-start">
            <span class="inline-block w-2 h-2 mt-3 mr-3 bg-blue-400 rounded-full"></span>
            <span>Share experiences, not advice</span>
          </li>
          <li class="flex items-start">
            <span class="inline-block w-2 h-2 mt-3 mr-3 bg-blue-400 rounded-full"></span>
            <span>Protect privacy and confidentiality</span>
          </li>
        </ul>
      </div>
    </div>

    <div class="text-center">
      <a
        :href="communityLink"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition transform hover:scale-105"
      >
        Join on {{ platform }}
      </a>
      <p class="mt-4 text-sm text-gray-600">
        By joining, you agree to follow our community guidelines
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      platform: 'Discord', // or 'Telegram'
      communityLink: 'https://discord.gg/YOUR-INVITE-LINK' // Replace with actual link
    }
  }
}
</script> 