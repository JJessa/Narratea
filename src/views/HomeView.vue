<template>

 <NavBar />

 <div class="parent_div">
      <div class="top_child_div"></div>
  </div>

 <Footer />

</template>

<script setup>
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'
</script>

<style scoped>
.parent_div {
  width: 90vw;
  height: 85vh;
  background-image: url("../assets/images/narratea_fondo.png");
  background-size:cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  margin: 0 auto;
  /* background-color: #DADADA; */
}
.top_child_div {
  width: 50%;
  height: 30%;
  background-color: #feb139;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>