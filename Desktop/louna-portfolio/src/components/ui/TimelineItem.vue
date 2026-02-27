<template>
  <div class="group relative pl-7 sm:pl-10 pb-8 sm:pb-12">
    <!-- Dot -->
    <div
      class="absolute left-[-5px] top-[6px] w-[10px] h-[10px] bg-bg border-2 border-fg transition-all duration-500 group-hover:bg-accent group-hover:border-accent"
    ></div>

    <!-- Date -->
    <div class="text-[0.55rem] sm:text-[0.6rem] font-medium uppercase tracking-[0.25em] text-muted-fg mb-2">
      {{ date }}
    </div>

    <!-- Role -->
    <h3 class="font-heading text-[1.1rem] sm:text-[1.25rem] font-normal leading-[1.3] mb-1">
      {{ role }}
    </h3>

    <!-- Organisation -->
    <div class="text-[0.75rem] sm:text-[0.8rem] font-medium text-accent mb-3">
      {{ org }}
    </div>

    <!-- Tags -->
    <div v-if="tags && tags.length" class="flex flex-wrap gap-1.5 sm:gap-2 mb-3">
      <span
        v-for="tag in tags"
        :key="tag"
        class="px-2 sm:px-2.5 py-0.5 sm:py-1 border border-fg/15 text-[0.5rem] sm:text-[0.55rem] font-medium uppercase tracking-[0.15em] text-muted-fg hover:border-accent hover:text-accent transition-all duration-500 cursor-default"
      >
        {{ tag }}
      </span>
    </div>

    <!-- Description -->
    <p class="text-[0.8rem] sm:text-[0.85rem] text-muted-fg leading-[1.7] max-w-[560px]">
      {{ description }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  date: String,
  role: String,
  org: String,
  description: String,
  tags: Array,
})
</script>
