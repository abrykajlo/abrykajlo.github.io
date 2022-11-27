<script>
  import { page } from '$app/stores';
  import PostCard from '$lib/PostCard.svelte';
</script>

{#each $page.data.posts as post}
  <PostCard data={post} />
{/each}
