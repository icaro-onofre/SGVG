import { atom } from 'jotai'; 

// Estado do modal do modal do menu colapsável da home.
export const colapsed = atom(false);

// Id da vaga selecionada
export const vagaId = atom('');
// Estado do modal do modal de vaga na home
export const colapsedVaga = atom(false);
// Estado do modal do modal de vaga Alterar
export const colapsedVagaAlterar = atom(false);
// Estado do modal do modal de vaga Adicionar
export const colapsedVagaAdicionar = atom(false);
// Dados filtrados da vaga
export const vagaDataFiltered = atom([]);

// Estado do modal do modal de funcionario alterar
export const colapsedFuncionarioAlterar = atom(false);
// Estado do modal do modal de funcionario adicionar
export const colapsedFuncionarioAdicionar = atom(false);

// Lista de funcionarios retornados do banco de dados
export const veiculo = atom([]);
// Estado do modal do modal de veiculo alterar
export const colapsedVeiculoAlterar = atom(false);
// Estado do modal do modal de veiculo adicionar
export const colapsedVeiculoAdicionar = atom(false);
// Id do veiculo selecionado
export const veiculoId = atom(false);
// Veiculo data filtered
export const veiculoDataFiltered=atom([]);

// Id do funcionario selecionado na tabela
export const funcionarioId = atom('');

// Lista de funcionarios retornados do banco de dados
export const funcionario = atom([]);

export const funcionarioDataFiltered = atom([]);
