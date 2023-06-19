<template>

<NavBar />
<div>
    <h1>Relatos</h1>
    <ul>
      <li v-for="relato in relatos" :key="relato.titulo">
        <h2>{{ relato.titulo }}</h2>
        <p>{{ relato.relato }}</p>
      </li>
    </ul>
  </div>
<Footer />

</template>

<script setup>
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'
import axios from 'axios';




</script>