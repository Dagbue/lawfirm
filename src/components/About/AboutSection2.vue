<template>
  <div class="alpha">
    <div class="section-1">
      <p class="text-1">About</p>
      <hr class="new"/>
    </div>

    <div class="section-2">
      <p class="text-2">Company Profile</p>

      <p class="text-3">
        Mark Wilson and Kate Nater offer a practical approach to legal advice, representation and dispute resolution.
        Having worked together for over a decade at a multi-disciplinary law firm, their collective knowledge offers
        clients the benefit of extensive experience across a range of areas.  Mark and Kate call on their breadth
        of experience to advise and represent clients based on their needs and with their best interests in mind.
      </p>

      <p class="text-3">
        As a testament to the firm’s experience and client-focused approach, Alderwood & Financial Law Group’s current standing is built
        on recommendations and referrals.  Alderwood & Financial Law Group has developed a solid reputation for advocating the most
        practical steps towards the resolution of matters.
      </p>

      <p class="text-3">
        The careful and appropriate use of resources remains a focus, ensuring value for both larger and smaller clientele seeking guidance on how best to progress their matter.  These factors have helped position Alderwood & Financial Law Group as a preferred resource for many businesses.
      </p>

      <p class="text-3">
        Conveniently located in Busselton in the South West, Alderwood & Financial Law Group’s services are available to those seeking the highest standard of legal advice and representation.
      </p>


      <p class="text-4">
        Alderwood & Financial Law Group
      </p>
      <p class="text-4">
        Representing your best interests
      </p>
    </div>

  </div>
</template>


<script>
export default {
  name: "AboutSection2"
}
</script>

<style scoped>
.alpha{
  width: 75%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.section-1{
  margin-top: 3%;
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