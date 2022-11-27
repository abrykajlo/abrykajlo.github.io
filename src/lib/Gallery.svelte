<script lang="ts">
  import baguetteBox from 'baguettebox.js';
  import { page } from '$app/stores';
  import type { Image } from './data';
  import { onMount } from 'svelte';

  export let id: number = 0;
  export let imageNames: string[] | undefined = undefined;

  const gallery: Image[] = $page.data.gallery;

  const images: Image[] =
    imageNames?.map((name) => {
      const image = gallery.find((image) => image.name == name);
      return image || { name: '', alt: '', thumbnail: '', path: '' };
    }) || gallery;

  let sizeClass = '';
  if (images.length >= 9) {
    sizeClass = 'make-gallery-grid-3';
  } else if (images.length >= 4) {
    sizeClass = 'make-gallery-grid-2';
  } else {
    sizeClass = 'make-gallery-grid-1';
  }

  onMount(() => {
    baguetteBox.run(`.gallery-${id}`);
  });
</script>

{#if images.length === 1}
  <img class="gallery" src={images[0].path} alt={images[0].alt} />
{:else if images.length > 1}
  <div class="gallery-{id} {sizeClass}">
    {#each images as image, i}
      <div class="item-{i} thumb">
        <a href={image.path}>
          <img src={image.thumbnail} alt={image.alt} />
        </a>
      </div>
    {/each}
  </div>
{/if}

<style>
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

  .thumb img {
    max-width: 100%;
  }

  img.gallery {
    max-width: 100%;
  }
</style>
