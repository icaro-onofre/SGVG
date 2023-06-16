import React, { useState } from 'react';
import Input from 'components/Input';
import Button from 'components/Button';

const handleSubmit = () => {
  //axiosInstance.post('/ocupacao/create', {}).catch((err) => console.log(err));
  console.log('On submit');
};

export default function Cadastro() {
  return (
    <div>
      {' '}
      <main class="mx-auto flex min-h-screen w-full items-center justify-center bg-white text-green-900">
        {/*fundo branco e cor do texto verde escuro*/}
        <form class="flex w-[30rem] flex-col space-y-10 " onSubmit={() => {handleSubmit()}}>
          {' '}
          {/*seção de cadastro*/}
          <img class="mx-auto h-40 w-auto" src="logo.jpg" /> {/*logo do aplicativo escrito cadastro e alinhado*/}
          {/*caixa de texto, / mais efeito mudando de cor quando clicar no campo*/}
          <div class="flex justify-between gap-3">
            <span class="w-1/2">
              {/*caixa de texto, / mais efeito mudando de cor quando clicar no campo*/}
              <div className="relative">
                <Input
                  id="name"
                  type="text"
                  className="'ri-user-line' block w-full rounded-xl px-9 py-4 leading-none font-body text-sm bg-jade/[.15] focus:bg-white text-black/[.6]focus:text-black  focus:ring-solid focus:ring-4 focus:ring-jade ring-inset ease-in duration-100 focus:outline-none"
                  onChange={Input.onChange}
                  placeholder="Nome Completo"
                />
              </div>{' '}
            </span>
            <span class="w-2/2">
              <div className="relative">
                <Input
                  id="user"
                  type="user"
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
              <Input
                id="cpf"
                type="text"
                required="required"
                name="cpf"
                pattern="[0-9]+$"
                placeholder="CPF"
                autocomplete="cpf"
                class="block w-full p-3 mt-2 text-gray-700 appearance-none focus:shadow-inner  focus:outline-none block w-full rounded-xl px-9 py-4 leading-none font-body text-sm bg-jade/[.15] focus:bg-white text-black/[.6]focus:text-black  focus:ring-solid focus:ring-4 focus:ring-jade ring-inset ease-in duration-100 focus:outline-none"
                onChange={Input.onChange}
              />
            </span>
            <span class="w-2/2">
              <div className="relative">
                <Input
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
              <Input
                id="email"
                type="email"
                required="required"
                name="email"
                placeholder="E-mail"
                autocomplete="email"
                class="block w-full p-3 mt-2 text-gray-700 appearance-none focus:shadow-inner  focus:outline-none block w-full rounded-xl px-9 py-4 leading-none font-body text-sm bg-jade/[.15] focus:bg-white text-black/[.6]focus:text-black  focus:ring-solid focus:ring-4 focus:ring-jade ring-inset ease-in duration-100 focus:outline-none"
                onChange={Input.onChange}
              />
            </span>
            <span class="w-2/2">
              <div className="relative">
                <Input
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
                <Input
                  id="phone"
                  type="phone"
                  class="block w-full p-3 mt-2 text-gray-700 appearance-none focus:shadow-inner  focus:outline-none block w-full rounded-xl px-9 py-4 leading-none font-body text-sm bg-jade/[.15] focus:bg-white text-black/[.6]focus:text-black  focus:ring-solid focus:ring-4 focus:ring-jade ring-inset ease-in duration-100 focus:outline-none"
                  onChange={Input.onChange}
                  placeholder="Telefone"
                />
              </div>{' '}
            </span>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <Button
              href="http://localhost:3000/Login"
              class=" bg-jade py-2 font-bold duration-300 hover:bg-dark_green text-white text-center"
              type="submit"
              value="VOLTAR"
            ></Button>
            <Button
              href="#"
              class=" bg-jade py-2 font-bold duration-300 hover:bg-dark_green text-white text-center"
              type="submit"
              value="CADASTRAR"
            ></Button>
          </div>
          <br></br>
        </form>
      </main>
    </div>
  );
}
