<template>
  <div class="alpha">
    <dispute-resolution-section1/>
    <dispute-resolution-section2/>
    <dispute-resolution-section3/>
    <footer-home2/>
  </div>
</template>

<script>
import DisputeResolutionSection1 from "@/components/DisputeResolution/DisputeResolutionSection1.vue";
import DisputeResolutionSection2 from "@/components/DisputeResolution/DisputeResolutionSection2.vue";
import DisputeResolutionSection3 from "@/components/DisputeResolution/DisputeResolutionSection3.vue";
import FooterHome2 from "@/components/BaseComponents/FooterHome2.vue";

export default {
  name: "DisputeResolutionView",
  components: {FooterHome2, DisputeResolutionSection3, DisputeResolutionSection2, DisputeResolutionSection1}
}
</script>

<style scoped>

</style>