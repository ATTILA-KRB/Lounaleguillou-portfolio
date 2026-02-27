<template>
  <section class="px-6 md:px-16 py-16 sm:py-20 md:py-28 border-t border-fg/10 fade-in">
    <div class="max-w-[1600px] mx-auto">
      <!-- Header -->
      <div class="flex justify-between items-end mb-10 md:mb-12 flex-wrap gap-4 fade-in">
        <h2 class="font-heading text-[2.2rem] sm:text-[2.5rem] font-normal leading-[1.1]">
          Travaux <em class="italic text-accent">sélectionnés</em>
        </h2>
        <BaseButton variant="secondary" to="/portfolio" class="!h-10 !text-[0.6rem] !px-6">
          Tout voir →
        </BaseButton>
      </div>

      <!-- Grid — 3 cols -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 fade-in" style="transition-delay: 200ms;">
        <ArticleCard
          v-for="article in featuredArticles"
          :key="article.id"
          v-bind="article"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { articles } from '@/data/articles.js'
import ArticleCard from '@/components/ui/ArticleCard.vue'
import BaseButton from '@/components/ui/BaseButton.vue'

const featuredArticles = computed(() => articles.slice(0, 3))
</script>
