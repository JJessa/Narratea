<template>
  <NavBar />
  <div class="big_div">
    <div class="create_div">
        <form>         
          <input type="text" id="titulo" placeholder="Título" required>
          <textarea id="contenido" placeholder="Comienza a escribir" required></textarea>
        <div>
          <button type="submit">Enviar</button>
        </div>
        </form>
      </div>
  </div>


  <Footer />
</template>

<script setup>
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'
</script>

<style scoped>
.big_div {
  width: 90vw;
  height: 85vh;
  background-image: url("../assets/images/narratea_fondo.png");
  background-size:cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  margin: 0 auto;
}

.create_div {
  width: 55%;
  height: 90%;
  background-color: #FFFFFF80;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

form {
  position: absolute;
  top: 48%;
  left: 50%;
  transform: translate(-50%, -50%);
}

input {
  background-color: #F4F4F4;
  height: 6vh;
  width: 40vw; 
  margin-top: 2.5rem;
  border: none;
  text-align: center;
  font-size: 2rem;
}

textarea {
  background-color: #F4F4F4;
  height: 35vh;
  width: 35vw; 
  margin-top: 3.5rem;
  border: none;
  resize: none;
  text-align: justify;
  padding: 2rem;
}

input::placeholder {
    font-size: 2.5rem;
}

::placeholder {
  font-size: 1rem;
  padding-left: 0.5rem;
}

button {
  background-color: hsl(277, 47%, 67%);
  padding: 0.8rem 3rem;
  font-size: 1.3rem;
  border: none;
  border-radius: 0.8rem;
  margin-top: 4rem;
 }
</style>