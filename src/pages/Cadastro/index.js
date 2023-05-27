import React, { useState } from 'react';
import Input from 'components/Input';

// console.log(Funcionario.find({}))

export default function Cadastro() {
  return (
    <div>
      {' '}
      <main class="mx-auto flex min-h-screen w-full items-center justify-center bg-white text-green-900">
        {/*fundo branco e cor do texto verde escuro*/}
        <section class="flex w-[30rem] flex-col space-y-10">
          {' '}
          {/*seção de cadastro*/}
          <img class="mx-auto h-40 w-auto" src="logo.jpg" /> {/*logo do aplicativo escrito cadastro e alinhado*/}
          {/*caixa de texto, / mais efeito mudando de cor quando clicar no campo*/}
          <div class="flex justify-between gap-3">
            <span class="w-1/2">
              {/*caixa de texto, / mais efeito mudando de cor quando clicar no campo*/}
              <div className="relative">
                <input
                  id="name"
                  type="text"
                  class="ri-user-line"
                  className="'ri-user-line' block w-full rounded-xl px-9 py-4 leading-none font-body text-sm bg-jade/[.15] focus:bg-white text-black/[.6]focus:text-black  focus:ring-solid focus:ring-4 focus:ring-jade ring-inset ease-in duration-100 focus:outline-none"
                  onChange={Input.onChange}
                  placeholder="Nome Completo"
                />
              </div>{' '}
            </span>
            <span class="w-2/2">
              <div className="relative">
                <input
                  id="user"
                  type="user"
                  class="ri-user-line"
                  className="'ri-user-line' block w-full rounded-xl px-9 py-4 leading-none font-body text-sm bg-jade/[.15] focus:bg-white text-black/[.6]focus:text-black  focus:ring-solid focus:ring-4 focus:ring-jade ring-inset ease-in duration-100 focus:outline-none"
                  onChange={Input.onChange}
                  placeholder="Nome de Usuário"
                />
              </div>
            </span>
          </div>
          <div class="flex justify-between gap-3">
            {/*caixa de texto, / mais efeito mudando de cor quando clicar no campo*/}
            <span class="w-1/2">
              <input
                id="cpf"
                type="text"
                required="required"
                name="cpf"
                pattern="[0-9]+$"
                placeholder="CPF:___.___.___-__"
                autocomplete="cpf"
                class="block w-full p-3 mt-2 text-gray-700 appearance-none focus:shadow-inner  focus:outline-none block w-full rounded-xl px-9 py-4 leading-none font-body text-sm bg-jade/[.15] focus:bg-white text-black/[.6]focus:text-black  focus:ring-solid focus:ring-4 focus:ring-jade ring-inset ease-in duration-100 focus:outline-none"
                onChange={Input.onChange}
              />
            </span>
            <span class="w-2/2">
              <div className="relative">
                <input
                  id="password"
                  type="password"
                  class="block w-full p-3 mt-2 text-gray-700 appearance-none focus:shadow-inner  focus:outline-none block w-full rounded-xl px-9 py-4 leading-none font-body text-sm bg-jade/[.15] focus:bg-white text-black/[.6]focus:text-black  focus:ring-solid focus:ring-4 focus:ring-jade ring-inset ease-in duration-100 focus:outline-none"
                  onChange={Input.onChange}
                  placeholder="Senha"
                />
              </div>
            </span>
          </div>
          <div class="flex justify-between gap-3">
            {/*caixa de texto, / mais efeito mudando de cor quando clicar no campo*/}
            <span class="w-1/2">
              <input
                id="email"
                type="email"
                required="required"
                name="email"
                placeholder="E-mail@companhia.com"
                autocomplete="email"
                class="block w-full p-3 mt-2 text-gray-700 appearance-none focus:shadow-inner  focus:outline-none block w-full rounded-xl px-9 py-4 leading-none font-body text-sm bg-jade/[.15] focus:bg-white text-black/[.6]focus:text-black  focus:ring-solid focus:ring-4 focus:ring-jade ring-inset ease-in duration-100 focus:outline-none"
                onChange={Input.onChange}
              />
            </span>
            <span class="w-2/2">
              <div className="relative">
                <input
                  id="password"
                  type="password"
                  class="block w-full p-3 mt-2 text-gray-700 appearance-none focus:shadow-inner  focus:outline-none block w-full rounded-xl px-9 py-4 leading-none font-body text-sm bg-jade/[.15] focus:bg-white text-black/[.6]focus:text-black  focus:ring-solid focus:ring-4 focus:ring-jade ring-inset ease-in duration-100 focus:outline-none"
                  onChange={Input.onChange}
                  placeholder="Confirme sua Senha"
                />
              </div>
            </span>
          </div>
          <div class="flex justify-between gap-3">
            <span class="w-1/2">
              {/*caixa de texto, / mais efeito mudando de cor quando clicar no campo*/}
              <div className="relative">
                <input
                  id="phone"
                  type="phone"
                  class="block w-full p-3 mt-2 text-gray-700 appearance-none focus:shadow-inner  focus:outline-none block w-full rounded-xl px-9 py-4 leading-none font-body text-sm bg-jade/[.15] focus:bg-white text-black/[.6]focus:text-black  focus:ring-solid focus:ring-4 focus:ring-jade ring-inset ease-in duration-100 focus:outline-none"
                  onChange={Input.onChange}
                  placeholder="Telefone: ( )_____-____"
                />
              </div>{' '}
            </span>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <a
              href="http://localhost:3000/Login"
              class=" bg-jade py-2 font-bold duration-300 hover:bg-dark_green text-white text-center"
              type="submit"
            >
              <i class="ri-arrow-left-line"></i>VOLTAR
            </a>
            <a
              href="#"
              class=" bg-jade py-2 font-bold duration-300 hover:bg-dark_green text-white text-center"
              type="submit"
            >
              <i class="ri-user-add-line"></i> CADASTRAR
            </a>
          </div>
          <br></br>
        </section>
      </main>
    </div>
  );
}
