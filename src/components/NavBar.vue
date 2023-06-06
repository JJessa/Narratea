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
background: #D7BCE8;
}

.login_register {
  display: flex;
  justify-content: end;
  margin-right: 2rem;
  
} 

</style>