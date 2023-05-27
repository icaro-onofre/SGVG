import React, { useEffect } from 'react';
import axiosInstance from 'services/axios.js';
import { useAtom, atom } from 'jotai';
import { colapsedVeiculoAlterar } from 'store.js';
import { veiculoId, veiculo } from 'store.js';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function TableVeiculo(props) {
  const getVeiculo = () => {
    axiosInstance
      .get('/veiculo/')
      .then((res) => setVeiculos(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getVeiculo();
  }, []);

  const [veiculos, setVeiculos] = useAtom(veiculo);
  const [selectedVeiculoId, setSelectedVeiculoId] = useAtom(veiculoId);
  const [foldFuncioarioAlterar, setFoldVeiculoAlterar] = useAtom(colapsedVeiculoAlterar);

  // Handler para abrir o modal
  const handleSetFoldFuncioario = (_id) => {
    setFoldVeiculoAlterar(!foldFuncioarioAlterar);
  };

  console.log(veiculos);
  return (
    <>
      <TableContainer component={Paper} style={{ maxHeight: 500 }}>
        <Table stickyHeader sx={{ minWidth: 750 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="right">CPF</TableCell>
              <TableCell align="right">Placa</TableCell>
              <TableCell align="right">Categoria</TableCell>
              <TableCell align="right">Cor</TableCell>
              <TableCell align="right">Modelo</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {veiculos.map((dados) => (
              <TableRow
                onClick={() => {
                  handleSetFoldFuncioario(dados.id);
                  setSelectedVeiculoId(dados.id);
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
                <TableCell align="right">{dados.cpf}</TableCell>
                <TableCell align="right">{dados.placa}</TableCell>
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
