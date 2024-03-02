import axios from "axios";


const insertar = async (body) => {
    const token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJIb2xhIG11bmRvIiwiaWF0IjoxNzA5MzM4Nzk5LCJleHAiOjE3MDkzMzg4OTl9.ZabVoP1Gw7rp2wLjowhCwecP4MLLtNXykXUheTHbMkjfFKmj3hvxQR1gE_8HAlzb7aIrS8nF_zt86xpQcj-E0g';

    const config = {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    };

    const data = axios.post(`http://localhost:8089/API/v1.0/Inscripcion/estudiantes`, body).then(r => r.data)
    console.log(data);
}




const listaEstu = async () => {
    return axios.get('http://localhost:8089/API/v1.0/Inscripcion/estudiantes').then(r => r.data)
}

export const ingresarestudianteFachada = async () => {
    return await listaEstu();
}
export const guardarFachada = async (body) => {
    return await insertar(body);
}