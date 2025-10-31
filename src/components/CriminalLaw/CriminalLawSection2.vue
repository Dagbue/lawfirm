<template>
  <div class="alpha">
    <!--    <div class="section-1">-->
    <!--      <p class="text-1">About</p>-->
    <!--      <hr class="new"/>-->
    <!--    </div>-->

    <div class="section-2">
      <p class="text-2">Sound Legal <br/>Advice &  Court Room Experience</p>

      <p class="text-3">
        Alderwood & Financial Law Group can provide advice and representation to those charged with an offence that requires court attendance or those under investigation for a criminal matter. Lawyers from the Alderwood & Financial Law Group team have represented clients at all levels and in all State and Federal Courts.
      </p>

      <p class="text-3">
        The services of an experienced and understanding criminal lawyer can not only be reassuring, but can ensure that the impacts on reputation, rights and life are minimised. The team at Alderwood & Financial Law Group have a reputation for working effectively with clients across a wide range of criminal matters.
      </p>

      <p class="text-3">
        Importantly, Alderwood & Financial Law Group provides open and consistent communication to keep clients informed and aware of the matter's progress and the next steps that may be required. Whether working through cases such as murder, fraud or drug related offences or other charges, Alderwood & Financial Law Group provides commitment, professionalism and expertise.
      </p>

      <ul class="text-5">
        <li class="text-6" >White Collar Crime (ASIC Prosecution)</li>
        <li class="text-6" >Disciplinary Procedures (brought by professional bodies)</li>
        <li class="text-6" >Murder</li>
        <li class="text-6" >Assaults</li>
        <li class="text-6" >Sexual Offences</li>
        <li class="text-6" >Fraud</li>
        <li class="text-6" >Stealing</li>
        <li class="text-6" >Drugs</li>
        <li class="text-6" >Reckless Driving</li>
        <li class="text-6" >Restraining Orders</li>
        <li class="text-6" >Extraordinary Driver's Licences</li>
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
  name: "CriminalLawSection2"
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