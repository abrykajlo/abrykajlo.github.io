<script>
  import strftime from 'strftime';
  import { config } from '$lib/data/config';

  export let title; // string
  export let date; // string
</script>

<h1 class="text-xl">{title}</h1>
<h3>{strftime('%B %e, %Y', new Date(date))}</h3>
<h5>by {config.me.author}</h5>
<hr />

<slot />
