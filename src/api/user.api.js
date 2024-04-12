import axios from "axios";

const url = process.env.REACT_APP_URL

export async function registerUser(data) {

    const response = await axios.post(`${url}/user/register`, data);
    return response.data;

}
export async function loginUser(data) {

    const response = await axios.post(`${url}/user/login`, data);
    return response.data;

}