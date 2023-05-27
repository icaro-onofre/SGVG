import React, { useState } from 'react';
import Input from 'components/Input';

// console.log(Funcionario.find({}))

export default function Recuperacao() {
  return (
    <main class="mx-auto flex min-h-screen w-full items-center justify-center bg-white text-green-900">
      <body class="antialiased bg-slate-200">
        <div class="max-w-lg mx-auto my-10  p-8 rounded-xl ">
          <img class="mx-auto h-40 w-auto" src="logo.jpg" />
          <h1 class="text-4xl font-medium text-center text-jade">Recuperação de Senha</h1>
          <br></br>
          <p class="text-slate-500 text-center">
            Digite seu e-mail para recuperar sua senha. Será enviado um link para redefini-la
          </p>

          <form action="" class="my-10">
            <div class="flex flex-col space-y-5">
              <span class="w-100">
                <Input
                  id="email"
                  type="email"
                  required="required"
                  name="email"
                  placeholder="Digite Seu E-mail"
                  autocomplete="email"
                  class="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                  onChange={Input.onChange}
                />
              </span>
            </div>
            <br></br>
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
                <i class="ri-mail-send-line"></i> ENVIAR E-MAIL
              </a>
            </div>
          </form>
        </div>
      </body>
    </main>
  );
}
