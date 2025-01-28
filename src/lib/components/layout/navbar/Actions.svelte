<script>
  import SignInAction from "./SignInAction.svelte";
  import SubmitRequestAction from "./SubmitRequestAction.svelte";
</script>

<ul class="actions">
  <SubmitRequestAction/>
  <SignInAction/>
</ul>

<style>
  .actions {
    display: flex;
    align-items: center;
    gap: 10px;
  }
</style>