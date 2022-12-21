<script lang="ts">
  import Gallery from '$lib/components/Gallery.svelte';
  import strftime from 'strftime';
  import { Layout } from '$lib/types';
  import type { MetaData, PostMetaData, ArtMetaData } from '$lib/types';

  export let data: MetaData;

  const { title, layout, date, slug, taxonomies } = data;
</script>

<div>
  <!-- header -->
  <div class="flex gap-x-5 bg-dark-gray rounded-tl-full rounded-tr-full items-center">
    <div
      class="bg-yellow text-dark-gray font-black rounded-tl-full rounded-br-full h-fit w-fit px-5 py-1"
    >
      {strftime('%b %d %Y', new Date(date)).toUpperCase()}
    </div>
    <a href="/blog/{slug}">
      <h2 class="underline text-lg">{title}</h2>
    </a>
  </div>
  <!-- content -->
  <div class="bg-dark-gray p-8 rounded-b-xl ">
    {#if layout === Layout.Post}
      <div>{data.description}</div>
    {:else if layout === Layout.Art}
      <Gallery id={slug} images={data.images} />
    {/if}
    {#if taxonomies?.tags}
      tags: {taxonomies.tags}
    {/if}
  </div>
</div>
