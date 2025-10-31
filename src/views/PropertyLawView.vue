<template>
  <div>
    <property-law-section1/>
    <property-law-section2/>
    <commercial-law-section3/>
    <footer-home2/>
  </div>
</template>

<script>
import PropertyLawSection1 from "@/components/propertyLaw/propertyLawSection1.vue";
import PropertyLawSection2 from "@/components/propertyLaw/propertyLawSection2.vue";
import FooterHome2 from "@/components/BaseComponents/FooterHome2.vue";
import CommercialLawSection3 from "@/components/CommercialLaw/CommercialLawSection3.vue";

export default {
  name: "PropertyLawView",
  components: {CommercialLawSection3, FooterHome2, PropertyLawSection2, PropertyLawSection1}
}
</script>


<style scoped>

</style>