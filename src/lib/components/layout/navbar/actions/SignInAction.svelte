<script lang="ts">
  interface Props {
    style?: "styled" | "simplistic"
  }
  let {style = "styled"} : Props = $props();

</script>

<div class={`link-wrapper ${style}`}>
  <a href="#">Sign in</a>
</div>

<style>
  .link-wrapper {
    a {
      color: var(--c-white);
      text-decoration: none;
    }
    &.styled {
      padding: 10px 20px;
      border-radius: 5px;
      background-color: var(--c-blue);
    }

    &.simplistic {
      
    }
  }
</style>