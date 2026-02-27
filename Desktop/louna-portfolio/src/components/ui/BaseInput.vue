<template>
  <div>
    <component
      :is="multiline ? 'textarea' : 'input'"
      :type="multiline ? undefined : type"
      :placeholder="placeholder"
      :rows="multiline ? 4 : undefined"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="w-full py-3 bg-transparent border-0 border-b border-fg/20 text-fg text-[0.95rem] font-body placeholder:font-heading placeholder:italic placeholder:text-muted-fg outline-none transition-colors duration-500 focus:border-accent"
      :class="multiline ? 'resize-y min-h-[120px]' : ''"
    />
  </div>
</template>

<script setup>
defineProps({
  modelValue: { type: String, default: '' },
  placeholder: { type: String, default: '' },
  type: { type: String, default: 'text' },
  multiline: { type: Boolean, default: false },
})

defineEmits(['update:modelValue'])
</script>
