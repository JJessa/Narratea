<template>
  <NavBar />
  
  <!-- <div class="div_flex"> -->
    <!-- <div class="image">
      <img src="../assets/images/narratea_img.png" alt="Imagen" />
    </div> -->
    <div class="card_div">
      <div class="cards" v-for="relato in relatos" :key="relato.id">
        <h2>
          <span v-if="!relato.editando">{{ relato.titulo }}</span>
          <input class="input_title" v-else type="text" v-model="relato.titulo" @keydown.enter="guardarEdicion(relato)">
        </h2>
        <p class="short-text">
          <span v-if="!relato.editando">{{ relato.relato }}</span>
          <textarea v-else v-model="relato.relato" @keydown.enter="guardarEdicion(relato)"></textarea>
        </p>
        <input class="read_more_button" type="checkbox">
        <div class="buttons">
        <button class="edit_button" @click="editarRelato(relato)">{{ relato.editando ? 'Guardar' : 'Editar' }}</button>
        <button   class="delete_button" @click="deletePost(relato.id)">Eliminar</button>
        </div>
      </div>
    </div>
  <!-- </div> -->
  

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

/* .div_flex {
  display: flex;
  align-items: flex-start;
  margin-top: 2rem;

} */

/* .image {
  width: 8vw;
  height: 85vh; 
  display: flex;
  margin-left: 2rem;  
  position: fixed;
  top:10;
} */

/* .image img {
  width: 100%;
  height: auto;

} */

/* .card_div {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 auto;
} */
.cards {
  background-color: #f5f5f5ee;
  text-align: center;
  width: 35vw;
  margin-bottom: 3.5rem;
  font-size: 1.4rem;
  padding-left: 3.5rem;
  padding-right: 3.5rem;
  /* display: flex;
  flex-direction: column; */
  align-items: center;
  border-radius: 2rem;
  position: relative;
  margin: 8rem auto;
  }

.cards::before {
  content: "";
  position: absolute;
  top: -40px;
  left: -40px;
  right: -40px;
  bottom: -40px;
  background-image: url(../assets/images/cards-background.png);
  border-radius: 4rem;
  z-index: -1;
}


h2 {
  font-size: 2.2rem;
  padding: 2rem;
}
.short-text {
  --max-lines: 6;
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
  background: linear-gradient(to bottom, transparent, rgba(245, 245, 245, 0.719));
}

.read_more_button {
  appearance: none;
  background-color: hsl(277, 47%, 67%);
  padding: 0.8rem 1rem;
  font-size: 1.35rem;
  border: none;
  border-radius: 0.8rem;
  align-self: center;
  cursor: pointer;
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

.buttons {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  padding: 1.5rem;
}

.buttons button {
  margin: 0 0.5rem;
  padding: 0.8rem 2rem;
  font-size: 1.1rem;
  border: none;
  border-radius: 0.8rem;
  cursor: pointer;
  background-color: #91CAE2;

}

.buttons button:hover {
  background-color: #CCC;
}

.input_title {
  width: 33vw;
  border:none;
  font-size: 1.5rem;
  border-radius: .8rem;
  border: .05rem solid black;
}

textarea {
  width: 32vw;
  height: 50vh;
  border-radius: .8rem;
  border: .05rem solid black;
  resize: none;
  font-size: 1.4rem;
}
</style>