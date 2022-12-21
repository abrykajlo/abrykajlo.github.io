<script lang="ts">
  import Gallery from '$lib/components/Gallery.svelte';
  import { gallery } from '$lib/data/gallery';
</script>

<Gallery images={gallery} />
