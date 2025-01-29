<script lang="ts">
  import FooterBlock from "./FooterBlock.svelte";
  import ContactUsBlock from "./ContactUsBlock.svelte";
</script>

<div class="footer-content">
  <div class="footer-column">
    <FooterBlock
    title="Company"
    linkNames={["About Us", "Careers", "Legal"]}
    />
    <ContactUsBlock/>
  </div>
  <div class="footer-column">
    <FooterBlock
    title="Abstract"
    linkNames={["Start Trial", "Pricing", "Download"]}
    />
  </div>
  <div class="footer-column">
    <FooterBlock
    title="Resources"
    linkNames={["Blog", "Help Center", "Release Notes", "Status"]}
    />
  </div>
  <div class="footer-column">
    <FooterBlock
    title="Community"
    linkNames={["Twitter", "LinkedIn", "Facebook", "Dribbble", "Podcast"]}
    />
  </div>
</div>

<style>
  .footer-content {
    display: flex;
    flex-wrap: wrap;
  }

  .footer-column {
    min-width: 160px;
    width: 15%;
  }
</style>