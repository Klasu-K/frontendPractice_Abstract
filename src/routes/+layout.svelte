<script lang="ts">
  import NavBar from "$lib/components/layout/navbar/NavBar.svelte";
  import "./styles.css";
  let {children} = $props();  
</script>
<NavBar/>
{@render children()}