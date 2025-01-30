<script lang="ts">
  import ActionsDropdownStyle from "../actions/Actions-dropdown.svelte";
  import {getExpanded} from ".././NavBarExpandedContext"
  const isExpanded = getExpanded();
</script>

<div class="dropdown" class:expanded={$isExpanded}>
  <ActionsDropdownStyle/>
</div>

<style>
  .dropdown {
    display: none;
    position: absolute;
    top: var(--navbar-height);
    left: 0;
    right: 0;
    background-color: var(--c-light-black);
    border-top: 2px solid rgb(71, 71, 71);
  }
  .expanded.dropdown {
    display: block;
  }
</style>