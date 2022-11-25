<script type="ts" context="module">
  export type HeaderItem = {
    name: string;
    path: string;
  };
</script>

<script lang="ts">
  import { page } from '$app/stores';

  import Fa from 'svelte-fa';
  import { faBars } from '@fortawesome/free-solid-svg-icons'
</script>

<header class="navbar navbar-inverse navbar-expand-md">
  <div class="container">
    <a class="navbar-brand" href="/">
      <img alt="logo" class="rounded-circle" height="80px" src="/images/logo.svg" />
    </a>
    <h1>Adam Brykajlo</h1>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarToggler"
    >
      <Fa icon={faBars} size='lg' />
    </button>

    <div class="collapse navbar-collapse justify-content-end" id="navbarToggler">
      <ul class="navbar-nav mt-2 mt-lg-0">
        {#each $page.data.header_items as { name, path }}
          <li class="nav-item{name === $page.data.active_item ? ' active' : ''}">
            <a class="nav-link" href={path}>{name.toUpperCase()}</a>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</header>

<style>
  h1 {
    white-space: nowrap;
  }

  .navbar {
    margin-bottom: 30px;
  }

  .nav-item {
    font-size: 1.25em;
  }

  .nav-item.active {
    text-decoration-line: underline;
    text-decoration-color: #fbc02d;
  }

  .nav-link {
    color: white;
  }

  .nav-link:hover {
    color: #6d6d6d;
  }

  .navbar-toggler {
    color: white;
  }
</style>
