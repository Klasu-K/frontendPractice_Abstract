<script>
  import SignInAction from "./SignInAction.svelte";
  import SubmitRequestAction from "./SubmitRequestAction.svelte";
  import HamburgerMenu from "./HamburgerMenu.svelte";
  import Search from "./Search.svelte";
</script>

<div class="actions">
  <ul class="actions-list large-screen">
    <li>
      <SubmitRequestAction/>
    </li>
    <li>
      <SignInAction/>
    </li>
  </ul>
  <ul class="actions-list medium-screen">
    <li>
      <Search/>
    </li>
    <li>
      <HamburgerMenu/>
    </li>
  </ul>
</div>

<style>
  @media(min-width: 1200px) {
    .medium-screen {
      display: none !important;
    }
  }
  @media (max-width: 1200px) {
    .large-screen {
      display: none !important;
    }
  }

  .actions {
    display: block;
  }
  .actions-list {
    height: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
  }
</style>