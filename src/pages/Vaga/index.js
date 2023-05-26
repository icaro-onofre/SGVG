import React, { useState, useEffect } from 'react';
import Table from 'components/Table/Vaga/';
import Button from 'components/Button';
import axiosInstance from 'services/axios';

export default function Vaga() {
  return (
    <div className="overflow-hidden h-screen  grid grid-cols-12 pt-20">
      <div className="col-start-2 col-end-12">
        <h1 className="text-2xl text-black font-bold mb-8">Vagas</h1>
        <Table />
        <div className="self-end mt-5">
          <Button value="Novo funcionário" />
        </div>
      </div>
    </div>
  );
}
