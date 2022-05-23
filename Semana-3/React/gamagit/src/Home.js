import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import * as $ from './styled'

function App(props) {
  const [ usuario, setUsuario] = useState('');
  
  function handlePesquisa() {
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => {
      const repositories = response.data;
      const repositoriesName = [];
      repositories.map((repository) => {
        repositoriesName.push(repository.name);
      });
      localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
    });
  }

  return (
    <$.Container>
      <$.Input className="usuarioInput" placeholder="Usuario" value={usuario} onChange={e => setUsuario(e.target.value)}/>
      <$.Button type="button" onClick={handlePesquisa}>Pesquisar</$.Button>
    </$.Container>
  );
}

export default App;