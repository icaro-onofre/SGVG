import React, { useEffect } from 'react';
import { useAtom, atom } from 'jotai';
import { vagaId, colapsedVagaAlterar, colapsedVagaAdicionar } from 'store';
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
  const [selectedVagaId, setSelectedVagaId] = useAtom(vagaId);
  const [foldVagaAlterar, setFoldVagaAlterar] = useAtom(colapsedVagaAlterar);

  const handleSetFoldVaga = () => {
    setFoldVagaAlterar(!foldVagaAlterar);
  };

  return (
    <>
      <TableContainer component={Paper} className="bg-white dark:bg-dark_grey" style={{ maxHeight: 500 }}>
        <Table stickyHeader sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="right" className="bg-white dark:bg-dark_grey text-black dark:text-dark_white">
                ID
              </TableCell>
              <TableCell align="right" className="bg-white dark:bg-dark_grey text-black dark:text-dark_white">
                Nome
              </TableCell>
              <TableCell align="right" className="bg-white dark:bg-dark_grey text-black dark:text-dark_white">
                Preço
              </TableCell>
              <TableCell align="right" className="bg-white dark:bg-dark_grey text-black dark:text-dark_white">
                Setor
              </TableCell>
              <TableCell align="right" className="bg-white dark:bg-dark_grey text-black dark:text-dark_white">
                Estado da vaga
              </TableCell>
              <TableCell align="right" className="bg-white dark:bg-dark_grey text-black dark:text-dark_white">
                Tipo
              </TableCell>
              <TableCell align="right" className="bg-white dark:bg-dark_grey text-black dark:text-dark_white">
                Inicio da locação
              </TableCell>
              <TableCell align="right" className="bg-white dark:bg-dark_grey text-black dark:text-dark_white">
                Fim da locação
              </TableCell>
              <TableCell align="right" className="bg-white dark:bg-dark_grey text-black dark:text-dark_white">
                Cliente
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {vagas.map((dados) => (
              <TableRow
                className="dark:hover:bg-dark_blue duration-75"
                onClick={() => {
                  handleSetFoldVaga();
                  setSelectedVagaId(dados.id);
                }}
                key={dados.name}
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
                  {dados.preco}
                </TableCell>
                <TableCell align="right" className="text-black dark:text-dark_white">
                  {dados.setor}
                </TableCell>
                <TableCell align="right" className="text-black dark:text-dark_white">
                  {dados.vaga_ocupada}
                </TableCell>
                <TableCell
                  align="right"
                  className="text-black dark:text-dark_white"
                  sx={{ maxWidth: 50, overflow: 'hidden' }}
                >
                  {dados.tipo}
                </TableCell>
                <TableCell align="right" className="text-black dark:text-dark_white">
                  {dados.dataLocacao}
                </TableCell>
                <TableCell align="right" className="text-black dark:text-dark_white">
                  {dados.dataLocacaoFim}
                </TableCell>
                <TableCell align="right" className="text-black dark:text-dark_white">
                  {dados.clienteId}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
