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

const veiculo = atom([]);
export default function TableVaga(props) {
  const getFuncionario = () => {
    axiosInstance
      .get('/veiculo')
      .then((res) => setFuncionario(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getFuncionario();
  }, []);

  const [veiculos, setFuncionario] = useAtom(veiculo);

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Placa</TableCell>
              <TableCell align="right">Categoria</TableCell>
              <TableCell align="right">Cor</TableCell>
              <TableCell align="right">Modelo</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {veiculos.map((dados) => (
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
                <TableCell align="right">{dados._id}</TableCell>
                <TableCell align="right">{dados.categoria}</TableCell>
                <TableCell align="right">{dados.cor}</TableCell>
                <TableCell align="right">{dados.modelo}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
