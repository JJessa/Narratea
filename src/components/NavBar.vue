<template>
<nav>
  <ul>
    <div class="left_menu">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">Sobre Nosotros</router-link></li>
    </div>
    <div class="login_register">
      <li><a href="contacto.html">Register | </a></li> 
      <li><a href="login.html">Login</a></li>
    </div>
  </ul>
</nav>


</template>

<script setup>

</script>


<style scoped>

/* nav {
  
  display: flex;
  justify-content: space-between;
}  */

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

/* ul {
 
  margin: 0;
  padding: 0;
  display: flex;
  margin-left: auto; 
} */

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