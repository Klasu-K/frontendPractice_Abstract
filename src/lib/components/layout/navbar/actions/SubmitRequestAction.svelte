<script lang="ts">
  interface Props {
    style?: "styled" | "simplistic"
  }
  let {style = "styled"} : Props = $props();
</script>

<div class={`link-wrapper ${style}`}>
  <a href="#">Submit a request</a>
</div>

<style>
  a {
      color: var(--c-white);
      text-decoration: none;
  }
  .link-wrapper {
    &.styled {
      padding: 10px 20px;
      border: 1px solid white;
      background-color: rgb(27, 27, 27);
      border-radius: 5px;
    }

    &.simplistic {
      
    }
  }
</style>