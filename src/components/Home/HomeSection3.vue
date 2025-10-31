<template>
  <div class="alpha">
    <!--    <div class="section-1">-->
    <!--      <p class="text-1">About</p>-->
    <!--      <hr class="new"/>-->
    <!--    </div>-->

    <hr class="line"/>

    <div class="section-2">
      <p class="text-2">
        Our clients' best interests remain our primary concern at all times.
      </p>

      <p class="text-3">
        With over 50 years of combined experience across a range of legal areas, we are able to offer advice to
        individuals, small and medium-sized enterprises and larger corporate concerns.  Regardless of complexity or
        scope of work, the appropriate resources are available to those that entrust their issues to our team.
      </p>


    </div>

  </div>
</template>

<script>
export default {
  name: "HomeSection3"
}
</script>


<style scoped>
.alpha{
  width: 70%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.section-2{
  margin-top: 2%;
}

.text-1{
  font-size: 30px;
  padding-bottom: 5px;
  font-family: 'BR-Firma-Bold', sans-serif;
}

.new{
  width: 10%;
  border: 1px solid #1F1F2A;
}

.text-2{
  text-align: center;
  font-size: 25px;
  padding-bottom: 20px;
  font-family: 'BR-Firma-Bold', sans-serif;
}

.text-3{
  letter-spacing: 0.6px;
  line-height: 1.4;
  font-size: 17px;
  color: #202020;
  font-family: 'BR-Firma-Light', sans-serif;
  padding-bottom: 20px;
  text-align: center;
}

.text-4{
  letter-spacing: 0.6px;
  line-height: 1.4;
  font-size: 17px;
  color: #202020;
  font-family: 'BR-Firma-Bold', sans-serif;
}

.text-5{
  margin-left: 3%;
  margin-bottom: 3%;
}

.text-6{
  padding-top: 5px;
  padding-bottom: 9px;
  font-size: 19px;
  font-family: 'BR-Firma-Bold', sans-serif;
  color: #017284;
}

.line{
  border: 1px solid #017284;
  width: 100%;
}


@media (max-width: 990px) {

}

@media (max-width: 700px) {
  .alpha{
    width: 80%;
  }

  .text-4{
    margin-bottom: 30px;
  }
}

@media (max-width: 500px) {

}
</style>