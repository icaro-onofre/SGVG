import axios from 'axios';
import React, { useState, useEffect } from 'react';

function signIn() {
	console.log('teste');
	axios
		.post('/signin', {
			nome: email,
			senha: senha,
		})
		.then(function(response) {
			localStorage.setItem(response);
		})
		.catch(function(error) {
			console.log(error);
		});
}
