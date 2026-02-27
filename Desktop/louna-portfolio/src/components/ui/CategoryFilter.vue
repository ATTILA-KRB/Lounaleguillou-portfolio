<template>
  <div class="flex flex-wrap gap-2 mb-12 border-b border-fg/10 pb-6">
    <button
      v-for="cat in categories"
      :key="cat.key"
      @click="$emit('update:modelValue', cat.key)"
      class="px-5 py-2 text-[0.65rem] font-medium uppercase tracking-[0.15em] cursor-pointer bg-transparent transition-all duration-300"
      :class="
        modelValue === cat.key
          ? 'text-fg border border-fg'
          : 'text-muted-fg border border-transparent hover:text-fg'
      "
    >
      {{ cat.label }}
    </button>
  </div>
</template>

<script setup>
import { categories } from '@/data/articles.js'

defineProps({
  modelValue: { type: String, default: 'all' },
})

defineEmits(['update:modelValue'])
</script>
