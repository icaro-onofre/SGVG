import React, { Component } from 'react';
import Icon from 'components/Atoms/Icon';
import { useAtom } from 'jotai';
import { colapsed } from 'store.js'; 

export default function Header(props) {

const [fold, setFold] = useAtom(colapsed);
const handleSetFold = () => setFold(!fold)

    return (
      <header className="bg-black/[.04] px-4 py-2 flex justify-between z-50">
        <div className="left flex items-center content-center gap-2">
          <Icon icon="menu" onClick={handleSetFold}/>
          <h2 className="font-heading font-bold">SGVG</h2>
        </div>
        <div className="right flex items-center content-center gap-2">
          <Icon icon="add-circle" />
          <Icon icon="logout-box-r" line />
        </div>
      </header>
    );
}
