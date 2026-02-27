<template>
  <div class="flex justify-center gap-12 md:gap-20 flex-wrap items-end">
    <div
      v-for="collab in items"
      :key="collab.initials"
      class="group flex flex-col items-center gap-4 opacity-60 hover:opacity-100 hover:scale-[1.05] transition-all duration-700 cursor-default"
    >
      <!-- Cercle au lieu de carré pour mieux se démarquer et donner un effet de "médaille" ou de sceau de confiance -->
      <div
        class="w-16 h-16 md:w-20 md:h-20 rounded-full border border-fg/20 flex items-center justify-center font-heading text-[1.2rem] md:text-[1.5rem] font-semibold text-fg shadow-[inset_0_0_0_1px_rgba(0,0,0,0.02)] group-hover:border-accent group-hover:text-accent transition-colors duration-500"
      >
        {{ collab.initials }}
      </div>
      <span class="text-[0.6rem] md:text-[0.65rem] font-medium uppercase tracking-[0.2em] text-muted-fg text-center group-hover:text-fg transition-colors duration-500">
        {{ collab.name }}
      </span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    required: true,
  }
})
</script>
