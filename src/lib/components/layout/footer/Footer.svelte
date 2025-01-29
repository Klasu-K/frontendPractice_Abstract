<script lang="ts">
  import FooterContent from "./FooterContent.svelte";
  import Copyright from "./Copyright.svelte";
</script>

<footer class="footer">
  <FooterContent/>
  <Copyright/>
</footer>

<style>
  .footer {
    background-color: var(--c-black);
    height: 400px;
    padding: 48px 32px 8px 88px;
    color: var(--c-white);
  }
</style>