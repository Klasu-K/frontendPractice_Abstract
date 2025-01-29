<script lang="ts">
  import NavBar from "$lib/components/layout/navbar/NavBar.svelte";
  import Footer from "$lib/components/layout/footer/Footer.svelte";
  import "./styles.css";
  let {children} = $props();  
</script>
<NavBar/>
{@render children()}
<Footer/>