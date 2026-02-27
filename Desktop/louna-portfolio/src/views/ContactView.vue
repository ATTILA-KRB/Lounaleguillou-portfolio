<template>
  <div class="fade-in">
    <section class="px-6 md:px-16 pt-24 sm:pt-32 md:pt-40 pb-12 sm:pb-16 md:pb-20 fade-in">
      <div class="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24">
        <!-- Left — info -->
        <div class="fade-in">
          <div class="flex items-center gap-4 mb-4">
            <div class="h-px bg-muted-fg draw-line-short fade-in"></div>
            <span class="text-[0.65rem] font-medium uppercase tracking-[0.25em] text-muted-fg">
              Contact
            </span>
          </div>
          <h1 class="font-heading text-[3rem] sm:text-[3.5rem] md:text-[4rem] font-normal leading-[1]">
            Parlons<br>
            <em class="italic text-accent">ensemble</em>
          </h1>
          <p class="text-[0.95rem] text-muted-fg leading-[1.75] mt-6 max-w-[420px]">
            Vous avez un projet éditorial, une question ou souhaitez simplement échanger ? Je serais ravie de discuter avec vous.
          </p>

          <!-- Contact info -->
          <div class="mt-10 flex flex-col gap-5">
            <div class="flex items-center gap-4">
              <span class="text-[0.6rem] font-medium uppercase tracking-[0.2em] text-muted-fg w-[65px]">
                Email
              </span>
              <a
                href="mailto:contact@lounaleguillou.fr"
                class="font-heading text-[1rem] border-b border-fg/15 pb-0.5 hover:border-accent hover:text-accent transition-all duration-500"
              >
                contact@lounaleguillou.fr
              </a>
            </div>
            <div class="flex items-center gap-4">
              <span class="text-[0.6rem] font-medium uppercase tracking-[0.2em] text-muted-fg w-[65px]">
                LinkedIn
              </span>
              <a
                href="https://www.linkedin.com/in/louna-le-guillou-880b3b269/"
                target="_blank"
                rel="noopener"
                class="font-heading text-[1rem] border-b border-fg/15 pb-0.5 hover:border-accent hover:text-accent transition-all duration-500"
              >
                Louna Le Guillou
              </a>
            </div>
            <div class="flex items-center gap-4">
              <span class="text-[0.6rem] font-medium uppercase tracking-[0.2em] text-muted-fg w-[65px]">
                Lieu
              </span>
              <span class="font-heading text-[1rem]">Lyon, France</span>
            </div>
          </div>
        </div>

        <!-- Right — form -->
        <form class="flex flex-col gap-8 pt-6 fade-in" style="transition-delay: 150ms;" @submit.prevent="onSubmit">
          <BaseInput v-model="form.name" placeholder="Votre nom" />
          <BaseInput v-model="form.email" placeholder="Votre email" type="email" />
          <BaseInput v-model="form.subject" placeholder="Sujet" />
          <BaseInput v-model="form.message" placeholder="Votre message..." multiline />
          <BaseButton type="submit" class="self-start">
            Envoyer le message
          </BaseButton>
        </form>
      </div>
    </section>

    <AppFooter />
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useScrollReveal } from '@/composables/useScrollReveal.js'
import BaseInput from '@/components/ui/BaseInput.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import AppFooter from '@/components/layout/AppFooter.vue'

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
})

function onSubmit() {
  // Placeholder — connecter Formspree plus tard
  alert('Message envoyé ! (prototype)')
}

useScrollReveal()
</script>
