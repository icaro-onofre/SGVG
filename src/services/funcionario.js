import axiosInstance from '../services/axios';

async function signIn(nome, senha) {
  try {
    const response = await axiosInstance.post('/signin', {
      nome: nome,
      senha: senha,
    });

    localStorage.setItem('token', JSON.stringify(response));
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

export default signIn;
