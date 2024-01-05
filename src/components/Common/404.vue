<script setup lang="ts">
import { HomeIcon } from '@heroicons/vue/24/solid';

withDefaults(
  defineProps<{
    title?: string;
    hideNavigations?: boolean;
  }>(),
  {
    hideNavigations: false,
  }
);

const backgroundStyle = {
  background: `radial-gradient(50% 109137.91% at 50% 50%, rgba(233, 30, 99, 0.1) 0%, rgba(254, 244, 247, 0) 100%)`,
};
</script>

<template>
  <main
    class="flex align-center relative isolate w-full min-h-full px-4 py-8 md:px-6 lg:px-8 w-full not-found-background"
    :style="backgroundStyle"
  >
    <div
      class="mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8"
      :style="backgroundStyle"
    >
      <div class="text-center">
        <span class="font-bold text-2xl text-pink-500 px-3">404</span>
      </div>
      <div class="mt-6 mb-5 font-bold text-6xl text-900 text-center">
        {{ title || 'Page Not Found' }}
      </div>
      <p class="text-700 text-3xl text-primary mt-0 mb-6 text-center">
        Sorry, we couldn't find the page.
      </p>
      <div class="text-center flex justify-center" v-if="!hideNavigations">
        <a
          class="p-button-text mr-2 font-semibold"
          label="Go Back"
          icon="pi pi-chevron-left"
          @click.prevent="$router.go(-1)"
          href="#"
        >
          <span aria-hidden="true">&larr;</span>
          Go Back</a
        >
        <a
          :label="'Go to Home'"
          icon="pi pi-lock"
          href="#"
          class="font-semibold flex items-center justify-center gap-x-1"
          @click.prevent="$router.push({ name: 'index' })"
        >
          <component :is="HomeIcon" class="h-6 w-6" aria-hidden="true" />
          Go to Home</a
        >
      </div>
    </div>
  </main>
  <!-- <main class="relative isolate w-full min-h-full">
    <img
      src="https://images.unsplash.com/photo-1545972154-9bb223aac798?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3050&q=80&exp=8&con=-15&sat=-75"
      alt=""
      class="absolute inset-0 -z-10 h-full w-full object-cover object-center"
    />
    <div class="mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8">
      <p class="text-8xl font-semibold leading-8 text-white">404</p>
      <h1 class="mt-6 text-3xl font-bold tracking-tight text-white sm:text-5xl">
        Page not found
      </h1>
      <p class="mt-4 text-base text-white/70 sm:mt-6">
        Sorry, we couldn’t find the page you’re looking for.
      </p>
      <div class="mt-10 flex justify-center">
        <a href="#" class="text-sm font-semibold leading-7 text-white"
          ><span aria-hidden="true">&larr;</span> Back to home</a
        >
      </div>
    </div>
  </main> -->
</template>
