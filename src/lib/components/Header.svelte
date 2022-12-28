<script lang="ts">
  import { menu, menuItemPathMap } from '$lib/data/menu';
  import type { MenuItem } from '$lib/types';

  export let activeMenuItem: MenuItem;
</script>

<header class="bg-gray">
  <div class="md:container flex flex-col md:flex-row items-center justify-between py-6 px-4 content-center mx-auto">
    <div class="flex items-center gap-10 mb-2 md:mb-0">
      <a class="hidden md:block" href="/">
        <img class="rounded-full h-20 w-20" src="/images/logo.svg" alt="logo" />
      </a>
      <h1 class="text-5xl whitespace-nowrap">Adam Brykajlo</h1>
    </div>

    <ul class="flex flex-col md:flex-row gap-4 text-xl">
      {#each menu as item}
        <li class={item === activeMenuItem ? ' underline decoration-yellow' : ''}>
          <a href={menuItemPathMap[item]}>{item.toUpperCase()}</a>
        </li>
      {/each}
    </ul>
  </div>
</header>
