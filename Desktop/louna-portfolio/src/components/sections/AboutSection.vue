<template>
  <section class="px-6 md:px-16 py-16 sm:py-24 md:py-32 lg:py-40 border-t border-fg/10 fade-in">
    <div class="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-24 items-start">
      <!-- Left label -->
      <div class="fade-in">
        <div class="text-[0.65rem] font-medium uppercase tracking-[0.25em] text-muted-fg">
          À propos
        </div>
        <h2 class="font-heading text-[2.2rem] sm:text-[2.5rem] font-normal leading-[1.1] mt-3">
          Journaliste<br>
          <em class="italic text-accent">engagée</em>
        </h2>
      </div>

      <!-- Right text — 2 cols -->
      <div class="lg:col-span-2 max-w-[700px] fade-in" style="transition-delay: 150ms;">
        <p class="drop-cap text-[0.95rem] text-muted-fg leading-[1.75] mb-5">
          Passionnée par le journalisme depuis plusieurs années, je poursuis actuellement un master de journalisme à l'Université Lumière Lyon 2. En parallèle de mes études, je suis en alternance au sein du magazine indépendant écologique lyonnais Agir à Lyon, porté par l'association Anciela.
        </p>
        <p class="text-[0.95rem] text-muted-fg leading-[1.75] mb-7">
          Je souhaite m'orienter vers la presse indépendante et engagée, en format écrit ou radiophonique. À travers mon travail, j'ai à cœur de mettre en lumière des enjeux liés à la solidarité, à l'écologie et à la politique, en donnant la parole à celles et ceux qui font bouger les lignes.
        </p>

        <!-- Values -->
        <div class="flex flex-wrap gap-2.5">
          <span
            v-for="value in values"
            :key="value"
            class="px-4 py-1.5 border border-fg/15 text-[0.6rem] font-medium uppercase tracking-[0.15em] text-muted-fg hover:border-accent hover:text-accent transition-all duration-500 cursor-default"
          >
            {{ value }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const values = ['Déontologie', 'Presse libre', 'Éthique', 'Féminisme', 'Écologie', 'Minorités']
</script>
