import React, { Component } from 'react';
import Icon from 'components/Atoms/Icon';
import { useAtom } from 'jotai';
import { colapsed } from 'store.js';

export default function Header(props) {
  const [fold, setFold] = useAtom(colapsed);
  const handleSetFold = () => setFold(!fold);

  return (
    <header className="bg-black/[.04] px-4 py-2 flex justify-between absolute w-full">
      <div className="left flex items-center content-center gap-3">
        <Icon icon="menu" onClick={handleSetFold} />
        <a href="/">
          <img src="SGVG.svg" className="h-6" alt="Logo" />
        </a>
      </div>
      <div className="right flex items-center content-center gap-3">
        <Icon icon="logout-box-r" line />
        <Icon icon="settings-2" line />
      </div>
    </header>
  );
}
