<script lang="ts">
  interface Props {
    title: string;
    linkNames: string[];
  }
  let {title, linkNames} : Props = $props()
</script>

  <article class="footer-block">
    <h3 class="title">{title}</h3> 
    <div class="links">
      {#each linkNames as linkName}
        <a class="link" href="#">{linkName}</a>
      {/each}
    </div>
  </article>

<style>
  .footer-block {
  }
  .title {
    font-size: 1.5rem;
    padding-bottom: 16px;
  }

  .links {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .link {
    color: var(--c-white);
    text-decoration: none;
  }
</style>