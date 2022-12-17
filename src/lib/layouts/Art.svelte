<script>
  import Gallery from '$lib/Gallery.svelte';
  import Post from '$lib/layouts/Post.svelte';

  export let images;

  export let title;
  export let date;
  export let author;
</script>

<Post {title} {date} {author}>
  <Gallery {images} />
</Post>
