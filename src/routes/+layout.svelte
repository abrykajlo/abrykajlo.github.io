<script lang="ts">
  import { page } from '$app/stores';

  import Header from '$lib/Header.svelte';
  import Footer from '$lib/Footer.svelte';

  import '../app.css';
  import '@fontsource/roboto/100.css';
</script>

<svelte:head>
  <title>{$page.data.title}</title>
  <!-- BAGUETTEBOX CSS -->
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/baguettebox.js/1.10.0/baguetteBox.min.css"
  />
  <!-- FOR PROPER SCALING ON MOBILE DEVICES -->
  <meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>

<Header />
<main class="container mx-auto px-40">
  <slot />
</main>
<Footer />

<style>
  :global(body) {
    @apply bg-gray font-roboto text-white min-h-screen;
  }

  :global(a) {
    @apply text-yellow hover:text-light-gray;
  }
</style>
