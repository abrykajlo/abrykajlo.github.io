<script>
  import strftime from 'strftime';
  import { config } from '$lib/data/config';

  import 'prism-themes/themes/prism-gruvbox-dark.css';

  export let title; // string
  export let date; // string
</script>

<div class="flex flex-col gap-y-2">
  <h1 class="text-4xl">{title}</h1>
  <h3 class="text-3xl">{strftime('%B %e, %Y', new Date(date))}</h3>
  <h5 class="text-xl">by {config.me.author}</h5>
  <hr class="border-yellow mb-6" />
</div>

<div class="content flex flex-col gap-y-3">
  <slot />
</div>

<style lang="postcss">
  :global(.content > h2) {
    @apply text-2xl underline decoration-yellow my-4;
  }

  :global(.content > blockquote) {
    @apply p-4 border-l-4 border-yellow bg-dark-gray my-4;
  }

  :global(pre) {
    @apply border-l-2 border-yellow;
  }
</style>
