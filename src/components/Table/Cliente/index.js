import React, { useEffect } from 'react';
import { useAtom, atom } from 'jotai';
import axiosInstance from 'services/axios.js';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const cliente = atom([]);
export default function TableCliente(props) {
  const getFuncionario = () => {
    axiosInstance
      .get('/cliente')
      .then((res) => setFuncionario(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getFuncionario();
  }, []);

  const [clientes, setFuncionario] = useAtom(cliente);

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="right">ID</TableCell>
              <TableCell align="right">Nome</TableCell>
              <TableCell align="right">E-mail</TableCell>
              <TableCell align="right">Telefone</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {clientes.map((dados) => (
              <TableRow
                key={dados.name}
                sx={{
                  '&:last-child td, &:last-child th': { border: 0 },
                  '&:hover': {
                    color: 'gray',
                    backgroundColor: 'lightblue',
                  },
                }}
              >
                <TableCell align="right">{dados.id}</TableCell>
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
