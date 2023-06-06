<template>
<nav>
  <ul>
    <div class="left_menu">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">Sobre Nosotros</router-link></li>
    </div>
    <div class="login_register">
      <li><a href="contacto.html">Register</a></li> 
      <span>|</span>
      <li><a href="login.html">Login</a></li>
    </div>
  </ul>
</nav>


</template>

<script setup>

</script>


<style scoped>


ul{	
	margin-top: 2.5rem;
  list-style-type: none;
  display: flex;
  justify-content: space-between;
}

.left_menu {
  display: flex;
  justify-content: start;
  
} 

li {
  margin: 0 0.625rem;
  
}

a {
  text-decoration: none; 
  color: inherit;
} 

.login_register {
  display: flex;
  justify-content: end;
  
} 

</style>