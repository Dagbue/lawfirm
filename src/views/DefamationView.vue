<template>
  <div>
    <defamation-section1/>
    <defamation-section2/>
    <commercial-law-section3/>
    <footer-home2/>
  </div>
</template>

<script>
import DefamationSection1 from "@/components/Defamation/DefamationSection1.vue";
import DefamationSection2 from "@/components/Defamation/DefamationSection2.vue";
import FooterHome2 from "@/components/BaseComponents/FooterHome2.vue";
import CommercialLawSection3 from "@/components/CommercialLaw/CommercialLawSection3.vue";

export default {
  name: "DefamationView",
  components: {CommercialLawSection3, FooterHome2, DefamationSection2, DefamationSection1}
}
</script>

<style scoped>

</style>