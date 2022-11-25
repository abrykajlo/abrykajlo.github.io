<script lang="ts">
  import Header from '$lib/Header.svelte';
  import Footer from '$lib/Footer.svelte';

  import '@fontsource/roboto/100.css';
</script>
<svelte:head>
  <title>Up And Adam</title>
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
<slot />
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

  /* Post Cards */

  .btn-primary {
    color: white;
    background-color: #424242;
    border-color: #424242;
  }

  .btn-primary:hover {
    background-color: #303030;
    border-color: #303030;
  }

  .card {
    background-color: #1b1b1b;
    margin-bottom: 10px;
  }

  .card-header {
    padding: 0;
    border-bottom: 1px solid #fbc02d;
    height: 5em;
  }

  .card-title {
    display: inline-block;
    margin-bottom: 0;
  }

  .card-title > a > h3 {
    color: white;
    font-weight: 900;
    position: relative;
    top: 0.2em;
  }

  .card-title > a:hover {
    text-decoration-color: white;
  }

  .card-subtitle {
    background: #fbc02d;
    color: #1b1b1b;
    width: 7em;
    display: inline-block;
    margin-top: 0;
    border-top-left-radius: 0.25rem;
    margin-right: 2em;
  }

  .card-text {
    margin-bottom: 10px;
  }

  .card-footer {
    padding-top: 0;
  }

  /* about me page */
  .headshot {
    border: 4px solid #fbc02d;
    height: 350px;
    width: 350px;
    margin-bottom: 2em;
  }

  /* gallery */

  .make-gallery-grid-3 {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 2%;
    max-width: 100%;
  }

  .make-gallery-grid-2 {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
    grid-gap: 2%;
    max-width: 100%;
  }

  .make-gallery-grid-1 {
    display: grid;
    grid-template-columns: repeat(auto-fill, 600px);
    grid-gap: 2%;
    max-width: 100%;
  }

  .thumb {
  }

  .thumb img {
    max-width: 100%;
  }

  img.gallery {
    max-width: 100%;
  }
</style>
