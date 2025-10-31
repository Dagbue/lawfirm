<template>
  <div>
    <criminal-law-section1/>
    <criminal-law-section2/>
    <commercial-law-section3/>
    <footer-home2/>
  </div>
</template>

<script>
import CriminalLawSection1 from "@/components/CriminalLaw/CriminalLawSection1.vue";
import CriminalLawSection2 from "@/components/CriminalLaw/CriminalLawSection2.vue";
import CommercialLawSection3 from "@/components/CommercialLaw/CommercialLawSection3.vue";
import FooterHome2 from "@/components/BaseComponents/FooterHome2.vue";

export default {
  name: "CriminalLawView",
  components: {FooterHome2, CommercialLawSection3, CriminalLawSection2, CriminalLawSection1}
}
</script>

<style scoped>

</style>