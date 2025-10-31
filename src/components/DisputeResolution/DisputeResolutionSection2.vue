<template>
  <div class="alpha">
<!--    <div class="section-1">-->
<!--      <p class="text-1">About</p>-->
<!--      <hr class="new"/>-->
<!--    </div>-->

    <div class="section-2">
      <p class="text-2">Negotiating Commercial Outcomes</p>

      <p class="text-3">
        The team at Alderwood & Financial Law Group understands that matters may arise where a solution is not immediately apparent. Understanding that litigation can be an expensive and stressful avenue, Alderwood & Financial Law Group can assist parties to explore alternatives.
      </p>

      <p class="text-3">
        Early resolution of matters where parties have initially taken opposing viewpoints offers a real benefit, a definitive conclusion and a clear path forward. In many ways, alternative dispute resolution is the commercially astute way forward as it allows for clarity without the uncertainty and cost of litigation.
      </p>

      <p class="text-3">
        It is however a reality that circumstances sometimes arise where alternative dispute resolution does not conclude the matter and parties proceed to litigation. In these instances, Alderwood & Financial Law Group brings the full weight of our extensive experience and vigorously represents each client's interests until the matter is resolved.
      </p>



<!--      <p class="text-4">-->
<!--        Alderwood & Financial Law Group-->
<!--      </p>-->
<!--      <p class="text-4">-->
<!--        Representing your best interests-->
<!--      </p>-->
    </div>

  </div>
</template>

<script>
export default {
  name: "DisputeResolutionSection2"
}
</script>

<style scoped>
.alpha{
  width: 75%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.section-2{
  margin-top: 4%;
  margin-bottom: 3%;
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
  font-size: 30px;
  padding-bottom: 10px;
  font-family: 'BR-Firma-Bold', sans-serif;
}

.text-3{
  letter-spacing: 0.6px;
  line-height: 1.4;
  font-size: 17px;
  color: #202020;
  font-family: 'BR-Firma-Light', sans-serif;
  padding-bottom: 20px;
}

.text-4{
  letter-spacing: 0.6px;
  line-height: 1.4;
  font-size: 18px;
  color: #202020;
  font-family: 'BR-Firma-Bold', sans-serif;
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