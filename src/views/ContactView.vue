<template>
  <div class="alpha">
    <contact-header/>
    <contact-body/>
    <contact-map/>
    <footer-home2/>
  </div>
</template>

<script>
import ContactHeader from "@/components/Contact/ContactHeader.vue";
import ContactBody from "@/components/Contact/contact-body.vue";
import ContactMap from "@/components/Contact/contact-map.vue";
import FooterHome2 from "@/components/BaseComponents/FooterHome2.vue";



export default {
  name: "ContactView",
  components: {FooterHome2, ContactMap, ContactBody, ContactHeader}
}
</script>

<style scoped>

</style>