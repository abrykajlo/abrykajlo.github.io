<script lang="ts">
  import baguetteBox from 'baguettebox.js';
  import type { Image } from '$lib/types';
  import { onMount } from 'svelte';

  export let id: number = 0;
  export let images: Image[];

  let sizeClass = '';
  if (images.length >= 9) {
    sizeClass = 'grid-cols-3';
  } else if (images.length >= 4) {
    sizeClass = 'grid-cols-2';
  } else {
    sizeClass = 'grid-cols-1';
  }

  onMount(() => {
    baguetteBox.run(`.gallery-${id}`);
  });
</script>

{#if images.length === 1}
  <img class="gallery" src={images[0].path} alt={images[0].alt} />
{:else if images.length > 1}
  <div class="gallery-{id} grid gap-y-5 {sizeClass}">
    {#each images as image, i}
      <a href={image.path}>
        <img class="w-96" src={image.thumbnail} alt={image.alt} />
      </a>
    {/each}
  </div>
{/if}
