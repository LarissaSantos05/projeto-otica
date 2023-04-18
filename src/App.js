import React from 'react';
import Topo from './componentes/Topo';
import Rodape from './componentes/Rodape';
import SecaoConteudo from './componentes/SecaoConteudo';
import './App.css';

function App() {
  return (
    <div className="limitar-secao">
      <Topo />
      <SecaoConteudo />
      <Rodape />
    </div>
  );
}

export default App;
