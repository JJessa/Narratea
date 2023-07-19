<template>
  <NavBar />
  <div class="big_div">
    <div class="create_div">
        <form @submit.prevent>         
          <input type="text" id="titulo" v-model="title" placeholder="Título" required>
          <textarea id="contenido" v-model="description" placeholder="Comienza a escribir" required></textarea>
        <div class="btn-padding">
          <button @click="createPost">Enviar</button>
        </div>
        </form>
      </div>
  </div>
  <Footer />
</template>

<script setup>
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'
import {ref} from "vue"
import axios from "axios"



let title = ref("")
let description = ref("")

const url = 'http://127.0.0.1:5000/api/relatos';


async function createPost(){
  try {
  await axios.post(url, {
    titulo: title.value,
    relato: description.value
  })
  window.location.href = "/Stories";
}catch(error){
  console.log(error)
}
}



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
  margin-top: 2rem;
  border: none;
  text-align: center;
  font-size: 2rem;
  font-family: 'Lobster', cursive;
}

textarea {
  background-color: #F4F4F4;
  height: 40vh;
  width: 35vw; 
  margin-top: 3.5rem;
  border: none;
  resize: none;
  text-align: justify;
  padding: 2rem;
  font-size: 1.4rem;
}

input::placeholder {
    font-size: 2.5rem;
    font-family: 'Lobster', cursive;
}

::placeholder {
  font-size: 1.5rem;
  padding-left: 0.5rem;
}

button {
  background-color: hsl(277, 47%, 67%);
  padding: 0.8rem 2rem;
  font-size: 1.3rem;
  border: none;
  border-radius: 0.8rem;
  display: inline-block;
	transition-duration: .3s;
	transition-property: transform;
  cursor: pointer;
}

button:hover {
  transform: translateY(-5px);
}

.btn-padding {
  padding: 2rem;
}


 @media (max-width: 850px) {
  .create_div {
  width: 95%;
  height: 95%;
}
input {
  width: 80vw; 
}

textarea {
  width: 65vw; 
}
 }
</style>