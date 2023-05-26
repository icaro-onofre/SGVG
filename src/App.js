import { React, useState } from 'react';
import Routes from './routes';
import { atom } from 'jotai';

import Header from 'components/Header';
import Navbar from 'components/Navbar';

const colapsed = atom(false);

function App() {
  return (
    <div>
      <Navbar name="Icaro Onofre" email="icarolindo@gmail.com" image="https://picsum.photos/id/155/64" />
      <Header />
      <Routes />
    </div>
  );
}

export default App;
