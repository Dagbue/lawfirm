<template>
  <div>
    <financial-specialists-section1/>
    <financial-specialists-section2/>
    <commercial-law-section3/>
    <footer-home2/>
  </div>
</template>

<script>
import FooterHome2 from "@/components/BaseComponents/FooterHome2.vue";
import CommercialLawSection3 from "@/components/CommercialLaw/CommercialLawSection3.vue";
import FinancialSpecialistsSection1 from "@/components/FinancialSpecialists/FinancialSpecialistsSection1.vue";
import FinancialSpecialistsSection2 from "@/components/FinancialSpecialists/FinancialSpecialistsSection2.vue";

export default {
  name: "FinancialSpecialistsView",
  components: {FinancialSpecialistsSection2, FinancialSpecialistsSection1, CommercialLawSection3, FooterHome2}
}
</script>

<style scoped>

</style>