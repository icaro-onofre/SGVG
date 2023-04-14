import axiosInstance from '../services/axios';
import React, { useState, useEffect } from 'react';

export function getVagas() {
  axiosInstance
    .get('/vaga')
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}
