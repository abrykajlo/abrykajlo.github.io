<script>
  import strftime from 'strftime'

  export let title;
  export let date;
  export let author;
</script>

<h1>{title}</h1>
<h3>{strftime('%B %e, %Y', new Date(date))}</h3>
<h5>by {author}</h5>
<hr />

<slot />
