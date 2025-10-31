<template>
  <div>
    <brokerage-section1/>
    <brokerage-section2/>
    <commercial-law-section3/>
    <footer-home2/>
  </div>
</template>

<script>
import FooterHome2 from "@/components/BaseComponents/FooterHome2.vue";
import CommercialLawSection3 from "@/components/CommercialLaw/CommercialLawSection3.vue";
import BrokerageSection1 from "@/components/Brokerage/BrokerageSection1.vue";
import BrokerageSection2 from "@/components/Brokerage/BrokerageSection2.vue";

export default {
  name: "BrokerageView",
  components: {BrokerageSection2, BrokerageSection1, CommercialLawSection3, FooterHome2}
}
</script>

<style scoped>

</style>