import signIn from 'services/funcionario';
import { useNavigate } from 'react-router-dom';
import Input from 'components/Input';
import React, { useState } from 'react';
import Icon from 'components/Atoms/Icon';

export default function Login() {
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');

  let navigate = useNavigate();

  function handleSetNome(e) {
    e.preventDefault();
    setNome(e.target.value);
  }

  function handleSetSenha(e) {
    e.preventDefault();
    setSenha(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      signIn(nome, senha);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      {' '}
      <main className="mx-auto flex min-h-screen w-full items-center justify-center bg-white text-jade">
        {/*fundo branco e cor do texto verde escuro*/}
        <form onSubmit={handleSubmit} className="flex w-[30rem] flex-col space-y-10">
          {' '}
          {/*seção de login*/}
          <img className="mx-auto h-40 w-auto" src="logo.jpg" /> {/*logo do aplicativo escrito login e alinhado*/}
          <div className="relative">
            <input
              id="user"
              type="user"
              class="ri-user-line"
              className="'ri-user-line' block w-full rounded-xl px-9 py-4 leading-none font-body text-sm bg-jade/[.15] focus:bg-white text-black/[.6]focus:text-black  focus:ring-solid focus:ring-4 focus:ring-jade ring-inset ease-in duration-100 focus:outline-none"
              onChange={Input.onChange}
              placeholder="Usuário"
            />
          </div>
          <div class="relative mb-3" data-te-input-wrapper-init>
            <input
              id="senha"
              type="password"
              className="block w-full rounded-xl px-9 py-4 leading-none font-body text-sm bg-jade/[.15] focus:bg-white text-black/[.6]focus:text-black  focus:ring-solid focus:ring-4 focus:ring-jade ring-inset ease-in duration-100 focus:outline-none"
              placeholder="Senha"
              onChange={Input.onChange}
            />
          </div>
          <button
            className="transform rounded-sm bg-jade py-2 font-bold duration-300 hover:bg-dark_green text-white text-center"
            type="submit"
          >
            <i class="ri-login-box-line"></i> Entrar
          </button>
          <div class="w-full text-center mx-auto">
            <a className="transform text-center font-semibold text-gray-500 duration-300 hover:text-dark_green">
              ESQUECEU A SENHA?
            </a>

            <a href="http://localhost:3000/Cadastro">
              {' '}
              <button
                class="border border-jade bg-jade text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-dark_green focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Cadastrar
              </button>
            </a>
          </div>
          {/*botão de login*/}
          {/*link para cadastro não definido ainda*/}
        </form>
      </main>
    </div>
  );
}
