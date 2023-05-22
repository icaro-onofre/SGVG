import { atom } from 'jotai'; 

// Estado do modal do modal do menu colapsável da home.
export const colapsed = atom(false);

// Estado do modal do modal de vaga na home
export const colapsedVaga = atom(false);

// Estado do modal do modal de funcionario alterar
export const colapsedFuncionarioAlterar = atom(false);
// Estado do modal do modal de funcionario adicionar
export const colapsedFuncionarioAdicionar = atom(false);

// Id do funcionario selecionado na tabela
export const funcionarioId = atom('');

// Lista de funcionarios retornados do banco de dados
export const funcionario = atom([]);

export const funcionarioDataFiltered = atom([]);
