<template>
  <div class="alpha">
    <commercial-law-section1/>
    <commercial-law-section2/>
    <commercial-law-section3/>
    <footer-home2/>
  </div>
</template>

<script>
import CommercialLawSection1 from "@/components/CommercialLaw/CommercialLawSection1.vue";
import CommercialLawSection2 from "@/components/CommercialLaw/CommercialLawSection2.vue";
import CommercialLawSection3 from "@/components/CommercialLaw/CommercialLawSection3.vue";
import FooterHome2 from "@/components/BaseComponents/FooterHome2.vue";

export default {
  name: "CommercialLawView",
  components: {FooterHome2, CommercialLawSection3, CommercialLawSection2, CommercialLawSection1}
}
</script>

<style scoped>

</style>