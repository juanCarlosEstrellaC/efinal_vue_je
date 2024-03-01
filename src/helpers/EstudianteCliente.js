import axios from "axios";

const listaEstu = async () => {
    return axios.get('http://localhost:8088/API/v1.0/Matricula/estudiantes').then(r => r.data)
}

export const ingresarestudianteFachada = async () => {
    return await listaEstu();
}