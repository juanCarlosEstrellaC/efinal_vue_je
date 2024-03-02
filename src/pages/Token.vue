<template>
  <h1>Token</h1>
  <div class="container">
    <label for="">Semilla</label>
    <input type="text" v-model="semilla" />
    <label for="">Tiempo</label>
    <input type="text" v-model="tiempo" />
    <label for="">Token</label>
    <input type="text" v-model="Token" />
    <button @click="generarTk">Generar</button>
  </div>
</template>

<script>
import { tokenFachada } from "../helpers/clienteToken";

export default {
  data() {
    return {
      semilla: null,
      tiempo: null,
      token: null,
    };
  },
  methods: {
    async generarTk() {
      const u = {
        nombre: "Edison",
        password : "1234",
        semilla : this.semilla,
        tiempo: this.tiempo
      };
      this.token =  await tokenFachada(u);
    },
  },
};
</script>

<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: fit-content;
  margin: 0 auto;
  background-color: aquamarine;
  border: solid 1px black;
}
</style>