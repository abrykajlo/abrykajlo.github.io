<script lang="ts">
  import { page } from '$app/stores';

  import Header from '$lib/Header.svelte';
  import Footer from '$lib/Footer.svelte';

  import '@fontsource/roboto/100.css';
</script>
<svelte:head>
  <title>{$page.data.title}</title>
  <!-- BOOTSTRAP CSS -->
  <link
    rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css"
    integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M"
    crossorigin="anonymous"
  />
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

  hr {
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

  /* Highlight */
  figure.highlight {
    background-color: #424242;
    padding: 1em;
  }

  .highlight > * {
    color: #fbc02d;
  }

  .kt,
  .p,
  .o {
    color: #009688;
  }

  .n {
    color: #8bc34a;
  }
</style>
