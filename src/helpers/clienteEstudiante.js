import axios from "axios"

const token = async (body) => {
    const data = axios.get(`http://localhost:8085/API/v1.0/seguridad/autorizaciones/jwt`, body).then(r => r.data)
    console.log(data);
    return data;
}

// METODOS FACHADAS
export const tokenFachada = async (body) => {
    return await token(body);
}


