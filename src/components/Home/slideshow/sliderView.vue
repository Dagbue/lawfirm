<template>
  <div>
  <div id="slider">
    <div class="arrowLeft" @click="arrowLeft()"></div>
    <Slides :image="images[chosenImage]" />
    <div class="arrowRight" @click="arrowRight()"></div>

  </div>

  </div>
</template>

<script>
import Slides from "./Slides.vue";
export default {
  name: "sliderView",
  components: {
    Slides,
  },

  data() {
    return {
      images: [
        {
          id: 0,
          url: "https://images.unsplash.com/photo-1533638978312-8a4eaa2fbeaf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGF3ZmlybXxlbnwwfHwwfHx8MA%3D%3D",
          title: "Wills & Estates.",
          title2: "Our Wills & Estates practice provides comprehensive legal services, guiding clients through the process of creating, managing, and executing wills, trusts, and estate plans to ensure their assets are protected and passed on according to their wishes.",
          para: "Book an Appointment",
          para2: "Book an Appointment",
        },
        {
          id: 1,
          url: "https://www.halelegal.com.au/application/files/6116/1907/3178/banner4_cropped.jpg",
          title: "Perth's Leading Commercial Law Firm.",
          title2: "Perth's leading commercial law firm, delivering expert legal solutions with a focus on business growth, innovation, and strategic success.",
          para: "Book an Appointment",
          para2: "Book an Appointment",
        },
        {
          id: 2,
          url: "https://www.halelegal.com.au/application/files/7016/1845/9634/Property-Banner.jpg",
          title: "Property Lawyers.",
          title2: "Property lawyers specialize in legal matters related to real estate transactions, including buying, selling, leasing, and resolving disputes over property ownership and rights.",
          para: "Book an Appointment",
          para2: "Book an Appointment",
        },
      ],
      chosenImage: 0,
      intervalObject: null,
    };
  },
  methods: {
    arrowLeft() {
      clearInterval(this.intervalObject);
      this.moveLeft();
      var self = this;
      this.intervalObject = setInterval(() => {
        self.moveLeft();
      }, 6000);
    },
    arrowRight() {
      clearInterval(this.intervalObject);
      this.moveRight();
      var self = this;
      this.intervalObject = setInterval(() => {
        self.moveRight();
      }, 6000);
    },
    moveLeft() {
      var flag = this.chosenImage;
      flag--;
      if (flag < 0) {
        flag = this.images.length - 1;
      }
      this.chosenImage = flag;
    },
    moveRight() {
      var flag = this.chosenImage;
      flag++;
      if (flag >= this.images.length) {
        flag = 0;
      }
      this.chosenImage = flag;
    },
  },
  created() {
    var self = this;
    this.intervalObject = setInterval(() => {
      self.moveLeft();
    }, 6000);
  },
};
</script>

<style>
#slider {
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  /*margin-top: 0.8%;*/
}
#slider .arrowLeft,
#slider .arrowRight {
  position: absolute;
  top: 50%;
  border: 20px solid transparent;
  display: none;
}
#slider .arrowLeft {
  border-right-color: #676767;
  z-index: 1;
}
#slider .arrowRight {
  right: 0;
  border-left-color: #676767;
}
#slider .squares div {
  height: 20px;
  width: 20px;
  margin-right: 10px;
  display: inline-block;
  background-color: #676767;
  border-radius: 50%;
  background-image: linear-gradient(
      to top, #000 30%, transparent
  );
}
.bitcoin{
  margin-left: 5%;
  margin-right: 5%;
}
@media (max-width: 700px){
  #slider .arrowLeft{
    display: none;
  }
  #slider .arrowRight{
    display: none;
  }
}
</style>
