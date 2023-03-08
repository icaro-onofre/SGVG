import Funcionario from '../../backend/models/funcionarioModel.js';
import React, { useState } from 'react';
import './style.css';

// console.log(Funcionario.find({}))

export default function Home() {
    return (
        <div> <main  class="mx-auto flex min-h-screen w-full items-center justify-center bg-gray-50 text-green-900">{/*fundo branco e cor do texto verde escuro*/}
  <section class="flex w-[30rem] flex-col space-y-10"> {/*seção de login*/}
  <img class="mx-auto h-40 w-auto" src="logo.png" /> {/*logo do aplicativo escrito login e alinhado*/}

     <div class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-green-900">{/*caixa de texto, campo de login/ mais efeito mudando de cor quando clicar no campo*/}
      <input type="text" placeholder="Nome de Usuário" class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"/>
    </div> 

    <div class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-green-900" >{/*caixa de texto, campo de senha/ mais efeito mudando de cor quando clica no campo*/}
      <input  type="password"  placeholder="Senha"  class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none" />
    </div>

    <button class="transform rounded-sm bg-green-900 py-2 font-bold duration-300 hover:bg-green-700 text-white">Conecte-se</button> {/*botão de login*/}

    <a   href="aa.com"   class="transform text-center font-semibold text-gray-500 duration-300 hover:text-green-900">ESQUECEU A SENHA?</a>{/*link para cadastro não definido ainda*/}

   
  </section>
</main>
        </div>
    )
}