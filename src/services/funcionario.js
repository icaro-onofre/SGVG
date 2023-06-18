import axiosInstance from '../services/axios';

async function signIn(nome, senha) {
  try {
    axiosInstance
      .post('/signin', {
        nome: nome,
        senha: senha,
      })
      .then((res) => {
        localStorage.setItem('token', JSON.stringify(res));
      });
  } catch (error) {
    console.log(error);
  }
}

export default signIn;
