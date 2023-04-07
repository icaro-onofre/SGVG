import axiosInstance from '../services/axios';
import React, { useState, useEffect } from 'react';

function signIn(nome, senha) {
	axiosInstance
		.post('/signin', {
			nome: nome,
			senha: senha,
		})
		.then(function(response) {
			localStorage.setItem('token', JSON.stringify(response));
			console.log(response);
		})
		.catch(function(error) {
			console.log(error);
		});
}
export default signIn;
