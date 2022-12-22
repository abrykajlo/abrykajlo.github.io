<script lang="ts">
  import { config } from '$lib/data/config';
  import { menu, menuItemPathMap } from '$lib/data/menu';
  import Fa from 'svelte-fa';
  import { faRss } from '@fortawesome/free-solid-svg-icons';
  import { faGithubAlt, faLinkedin } from '@fortawesome/free-brands-svg-icons';

  const size = '1.5x';
</script>

<footer class="pt-32 pb-4">
  <div class="container mx-auto">
    <div class="flex gap-4 mb-4">
      <a href="https://linkedin.com/in/{config.me.linkedin}"
        ><Fa icon={faLinkedin} {size} /></a
      >
      <a href="https://github.com/{config.me.github}"><Fa icon={faGithubAlt} {size} /></a>
      <a href="/atom.xml"><Fa icon={faRss} {size} /></a>
    </div>
    <div class="mb-2">
      {#each menu as item, i}
        {i !== 0 ? ' | ' : ''}
        <a href={menuItemPathMap[item]}>{item.toUpperCase()}</a>
      {/each}
    </div>
    <p>{config.me.author} &copy; 2017-{new Date().getFullYear()}</p>
  </div>
</footer>
