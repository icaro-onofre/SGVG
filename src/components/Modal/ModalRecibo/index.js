import React, { useState, Component, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import { moment } from 'moment';
import axiosInstance from 'services/axios';
import { useAtom } from 'jotai';
import { colapsedRecibo, configGlobal } from 'store.js';
import Button from 'components/Button';

export default function ModalRecibo(props) {
  const [foldRecibo, setFoldRecibo] = useAtom(colapsedRecibo);
  const [config, setConfig] = useAtom(configGlobal);
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

  let total = 20;

  return (
    <div className={' inset-0' + foldRecibo ? 'bg-opacity-40' : ''}>
      {!foldRecibo ? (
        <div></div>
      ) : (
        <div className=" absolute w-screen h-screen bg-black/[0.85] z-20 inset-0 flex items-center justify-center transition duration-100 ease-in">
          <button
            className="absolute w-screen h-screen z-0 bg-black/[0.85]"
            onClick={() => {
              setFoldRecibo(!foldRecibo);
            }}
          />
          <div className="flex flex-col items-center justify-center w-80 bg-white dark:bg-dark_grey rounded-xl z-20 pt-5 pb-5">
            <h1 className="text-2xl font-bold ml-5 mt-1 self-start text-black dark:text-dark_white">Valor total</h1>
            <div className="flex flex-col space-y-5 h-90 mt-8 ">
              <div className="flex flex-row">
                <p>Horas</p>
                <p className="font-bold ml-5">24 horas </p>
              </div>
              <div className="flex flex-row">
                <p className="font-bold">Total</p>
                <p className="font-bold ml-5">R$ 50,00 </p>
              </div>
              <div className="ml-44">
                <Button
                  value="Ok"
                  onClick={() => {
                    setFoldRecibo(!foldRecibo);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
