import { atom } from 'jotai'; 

// Estado do modal do modal do menu colapsável da home.
export const colapsed = atom(false);

// Id da vaga selecionada
export const vagaId = atom('');
// Estado da vaga selecionada
export const vagaSelectedStatus = atom('');
// Estado do modal do modal de vaga na home
export const colapsedVaga = atom(false);
// Estado do modal do modal de vaga Alterar
export const colapsedVagaAlterar = atom(false);
// Estado do modal do modal de vaga Adicionar
export const colapsedVagaAdicionar = atom(false);
// Dados filtrados da vaga
export const vagaDataFiltered = atom([]);
// Vagas retornadas
export const vagaData = atom([]);

export const vagaIdHome = atom('');


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
// Estado do modal do modal de funcionario alterar
export const colapsedFuncionarioAlterar = atom(false);
// Estado do modal do modal de funcionario adicionar
export const colapsedFuncionarioAdicionar = atom(false);
// Lista de funcionarios retornados do banco de dados
export const funcionario = atom([]);
//Dados filtrados do funcionario
export const funcionarioDataFiltered = atom([]);

// Id do cliente selecionado na tabela
export const clienteId = atom('');
// Estado do modal do modal de cliente alterar
export const colapsedClienteAlterar = atom(false);
// Estado do modal do modal de cliente adicionar
export const colapsedClienteAdicionar = atom(false);
// Lista de clientes retornados do banco de dados
export const cliente = atom([]);
//Dados filtrados do cliente
export const clienteDataFiltered = atom([]);

// Id do ocupacao selecionado na tabela
export const ocupacaoId = atom('');
// Estado do modal do modal de ocupacao alterar
export const colapsedOcupacaoAlterar = atom(false);
// Estado do modal do modal de ocupacao adicionar
export const colapsedOcupacaoAdicionar = atom(false);
// Lista de ocupacaos retornados do banco de dados
export const ocupacao = atom([]);
//Dados filtrados do ocupacao
export const ocupacaoDataFiltered = atom([]);
