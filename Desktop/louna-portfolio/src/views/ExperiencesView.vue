<template>
  <div>
    <section class="px-6 md:px-16 pt-24 sm:pt-32 md:pt-40 pb-12 sm:pb-16 md:pb-20 fade-in">
      <div class="max-w-[1600px] mx-auto fade-in">
        <!-- Header -->
        <div class="flex items-center gap-4 mb-4 fade-in">
          <div class="h-px bg-muted-fg draw-line-short fade-in"></div>
          <span class="text-[0.65rem] font-medium uppercase tracking-[0.25em] text-muted-fg">
            Parcours
          </span>
        </div>
        <h1 class="font-heading text-[3rem] sm:text-[3.5rem] md:text-[4.5rem] font-normal leading-[0.95] mb-10 md:mb-16">
          Mon <em class="italic text-accent">parcours</em>
        </h1>

        <!-- Timeline -->
        <div class="relative border-l border-fg/15 ml-1 max-w-[900px] fade-in" style="transition-delay: 150ms;">
          <TimelineItem
            v-for="exp in experiences"
            :key="exp.id"
            v-bind="exp"
          />
        </div>
      </div>
    </section>

    <AppFooter />
  </div>
</template>

<script setup>
import { experiences } from '@/data/experiences.js'
import { useScrollReveal } from '@/composables/useScrollReveal.js'
import TimelineItem from '@/components/ui/TimelineItem.vue'
import AppFooter from '@/components/layout/AppFooter.vue'

useScrollReveal()
</script>
