import axios from 'axios';

const BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/users`;

export const loginUser = async (username, password) => {
    const response = await axios.post(
        `${BASE_URL}/login`,
        {
            username,
            password
        }     
    )
    return response.data;
}

export const registerUser = async (username, email, password) => {
    const response = await axios.post(
        `${BASE_URL}`,
        {
            username,
            email,
            password
        }
    )
    return response.data;
}