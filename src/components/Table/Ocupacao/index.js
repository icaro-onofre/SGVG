import React, { useEffect } from 'react';
import { useAtom, atom } from 'jotai';
import { colapsedOcupacaoAlterar, ocupacaoId, cliente } from 'store.js';
import axiosInstance from 'services/axios.js';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function TableOcupacao(props) {
  const getOcupacacao = () => {
    axiosInstance
      .get('/ocupacao')
      .then((res) => setOcupacaos(res.data))
      .catch((err) => console.log(err));
  };
  const [ocupacacaos, setOcupacaos] = useAtom(cliente);
  const [selectedOcupacaoId, setSelectedOcupacaoId] = useAtom(ocupacaoId);
  const [foldOcupacaoAlterar, setFoldOcupacaoAlterar] = useAtom(colapsedOcupacaoAlterar);

  useEffect(() => {
    getOcupacacao();
  }, []);


  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="right">CPF</TableCell>
              <TableCell align="right">Vaga</TableCell>
              <TableCell align="right">Placa</TableCell>
              <TableCell align="right">Data Locação</TableCell>
              <TableCell align="right">Data Locação Fim</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ocupacacaos.map((dados) => (
              <TableRow
                key={dados.name}
                onClick={() => {
                  setFoldOcupacaoAlterar(!foldOcupacaoAlterar);
                  setSelectedOcupacaoId(dados.id);
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
                <TableCell align="right">{dados.vaga}</TableCell>
                <TableCell align="right">{dados.placa}</TableCell>
                <TableCell align="right">{dados.dataLocacao}</TableCell>
                <TableCell align="right">{dados.dataLocacaoFim}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
