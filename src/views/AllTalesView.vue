<template>
  <NavBar />
  
    
      <div class="cards" v-for="relato in relatos" :key="relato.id">
        <h2>
          <span v-if="!relato.editando">{{ relato.titulo }}</span>
          <input v-else type="text" v-model="relato.titulo" @keydown.enter="guardarEdicion(relato)">
        </h2>
        <p class="short-text">
          <span v-if="!relato.editando">{{ relato.relato }}</span>
          <textarea v-else v-model="relato.relato" @keydown.enter="guardarEdicion(relato)"></textarea>
        </p>
        <input class="read_more_button" type="checkbox">
        <button @click="editarRelato(relato)">{{ relato.editando ? 'Guardar' : 'Editar' }}</button>
        <button @click="deletePost(relato.id)">Eliminar</button>
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
<style scoped>
.cards {
  background-color: #f5f5f5;
  text-align: center;
  width: 50vw;
  margin: 0 auto;
  font-size: 1.2rem;
  padding-left: 2rem;
  padding-right: 2rem;

}

.short-text {
  --max-lines: 5;
  --line-height: 1.4;
  max-height: calc(var(--max-lines) * 1em * var(--line-height));
  line-height: var(--line-height);
  overflow: hidden;
  position: relative;
}

.short-text:has(+ .read_more_button:not(:checked))::before {
  content: "";
  position: absolute;
  height:  calc(1em * var(--line-height));
  width: 100%;
  bottom: 0;
  pointer-events: none;
  background: linear-gradient(to bottom, transparent, #f5f5f5);
}

.read_more_button {
  appearance: none;
  border: 1px solid black;
  padding: .5em;
  border-radius: .25em;
  cursor: pointer;
  margin-top: 1rem;
}

.read_more_button:hover {
  background-color: #CCC;
}

.read_more_button::before {
  content: "Leer más";
}

.read_more_button:checked::before {
  content:"Leer menos";
}

.short-text:has(+ .read_more_button:checked) {
  max-height: none;
}
</style>