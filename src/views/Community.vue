<template>
  <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="text-center mb-12">
      <h1 class="text-3xl md:text-4xl font-bold mb-4 font-display">
        Stay in the Loop
      </h1>
      <p class="text-xl text-gray-600">
        We’re not opening a chat group yet. Add your name to get updates and be
        notified when the community launches.
      </p>
    </div>

    <div class="bg-white rounded-xl shadow-lg p-8 mb-12">
      <div class="prose prose-lg mx-auto">
        <h2 class="text-2xl font-semibold mb-4 font-display">
          What you’ll get
        </h2>
        <ul class="space-y-4">
          <li class="flex items-start">
            <span
              class="inline-block w-2 h-2 mt-3 mr-3 bg-blue-400 rounded-full"
            ></span>
            <span>Early access to workshop announcements and dates</span>
          </li>
          <li class="flex items-start">
            <span
              class="inline-block w-2 h-2 mt-3 mr-3 bg-blue-400 rounded-full"
            ></span>
            <span>Notes and practice prompts from upcoming sessions</span>
          </li>
          <li class="flex items-start">
            <span
              class="inline-block w-2 h-2 mt-3 mr-3 bg-blue-400 rounded-full"
            ></span>
            <span>Occasional experiments and small-group pilots</span>
          </li>
        </ul>

        <h2 class="text-2xl font-semibold mt-8 mb-4 font-display">
          Community timeline
        </h2>
        <p class="text-gray-700">
          We’ll open a WhatsApp/Telegram space once the first workshop cycle is
          running smoothly. Until then, you can register interest and get
          updates by email/DM.
        </p>
      </div>
    </div>

    <div class="text-center">
      <router-link
        to="/interest"
        class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition transform hover:scale-105"
      >
        Register interest
      </router-link>
      <router-link
        to="/workshops"
        class="inline-block ml-4 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-8 py-3 rounded-lg transition"
      >
        Explore workshops
      </router-link>
      <p class="mt-4 text-sm text-gray-600">
        We’ll email/DM only when there’s something useful.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Community",
};
</script>
