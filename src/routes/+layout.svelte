<script lang='ts'>
  import type { PageData } from './$types';

  import Header from '$lib/Header.svelte';
  export let data: PageData;
</script>

<svelte:head>
  <!-- FONT AWESOME -->
  <script src="https://use.fontawesome.com/b4ed5ef24f.js"></script>
  <!-- BOOTSTRAP CSS -->
  <link
    rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css"
    integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M"
    crossorigin="anonymous"
  />
  <!-- GOOGLE FONT -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:100" />
  <!-- BAGUETTEBOX CSS -->
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/baguettebox.js/1.10.0/baguetteBox.min.css"
  />
  <!-- ADAMBRYKAJLO.CA CSS -->
  <link rel="stylesheet" href="/css/main.css" />
  <!-- FOR PROPER SCALING ON MOBILE DEVICES -->
  <meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>
<Header data={data.headerData} />
<slot />
