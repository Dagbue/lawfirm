<template>
  <div class="alpha">
    <article-header/>
    <article-section1/>
    <footer-home2/>
  </div>
</template>


<script>
import ArticleHeader from "@/components/Articles/ArticleHeader.vue";
import ArticleSection1 from "@/components/Articles/ArticleSection1.vue";
import FooterHome2 from "@/components/BaseComponents/FooterHome2.vue";

export default {
  name: "ArticlesView",
  components: {FooterHome2, ArticleSection1, ArticleHeader}
}
</script>


<style scoped>

</style>