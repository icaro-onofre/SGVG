import signIn from '../../services/funcionario';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');

  function handleSetSenha(e) {
    e.preventDefault();
    setSenha(e.target.value);
  }

  function handleSetNome(e) {
    e.preventDefault();
    setNome(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
    signIn(nome,senha);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={darkMode ? 'dark' : 'light'}>
      <button
        className="text-3xl bg-card_red dark:bg-card_green"
        onClick={() => {
          setDarkMode(!darkMode);
        }}
      >
        Hello World
      </button>

      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" onChange={handleSetNome} />
        </label>
        <label>
          Senha:
          <input type="text" name="name" onChange={handleSetSenha} />
        </label>

        <input type="submit" value="Botão" className="h-12 w-12 bg-card_red" />
      </form>
	  <div className="text-3xl text-dark_red">
	  {console.log(localStorage.getItem('token'))}

	  </div>
    </div>
  );
}
