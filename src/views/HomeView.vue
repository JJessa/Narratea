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
      <router-link to="/about" class="about_link">
      <div class="children_divs_title">
        <img src="../assets/images/pluma.png" alt="pluma_estilografica" class="children_divs_img1">
        <h4>Sobre Nosotros</h4>
      </div>
      <p> Conoce más acerca de quiénes somos, y cómo trabajamos para crear una plataforma de calidad</p>
    </router-link>
    </div>
    <div class="stories children_divs">
      <router-link to="/Stories" class="stories_link">
      <div class="children_divs_title">
        <img src="../assets/images/letras.png" alt="start_now" class="children_divs_img2">
        <h4 id="stories_children_div_title">Relatos</h4>
      </div>
      <p> Déjate llevar por la imaginación y descubre nuevas historias explorando nuestros relatos cortos</p>
    </router-link>
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
  background-color: #FFFFFF80;
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
  background-color: #FFFFFF80;
}

.about_link, .stories_link {
  text-decoration: none;
  color: inherit;
}
.children_divs_title {
  display: flex;  
  align-items: center;  
}

#stories_children_div_title {
  margin-left: 2rem;
}
.children_divs_title h4 {
  font-size: 2rem;
  margin: 0;  
}
.children_divs_img1 {
  width: 28%;
  height: 30%;
}

.children_divs_img2 {
  width: 33%;
  height: 34%;
}


.children_divs p {
  margin-top: 0;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1.2rem;
  text-align: center;
}
</style>