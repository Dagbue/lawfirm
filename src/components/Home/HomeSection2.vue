<template>
  <div class="alpha">

<!--    <div class="section-1">-->
<!--      <h2 class="text-1" style="text-align: center;">WHY OUR CLIENTS CHOSE US:</h2>-->
<!--    </div>-->


    <div class="section-content-1" >
      <div class="box">
        <img src="@/assets/law-img-1.jpg" class="about-image" alt="image"/>
        <h3>COMMERCIAL LAW :</h3>
        <p>Alderwood & Financial Law Group is well positioned to assist in matters related to the various aspects of commercial law.</p>
      </div>
      <div class="box">
        <img src="@/assets/law-img-2.jpg" class="about-image" alt="image"/>
        <h3>PROPERTY LAW :</h3>
        <p>Alderwood & Financial Law Group is able to provide the benefit of extensive and focused expertise in the discipline of property
          law.</p>
      </div>
      <div class="box">
        <img src="@/assets/law-img-3.jpg" class="about-image" alt="image"/>
        <h3>WILLS & ESTATES :</h3>
        <p>
          Everyone should have a Will but this is particularly important if you want to specify who is to receive your
          assets, or have a business, or sizeable assets.
        </p>
      </div>
    </div>


    <div class="section-content-1" >
      <div class="box">
        <img src="@/assets/law-img-4.jpg" class="about-image" alt="image"/>
        <h3>LITIGATION :</h3>
        <p>Our team of Lawyers are experienced in dealing with difficult matters involving Litigation.</p>
      </div>
      <div class="box">
        <img src="@/assets/law-img-5.jpg" class="about-image" alt="image"/>
        <h3>COMMERCIAL LITIGATION & INSOLVENCY :</h3>
        <p>
          Alderwood & Financial Law Group has extensive experience working with private business, corporations and individuals in the field
          of commercial Litigation.
        </p>
      </div>
      <div class="box">
        <img src="@/assets/law-img-6.jpg" class="about-image" alt="image"/>
        <h3>BANKRUPTCY :</h3>
        <p>Our office often assists in bankruptcy matters. It is important that, if you receive any correspondence regarding bankruptcy.</p>
      </div>
    </div>


    <div class="section-content-1" >
      <div class="box">
        <img src="@/assets/law-img-7.jpg" class="about-image" alt="image"/>
        <h3>ALTERNATIVE DISPUTE RESOLUTION :</h3>
        <p>Understanding that Litigation can be an expensive and stressful avenue, Alderwood & Financial Law Group can assist parties to
          explore alternatives.</p>
      </div>
      <div class="box">
        <img src="@/assets/law-img-8.jpg" class="about-image" alt="image"/>
        <h3>EMPLOYMENT & INDUSTRIAL RELATIONS :</h3>
        <p>
          If you speak to Alderwood & Financial Law Group for legal advice from the outset, we are confident that in the long run employers
          will save time, money and stress.
        </p>
      </div>
      <div class="box">
        <img src="@/assets/law-img-9.jpg" class="about-image" alt="image"/>
        <h3>CRIMINAL LAW:</h3>
        <p>
          Lawyers from the Alderwood & Financial Law Group team have represented clients at all levels and in all State and Federal Courts.
        </p>
      </div>
    </div>


    <div class="section-content-1" >
      <div class="box">
        <img src="@/assets/law-img-10.jpg" class="about-image" alt="image"/>
        <h3>DEFAMATION :</h3>
        <p>Alderwood & Financial Law Group has extensive experience in dealing with Defamation actions and will be more than happy
          to assist you.</p>
      </div>


      <div class="box">
        <img src="@/assets/law-img-11.jpg" class="about-image" alt="image"/>
        <h3>CRIMINAL PROPERTY CONFISCATION :</h3>
        <p>
          Alderwood & Financial Law Group has represented clients in numerous property confiscation matters.
        </p>
      </div>

      <div class="box">
        <img src="@/assets/law-img-12.jpg" class="about-image" alt="image"/>
        <h3>INQUIRIES & COMMISSIONS:</h3>
        <p>
          The team at Alderwood & Financial Law Group has specialist expertise in representing clients involved in these matters.
        </p>
      </div>
    </div>


    <div class="section-content-1" >
      <div class="box" >
        <img src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fE1hbmFnZW1lbnR8ZW58MHx8MHx8fDA%3D" class="about-image" alt="image"/>
        <h3>BROKERAGE MANAGEMENT :</h3>
        <p>We provide expert legal oversight, ensure compliance, and mitigate risks to optimize brokerage operations
          while safeguarding client interests with integrity and precision.</p>
      </div>


      <div class="box" >
        <img src="https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RmluYW5jaWFsJTIwU3BlY2lhbGlzdHN8ZW58MHx8MHx8fDA%3D" class="about-image" alt="image"/>
        <h3 style="text-transform: uppercase">Financial specialists :</h3>
        <p>
          We provide expert financial management for law firms, ensuring stability, compliance, and profitability
          through budgeting, tax planning, trust accounting, and streamlined billing.
        </p>
      </div>


    </div>


  </div>
</template>


<script>
export default {
  name: "HomeSection2",
  methods: {
    onPostClick() {
      this.$router.push("/register");
      window.scrollTo(0, 0);
    },
    onPostClick2() {
      this.$router.push("/login");
      window.scrollTo(0, 0);
    },
  },
}
</script>


<style scoped>

.alpha{
  padding-bottom: 10%;
  /*background: #f4f5f6;*/
}

.section-1-inner-content h1{
  font-size: 17px;
  font-family: 'BR-Firma-Bold', sans-serif;
  padding-bottom: 5px;
}



.text-1{
  display: block;
  margin-left: auto;
  margin-right: auto;
  letter-spacing: 1.2px;
  width: 40%;
  font-size: 25px;
  padding-bottom: 5px;
  font-family: 'BR-Firma-Bold', sans-serif;
}
.text-2{
  font-size: 18px;
  text-align: center;
  padding-bottom: 1%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
}
.text-3{
  font-size: 18px;
  text-align: center;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  font-family: 'BR-Firma-Bold', sans-serif;
}


.btn-part{
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 3%;
}

.btn-1{
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  height: 48px;
  padding: 8px 16px;
  border-radius: 14px;
  gap: 8px;
  background-color: transparent;
  border: 1px solid #d0d0d0;
  color: #191C1F;
  width: 180px;
}

.btn-2{
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  height: 48px;
  padding: 8px 16px;
  border-radius: 14px;
  gap: 8px;
  background: #017284;
  border: 1px solid #017284;
  width: 190px;
  color: #ffffff;
}

.section-content-1{
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 3%;
}


.about-image{
  display: block;
  margin-left: auto;
  margin-right: auto;
  height: 200px;
  width: 350px;
  object-fit: cover;
}

.box h1{
  padding-top: 17px;
  color: #017284;
  font-weight: bold;
  text-align: left;
  margin-bottom: 5px;
  font-size: 40px;
  font-family: 'BR-Firma-Bold', sans-serif;
}

.box h3{
  padding-top: 22px;
  color: #017284;
  text-align: left;
  margin-bottom: 3px;
  font-family: 'BR-Firma-Bold', sans-serif;
}

.box p{
  color: #222222;
  text-align: left;
  font-size: 15px;
  line-height: 1.5;
  padding-top: 1%;
}

.box{
  /*background-color: #ffffff;*/
  /*box-shadow:  20px 20px 60px #d9d9d9,*/
  /*-20px -20px 60px #ffffff;*/
  padding: 15px;
  border-radius: 12px;
  margin-bottom: 12px;
  margin-top: 4%;
  width: 400px;
  height: 260px;
  /*border: 2px solid #1F1F2A;*/
}




@media (max-width: 990px){
  .section-content-1{
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-evenly;
  }

  .box{
    /*margin-left: 10%;*/
    /*margin-right: 10%;*/
    display: block;
    margin-left: auto;
    margin-right: auto;
    height: unset;
    margin-top: unset;
    width: 100%;
  }

  .alpha{
    padding-top: 10%;
    padding-bottom: unset;
  }

  .text-1{
    width: 90%;
  }

  .about-image{
    display: block;
    margin-left: auto;
    margin-right: auto;
  }


  .box h1{
    text-align: center;
  }

  .box h3{
    text-align: center;
  }

  .box p{
    width: 90%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
}

@media (max-width: 500px){


  .btn-part{
    margin-top: 5%;
  }

  .text-2{
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 90%;
  }
}
</style>