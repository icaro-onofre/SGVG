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
      <TableContainer component={Paper} className="bg-white dark:bg-dark_grey" style={{ maxHeight: 430 }}>
        <Table stickyHeader sx={{ minWidth: 750 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow className="cursor-default">
              <TableCell align="left" className="bg-white dark:bg-dark_grey text-black dark:text-dark_white">
                Placa
              </TableCell>
              <TableCell align="left" className="bg-white dark:bg-dark_grey text-black dark:text-dark_white">
                Categoria
              </TableCell>
              <TableCell align="left" className="bg-white dark:bg-dark_grey text-black dark:text-dark_white">
                Cor
              </TableCell>
              <TableCell align="left" className="bg-white dark:bg-dark_grey text-black dark:text-dark_white">
                Modelo
              </TableCell>
              <TableCell align="left" className="bg-white dark:bg-dark_grey text-black dark:text-dark_white">
                Cliente
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {veiculos.map((dados) => (
              <TableRow
                className="dark:hover:bg-dark_blue duration-75 opacity-70 hover:opacity-100 cursor-default"
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
                <TableCell align="left" className="text-black dark:text-dark_white">
                  {dados.placa}
                </TableCell>
                <TableCell align="left" className="text-black dark:text-dark_white">
                  {dados.categoria}
                </TableCell>
                <TableCell align="left" className="text-black dark:text-dark_white">
                  {dados.cor}
                </TableCell>
                <TableCell align="left" className="text-black dark:text-dark_white">
                  {dados.modelo}
                </TableCell>
                <TableCell align="left" className="text-black dark:text-dark_white">
                  {dados.cpf}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
