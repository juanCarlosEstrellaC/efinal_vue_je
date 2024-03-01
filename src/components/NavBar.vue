<template>
  <div>
    <router-link to="/generarToken">Token</router-link>
    <router-link to="/guardarEstudiante">Estudiante</router-link>
  </div>
</template>

<script>


export default {

}
</script>

<style>
div a {
    color: #2c3e50;
    margin: 0px 10px;
    font-weight: bold;
    border: solid;
    padding: 10px 10px;
    border-radius: 10px;
    background-color: aqua;
}
.router-link-exact-active{
    background-color: rgb(77, 141, 220);
}
</style>