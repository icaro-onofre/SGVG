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
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="right">CPF</TableCell>
              <TableCell align="right">Nome</TableCell>
              <TableCell align="right">E-mail</TableCell>
              <TableCell align="right">Telefone</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {clientes.map((dados) => (
              <TableRow
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
                <TableCell align="right">{dados.cpf}</TableCell>
                <TableCell align="right">{dados.nome}</TableCell>
                <TableCell align="right">{dados.email}</TableCell>
                <TableCell align="right">{dados.telefone}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
