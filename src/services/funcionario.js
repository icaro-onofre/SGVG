import axios from 'axios';
import React, { useState, useEffect } from 'react';

function signIn() {
	console.log("teste");
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

export default function Home() {
	const [darkMode, setDarkMode] = useState(false);

	const [nome, setNome] = useState('');
	const [senha, setSenha] = useState('');
	function handleSetNome(event) {
		setNome(event.target.value);
	}

	return (
		<div className={darkMode ? 'dark' : 'light'}>
			<button
				className="text-3xl bg-card_red dark:bg-card_green"
				onClick={() => {
					setDarkMode(!darkMode);
				}}
			>
				Hello World
			</button>
			<form>
				<label>
					Name:
					<input type="text" name="name" onChange={handleSetNome} />
				</label>
				<input type="submit" value="Botão" onSubmit={signIn()} className="h-12 w-12 bg-card_red" />
			</form>
		</div>
	);
}
