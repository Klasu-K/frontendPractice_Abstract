<script>
  import Actions from "./Actions.svelte";
  import Navigation from "./Navigation.svelte";
</script>

<nav class="nav">
  <Navigation/>
  <Actions/>
</nav>

<style>
  .nav {
    background-color: black;
    height: 88px;
    display: flex;
    justify-content: space-between;
    color: white;
    padding: 0 80px;
    font-size: 1.5rem;
  }
</style>
