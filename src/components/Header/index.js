import React, { Component } from 'react';
import Icon from 'components/Atoms/Icon';
import { useAtom } from 'jotai';
import { colapsed } from 'store.js';

export default function Header(props) {
  const [fold, setFold] = useAtom(colapsed);
  const handleSetFold = () => setFold(!fold);

  function logout() {
    if (window.localStorage.getItem('token')) window.localStorage.removeItem('token');
    window.location.pathname = '/login';
  }

  return (
    <header className="bg-black/[.04] dark:bg-dark_white/[.04] px-4 py-2 flex justify-between absolute w-full">
      <div className="left flex items-center content-center gap-3">
        <Icon icon="menu" onClick={handleSetFold} />
        <a href="/">
          <img src="SGVG.svg" className="h-6" alt="Logo" />
        </a>
      </div>
      <div className="right flex items-center content-center gap-3">
        <Icon icon="logout-box-r" line onClick={logout} />
        <Icon icon="settings-2" line onClick={() => (window.location.pathname = '/config')} />
      </div>
    </header>
  );
}
