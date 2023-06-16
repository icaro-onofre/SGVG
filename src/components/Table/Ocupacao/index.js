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
      <TableContainer component={Paper} className="bg-white dark:bg-dark_grey" style={{ maxHeight: 430 }}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow className="cursor-default">
              <TableCell align="left" className="bg-white dark:bg-dark_grey text-black dark:text-dark_white">
                Cliente
              </TableCell>
              <TableCell align="center" className="bg-white dark:bg-dark_grey text-black dark:text-dark_white">
                Vaga
              </TableCell>
              <TableCell align="center" className="bg-white dark:bg-dark_grey text-black dark:text-dark_white">
                Placa
              </TableCell>
              <TableCell align="center" className="bg-white dark:bg-dark_grey text-black dark:text-dark_white">
                Início da Locação
              </TableCell>
              <TableCell align="center" className="bg-white dark:bg-dark_grey text-black dark:text-dark_white">
                Fim da Locação
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ocupacacaos.map((dados) => (
              <TableRow
                className="dark:hover:bg-dark_blue duration-75 opacity-70 hover:opacity-100 cursor-default"
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
                <TableCell align="left" className="text-black dark:text-dark_white">
                  {dados.cpf}
                </TableCell>
                <TableCell align="center" className="text-black dark:text-dark_white">
                  {dados.vaga}
                </TableCell>
                <TableCell align="center" className="text-black dark:text-dark_white">
                  {dados.placa}
                </TableCell>
                <TableCell align="center" className="text-black dark:text-dark_white">
                  {dados.dataLocacao
                    ? new Date(dados.dataLocacao).toLocaleTimeString().substring(0, 5) +
                      ' - ' +
                      new Date(dados.dataLocacao).toLocaleDateString()
                    : '--/--'}
                </TableCell>
                <TableCell align="center" className="text-black dark:text-dark_white">
                  {dados.dataLocacaoFim
                    ? new Date(dados.dataLocacaoFim).toLocaleTimeString().substring(0, 5) +
                      ' - ' +
                      new Date(dados.dataLocacaoFim).toLocaleDateString()
                    : '--/--'}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
