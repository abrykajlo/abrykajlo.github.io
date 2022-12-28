<script lang="ts">
  import { page } from '$app/stores';

  import Footer from '$lib/components/Footer.svelte';
  import Header from '$lib/components/Header.svelte';

  import '../app.css';
  import '@fontsource/roboto/100.css';
  import '@fontsource/roboto/500.css';
</script>

<svelte:head>
  <title>{$page.data.title}</title>
</svelte:head>

<Header activeMenuItem={$page.data.activeMenuItem} />
<main class="bg-gray py-10">
  <div class="md:container mx-auto md:px-40">
    <slot />
  </div>
</main>
<Footer />

<style lang="postcss">
  :global(html) {
    @apply overflow-y-scroll;
  }

  :global(body) {
    @apply bg-dark-gray font-roboto font-thin text-white;
  }

  :global(a) {
    @apply text-yellow hover:text-light-gray;
  }

  :global(p) {
    @apply text-lg;
  }

  :global(::selection) {
    @apply bg-yellow text-dark-gray;
  }
</style>
