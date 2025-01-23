import axios from "axios";

const API_URL = 'https://dhanamfoundation.org';

export const register = async (formData)=>{
    return axios.post( `${API_URL}/register`, {formData})
}

export const login = async ( email, password) =>{
    return axios.post(`${API_URL}/login`, {email, password} )
}

export const refreshToken =  async (refresh)=>{
    return axios.post(`${API_URL}/token/refresh`, {refresh})
}