<template>
  <PaperNoise />
  <GridLines />
  <AppHeader />
  <main>
    <RouterView v-slot="{ Component }">
      <Transition name="page" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </main>
</template>

<script setup>
import PaperNoise from '@/components/layout/PaperNoise.vue'
import GridLines from '@/components/layout/GridLines.vue'
import AppHeader from '@/components/layout/AppHeader.vue'
</script>
