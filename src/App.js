import { React, useState } from 'react';
import Routes from './routes';
import { atom } from 'jotai';
const colapsed = atom(false);

function App() {
  return <Routes />;
}

export default App;
