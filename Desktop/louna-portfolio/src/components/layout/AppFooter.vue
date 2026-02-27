<template>
  <footer
    class="px-6 md:px-16 py-8"
    :class="dark ? 'bg-fg border-t border-white/8' : 'bg-bg border-t border-fg/10'"
  >
    <div class="max-w-[1600px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
      <span
        class="text-[0.55rem] font-medium uppercase tracking-[0.15em]"
        :class="dark ? 'text-white/35' : 'text-muted-fg'"
      >
        © {{ currentYear }} Louna Le Guillou. Tous droits réservés.
      </span>
      <span
        class="text-[0.5rem] uppercase tracking-[0.1em]"
        :class="dark ? 'text-white/25' : 'text-muted-fg'"
      >
        Designed & Developed for Portfolio
      </span>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

defineProps({
  dark: { type: Boolean, default: false },
})

const currentYear = computed(() => new Date().getFullYear())
</script>
