<template>
  <section class="min-h-[100svh] px-6 md:px-16 pt-24 sm:pt-32 md:pt-40 pb-12 sm:pb-16 md:pb-24 flex items-center fade-in">
    <div class="max-w-[1600px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-16 items-center">
      <!-- Text — 7 cols -->
      <div class="lg:col-span-7 flex flex-col gap-6 fade-in">
        <!-- Overline -->
        <div class="flex items-center gap-4">
          <div class="h-px bg-muted-fg draw-line-short fade-in"></div>
          <span class="text-[0.65rem] font-medium uppercase tracking-[0.25em] text-muted-fg">
            Journaliste engagée
          </span>
        </div>

        <!-- Title — extreme type scale -->
        <h1 class="font-heading text-[3.2rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] font-normal leading-[0.9] tracking-tight">
          Louna<br>
          <em class="italic text-accent">Le Guillou</em>
        </h1>

        <!-- Subtitle -->
        <p class="text-[0.95rem] leading-[1.75] text-muted-fg max-w-[440px]">
          Journaliste en presse indépendante, passionnée par l'écologie, la solidarité et les récits qui donnent la parole à celles et ceux qui font bouger les lignes.
        </p>

        <!-- Buttons -->
        <div class="flex flex-col gap-4 mt-2">
          <div class="flex flex-col sm:flex-row gap-4">
            <BaseButton variant="secondary" href="/cv-louna-le-guillou.pdf" target="_blank" class="w-full sm:w-auto">
              Télécharger mon CV
            </BaseButton>
            <BaseButton variant="secondary" href="https://www.linkedin.com/in/louna-le-guillou-880b3b269/" target="_blank" rel="noopener" class="w-full sm:w-auto">
              LinkedIn ↗
            </BaseButton>
          </div>
          <BaseButton to="/portfolio" class="w-full">Voir mon travail</BaseButton>
        </div>
      </div>

      <!-- Image — 5 cols -->
      <div class="lg:col-span-5 relative max-w-[280px] sm:max-w-[340px] md:max-w-[420px] lg:justify-self-end w-full mx-auto lg:mx-0 fade-in" style="transition-delay: 200ms;">
        <!-- Vertical label — desktop only -->
        <div class="hidden lg:block absolute -left-10 bottom-4 vertical-text text-[0.55rem] font-medium uppercase tracking-[0.3em] text-muted-fg">
          Portfolio / 2025
        </div>

        <!-- Image with grayscale hover & parallax -->
        <div 
          class="group relative aspect-[3/4] overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.18)] transition-shadow duration-700"
          :style="{ transform: `translateY(${scrollY * 0.15}px)` }"
        >
          <img
            src="/images/photo-profil.jpeg"
            alt="Portrait de Louna Le Guillou, journaliste"
            class="img-editorial w-full h-full object-cover scale-[1.1] origin-top grayscale"
          />
          <div class="absolute inset-0 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.06)] pointer-events-none"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import BaseButton from '@/components/ui/BaseButton.vue'

const scrollY = ref(0)

const onScroll = () => {
  scrollY.value = window.scrollY
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>
