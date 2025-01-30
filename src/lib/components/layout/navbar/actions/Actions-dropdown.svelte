<script>
  import SignInAction from "./SignInAction.svelte";
  import SubmitRequestAction from "./SubmitRequestAction.svelte";
  import HamburgerMenu from "./HamburgerMenu.svelte";
  import Search from "./Search.svelte";
</script>

<ul class="actions-list">
  <li class="action">
    <SubmitRequestAction style="simplistic"/>
  </li>
  <li class="action">
    <SignInAction style="simplistic"/>
  </li>
</ul>

<style>
  .actions-list {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 32px 0;
  }

  .action {
    width: 50%;
    display: flex;
    justify-content: center;
    border-bottom: 2px solid rgb(71, 71, 71);
    padding: 16px 0;
  }

  .action:last-child {
    border: none;
  }
</style>