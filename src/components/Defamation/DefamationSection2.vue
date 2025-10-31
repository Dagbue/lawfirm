<template>
  <div class="alpha">
    <!--    <div class="section-1">-->
    <!--      <p class="text-1">About</p>-->
    <!--      <hr class="new"/>-->
    <!--    </div>-->

    <div class="section-2">
      <p class="text-2">What is Defamation?</p>

      <p class="text-3">
        Defamation is the act of communicating or publishing to persons, other than the defamed person, imputations which have the effect of lowering a person’s reputation in the eyes of the public at large. For example, John says to members of the community that Bill has been convicted of having criminal acts when this is completely untrue.
      </p>

      <p class="text-3">
        Did you know that? A corporation has no cause of action for defamation for the publication of defamatory matter about it unless it was an excluded corporation at the time of the publication. A corporation is an excluded corporation if —
        - the objects for which it is formed do not include obtaining financial gain for its members or corporators; or
        - it employs fewer than 10 persons and is not related to another corporation, and the corporation is not a public body.
        In counting employees part-time employees are to be taken into account as an appropriate fraction of a full-time equivalent.
      </p>

      <p class="text-3">
        What do I do if I have been defamed?
        The first step in any Defamation matter is to issue what is known as a “Concerns Notice”. A “Concerns Notice” is a written document which informs the publisher of the defamatory imputations which are said to arise or be conveyed about the aggrieved person from the defamatory statement or material.
        The Concerns Notice also informs the publisher that they ought take steps to make amends.
        Within 28 days of receiving a “Concerns Notice” the publisher of the defamatory statement or materials may elect to make an “Offer to Make Amends”.
      </p>

      <p class="text-3">
        An “Offer to Make Amends” is a written document prepared in accordance with the Defamation Act to try and resolve defamation disputes at the earliest opportunity.
        If the “Offer to Make Amends” is reasonable and is not accepted by the aggrieved person it can be used as a defence to any Court proceedings. It is therefore important to carefully consider any “Offer to Make Amends” carefully.
        If you believe you have been defamed you ought to seek legal advice. Our office has experience dealing with Defamation actions and will be more than happy to assist you.
      </p>

      <ul class="text-5">
        <li class="text-6" >Justification</li>
        <li class="text-6" >Contextual truth</li>
        <li class="text-6" >Absolute privilege</li>
        <li class="text-6" >Publication of public documents</li>
        <li class="text-6" >Fair report of proceedings of public concern</li>
        <li class="text-6" >Qualified privilege for provision of certain information</li>
        <li class="text-6" >Honest opinion</li>
        <li class="text-6" >Innocent dissemination</li>
        <li class="text-6" >Defence of triviality</li>
      </ul>



      <!--      <p class="text-4">-->
      <!--        Hale Legal-->
      <!--      </p>-->
      <!--      <p class="text-4">-->
      <!--        Representing your best interests-->
      <!--      </p>-->
    </div>

  </div>
</template>

<script>
export default {
  name: "DefamationSection2"
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