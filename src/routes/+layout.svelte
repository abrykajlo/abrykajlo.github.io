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
<main>
  <div class='container'>
    <slot />
  </div>
</main>
<Footer />

<style>
  :global(body) {
    background-color: #303030;
    color: white;
    font-family: 'Roboto';
  }

  h2 {
    padding-top: 0.8em;
    padding-bottom: 0.2em;
  }

  :global(hr) {
    border-color: #fbc02d;
  }

  a {
    color: #fbc02d;
  }

  a:hover {
    color: #6d6d6d;
  }

  /* Canvas */
  #canvas-container {
    width: 100%;
    text-align: center;
  }

  #canvas {
    display: inline;
  }
</style>
