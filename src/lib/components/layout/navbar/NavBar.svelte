<script lang="ts">
  import { writable } from "svelte/store";
  import Actions from "./actions/Actions.svelte";
  import Navigation from "./navigation/Navigation.svelte";
  import NavBarDropdown from "./dropdown/NavBarDropdown.svelte";
  import {setExpanded, getExpanded} from "./NavBarExpandedContext"

  setExpanded(true);
  const isExpanded = getExpanded();
</script>

<nav class="nav" class:expanded={$isExpanded}>
  <Navigation/>
  <Actions/>
  <NavBarDropdown/>
</nav>

<style>
  .nav {
    --navbar-height: 88px;
    position: relative;
    background-color: var(--c-black);
    height: var(--navbar-height);
    display: flex;
    justify-content: space-between;
    color: white;
    padding: 0 80px;
    font-size: 1.5rem;
    &.expanded {
      background-color: var(--c-light-black)
    }
  }
</style>
