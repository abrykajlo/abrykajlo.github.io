<script lang="ts">
  import Gallery from '$lib/Gallery.svelte';
  import strftime from 'strftime';
  import type { PostData } from '$lib/types';

  export let data: PostData;

  const { date, path, title, description, type, id, images, taxonomies } = data;
</script>

<div class="card">
  <div class="card-header">
    <div class="card-subtitle h-100">
      <h3 class="text-center">{strftime('%b %d', date)}</h3>
      <h3 class="text-center">{strftime('%Y', date)}</h3>
    </div>
    <div class="card-title h-100 align-middle">
      <a href={path}>
        <h3>{title}</h3>
      </a>
    </div>
  </div>
  <div class="card-body">
    {#if type === 'post' && description}
      <div class="card-text">
        {description}
      </div>
      <a href={path} class="card-link btn btn-primary">Read More</a>
    {:else if type === 'art' && images}
      <div class="card-text">
        <Gallery {id} {images} />
      </div>
      <a href={path} class="card-link btn btn-primary">Leave A Comment</a>
    {/if}
  </div>
  {#if taxonomies?.tags}
    <div class="card-footer">
      tags: {taxonomies.tags}
    </div>
  {/if}
</div>

<style>
  .btn-primary {
    color: white;
    background-color: #424242;
    border-color: #424242;
  }

  .btn-primary:hover {
    background-color: #303030;
    border-color: #303030;
  }

  .card {
    background-color: #1b1b1b;
    margin-bottom: 10px;
  }

  .card-header {
    padding: 0;
    border-bottom: 1px solid #fbc02d;
    height: 5em;
  }

  .card-title {
    display: inline-block;
    margin-bottom: 0;
  }

  .card-title > a > h3 {
    color: white;
    font-weight: 900;
    position: relative;
    top: 0.2em;
  }

  .card-title > a:hover {
    text-decoration-color: white;
  }

  .card-subtitle {
    background: #fbc02d;
    color: #1b1b1b;
    width: 7em;
    display: inline-block;
    margin-top: 0;
    border-top-left-radius: 0.25rem;
    margin-right: 2em;
  }

  .card-text {
    margin-bottom: 10px;
  }

  .card-footer {
    padding-top: 0;
  }
</style>
