<script lang="ts">
  import type { PageData } from './$types';
  
  export let data: PageData;
</script>

<svelte:head>
  <base href="/blog/{data.post.metadata.slug}/" />
</svelte:head>

<svelte:component this={data.post.default} />