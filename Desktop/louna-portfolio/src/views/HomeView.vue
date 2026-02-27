<template>
  <div>
    <HeroSection />
    <AboutSection />

    <!-- Collaborations -->
    <section class="px-6 sm:px-8 md:px-16 py-12 sm:py-20 md:py-28 border-t border-fg/10 fade-in">
      <div class="max-w-[1600px] mx-auto text-center fade-in">
        <!-- Sur-titre avec un petit accent visuel -->
        <div class="flex items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-16">
          <div class="h-px w-6 sm:w-12 bg-muted-fg/30"></div>
          <span class="text-[0.6rem] sm:text-[0.65rem] md:text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-muted-fg">
            Ils m'ont fait confiance
          </span>
          <div class="h-px w-6 sm:w-12 bg-muted-fg/30"></div>
        </div>
        
        <LogoBanner :items="collaborations" class="fade-in" style="transition-delay: 200ms;" />
      </div>
    </section>

    <FeaturedWork />
    <ContactCTA />
    <AppFooter dark />
  </div>
</template>

<script setup>
import { useScrollReveal } from '@/composables/useScrollReveal.js'
import { collaborations } from '@/data/collaborations.js'
import HeroSection from '@/components/sections/HeroSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import FeaturedWork from '@/components/sections/FeaturedWork.vue'
import ContactCTA from '@/components/sections/ContactCTA.vue'
import LogoBanner from '@/components/ui/LogoBanner.vue'
import AppFooter from '@/components/layout/AppFooter.vue'

useScrollReveal()
</script>
