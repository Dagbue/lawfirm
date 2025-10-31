<template>
  <div class="alpha">
    <!--    <div class="section-1">-->
    <!--      <p class="text-1">About</p>-->
    <!--      <hr class="new"/>-->
    <!--    </div>-->

    <div class="section-2">
      <p class="text-2">Brokerage Management</p>

      <p class="text-3">
        Brokerage management involves overseeing financial transactions, ensuring compliance, and maintaining transparency between brokers and clients. Effective brokerage management focuses on ethical trading, accurate record-keeping, and providing clients with the best possible investment opportunities. For example, a broker must provide honest and accurate information about market trends rather than misleading clients for personal gain.
      </p>

      <p class="text-3">
        Did you know? A brokerage firm must operate within the framework of financial regulations to maintain its credibility and legal standing. Brokerage firms are required to:
        - Adhere to industry standards and regulations set by financial authorities.
        - Maintain transparency in all financial transactions and client interactions.
        - Employ risk management strategies to safeguard client investments.
        - Provide accurate and timely financial reports to regulatory bodies.
      </p>

      <p class="text-3">
        What should you do if you encounter unethical brokerage practices?
        The first step in addressing unethical or fraudulent brokerage activities is to file a formal complaint with the relevant financial regulatory authority. This complaint should include detailed information about the transaction, any misleading statements, and any losses incurred as a result.
        Regulatory bodies will then review the complaint and may take appropriate action, which could include investigations, penalties, or other corrective measures.
      </p>

      <p class="text-3">
        Brokerage firms are also encouraged to maintain an internal compliance framework to resolve disputes before they escalate. If a dispute cannot be resolved internally, legal recourse may be necessary. Clients should always review any settlement offers carefully and seek professional financial or legal advice to ensure their interests are protected.
      </p>

      <ul class="text-5">
        <li class="text-6">Regulatory compliance</li>
        <li class="text-6">Risk assessment</li>
        <li class="text-6">Transparency in transactions</li>
        <li class="text-6">Financial reporting</li>
        <li class="text-6">Ethical trading practices</li>
        <li class="text-6">Client data protection</li>
        <li class="text-6">Investment strategy disclosure</li>
        <li class="text-6">Fraud prevention</li>
        <li class="text-6">Dispute resolution</li>
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
  name: "BrokerageSection2"
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
