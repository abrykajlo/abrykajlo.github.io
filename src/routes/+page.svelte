<script>
  import { metadatas } from '$lib/data/posts';
  import PostCard from '$lib/components/PostCard.svelte';
</script>

<div class="flex flex-col gap-y-3">
  {#each metadatas as metadata}
    <PostCard data={metadata} />
  {/each}
</div>
