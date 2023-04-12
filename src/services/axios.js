import axios from 'axios';

const baseURL = process.env.BACKEND_URL;

let headers = {};

try {
  let tokenParsed = JSON.parse(localStorage.getItem('token'));

  if (localStorage.token) {
    headers.Authorization = `Bearer ${tokenParsed.data}`;
  }
} catch (error) {
  console.log(error);
}

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3001/',
  headers,
});

export default axiosInstance;
