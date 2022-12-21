<script>
  import Gallery from '$lib/components/Gallery.svelte';
  import Post from '$lib/layouts/Post.svelte';

  export let images; // string[]

  export let title; // string
  export let date; // string
  export let author; // string
</script>

<Post {title} {date} {author}>
  <Gallery {images} />
</Post>
