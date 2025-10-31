<template>
  <div>
    <request-hero/>
    <request-body/>
    <footer-home2/>
  </div>
</template>

<script>
import RequestHero from "@/components/Request/RequestHero.vue";
import RequestBody from "@/components/Request/RequestBody.vue";
import FooterHome2 from "@/components/BaseComponents/FooterHome2.vue";

export default {
  name: "RequestView",
  components: {FooterHome2, RequestBody, RequestHero}
}
</script>

<style scoped>

</style>