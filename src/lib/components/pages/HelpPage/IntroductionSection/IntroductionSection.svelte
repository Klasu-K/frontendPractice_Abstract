<script lang="ts">
  import IntroductionItem from "./IntroductionItem.svelte";
</script>

<section class="introduction-section">
  <ul class="introduction-items">
    <li class="introduction-item">
      <IntroductionItem 
      title="Using Abstract" 
      text="Abstract lets you manage, version, and document your designs in one place."
      />
    </li>
    <li class="introduction-item">    
      <IntroductionItem 
      title="Manage your account" 
      text="Configure your account settings, such as your email, profile details, and password."
      />
    </li>
    <li class="introduction-item">
      <IntroductionItem 
      title="Manage organizations, teams, and projects" 
      text="Use Abstract organizations, teams, and projects to organize your people and your work."
      />
    </li>
    <li class="introduction-item">    
      <IntroductionItem 
      title="Manage billing" 
      text="Change subscriptions and payment details."
      />
    </li>
    <li class="introduction-item">
      <IntroductionItem 
      title="Authenticate to Abstract" 
      text="Set up and configure SSO, SCIM, and Just-in-Time provisioning."
      />
    </li>
    <li class="introduction-item">
      <IntroductionItem 
      title="Abstract support" 
      text="Get in touch with a human."
      />
    </li>
  </ul>
</section>

<style>
  .introduction-section {
    width: 100%;
  }
  .introduction-items {
    margin: 180px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 80px;
  }

  .introduction-item {
    flex-basis: 40%;
  }
</style>