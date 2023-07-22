<template>

 <NavBar />

 <div class="parent_div">
  <div class="home_title">
    <h1 >Narratea</h1>
  </div>
  <div class="top_child_div">
      <p class="home_parraf">Escribe, publica y comparte tus relatos cortos con otros escritores y lectores apasionados por la literatura.</p> 
      <p id="motto" class="home_parraf">¡Da vida a tus historias y deja que tus palabras vuelen!</p> 
  </div>
  <div class="total_children_div">
    <div class="about_us children_divs">
      <router-link to="/about" class="about_link">
      <div class="children_divs_title">
        <img src="../assets/images/pluma.png" alt="pluma_estilografica" class="children_divs_img1">
        <h4>Sobre Nosotros</h4>
      </div>
      <p id="children_paragraph1"> Conoce más acerca de quiénes somos, y cómo trabajamos para crear una plataforma de calidad</p>
    </router-link>
    </div>
    <div class="stories children_divs">
      <router-link to="/Stories" class="stories_link">
      <div class="children_divs_title">
        <img src="../assets/images/letras.png" alt="start_now" class="children_divs_img2">
        <h4 id="stories_children_div_title">Relatos</h4>
      </div>
      <p id="children_paragraph2"> Déjate llevar por la imaginación y descubre nuevas historias explorando nuestros relatos</p>
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
  width: 50vw;
  height: auto;
  background-color: #FFFFFF80;
  position: absolute;
  top: 36%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: .8rem;
}

.home_title {
  font-size: 3rem; 
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.home_parraf {
  text-align: center;
  font-size: 1.7rem;
  margin-top: 0.8rem;
}

#motto {
  margin-top: 1.5rem;
}

.total_children_div {
  width: 77vw;
  display: flex;
  justify-content: space-around;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  position:absolute;
}

.children_divs {
  width: 15vw;
  height: auto;
  background-color: #FFFFFF80;
  border-radius: .8rem;
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
  font-size: 1.7rem;
  margin: 0;  
}
.children_divs_img1 {
  width: 28%;
  height: 30%;
  border-radius: .8rem;
}

.children_divs_img2 {
  width: 33%;
  height: 34%;
}

.children_divs p {
  margin-top: 0;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1.32rem;
  text-align: center;
}

@media (max-width: 819px) {

  .parent_div {
  height: 100vh;
  background-image: url("../assets/images/naratea-background-responsive.png");
  background-size: cover;
}

  .home_title {
  font-size: 2rem; 
  margin-top: -2rem;
}
  .top_child_div {
  width: 70vw;
  top: 28%;  
  padding: .6rem;
}
.home_parraf {
  font-size: 1.3rem;
}
.total_children_div {
  width: 75vw;
  display: block;
  margin-top: 2rem;
}
.children_divs {
  width: 65vw;
  margin: 1.5rem auto;
  padding: .001rem;
}
.children_divs_img1, .children_divs_img2 {
  display: none;
}
 .children_divs_title h4 {
 margin: .5rem auto;
 }

 #stories_children_div_title {
  margin: .5rem auto;
 }
}

@media (min-width: 820px) and (max-width: 1024px) {
  .children_divs {
  width: 35vw;
  height: auto;
}
}
</style>