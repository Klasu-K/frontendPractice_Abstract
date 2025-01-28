<script>
  import HomePageNav from "./HomePageNav.svelte";
  import HelpCenterNav from "./HelpCenterNav.svelte";
</script>

<ul class="navigation">
  <li class="item">
    <HomePageNav/>
  </li>
  <li class="item">
    <HelpCenterNav/>
  </li>
</ul>

<style>
  .navigation {
    --item-gap: 24px;
    gap: var(--item-gap);
    height: 100%;
    display: flex;
    align-items: center;
  }

  .item {
    position: relative;
  }

  .navigation > *::after {
    content: "";
    position: absolute;
    height: 100%;
    width: 2px;
    right: calc(var(--item-gap) / -2);
    transform: translateY(-100%);
    background-color: white;
  }

  .navigation > :last-child::after {
    display: none;
  }
</style>