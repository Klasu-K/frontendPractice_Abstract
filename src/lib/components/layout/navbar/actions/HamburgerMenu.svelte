<script lang="ts">
  import { getContext } from "svelte";
  import {getExpanded} from "../NavBarExpandedContext"
  const isExpanded = getExpanded()
</script>

<button class="menu" on:click={() => $isExpanded = !$isExpanded} class:expanded={$isExpanded} aria-labelledby="navigation menu">
  <div class="line line-top"></div>
  <div class="line line-middle"></div>
  <div class="line line-bottom"></div>
</button>

<style>
  .menu {
    display: flex;
    flex-direction: column;
    gap: 6px;
    background-color: var(--c-black);
    border: none;
    &.expanded {
      background-color: var(--c-light-black);
    }
  }
  .line {
    height: 3px;
    width: 26px;
    background-color: white;
    transition: 0.2s transform;
    transform-origin: right;
  }

  .expanded {
    .line-top {
      transform: rotateZ(-45deg);
    }

    .line-middle {
      visibility: hidden;
    }

    .line-bottom {
      transform: rotateZ(45deg)
    }
  }
</style>