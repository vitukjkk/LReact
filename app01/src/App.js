import React, { useState } from 'react';
import './App.css';

import Header from './assets/components/Header';
import Body from './assets/components/Body';
import Numero from './assets/components/Numero';
import Led from './assets/components/Led';

import GitHub from './assets/imgs/github pequeno.png';
import LinkedIn from './assets/imgs/linkedin pequeno.png';

export default function App() {
  const [num, setNum] = useState(0);
  const [ligado, setLigado] = useState(true);
  const [log, setLog] = useState(false);
  const comprimento = () => {
    const hora = new Date().getHours();
    if(hora >= 0 && hora < 13) {
      return <p>'Bom dia!'</p>;
    } else if (hora >= 13 && hora < 18) {
      return <p>'Boa tarde!'</p>;
    } else {
      return <p>'Boa noite!'</p>;
    }
  }
  return (
    <>
      <Header/>
      <Body/>
      <p>Valor do state num: {num}</p>
      <button onClick={() => setNum(num + 100)}>Incrementar</button>
      <Numero num="20"/>
      <Led ligado={ligado} setLigado={setLigado}/>
      {comprimento()}
      <p>{log ? 'Logado!' : 'Favor logar!'}</p>
      <button onClick={() => setLog(!log)}>{log ? 'Logout' : 'Login'}</button>
    </>
  )
}