<template>
  <div class="alpha">
    <!--    <div class="section-1">-->
    <!--      <p class="text-1">About</p>-->
    <!--      <hr class="new"/>-->
    <!--    </div>-->

    <div class="section-2">
      <p class="text-2">Commercial Law</p>

      <p class="text-3">
        Alderwood & Financial Law Group is well positioned to assist in matters related to the various aspects of
        commercial law.  Leveraging the backgrounds of its founding directors, Kate Nater and Mark Wilson,
        Alderwood & Financial Law Group has an experienced team ready to provide advice and representation in all facets
        of this area.
      </p>

      <p class="text-3">
        The breadth of experience available to Alderwood & Financial Law Group clients means that matters requiring the support of commercial documentation or advice are handled appropriately and efficiently.  In addition, representation in matters relating to corporations, tax and contract law as well as mergers and acquisitions is available to Alderwood & Financial Law Group clients.
      </p>

      <p class="text-3">
        Alderwood & Financial Law Group has advised clients on commercial matters common to both small and medium sized enterprises as well as larger companies.  Representation, advice and assistance is offered with a view to preserving and advancing the best interests of clients.
      </p>

      <ul class="text-5">
        <li class="text-6" >Banking & Finance</li>
        <li class="text-6" >Mergers & Acquisitions</li>
        <li class="text-6" >Corporations Law</li>
        <li class="text-6" >Tax Law</li>
        <li class="text-6" >Contract Law</li>
        <li class="text-6" >Trusts</li>
        <li class="text-6" >Business Structuring</li>
        <li class="text-6" >Commercial Drafting</li>
        <li class="text-6" >Intellectual Property</li>
        <li class="text-6" >PPSA Advice</li>
        <li class="text-6" >Joint Ventures</li>
      </ul>



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
  name: "CommercialLawSection2"
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