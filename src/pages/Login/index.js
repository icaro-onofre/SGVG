import signIn from 'services/funcionario';
import Input from 'components/Input';
import React, { useState } from 'react';

export default function Login() {
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');

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
      await signIn(nome, senha);
      window.location.pathname = "/"
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
          <img className="mx-auto h-40 w-auto" src="logo.jpg" alt="Logo" />{' '}
          {/*logo do aplicativo escrito login e alinhado*/}
          <div className="relative">
            <Input icon="user-line" type="text" placeholder="Usuário" onChange={handleSetNome} />
          </div>
          <div className="relative mb-3" data-te-input-wrapper-init>
            <Input icon="lock-line" type="password" placeholder="Senha" password onChange={handleSetSenha} />
          </div>
          <button
            className="transform rounded bg-jade py-2 font-bold duration-300 hover:bg-dark_green text-white text-center"
            type="submit"
          >
            <i className="ri-login-box-line"></i> Entrar
          </button>
          <div className="w-full text-center mx-auto">
            <a
              href="/recuperacao"
              className="transform text-center font-semibold text-gray-500 duration-300 hover:text-dark_green"
            >
              ESQUECEU A SENHA?
            </a>

            <a href="/cadastro">
              {' '}
              <button className="border border-jade bg-jade text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-dark_green focus:outline-none focus:shadow-outline">
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
