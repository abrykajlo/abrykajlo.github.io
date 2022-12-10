<script lang='ts'>
    import Gallery from "$lib/Gallery.svelte";
    import { page } from "$app/stores";
</script>

<Gallery images={$page.data.gallery} />