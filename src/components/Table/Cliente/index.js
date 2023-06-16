import React, { useEffect } from 'react';
import { useAtom, atom } from 'jotai';
import { colapsedClienteAlterar, clienteId, cliente } from 'store.js';
import axiosInstance from 'services/axios.js';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function TableCliente(props) {
  const getFuncionario = () => {
    axiosInstance
      .get('/cliente')
      .then((res) => setClientes(res.data))
      .catch((err) => console.log(err));
  };
  const [clientes, setClientes] = useAtom(cliente);
  const [selectedClienteId, setSelectedClienteId] = useAtom(clienteId);
  const [foldClienteAlterar, setFoldClienteAlterar] = useAtom(colapsedClienteAlterar);

  useEffect(() => {
    getFuncionario();
  }, []);

  return (
    <>
      <TableContainer component={Paper} className="bg-white dark:bg-dark_grey" style={{ maxHeight: 430 }}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow className="cursor-default">
              <TableCell align="left" className="bg-white dark:bg-dark_grey text-black dark:text-dark_white">
                Nome
              </TableCell>
              <TableCell align="left" className="bg-white dark:bg-dark_grey text-black dark:text-dark_white">
                CPF
              </TableCell>
              <TableCell align="left" className="bg-white dark:bg-dark_grey text-black dark:text-dark_white">
                E-mail
              </TableCell>
              <TableCell align="left" className="bg-white dark:bg-dark_grey text-black dark:text-dark_white">
                Telefone
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {clientes.map((dados) => (
              <TableRow
                className="dark:hover:bg-dark_blue duration-75 opacity-70 hover:opacity-100 cursor-default"
                key={dados.name}
                onClick={() => {
                  setFoldClienteAlterar(!foldClienteAlterar);
                  setSelectedClienteId(dados.id);
                }}
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
                  {dados.telefone}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
