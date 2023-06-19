import React, { useEffect, useState } from 'react';
import Input from 'components/Input';
import Button from 'components/Button';
import { useAtom } from 'jotai';
import { darkModeAtom, configGlobal } from 'store';
import axiosInstance from 'services/axios';

function Config() {
  const [darkMode, setDarkMode] = useAtom(darkModeAtom);

  const [config, setConfig] = useAtom(configGlobal);
  const [primeiraHora, setPrimeiraHora] = useState(null);
  const [valorHora, setValorHora] = useState(null);
  const [diaria, setDiaria] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosInstance
      .get('/config')
      .then((res) => {
        setConfig(res.data);
        console.log(res.status);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleDarkMode() {
    setDarkMode(!darkMode);
  }

  function handleSubmit() {
    axiosInstance
      .post('/config/update', {
        primeiraHora: primeiraHora,
        valorHora: valorHora,
        diaria: diaria,
      })
      .then((res) => setConfig(res.data))
      .catch((err) => console.log(err));
  }

  return (
    <div className="overflow-hidden h-screen  grid grid-cols-12 pt-20 dark:bg-dark_black">
      <div className="col-start-2 col-end-12">
        <h1 className="text-2xl text-black dark:text-dark_white font-bold mb-8">Configurações do Sistema</h1>

        <label class="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" value="dark-mode" class="sr-only peer" onChange={handleDarkMode} checked={darkMode} />
          <div class="w-11 h-6 bg-grey peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-grey peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-grey peer-checked:bg-jade"></div>
          <span class="ml-3 text-sm font-medium text-black dark:text-dark_white">
            {darkMode ? 'Desativar' : 'Ativar'} o Modo Escuro
          </span>
        </label>

        <h2 className="mt-10 text-black dark:text-dark_white">Valores do Estacionamento</h2>

        <form action="/" method="POST" className="flex flex-col gap-8">
	  {!loading && <div className="mt-4 gap-8 columns-3">
		  <Input
		  type="text"
      placeholder="1ª hora"
		  value={ `R$${config[0].primeiraHora}`}
		  icon="money-dollar-box-line"
		  onChange={(e) => {
			  setPrimeiraHora(e);
		  }}
		  />
		  <Input
		  type="text"
      placeholder="Por hora"
		  value={ `R$${config[0].valorHora}`}
		  icon="money-dollar-box-line"
		  onChange={(e) => {
			  setValorHora(e);
		  }}
		  />
		  <Input
		  type="text"
      placeholder="Diária"
		  value={ `R$${config[0].diaria} `}
		  icon="money-dollar-box-line"
		  onChange={(e) => {
			  setDiaria(e);
		  }}
		  />
		  </div> }
          <div className="self-end">
            <Button
              value="Atualizar valores"
              onClick={() => {
                handleSubmit();
              }}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Config;
