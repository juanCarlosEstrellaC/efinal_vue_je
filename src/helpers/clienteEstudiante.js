import axios from "axios";

const token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJIb2xhIG11bmRvIiwiaWF0IjoxNzA5MzQyOTUzLCJleHAiOjE3MDkzNDMwNTN9.cy9VSQFS6V-yl5PY2O9odtjFLhAvjSqnW3lT-1MZ2Xca1nJK4d7Roj15g24HuSklExGiQfEyRJ1hl1Kgc9OHYA';

const consultar = async () => {
    const config = {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    };
    return axios.get('http://localhost:8089/API/v1.0/Inscripcion/estudiantes', config).then(r => r.data)
}

const insertar = async (body) => {
    const config = {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    };

    const data = axios.post(`http://localhost:8089/API/v1.0/Inscripcion/estudiantes`, body, config).then(r => r.data)
    console.log(data);
}


// METODOS FACHADA
export const consultarFachada = async () => {
    return await consultar();
}
export const guardarFachada = async (body) => {
    return await insertar(body);
}