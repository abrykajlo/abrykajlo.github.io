<script lang="ts">
  import Gallery from '$lib/Gallery.svelte';
  import strftime from 'strftime';
  import type { PostData } from '$lib/types';

  export let data: PostData;

  const { date, slug, title, description, type, id, images, taxonomies } = data;
</script>

{strftime('%b %d', new Date(date))}
{strftime('%Y', new Date(date))}
<a href='/blog/{slug}'>
  <h2>{title}</h2>
</a>
{#if type === 'post' && description}
  {description}
  <a href='/blog/{slug}' class="card-link btn btn-primary">Read More</a>
{:else if type === 'art' && images}
  <Gallery {id} {images} />
  <a href='/blog/{slug}' class="card-link btn btn-primary">Leave A Comment</a>
{/if}
{#if taxonomies?.tags}
  tags: {taxonomies.tags}
{/if}
