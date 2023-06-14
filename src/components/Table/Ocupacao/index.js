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
      <TableContainer component={Paper} className="bg-white dark:bg-dark_grey">
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="right" className="bg-white dark:bg-dark_grey text-black dark:text-dark_white">
                CPF
              </TableCell>
              <TableCell align="right" className="bg-white dark:bg-dark_grey text-black dark:text-dark_white">
                Vaga
              </TableCell>
              <TableCell align="right" className="bg-white dark:bg-dark_grey text-black dark:text-dark_white">
                Placa
              </TableCell>
              <TableCell align="right" className="bg-white dark:bg-dark_grey text-black dark:text-dark_white">
                Data Locação
              </TableCell>
              <TableCell align="right" className="bg-white dark:bg-dark_grey text-black dark:text-dark_white">
                Data Locação Fim
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ocupacacaos.map((dados) => (
              <TableRow
                className="dark:hover:bg-dark_blue duration-75"
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
                <TableCell align="right" className="text-black dark:text-dark_white">
                  {dados.cpf}
                </TableCell>
                <TableCell align="right" className="text-black dark:text-dark_white">
                  {dados.vaga}
                </TableCell>
                <TableCell align="right" className="text-black dark:text-dark_white">
                  {dados.placa}
                </TableCell>
                <TableCell align="right" className="text-black dark:text-dark_white">
                  {dados.dataLocacao}
                </TableCell>
                <TableCell align="right" className="text-black dark:text-dark_white">
                  {dados.dataLocacaoFim}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
