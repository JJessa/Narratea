<template>
  <NavBar />
  <div class="div_total">
    <div class="div_questions">
      <div>
        <h2>¿Por qué Narratea?</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <div id="div_put_in_contact">
        <h2>Pónte encontacto con nosotros</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
      </div>
    </div>
    <div class="background_div">
      <h2>Contacto</h2>
      <div class="form_div">
        <form>
          
          <input type="text" id="titulo" placeholder="Nombre" required>
          <input type="text" id="titulo" placeholder="Email" required>
          <textarea id="contenido" placeholder="Escribe aquí tu mensaje" required></textarea>
          <button type="submit">Enviar</button>

        </form>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script setup>
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'
</script>

<style scoped>

.div_total {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10rem;
}

.div_questions {
  text-align: center;
  width: 35vw;
  line-height: 2rem;
 
}

#div_put_in_contact {
  margin-top: 5rem;
}
.div_questions h2 {
  font-size: 1.7rem;
}
.div_questions p {
  font-size: 1.3rem;
}
.background_div {
  width: 28vw;
  height: 75vh;
  background-image: url("../assets/images/narratea_fondo.png");
  background-size:cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
}

.background_div h2 {
  text-align: center;
  font-size: 2.5rem;
  margin: .5rem auto;
}
.form_div {
  width: 85%;
  height: 85%;
  background-color: #FFFFFF80;
  position: absolute;
  top: 52%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

form {
  position: absolute;
  top: 49%;
  left: 50%;
  transform: translate(-50%, -50%);
}

input {
  background-color: #F4F4F4;
  height: 5vh;
  width: 20vw; 
  margin-top: 2.5rem;
  border: none;
}

textarea {
  background-color: #F4F4F4;
  height: 25vh;
  width: 20vw; 
  margin-top: 3.5rem;
  border: none;
  resize: none;
}

::placeholder {
  font-size: 1.15rem;
  padding: 1rem;
}

button {
  background-color: hsl(277, 47%, 67%);
  padding: 0.8rem 2rem;
  font-size: 1.3rem;
  border: none;
  border-radius: 0.8rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  cursor: pointer;
  display: inline-block;
	transition-duration: .3s;
	transition-property: transform;
 }

 button:hover {
  transform: translateY(-5px);
}

 @media (max-width: 850px)  {
  .div_total {
  display: block;
}

.div_questions {
  width: 80vw;
  margin: 0 auto;
}
.background_div {
  width: 80vw;
  height: 80vh;
  margin: 4rem auto;
}
.background_div h2 {
  font-size: 2rem;
  padding: 1rem;
}
.form_div {
  width: 85%;
  height: 80%;
}
input {
  width: 60vw; 
  margin-top: 2rem;
  border: none;
}

textarea {
  width: 60vw; 
  margin-top: 3rem;
}

}
</style>