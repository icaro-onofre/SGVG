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

const vaga = atom([]);
export default function TableVaga(props) {
  const getVaga = () => {
    axiosInstance
      .get('/vaga')
      .then((res) => setVaga(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getVaga();
  }, []);

  const [vagas, setVaga] = useAtom(vaga);

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="right">ID</TableCell>
              <TableCell align="right">Preço</TableCell>
              <TableCell align="right">Setor</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Tipo</TableCell>
              <TableCell align="right">Data Locação</TableCell>
              <TableCell align="right">Cliente</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {vagas.map((dados) => (
              <TableRow key={dados.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell align="right">{dados._id}</TableCell>
                <TableCell align="right">{dados.preco}</TableCell>
                <TableCell align="right">{dados.setor}</TableCell>
                <TableCell align="right">{dados.status}</TableCell>
                <TableCell align="right">{dados.dataLocacao}</TableCell>
                <TableCell align="right">{dados.clienteId}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
