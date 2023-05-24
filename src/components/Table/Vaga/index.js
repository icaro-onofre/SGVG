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
      <TableContainer component={Paper} style={{ maxHeight: 500 }}>
        <Table stickyHeader sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="right">ID</TableCell>
              <TableCell align="right">Nome</TableCell>
              <TableCell align="right">Preço</TableCell>
              <TableCell align="right">Setor</TableCell>
              <TableCell align="right">Estado da vaga</TableCell>
              <TableCell align="right">Tipo</TableCell>
              <TableCell align="right">Inicio da locação</TableCell>
              <TableCell align="right">Fim da locação</TableCell>
              <TableCell align="right">Cliente</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {vagas.map((dados) => (
              <TableRow
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
                <TableCell align="right">{dados.id}</TableCell>
                <TableCell align="right">{dados.nome}</TableCell>
                <TableCell align="right">{dados.preco}</TableCell>
                <TableCell align="right">{dados.setor}</TableCell>
                <TableCell align="right">{dados.vaga_ocupada}</TableCell>
                <TableCell align="right" sx={{ maxWidth: 50, overflow: 'hidden' }}>{dados.tipo}</TableCell>
                <TableCell align="right">{dados.dataLocacao}</TableCell>
                <TableCell align="right">{dados.dataLocacaoFim}</TableCell>
                <TableCell align="right">{dados.clienteId}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
