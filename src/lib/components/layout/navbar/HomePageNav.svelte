<script>
  import CompanyLogo from "../../shared/CompanyLogo.svelte";
</script>

<div class="main-item">
  <CompanyLogo/>
  <a href="">Abstract</a>
</div>

<style>
  .main-item {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  a {
    color: white;
    text-decoration: none;
    font-weight: 600;
  }
</style>