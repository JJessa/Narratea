<template>
<nav>
  <input type="checkbox" id="check">
  <label for="check" class="checkbtn">
    <img src="../assets/images/responsive-menu.png" alt="menu hambuerguesa movil">

  </label>
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
  height: 4rem;
  margin-left: 1rem;
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
  font-size: 1.3rem;
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

.checkbtn {
  display: none;
  padding: 2rem;
  cursor: pointer;
}

.checkbtn img {
  width: 3rem;
  height: 2.5rem;
}

#check {
  display: none;
}

@media (max-width: 850px) {

.img_logo {
  display: none;
}  
.checkbtn {
  display: block;
  position: relative;
  z-index: 2;
}

ul {
  position: fixed;
  width: 60%;
  height: 100vh;
  background: #ffffff;
  top: 0;
  left: -100%;
  transition: all .5s;
  z-index: 1;
  display: block;
}

.left_menu {

  display: block;
  margin: 3.125rem 0;
  line-height: 2.875rem;
}


#check:checked ~ ul {
  left: 0;
}
}

</style>