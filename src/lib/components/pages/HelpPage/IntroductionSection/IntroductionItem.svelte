<script lang="ts">
  interface Props {
    title: string,
    text: string,
  }

  let {title, text} : Props = $props();
</script>

<div class="introduction-item">
  <h2 class="title">{title}</h2>
  <p class="text">{text}</p>
  <a class="link" href="#">Learn more</a>
</div>

<style>
  .introduction-item {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .title {
    font-size: 1.5rem;
  }
  .text {
    font-size: 1.4rem;
  }
  .link {
    color: rgb(83, 83, 255);
    text-decoration: none;
    font-size: 1.1rem;
  }
</style>