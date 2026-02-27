<template>
  <component
    :is="tag"
    :to="to"
    :href="href"
    :type="tag === 'button' ? type : undefined"
    class="inline-flex items-center justify-center h-12 px-10 text-[0.7rem] font-medium uppercase tracking-[0.2em] cursor-pointer transition-all duration-500"
    :class="classes"
    v-bind="$attrs"
  >
    <!-- Gold slide overlay (primary only) -->
    <div v-if="variant === 'primary'" class="gold-layer"></div>
    <span :class="variant === 'primary' ? 'relative z-10' : ''">
      <slot />
    </span>
  </component>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: { type: String, default: 'primary' },
  to: { type: [String, Object], default: undefined },
  href: { type: String, default: undefined },
  type: { type: String, default: 'button' },
})

const tag = computed(() => {
  if (props.to) return 'RouterLink'
  if (props.href) return 'a'
  return 'button'
})

const classes = computed(() => {
  if (props.variant === 'primary') {
    return 'btn-gold-slide bg-fg text-accent-fg shadow-[0_4px_16px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.25)]'
  }
  if (props.variant === 'secondary') {
    return 'border border-fg text-fg bg-transparent hover:bg-fg hover:text-accent-fg'
  }
  // link
  return 'text-fg hover:text-accent px-0 h-auto'
})
</script>
