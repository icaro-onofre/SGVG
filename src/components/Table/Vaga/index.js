import React, { useEffect } from 'react';
import { useAtom, atom } from 'jotai';
import { vagaId, colapsedVagaAlterar, colapsedVagaAdicionar, vagaData } from 'store.js';
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
  //const getVaga = () => {
  //axiosInstance
  //.get('/vaga')
  //.then((res) => setVaga(res.data))
  //.catch((err) => console.log(err));
  //};
  //
  //useEffect(() => {
  //getVaga();
  //}, []);

  const [vagas, setVaga] = useAtom(vagaData);
  const [selectedVagaId, setSelectedVagaId] = useAtom(vagaId);
  const [foldVagaAlterar, setFoldVagaAlterar] = useAtom(colapsedVagaAlterar);

  const handleSetFoldVaga = () => {
    setFoldVagaAlterar(!foldVagaAlterar);
  };

  return (
    <>
      <TableContainer component={Paper} className="bg-white dark:bg-dark_grey" style={{ maxHeight: 430 }}>
        <Table stickyHeader sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow className="cursor-default">
              <TableCell align="center" className="bg-white dark:bg-dark_grey text-black dark:text-dark_white">
                Nome
              </TableCell>
              <TableCell align="center" className="bg-white dark:bg-dark_grey text-black dark:text-dark_white">
                Setor
              </TableCell>
              <TableCell align="center" className="bg-white dark:bg-dark_grey text-black dark:text-dark_white">
                Tipo
              </TableCell>
              <TableCell align="center" className="bg-white dark:bg-dark_grey text-black dark:text-dark_white">
                Estado da vaga
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {vagas.map((a, b) => (
              <TableRow
                className="dark:hover:bg-dark_blue duration-75 opacity-70 hover:opacity-100 cursor-default"
                onClick={() => {
                  handleSetFoldVaga();
                  setSelectedVagaId(vagas[b].id);
                }}
                sx={{
                  '&:last-child td, &:last-child th': { border: 0 },
                  '&:hover': {
                    color: 'gray',
                    backgroundColor: 'lightblue',
                  },
                }}
              >
                <TableCell align="center" className="text-black dark:text-dark_white">
                  {vagas[b].nome}
                </TableCell>
                <TableCell align="center" className="text-black dark:text-dark_white">
                  {vagas[b].setor}
                </TableCell>
                <TableCell
                  align="center"
                  className="text-black dark:text-dark_white"
                  sx={{ maxWidth: 50, overflow: 'hidden' }}
                >
                  {vagas[b].tipo}
                </TableCell>
                <TableCell align="center" className="text-black dark:text-dark_white">
                  {vagas[b].status}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
