<script lang="ts">
  import HelpSearchBar from "./HelpSearchBar.svelte";
</script>

<section class="HelpSearchSection">
  <h1 class="title">How can we help?</h1>
  <HelpSearchBar/>
</section>

<style>
  .title {
    font-size: 4.5rem;
    font-weight: 500;
    padding-top: 16px;
  }

  .HelpSearchSection {
    background-color: var(--c-gray);
    padding: 80px 0px 110px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
  }
</style>