import axios from 'axios';

const baseURL = process.env.BACKEND_URL;

let headers = {};

if (localStorage.token) {
	headers.Authorization = `Bearer   ${localStorage.token}`;
}

const axiosInstance = axios.create({
	baseURL: "http://localhost:3001/",
	headers,
});

export default axiosInstance;
