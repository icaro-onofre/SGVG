import { React, useState } from 'react';
import Routes from './routes';
import { darkModeAtom } from 'store';
import { useAtom } from 'jotai';

function App() {
  const [darkMode] = useAtom(darkModeAtom);
  return (
    <div className={darkMode ? 'dark' : 'light'}>
      <Routes />
    </div>
  );
}

export default App;
