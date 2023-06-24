<template>
  <NavBar />

  <div>
    <div v-for="relato in relatos" :key="relato.id">
      <h2>
        <span v-if="!relato.editando">{{ relato.titulo }}</span>
        <input v-else type="text" v-model="relato.titulo" @keydown.enter="guardarEdicion(relato)">
      </h2>
      <p>
        <span v-if="!relato.editando">{{ relato.relato }}</span>
        <textarea v-else v-model="relato.relato" @keydown.enter="guardarEdicion(relato)"></textarea>
      </p>

      <button @click="editarRelato(relato)">{{ relato.editando ? 'Guardar' : 'Editar' }}</button>
      <button @click="deletePost(relato.id)">Eliminar</button>
    </div>
  </div>

  <Footer />
</template>

<script setup>
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'
import axios from 'axios'
import { ref, onMounted } from 'vue'

let relatos = ref("")

onMounted(() => {
  getAllPosts()
})

async function getAllPosts() {
  const url = 'http://127.0.0.1:5000/api/relatos';

  try {
    let response = await axios.get(url)
    relatos.value = await response.data.relatos.map(relato => ({
      ...relato,
      editando: false
    }))
  } catch (error) {
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

function editarRelato(relato) {
  relato.editando = !relato.editando

  if (!relato.editando) {
    guardarEdicion(relato)
  }
}

async function guardarEdicion(relato) {
  try {
    await axios.put(`http://localhost:5000/api/relatos/${relato.id}`, {
      titulo: relato.titulo,
      relato: relato.relato
    })
  } catch (error) {
    console.log(error)
  }
}
</script>
