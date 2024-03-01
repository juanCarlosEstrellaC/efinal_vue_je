<template>
  <div class="container">
    <label for="">Token</label>
    <input type="text" v-model="Token" />
    <label for="">Nombre</label>
    <input type="text" v-model="nombre" />
    <label for="">Apellido</label>
    <input type="text" v-model="apellido" />
    <label for="">Cedula</label>
    <input type="text" v-model="cedula" />
    <button>Guardar</button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 700px;
  margin: 0 auto;
  background-color: aquamarine;
  border: solid 1px black;
}
</style>