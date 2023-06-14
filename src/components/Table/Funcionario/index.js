import React, { useEffect } from 'react';
import axiosInstance from 'services/axios.js';
import { useAtom, atom } from 'jotai';
import { colapsedFuncionarioAlterar } from 'store.js';
import { funcionarioId, funcionario } from 'store.js';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function TableFuncionario(props) {
  const getFuncionario = () => {
    axiosInstance
      .get('/funcionario/')
      .then((res) => setFuncionarios(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getFuncionario();
  }, []);

  const [funcionarios, setFuncionarios] = useAtom(funcionario);
  const [selectedFuncionarioId, setSelectedFuncionarioId] = useAtom(funcionarioId);
  const [foldFuncioarioAlterar, setFoldFuncionarioAlterar] = useAtom(colapsedFuncionarioAlterar);

  // Handler para abrir o modal
  const handleSetFoldFuncioario = (_id) => {
    setFoldFuncionarioAlterar(!foldFuncioarioAlterar);
  };

  console.log(funcionarios);
  return (
    <>
      <TableContainer component={Paper} style={{ maxHeight: 500 }} className="bg-white dark:bg-dark_grey">
        <Table stickyHeader sx={{ minWidth: 750 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="right" className="bg-white dark:bg-dark_grey text-black dark:text-dark_white">
                ID
              </TableCell>
              <TableCell align="right" className="bg-white dark:bg-dark_grey text-black dark:text-dark_white">
                Nome
              </TableCell>
              <TableCell align="right" className="bg-white dark:bg-dark_grey text-black dark:text-dark_white">
                Telefone
              </TableCell>
              <TableCell align="right" className="bg-white dark:bg-dark_grey text-black dark:text-dark_white">
                Email
              </TableCell>
              <TableCell align="right" className="bg-white dark:bg-dark_grey text-black dark:text-dark_white">
                CPF
              </TableCell>
              <TableCell align="right" className="bg-white dark:bg-dark_grey text-black dark:text-dark_white">
                Senha
              </TableCell>
              <TableCell align="right" className="bg-white dark:bg-dark_grey text-black dark:text-dark_white">
                Data Nasc
              </TableCell>
              <TableCell align="right" className="bg-white dark:bg-dark_grey text-black dark:text-dark_white">
                Cargo
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {funcionarios.map((dados) => (
              <TableRow
                className="dark:hover:bg-dark_blue duration-75"
                onClick={() => {
                  handleSetFoldFuncioario(dados.id);
                  setSelectedFuncionarioId(dados.id);
                }}
                key={dados.id}
                sx={{
                  '&:last-child td, &:last-child th': { border: 0 },
                  '&:hover': {
                    color: 'gray',
                    backgroundColor: 'lightblue',
                  },
                }}
              >
                <TableCell align="right" className="text-black dark:text-dark_white">
                  {dados.id}
                </TableCell>
                <TableCell align="right" className="text-black dark:text-dark_white">
                  {dados.nome}
                </TableCell>
                <TableCell align="right" className="text-black dark:text-dark_white">
                  {dados.telefone}
                </TableCell>
                <TableCell align="right" className="text-black dark:text-dark_white">
                  {dados.email}
                </TableCell>
                <TableCell align="right" className="text-black dark:text-dark_white">
                  {dados.cpf}
                </TableCell>
                <TableCell
                  align="right"
                  className="text-black dark:text-dark_white"
                  sx={{ maxWidth: 50, overflow: 'hidden' }}
                >
                  {dados.senha}
                </TableCell>
                <TableCell align="right" className="text-black dark:text-dark_white">
                  {dados.data_nasc}
                </TableCell>
                <TableCell align="right" className="text-black dark:text-dark_white">
                  {dados.cargo}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
