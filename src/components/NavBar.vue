<template>
<nav>
  <ul>
    <div class="left_menu">
      <router-link id="logo_hover" to="/"><img class="img_logo" src="../assets/images/Narratea-logo.png" alt="Narratea logo"></router-link>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">Sobre Nosotros</router-link></li>
      <li><router-link to="/write">Escribe tu relato</router-link></li>
      <li><router-link to="/Stories">Relatos</router-link></li>
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
.img_logo {
  height: 3.5rem;
  margin-left: 1.5rem;
}

#logo_hover:hover:after {
  background: #ffffff;
}

ul{	
	margin-top: 2.5rem;
  list-style-type: none;
  display: flex;
  justify-content: space-between;
}

.left_menu {
  display: flex;
  justify-content: start;
  align-items: center;
  
} 

li {
  margin: 0 0.625rem;
  font-size: 1.2rem;
}

a {
display: inline-block;
position: relative;
color: inherit;
text-decoration: none;
}
a:after {
content: "";
display: block;
margin: auto;
height: 0.125rem;
width: 0px;
transition: all .5s;
}

a:hover:after {
width: 100%;
background: #9171a5;
}

.login_register {
  display: flex;
  justify-content: end;
  margin-right: 4rem;
  margin-top: 1.5rem;
  
} 



</style>