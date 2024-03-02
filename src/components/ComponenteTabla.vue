<template>
  <div class="container">
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>nombre</th>
          <th>apellido</th>
          <th>cedula</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="estudiante in listaEstudiantes" :key="estudiante.id">
          <td>{{ estudiante.id }}</td>
          <td>{{ estudiante.nombre }}</td>
          <td>{{ estudiante.apellido }}</td>
          <td>{{ estudiante.cedula }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { consultarFachada } from "../helpers/EstudianteCliente";

export default {
  data() {
    return {
      listaEstudiantes: [],
      estudiante: null,
    };
  },
  mounted() {
    this.obtenerListaEstudiantes();
  },
  methods: {
    async obtenerListaEstudiantes() {
      this.listaEstudiantes = await consultarFachada();
       
    }
  }
};
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
table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid black;
  padding: 8px;
  text-align: center;
}

th {
  background-color: #f2f2f2;
}
</style>