<script lang="ts">
  import baguetteBox from 'baguettebox.js';
  import { imageAltMap } from '$lib/data/gallery';
  import { onMount } from 'svelte';

  import 'baguettebox.js/dist/baguetteBox.css';

  export let id: string = '0';
  export let images: string[];

  const imagesFolder = '/images/gallery';
  const pathFunc = (image: string) => {
    return `${imagesFolder}/${image}.jpg`;
  };
  const thumbnailFunc = (image: string) => {
    return `${imagesFolder}/thumbnails/${image}.jpg`;
  };

  onMount(() => {
    baguetteBox.run(`.gallery-${id}`);
  });
</script>

<div class="gallery-{id} flex flex-wrap gap-5 justify-center">
  {#each images as image}
    <a href={pathFunc(image)}>
      <img class="w-96" src={thumbnailFunc(image)} alt={imageAltMap[image]} />
    </a>
  {/each}
</div>
