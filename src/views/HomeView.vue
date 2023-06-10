<template>

 <NavBar />

 <div class="parent_div">
  <div class="home_title">
    <h1 >Narratea</h1>
  </div>
  <div class="top_child_div">
      <p class="home_parraf">Escribe, publica y comparte tus relatos cortos con otros escritores y lectores apasionados por la literatura</p> 
      <p class="home_parraf">¡Da vida a tus historias y deja que tus palabras vuelen!</p> 
  </div>
  <div class="total_children_div">
    <div class="about_us children_divs">
      <div>
        <img />
        <h4>Sobre Nosotros</h4>
      </div>
      <p> Conoce más acerca de quiénes somos, y cómo trabajamos para crear una plataforma de calidad</p>
    </div>
    <div class="stories children_divs">
      <div>
        <img />
        <h4>Relatos</h4>
      </div>
      <p> Déjate llevar por la imaginación y descubre nuevas historias explorando nuestros relatos cortos</p>
    </div>
  </div>
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
}
.top_child_div {
  width: 60%;
  height: 20%;
  backdrop-filter: blur(10px);
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  
}

.home_title {
  font-size: 4rem; 
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.home_parraf {
  text-align: center;
  font-size: 1.5rem;
}

.total_children_div {
  width: 77%;
  display: flex;
  justify-content: space-around;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  position:absolute;
}
.children_divs {
  width: 25%;
  height: 25%;
  backdrop-filter: blur(10px);
}
</style>