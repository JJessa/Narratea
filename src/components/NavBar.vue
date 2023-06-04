<template>
<nav>
  <ul>
    <li><router-link to="/">Home</router-link></li>
    <li><router-link to="/about">Sobre Nosotros</router-link></li>
    <!-- <li><a href="contacto.html">Contacto</a></li> -->
    <!-- <li class="right"><a href="login.html">Login</a></li> -->
  </ul>
</nav>


</template>

<script setup>

</script>


<style scoped>

nav {
  background-color: #333;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  margin-left: auto; /* Alinea el elemento a la derecha */
}

li {
  margin: 0 10px;
}

li.right {
  margin-left: auto; /* Alinea el elemento a la derecha */
}

a {
  color: #fff;
  text-decoration: none;
  font-size: 18px;
}

</style>