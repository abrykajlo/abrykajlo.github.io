<script lang="ts">
  import { page } from '$app/stores';
</script>

<header>
  <div class="container flex items-center justify-between py-6 px-4 content-center mx-auto">
    <div class="flex items-center gap-10">
      <a href="/">
        <img class="rounded-full h-20 w-20" src="/images/logo.svg" alt="logo" />
      </a>
      <h1 class="text-5xl">Adam Brykajlo</h1>
    </div>
    
    <ul class="flex gap-4 text-xl">
      {#each $page.data.menu_items as { item, path }}
      <li class={item === $page.data.active_item ? ' underline decoration-[#fbc02d]' : ''}>
        <a href={path}>{item.toUpperCase()}</a>
      </li>
      {/each}
    </ul>
  </div>
</header>

<style>
  h1 {
    white-space: nowrap;
  }
</style>
