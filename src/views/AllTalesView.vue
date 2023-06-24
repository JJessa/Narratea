<template>

<NavBar />
    <h1>Relatos</h1>
   
    
      <div v-for="relato in relatos" :key="relato.id">

        <!-- {{ console.log('Relato:', relato) }} -->

        <h2>Titulo{{ relato.titulo }}</h2>
        <p>Relato{{ relato.relato }}</p>
        
        <button @click="editPost(relato.id)">Editar</button>
        <button @click="deletePost(relato.id)">Eliminar</button>
   
  </div>
<Footer />

</template>

<script setup>
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'
import axios from 'axios'
import {ref, onMounted} from 'vue'

let relatos = ref("")

onMounted(() =>{
  getAllPosts()
})


async function getAllPosts(){
  const url = 'http://127.0.0.1:5000/api/relatos';

  try {
    let response = await axios.get(url)
    relatos.value = await response.data.relatos
  }catch(error){
    console.log(error)
  }
}

async function deletePost(id) {
  console.log('ID:', id);
  try {
    await axios.delete(`http://localhost:5000/api/relatos/${id}`)
    location.reload()
  } catch (error) {
    console.log(error)
  }
}

</script>