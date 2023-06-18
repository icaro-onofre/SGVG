import signIn from 'services/funcionario';
import Input from 'components/Input';
import React, { useState } from 'react';
import { useAtom } from 'jotai';
import { email, name, root } from 'store.js';

export default function Login() {
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');

  const [userEmail, setUserEmail] = useAtom(email);
  const [userName, setUserName] = useAtom(name);
  const [userRoot, setUserRoot] = useAtom(root);

  function handleSetNome(e) {
    e.preventDefault();
    setNome(e.target.value);
  }

  function handleSetSenha(e) {
    e.preventDefault();
    setSenha(e.target.value);
  }

  function setToken() {
    let token = localStorage.getItem('token');
    let decodedToken = JSON.parse(window.atob(token.split('.')[1]));

    setUserEmail(decodedToken.email);
    setUserName(decodedToken.nome);
    setUserRoot(decodedToken.root);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await signIn(nome, senha).then(setToken());
      window.location.pathname = '/';
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      {' '}
      <main className="mx-auto flex min-h-screen w-full items-center justify-center dark:bg-dark_black text-jade dark:text-dark_jade">
        {/*fundo branco e cor do texto verde escuro*/}
        <form onSubmit={handleSubmit} className="flex w-[30rem] flex-col space-y-10">
          {' '}
          {/*seção de login*/}
          <img className="mx-auto w-60" src="Logo.png" alt="Logo" /> {/*logo do aplicativo escrito login e alinhado*/}
          <div className="relative">
            <Input icon="user-line" type="text" placeholder="Usuário" onChange={handleSetNome} />
          </div>
          <div className="relative mb-3" data-te-input-wrapper-init>
            <Input icon="lock-line" type="password" placeholder="Senha" password onChange={handleSetSenha} />
          </div>
          <button
            className="transform rounded bg-jade dark:bg-dark_jade py-2 font-bold duration-75 hover:brightness-125 text-white text-center"
            type="submit"
          >
            <i className="ri-login-box-line"></i> Entrar
          </button>
          <div className="w-full text-center mx-auto">
            <a
              href="/recuperacao"
              className="transform text-center font-semibold text-gray-500 duration-75 hover:brightness-125"
            >
              ESQUECEU A SENHA?
            </a>

            <a href="/cadastro">
              {' '}
              <button className="bg-jade dark:bg-dark_jade text-white rounded-md px-4 py-2 m-2 transition ease select-none duration-75 hover:brightness-125 focus:outline-none focus:shadow-outline">
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
