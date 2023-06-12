import { React, useState } from 'react';
import Routes from './routes';
import { darkMode as dm } from 'store';
import { useAtom } from 'jotai';

function App() {
  const [darkMode] = useAtom(dm);
  return (
    <div className={darkMode ? 'dark' : 'light'}>
      <Routes />
    </div>
  );
}

export default App;
