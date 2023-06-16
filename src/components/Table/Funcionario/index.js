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
import calculateAge from 'utils/calculateAge';
import formatPhone from 'utils/formatPhone';

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
      <TableContainer component={Paper} style={{ maxHeight: 430 }} className="bg-white dark:bg-dark_grey">
        <Table stickyHeader sx={{ minWidth: 750 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow className="cursor-default">
              <TableCell align="left" className="bg-white dark:bg-dark_grey text-black dark:text-dark_white">
                Nome
              </TableCell>
              <TableCell align="left" className="bg-white dark:bg-dark_grey text-black dark:text-dark_white">
                CPF
              </TableCell>
              <TableCell align="left" className="bg-white dark:bg-dark_grey text-black dark:text-dark_white">
                Email
              </TableCell>
              <TableCell align="left" className="bg-white dark:bg-dark_grey text-black dark:text-dark_white">
                Telefone
              </TableCell>
              <TableCell align="center" className="bg-white dark:bg-dark_grey text-black dark:text-dark_white">
                Idade
              </TableCell>
              <TableCell align="center" className="bg-white dark:bg-dark_grey text-black dark:text-dark_white">
                Data Nasc
              </TableCell>
              <TableCell align="center" className="bg-white dark:bg-dark_grey text-black dark:text-dark_white">
                Cargo
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {funcionarios.map((dados) => (
              <TableRow
                className="dark:hover:bg-dark_blue duration-75 opacity-70 hover:opacity-100 cursor-default"
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
                <TableCell align="left" className="text-black dark:text-dark_white">
                  {dados.nome}
                </TableCell>
                <TableCell align="left" className="text-black dark:text-dark_white">
                  {dados.cpf}
                </TableCell>
                <TableCell align="left" className="text-black dark:text-dark_white">
                  {dados.email}
                </TableCell>
                <TableCell align="left" className="text-black dark:text-dark_white">
                  {formatPhone(dados.telefone)}
                </TableCell>
                <TableCell align="center" className="text-black dark:text-dark_white">
                  {calculateAge(new Date(dados.data_nasc))} anos
                </TableCell>
                <TableCell align="center" className="text-black dark:text-dark_white">
                  {new Date(dados.data_nasc).toLocaleDateString()}
                </TableCell>
                <TableCell align="center" className="text-black dark:text-dark_white">
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
