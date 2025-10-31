<template>
<div>

  <div class="mapouter">
    <div class="gmap_canvas">

      <iframe width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Sheikh%20Zayed%20Rd%20-%20Trade%20Centre%20-%20DIFC%20-%20Dubai%20-%20United%20Arab%20Emirates%20Lagos+(Alderwood%20&amp;%20Financial%20Law%20Group)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>

  </div>
  </div>







</div>
</template>

<script>
export default {
  name: "contact-map"
}
</script>

<style scoped>


.mapouter{position:relative;text-align:right;width:100%;height:573px;}
.gmap_canvas {overflow:hidden;background:none!important;width:100%;height:573px;}
.gmap_iframe {height:573px!important;}
</style>