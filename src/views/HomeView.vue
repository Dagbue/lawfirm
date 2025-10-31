<template>
  <div class="home">
    <slider-view/>
    <home-section1/>
    <home-section2/>
    <home-section3/>
    <footer-home2/>
  </div>
</template>

<script>


import SliderView from "@/components/Home/slideshow/sliderView.vue";
import HomeSection1 from "@/components/Home/HomeSection1.vue";
import HomeSection2 from "@/components/Home/HomeSection2.vue";
import HomeSection3 from "@/components/Home/HomeSection3.vue";
import FooterHome2 from "@/components/BaseComponents/FooterHome2.vue";

export default {
  name: 'HomeView',
  components: {FooterHome2, HomeSection3, HomeSection2, HomeSection1, SliderView},
}
</script>
