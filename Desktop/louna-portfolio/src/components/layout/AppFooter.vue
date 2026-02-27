<template>
  <footer
    class="px-6 md:px-16 py-8"
    :class="dark ? 'bg-fg border-t border-white/8' : 'bg-bg border-t border-fg/10'"
  >
    <div class="max-w-[1600px] mx-auto flex items-center justify-between flex-wrap gap-4">
      <span
        class="text-[0.55rem] font-medium uppercase tracking-[0.15em]"
        :class="dark ? 'text-white/35' : 'text-muted-fg'"
      >
        © 2025 Louna Le Guillou
      </span>
      <span
        class="text-[0.5rem] uppercase tracking-[0.1em]"
        :class="dark ? 'text-white/25' : 'text-muted-fg'"
      >
        Mentions légales
      </span>
    </div>
  </footer>
</template>

<script setup>
defineProps({
  dark: { type: Boolean, default: false },
})
</script>
