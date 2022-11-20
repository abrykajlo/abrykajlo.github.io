<script context="module" type="ts">
  export type HeaderData = {
    items: [HeaderItem],
    active: string,
  } 
  export type HeaderItem = {
    name: string;
    path: string;
  }
</script>

<script lang="ts">
  export let data: HeaderData;
</script>

<header class="navbar navbar-inverse navbar-expand-md">
  <div class="container">
    <a class="navbar-brand" href="/">
      <img class="rounded-circle" height="80px" src="/images/logo.svg" />
    </a>
    <h1>Adam Brykajlo</h1>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarToggler"
    >
      <i class="fa fa-bars fa-lg" />
    </button>

    <div class="collapse navbar-collapse justify-content-end" id="navbarToggler">
      <ul class="navbar-nav mt-2 mt-lg-0">
        {#each data.items as { name, path }}
          <li class="nav-item{name === data.active ? ' active' : ''}">
            <a class="nav-link" href={path}>{name.toUpperCase()}</a>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</header>
