import Funcionario from '../../backend/models/funcionarioModel.js';
import React, { useState } from 'react';
import './style.css';

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
          <img class="mx-auto h-40 w-auto" src="cadastro.png" /> {/*logo do aplicativo escrito cadastro e alinhado*/}
          <div class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-green-900">
            {/*caixa de texto, / mais efeito mudando de cor quando clicar no campo*/}

            <div class="flex justify-between gap-3">
              <span class="w-1/2">
                <div class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-green-900">
                  {/*caixa de texto, / mais efeito mudando de cor quando clicar no campo*/}
                  <label for="firstname" class="block text-xs font-semibold text-gray-600 uppercase">
                    Primeiro Nome
                  </label>
                  <input
                    id="firstname"
                    type="text"
                    name="firstname"
                    placeholder=""
                    autocomplete="name"
                    class="block w-full p-3 mt-2 text-gray-700 appearance-none  focus:shadow-inner placeholder:italic focus:outline-none"
                    required
                  />
                </div>
              </span>
              <span class="w-1/2">
                <div class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-green-900">
                  {/*caixa de texto, / mais efeito mudando de cor quando clicar no campo*/}
                  <label for="lastname" class="block text-xs font-semibold text-gray-600 uppercase">
                    Sobrenome
                  </label>
                  <input
                    id="lastname"
                    type="text"
                    name="lastname"
                    placeholder=""
                    autocomplete="name"
                    class="block w-full p-3 mt-2 text-gray-700 appearance-none  focus:shadow-inner placeholder:italic focus:outline-none"
                    required
                  />
                </div>
              </span>
            </div>
            <div class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-green-900">
              {/*caixa de texto, / mais efeito mudando de cor quando clicar no campo*/}
              <label for="cpf" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">
                CPF
              </label>
              <input
                id="cpf"
                type="text"
                required="required"
                name="cpf"
                pattern="[0-9]+$"
                placeholder="___.___.___-__"
                autocomplete="cpf"
                class="block w-full p-3 mt-2 text-gray-700 appearance-none focus:shadow-inner placeholder:italic focus:outline-none"
                required
              />
            </div>

            <div class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-green-900">
              {/*caixa de texto, / mais efeito mudando de cor quando clicar no campo*/}
              <label for="datadenascimento" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">
                Data de Nascimento
              </label>
              <input
                id="dataN"
                type="date"
                name="dataN"
                placeholder="__/__/____"
                autocomplete="DataN"
                class="block w-full p-3 mt-2 text-gray-700 appearance-none  focus:shadow-inner placeholder:italic focus:outline-none"
                required
              />
            </div>

            <div class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-green-900">
              {/*caixa de texto, / mais efeito mudando de cor quando clicar no campo*/}
              <label for="cargo" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">
                Cargo
              </label>
              <input
                id="cargo"
                type="text"
                name="cargo"
                placeholder="ex.:gerente"
                autocomplete="cargo"
                class="block w-full p-3 mt-2 text-gray-700 appearance-none focus:shadow-inner placeholder:italic focus:outline-none"
                required
              />
            </div>

            <div class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-green-900">
              {/*caixa de texto, / mais efeito mudando de cor quando clicar no campo*/}
              <label for="phone" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">
                Telefone
              </label>
              <input
                id="phone"
                type="text"
                required="required"
                name="phone"
                pattern="[0-9]+$"
                placeholder="(__)_____-____"
                autocomplete="cargo"
                class="block w-full p-3 mt-2 text-gray-700 appearance-none  focus:shadow-inner placeholder:italic focus:outline-none"
                required
              />
            </div>

            <div class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-green-900">
              {/*caixa de texto, / mais efeito mudando de cor quando clicar no campo*/}
              <label for="Nome de usuário" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">
                Nome de usuário
              </label>
              <input
                id="user"
                type="user"
                name="user"
                placeholder="nome.sobrenome"
                autocomplete="user"
                class="block w-full p-3 mt-2 text-gray-700 appearance-none  focus:shadow-inner placeholder:italic focus:outline-none"
                required
              />
            </div>

            <div class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-green-900">
              {/*caixa de texto, / mais efeito mudando de cor quando clicar no campo*/}
              <label for="email" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">
                E-mail
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="@companhia.com"
                autocomplete="email"
                class="block w-full p-3 mt-2 text-gray-700 appearance-none  focus:shadow-inner placeholder:italic focus:outline-none"
                required
              />
            </div>

            <div class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-green-900">
              {/*caixa de texto, / mais efeito mudando de cor quando clicar no campo*/}
              <label for="password" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">
                Senha
              </label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="********"
                autocomplete="new-password"
                class="block w-full p-3 mt-2 text-gray-700 appearance-none  focus:shadow-inner placeholder:italic focus:outline-none"
                required
              />
            </div>

            <div class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-green-900">
              {/*caixa de texto, / mais efeito mudando de cor quando clicar no campo*/}
              <label for="passwordC" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">
                Confirme a Senha
              </label>
              <input
                id="passwordC"
                type="password"
                name="passwordC"
                placeholder="********"
                autocomplete="new-password"
                class="block w-full p-3 mt-2 text-gray-700 appearance-none  focus:shadow-inner placeholder:italic focus:outline-none"
                required
              />
            </div>

            <div class="relative mt-2 block text-xs font-semibold text-gray-600 uppercase">
              {' '}
              NÍVEL DE ACESSO{/*campo para selecionar o nivel de acesso pré definido */}
              <select
                class="block w-full p-3 mt-2 text-gray-700 appearance-none  focus:shadow-inner placeholder:italic focus:outline-none"
                id="nivelA"
                required
              >
                <option>Junior</option>
                <option>Senior</option>
                <option>Pleno</option>
              </select>
            </div>
          </div>
          <label class="relative mt-4 inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer" required></input>
            {/* Botão com cursor liga e desliga para validar se o cadastro está ativo */}
            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 "></div>
            <span class="ml-0 text-sm  text-gray-700 uppercase px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
              Funcionário Ativo
            </span>
          </label>
          <a
            href="http://localhost:3000/Cadastro"
            button
            class="transform rounded-sm bg-green-900 py-2 font-bold duration-300 hover:bg-green-700 text-white text-center "
          >
            {' '}
            Cadastrar{' '}
          </a>{' '}
          {/*botão de cadastrar*/}
          <br></br>
          <br>{/* quebra de linha para o botão ter fim */}</br>
        </section>
      </main>
    </div>
  );
}
