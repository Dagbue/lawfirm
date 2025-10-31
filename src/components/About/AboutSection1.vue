<template>
  <div class="hero-image">
  </div>
</template>

<script>
export default {
  name: "AboutSection1"
}
</script>

<style scoped>
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.hero-image {
  background-image: url("@/assets/about-us-image.jpg");
  background-color: #cccccc;
  height: 500px;
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 4px 10px 0px;
}

</style>