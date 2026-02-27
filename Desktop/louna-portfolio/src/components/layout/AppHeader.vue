<template>
  <nav
    class="fixed top-0 left-0 right-0 z-100 bg-bg/92 backdrop-blur-[12px] border-b border-fg/8 transition-transform duration-500"
    :class="{ '-translate-y-full': hidden }"
  >
    <div class="max-w-[1600px] mx-auto px-6 md:px-16 py-5 flex items-center justify-between">
      <!-- Logo -->
      <RouterLink to="/" class="font-heading text-[1.3rem] font-normal tracking-tight">
        Louna <span class="text-accent">Le Guillou</span>
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
        <a
          href="https://www.linkedin.com/in/louna-le-guillou-880b3b269/"
          target="_blank"
          rel="noopener"
          class="text-[0.65rem] font-medium uppercase tracking-[0.2em] text-muted-fg hover:text-accent transition-colors duration-500"
        >
          LinkedIn ↗
        </a>
        <button
          @click="toggle"
          class="w-8 h-8 flex items-center justify-center text-muted-fg hover:text-accent transition-colors duration-500 cursor-pointer"
          :aria-label="isDark ? 'Passer en mode clair' : 'Passer en mode sombre'"
        >
          <span class="text-[1.1rem]">{{ isDark ? '\u2600' : '\u263E' }}</span>
        </button>
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
        class="fixed inset-0 z-[200] bg-bg flex flex-col items-center justify-center gap-8"
      >
        <button
          class="absolute top-5 right-5 md:top-6 md:right-6 w-14 h-14 flex items-center justify-center text-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-full bg-fg/5 hover:bg-fg/10 transition-colors"
          @click="mobileOpen = false"
          aria-label="Fermer le menu"
        >
          ✕
        </button>
        <RouterLink
          v-for="(link, index) in links"
          :key="link.to"
          :to="link.to"
          class="font-heading text-[2.2rem] sm:text-[2.8rem] font-normal transition-all duration-500 hover:text-accent p-4 w-full text-center mobile-link"
          :style="{ transitionDelay: `${index * 100}ms` }"
          @click="mobileOpen = false"
        >
          {{ link.label }}
        </RouterLink>
        <a
          href="https://www.linkedin.com/in/louna-le-guillou-880b3b269/"
          target="_blank"
          rel="noopener"
          class="font-heading text-[2.2rem] sm:text-[2.8rem] font-normal transition-all duration-500 hover:text-accent p-4 w-full text-center mobile-link"
          :style="{ transitionDelay: `${links.length * 100}ms` }"
        >
          LinkedIn ↗
        </a>
        <button
          @click="toggle"
          class="font-heading text-[2.2rem] sm:text-[2.8rem] font-normal transition-all duration-500 hover:text-accent p-4 w-full text-center mobile-link"
          :style="{ transitionDelay: `${(links.length + 1) * 100}ms` }"
        >
          {{ isDark ? '\u2600 Mode clair' : '\u263E Mode sombre' }}
        </button>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useTheme } from '@/composables/useTheme.js'

const { isDark, toggle } = useTheme()

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

.mobile-menu-enter-from .mobile-link {
  opacity: 0;
  transform: translateY(20px);
}
.mobile-menu-enter-active .mobile-link {
  opacity: 1;
  transform: translateY(0);
}
</style>
