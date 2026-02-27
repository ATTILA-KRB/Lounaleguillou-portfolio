<template>
  <div class="group relative pl-10 pb-12">
    <!-- Dot -->
    <div
      class="absolute left-[-5px] top-[6px] w-[10px] h-[10px] bg-bg border-2 border-fg transition-all duration-500 group-hover:bg-accent group-hover:border-accent"
    ></div>

    <!-- Date -->
    <div class="text-[0.6rem] font-medium uppercase tracking-[0.25em] text-muted-fg mb-2">
      {{ date }}
    </div>

    <!-- Role -->
    <h3 class="font-heading text-[1.25rem] font-normal leading-[1.3] mb-1">
      {{ role }}
    </h3>

    <!-- Organisation -->
    <div class="text-[0.8rem] font-medium text-accent mb-3">
      {{ org }}
    </div>

    <!-- Description -->
    <p class="text-[0.85rem] text-muted-fg leading-[1.7] max-w-[560px]">
      {{ description }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  date: String,
  role: String,
  org: String,
  description: String,
})
</script>
