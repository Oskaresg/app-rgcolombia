import axios from "axios";
const API_URL = 'https://api-colombia.com/api/v1'

//Get info Colombia
export const getColombiaInfo = async () => {
    const response = await axios.get(`${API_URL}/Country/Colombia`)
    return response.data
}

//Get info de Zonas de Colombia
export const getZonasColombia = async () => {
    const response = await axios.get(`${API_URL}/Zonas`);
    return response.data;
}

//Get info de Zonas de Colombia
export const getZonasColombia = async id => {
    const response = await axios.get(`${API_URL}/Zonas/${id}`);
    return response.data;
}