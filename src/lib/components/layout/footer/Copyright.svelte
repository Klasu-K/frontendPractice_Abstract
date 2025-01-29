<script>
  import CompanyLogo from "$lib/components/shared/CompanyLogo.svelte";
</script>

<div class="copyright-container">
  <div class="copyright-wrapper">
    <div class="logo-wrapper">
      <CompanyLogo/>
    </div>
    <p class="copyright">
      &#169; Copyright 2025 <br/>
      Abstract Studio Design, Inc. <br/>
      All rights reserved
    </p>
  </div>
</div>

<style>
  .copyright-wrapper {
    display: block;
    margin-left: auto;
    margin-right: 56px;
    width: max-content;
    height: 136px;
  }

  .logo-wrapper {
    margin-bottom: 24px;
  }

  .copyright {
    font-size: 1.3rem;
    line-height: 1.7rem;
  }
</style>