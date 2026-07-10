<template>
  <svg viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Rationality Workshops logo">
    <!-- lashes -->
    <g class="lashes" :stroke="ink" stroke-width="26" stroke-linecap="round">
      <line x1="165.6" y1="415" x2="87.7" y2="365" />
      <line x1="254.8" y1="348.5" x2="196.9" y2="271.9" />
      <line x1="375.2" y1="305" x2="344.4" y2="211" />
      <line x1="512" y1="290" x2="512" y2="190" />
      <line x1="648.8" y1="305" x2="679.6" y2="211" />
      <line x1="769.2" y1="348.5" x2="827.1" y2="271.9" />
      <line x1="858.4" y1="415" x2="936.3" y2="365" />
    </g>

    <!-- eye body: outline + iris, squashes shut on blink -->
    <g class="eye-body">
      <clipPath :id="clipId">
        <path d="M118 540 C 260 330, 764 330, 906 540 C 764 750, 260 750, 118 540 Z" />
      </clipPath>

      <g :clip-path="`url(#${clipId})`">
        <!-- iris circle -->
        <circle cx="512" cy="540" r="196" :fill="mono ? 'none' : '#f7f1e6'" :stroke="ink" stroke-width="30" />

        <!-- hexagonal colour-wheel segments -->
        <g :stroke="ink" stroke-width="22" stroke-linejoin="round">
          <polygon points="433,403.2 591,403.2 543,486.3 481,486.3" :fill="mono ? 'none' : '#e75420'" />
          <polygon points="591,403.2 670,540 574,540 543,486.3" :fill="mono ? 'none' : '#8a4fc8'" />
          <polygon points="670,540 591,676.8 543,593.7 574,540" :fill="mono ? 'none' : '#4a6fd4'" />
          <polygon points="591,676.8 433,676.8 481,593.7 543,593.7" :fill="mono ? 'none' : '#45b8a3'" />
          <polygon points="433,676.8 354,540 450,540 481,593.7" :fill="mono ? 'none' : '#3fae94'" />
          <polygon points="354,540 433,403.2 481,486.3 450,540" :fill="mono ? 'none' : '#f2a93b'" />
        </g>
      </g>

      <!-- eye outline -->
      <path
        d="M118 540 C 260 330, 764 330, 906 540 C 764 750, 260 750, 118 540 Z"
        :stroke="ink"
        stroke-width="40"
        stroke-linejoin="round"
      />
    </g>
  </svg>
</template>

<script>
let uid = 0;

export default {
  name: "BlinkingLogo",
  props: {
    // ink-line only: strokes inherit currentColor, no fills
    mono: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      clipId: `eye-opening-${uid++}`,
    };
  },
  computed: {
    ink() {
      return this.mono ? "currentColor" : "#1b2a47";
    },
  },
};
</script>

<style scoped>
.eye-body,
.lashes {
  transform-box: view-box;
  transform-origin: 50% 52.7%;
}

.eye-body {
  animation: logo-blink 6s ease-in-out infinite;
}

.lashes {
  animation: logo-lash-dip 6s ease-in-out infinite;
}

@keyframes logo-blink {
  0%,
  93%,
  100% {
    transform: scaleY(1);
  }
  96% {
    transform: scaleY(0.05);
  }
}

@keyframes logo-lash-dip {
  0%,
  93%,
  100% {
    transform: translateY(0) scaleY(1);
  }
  96% {
    transform: translateY(50px) scaleY(0.82);
  }
}

@media (prefers-reduced-motion: reduce) {
  .eye-body,
  .lashes {
    animation: none;
  }
}
</style>
