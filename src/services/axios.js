import axios from 'axios';

const baseURL = process.env.BACKEND_URL;

let header = {};

if (localStorage.token) {
	headers.Authorization = `Bearer   ${localStorage.token}`;
}

const axiosInstance = axios.create({
	baseURL: baseURL,
	headers,
});

export default axiosInstance;
