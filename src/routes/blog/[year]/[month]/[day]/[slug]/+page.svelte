<script>
  import { page } from '$app/stores';
  import Gallery from '$lib/Gallery.svelte';
  import strftime from 'strftime';
</script>

<h1>{$page.data.title}</h1>
<h3>{strftime('%B %e, %Y', $page.data.date)}</h3>
<h5>by Adam Brykajlo</h5>
<hr>
{#if $page.data.content}
  {@html $page.data.content}
{:else if $page.data.images}
  <Gallery images={$page.data.images} />
{/if}
