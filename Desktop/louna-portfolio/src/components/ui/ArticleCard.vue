<template>
  <article
    class="group cursor-pointer pt-6 transition-transform duration-700 hover:-translate-y-2 hover:drop-shadow-sm"
    :class="featured ? 'border-t-[3px] border-accent' : 'border-t border-fg/20'"
  >
    <!-- Image — aspect 4:5 -->
    <div class="relative aspect-[4/5] mb-5">
      <img
        v-if="cover"
        :src="cover"
        :alt="`Image illustrant l'article: ${title}`"
        class="block w-full h-full object-cover transition-[filter] duration-700 group-hover:brightness-95"
        loading="lazy"
      />
      <!-- Placeholder when no image -->
      <div
        v-else
        class="w-full h-full bg-muted-bg flex items-center justify-center"
      >
        <span class="font-heading text-[2.5rem] text-muted-fg/30">
          {{ sourceInitials }}
        </span>
      </div>
      <!-- Hover overlay -->
      <div class="absolute inset-0 bg-accent/0 group-hover:bg-accent/5 transition-colors duration-700 pointer-events-none"></div>
    </div>

    <!-- Meta -->
    <div class="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
      <span class="text-[0.55rem] sm:text-[0.6rem] font-medium uppercase tracking-[0.2em] text-muted-fg">
        {{ source }}<template v-if="issue"> {{ issue }}</template>
      </span>
      <template v-if="date">
        <span class="w-[3px] h-[3px] bg-muted-fg rounded-full"></span>
        <span class="text-[0.55rem] sm:text-[0.6rem] font-medium uppercase tracking-[0.2em] text-muted-fg">
          {{ date }}
        </span>
      </template>
    </div>

    <!-- Title -->
    <h3 class="font-heading text-[1rem] sm:text-[1.1rem] font-normal leading-[1.35] text-fg group-hover:text-accent transition-colors duration-500">
      {{ title }}
    </h3>
  </article>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: { type: String, required: true },
  source: { type: String, required: true },
  issue: { type: String, default: '' },
  date: { type: String, default: '' },
  cover: { type: String, default: '' },
  featured: { type: Boolean, default: false },
})

const sourceInitials = computed(() => {
  return props.source
    .split(' ')
    .map((w) => w[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
})
</script>
