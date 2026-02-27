<template>
  <nav
    class="fixed top-0 left-0 right-0 z-100 bg-bg/92 backdrop-blur-[12px] border-b border-fg/8 transition-transform duration-500"
    :class="{ '-translate-y-full': hidden }"
  >
    <div class="max-w-[1600px] mx-auto px-6 md:px-16 py-5 flex items-center justify-between">
      <!-- Logo -->
      <RouterLink to="/" class="font-heading text-[1.3rem] font-normal tracking-tight">
        Louna Le Guillou
      </RouterLink>

      <!-- Desktop nav -->
      <div class="hidden md:flex items-center gap-10">
        <RouterLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="text-[0.65rem] font-medium uppercase tracking-[0.2em] text-muted-fg transition-colors duration-500"
          active-class="!text-fg"
        >
          {{ link.label }}
        </RouterLink>
      </div>

      <!-- Burger mobile -->
      <button
        class="flex md:hidden flex-col gap-[5px] p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
        @click="mobileOpen = true"
        aria-label="Ouvrir le menu"
      >
        <span class="w-[22px] h-[1.5px] bg-fg"></span>
        <span class="w-[22px] h-[1.5px] bg-fg"></span>
        <span class="w-[22px] h-[1.5px] bg-fg"></span>
      </button>
    </div>
  </nav>

  <!-- Mobile menu overlay -->
  <Teleport to="body">
    <Transition name="mobile-menu">
      <div
        v-if="mobileOpen"
        class="fixed inset-0 z-[200] bg-bg flex flex-col items-center justify-center gap-10"
      >
        <button
          class="absolute top-6 right-6 w-11 h-11 flex items-center justify-center text-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
          @click="mobileOpen = false"
          aria-label="Fermer le menu"
        >
          ✕
        </button>
        <RouterLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="font-heading text-[2rem] font-normal transition-colors duration-300 hover:text-accent"
          @click="mobileOpen = false"
        >
          {{ link.label }}
        </RouterLink>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const links = [
  { to: '/', label: 'Accueil' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/experiences', label: 'Expériences' },
  { to: '/contact', label: 'Contact' },
]

const mobileOpen = ref(false)
const hidden = ref(false)
let lastScroll = 0

function onScroll() {
  const current = window.scrollY
  hidden.value = current > lastScroll && current > 100
  lastScroll = current
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.mobile-menu-enter-active {
  transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.mobile-menu-leave-active {
  transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.mobile-menu-enter-from,
.mobile-menu-leave-to {
  transform: translateY(-100%);
}
</style>
