<template>
  <div class="fade-in">
    <section class="px-6 md:px-16 pt-24 sm:pt-32 md:pt-40 pb-12 sm:pb-16 md:pb-20 fade-in">
      <div class="max-w-[1600px] mx-auto fade-in">
        <!-- Header -->
        <div class="flex items-center gap-4 mb-4 fade-in">
          <div class="h-px bg-muted-fg draw-line-short fade-in"></div>
          <span class="text-[0.65rem] font-medium uppercase tracking-[0.25em] text-muted-fg">
            Mes publications
          </span>
        </div>
        <h1 class="font-heading text-[3rem] sm:text-[3.5rem] md:text-[4.5rem] font-normal leading-[0.95] mb-8 md:mb-12">
          Mon <em class="italic text-accent">travail</em>
        </h1>

        <!-- Filters -->
        <CategoryFilter v-model="activeFilter" />

        <!-- Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 fade-in" style="transition-delay: 150ms;">
          <TransitionGroup name="card">
            <ArticleCard
              v-for="article in filteredArticles"
              :key="article.id"
              v-bind="article"
            />
          </TransitionGroup>
        </div>
      </div>
    </section>

    <AppFooter />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { articles } from '@/data/articles.js'
import { useScrollReveal } from '@/composables/useScrollReveal.js'
import ArticleCard from '@/components/ui/ArticleCard.vue'
import CategoryFilter from '@/components/ui/CategoryFilter.vue'
import AppFooter from '@/components/layout/AppFooter.vue'

const activeFilter = ref('all')

const filteredArticles = computed(() => {
  if (activeFilter.value === 'all') return articles
  return articles.filter((a) => a.category === activeFilter.value)
})

useScrollReveal()
</script>

<style scoped>
.card-enter-active {
  transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.card-leave-active {
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.card-enter-from {
  opacity: 0;
  transform: translateY(16px);
}
.card-leave-to {
  opacity: 0;
}
</style>
