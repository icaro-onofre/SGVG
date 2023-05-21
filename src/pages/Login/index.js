import signIn from 'services/funcionario';
import { useNavigate } from 'react-router-dom';

import React, { useState } from 'react';

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
          <div class="relative mb-3" data-te-input-wrapper-init>
            <input
              type="text"
              class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="Usuário"
              placeholder="Usuário"
            />
            <label
              for="Usuário"
              class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
            >
              <i class="ri-user-line"></i>Usuário
            </label>
          </div>
          <div class="relative mb-3" data-te-input-wrapper-init>
            <input
              type="password"
              class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="Senha"
              placeholder="Senha"
            />
            <label
              for="Senha"
              class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
            >
              <i class="ri-lock-fill"></i> Senha
            </label>
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

            <button
              class="border border-jade bg-jade text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-dark_green focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Cadastrar
            </button>
          </div>
          {/*botão de login*/}
          {/*link para cadastro não definido ainda*/}
        </form>
      </main>
    </div>
  );
}
