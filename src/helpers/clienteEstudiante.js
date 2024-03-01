import axios from "axios"

const insertar = async (body) => {
    const data = axios.post(`http://localhost:8082/API/v1.0/Matricula/estudiantes`, body).then(r => r.data)
    console.log(data);
}

const consultarEstudiante = async (id) => {
    const data = axios.get(`http://localhost:8082/API/v1.0/Matricula/estudiantes/${id}`).then(r => r.data)
    console.log(data);
    return data;
}
const token = async (body) => {
    const data = axios.get(`http://localhost:8085/API/v1.0/seguridad/autorizaciones/jwt`, body).then(r => r.data)
    console.log(data);
    return data;
}



// METODOS FACHADAS: (siempre los debo exportar)
export const consultarEstudianteFachada = async (id) => {
    return await consultarEstudiante(id);
}
export const tokenFachada = async (body) => {
    return await token(body);
}

export const insertarFachada = async (body) => {
    await insertar(body);
}

