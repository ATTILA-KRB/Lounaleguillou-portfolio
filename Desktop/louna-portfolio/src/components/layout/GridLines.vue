<template>
  <div
    class="fixed inset-0 z-40 pointer-events-none mx-auto max-w-[1600px] hidden lg:flex justify-between px-16"
    aria-hidden="true"
  >
    <div v-for="i in 4" :key="i" class="w-px h-screen bg-fg/7"></div>
  </div>
</template>
