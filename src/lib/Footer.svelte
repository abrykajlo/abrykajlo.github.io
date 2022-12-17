<script lang="ts">
  import { page } from '$app/stores';
  import Fa from 'svelte-fa';
  import { faRss } from '@fortawesome/free-solid-svg-icons';
  import { faGithubAlt, faLinkedin } from '@fortawesome/free-brands-svg-icons';
</script>

<footer class="pt-32 pb-4">
  <div class="container mx-auto">
    <div class="flex gap-4 mb-4">
      <a href="https://linkedin.com/in/{$page.data.me.linkedin}"><Fa icon={faLinkedin} size='1.5x' /></a>
      <a href="https://github.com/{$page.data.me.github}"><Fa icon={faGithubAlt} size='1.5x' /></a>
      <a href="/atom.xml"><Fa icon={faRss} size='1.5x' /></a>
    </div>
    <div class="mb-2">
      {#each $page.data.menu_items as { name, path }, i}
      {i !== 0 ? ' | ' : ''}
      <a href={path}>{name.toUpperCase()}</a>
      {/each}
    </div>
    <p>Adam Brykajlo &copy; 2017-{new Date().getFullYear()}</p>
  </div>
</footer>
