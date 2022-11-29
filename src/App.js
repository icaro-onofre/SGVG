import React from 'react';
import Routes from './routes';
import funcionarioSchema from './backend/models/funcionarioModel';
import * as mongoose from 'mongoose';

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/SGVG');
  const Funcionario = mongoose.model('Funcionario',funcionarioSchema);
  console.log(Funcionario.find({}))

}

function App() {
	return <Routes />
}

export default App;
