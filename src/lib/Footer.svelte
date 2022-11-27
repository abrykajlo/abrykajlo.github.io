<script lang="ts" context="module">
  export type Socials = {
    linkedin: string;
    github: string;
  };
</script>

<script lang="ts">
  import { page } from '$app/stores';
  import Fa from 'svelte-fa';
  import { faRss } from '@fortawesome/free-solid-svg-icons'
  import { faGithubAlt, faLinkedin } from '@fortawesome/free-brands-svg-icons'
</script>

<footer class="footer-distributed">
  <div class="container">
    <div class="footer-right">
      <a href="https://linkedin.com/in/{$page.data.me.linkedin}"><Fa icon={faLinkedin} /></a>
      <a href="https://github.com/{$page.data.me.github}"><Fa icon={faGithubAlt} /></a>
      <a href="/atom.xml"><Fa icon={faRss} /></a>
    </div>
    <div class="footer-left">
      <p class="footer-links">
        {#each $page.data.menu_items as { item, path }, i}
          {i !== 0 ? ' | ' : ''}
          <a href={path}>{item.toUpperCase()}</a>
        {/each}
      </p>
      <p>Adam Brykajlo &copy; 2017-{new Date().getFullYear()}</p>
    </div>
  </div>
</footer>

<style>
  .footer-distributed {
    background-color: #1b1b1b;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
    box-sizing: border-box;
    width: 100%;
    text-align: left;

    padding: 45px 50px;
    margin-top: 80px;
  }

  .footer-distributed .footer-left p {
    color: #6d6d6d;
    font-size: 14px;
    margin: 0;
  }

  /* Footer links */

  .footer-distributed {
    height: auto;
  }

  .footer-distributed p.footer-links {
    font-size: 18px;
    font-weight: bold;
    color: #ffffff;
    margin: 0 0 10px;
    padding: 0;
  }

  .footer-distributed p.footer-links a {
    display: inline-block;
    line-height: 1.8;
    text-decoration: none;
    color: inherit;
  }

  .footer-distributed .footer-right {
    float: right;
    margin-top: 6px;
    max-width: 180px;
  }

  .footer-distributed .footer-right a {
    display: inline-block;
    width: 35px;
    height: 35px;
    background-color: #303030;
    border-radius: 2px;

    font-size: 20px;
    color: #ffffff;
    text-align: center;
    line-height: 35px;

    margin-left: 3px;
  }

  /* If you don't want the footer to be responsive, remove these media queries */

  @media (max-width: 600px) {
    .footer-distributed .footer-left,
    .footer-distributed .footer-right {
      text-align: center;
    }

    .footer-distributed .footer-right {
      float: none;
      margin: 0 auto 20px;
    }

    .footer-distributed .footer-left p.footer-links {
      line-height: 1.8;
    }
  }
</style>
